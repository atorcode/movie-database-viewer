import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { NotificationProvider } from "./contexts/NotificationContext";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
