import { memo } from "react";
import classes from "./InfoBar.module.scss";
import { useTodoStore } from "../todoStore";
import shallow from "zustand/shallow";

export const InfoBar = memo(() => {
  const [lastUpdated, totalCompleted] = useTodoStore(
    (state) => [
      state.lastUpdated,
      state.todos.filter((todo) => todo.completed).length,
    ],
    shallow
  );

  return (
    <>
      <div className={classes.infoContainer}>
        <p>Total Completed:</p>
        <p>{totalCompleted}</p>
      </div>
      <div className={classes.infoContainer}>
        <p>Last Updated:</p>
        <p>{lastUpdated}</p>
      </div>
    </>
  );
});
