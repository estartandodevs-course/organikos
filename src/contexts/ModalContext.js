import { createContext, useState } from 'react';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(!isOpen);
  };

  return <ModalContext.Provider value={{ handleModalClose, isOpen }}>{children}</ModalContext.Provider>;
};
