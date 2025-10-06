from pydantic import BaseModel
from typing import Optional


class Todo(BaseModel):
    id: int
    title: str
    done: bool = False


class TodoCreate(BaseModel):
    title: str
