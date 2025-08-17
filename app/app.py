from app.config import settings
from app.config.logger import logger
from app.config import db_connection
from app.routers import project_router
from app.routers import frontend_router
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from datetime import datetime, timezone

logger.info(f"Active profile is: {settings.get_active_profile()}")
db_connection.test_db_connection()

app = FastAPI()


@app.get("/health")
async def health_check():
    """Health check endpoint for Docker health checks"""
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc)}


# Register API's
app.include_router(project_router.router, prefix="/api/v1/project")
# Mount static resources
app.mount(
    "/_next/",
    StaticFiles(directory=f"{settings.settings.frontend_base_dir}/_next"),
    name="nextjs_assets",
)
app.mount(
    "/static",
    StaticFiles(directory=f"{settings.settings.frontend_base_dir}"),
    name="static",
)
# Frontend router: should be the last router always
app.include_router(frontend_router.router, prefix="")
