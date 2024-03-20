// libs
import { useContext } from 'react';

// components
import Button from '@/components/elements/Button';
import Typography, { Type } from '@/components/elements/Typography';
import { SlideContext } from '@/context/SlideContext';
import InnerSlideWrapper, {
  AnimationType,
} from '@/components/elements/slides/InnerSlideWrapper';
import SignupForm from '@/components/form/Signup.form';
import { registerUserApi } from '@/api/mutations';
import Loading from '@/components/Loading';
import useQueryMutation from '@/hooks/useQueryMutation';

/**
 * A functional component that renders the SignUpcomponent & Form.
 * It uses the useMutation hook from react-query to handle the API call.
 *
 * @see /login
 * @returns JSX
 */
export default function SignUpComponent() {
  const { setActive } = useContext(SlideContext);
  const { isLoading, mutate } = useQueryMutation(registerUserApi);

  const handleClick = () => {
    setActive('login');
  };

  return (
    <InnerSlideWrapper id="signup" type={AnimationType.TransitionY}>
      {isLoading && <Loading />}
      <Typography
        component={Type.SPAN}
        classes="text-black text-xl font-bold leading-normal tracking-tight mb-10 text-center"
      >
        Create an account
      </Typography>
      <SignupForm mutationCallback={mutate} />
      <Typography component={Type.SPAN} classes="flex mt-5 text-sm">
        Already have an account?{' '}
        <Typography
          component={Type.SPAN}
          classes="text-teal-600 cursor-pointer pl-2"
        >
          <Button
            className="no-underline hover:underline transition-all duration-300 font-bold text-sm"
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
