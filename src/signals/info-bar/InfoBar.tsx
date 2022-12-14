import { memo } from "react";
import classes from "./InfoBar.module.scss";
import { lastUpdatedSignal, todosSignal } from "../todo.signals";
import { computed } from "@preact/signals-react";

export const InfoBar = memo(() => {
  const totalCompleted = computed(
    () => todosSignal.value.filter((t) => t.completed).length
  );

  return (
    <>
      <div className={classes.infoContainer}>
        <p>Total Completed:</p>
        <p>{totalCompleted.value}</p>
      </div>
      <div className={classes.infoContainer}>
        <p>Last Updated:</p>
        <p>{lastUpdatedSignal.value}</p>
      </div>
    </>
  );
});
