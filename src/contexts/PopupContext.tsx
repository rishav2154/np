import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PopupContextType {
  showPopup: (content: ReactNode, type?: 'info' | 'success' | 'warning' | 'error') => void;
  hidePopup: () => void;
  popup: {
    isVisible: boolean;
    content: ReactNode;
    type: 'info' | 'success' | 'warning' | 'error';
  };
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [popup, setPopup] = useState({
    isVisible: false,
    content: null as ReactNode,
    type: 'info' as 'info' | 'success' | 'warning' | 'error'
  });

  const showPopup = (content: ReactNode, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
    setPopup({ isVisible: true, content, type });
  };

  const hidePopup = () => {
    setPopup(prev => ({ ...prev, isVisible: false }));
  };

  return (
    <PopupContext.Provider value={{ showPopup, hidePopup, popup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};