// libs
import { useContext } from 'react';

// components
import AuthContext from '../context/AuthContext';

/**
 * A function/hooks that returns the context of the AuthContext.
 */
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;
