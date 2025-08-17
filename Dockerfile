# Build stage
FROM python:3.13-alpine AS builder

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# Install system dependencies for building
RUN apk add --no-cache \
    gcc \
    musl-dev \
    postgresql-dev \
    libffi-dev \
    build-base

# Install Python dependencies
RUN pip install --upgrade pip && pip install uv

# Set work directory and change ownership
WORKDIR /app

# Install Python dependencies using uv
COPY --chown=appuser:appuser pyproject.toml uv.lock ./
RUN uv sync --frozen

# Production stage
FROM python:3.13-alpine AS runtime
LABEL version="0.0.4-SNAPSHOT"

# Set runtime environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONPATH=/app \
    PATH="/app/.venv/bin:$PATH"

# Install only runtime system dependencies
RUN apk add --no-cache \
    postgresql-libs \
    curl \
    && rm -rf /var/cache/apk/*

# Install Python dependencies
RUN pip install uv

# Create non-root user for security
RUN adduser --disabled-password --gecos '' appuser
WORKDIR /app
RUN chown appuser:appuser /app
USER appuser

# Copy virtual environment from builder stage
COPY --from=builder /app/.venv /app/.venv

# Copy application code
COPY --chown=appuser:appuser . .

# Expose port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health', timeout=5)" || exit 1

# Run the application
CMD ["uv", "run", "main.py"]
