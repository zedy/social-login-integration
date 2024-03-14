import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { GuardProps } from '../../types/auth';

const AuthGuard = ({ children }: GuardProps) => {
  // const { user, isLoggedIn } = useAuth();

  const user = null;
  const isLoggedIn = false;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('auth guard');

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
