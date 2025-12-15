---
  title: Digital Wallet Service
  description: Secure, API-first wallet infrastructure with payments, transfers, and key-based access.
  rating: 5
  role: backend
  image: 
  technologies: [
    { name: "Typescript", icon: "logos:typescript-icon", slug: "typescript"},
    { name: "Nest.js", icon: "logos:nestjs", slug: "nestjs" },
    { name: "PostgreSQL", icon: "logos:postgresql", slug: "postgresql" },
    { name: "Prisma", icon: "logos:prisma", slug: "prisma" },
    { name: "Docker", icon: "logos:docker-icon", slug: "docker" }
  ]
---

## Overview

The Digital Wallet Service API is a scalable backend system that enables secure user authentication, digital wallet management, and programmable financial operations. It is designed for developers and businesses that need wallet functionality, controlled API access, and seamless payment processing. The service supports OAuth-based authentication, API key permissions, and real-time payment handling through Paystack, making it suitable for fintech integrations and internal payment platforms.

* **Source Code:** [https://github.com/iamArvy/wallet-service](https://github.com/iamArvy/wallet-service)
* **Live API Docs (Swagger):** [https://wallet-service-t0py.onrender.com/docs](https://wallet-service-t0py.onrender.com/docs)
---

## Key Features

* Google OAuth-based user authentication with JWT session handling
* API key generation, revocation, rollover, and permission-based access control
* Personal digital wallets with balance tracking
* Wallet funding via Paystack payment gateway
* Internal wallet-to-wallet transfers
* Transaction history for deposits and transfers
* Secure Paystack webhook handling for real-time payment confirmation
* Auto-generated Swagger API documentation
* Dockerized local development environment

---

## Tech Stack

**Backend:** Node.js, TypeScript, NestJS
**Database:** PostgreSQL, Prisma ORM
**Authentication:** Google OAuth2, JWT, Passport.js
**Payments:** Paystack
**Infrastructure / DevOps:** Docker, Docker Compose
**Observability & Tooling:** Winston, Swagger/OpenAPI

---

## Architecture & Design

The system follows a modular NestJS architecture with clear separation of concerns across authentication, API key management, wallet operations, and payments. Prisma ORM is used for type-safe database access, while permission-scoped API keys enable third-party or service-to-service access without exposing user credentials. Idempotency keys are enforced for payment-related operations to prevent duplicate transactions, and webhooks are validated to ensure payment integrity.

---

## My Contributions

* Designed and implemented Google OAuth authentication and JWT-based session management
* Built a permission-based API key system with expiry, rollover, and revocation support
* Implemented digital wallet logic including deposits, transfers, and balance tracking
* Integrated Paystack for payments and webhook-based transaction confirmation
* Added idempotency handling for payment initialization to prevent double charges
* Set up Docker Compose for local development and PostgreSQL provisioning

---

## Results / Impact

* Enabled secure, programmatic wallet operations for external integrations
* Reduced risk of duplicate payments through idempotent transaction handling
* Improved developer onboarding via comprehensive Swagger documentation
* Established a reusable wallet and payments foundation for fintech-style products

---

## Testing & Quality Assurance

* Input validation and request guards at the controller level
* Authentication and authorization enforced via NestJS guards
* Structured logging with Winston for easier debugging and monitoring
* Consistent API responses and error handling

---

## Security Considerations

* OAuth-based authentication with JWT access tokens
* Fine-grained API key permissions (read, deposit, transfer)
* Secure webhook signature verification for Paystack events
* Idempotency keys for payment-related endpoints

---

## What I Learned

* Designing permission-scoped API keys for secure external access
* Handling real-world payment workflows with webhooks and retries
* Structuring a NestJS application for scalability and clarity
* Applying idempotency patterns in financial systems
