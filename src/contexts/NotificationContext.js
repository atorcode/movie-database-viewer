import React, { useState, useContext } from "react";

const NotificationContext = React.createContext();

const NotificationProvider = ({ children }) => {
  // make an array of recentNotifications instead
  const [showNotification, setShowNotification] = useState(false);

  // fix later
  if (showNotification) {
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }
  return (
    <NotificationContext.Provider
      value={{ showNotification, setShowNotification }}
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
