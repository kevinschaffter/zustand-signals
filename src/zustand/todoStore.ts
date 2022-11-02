import { ChangeEvent } from "react";
import create from "zustand";

type Todo = { text: string; completed: boolean };

export type TodoState = {
  todos: Todo[];
  lastUpdated?: string;
  input: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
  toggleIsCompleted: (index: number) => void;
  removeTodo: (index: number) => void;
};

export const useTodoStore = create<TodoState>((set) => ({
  todos: [{ text: "test", completed: false }],
  input: "",
  addTodo: () => {
    return set((state) => ({
      todos: [...state.todos, { text: state.input, completed: false }],
      input: "",
    }));
  },
  handleInput: (e: ChangeEvent<HTMLInputElement>) => {
    set({ input: e.target.value });
  },
  removeTodo: (index: number) => {
    set((state) => ({
      todos: state.todos.filter((_, idx) => idx !== index),
    }));
  },
  toggleIsCompleted: (index: number) => {
    set((state) => ({
      lastUpdated: new Date().toLocaleString(),
      todos: state.todos.map((todo, idx) => {
        if (idx === index) return { ...todo, completed: !todo.completed };
        return todo;
      }),
    }));
  },
}));
