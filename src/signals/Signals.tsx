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
  };

  const handleTodoClick = (index: number) => () => {
    todos.value = todos.value.map((todo, idx) =>
      idx === index ? { ...todo, completed: !todo.completed } : todo
    );
    lastUpdated.value = new Date().toLocaleString();
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
