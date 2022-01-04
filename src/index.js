import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { NotificationProvider } from "./contexts/NotificationContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
