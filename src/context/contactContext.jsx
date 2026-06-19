
import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContact = () => setIsOpen(true);
  const closeContact = () => setIsOpen(false);

  return (
    <ContactContext.Provider
      value={{
        isOpen,
        openContact,
        closeContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => {
  return useContext(ContactContext);
};