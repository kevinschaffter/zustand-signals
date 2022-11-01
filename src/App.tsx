import classes from "./App.module.scss";
import { useState } from "react";
import { Signals } from "./signals";
import classNames from "classnames";

type Views = "signals" | "zustand";

const App = () => {
  const [currentView, setCurrentView] = useState<"signals" | "zustand">(
    "signals"
  );

  const handleToggle = (view: Views) => () => setCurrentView(view);

  return (
    <div className={classes.appContainer}>
      <div className={classes.selector}>
        <button
          className={classNames({
            [classes.active]: currentView === "signals",
          })}
          onClick={handleToggle("signals")}
        >
          <h2>Signals</h2>
        </button>
        <button
          className={classNames({
            [classes.active]: currentView === "zustand",
          })}
          onClick={handleToggle("zustand")}
        >
          <h2>Zustand</h2>
        </button>
      </div>
      {currentView === "signals" ? <Signals /> : <div>Zustand</div>}
    </div>
  );
};

export default App;
