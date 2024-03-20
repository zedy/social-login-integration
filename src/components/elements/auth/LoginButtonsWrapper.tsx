// libs
import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

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
import Button from '../Button';
import Typography, { Type } from '../Typography';
import { ModalContext } from '../../../context/ModalContext';

/**
 * Wrapper component for the social login buttons.
 * It handles the general/global logic for the social login buttons.
 *
 * Each button has it's own internal logic tied directly to the social platform
 * it represents. The logic is implemented in the respective files for each button.
 *
 * @returns
 */
export default function LoginButtonsWrapper() {
  const { data, mutate, isError } = useMutation(socialLoginApi);
  const { setIsOpen } = useContext(ModalContext);
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

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <FlexWrapper
      classes={`transition-all !w-64 duration-300 delay-500 opacity-0 -translate-x-12 ${
        isActive ? 'opacity-100 !translate-x-0' : ''
      }`}
      alignItems="center"
      justifyContent="center"
      flexDirection="col"
    >
      <SocialButton classes="bg-gradient-to-t from-rose-500 to-rose-900 transition-all hover:from-rose-800 hover:to-rose-900">
        <GoogleLogin mutationCallback={mutate} />
      </SocialButton>
      <SocialButton classes="bg-gradient-to-t from-neutral-100 to-neutral-300 transition-all hover:from-neutral-300 hover:to-neutral-300">
        <GithubLogin mutationCallback={mutate} />
      </SocialButton>
      <SocialButton classes="bg-gradient-to-t from-indigo-400 to-indigo-700 transition-all hover:from-indigo-700 hover:to-indigo-700">
        <DiscordLogin mutationCallback={mutate} />
      </SocialButton>
      <SocialButton classes="bg-gradient-to-t from-emerald-700 to-emerald-900 hover:from-emerald-800 hover:to-emerald-900">
        <Button
          className="w-full"
          type="button"
          onClick={handleModalOpen}
          icon={<MailOutlined style={{ color: '#fff', fontSize: '16px' }} />}
        >
          <Typography
            classes="text-gray-200 ml-2 text-sm"
            component={Type.SPAN}
          >
            Email
          </Typography>
        </Button>
      </SocialButton>
    </FlexWrapper>
  );
}
