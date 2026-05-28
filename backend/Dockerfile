FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    POETRY_VERSION=1.8.3 \
    POETRY_HOME="/opt/poetry" \
    POETRY_VIRTUALENVS_CREATE=false

RUN pip install --no-cache-dir "poetry==$POETRY_VERSION"

WORKDIR /app

COPY pyproject.toml poetry.lock* ./

RUN poetry install --only main --no-interaction --no-ansi

COPY app ./app

EXPOSE 8000

# Override SECRET_KEY with a strong random value in production.
ENV SECRET_KEY="supersecretkey-change-in-production"

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
