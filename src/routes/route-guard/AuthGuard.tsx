// libs
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// components
import { GuardProps } from '@/types/auth';
import { useStore } from '@/store/store';

/**
 * Route Guard Component
 *
 * The purpose of this component is to protect the route from unauthorized access
 * and redirect the user to the login page if they are not authenticated.
 *
 * You wrap any route component with the AuthGuard component to protect it.
 * If you want to do the opposite, use the GuestGuard component.
 *
 * @param {GuardProps} { children }
 */
const AuthGuard = ({ children }: GuardProps) => {
  const { currentUser } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!currentUser) {
      navigate('login', {
        state: {
          from: location.pathname,
        },
        replace: true,
      });
    }
  }, [navigate, location, currentUser]);

  return children;
};

export default AuthGuard;
