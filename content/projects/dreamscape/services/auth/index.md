---
project: dreamscape
order: 3.1
---

# Authentication Service

A secure and scalable authentication microservice built with **NestJS**, **Passport**, and **JWT**, supporting gRPC transport for efficient internal communication in microservice architectures.

---

## 🚀 Features

* ✅ User registration and login with JWT (access + refresh tokens)
* ✅ Session-based refresh token storage with expiration and revocation
* ✅ gRPC endpoints for communication with other services
* ✅ Password hashing with Argon2
* ✅ Built-in email verification & logout functionality
* ✅ Extensible with support for token rotation and auditing

---

## ⚙️ Technologies

| Category          | Stack                                                                |
| ----------------- | -------------------------------------------------------------------- |
| **Framework**     | [NestJS](https://nestjs.com/)                                        |
| **Transport**     | [gRPC](https://grpc.io/)                                             |
| **Auth Strategy** | [Passport.js](https://www.passportjs.org/)<br>[JWT](https://jwt.io/) |
| **ORM**           | [Mongoose](https://mongoosejs.com/)                                  |
| **Database**      | [MongoDB](https://mongodb.com/)                                      |

---

## 📦 Getting Started

### ✅ Prerequisites

* Node.js `v20+`
* pnpm (recommended) / npm / yarn
* MongoDB instance (local or cloud)

---

### 🛠 Installation

```bash
git clone https://github.com/iamArvy/authentication-service.git
cd authentication-service
pnpm install
```

---

### 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
DB_URL=mongodb://localhost:27017/auth-db
JWT_SECRET=your_jwt_secret
PORT=3000
```

---

### 🚧 Running the Service

```bash
# Development
pnpm run start:dev

# Or with Docker
docker-compose up --build
```

---

## 🗓️ Folder Structure (Simplified)

```
authentication-service/
├── proto/
│   └── auth.proto            # gRPC definitions
├── src/
│   ├── auth/                # Auth repository, logic, schema
│   ├── dto/                 # Data transfer objects
│   ├── session/             # Session management (Mongo)
│   ├── app.controller.ts    # gRPC controller
│   ├── app.module.ts        # Nest module setup
│   ├── app.service.ts       # App service
│   ├── main.ts              # Entry point
│   └── token.service.ts     # Token generation/validation
├── docker-compose.yml
└── README.md
```

---

## 📊 Roadmap Ideas

* ☑️ Add rate limiting to login route 
* ☑️ Add Redis caching for session lookups
* ☑️ Add unit and integration tests
* ☑️ Audit logging for sessions and auth attempts

---

Feel free to contribute, open issues, or fork the project!
