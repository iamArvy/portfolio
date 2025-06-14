---
project: dreamscape
order: 3.2
---

# Chat Service

The **Chat Service** is a real-time messaging microservice built with **NestJS**, supporting both **GraphQL** and **REST API** interfaces. It allows users to initiate private conversations or group chats, send messages, delete/update them, and retrieve conversation histories. The service integrates **WebSocket (Socket.io)** for live chat and uses **Swagger** and **Apollo Playground** for API documentation and testing.

---

## Features

* gRPC based service-to-service communication.
* Create 1-on-1 or group conversations
* Send, edit, and delete messages
* Retrieve list of conversations and message history
* Modular and scalable microservice architecture
* Proto file contracts for message and conversation operations

---

## Tech Stack

* **Framework**: [NestJS](https://nestjs.com/)
* **Service Communication**: [gRPC](https://www.grpc.io/)
* **ORM**: [Prisma](https://www.prisma.io/) & [Mongoose](https://www.mongoose.org/)
* **Databases**: [PostgreSQL](https://www.postgresql.org/) for relational data, [MongoDB](https://www.mongodb.org/) (for document-based data)
* **API Docs**: gRPC via .proto files

---

## gRPC Proto Contracts

The Proto file is defined in chat.proto file in the protos/ directory and describes the available gRPC services and messages for the Application.
Services includes:

* Conversation Service
* Message Service
* Group Service

Use tools like grpcurl or Postman (gRPC beta) for testing, or generate clients from proto definitions.

---

## Getting Started

### Prerequisites

- Node.js (v20+)
- npm, yarn, or pnpm (pnpm is recommended)
- Docker & Docker Compose (for containerized setup)

### Installation

```bash
git clone https://github.com/iamArvy/chat-service.git
cd chat-service
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGO_DB_URL="your_mongodb_connection_string"
POSTGRES_DB_URL="your_mongodb_connection_string"
GRPC_URL="your desired gPRC url e.g: localhost:50051"
```

### Running the service

```bash
# Start the dev server
pnpm run start:dev

# Or with Docker
docker-compose up --build
```

---

## 🗃️ Folder Structure (Simplified)

```
chat-service/
├── prisma/              #Contains prisma schema and migrations
├── proto/               # gRPC proto definitions
├── src/
│   ├── cache/           # Cache Module and Service for easy cache integration.
│   ├── conversation/    # Conversation logic, gRPC handler, and DTOs.
│   ├── db/              # Database setup (Prisma Service, Schemas and Repositories).
│   ├── group/           # Group logic, gRPC handler, and DTOs.
│   ├── message/         # Message logic, gRPC handler, and DTOs.
│   ├── app.module.ts
│   └── main.ts
├── docker-compose.yml
├── Dockerfile
├── nest-cli.json
├── package.json
├── README.md
└── tsconfig.json
```

---

## 🧱 Future Plans

* ✅ Integrate message read receipts
* ✅ Support file/media attachments