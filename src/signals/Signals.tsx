import { inputSignal, todosSignal, lastUpdatedSignal } from "./todo.signals";
import { InfoBar } from "./info-bar";
import { TodoList, TodoWrapper } from "../components";

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  inputSignal.value = e.target.value;
};

const handleAddTodo = () => {
  todosSignal.value = [
    ...todosSignal.value,
    { text: inputSignal.value, completed: false },
  ];
  inputSignal.value = "";
};

const handleTodoClick = (index: number) => () => {
  todosSignal.value = todosSignal.value.map((todo, idx) =>
    idx === index ? { ...todo, completed: !todo.completed } : todo
  );
  lastUpdatedSignal.value = new Date().toLocaleString();
};

const handleRemoveTodo = (index: number) => {
  todosSignal.value = todosSignal.value.filter((_, idx) => idx !== index);
};

export const Signals = () => {
  return (
    <TodoWrapper>
      <InfoBar />
      <TodoList
        inputValue={inputSignal.value}
        onAddTodo={handleAddTodo}
        onInputChange={handleInputChange}
        onTodoClick={handleTodoClick}
        onRemoveTodo={handleRemoveTodo}
        todos={todosSignal.value}
      />
    </TodoWrapper>
  );
};
