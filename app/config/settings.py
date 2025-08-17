from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os


class Settings(BaseSettings):
    profile: str
    log_level: str
    db_url: str
    db_schema: str
    frontend_base_dir: str = "public"


env_profile = os.environ.get("ACTIVE_PROFILE")
if env_profile is None:
    raise ValueError("ACTIVE_PROFILE is not set")
load_dotenv(f".env.{env_profile}")

settings = Settings()


def get_active_profile() -> str:
    return settings.profile
