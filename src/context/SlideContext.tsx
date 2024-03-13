import React, { useMemo, useState } from 'react';

type Active = 'login' | 'signup';

type ContextProps = {
  active: Active;
  setActive: React.Dispatch<React.SetStateAction<Active>>;
};

type ProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const initialContext = {} as ContextProps;

export const SlideContext = React.createContext(initialContext);

/**
 * This context provider is used to manage the active slide on any page.
 *
 * The logic was moved out of the parent component and into this context provider,
 * so as to centralize the logic and make it easier to manage.
 */
export function SlideContextProvider({ children }: ProviderProps) {
  const [active, setActive] = useState<Active>('login');

  const provide: ContextProps = useMemo(
    () => ({
      active,
      setActive,
    }),
    [active]
  );

  return (
    <SlideContext.Provider value={provide}>{children}</SlideContext.Provider>
  );
}
