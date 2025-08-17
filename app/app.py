from app.config import settings
from app.config.logger import logger
from app.config import db_connection
from app.routers import project_router
from fastapi import FastAPI
from datetime import datetime, timezone
from fastapi.middleware.cors import CORSMiddleware

logger.info(f"Active profile is: {settings.get_active_profile()}")
db_connection.test_db_connection()

app = FastAPI()


# Add middleware
allowed_origins: list[str] = settings.settings.allowed_origins.split(",")
logger.info(f"Allowed origins: {allowed_origins}")
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    """Health check endpoint for Docker health checks"""
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc)}


# Register API's
app.include_router(project_router.router, prefix="/api/v1/project")
