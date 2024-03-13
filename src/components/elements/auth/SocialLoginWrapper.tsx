// components
import { useContext } from 'react';
import FlexWrapper from '../FlexWrapper';
import DiscordLogin from './DiscordLogin';
import GithubLogin from './GithubLogin';
import GoogleLogin from './GoogleLogin';
import { SlideContext } from '../../../context/SlideContext';

type Props = {
  children: React.ReactNode;
  classes: string;
};

function SocialButton({ children, classes }: Props) {
  return (
    <FlexWrapper
      classes={`!w-16 h-1/3 transition-all duration-150 ease-in hover:translate-x-2 bg-white shadow-md rounded-lg cursor-pointer pr-3 mb-1 last:mb-0 ${classes} justify-end`}
      alignItems="center"
    >
      {children}
    </FlexWrapper>
  );
}

export default function SocialLoginWrapper() {
  const { active } = useContext(SlideContext);
  const isActive = active === 'login';

  return (
    <FlexWrapper
      classes={`absolute !w-auto h-full -right-10 top-0 py-1 transition-all duration-300 delay-500 opacity-0 -translate-x-12 ${
        isActive ? 'opacity-100 !translate-x-0' : ''
      }`}
      alignItems="center"
      justifyContent="start"
      flexDirection="col"
    >
      <SocialButton classes="bg-gradient-to-t from-rose-500 to-rose-900">
        <GoogleLogin />
      </SocialButton>
      <SocialButton classes="bg-gradient-to-t from-stone-100 to-stone-300">
        <GithubLogin />
      </SocialButton>
      <SocialButton classes="bg-gradient-to-t from-indigo-500 to-indigo-900">
        <DiscordLogin />
      </SocialButton>
    </FlexWrapper>
  );
}
