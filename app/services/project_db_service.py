from sqlalchemy.orm import Session
from app.exchanges.Project import Project
from app.models.project import DbProject


async def _get_all_projects(db: Session) -> list[DbProject]:
    """
    Service that retrieves all projects from database
    """
    return db.query(DbProject).all()


async def get_all_projects(db: Session) -> list[Project]:
    """
    Service that retrieves all projects from database
    and transform into exchange format
    """
    db_projects = await _get_all_projects(db)
    return [Project.model_validate(proj) for proj in db_projects]
