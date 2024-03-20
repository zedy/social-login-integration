// libs
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// types
import User from '@/types/user';
import { setSession } from '@/utils/tokenizer';

type State = {
  currentUser: User | null;
};

// initial state
export const initialState: State = {
  currentUser: null,
};

const storeObject = (set) => ({
  currentUser: null,
  loginUser: (user: User) =>
    set(
      (store: State) => ({
        ...store,
        currentUser: user,
      }),
      false,
      'user logged in'
    ),
  logoutUser: () => {
    set(
      (store: State) => ({
        ...store,
        currentUser: null,
      }),
      false,
      'user logged out'
    );
    setSession(null);
  },
  updateProfile: (profile) => {
    set(
      (store: State) => ({
        ...store,
        currentUser: { ...store.currentUser, profile },
      }),
      false,
      'user profile updated'
    );
  },
});

const withDevtools =
  import.meta.env.VITE_ENV === 'DEV' ? devtools(storeObject) : storeObject;

export const useStore = create(persist(withDevtools, { name: 'store' }));
