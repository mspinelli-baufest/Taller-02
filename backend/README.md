# Backend — JWT Authentication API

FastAPI application that implements a JWT authentication use case.

## Features

- `POST /auth/login` — validates credentials and returns an **access token** (valid for 300 seconds) plus a **refresh token**.
- `POST /auth/refresh` — exchanges a valid refresh token for a new access/refresh token pair.
- `GET /health` — health-check endpoint.
- Interactive API docs available at `/docs` (Swagger UI) and `/redoc` (ReDoc).

---

## Default Credentials

| Field    | Value      |
|----------|------------|
| username | `admin`    |
| password | `admin123` |

---

## Requirements

- [Docker](https://docs.docker.com/get-docker/) ≥ 24
- [Docker Compose](https://docs.docker.com/compose/install/) ≥ 2
- *(optional, for local development)* [Python](https://www.python.org/) ≥ 3.11 and [Poetry](https://python-poetry.org/) ≥ 1.8

---

## Running with Docker Compose

```bash
# From the backend/ directory
docker compose up --build
```

The API will be available at <http://localhost:8000>.

---

## Local Development with Poetry

```bash
# From the backend/ directory

# Install dependencies
poetry install

# Run the development server
poetry run uvicorn app.main:app --reload
```

---

## API Usage

### Login

```bash
curl -X POST http://localhost:8000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

**Response:**

```json
{
  "access_token": "<jwt-access-token>",
  "refresh_token": "<jwt-refresh-token>",
  "token_type": "bearer",
  "expires_in": 300
}
```

### Refresh Token

```bash
curl -X POST http://localhost:8000/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{"refresh_token": "<jwt-refresh-token>"}'
```

**Response:**

```json
{
  "access_token": "<new-jwt-access-token>",
  "refresh_token": "<new-jwt-refresh-token>",
  "token_type": "bearer",
  "expires_in": 300
}
```

---

## Project Structure

```
backend/
├── app/
│   ├── auth/
│   │   ├── router.py      # Login and refresh endpoints
│   │   └── schemas.py     # Pydantic request/response models
│   ├── core/
│   │   └── security.py    # JWT creation, verification, password hashing
│   └── main.py            # FastAPI application entry point
├── Dockerfile
├── docker-compose.yml
├── pyproject.toml         # Poetry project and dependency definition
└── README.md
```

---

## Notes

- Override the `SECRET_KEY` environment variable with a strong random value in production environments (e.g. `openssl rand -hex 32`). The default value is for development only.
- Token expiry constants (`ACCESS_TOKEN_EXPIRE_SECONDS`, `REFRESH_TOKEN_EXPIRE_SECONDS`) can be adjusted in `app/core/security.py`.
