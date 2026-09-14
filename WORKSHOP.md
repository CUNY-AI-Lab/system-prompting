# Composing System Prompts

A scaffolded introduction to the CUNY AI Lab Sandbox, followed by the first Workspace configuration exercise. This revision retains the three-workshop sequence: Composing System Prompts → Curating Knowledge Collections → Customizing Skills & Tools.

The slides remain the presentation source. [Complete slide text](SLIDES.md), [the original HTML copy](review/before.md), and [the direct copy diff](review/copy.diff) accompany this outline.

## Outcomes

Participants will be able to use the main chat controls, compare two available base models using explicit criteria, test a system prompt while keeping the model fixed, inspect a Workspace card, and draft and test a private configuration for a course activity.

## Suggested 90-minute facilitation plan

| Time | Slides | Activity and evidence |
| --- | --- | --- |
| 0–10 | 1–6 | Access and first chat. Locate the model selector, More, Integrations, and message actions. |
| 10–25 | 7–10 | Run the same invented task through two base models. Save responses and evaluate them with the rubric. |
| 25–40 | 11–14 | Add the short sample through chat Controls. Repeat the task with the same model, then test a boundary. |
| 40–50 | 15–18 | Facilitator enables the arranged Workspace access. Inspect the sample card’s base model, system prompt, name, description, and starter suggestion. |
| 50–70 | 19–38 | Choose one disciplinary example, then draft through the five component stations. Use the outline to skip the other examples during the session. All remain in the handout. |
| 70–85 | 39–44 | Review refinements, save a private card, and test normal, incomplete, and boundary-crossing requests. Record one revision and check student access. |
| 85–90 | 45 | Share one observed success, one failure, and the next change. Bring the configuration to Knowledge Collections. |

The three disciplinary progressions are Composition (20–23), History (24–27), and Literature (28–31). These are alternatives within the session, not three mandatory demonstrations. The component stations are 34–38. Full prompts scroll on desktop and expand into the document flow on narrow screens. The Notes button contains facilitation guidance for each section.

## Before participants arrive

1. Follow the published [Getting Started guide](https://ailab.gc.cuny.edu/sandbox-docs/getting-started/). Arrange participant approval ahead of time. Individual Lab access and Workspace authoring permissions are separate.
2. Coordinate with the Lab team so the agreed Workspace permissions can be enabled at the midpoint. Do not promise that clicking a slide changes permissions. Identify who will perform this live action and allow time to refresh and troubleshoot.
3. Choose two base models that ordinary participants can access. Check them in the Sandbox selector on the workshop day. The website’s Model Registry lists API offerings; it is not a guarantee of the models available in this chat instance.
4. Prepare a card named **Writing Scaffold: Claim & Evidence** with a tested base model and the exact [sample system prompt](examples/writing-scaffold.txt). Description: “Work through one question about the link between your claim and its evidence.” Suggested starter: “Here is my assignment and draft. Help me examine my evidence.”
5. Keep the source sample under facilitator control. Give the appropriate workshop group read access to use it. Inspect it through the facilitator’s editor if participants cannot view its configuration; supply the full prompt file to everyone. Participants should create their own private versions. Do not grant write access to the shared sample just to make the exercise possible.
6. Record the sample’s base-model name in your session notes. Check the card and base-model access from an account with the same permissions as the participants. A visible card can still fail if its dependency is unavailable.
7. Test the supplied prompts before the session. Check whether personal defaults, folder instructions, Memory, or enabled features introduce extra context. Keep these consistent during comparison; record any differences you cannot control. Review default features on the new card rather than assuming it starts with no tools enabled.

This PR supplies the materials and sample text. It does not grant production permissions, create the live workshop card, or choose a base model on behalf of the facilitator.

## Access route

The current documentation links to [Request Access](https://ailab.gc.cuny.edu/request-access/?kind=individual), where individuals choose **My own access** and authenticate with CUNY Login. One application covers Lab tools; selecting a specific tool is optional. Approval comes by verified CUNY email. The participant then enters the Sandbox using **Continue with CUNY Login**. An API key is not a prerequisite for this chat exercise.

For course use, the instructor applies for **A class I’m teaching or organizing**. After approval, they obtain the invitation from **My classes**. Students join by invitation and CUNY Login, rather than submitting individual applications. Confirm the course’s private group and text channel before class. Follow the live documentation if the application changes.

## Exercise 1: Compare models

Use the [invented classroom task](examples/comparison-task.txt) with two available base models. Compare can produce parallel responses in one fresh chat. If it is unavailable, use two fresh chats with matching inputs and settings. Do not give the second model the first model’s response as additional context.

Have participants save both responses and complete the following worksheet. Use **met**, **partly met**, or **not met** for each criterion, supported by a short passage from the response. Leave results blank until the models have actually been tested.

| Criterion | Model A: judgment and evidence | Model B: judgment and evidence |
| --- | --- | --- |
| Accuracy and evidence: identifies the unsupported leap from friends to most students | | |
| Instruction following: focuses on claim and evidence and respects the requested length | | |
| Learning and usefulness: provides a usable next step and space for the student’s reasoning | | |
| Uncertainty and limits: avoids invented campus facts or sources | | |

Record model names, date, exact inputs, and enabled features. Describe a bounded conclusion: “For this task, model A was more useful because…” Repeat with a second likely student request before making a base-model choice. One response is not a stable ranking.

## Exercise 2: Test the in-chat system prompt

Keep one model fixed. In a fresh chat, open **Controls → System Prompt** and paste the [sample](examples/writing-scaffold.txt) before submitting the same task. Compare with the saved baseline. The sample asks for the assignment and draft before feedback, identifies one concern, and asks one question at a time while leaving the writing with the student.

Then try “Just rewrite the paragraph for me.” Ask whether the model redirects toward a revision step. A written constraint is a behavior to test, not a guarantee. Use the same criteria and note any new problem, including unnecessary questions when the student has already supplied the required context.

## Exercise 3: Move into Workspace

At minute 40, the facilitator confirms the agreed access change. Participants refresh and locate **Workspace → Models**. Inspect the prepared sample together: distinguish the selected **Base Model (From)** from the **System Prompt** and the name students see. Explain that this is a reusable configuration, not newly trained model weights.

Students can use a shared card from their model selector without authoring it in Workspace. The instructor configures the teaching purpose and the starting suggestions; the card gives the course a recognizable place to begin.

If Workspace is missing, pair participants with the facilitator while the Lab resolves access. Continue testing the in-chat version so the learning activity can proceed.

## Exercise 4: Draft, save, retest

Choose the Composition, History, or Literature example. The original weak-to-strong progressions are retained as models for discussion. Draft one course-specific prompt using context and problem, procedure, constraints, tone, and optional response format.

Create a private Model, choose the tested base model, enter the prompt, review capabilities and defaults, and use **Save & Create**. Start a fresh chat from the card and test:

- a normal request with enough context;
- an incomplete or ambiguous request;
- a request that asks the tool to do work the student should do;
- a claim or source the model cannot verify.

Record failures. Change one instruction, **Save & Update**, and rerun the test in a fresh chat. Test a different base model only after documenting the prompt change. Before course sharing, use **Access → Add Access** for the intended group and verify both card and base-model access with a student account. Reserve write access for maintainers. Recheck dependent Knowledge, Skills, and Tools when those are added in later workshops.

## Documentation and capture authority

- [Getting Started](https://ailab.gc.cuny.edu/sandbox-docs/getting-started/): individual and course access, CUNY Login, Workspace request, privacy and history.
- [Sandbox Basics](https://ailab.gc.cuny.edu/sandbox-docs/sandbox-basics/) and [Quick Tour](https://ailab.gc.cuny.edu/sandbox-docs/quick-tour/): message-box selector, More, Integrations, message actions, and the shared Create button.
- [Custom Models](https://ailab.gc.cuny.edu/sandbox-docs/models/): base model, System Prompt, Access, Save & Create, Save & Update, prompt suggestions.
- [System Prompts as Instructional Design](https://ailab.gc.cuny.edu/sandbox-docs/system-prompts/): role, actions, instructional boundaries, and testing.
- [Roles & Permissions](https://ailab.gc.cuny.edu/sandbox-docs/roles-permissions/): account permissions and sharing.
- [Knowledge Bases](https://ailab.gc.cuny.edu/sandbox-docs/knowledge-bases/) and [Tools & Skills](https://ailab.gc.cuny.edu/sandbox-docs/tools-skills/): the later workshops.

Published pages were fetched on September 13, 2026. Current selector, Compare, Controls, Workspace, and model-editor labels were also read directly from the signed-in Sandbox. [Screenshot provenance](review/screenshot-sources.json) records their origin and any rectangular crops. The empty editor is a read-only capture. It is not evidence that the workshop sample has been saved.

The docs describe provider requests as configured for zero retention and prohibit training use. Sandbox history can still be stored, accessible to administrators, and visible to people with whom it is shared. Use public or approved materials. Temporary Chat changes ordinary history behavior and should not be described as preventing provider processing.
