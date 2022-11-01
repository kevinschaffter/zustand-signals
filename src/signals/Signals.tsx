import { batch, signal } from "@preact/signals-react";
import { input, todos, lastUpdated } from "./todo.signals";
import { InfoBar } from "./info-bar";
import { TodoList, TodoWrapper } from "../components";

export const Signals = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    input.value = e.target.value;
  };

  const handleAddTodo = () => {
    todos.value = [...todos.value, { text: input.value, completed: false }];
    input.value = "";
    lastUpdated.value = new Date().toLocaleString();
  };

  const handleTodoClick = (index: number) => () => {
    todos.value = todos.value.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
  };

  return (
    <TodoWrapper>
      <InfoBar />
      <TodoList
        handleAddTodo={handleAddTodo}
        handleInputChange={handleInputChange}
        handleTodoClick={handleTodoClick}
        todos={todos.value}
      />
    </TodoWrapper>
  );
};
