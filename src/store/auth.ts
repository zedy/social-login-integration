/* eslint-disable @typescript-eslint/default-param-last */
import { AuthActionProps, AuthProps } from '../types/auth';
import { LOGIN, LOGOUT, REGISTER } from './actions';

// initial state
export const initialState: AuthProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
  token: null,
};

const auth = (state = initialState, action: AuthActionProps) => {
  switch (action.type) {
    case REGISTER: {
      const { user } = action.payload!;
      return {
        ...state,
        user,
      };
    }
    case LOGIN: {
      const { user, token } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user,
        token,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
