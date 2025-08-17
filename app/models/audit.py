from dataclasses import dataclass
from sqlalchemy import Column, DateTime, func


@dataclass
class AuditMixin:
    created = Column(DateTime, default=func.now())
    updated = Column(DateTime, default=func.now(), onupdate=func.now())
