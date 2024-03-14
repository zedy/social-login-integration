/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useCallback, useMemo, useReducer } from 'react';

// project import
import authReducer, { initialState } from '../store/auth';
import { AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const logout = useCallback(async () => {
    console.log('logut triggered');
  }, []);

  const login = useCallback(async () => {
    console.log('login triggered');
  }, []);

  const registerUser = useCallback(async () => {
    console.log('register triggered');
  }, []);

  const authValue = useMemo(
    () => ({
      ...state,
      login,
      logout,
      registerUser,
    }),
    [state, login, logout, registerUser]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
