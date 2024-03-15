import { ReactElement } from 'react';
import User from './user';

export type GuardProps = {
  children: ReactElement | null;
};

export type RegisterProps = {
  user: User;
  token: string;
  message: string;
  created: boolean;
};

export type AuthProps = {
  isLoggedIn?: boolean;
  user?: User | null;
  token?: string | null;
  isInitialized?: boolean;
};

export type AuthActionProps = {
  type: string;
  payload?: AuthProps;
};

export type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null | undefined;
  isInitialized: boolean;
  logout: () => void;
  login: (data: Record<string, string>) => Promise<void>;
  registerUser: (
    data: Record<string, string>
  ) => Promise<{ message: string; created: boolean }>;
};
