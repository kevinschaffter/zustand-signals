import { TodoList, TodoWrapper } from "../components";
import { useTodoStore } from "./todoStore";
import shallow from "zustand/shallow";
import { InfoBar } from "./info-bar";

export const Zustand = () => {
  const { todos, handleInput, addTodo, toggleIsCompleted, input, removeTodo } =
    useTodoStore((state) => {
      return {
        removeTodo: state.removeTodo,
        input: state.input,
        lastUpdated: state.lastUpdated,
        todos: state.todos,
        handleInput: state.handleInput,
        addTodo: state.addTodo,
        toggleIsCompleted: state.toggleIsCompleted,
      };
    }, shallow);

  const handleTodoClick = (idx: number) => () => toggleIsCompleted(idx);

  return (
    <TodoWrapper>
      <InfoBar />
      <TodoList
        inputValue={input}
        onAddTodo={addTodo}
        onInputChange={handleInput}
        onTodoClick={handleTodoClick}
        todos={todos}
        onRemoveTodo={removeTodo}
      />
    </TodoWrapper>
  );
};
