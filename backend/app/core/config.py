from pydantic import BaseModel
import os
from dotenv import load_dotenv

load_dotenv()


class Settings(BaseModel):
    api_prefix: str = "/api"
    cors_origins: list[str] = [
        os.getenv("CORS_ORIGIN", "http://localhost:5173")]


settings = Settings()
