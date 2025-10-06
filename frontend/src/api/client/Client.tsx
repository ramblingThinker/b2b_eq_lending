import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export const getHealth = () => api.get("/health");
export const listTodos = () => api.get("/todos");
export const createTodo = (title: string) => api.post("/todos", { title });
export const toggleTodo = (id: number) => api.patch(`/todos/${id}`);