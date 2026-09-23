# EKT AI — Frontend ↔ n8n API Contract

## Endpoint

POST `/webhook/assistant`

## Frontend Request

```json
{
  "session_id": "ekt-uuid",
  "message": "Нужен автомат Legrand 160А",
  "language": "ru",
  "city": "Алматы"
}