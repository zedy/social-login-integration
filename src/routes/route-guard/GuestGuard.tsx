import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// types
import { GuardProps } from '../../types/auth';

// store
import { useStore } from '../../store/store';

/**
 * Route Guard Component
 *
 * The purpose of this component is to protect routes from authenticated users.
 * These routes are only accessible to unauthenticated users. (like the login page)
 *
 * If you want to do the opposite, use the AuthGuard component.
 */
const GuestGuard = ({ children }: GuardProps) => {
  const { currentUser } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentUser) {
      navigate(location?.state?.from ? location?.state?.from : '/', {
        state: {
          from: '',
        },
        replace: true,
      });
    }
  }, [currentUser, navigate, location]);

  return children;
};

export default GuestGuard;
