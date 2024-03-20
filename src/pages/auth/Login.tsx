// libs
import { useContext } from 'react';

// components
import InnerSlideWrapper, {
  AnimationType,
} from '@/components/elements/slides/InnerSlideWrapper';
import FlexWrapper from '@/components/elements/FlexWrapper';
import LoginButtonsWrapper from '@/components/elements/auth/LoginButtonsWrapper';
import EmailLogin from '@/components/elements/auth/EmailLogin';
import Modal from '@/components/elements/Modal';
import { ModalContext } from '@/context/ModalContext';
import Typography, { Type } from '@/components/elements/Typography';

/**
 * A function component that renders the LoginComponent.
 *
 * @see /login
 * @returns JSX
 */
export default function LoginComponent() {
  const { isOpen } = useContext(ModalContext);

  return (
    <FlexWrapper
      classes="relative !w-auto"
      alignItems="center"
      justifyContent="center"
      flexDirection="col"
    >
      <InnerSlideWrapper id="login" type={AnimationType.Opacity}>
        <Typography component={Type.H3} classes="text-lg font-bold mb-4">
          Welcome, please sign in
        </Typography>
        <LoginButtonsWrapper />
        <Modal isOpen={isOpen} title="Sign into your account">
          <EmailLogin />
        </Modal>
      </InnerSlideWrapper>
    </FlexWrapper>
  );
}
