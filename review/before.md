# Before: original HTML slide copy

Source: origin/main at 6e66d3b8bb9fda75dbd3de44ccbabdd68c4a6a20

## Slide 1: Title

Composing System Prompts
A Workshop for the CUNY AI Lab Sandbox
March 16, 2026
Developed by Stefano Morello and Zach Muhlbauer

---

## Slide 2: Workshop Roadmap

Workshop Series
Three Weeks, Three Skills
March 16 — This Week
Composing System Prompts
Define how the AI thinks, responds, and engages with your students
March 23
Curating Knowledge Collections
Upload syllabi, readings, and relevant sources to ground AI models in course materials
March 30
Customizing Skills & Tools
Build specialized skills, tools, and workflows tailored to your courses

---

## Slide 3: What Is a System Prompt?

The Basics
What Is a System Prompt?
A
system prompt
is a set of instructions you write
before
a conversation begins. The user never sees it, but it shapes every response the AI gives.
Think of it as the
setup instructions
for a specialized tool: what task it handles, how it should operate, what guardrails to follow, and what’s out of scope.
Key distinction:
The
user prompt
is what someone types in the chat. The
system prompt
is what you, the instructor, compose behind the scenes to guide the AI’s behavior across the entire conversation.
Behind the curtain
✍️
Instructor
Hidden
System Prompt
“You are a writing scaffold…”
student never sees above
👤
Student
“I’m stuck on my intro…”
🤖
AI Model
Shaped by hidden system prompt
🤖
Response
“What’s the main argument you want your reader to encounter first?”
What the student sees

---

## Slide 4: Where It Lives

Open WebUI
Where It Lives
In the CUNY AI Lab Sandbox, you’ll find the system prompt field in two places:
1. Chat-Level System Prompt
Click the
settings gear
at the top of any new conversation to set a prompt for that session.
2. Model Configuration
Go to
Workspace → Models
to create a custom model with a permanent system prompt baked in.
Note:
Next time, we'll create custom models that combine your system prompt with a knowledge collection of course materials to ground the AI and situate learning in your teaching context.
Chat-Level System Prompt
Click the controls icon at the top of any conversation to open the System Prompt field.
Model Configuration — Step 1
Go to
Workspace → Models
to see all custom models. Click
+ New Model
to create one.
Model Configuration — Step 2
In the model editor, the
System Prompt
field under Model Params is where your prompt lives permanently.

---

## Slide 5: Why System Prompts Matter

Why Bother?
Why System Prompts Matter
Without System Prompt
“Here’s a strong introduction you could use: ‘Throughout history, the question of racial identity has been central to American culture. In this essay, I will argue that...’”
With System Prompt
“Let’s work through this. What’s the main argument you want your reader to encounter first? Try telling me in one sentence what your paper is really about — don’t worry about making it perfect yet.”

---

## Slide 6: Models in the Sandbox

Your Toolkit
Models in the CUNY AI Lab Sandbox
All open-weight models. No data retained on external servers. Each has different constraints and affordances.
DeepSeek V3.2
Large model; strong at working through complex, multi-step tasks
Kimi K2.5
Reads text, images, and video; good for visual and long-document tasks
GLM 5
Large model; extended step-by-step reasoning and tool use
gpt-oss-120b
OpenAI’s open-weight model; lightweight and efficient
Qwen3 235B
Large model; strong multilingual support across 100+ languages
Gemma 3 27B
Smaller, faster model; good for everyday tasks and quick responses
Llama 3.1 70B
Mid-size model; reliable general-purpose option

---

## Slide 7: Part I - The Anatomy of a Good System Prompt

Part I
The Anatomy of a Good System Prompt

---

## Slide 8: Example 1 - Composition and Writing

Example 1
Composition & Writing

---

## Slide 9: Composition - The Vague Prompt

Composition & Writing
The Vague Prompt
Weak
Help students write better.
What goes wrong?
No role assignment to contextualize the model for specific workflows or domain-knowledge
No boundaries or pedagogical guidance to constrain the model from doing work for students
No success criteria for the model to optimize toward

---

## Slide 10: Composition - Getting Warmer

Composition & Writing
Getting Warmer
Getting There
You are a writing scaffold for a college composition course. Help students develop their essays by breaking revision into structured steps. Ask them to identify their thesis before giving feedback. Don't write essays for them.
What improved?
Assigns a role and disciplinary context
Includes a basic pedagogical move
Sets one boundary
What's still missing?
No procedural instructions for
how
to give feedback
No awareness of student population or course level
No edge-case handling

---

## Slide 11: Composition - A Prompt That Fosters Revision

Composition & Writing
A Prompt That Fosters Revision
Strong
You are a writing scaffold for an English 101 composition course at a public urban university. Students are drafting a position paper on rhetoric in popular media and must revise their first draft in preparation for their final submission.

The core problem: students treat revision as proofreading, fixing grammar and word choice, rather than rethinking argument, structure, and evidence. They lack a process for examining whether their ideas are clear, well-organized, and sufficiently supported. This tool scaffolds the move from surface-level fixes to substantive revision.
Procedure:
1. Request the assignment prompt and student draft before responding.
2. Identify the highest-priority concerns (thesis clarity, structure, evidence) before surface-level issues.
3. For each concern, ask the student a question rather than providing a fix.
Constraints:
- Never generate text that could substitute for the student’s own writing. Focus on higher-order concerns like argument, structure, and evidence.
- If asked to “just fix it,” redirect toward a specific revision step.
- Do not grade or evaluate.
- Tone: Warm and direct. Use “I notice...” and “What if you tried...”

---

## Slide 12: Example 2 - Primary Source Analysis

Example 2
Primary Source Analysis

---

## Slide 13: History - The Vague Prompt

History
The Vague Prompt
Weak
Analyze historical documents.
What goes wrong?
No methodological framework
No period or geographic focus
No guidance on handling hallucinated facts or invented sources

---

## Slide 14: History - Getting Warmer

History
Getting Warmer
Getting There
You are a history source-analysis tool. Help students analyze primary sources from American history. Ask them to consider the author, audience, and context of each document. Don't just summarize the document for them.
What improved?
Assigns a role and disciplinary scope
References a real methodology
Sets a boundary against summarization
What's still missing?
No procedural steps for guiding analysis
No handling of uncertainty or AI limitations
No attention to historiographical perspective

---

## Slide 15: History - A Prompt That Fosters Historical Thinking

History
A Prompt That Fosters Historical Thinking
Strong
You are a source-analysis tool for an undergraduate U.S. history survey covering the period from Reconstruction through the Civil Rights Movement. Students must analyze primary source documents from the period and use them as the basis for a historical report.

The core problem: students extract facts from sources rather than analyzing them as constructed arguments shaped by author, audience, and context.
Procedure (based on Wineburg’s historical thinking heuristics):
1. Ask the student to identify the source (title, date, creator, document type) before proceeding.
2. Guide them through the four moves below, one at a time. Never jump ahead.
3. After each move, ask why that detail matters and prompt them to ground their response in specific passages.
4. After all four moves, ask the student to synthesize: what does the full picture reveal about this historical moment?
Four Moves:
- Sourcing — Before reading: who created this, when, and why? What can we infer about reliability and perspective?
- Contextualization — What was happening at the time and place this was produced? How does that shape its meaning?
- Close Reading — What does the text actually say — and what does it leave out, downplay, or assume?
- Corroboration — How does this source compare to others from the period? Where do accounts agree or conflict?
Constraints:
- Never offer guidance before the student has attempted an answer.
- Encourage grounding interpretations in specific passages as analysis develops.
- If unsure about a historical fact, say so. Never invent dates, names, or events.
- Never provide a complete analysis. Ask the next question a historian would ask.
- Tone: Patient and curious.

---

## Slide 16: Example 3 - Close Reading and Literary Analysis

Example 3
Close Reading & Literary Analysis

---

## Slide 17: Literature - The Vague Prompt

Literature & Cultural Studies
The Vague Prompt
Weak
Help with literary analysis.
What goes wrong?
Defaults to plot summary
No theoretical or critical framework
No requirement for textual evidence

---

## Slide 18: Literature - Getting Warmer

Literature & Cultural Studies
Getting Warmer
Getting There
You are a close-reading scaffold. Help students analyze literary texts by focusing on themes, symbolism, and narrative techniques. Don't just summarize the plot. Ask students to point to specific passages.
What improved?
Names specific analytical categories
Addresses the plot-summary problem
Requires textual evidence
What's still missing?
No procedural steps for scaffolding analysis
No critical or theoretical framework
No attention to cultural context

---

## Slide 19: Literature - A Prompt That Fosters Close Reading

Literature & Cultural Studies
A Prompt That Fosters Close Reading
Strong
You are a close-reading tool designed for an introductory English course that focuses on cultural studies and literary analysis. Students recently practiced close reading and must now select a brief literary artifact to analyze using techniques associated with New Criticism.

The core problem: students default to summarizing content or importing biographical and historical context rather than attending closely to how the text works: how language, form, imagery, and internal tension generate meaning within the artifact itself.
Procedure:
1. Ask what the student notices about the language in their chosen passage.
2. Prompt them to examine specific textual features (word choice, imagery, syntax, point of view) and how they create meaning.
3. Ask how the passage connects to the work’s larger themes and cultural moment.
4. Guide them toward an interpretive claim grounded in textual evidence.
Framework:
- Treat the text as a self-contained object. Bracket authorial intent and historical context; attend to what the language itself does.
- Look for tension, irony, paradox, and ambiguity as sites of meaning, not problems to resolve. Ask how formal elements (diction, imagery, syntax, tone) work together as a meaningful cultural artifact.
- Once a close reading is underway, invite students to reflect on the method itself: what does focusing on the text alone illuminate, and what does it leave out?
Constraints:
- Facilitate multiple interpretations grounded in textual evidence. Do not prescribe a correct reading.
- If a student reaches for biographical or historical context, redirect them back to the text: “What in the language itself supports that reading?”
Tone:
Encouraging and accessible. Affirm observations, then push deeper.

---

## Slide 20: Part II - Drafting Your System Prompt

Part II
Drafting Your System Prompt

---

## Slide 21: Core Components of a System Prompt

Structure
Core Components of a System Prompt
Each system prompt is built from modular components. We’ll draft yours one piece at a time.
Context & Problem
— What course, what students, what learning challenge?
Procedure
— What steps should the tool follow?
Constraints
— What should it refuse to do, and how should it redirect?
Tone
— What register and affect should it use with your students?
Output Format
— How should it structure its responses?

---

## Slide 22: Context and Problem

Component 1
Context & Problem
Name the tool, the course, the students, and the specific learning challenge. Everything else follows from this.
What kind of tool is this?
Who are your students?
What learning challenge does it address?
Copy
You are a [tool type] for [course name].
Students are [relevant context].

The core problem: [specific learning challenge].
Your turn:
Copy this template and fill in the placeholders. Name what the tool does, who the students are, and what learning challenge it addresses.

---

## Slide 23: Procedure

Component 2
Procedure
Tell the tool what to do, step by step. Numbered steps give the model a clear sequence rather than a loose set of suggestions.
What should the tool request before responding?
What should it prioritize?
How should it respond to each student input?
Copy
Procedure:
1. Ask the student for [specific input] before responding.
2. Identify [priority concern] before addressing [secondary concerns].
3. For each issue, [specific action, e.g. ask a question rather than fix it].
Your turn:
Copy this template and fill in the placeholders. Think about the sequence that matters for your discipline.

---

## Slide 24: Constraints

Component 3
Constraints
Define what the tool should not do and how it redirects when students push against those limits.
What will students ask it to do
for
them?
How should it redirect instead?
What uncertainty should it name explicitly?
Copy
Constraints:
- Never [specific output to avoid].
- If asked to [common student request], redirect by [specific alternative].
- If uncertain about [domain content], say so explicitly.
Your turn:
Copy this template and fill in the placeholders. Keep the tool from doing work students should do themselves.

---

## Slide 25: Tone

Component 4
Tone
One sentence on tone shapes how the tool communicates with every student it encounters.
What register fits your students?
Should it feel warm, direct, encouraging?
Are there phrases that model the right affect?
Copy
Tone: [Adjective and adjective]. Use phrases like "[example phrase]" and "[example phrase]."
Your turn:
Copy this template and fill in the placeholders. What language makes your students feel supported rather than evaluated?

---

## Slide 26: Output Format

Component 5
Output Format
Optional, but useful when consistent structure helps students know what to expect from each response.
Should each response end with a question?
Should it follow a fixed structure?
What length is appropriate?
Copy
Format each response as:
Observation: [what you notice]
Focus: [one thing to work on]
Next step: [a specific, actionable suggestion]
Question: [something for the student to consider]
Your turn:
Copy this template and fill in the placeholders. Not every prompt needs an output format section.

---

## Slide 27: Part III - Advanced Strategies and Tips

Part III
Advanced Strategies & Tips

---

## Slide 28: Going Further

Going Further
Conditional Behavior
“If the student submits a draft, focus on structure before style. If they ask a yes/no question, reframe it as an open one. If they ask you to just give them the answer, ask what they’ve tried first.”
Conversational Brevity
“Respond to one thing at a time. Do not front-load your full analysis. Ask one question, wait for the student’s response, then proceed.”
Epistemic Guardrails
“If you are not certain about a factual claim, explicitly state your uncertainty. Never fabricate citations or attribute quotes.”
Multilingual Support
“If a student writes in a language other than English, respond in that language. Offer to discuss concepts in both languages.” All seven models in the Sandbox support multilingual input and output.

---

## Slide 29: Common Pitfalls

Watch Out
Common Pitfalls
Too Long & Too Detailed
A 2,000-word system prompt can confuse the model. Aim for clarity over comprehensiveness. If it’s getting long, prioritize the most important instructions.
Contradictory Instructions
“Always give detailed feedback” + “Keep responses under 50 words” = confused AI. Read your prompt for conflicts.
Forgetting the Student’s Perspective
Your prompt shapes the student’s experience. Test it by asking the kinds of questions your students actually ask.
Set It and Forget It
System prompts need iteration. Use them in real conversations, notice what breaks, and revise. It’s a living document.

---

## Slide 30: The Road Ahead

Coming Up
The Road Ahead
March 16 — Today
System Prompts ✓
Defining how the AI thinks and teaches
March 23 — Next Week
Knowledge Collections
Upload your syllabus, readings, and relevant sources to ground AI models in course materials
March 30
Skills & Tools
Build custom skills, tools, and workflows tailored to your courses
Each workshop builds on the last. The system prompt you write today becomes the foundation for the knowledge-augmented model you build next week.
