# Composing System Prompts

CUNY AI Lab Sandbox workshop. Generated from index.html; do not edit this mirror directly.

## Slide 1: Composing System Prompts

Workshop 1 of 3

### Composing System Prompts

Explore the chat. Compare models.
Build a classroom tool.

CUNY AI Lab Sandbox

Developed by Stefano Morello and Zach Muhlbauer

---

## Slide 2: Three workshops, one teaching project

### Three workshops,
one teaching project

- **Composing System Prompts**Compare models, test instructions, and configure a classroom tool.

- **Curating Knowledge Collections**Ground the tool in readings, assignments, and course materials.

- **Customizing Skills & Tools**Add reusable procedures and capabilities for your course.

Today: chat → comparison → system prompt → Workspace → testing.

---

## Slide 3: Get access, then sign in

### Get access, then sign in

- Open the [access application](https://ailab.gc.cuny.edu/request-access/?kind=individual) and choose **My own access**.

- Use **CUNY Login**, complete the application, and watch your verified CUNY email for approval.

- Open [the Sandbox](https://chat.ailab.gc.cuny.edu/) and select **Continue with CUNY Login**.

Individual access lets you use shared resources. Workspace access is arranged separately for today’s exercise.

[Getting Started](https://ailab.gc.cuny.edu/sandbox-docs/getting-started/)

![Current access application with individual and class choices](images/current/access-application.png)

The access choices linked from the published Sandbox documentation.

---

## Slide 4: Course access follows an invitation

### Course access follows
an invitation

### Instructors

Request access for **A class I’m teaching or organizing**. After approval, open **My classes** and create the invitation link.

### Students

Join through the instructor’s invitation and CUNY Login. Students do not submit an individual access request.

Confirm the course’s private group and text channel before beginning a class activity.

[Access and course enrollment](https://ailab.gc.cuny.edu/sandbox-docs/getting-started/)

---

## Slide 5: Start in the message box

### Start in the
message box

Select the model name **on the right inside the message box**.

Type a request, send it, then ask a follow-up. Open **New Chat** when you want to begin with fresh conversation history.

[Quick Tour](https://ailab.gc.cuny.edu/sandbox-docs/quick-tour/)

![Current Sandbox new chat with the model selector inside the message box](images/current/chat-page.png)

Current Sandbox. Model names and available controls depend on your account.

---

## Slide 6: A few controls to try first

### A few controls to try first

More (+)

Add a file or other context to this chat.

Integrations

Choose available tools, skills, and capabilities.

Message actions

Copy, edit, or regenerate where available. A regenerated answer can differ.

For the first comparison, use the supplied text and keep optional capabilities unchanged.

[Sandbox Basics](https://ailab.gc.cuny.edu/sandbox-docs/sandbox-basics/)

---

## Slide 7: Compare the models you can use

### Compare the models
you can use

Open the model selector. Turn on **Compare**, then choose two available base models.

If Compare is unavailable, use two fresh chats with the same task and settings.

Switching models midway carries the conversation history forward. Use fresh chats for a clearer initial comparison.

![Current model selector with search and the Compare toggle](images/current/model-selector.png)

Compare is in the model selector. This capture is filtered to show base-model entries.

---

## Slide 8: One task, two responses

### One task, two responses

Use this invented classroom example in both models.

```text
Assignment: Write a paragraph arguing for a change on your campus, using evidence to support the claim.

Draft: The library should stay open later because students need more time to study. My friends agree, so most students must want this change.

Give me feedback on the link between my claim and my evidence. Keep your response under 120 words.
```

Record the model names, date, prompt, and enabled features. Save each response before revising anything.

---

## Slide 9: Evaluate what the response does

### Evaluate what the response does

| Criterion | Look for evidence in the response |
| --- | --- |
| Accuracy & evidence | Does it notice that friends’ opinions do not establish what most students want? |
| Instruction following | Does it focus on claim and evidence, within the requested length? |
| Learning & usefulness | Does it offer a workable next step while leaving the student room to think? |
| Uncertainty & limits | Does it avoid inventing campus facts or sources? |

For each criterion: met, partly met, or not met. Quote a short passage to explain your judgment.

---

## Slide 10: Make a claim you can support

### Make a claim you can support

“For this task, model A was more useful because…”

- Name a difference you can point to in the responses.

- Separate a preferred writing style from a factual or instructional improvement.

- Repeat with another likely student request before choosing a base model.

A small comparison informs a teaching choice. It does not establish that one model is best at every task.

---

## Slide 11: What is a system prompt?

### What is a system prompt?

A system prompt gives the model instructions for its role, actions, boundaries, and response style.

### User prompt

The request someone types into the conversation.

### System prompt

The guidance you configure to shape how the model responds across that conversation.

Instructions guide behavior but do not guarantee it. A system prompt is not a secure place to hide sensitive information.

[System Prompts as Instructional Design](https://ailab.gc.cuny.edu/sandbox-docs/system-prompts/)

---

## Slide 12: Try the guidance in a chat

### Try the guidance
in a chat

- Open a fresh chat with one of the models you compared.

- Select **Controls** at the top right.

- Enter the sample in **System Prompt** before sending the task.

Use the conversation’s Controls for this exercise. Personal defaults under Settings have a wider scope.

![Current chat Controls panel with its System Prompt field](images/current/chat-controls.png)

The System Prompt field in a new chat. Sample text follows on the next slide.

---

## Slide 13: A small prompt to test

### A small prompt to test

```text
You are a writing scaffold for an English 101 composition course. Help students examine the link between a claim and its evidence.

Procedure:
1. Ask for the assignment and a short draft before giving feedback.
2. Identify one concern about the claim or evidence.
3. Ask one question, then wait for the student to respond.

Constraints:
- Do not write or rewrite the student's sentences.
- If asked to "just fix it," offer a specific revision step.
- Do not invent sources or grade the work.
- Tone: Warm and direct.
```

Notice the role, three procedural steps, and specific boundaries. You will inspect the same sample in Workspace.

---

## Slide 14: Hold the model steady

### Hold the model steady

- Repeat the same task with the same base model, now using the sample system prompt.

- Use the same evaluation criteria. Compare against the response you saved earlier.

- Test a boundary: **“Just rewrite the paragraph for me.”**

Ask what the added instructions changed, and what they failed to change. Keep personal defaults and optional features consistent.

---

## Slide 15: Now open Workspace

### Now open Workspace

The facilitator enables Workspace access for this exercise.

- Refresh the Sandbox after access is confirmed.

- Open **Workspace** from the sidebar or account menu.

- Select **Models** and find the workshop’s sample card.

If Workspace is missing, pause here for the facilitator. You can continue testing the same prompt in chat while access is resolved.

[Custom Models](https://ailab.gc.cuny.edu/sandbox-docs/models/)

---

## Slide 16: A place to configure the tool

### A place to configure the tool

![Current Workspace header with Models, Knowledge, Prompts, Skills, Tools, and Create](images/current/workspace-header.png)

The shared Create button acts on the selected Workspace tab.

### Models

Open the prepared sample, or choose **Create** to configure your own.

### Later in the series

Knowledge adds sources. Skills and Tools extend the methods and capabilities available to the model.

---

## Slide 17: Read the configuration together

### Read the configuration
together

- **Name:** what students will recognize.

- **Base Model:** what generates the responses.

- **System Prompt:** how you want it to respond.

A custom model combines these choices. Creating it does not train a new base model.

[The model editor](https://ailab.gc.cuny.edu/sandbox-docs/models/)

![Current model creation form showing Name, Base Model, and System Prompt](images/current/model-editor.png)

Read-only capture of the editor. The facilitator prepares the named sample before the workshop.

---

## Slide 18: Give students a clear starting point

### Give students a clear starting point

Card name

Writing Scaffold: Claim & Evidence

Description

Work through one question about the link between your claim and its evidence.

Starter suggestion

“Here is my assignment and draft. Help me examine my evidence.”

Students open the shared card from their model selector. Workspace is where its authors configure the base model and instructions.

---

## Slide 19: The Anatomy of a Good System Prompt

Examples

### The Anatomy of a Good System Prompt

---

## Slide 20: Composition & Writing

Example 1

### Composition & Writing

---

## Slide 21: The Vague Prompt

Composition & Writing

### The Vague Prompt

```text
WeakHelp students write better.
```

### What goes wrong?

- No role assignment to contextualize the model for specific workflows or domain-knowledge

- No boundaries or pedagogical guidance to constrain the model from doing work for students

- No success criteria for the model to optimize toward

---

## Slide 22: Getting Warmer

Composition & Writing

### Getting Warmer

```text
Getting ThereYou are a writing scaffold for a college composition course. Help students develop their essays by breaking revision into structured steps. Ask them to identify their thesis before giving feedback. Don't write essays for them.
```

### What improved?

- Assigns a role and disciplinary context

- Includes a basic pedagogical move

- Sets one boundary

### What's still missing?

- No procedural instructions for *how* to give feedback

- No awareness of student population or course level

- No edge-case handling

---

## Slide 23: A Prompt That Fosters Revision

Composition & Writing

### A Prompt That Fosters Revision

```text
StrongYou are a writing scaffold for an English 101 composition course at a public urban university. Students are drafting a position paper on rhetoric in popular media and must revise their first draft in preparation for their final submission.

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
```

Full prompt: scroll to read. The complete text is also in the workshop handout.

---

## Slide 24: Primary Source Analysis

Example 2

### Primary Source Analysis

---

## Slide 25: The Vague Prompt

History

### The Vague Prompt

```text
WeakAnalyze historical documents.
```

### What goes wrong?

- No methodological framework

- No period or geographic focus

- No guidance on handling hallucinated facts or invented sources

---

## Slide 26: Getting Warmer

History

### Getting Warmer

```text
Getting ThereYou are a history source-analysis tool. Help students analyze primary sources from American history. Ask them to consider the author, audience, and context of each document. Don't just summarize the document for them.
```

### What improved?

- Assigns a role and disciplinary scope

- References a real methodology

- Sets a boundary against summarization

### What's still missing?

- No procedural steps for guiding analysis

- No handling of uncertainty or AI limitations

- No attention to historiographical perspective

---

## Slide 27: A Prompt That Fosters Historical Thinking

History

### A Prompt That Fosters Historical Thinking

```text
StrongYou are a source-analysis tool for an undergraduate U.S. history survey covering the period from Reconstruction through the Civil Rights Movement. Students must analyze primary source documents from the period and use them as the basis for a historical report.

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
```

Full prompt: scroll to read. The complete text is also in the workshop handout.

---

## Slide 28: Close Reading & Literary Analysis

Example 3

### Close Reading & Literary Analysis

---

## Slide 29: The Vague Prompt

Literature & Cultural Studies

### The Vague Prompt

```text
WeakHelp with literary analysis.
```

### What goes wrong?

- Defaults to plot summary

- No theoretical or critical framework

- No requirement for textual evidence

---

## Slide 30: Getting Warmer

Literature & Cultural Studies

### Getting Warmer

```text
Getting ThereYou are a close-reading scaffold. Help students analyze literary texts by focusing on themes, symbolism, and narrative techniques. Don't just summarize the plot. Ask students to point to specific passages.
```

### What improved?

- Names specific analytical categories

- Addresses the plot-summary problem

- Requires textual evidence

### What's still missing?

- No procedural steps for scaffolding analysis

- No critical or theoretical framework

- No attention to cultural context

---

## Slide 31: A Prompt That Fosters Close Reading

Literature & Cultural Studies

### A Prompt That Fosters Close Reading

```text
StrongYou are a close-reading tool designed for an introductory English course that focuses on cultural studies and literary analysis. Students recently practiced close reading and must now select a brief literary artifact to analyze using techniques associated with New Criticism.

The core problem: students default to summarizing content or importing biographical and historical context rather than attending closely to how the text works: how language, form, imagery, and internal tension generate meaning within the artifact itself.

Procedure:
1. Ask what the student notices about the language in their chosen passage.
2. Prompt them to examine specific textual features (word choice, imagery, syntax, point of view) and how they create meaning.
3. Ask how the passage connects to the work’s larger themes.
4. Guide them toward an interpretive claim grounded in textual evidence.

Framework:
- Treat the text as a self-contained object. Bracket authorial intent and historical context; attend to what the language itself does.
- Look for tension, irony, paradox, and ambiguity as sites of meaning, not problems to resolve. Ask how formal elements (diction, imagery, syntax, tone) work together as a meaningful cultural artifact.
- Once a close reading is underway, invite students to reflect on the method itself: what does focusing on the text alone illuminate, and what does it leave out?

Constraints:
- Facilitate multiple interpretations grounded in textual evidence. Do not prescribe a correct reading.
- If a student reaches for biographical or historical context, redirect them back to the text: “What in the language itself supports that reading?”

Tone: Encouraging and accessible. Affirm observations, then push deeper.
```

Full prompt: scroll to read. The complete text is also in the workshop handout.

---

## Slide 32: Drafting Your System Prompt

Drafting exercise

### Drafting Your System Prompt

---

## Slide 33: Core Components of a System Prompt

Structure

### Core Components of a System Prompt

Each system prompt is built from modular components. We’ll draft yours one piece at a time.

- **Context & Problem** — What course, what students, what learning challenge?

- **Procedure** — What steps should the tool follow?

- **Constraints** — What should it refuse to do, and how should it redirect?

- **Tone** — What register and affect should it use with your students?

- **Output Format** — How should it structure its responses?

---

## Slide 34: Context & Problem

Component 1

### Context & Problem

Name the tool, the course, the students, and the specific learning challenge. Everything else follows from this.

- What kind of tool is this?

- Who are your students?

- What learning challenge does it address?

```text
You are a [tool type] for [course name].
Students are [relevant context].

The core problem: [specific learning challenge].
```

**Your turn:** Copy this template and fill in the placeholders. Name what the tool does, who the students are, and what learning challenge it addresses.

---

## Slide 35: Procedure

Component 2

### Procedure

Tell the tool what to do, step by step. Numbered steps give the model a clear sequence rather than a loose set of suggestions.

- What should the tool request before responding?

- What should it prioritize?

- How should it respond to each student input?

```text
Procedure:
1. Ask the student for [specific input] before responding.
2. Identify [priority concern] before addressing [secondary concerns].
3. For each issue, [specific action, e.g. ask a question rather than fix it].
```

**Your turn:** Copy this template and fill in the placeholders. Think about the sequence that matters for your discipline.

---

## Slide 36: Constraints

Component 3

### Constraints

Define what the tool should not do and how it redirects when students push against those limits.

- What will students ask it to do *for* them?

- How should it redirect instead?

- What uncertainty should it name explicitly?

```text
Constraints:
- Never [specific output to avoid].
- If asked to [common student request], redirect by [specific alternative].
- If uncertain about [domain content], say so explicitly.
```

**Your turn:** Copy this template and fill in the placeholders. Keep the tool from doing work students should do themselves.

---

## Slide 37: Tone

Component 4

### Tone

One sentence on tone shapes how the tool communicates with every student it encounters.

- What register fits your students?

- Should it feel warm, direct, encouraging?

- Are there phrases that model the right affect?

```text
Tone: [Adjective and adjective]. Use phrases like "[example phrase]" and "[example phrase]."
```

**Your turn:** Copy this template and fill in the placeholders. What language makes your students feel supported rather than evaluated?

---

## Slide 38: Output Format

Component 5

### Output Format

Optional, but useful when consistent structure helps students know what to expect from each response.

- Should each response end with a question?

- Should it follow a fixed structure?

- What length is appropriate?

```text
Format each response as:
Observation: [what you notice]
Focus: [one thing to work on]
Next step: [a specific, actionable suggestion]
Question: [something for the student to consider]
```

**Your turn:** Copy this template and fill in the placeholders. Not every prompt needs an output format section.

---

## Slide 39: Advanced Strategies & Tips

Refine

### Advanced Strategies & Tips

---

## Slide 40: Going Further

### Going Further

### Conditional Behavior

“If the student submits a draft, focus on structure before style. If they ask a yes/no question, reframe it as an open one. If they ask you to just give them the answer, ask what they’ve tried first.”

### Conversational Brevity

“Respond to one thing at a time. Do not front-load your full analysis. Ask one question, wait for the student’s response, then proceed.”

### Epistemic Guardrails

“If you are not certain about a factual claim, explicitly state your uncertainty. Never fabricate citations or attribute quotes.”

### Multilingual Support

“If a student writes in a language other than English, respond in that language. Offer to discuss concepts in both languages.” Test language support with the base model and languages your students will use.

---

## Slide 41: Common Pitfalls

Watch Out

### Common Pitfalls

### Too Long & Too Detailed

Keep instructions clear and check for conflicts. If the prompt grows, prioritize its essential procedures and test whether the model follows them.

### Contradictory Instructions

“Always give detailed feedback” + “Keep responses under 50 words” = confused AI. Read your prompt for conflicts.

### Forgetting the Student’s Perspective

Your prompt shapes the student’s experience. Test it by asking the kinds of questions your students actually ask.

### Set It and Forget It

System prompts need iteration. Use them in real conversations, notice what breaks, and revise. It’s a living document.

---

## Slide 42: Save a private version, then test

### Save a private version, then test

- In **Workspace → Models → Create**, name the card, choose your tested base model, and add your prompt.

- Keep **Access** set to **Private**. Choose **Save & Create**.

- Start a fresh chat from the card. Repeat a normal request, an incomplete request, and a request that crosses a boundary.

Revise one instruction, use Save & Update, then repeat the test in a fresh chat. Record the result before changing the base model.

---

## Slide 43: Check the student experience

### Check the student experience

- Use **Access → Add Access** to share with the intended course group when the card is ready.

- Give students read access; reserve write access for the people maintaining the configuration.

- Check that the intended audience can use the card and its base model. Verify with a student account before class.

A pinned or selected card helps students find it. Access permissions determine whether it works for them.

[Roles & Permissions](https://ailab.gc.cuny.edu/sandbox-docs/roles-permissions/)

---

## Slide 44: Keep a record of your decisions

### Keep a record of your decisions

Leave with a tested prompt, a base-model choice, and one question to investigate next.

| Item | Record |
| --- | --- |
| Configuration | Card name, base model, system prompt version, date. |
| Test | User request, enabled features, saved response. |
| Judgment | Criterion, passage from the response, reason for revising or retaining the prompt. |

Use public or approved material. The docs describe zero-retention provider requests, while Sandbox chats may be stored and accessible to administrators or their shared audience.

[Privacy and chat history](https://ailab.gc.cuny.edu/sandbox-docs/getting-started/) · [Facilitator outline and worksheet](WORKSHOP.md)

---

## Slide 45: Bring this configuration to the next workshop

### Bring this configuration
to the next workshop

- **Composing System Prompts**A tested base model and instructions for a learning task.

- **Curating Knowledge Collections**Add the sources the tool needs, then check its use of evidence.

- **Customizing Skills & Tools**Add procedures and capabilities, then test their effects.

[Sandbox documentation](https://ailab.gc.cuny.edu/sandbox-docs//) · [Complete slide text](SLIDES.md) · [Sample prompt](examples/writing-scaffold.txt)
