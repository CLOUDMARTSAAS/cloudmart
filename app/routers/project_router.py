from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.config.logger import logger
from app.exchanges.Project import Project
from app.services import project_db_service as pds
from app.config.db_connection import get_session


router = APIRouter(tags=["v1/project"])


@router.get("/")
async def list_projects(db: Session = Depends(get_session)) -> list[Project]:
    logger.info("List all projects...")
    return await pds.get_all_projects(db)
