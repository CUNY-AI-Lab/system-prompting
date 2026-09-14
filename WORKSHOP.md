# Sandbox workshop series

Three connected workshops introduce the CUNY AI Lab Sandbox through tasks participants can inspect and revise. Composing System Prompts begins with chat controls and model comparison, then uses an in-chat system prompt to examine how instructions affect a response. Curating Knowledge Collections adds selected source material and checks the evidence behind answers. Customizing Skills & Tools adds reusable procedures and tests whether models carry out the required actions.

Teaching and research provide contexts for the work throughout. Evaluation develops through saved comparisons, source checks, and observed tool results. Participants retain inputs, configuration versions, responses, and judgments so they can explain why they changed something.

[Present the series](https://cuny-ai-lab.github.io/sandbox-series/) · [Read all slide copy](SLIDES.md) · [Browse system-prompt examples](examples.html) · [Review copy changes](review/README.md)

## Roadmap

| Workshop | Activity | Required access | Next steps |
| --- | --- | --- | --- |
| Composing System Prompts | Compare models and shape responses through instructions | Individual access approval and Sandbox sign-in | Save tested prompts; request Workspace and Knowledge access |
| Curating Knowledge Collections | Select sources and check retrieved evidence | Workshop 1 access, Workspace, Knowledge collection access | Save retrieval tests; request Skills and Tools access |
| Customizing Skills & Tools | Write procedures and inspect model actions | Workshop 1 access, Skills and Tools access; Workspace authoring for creation and editing | Save configurations; verify shared access; retest after changes |

Workshop 3 needs Knowledge access when the selected procedure retrieves from a collection. Its standalone skill and calculation exercises can be completed without a collection.

## Prepare access and materials

For individual access, follow [Getting Started](https://ailab.gc.cuny.edu/sandbox-docs/getting-started/) to the Lab’s [access application](https://ailab.gc.cuny.edu/request-access/?kind=individual). Choose **My own access**, use CUNY Login, complete the application, and check the verified CUNY email for approval. Then enter the [Sandbox](https://chat.ailab.gc.cuny.edu/) through **Continue with CUNY Login**. Participants do not need an API key for these chat exercises.

Workshop 1 requires only individual access and sign-in. The facilitator enables the arranged Workspace access during the midpoint exercise. Participants refresh, inspect the sample card, and can save their tested prompt as a private configuration. If access is delayed, participants follow the demonstration and continue testing in chat. Before Workshop 2, arrange Workspace and Knowledge access with the Lab. Before Workshop 3, arrange Skills and Tools access, including authoring permissions for participants who will create or edit resources. Confirm which base models and capabilities are available to the group.

Prepare **Question & Assumption Check** as a demonstration card using [this sample prompt](examples/assumption-check.txt) and a tested base model. The published screenshots show blank editors and do not establish that this live card has been created. Keep a plain-text copy available if the demonstration account cannot open it.

Choose two available small models for the opening demonstration. Record their exact identifiers and settings rather than treating screenshot labels as a current inventory. Check personal defaults, folder instructions, memory, and optional features that may introduce additional context. Keep these consistent during comparisons and document differences you cannot control.

Use public or approved documents for collection and skill exercises. Verify sharing through an ordinary participant account, including access to the card, base model, and attached resources. Course enrollment has a separate invitation route in the documentation; it is not a prerequisite for Workshop 1.

## Workshop 1 — Composing System Prompts

Participants compare model responses, examine assumptions, and test instructions before seeing how a Workspace card can preserve a configuration for reuse. The facilitator models the comparison process on the nurse question, then introduces the car-wash task. Participants take over that task, save a baseline, and compare it with a response shaped by an in-chat system prompt.

### Agenda

- Request individual access and sign in
- Compare small-model responses
- Test car-wash assumptions
- Revise in-chat system prompts
- Inspect Workspace configuration
- Save prompts for reuse

### Suggested 90-minute lesson plan

| Minutes | Facilitation and participant activity | Evidence to retain |
| --- | --- | --- |
| 0–10 | Introduce the series and agenda. Confirm sign-in. Locate the model selector inside the message box, More, Integrations, message actions, and Controls. | Account readiness and selected model names |
| 10–18 | Demonstrate two small models answering the nurse question. Ask participants to read both responses and identify assumptions. | Exact inputs, model identifiers, responses |
| 18–25 | Demonstrate the car-wash prompt. Show the two cropped GCDI showcase excerpts after the initial live comparison. Discuss recommendations in relation to the purpose of the trip. | Assumptions and evidence supporting each judgment |
| 25–35 | Hand off the car-wash exercise. Participants compare two models in fresh chats and save responses before adding a follow-up that states their purpose. | Baseline and follow-up responses |
| 35–45 | Keep one model fixed. Add the sample through Controls → System Prompt in a fresh chat, repeat the car-wash task, then revisit the nurse question. | Before-and-after comparison using the same criteria |
| 45–55 | Enable the arranged Workspace access. Participants refresh and inspect the prepared sample card with the facilitator. Read Base Model and System Prompt together, then connect those settings to the in-chat exercise. | Prompt text and model choice to carry forward |
| 55–75 | Discuss one disciplinary progression from the examples page. Participants adapt context, procedure, constraints, tone, and format for one teaching or research task. Keep other examples as reference material. | Draft prompt and private card when Workspace access is confirmed |
| 75–85 | Test a normal request, an incomplete request, and a request that conflicts with the intended procedure. Revise one instruction and repeat. | Failure, revision, and retest |
| 85–90 | Share one supported observation. Save prompt versions and comparison notes. Review access needed for Workshop 2. | Next question and access request |

### Opening demonstration

> The nurse yelled at the doctor because she was late. Who was late?

Send exactly this question to two small models with matching context. Ask which interpretation each response chooses and whether it acknowledges ambiguity. Either person can be the referent of “she”; the sentence does not establish a unique answer. A plausible interpretation is different from information established by the wording. Avoid turning this single item into a claim about model-wide bias or ability.

### Car-wash demonstration and handoff

> The car wash is 50 meters from me. Should I walk or take the car? Explain your reasoning.

This wording comes from the [GCDI showcase source](https://docs.google.com/presentation/d/1dwRGEe7WniZOEeMcgQ8_qygHsKFu_ZnG/edit). The original recommendation excerpts remain as archival examples with the obsolete top selector cropped out. Their Qwen labels are inconsistent, so use them to discuss responses rather than establish exact model identities or benchmark rankings. Recorded timings describe those captures only.

Ask participants to write down their interpretation of the trip’s purpose before reading the responses. If the purpose is washing the car, the car needs to get there. The wording leaves that purpose unstated. Participants then add a follow-up such as “I want to wash my car” or “I only want to ask about prices” and inspect whether the recommendation changes appropriately.

| Criterion | Model A evidence | Model B evidence |
| --- | --- | --- |
| Identify stated goal or acknowledge missing purpose | | |
| Distinguish stated facts from assumptions | | |
| Give reasons that support recommendation | | |
| Respond appropriately to clarification | | |

For the in-chat system-prompt exercise, use [Question & Assumption Check](examples/assumption-check.txt). It asks the model to examine facts and assumptions without prescribing either demonstration answer. Check whether the added instructions help, cause unnecessary questions, or fail on the second task. Retain the baseline before changing anything.

## Workshop 2 — Curating Knowledge Collections

Participants build a small collection for a known teaching or research task, inspect its documents, attach it to a model card, and check how the model uses retrieved evidence. The disciplinary examples preserve the original course contexts. A research route uses project context, task criteria, and identified source excerpts in the same exercise structure.

### Agenda

- Confirm Workspace and Knowledge access
- Select source documents
- Create knowledge collections
- Attach collections to model cards
- Check retrieved evidence
- Prepare sources for procedural tasks

### Suggested 90-minute lesson plan

| Minutes | Facilitation and participant activity | Evidence to retain |
| --- | --- | --- |
| 0–10 | Confirm individual sign-in, Workspace, Knowledge access, and the card or prompt carried from Workshop 1. Save a response before adding sources. | Baseline configuration and response |
| 10–20 | Explain extraction, passages, retrieval, and response context. Demonstrate the current Knowledge creation form. | Source-dependent question and expected passage |
| 20–35 | Discuss one collection progression. Compare what each source contributes to the task. Offer the research collection as an alternative context. | Proposed source list with reasons |
| 35–55 | Create a private collection. Upload a few documents, wait for processing, and inspect extracted text. | Document versions and extraction problems |
| 55–65 | Attach the collection under Knowledge in the model editor and use Save & Update. Keep the model and system prompt fixed. | Collection and card configuration |
| 65–80 | Test a question answered by one source, one requiring two sources, and one absent from the collection. Open cited passages and verify them. | Retrieved passages, responses, and judgments |
| 80–90 | Diagnose one failure and make one change. Check dependency access with the intended audience. Review Skills and Tools access for the next session. | Retest, access check, and next procedure |

Use the [system-prompt examples](examples.html) when a participant needs a starting configuration. Teaching participants can curate an assignment, a methodological framework, and readings. Research participants can curate a research question, codebook or protocol, and a few approved excerpts. Participants should know the sources well enough to judge the model’s claims independently.

A generic or incorrect answer can arise from processing, retrieval, access, instructions, or interpretation. Check the actual evidence before diagnosing the cause. File length alone does not determine retrieval quality. Scanned or multi-column PDFs deserve particular attention during text extraction.

### Next steps

- Save source lists and retrieval tests
- Request Skills and Tools access
- Choose recurring teaching or research procedures
- Review system-prompt examples
- Continue to Customizing Skills & Tools

## Workshop 3 — Customizing Skills & Tools

Participants turn a recurring procedure into skill instructions, connect it to a model, and test both procedure-following and actual tool use. The session distinguishes written instructions from operations that retrieve or compute information. Comparison continues through a baseline, a skill-enabled response, and inspection of tool calls and results.

### Agenda

- Confirm Skills and Tools access
- Choose recurring procedures
- Write skill instructions
- Attach skills and enable native calling
- Inspect tool calls and results
- Retest complete configurations

### Suggested 90-minute lesson plan

| Minutes | Facilitation and participant activity | Evidence to retain |
| --- | --- | --- |
| 0–10 | Confirm sign-in, Skills and Tools access, authoring permissions, and a usable card. Confirm Knowledge access only when the chosen task requires a collection. | Available dependencies and baseline |
| 10–25 | Explain skills and tools. Demonstrate the Skill editor, model attachment, native function calling, and chat Integrations. | Trigger and capability requirements |
| 25–40 | Discuss one retained disciplinary procedure. Use the research claim-checking example when relevant. | Procedure and success criteria |
| 40–60 | Draft trigger, procedure, and format. Create the skill, attach it, set Function Calling → Native, and save the model. | Skill version and model settings |
| 60–72 | Test a matching request, a follow-up, and an unrelated request. Inspect skill loading and whether the model pauses or continues as instructed. | Procedure-following evidence and failures |
| 72–82 | Demonstrate an available search or code tool. For the included median task, inspect execution and check the expected answer, 8. | Tool call, result, and final response |
| 82–90 | Revise one component, repeat its test, and verify dependency access before sharing. | Retest and unresolved case |

The small calculation uses invented values `[3, 8, 8, 12, 19]`. It introduces a result participants can verify independently. It does not establish general numerical reliability. If Code Interpreter is unavailable, use an approved search capability and verify a returned page, or follow the facilitator’s demonstration.

The cinematic-image skill includes a necessary correction to the older instructions. A vision-capable model needs the actual image. Text retrieval from a knowledge collection should not be assumed to deliver an original visual for inspection.

### Next steps

- Save prompts, sources, skills, and tool settings
- Compare expected and observed behavior
- Revise instructions from recorded failures
- Verify shared access with intended users
- Retest after model or tool updates

## Documentation and evidence

Interface instructions draw on the published [Sandbox documentation](https://ailab.gc.cuny.edu/sandbox-docs/), especially [Getting Started](https://ailab.gc.cuny.edu/sandbox-docs/getting-started/), [Quick Tour](https://ailab.gc.cuny.edu/sandbox-docs/quick-tour/), [Models](https://ailab.gc.cuny.edu/sandbox-docs/models/), [Knowledge Bases](https://ailab.gc.cuny.edu/sandbox-docs/knowledge-bases/), [Tools & Skills](https://ailab.gc.cuny.edu/sandbox-docs/tools-skills/), and [Roles & Permissions](https://ailab.gc.cuny.edu/sandbox-docs/roles-permissions/).

The live interface was inspected in Firefox on September 13, 2026. [Screenshot provenance](review/screenshot-sources.json) records source hashes and crop coordinates. [Showcase provenance](review/showcase-sources.json) distinguishes archival comparison excerpts from current interface instructions. The unrelated fourth screenshot is excluded.

Provider requests are described in the docs as configured for zero retention with training use prohibited. Sandbox history can still be stored and visible to administrators or its shared audience. Retrieved passages enter the model request and may appear in its response. Use materials appropriate for those conditions.
