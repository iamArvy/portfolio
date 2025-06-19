---
project: dreamscape
description: Documentation for Dreamscape Project
order: 3.1
---
# Routes

This document defines how incoming requests are routed through the API Gateway to the underlying microservices.

---

## 🔐 Auth Routes

| Method | Path           | Target Service | Handler           | Auth Required |
|--------|----------------|----------------|-------------------|----------------|
| POST   | /auth/login    | AuthService    | login             | ❌ No          |
| POST   | /auth/register | AuthService    | register          | ❌ No          |
| POST   | /auth/token    | AuthService    | clientToken       | ✅ Yes (Client ID/Secret) |
| POST   | /auth/logout   | AuthService    | logout            | ✅ Yes         |

---

## 👤 User Routes

| Method | Path            | Target Service | Handler       | Auth Required |
|--------|------------------|----------------|----------------|----------------|
| GET    | /user/profile    | UserService    | getProfile     | ✅ Yes         |
| PATCH  | /user/profile    | UserService    | updateProfile  | ✅ Yes         |

---

## 📁 Portfolio Routes

| Method | Path                  | Target Service     | Handler         | Auth Required |
|--------|------------------------|--------------------|------------------|----------------|
| GET    | /portfolio/:id        | PortfolioService   | getPortfolio     | ✅ Yes (Client) |
| POST   | /portfolio            | PortfolioService   | createPortfolio  | ✅ Yes (User)   |

---

## 🧪 Health Checks

| Method | Path         | Target Service | Handler  | Auth Required |
|--------|--------------|----------------|----------|----------------|
| GET    | /health/auth | AuthService    | health   | ❌ No          |
| GET    | /health/user | UserService    | health   | ❌ No          |

---

## ✍️ Notes

- Routes with ✅ **Client** auth use a `client_id` and `client_secret` passed in headers or body.
- Routes with ✅ **User** auth use a Bearer JWT token (from Cognito or custom Auth).
- Gateway validates tokens via a Lambda Authorizer or directly using your AuthService.
