import React, { useState } from 'react';

type ContextProperties = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContext = {} as ContextProperties;

const INITIAL_STATE = {
  isOpen: false,
};

export const ModalContext = React.createContext(initialContext);

export function ModalContextProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(INITIAL_STATE.isOpen);

  const provide = React.useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen, setIsOpen]
  );

  return (
    <ModalContext.Provider value={provide}>{children}</ModalContext.Provider>
  );
}
