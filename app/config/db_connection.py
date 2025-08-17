from sqlalchemy import create_engine

from sqlalchemy.orm import sessionmaker

from app.config.logger import logger
from app.config.settings import settings

db_engine = create_engine(settings.db_url, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=db_engine)


def get_session():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def test_db_connection():
    logger.info("Establishing connection with db...")
    with db_engine.connect():
        logger.info("Connection with db success!")
        pass
