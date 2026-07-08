# Flowst AI — Miro → Nyx → Amira Product Flow

**Product:** Flowst AI  
**Flow Name:** Learn it. See it. Own it.  
**Agents:** Miro, Nyx, Amira  
**Purpose:** Define the premium learning flow where Miro organizes the learning journey, Nyx teaches the theory, Amira turns the learner’s mental model into images, and Miro assesses progress.

---

## 1. Core Idea

Flowst should not feel like a normal AI tutor that only answers questions.

The core Flowst learning loop is:

> **Learn it with Nyx. See it with Amira. Own it with Miro.**

This gives Flowst a clear educational structure:

1. **Miro** organizes the learning goal only on premium.
2. **Nyx** teaches the concept with the goal to help the user communicate clearly free but limited usage, Pro plan unlock more usage.
3. **Amira** turns concepts into personalized mental models then into a visual images only avaliable on with Premium plan.
4. **Miro** evaluates what the user understood, remembered, and should review next.

---

## 2. Agent Roles

| Agent | Role | Main Output |
|---|---|---|
| Miro | Orchestrator, memory, study guide, assessment | Study path, questions, score, next step |
| Nyx | Theory and concept clarity | vocalization, clear vocal explanations | communicative and can be used to improve speaking and vocal communication
| Amira | Visual interpretation and image refinement | Generated image, visual memory anchor, Mental model, concept map |

---

## 3. Full Premium Flow

```txt
User starts with Miro
↓
Miro asks for learning goal
↓
User enters goal or uploads document
↓
Miro extracts context and creates study questions
↓
Miro sends user to Nyx
↓
Nyx teaches theory and helps user create a mental model
↓
Miro receives Nyx output
↓
Miro sends the mental model to Amira
↓
Amira generates and refines concept images
↓
User compares image with their mental model
↓
Amira helps user refine the visual
↓
Miro assesses understanding, visual clarity, and recall readiness
↓
Miro stores progress and weak points
↓
Miro shows reward summary and next step
```

---

## 4. Miro’s Role

Miro starts the premium experience.

Miro can:

- collect the user’s learning goal
- ask clarifying questions
- accept uploaded documents or notes
- extract key concepts from documents
- turn content into study questions
- decide which agent should teach first
- send the user to Nyx for theory
- pass Nyx’s output to Amira
- assess the final result
- store weak points and progress
- generate a reward summary

Miro is the agent that keeps the full learning journey connected.

---

## 5. Nyx’s Role

Nyx handles the Vocal phase.

Nyx helps the user:

- understand the topic
- break the concept into parts
- see how the parts connect
- practice explaining the concept in words


### Nyx Output

Nyx should produce:

- concept summary
- key terms
- relationship between ideas
- user’s first explanation
- improved explanation
- learner-created mental model
- weak points noticed especially in vocal expression

---

## 6. Amira’s Role

Amira handles the visual phase.

helps user create their own mental model

Amira should not be only an image generator. She should be a **visual learning agent** powered by image generation.

Amira takes the learner’s mental model from Nyx and uses it to create visual representations.

Amira helps the user:

- see the concept as an image
- compare the generated image with their own mental model
- refine the image
- explain what the image means
- strengthen visual memory
- create a picture-based anchor for retention

### Amira Output

Amira should produce:

- generated concept image
- refined image prompt
- visual explanation
- what the image represents
- what the user changed or corrected
- visual memory anchor
- image-based recall prompt

---

## 7. Miro’s Assessment

After Nyx and Amira, Miro checks:

- theory understanding
- visual understanding
- recall readiness
- clarity of explanation
- weak points
- next review item
- best next agent

### Suggested Score Breakdown

| Score Area | Meaning |
|---|---|
| Theory Clarity | How well the user understands the concept |
| Vcal Clarity | How well the user Explains the concept |
| Mental Model Strength | How well the user connected the ideas |
| Visual Mapping | How well the image matches the concept |
| Recall Readiness | How ready the user is to remember later |
| Expression Clarity | How clearly the user can explain it |

---

## 8. Example Flow: Nxy

### User Goal

> I want to Communicate better.


### Nyx free version Plan
- suggests a few area of interests they are to start with which are most comfortable for them
- sugests time based session
- Session starts conversational style 
- Nyx accesses them with area for improvements, sugguests they return to try session again
- nyx then suggests Miro for well cordinated plan for a goal based mission with rewards.

## 9. Example Flow: Premium Flow

### User Goal

> User picks a goal.

### Miro

Miro creates a study path:

example

1. What is an API?
2. What makes an API RESTful?
3. What are endpoints?
4. What are HTTP methods?
5. What is request-response flow?

### Nyx

Nyx teaches the theory using  mental model and encourages vocalization:

> Think of a REST API like a restaurant ordering system. The client makes a request, the server receives it, and a response comes back, now tell me how you would describe it in your terms with things you've encoutered in the real world.

### Amira

Amira generates a visual of:

- client device
- request path
- endpoint
- server
- response path
- HTTP methods

Amira asks:

> Does this image match how you now see REST APIs? Tell me how you picture Rest APIs and i generate an image for it?

### Miro

Miro assesses and scores:

- Theory Clarity: 78%
- Mental Model Strength: 81%
- Visual Mapping: 74%
- Recall Readiness: 66%

Miro recommends:

> You've learnt REST APIs, share your progress then come back tomorrow to learn what Endpoints are.


---

## 10. Final Product Positioning

> **Flowst helps learners understand a concept, turn it into a picture, and prove what they remember.**

Short version:

> **Learn it. See it. Own it.**
