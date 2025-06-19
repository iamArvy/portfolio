---
project: devfolio
order: 1
---

# Overview

**Devfolio** is a platform tailored for developers to efficiently manage and showcase their portfolios. It offers a sleek, modern dashboard where users can store essential profile information, project details, and more. With both **REST** and **GraphQL APIs**, Devfolio provides flexible, seamless access to your data, making it easy to integrate with your frontend. The platform is powered by **Laravel** for the user-friendly dashboard, while the backend API is built on **NestJS** for scalability and performance.

---

## 🛠️ Tech Stack

| Layer        | Technology     |
|--------------|----------------|
| **Dashboard**| Laravel, Vue.js        |
| **API**      | REST, GraphQL, Nest.js  |
| **Database** | Postgresql |
| **Authentication** | JWT      |

---

## 🚀 Getting Started

### Prerequisites

- PHP (v8.0+)
- Node.js (v16+)
- Composer (for Laravel)
- pnpm (or npm/yarn)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/iamarvy/devfolio.git
   cd devfolio
   ```

2. Install Laravel dependencies:
   ```bash
   cd dashboard
   composer install
   pnpm install
   cp .env.example .env
   php artisan key:generate
   php artisan migrate
   php artisan serve
   composer run dev
   ```
   The dashboard will be available at `http://localhost:8000`.

---

## 🧪 Running Tests

```bash
php artisan test

```

---
<!-- 
## 📦 Folder Structure

```
devfolio/
├── dashboard/              # Laravel-based dashboard
├── api/                    # NestJS-based API
├── .env                    # Environment configuration
└── README.md
``` -->

---


## 🙌 Acknowledgements

Built with ❤️ using **Laravel**, **NestJS**, and **PostgreSQL**.
