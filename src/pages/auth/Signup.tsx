// libs
import { useContext } from 'react';

// components
import Button from '../../components/elements/Button';
import Typography, { Type } from '../../components/elements/Typography';
import { SlideContext } from '../../context/SlideContext';
import InnerSlideWrapper, {
  AnimationType,
} from '../../components/elements/slides/InnerSlideWrapper';
import SignupForm from '../../components/form/Signup.form';

/**
 * A function component that renders the SignUpcomponent.
 *
 * @see /login
 * @returns JSX
 */
export default function SignUpComponent() {
  const { setActive } = useContext(SlideContext);

  const handleClick = () => {
    setActive('login');
  };

  return (
    <InnerSlideWrapper id="signup" type={AnimationType.TransitionY}>
      <Typography
        component={Type.SPAN}
        classes="text-black text-xl font-bold leading-normal tracking-tight mb-12 text-center"
      >
        Create an account
      </Typography>
      <SignupForm />
      <Typography component={Type.SPAN} classes="flex mt-5">
        Already have an account?{' '}
        <Typography
          component={Type.SPAN}
          classes="text-teal-600 cursor-pointer pl-2"
        >
          <Button
            className="no-underline hover:underline transition-all duration-300 font-bold"
            onClick={handleClick}
            onMouseDown={handleClick}
          >
            Login
          </Button>
        </Typography>
      </Typography>
    </InnerSlideWrapper>
  );
}
