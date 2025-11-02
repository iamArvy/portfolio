---
title:  Building Scriptly - An AI Content Strategist Using Mastra, Gemini API, and Telex
slug: building-scriptly-ai-content-strategist-mastra-gemini-telex
publishedAt: "November 2, 2025"
---
# Building **Scriptly** - An AI Content Strategist Using Mastra, Gemini API, and Telex

## Introduction

In this post, I'll walk you through how I built **Scriptly**, an AI content strategist that writes high-performing scripts tailored to your platform, topic, and audience. The project combines three powerful technologies — **Mastra**, **Google's Gemini API**, and **Telex** — to create a seamless, integrated AI coworker experience.

---

## What is Telex?

**Telex** is a platform for creating online communities — think of it like **Slack**, but designed for a less corporate, more personal and creative audience. It's perfect for building small groups, creator hubs, or learning communities. What makes Telex even more exciting is its **AI coworker** feature — intelligent assistants you can integrate directly into your workspace to help automate tasks or provide insights.

For this project, I integrated **Scriptly** into Telex as an AI coworker. This allows users to generate engaging content ideas, draft scripts, or refine their writing directly within their Telex community — without leaving the chat environment.

---

## What is Mastra?

**Mastra** is a framework for building, deploying, and managing AI agents. It abstracts away the complexity of model orchestration, prompt management, and workflow coordination, so developers can focus on building powerful, intelligent systems.

Mastra comes with tools for **memory management**, **agent-to-agent communication**, and a flexible **A2A (Agent-to-Agent)** protocol that lets agents interact across applications. This made it ideal for connecting Scriptly to Telex.

---

## Integrating Mastra and Gemini API

For the AI engine, I used **Google's Gemini 2.5 Flash** model, accessed directly through Mastra's in-built **model routing system**. Instead of managing API calls manually, Mastra lets you specify the model name in the configuration — in this case:

```ts
model: 'google/gemini-2.5-flash'
```

This made it simple to connect Scriptly's reasoning and content generation capabilities to Gemini's high-performance API for language understanding and creative writing.

The agent was configured with Mastra's `Agent` class and wrapped in a weather-style workflow for testing before expanding it into the full **Scriptly** content strategist.

---

## Integrating Scriptly into Telex

The integration was done using Telex's **AI coworker system**. By connecting Mastra's **A2A protocol** endpoint to Telex, I could expose Scriptly as an external AI coworker that users can interact with inside the Telex app.

When users prompt Scriptly — for example, asking for a TikTok script on productivity — Telex forwards the request to Mastra, where Scriptly processes it via the Gemini model, then sends the completed script back to Telex. This flow is powered entirely by Mastra's agent orchestration and routing system.

---

## The A2A Protocol - Integrate Scriptly Anywhere

One of Mastra's most powerful features is its **A2A (Agent-to-Agent)** protocol. It allows any app to communicate with an AI agent hosted on Mastra through simple HTTP endpoints. This means **you can integrate Scriptly (or any Mastra agent)** into your own application — whether that's a chatbot, dashboard, or mobile app — with just a few lines of configuration.

Example setup for an A2A node in a workflow:

```json
{
  "id": "scriptly_agent",
  "type": "a2a/mastra-a2a-node",
  "url": "https://your-mastra-instance.cloud/a2a/agent/scriptly"
}
```

With this, Scriptly becomes instantly accessible to your users wherever they are.

---

## Conclusion

**Scriptly** demonstrates how easy it is to build and deploy AI-powered experiences using the **Mastra framework**, integrate advanced models like **Gemini 2.5 Flash**, and bring them directly into user-facing platforms like **Telex**.

If you're building your own AI coworker, Mastra's tools and the A2A protocol make it effortless to scale and integrate your agents across different environments.

> 🚀 **Next Step:** Try building your own agent with Mastra and connect it to your favorite platform — whether that's Telex, Discord, or a custom web app.
