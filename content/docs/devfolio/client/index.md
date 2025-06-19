---
project: devfolio
order: 2
---

# API Client

The **API Client** is built with **NestJS**, supporting both **GraphQL** and **REST API** interfaces. It allows users to interact with the [Devfolio](https://github.com/iamArvy/devfolio.git/) Application via API and integrate it with their frontend application. It uses **Swagger** and **Apollo Playground** for API documentation and testing.

---

## 🚀 Features

* Graphql API
* REST API
* Client ID and Secret Authentication
* Retrieve User portfolio data
* API documentation via Swagger and Apollo Playground

---

## 🛠️ Tech Stack

* **Framework**: [NestJS](https://nestjs.com/)
* **Authentication**: [Passport.js](https://www.passportjs.org/)
* **API**: REST, GraphQL (Apollo)
* **ORM**: [Prisma](https://www.prisma.io/)
* **Databases**: [PostgreSQL](https://www.postgresql.org/)
* **API Docs**: [Swagger](https://swagger.org) for REST, [Apollo Playground](https://apollo.org) for GraphQL

---

## Getting Started

### Prerequisites

- Node.js (v20+)
- npm, yarn, or pnpm (pnpm is recommended)

### Installation

```bash
git clone https://github.com/iamArvy/devfolio-client.git
cd devfolio-client
pnpm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
DATABASE_URL="database url"
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
devfolio-client/
├── prisma/              #Contains prisma schema and migrations
├── src/
│   ├── certification/   # Certification logic, controller, resolver etc
│   ├── data/            # Application Data, currently containing mock data fro test
│   ├── experience/      # Experience Logic, Controller, resolver, etc
│   ├── guards/          # Application Route Guards
│   ├── prisma/          # Prisma setup (Postgres)
│   ├── profile/         # Profile logic, controller, resolver etc
│   ├── project/         # Project logic, controller, resolver etc
│   ├── social/          # Social logic, controller, resolver etc
│   ├── stack/           # Stack logic, controller, resolver etc
│   ├── strategies/      # Authentication Strategies
│   ├── app.module.ts
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