import { memo } from "react";
import classes from "./InfoBar.module.scss";
import { todos } from "../todo.signals";
import { computed } from "@preact/signals-react";

export const InfoBar = memo(() => {
  const totalCompleted = computed(
    () => todos.value.todos.filter((t) => t.completed).length
  );

  return (
    <>
      <div className={classes.lastUpdated}>
        <p>Total Completed:</p>
        <p>{totalCompleted.value}</p>
      </div>
      <div className={classes.lastUpdated}>
        <p>Last Updated:</p>
        <p>{todos.value.lastUpdated}</p>
      </div>
    </>
  );
});
