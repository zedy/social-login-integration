// libs
import { useContext } from 'react';

// components
import { SlideContext } from '@/context/SlideContext';
import Typography, { Type } from '@/components/elements/Typography';
import LoginForm from '@/components/form/Login.form';
import Button from '@/components/elements/Button';
import { loginFormUserApi } from '@/api/mutations';
import FlexWrapper from '@/components/elements/FlexWrapper';
import Loading from '@/components/Loading';
import { ModalContext } from '@/context/ModalContext';
import useQueryMutation from '@/hooks/useQueryMutation';

/**
 * A function component that renders the LoginComponent.
 *
 * @see /login
 * @returns JSX
 */
export default function EmailLogin() {
  const { isLoading, mutate } = useQueryMutation(loginFormUserApi);
  const { setIsOpen } = useContext(ModalContext);
  const { setActive } = useContext(SlideContext);

  const handleClick = () => {
    setActive('signup');
    setIsOpen(false);
  };

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
