import React from "react";
import "./App.css";

// import { Batching } from "./batching/batching";
import { List } from "./hooks/useDefferedValue";
// import { List } from "./hooks/useTransition";

export const App = () => {
  return (
    <React.StrictMode>
      <React.Fragment>
        <List />
      </React.Fragment>
    </React.StrictMode>
  );
};
