import ReactDOM from "react-dom/client";
import Root from "./Root.tsx";
import "./index.css";
import "./variables.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
