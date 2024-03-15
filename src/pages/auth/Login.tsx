// libs
import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// components
import Button from '../../components/elements/Button';
import Typography, { Type } from '../../components/elements/Typography';
import LoginForm from '../../components/form/Login.form';
import { SlideContext } from '../../context/SlideContext';
import InnerSlideWrapper, {
  AnimationType,
} from '../../components/elements/slides/InnerSlideWrapper';
import FlexWrapper from '../../components/elements/FlexWrapper';
import SocialLoginWrapper from '../../components/elements/auth/SocialLoginWrapper';
import { useStore } from '../../store/store';
import { loginFormUserApi } from '../../api/mutations';
import Loading from '../../components/Loading';
import { setSession } from '../../utils/tokenizer';

/**
 * A function component that renders the LoginComponent.
 *
 * @see /login
 * @returns JSX
 */
export default function LoginComponent() {
  const { data, mutate, isLoading, isError, error } =
    useMutation(loginFormUserApi);
  const { setActive } = useContext(SlideContext);
  const { loginUser } = useStore();
  const navigate = useNavigate();

  const handleClick = () => {
    setActive('signup');
  };

  if (isError) {
    toast.error(error as string);
  }

  // TODO: move this logic into a separate function [hook?]
  if (data) {
    const { message, token, user } = data;
    if (user) {
      toast.success(message, {
        id: message,
      });
      setSession(token);
      loginUser(user);
      navigate('/');
    } else {
      toast.error(message, {
        id: message,
      });
    }
  }

  return (
    <FlexWrapper
      classes="relative !w-auto"
      alignItems="center"
      justifyContent="center"
      flexDirection="col"
    >
      {isLoading && <Loading />}
      <SocialLoginWrapper />
      <InnerSlideWrapper id="login" type={AnimationType.Opacity}>
        <Typography
          component={Type.SPAN}
          classes="text-black text-xl font-bold leading-normal tracking-tight mb-12 text-center"
        >
          Sign in to your account
        </Typography>
        <LoginForm mutationCallback={mutate} />
        <Typography component={Type.SPAN} classes="flex mt-5">
          Don&apos;t have an account?{' '}
          <Typography
            component={Type.SPAN}
            classes="text-emerald-800 cursor-pointer pl-2"
          >
            <Button
              className="no-underline hover:underline transition-all duration-300 font-bold"
              onClick={handleClick}
              onMouseDown={handleClick}
            >
              Sign up
            </Button>
          </Typography>
        </Typography>
      </InnerSlideWrapper>
    </FlexWrapper>
  );
}
