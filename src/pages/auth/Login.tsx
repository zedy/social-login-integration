// libs
import { useContext } from 'react';

// components
import Button from '../../components/elements/Button';
import Typography, { Type } from '../../components/elements/Typography';
import LoginForm from '../../components/form/Login.form';
import { SlideContext } from '../../context/SlideContext';
import InnerSlideWrapper, {
  AnimationType,
} from '../../components/elements/slides/InnerSlideWrapper';

/**
 * A function component that renders the LoginComponent.
 *
 * @see /login
 * @returns JSX
 */
export default function LoginComponent() {
  const { setActive } = useContext(SlideContext);

  const handleClick = () => {
    setActive('signup');
  };

  return (
    <InnerSlideWrapper id="login" type={AnimationType.Opacity}>
      <Typography
        component={Type.SPAN}
        classes="text-black text-xl font-bold leading-normal tracking-tight mb-12 text-center"
      >
        Sign in to your account
      </Typography>
      <LoginForm />
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
  );
}
