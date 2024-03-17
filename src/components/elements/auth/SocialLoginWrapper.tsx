// libs
import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// components
import FlexWrapper from '../FlexWrapper';
import DiscordLogin from './DiscordLogin';
import GithubLogin from './GithubLogin';
import GoogleLogin from './GoogleLogin';
import { SlideContext } from '../../../context/SlideContext';
import { socialLoginApi } from '../../../api/mutations';
import { setSession } from '../../../utils/tokenizer';
import { useStore } from '../../../store/store';
import SocialButton from './SocialButton';
import { genericToastError, messageToastError } from '../../../utils/helpers';

/**
 * Wrapper component for the social login buttons.
 * It handles the general/global logic for the social login buttons.
 *
 * Each button has it's own internal logic tied directly to the social platform
 * it represents. The logic is implemented in the respective files for each button.
 *
 * @returns
 */
export default function SocialLoginWrapper() {
  const { data, mutate, isError } = useMutation(socialLoginApi);
  const { loginUser } = useStore();
  const navigate = useNavigate();
  const { active } = useContext(SlideContext);
  const isActive = active === 'login';

  // TODO: move this logic into a separate function
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
      messageToastError(message);
    }
  }

  if (isError) {
    genericToastError();
  }

  return (
    <FlexWrapper
      classes={`absolute !w-auto h-full -right-14 top-0 py-1 pr-3 overflow-hidden transition-all duration-300 delay-500 opacity-0 -translate-x-12 ${
        isActive ? 'opacity-100 !translate-x-0' : ''
      }`}
      alignItems="center"
      justifyContent="start"
      flexDirection="col"
    >
      <SocialButton classes="bg-gradient-to-t from-rose-500 to-rose-900">
        <GoogleLogin mutationCallback={mutate} />
      </SocialButton>
      <SocialButton classes="bg-gradient-to-t from-neautral-100 to-neutral-400">
        <GithubLogin mutationCallback={mutate} />
      </SocialButton>
      <SocialButton classes="bg-gradient-to-t from-indigo-400 to-indigo-700">
        <DiscordLogin mutationCallback={mutate} />
      </SocialButton>
    </FlexWrapper>
  );
}
