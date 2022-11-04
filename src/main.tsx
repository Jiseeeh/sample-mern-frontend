import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import { SharedTasksProvider } from "./lib/TaskContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SharedTasksProvider>
      <App />
      <Toaster />
    </SharedTasksProvider>
  </React.StrictMode>
);
