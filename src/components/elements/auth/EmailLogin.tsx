// libs
import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// components
import { SlideContext } from '../../../context/SlideContext';
import Typography, { Type } from '../Typography';
import LoginForm from '../../form/Login.form';
import Button from '../Button';
import { loginFormUserApi } from '../../../api/mutations';
import { messageToastError, messageToastSuccess } from '../../../utils/helpers';
import { useStore } from '../../../store/store';
import { setSession } from '../../../utils/tokenizer';
import FlexWrapper from '../FlexWrapper';
import Loading from '../../Loading';
import { ModalContext } from '../../../context/ModalContext';

/**
 * A function component that renders the LoginComponent.
 *
 * @see /login
 * @returns JSX
 */
export default function EmailLogin() {
  const { setIsOpen } = useContext(ModalContext);
  const { loginUser } = useStore();
  const navigate = useNavigate();
  const { setActive } = useContext(SlideContext);
  const { data, mutate, isLoading, isError, error } =
    useMutation(loginFormUserApi);

  const handleClick = () => {
    setActive('signup');
    setIsOpen(false);
  };

  if (isError) {
    const { message } = error as { message: string };
    messageToastError(message);
  }

  // TODO: move this logic into a separate function [hook?]
  if (data) {
    const { message, token, user } = data;
    if (user) {
      messageToastSuccess(message);
      setSession(token);
      loginUser(user);
      navigate('/');
    } else {
      messageToastError(message);
    }
  }

  return (
    <FlexWrapper flexDirection="col">
      {isLoading && <Loading />}
      <LoginForm mutationCallback={mutate} />
      <Typography component={Type.SPAN} classes="flex mt-5 text-sm">
        Don&apos;t have an account?{' '}
        <Typography
          component={Type.SPAN}
          classes="text-emerald-800 cursor-pointer pl-2"
        >
          <Button
            className="no-underline hover:underline transition-all duration-300 font-bold text-sm"
            onClick={handleClick}
          >
            Sign up
          </Button>
        </Typography>
      </Typography>
    </FlexWrapper>
  );
}
