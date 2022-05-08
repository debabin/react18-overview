import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const container = document.getElementById("root");

// Old 🍂
// ReactDOM.render(<App />, container);

// New 🌱
const root = createRoot(container as HTMLElement);

root.render(<App />);
// root.unmount();
