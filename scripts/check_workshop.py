#!/usr/bin/env python3
"""Synchronize slide text and check source preservation; Python standard library only."""
from html.parser import HTMLParser
from pathlib import Path
import difflib
import hashlib
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
VOID = {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}

class Node:
    def __init__(self, tag='', attrs=()):
        self.tag, self.attrs, self.children = tag, dict(attrs), []
    def text(self):
        return ''.join(c.text() if isinstance(c,Node) else c for c in self.children)
    def all(self, predicate):
        found = [self] if predicate(self) else []
        for c in self.children:
            if isinstance(c,Node): found.extend(c.all(predicate))
        return found
    def has_class(self, name):
        return name in self.attrs.get('class','').split()

class Parser(HTMLParser):
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.root=Node('root'); self.stack=[self.root]; self.feed(html)
    def handle_starttag(self, tag, attrs):
        n=Node(tag,attrs); self.stack[-1].children.append(n)
        if tag not in VOID:self.stack.append(n)
    def handle_endtag(self, tag):
        for i in range(len(self.stack)-1,0,-1):
            if self.stack[i].tag==tag:
                del self.stack[i:]; break
    def handle_data(self,data): self.stack[-1].children.append(data)

def render(node):
    if isinstance(node,str): return re.sub(r'\s+',' ',node)
    tag=node.tag
    if tag in {'button','svg','script','style'} or node.has_class('progression-dots'):return ''
    if node.has_class('prompt-block'):
        return '\n\n'+chr(96)*3+'text\n'+''.join(c.text() if isinstance(c,Node) else c for c in node.children if not (isinstance(c,Node) and c.has_class('prompt-label'))).strip()+'\n'+chr(96)*3+'\n\n'
    inside=''.join(render(c) for c in node.children)
    if tag=='img':return '\n\n!['+node.attrs.get('alt','')+']('+node.attrs['src']+')\n\n'
    if tag=='a':return '['+inside.strip()+']('+node.attrs.get('href','')+')'
    if tag in {'strong','b'}:return '**'+inside.strip()+'**'
    if tag in {'em','i'}:return '*'+inside.strip()+'*'
    if tag in {'h1','h2','h3','h4'}:return '\n\n### '+inside.strip()+'\n\n'
    if tag=='br':return '\n'
    if tag=='span':return ' '+inside+' '
    if tag=='li':return '\n- '+inside.strip()+'\n'
    if tag=='table':
        rows=[]
        for row in node.all(lambda n:n.tag=='tr'):
            rows.append([render(c).strip().rstrip(' |') for c in row.children if isinstance(c,Node) and c.tag in {'th','td'}])
        if not node.all(lambda n:n.tag=='thead'):
            rows.insert(0,['Item','Record'])
        lines=['| '+' | '.join(row)+' |' for row in rows]
        lines.insert(1,'| '+' | '.join(['---']*len(rows[0]))+' |')
        return '\n\n'+'\n'.join(lines)+'\n\n'
    if tag in {'th','td'}:return inside.strip()+' | '
    if tag=='tr':return '\n| '+inside.rstrip(' |')+' |\n'
    if tag in {'p','div','section','figure','dl','dt','dd','ol','ul','table','blockquote','figcaption'}:return '\n\n'+inside.strip()+'\n\n'
    return inside

def normalize(s):return ' '.join(s.split())
def main():
    tree=Parser((ROOT/'index.html').read_text()).root
    slides=tree.all(lambda n:n.has_class('slide'))
    issues=[]
    ids=[n.attrs['id'] for n in tree.all(lambda n:'id' in n.attrs)]
    if len(ids)!=len(set(ids)):issues.append('Duplicate HTML ids')
    for i,s in enumerate(slides,1):
        if s.attrs.get('aria-label')!=f'Slide {i}: '+s.attrs['data-title']:issues.append(f'Slide {i}: incorrect label')
        for n in s.all(lambda n:'data-copy' in n.attrs):
            if n.attrs['data-copy'] not in ids:issues.append('Missing copy target')
    baseline=json.loads((ROOT/'review/preserved-prompts.json').read_text())
    preserved_copy=json.loads((ROOT/'review/preserved-copy.json').read_text())
    for old, record in preserved_copy.items():
        matching=[s for s in slides if s.attrs.get('data-source-slide')==old]
        if len(matching)!=1:
            issues.append(f'Original section {old}: missing or duplicated');continue
        expected=record['before']; actual=matching[0].text()
        for edit in record['allowed_replacements']:
            expected=expected.replace(edit['before'],edit['after'])
        for addition in record['allowed_additions']:
            actual=actual.replace(addition,'')
        if re.sub(r'\s+','',expected)!=re.sub(r'\s+','',actual):
            issues.append(f'Original section {old}: unrecorded copy change')
    preserved=0
    for old, expected in baseline.items():
        matching=[s for s in slides if s.attrs.get('data-source-slide')==old]
        if len(matching)!=1:issues.append(f'Original slide {old}: missing or duplicated');continue
        actual=[n.text() for n in matching[0].all(lambda n:n.has_class('prompt-block'))]
        if old=='19':expected=[x.replace('larger themes and cultural moment','larger themes') for x in expected]
        if list(map(normalize,actual))!=list(map(normalize,expected)):issues.append(f'Original slide {old}: unrecorded prompt change')
        else:preserved+=len(expected)
    text=' '.join(s.text() for s in slides)
    for obsolete in ['March 16','March 23','March 30','All seven models','No data retained on external servers','student never sees above','settings gear','2,000-word']:
        if obsolete in text:issues.append('Obsolete copy: '+obsolete)
    for sample,id in [('assumption-check.txt','sample-system'),('comparison-task.txt','comparison-task')]:
        node=tree.all(lambda n:n.attrs.get('id')==id)[0]
        if node.text().strip()!=(ROOT/'examples'/sample).read_text().strip():issues.append('Sample file drift: '+sample)
    for n in tree.all(lambda n:n.tag in {'img','script','link','a'}):
        target=n.attrs.get('src') or n.attrs.get('href','')
        if target and not re.match(r'^(https?:|mailto:|#)',target):
            path=target.split('#')[0].split('?')[0]
            if path and not (ROOT/path).exists():issues.append('Missing local resource: '+path)
    header='# Composing System Prompts\n\nCUNY AI Lab Sandbox workshop. Generated from index.html; do not edit this mirror directly.\n\n'
    mirror=header+'\n\n---\n\n'.join(f'## Slide {i}: '+s.attrs['data-title']+'\n\n'+re.sub(r'\n{3,}','\n\n',render(s)).strip() for i,s in enumerate(slides,1))+'\n'
    mirror=re.sub(r'\n{3,}','\n\n','\n'.join(line.rstrip() for line in mirror.splitlines()))+'\n'
    before=(ROOT/'review/before.md').read_text()
    diff=''.join(difflib.unified_diff(before.splitlines(True),mirror.splitlines(True),fromfile='before: original HTML copy',tofile='after: revised HTML copy'))
    if '--write' in sys.argv:
        (ROOT/'SLIDES.md').write_text(mirror)
        (ROOT/'review/copy.diff').write_text(diff)
        manifest=ROOT/'review/screenshot-sources.json'
        m=json.loads(manifest.read_text())
        for image in m['images']: image['sha256']=hashlib.sha256((ROOT/'images/current'/image['file']).read_bytes()).hexdigest()
        manifest.write_text(json.dumps(m,indent=2)+'\n')
    else:
        if (ROOT/'SLIDES.md').read_text()!=mirror:issues.append('SLIDES.md is out of sync; run --write')
        if (ROOT/'review/copy.diff').read_text()!=diff:issues.append('Copy diff is out of sync; run --write')
    print(f'{len(slides)} slides; {len(preserved_copy)} original sections and {preserved} prompt blocks checked; samples and local resources checked.')
    if issues:print('\n'.join(issues));return 1
    print('Content checks passed.');return 0

if __name__=='__main__':raise SystemExit(main())
