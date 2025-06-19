---
project: dreamscape
description: Documentation for Dreamscape Project
order: 3.2
---

# Authentication

This document outlines how authentication and authorization are enforced at the API Gateway level for different access types.

---

## 🧭 Overview

The gateway supports two primary authentication strategies:

1. **User Authentication (Dashboard access)**

   * **Auth Method**: JWT Token
   * **Source**: Issued by AuthService (or Cognito)
   * **Used By**: Dashboard frontend (Nuxt app)

2. **Client Authentication (Public API access)**

   * **Auth Method**: API Credentials (`client_id`, `client_secret`)
   * **Token Issuance**: Via `/auth/token`
   * **Used By**: Frontend websites consuming public portfolio data

---

## 🔑 Token Validation

### 🟦 JWT (User)

* Passed in `Authorization: Bearer <token>`
* Verified in Gateway via:

  * Lambda Authorizer (if using AWS API Gateway)
  * Middleware (if using custom NestJS Gateway)
* Contains:

  ```json
  {
    "sub": "userId",
    "email": "user@example.com",
    "roles": ["user"]
  }
  ```

### 🟨 API Key (Client)

* Clients send:

  ```json
  {
    "client_id": "abc123",
    "client_secret": "xyz789"
  }
  ```
* Gateway calls AuthService `/auth/token` to get access token (or verifies directly)
* Resulting token can be used as a Bearer token for future requests

---

## ⚙️ Authorization Flow

| Route Type | Auth Method   | Verification         | Example Header                            |
| ---------- | ------------- | -------------------- | ----------------------------------------- |
| Dashboard  | JWT           | Validate JWT payload | `Authorization: Bearer eyJhbGciOi...`     |
| Public API | Client Secret | Validate via AuthSvc | `{ client_id, client_secret }` in request |

---

## 🚫 Unauthorized Responses

If validation fails, the Gateway returns:

```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing token",
  "statusCode": 401
}
```

---

## 🔐 Tips

* Refresh tokens are supported for users, not clients.
* Consider token scopes in JWT to handle granular access control.
* Rate limiting can be enforced per token or client ID.
