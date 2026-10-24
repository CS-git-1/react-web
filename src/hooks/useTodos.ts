import { useState } from 'react';
import type { Todo } from '../types/todo';

/** Keeps the todo collection in React state (memory only; no database or browser storage). */
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(title: string) {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    setTodos((current) => [
      { id: crypto.randomUUID(), title: cleanTitle, completed: false },
      ...current,
    ]);
  }

  function toggleTodo(id: string) {
    setTodos((current) => current.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    ));
  }

  function deleteTodo(id: string) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos((current) => current.filter((todo) => !todo.completed));
  }

  return { todos, addTodo, toggleTodo, deleteTodo, clearCompleted };
}
