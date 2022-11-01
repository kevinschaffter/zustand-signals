import classes from "./TodoWrapper.module.scss";
import { ReactNode } from "react";

export const TodoWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.header}>To Do List</h1>
        {children}
      </div>
    </div>
  );
};
