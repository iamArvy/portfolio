---
project: dreamscape
order: 4.3
---
# Post Service

The **Post Service** is a microservice for managing posts and post interactions in a social media application, built with **NestJS**, supporting both **REST API** and **GRAPHQL** interfaces. It allows users manage posts, comments, likes, and user posts in an event-driven architecture and uses **Swagger** and **Apollo Playground** for API documentation and testing..

## Features

- Create, retrieve, and delete posts
- Add comments to posts (comments are posts with a `parent_id` reference)
- Like posts
- Fetch user-specific posts
- REST API support (GraphQL and SQS support coming soon)

## Tech Stack

* **Framework**: [NestJS](https://nestjs.com/)
* **Authentication**: [Passport.js](https://www.passportjs.org/) & [JWT (JSON Web Tokens)](https://jwt.io/)
* **API**: REST, GraphQL (Apollo)
* **ORM**: [Prisma](https://www.prisma.io/) & [Mongoose](https://www.mongoose.org/)
* **Databases**: [PostgreSQL](https://www.postgresql.org/) for relational data, [MongoDB](https://www.mongodb.org/) (for document-based data)
* **API Docs**: [Swagger](https://swagger.org) for REST, [Apollo Playground](https://apollo.org) for GraphQL

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (preferred), npm or yarn
- Docker and Docker Compose (if using docker)
- PostgreSQL and MongoDB instances running (if running locally)

### Installation

```bash
git clone https://github.com/iamArvy/post-service.git
cd post-service
pnpm install
```
### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
MONGO_DB_URL="your_mongodb_connection_string"
POSTGRES_DB_URL="your_postgresql_connection_string"
JWT_SECRET="your_jwt_secret_for_authentication_ensure_it's_the_same_from_auth_service"
PORT=3000
```
### Running the service

```bash
# Start the dev server
pnpm run start:dev

# Or with Docker
docker-compose up --build
```

---

## 📚 API Documentation

* **Swagger UI** (REST): [http://localhost:3000/api](http://localhost:3000/api)
* **Apollo Playground** (GraphQL): [http://localhost:3000/graphql](http://localhost:3000/graphql)

---

## 🗃️ Folder Structure (Simplified)

```
post-service/
├── prisma/                   #Contains prisma schema and migrations
├── src/
│   ├── guards/               # Application Route Guards
│   ├── prisma/               # Prisma setup (Postgres)
│   ├── strategies/           # Authentication Strategies
│   ├── user/                 # User Logic and Relationships
│   ├── app.controller.ts     # Application Rest Controller
│   ├── app.entity.ts         # Application Graphql Entity
│   ├── app.input.ts          # Application DTOs
│   ├── app.module.ts
│   ├── app.resolver.ts
│   ├── app.schema.ts
│   ├── app.service.ts
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

* ✅ Add SQS/Kafka for emitting events