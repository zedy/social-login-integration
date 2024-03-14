import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// types
import useAuth from '../../hooks/useAuth';
import { GuardProps } from '../../types/auth';

/**
 * Route Guard Component
 *
 * The purpose of this component is to protect routes from authenticated users.
 * These routes are only accessible to unauthenticated users. (like the login page)
 *
 * If you want to do the opposite, use the AuthGuard component.
 */
const GuestGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(location?.state?.from ? location?.state?.from : '/', {
        state: {
          from: '',
        },
        replace: true,
      });
    }
  }, [isLoggedIn, navigate, location]);

  return children;
};

export default GuestGuard;
