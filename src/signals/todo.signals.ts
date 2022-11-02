import { signal } from "@preact/signals-react";

export const lastUpdatedSignal = signal<string>("");

export const inputSignal = signal<string>("");

export const todosSignal = signal<{ text: string; completed: boolean }[]>([
  { text: "test", completed: false },
]);
