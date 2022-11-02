import { ChangeEvent } from "react";
import classes from "./TodoList.module.scss";
import { FaCheckCircle, FaPlusCircle, FaTrash } from "react-icons/fa";

type ToDoListProps = {
  todos: { text: string; completed: boolean }[];
  onTodoClick: (index: number) => () => void;
  onAddTodo: () => void;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  onRemoveTodo: (index: number) => void;
};

export const TodoList = ({
  inputValue,
  todos,
  onTodoClick,
  onAddTodo,
  onInputChange,
  onRemoveTodo,
}: ToDoListProps) => {
  const handleRemoveTodo = (index: number) => (e: any) => {
    e.stopPropagation();
    onRemoveTodo(index);
  };
  return (
    <section className={classes.toDoContainer}>
      <div className={classes.list}>
        {todos.map((todo, index) => (
          <div
            className={classes.todoItem}
            onClick={onTodoClick(index)}
            key={todo.text}
          >
            <p>{todo.text}</p>
            <div className={classes.iconContainer}>
              {todo.completed && <FaCheckCircle color="#27ae60" />}
              <FaTrash color="#c0392b" onClick={handleRemoveTodo(index)} />
            </div>
          </div>
        ))}
      </div>
      <div className={classes.inputContainer}>
        <input
          value={inputValue}
          className={classes.input}
          onChange={onInputChange}
        ></input>
        <button onClick={onAddTodo} className={classes.button}>
          <FaPlusCircle color="green" size="24px" />
        </button>
      </div>
    </section>
  );
};
