// context/ToastContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showSuccess = (msg) => {
    toast.success(msg, {
      onClose: () => setMessage(null), // Reset message after toast is closed
    });
    setMessage(msg);
  };

  const showError = (msg) => {
    toast.error(msg, {
      onClose: () => setMessage(null), // Reset message after toast is closed
    });
    setMessage(msg);
  };

  return (
    <ToastContext.Provider value={{ showSuccess, showError, message }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
