import { signal } from "@preact/signals-react";

export const lastUpdated = signal<string>("");

export const input = signal<string>("");

export const todos = signal<{
  todos: { text: string; completed: boolean }[];
  lastUpdated?: string;
}>({ todos: [{ text: "test", completed: false }] });
