---
project: dreamscape
order: 4.2
---

# Chat

## Service Name  
**Chat Service**

[View Repository](https://github.com/iamarvy/chat-service)

---

## Purpose

Provides real-time messaging and conversation management including:  
- One-on-one conversations  
- Group chats with admin controls  
- Message CRUD operations  
- Participant and group management

<!-- Consider expanding the purpose to include key user benefits or typical use cases for clarity -->

---

## Services & Key Responsibilities (gRPC)

### ConversationService
- `rpc Health(google.protobuf.Empty) returns (Status);`  
- `rpc Create(CreateConversationInput) returns (ConversationData);`  
- `rpc List(UserId) returns (ConversationList);`  
- `rpc Get(GetConversation) returns (ConversationData);`  
- `rpc Messages(GetConversation) returns (MessageList);`  

### MessageService
- `rpc Send(CreateMessageInput) returns (MessageData);`  
- `rpc Update(UpdateMessageInput) returns (MessageData);`  
- `rpc Delete(DeleteMessageInput) returns (Status);`  
- `rpc Reply(UpdateMessageInput) returns (MessageData);`  

### GroupService
- `rpc Create(CreateGroupInput) returns (ConversationData);`  
- `rpc Delete(UserGroupRequest) returns (Status);`  
- `rpc Update(UpdateGroupInput) returns (Status);`  
- `rpc MakeOwner(UserGroupParticipantRequest) returns (Status);`  
- `rpc AddMembers(AddParticipantRequest) returns (Status);`  
- `rpc GetParticipants(UserGroupRequest) returns (ParticipantList);`  
- `rpc MakeAdmin(UserGroupParticipantRequest) returns (ParticipantList);`  
- `rpc RemoveAdmin(UserGroupParticipantRequest) returns (ParticipantList);`  
- `rpc RemoveMember(UserGroupParticipantRequest) returns (ParticipantList);`  
- `rpc Leave(UserGroupRequest) returns (ParticipantList);`  

<!-- It might be useful to briefly describe the purpose of each service (Conversation, Message, Group) for easier context -->

---

## Protobuf File Location

````
/protos/chat.proto

````

---

## Important Message Types

### ConversationData
```proto
message ConversationData {
  string id = 1;
  optional string name = 2;
  optional bool group = 3;
  optional string creator_id = 4;
  string created_at = 5;
  optional string updated_at = 6;
}
````

### MessageData

```proto
message MessageData {
  string conversation_id = 1;
  string sender_id = 2;
  optional string reply_id = 3;
  string text = 4;
}
```

### ParticipantData

```proto
message ParticipantData {
  string id = 1;
  string user_id = 2;
  bool is_admin = 3;
  string conversation_id = 4;
  string created_at = 5;
  string updated_at = 6;
}
```

<!-- Consider adding a brief explanation of each message type and when it's used -->

---

## Interservice Communication

* Exposes multiple gRPC services for modular functionality
* API Gateway and other services communicate via gRPC clients
* May publish or subscribe to events for messaging or notification purposes (optional)

---

## Testing

* Unit tested with Jest or preferred framework
* Integration tested with mock gRPC clients or TestContainers
* Load tested for concurrency and real-time messaging reliability

---

## Error Codes

| Code | Message               | Meaning                         |
| ---- | --------------------- | ------------------------------- |
| 400  | Bad request           | Invalid or missing parameters   |
| 401  | Unauthorized          | User not authenticated          |
| 403  | Forbidden             | User lacks permission           |
| 404  | Not found             | Conversation or message missing |
| 500  | Internal server error | Unexpected failure              |

---

## Source Location

```
/apps/chat-service
├── src/
│   ├── controllers/
│   ├── services/
│   ├── grpc/
│   ├── dto/
│   └── proto/
main.ts
```

---

## Notes

* Uses google.protobuf.Empty for health checks
* Supports optional fields for backward compatibility
* Group management supports roles: owner, admin, member
* Message replies supported with `reply_id`
* Future plans: WebSocket integration for real-time push