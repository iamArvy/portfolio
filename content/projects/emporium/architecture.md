---
project: emporium
order: 2
---

# Architecture

This is the Architecture for the Emporium Project

---

## Overview

**Emporium** is a modern and modular eCommerce platform that enables:

* 🛒 Shoppers to browse and purchase from various online stores
* 🡩‍💼 Store owners to manage products, orders, and inventory via personalized dashboards
* 👨‍💼 Admins to oversee platform-wide analytics, moderation, and growth

Emporium follows a clean, microservices-based architecture for better scalability, performance, and developer experience.

---

## Tech Stack

| Layer          | Technology                         |
| -------------- | ---------------------------------- |
| Frontend       | Nuxt 3                             |
| Backend        | NestJS (Modular Microservices)     |
| Communication  | REST, gRPC                         |
| Auth           | JWT, Passport.js                   |
| Database       | PostgreSQL / MongoDB (per service) |
| Realtime       | Socket.io, Redis Pub/Sub           |
| Messaging      | AWS SQS / Kafka                    |
| Storage        | Amazon S3                          |
| Infrastructure | Docker, AWS ECS/Fargate, EC2       |

---

## Microservices

| Service              | Description                                        |
| -------------------- | -------------------------------------------------- |
| Auth Service         | Handles registration, login, JWT issuance          |
| Store Service        | Manages store creation, updates, and info          |
| Product Service      | CRUD operations for store products                 |
| Order Service        | Manages shopping carts, orders, and payments       |
| User Service         | Handles user profiles and preferences              |
| Inventory Service    | Stock and fulfillment tracking                     |
| Notification Service | Email/SMS/push alerts for order and store updates  |
| Media Service        | Uploads and stores images, videos, etc. to S3      |
| Gateway API          | Acts as a central routing entry point for services |
| Admin Service        | Platform-wide analytics and store moderation       |

---

## Getting Started

### Prerequisites

* Node.js (v18+)
* Docker & Docker Compose
* pnpm (or npm/yarn)
* AWS CLI (for cloud deployment)

### Local Setup

```bash
# Clone the monorepo
git clone https://github.com/yourname/emporium.git
cd emporium

# Install dependencies
pnpm install

# Start all services
docker-compose up --build
```

* Frontend (Nuxt) will be available at `http://localhost:3000`
* Backend services will run on their respective ports inside Docker

---

## Folder Structure

```
emporium/
├── frontend/              # Nuxt frontend for shoppers
├── admin-dashboard/       # Nuxt or Laravel admin panel
├── store-dashboard/       # Nuxt or Laravel dashboard for vendors
├── services/              # NestJS microservices
│   ├── auth/
│   ├── user/
│   ├── store/
│   ├── product/
│   ├── order/
│   ├── inventory/
│   ├── notification/
│   └── media/
├── gateway/               # API Gateway
├── docker-compose.yml
└── README.md
```

---

## Future Plans

* Add support for coupon codes and discounts
* Integrate payment gateways (Stripe, PayPal)
* Implement advanced analytics dashboard
* Add ElasticSearch for fast product search
* Subscription-based store tiers
* AI-driven product recommendations
* Multi-language and multi-currency support

---

## License

MIT License – see `LICENSE`

---

## Acknowledgements

Inspired by platforms like Shopify, Etsy, and Amazon – built for scale and flexibility with a developer-first architecture.
