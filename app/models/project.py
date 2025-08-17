from dataclasses import dataclass
from enum import Enum
from sqlalchemy import Column, Integer, String, Enum as SAEnum

from app.config.settings import settings
from app.models.audit import AuditMixin
from sqlalchemy.orm import declarative_base

Base = declarative_base()


class ProjectStatus(Enum):
    PLANNING = "PLANNING"  # Will not display these
    BETA = "BETA"
    ACTIVE = "ACTIVE"
    DEPRECATED = "DEPRECATED"
    DECOMMISSIONED = "DECOMMISSIONED"  # Will not display these


@dataclass
class DbProject(Base, AuditMixin):
    __tablename__ = "project"
    __table_args__ = {"schema": settings.db_schema}
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    short_description = Column(String, nullable=False)
    long_description = Column(String, nullable=False)
    url = Column(String, nullable=False)
    status = Column(
        SAEnum(ProjectStatus, name="status", native_enum=False), nullable=False
    )
