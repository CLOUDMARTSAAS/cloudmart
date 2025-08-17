from pydantic import BaseModel
from datetime import datetime

from app.models.project import ProjectStatus


class Project(BaseModel):
    id: int
    name: str
    short_description: str
    long_description: str
    url: str
    status: ProjectStatus
    created: datetime
    updated: datetime

    model_config = {"from_attributes": True}
