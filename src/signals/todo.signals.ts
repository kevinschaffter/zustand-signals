import { signal } from "@preact/signals-react";

export const lastUpdated = signal<string>("");

export const input = signal<string>("");

export const todos = signal<{ text: string; completed: boolean }[]>([
  { text: "test", completed: false },
]);
