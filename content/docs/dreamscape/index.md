---
project: dreamscape
description: Documentation for Dreamscape Project
order: 1
---

# Overview

## About

Dreamscape is a modern web application that allows users to:
- 📸 Post updates and media
- ❤️ Like and 💬 comment on posts
- 💬 Chat in real-time with friends and groups
- 👥 Connect with other users

It’s built with **NestJS** for the backend services and **Nuxt** for the frontend, following a clean and modular microservices approach for better scalability, maintainability, and developer experience.

---

## Tech Stack

| Layer        | Technology     |
|--------------|----------------|
| Frontend     | Nuxt 3         |
| Backend      | NestJS         |
| Communication| gRPC, WebSockets, REST |
| Auth         | JWT, Passport  |
| Realtime     | Socket.io / Redis pub-sub |
| Database     | PostgreSQL / MongoDB (per service) |
| Messaging    | AWS SQS / Kafka (event-driven) |
| Infrastructure | Docker, AWS ECS/Fargate or EC2, S3, CloudFormation |

---

## Microservices

| Service           | Description                                             |
|-------------------|---------------------------------------------------------|
| **Auth Service**   | Handles user registration, login, and JWT issuance     |
| **User Service**   | Manages user profiles, connections, and preferences    |
| **Post Service**   | CRUD operations for user-generated posts               |
| **Interaction Service** | Handles likes, comments, and reactions           |
| **Chat Service**   | Real-time messaging with support for 1-1 and group chats |
| **Notification Service** | Sends alerts for new messages, likes, and more  |
| **Media Service**  | Handles file uploads (images, videos) to S3            |
| **Gateway API**    | Acts as an entry point, routes requests to services    |

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker & Docker Compose
- pnpm (or npm/yarn)
- AWS CLI (for cloud deployment)

### Local Setup

```bash
# Clone the monorepo
git clone https://github.com/iamArvy/dreamscape.git
cd dreamscape

# Install dependencies
pnpm install

# Start all services
docker-compose up --build
```

Frontend (Nuxt) will be available at `http://localhost:3000`  
Backend services will run on different ports inside Docker.

---

## Running Tests

Each service contains its own tests.

```bash
# Example for auth service
cd services/auth
pnpm test
```

---

## Folder Structure

```
dreamscape/
├── frontend/              # Nuxt frontend
├── services/              # NestJS microservices
│   ├── auth/
│   ├── user/
│   ├── post/
│   ├── chat/
│   └── ...
├── gateway/               # API Gateway using NestJS
├── docker-compose.yml
└── README.md
```

---

## Future Plans

- Implement Redis caching
- Add search service (e.g., ElasticSearch)
- Add subscriptions & notifications (Web Push)
- Integrate admin dashboard
- Support media tagging and mentions

---

## License

MIT License – see [LICENSE](./LICENSE)

---

## Acknowledgements

Inspired by platforms like **Facebook**, **Twitter**, and **Discord** – designed to be modular, scalable, and developer-friendly.
