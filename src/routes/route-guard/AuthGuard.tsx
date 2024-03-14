import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { GuardProps } from '../../types/auth';

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
  const { user, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('login', {
        state: {
          from: location.pathname,
        },
        replace: true,
      });
    }
  }, [isLoggedIn, navigate, location, user]);

  return children;
};

export default AuthGuard;
