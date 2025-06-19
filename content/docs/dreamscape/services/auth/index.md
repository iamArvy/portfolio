---
project: dreamscape
order: 4.1
---

# Auth

## Service Name

**Auth Service**

[🔗 View Repository](https://github.com/iamArvy/emporium-auth-service)

---

## Purpose

Handles:

* User authentication via email/password
* Client credentials flow for API access
* JWT and refresh token issuance
* Session validation and token revocation

---

## Key Responsibilities (gRPC)

* `rpc Login(LoginRequest) returns (LoginResponse);`
* `rpc Register(RegisterRequest) returns (User);`
* `rpc GetToken(ClientCredentials) returns (TokenResponse);`
* `rpc RefreshToken(RefreshRequest) returns (TokenResponse);`

---

## Authentication & Authorization

* Uses **JWT (RS256)** for dashboard users
* Uses **Client ID + Secret** for public API clients
* Tokens expire in 15 mins, refresh tokens valid for 7 days
* Validates tokens in every protected call

---

## Event Subscriptions / Messaging

| Event          | Source       | Purpose                   |
| -------------- | ------------ | ------------------------- |
| `user.created` | User Service | Auto-generate credentials |
| `user.updated` | User Service | Sync updated profile data |

---

## Events Published

| Event               | Payload Fields          | When Triggered                 |
| ------------------- | ----------------------- | ------------------------------ |
| `auth.token.issued` | userId, type, timestamp | On successful login or refresh |
| `auth.failed.login` | email, ip, timestamp    | On failed login attempts       |

---

## Dependencies

* **User Service** – To fetch user info (via gRPC)
* **DynamoDB** – To store refresh tokens
* **Redis** – Session cache for fast token invalidation

---

## gRPC Methods

### `rpc Login(LoginRequest) returns (LoginResponse)`

```proto
message LoginRequest {
  string email = 1;
  string password = 2;
}

message LoginResponse {
  string access_token = 1;
  string refresh_token = 2;
}
```

---

### `rpc GetToken(ClientCredentials) returns (TokenResponse)`

```proto
message ClientCredentials {
  string client_id = 1;
  string client_secret = 2;
}

message TokenResponse {
  string access_token = 1;
  string refresh_token = 2;
}
```

---

## Protobuf File Location

```
/protos/auth.proto
```

```proto
syntax = "proto3";

package auth;

service AuthService {
  rpc Login (LoginRequest) returns (LoginResponse);
  rpc Register (RegisterRequest) returns (User);
  rpc GetToken (ClientCredentials) returns (TokenResponse);
  rpc RefreshToken (RefreshRequest) returns (TokenResponse);
}
```

---

## Interservice Communication

* This service is exposed via **gRPC**
* Other services (e.g. API Gateway, Dashboard Gateway) use gRPC clients to communicate with Auth

---

## Testing

* ✅ Unit-tested with Jest
* ✅ Integration-tested with Supertest + TestContainers
* 🔐 Security-tested using OWASP ZAP

---

## Error Codes

| Code | Message             | Meaning                         |
| ---- | ------------------- | ------------------------------- |
| 401  | Invalid credentials | Login or token request failed   |
| 403  | Token expired       | JWT or refresh token is invalid |
| 409  | User already exists | During registration             |

---

## Source Location

```
/apps/auth-service
├── src/
│   ├── controllers/
│   ├── services/
│   ├── strategies/
│   └── dto/
main.ts
```

---

## Notes

* Rotates JWT signing keys every 30 days.
* Supports rate limiting using Redis.
* Will be integrated with Cognito for federated login (future).
