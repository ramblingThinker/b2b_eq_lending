from fastapi import APIRouter, HTTPException
from typing import List
from app.models.todo import Todo, TodoCreate

router = APIRouter()

_todos: list[Todo] = []
_next_id = 1


@router.get("/health")
def health():
    return {"status": "ok"}


@router.get("/todos", response_model=List[Todo])
def list_todos():
    return _todos


@router.post("/todos", response_model=Todo, status_code=201)
def create_todo(payload: TodoCreate):
    global _next_id
    todo = Todo(id=_next_id, title=payload.title, done=False)
    _next_id += 1
    _todos.append(todo)
    return todo


@router.patch("/todos/{todo_id}", response_model=Todo)
def toggle(todo_id: int):
    for t in _todos:
        if t.id == todo_id:
            t.done = not t.done
            return t
    raise HTTPException(status_code=404, detail="Todo not found")
