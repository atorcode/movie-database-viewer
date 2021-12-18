import React, { useState, useContext } from "react";

const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  // if (notifications) {
  //   setTimeout(() => {
  //     setNotifications(notifications.slice(1));
  //   }, 3000);
  // }

  console.log(notifications);

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
