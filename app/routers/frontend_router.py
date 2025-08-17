import os
from fastapi import APIRouter
from fastapi.responses import FileResponse

from app.config.logger import logger
from app.config.settings import settings


router = APIRouter(tags=["frontend"])


@router.get("/")
@router.get("/{page:str}")
async def serve_spa(page: str = ""):
    logger.info(f"Requested resource: {page}")
    file_path = f"{settings.frontend_base_dir}/{page}"

    # Handle base path
    if page == "":
        return FileResponse(f"{settings.frontend_base_dir}/index.html")

    # Check if resource exists
    if os.path.exists(file_path) and os.path.isfile(file_path):
        return FileResponse(file_path)

    # Check if HTML file can be resolved
    if not file_path.endswith(".html"):
        html_path = f"{file_path}.html"
        if os.path.exists(html_path):
            return FileResponse(html_path)

    # Fallback to 404.html
    return FileResponse(f"{settings.frontend_base_dir}/404.html")
