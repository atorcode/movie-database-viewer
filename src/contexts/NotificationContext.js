import React, { useState, useContext } from "react";

const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  console.log(notifications);

  // if (notifications) {
  //   setTimeout(() => {
  //     setNotifications(notifications.slice(1));
  //   }, 3000);
  // }

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

// hook
const useNotificationContext = () => {
  return useContext(NotificationContext);
};

export { NotificationProvider, useNotificationContext };
