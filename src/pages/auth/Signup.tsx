// libs
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

// components
import Button from '../../components/elements/Button';
import Typography, { Type } from '../../components/elements/Typography';
import { SlideContext } from '../../context/SlideContext';
import InnerSlideWrapper, {
  AnimationType,
} from '../../components/elements/slides/InnerSlideWrapper';
import SignupForm from '../../components/form/Signup.form';
import registerUserApi from '../../api/mutations';
import Loading from '../../components/Loading';
import { setSession } from '../../utils/tokenizer';
import { useStore } from '../../store/store';

/**
 * A functional component that renders the SignUpcomponent & Form.
 * It uses the useMutation hook from react-query to handle the API call.
 *
 * @see /login
 * @returns JSX
 */
export default function SignUpComponent() {
  const { data, mutate, isLoading, isError } = useMutation(registerUserApi);
  const { setActive } = useContext(SlideContext);
  const { loginUser } = useStore();
  const navigate = useNavigate();

  const handleClick = () => {
    setActive('login');
  };

  if (isError) {
    toast.error('Error registering user. Please try again later.');
  }

  // TODO: move this logic into a separate function
  if (data) {
    const { created, message, token, user } = data;

    if (created) {
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
    <InnerSlideWrapper id="signup" type={AnimationType.TransitionY}>
      {isLoading && <Loading />}
      <Typography
        component={Type.SPAN}
        classes="text-black text-xl font-bold leading-normal tracking-tight mb-12 text-center"
      >
        Create an account
      </Typography>
      <SignupForm mutationCallback={mutate} />
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
