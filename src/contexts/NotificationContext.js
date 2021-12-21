import React, { useState, useContext } from "react";

const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [side, setSide] = useState("right");

  console.log(side);

  return (
    <NotificationContext.Provider
      value={{ notifications, setNotifications, side, setSide }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

// hook
const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export { NotificationProvider, useNotificationContext };
