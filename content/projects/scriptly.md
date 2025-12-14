---
  title: Scriptly
  description: An agent-based AI content strategist built with Mastra and Gemini, integrated into Telex.
  rating: 4
  role: web
  live: https://arvywebsolutions.vercel.app
  image: /images/projects/freelance.png
  technologies: [
    {name: "Typescript", icon: "logos:typescript-icon", slug: "typescript"},
  ]
---
## 🌟 Overview

**Scriptly** is an AI-powered content strategist designed to help creators, marketers, and community managers generate high-performing scripts tailored to specific platforms, audiences, and topics. It works as an **AI coworker** that lives directly inside collaboration tools, removing the friction of switching between chat apps and external AI tools.

The project solves the problem of inconsistent, time-consuming content creation by providing structured, context-aware script generation in real time. What makes Scriptly unique is its **agent-based architecture**, built with Mastra and exposed via the **A2A protocol**, allowing it to integrate seamlessly into platforms like **Telex** and beyond.

---

## 🚀 Key Features

* **Platform-aware script generation** — creates scripts optimized for platforms like TikTok, YouTube Shorts, or long-form video, improving relevance and engagement
* **AI coworker integration** — usable directly inside Telex conversations without leaving the workspace
* **Agent-based orchestration** — powered by Mastra for prompt control, reasoning flow, and extensibility
* **A2A protocol support** — enables Scriptly to be embedded into any application via simple HTTP endpoints

---

## 🛠️ Tech Stack

**Backend:** Mastra, Node.js, TypeScript
**Frontend:** Telex AI Coworker Interface
**Database:** In-memory / agent state (Mastra memory system)
**Infrastructure / DevOps:** Cloud-hosted Mastra instance
**Tools & Utilities:** Google Gemini 2.5 Flash API, A2A Protocol

---

## ⚙️ Architecture & Design

Scriptly is built as a **single intelligent agent** orchestrated by Mastra. Requests originate from Telex and are forwarded to Scriptly through Mastra's **A2A endpoint**. The agent processes inputs such as platform, topic, tone, and audience, then routes them through a structured prompt and reasoning workflow before generating the final script using the Gemini model.

Key architectural decisions include:

* Using **Mastra's agent abstraction** to avoid manual prompt and model management
* Leveraging the **A2A protocol** for platform-agnostic integrations
* Designing the agent to be stateless per request, enabling easy scalability and reuse

> Optional: Insert diagrams.

---

## 💡 My Contributions

* Designed and implemented the **Scriptly AI agent** using Mastra
* Integrated **Google Gemini 2.5 Flash** via Mastra's model routing system
* Exposed the agent through Mastra's **A2A protocol** for external integrations
* Connected Scriptly as an **AI coworker inside Telex**, enabling in-chat usage
* Defined prompt structure and content strategy logic for script generation

---

## 📈 Results / Impact

* Enabled creators to generate complete, platform-specific scripts in seconds
* Reduced context switching by embedding AI directly into the collaboration tool
* Demonstrated a reusable pattern for building and integrating AI coworkers
* Served as a reference project for agent-based application architecture

---

## 🧪 Testing & Quality Assurance

* Manual prompt and response validation across different content types
* Iterative testing within Telex to ensure reliable request/response flow
* Edge-case testing for incomplete or ambiguous user prompts

---

## 🔐 Security Considerations

* Controlled access via Telex's AI coworker permissions
* Input validation at the agent level to prevent malformed requests
* API keys and credentials managed securely within the Mastra environment

---

## 📚 What I Learned

* How to design and deploy **agent-based AI systems** using Mastra
* Practical use of the **A2A protocol** for cross-platform AI integration
* Trade-offs between stateless and memory-driven agents
* How embedded AI coworkers improve user experience compared to standalone tools

Future improvements include adding persistent memory, analytics on script performance, and support for additional platforms.

---

## 🔗 Links

* **Live Demo:** N/A
* **Source Code:** https://github.com/iamarvy/scriptly
