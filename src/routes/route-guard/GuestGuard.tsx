import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// types
import useAuth from '../../hooks/useAuth';
import { GuardProps } from '../../types/auth';

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
