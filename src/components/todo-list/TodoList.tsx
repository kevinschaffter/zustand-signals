import React from "react";
import classes from "./TodoList.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import { input } from "../../signals/todo.signals";

type ToDoListProps = {
  todos: { text: string; completed: boolean }[];
  handleTodoClick: (index: number) => () => void;
  handleAddTodo: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TodoList = ({
  todos,
  handleTodoClick,
  handleAddTodo,
  handleInputChange,
}: ToDoListProps) => {
  return (
    <section className={classes.toDoContainer}>
      <div className={classes.list}>
        {todos.map((todo, index) => (
          <div
            className={classes.todoItem}
            onClick={handleTodoClick(index)}
            key={todo.text}
          >
            <p>{todo.text}</p>
            {todo.completed && <FaCheckCircle color="green" />}
          </div>
        ))}
      </div>
      <div className={classes.inputContainer}>
        <input
          value={input.value}
          className={classes.input}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </section>
  );
};
