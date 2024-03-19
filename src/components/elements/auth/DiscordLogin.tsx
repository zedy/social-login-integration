// libs
import { useEffect } from 'react';
import { DiscordFilled, LoadingOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';

// components
import FlexWrapper from '../FlexWrapper';
import Button from '../Button';
import { SocialLoginProps } from '../../../types/auth';
import getDiscordResponse from '../../../api/discord';

/**
 * Custom implementation of the Discord OAuth2 login workflow.
 *
 * When the users click on the button it will trigger getDiscordCode function
 * which will redirect the user to the Discord OAuth2 login page. If they click accept
 * they will be redirected back to the app with a code in the URL. This code will be used
 * to get the user's data from Discord via the getDiscordResponse function. Which
 * has the task of exchanging the code for an access token and then using that token
 * to get the user's data. After that, the data will be sent to the mutationCallback function
 * which will handle the data accordingly.
 *
 */
export default function DiscordLogin({ mutationCallback }: SocialLoginProps) {
  const [searchParams] = useSearchParams();
  const code = searchParams.getAll('code');

  const getDiscordCode = () => {
    const clientId = import.meta.env.VITE_DISCORD_APP_ID;
    const redirectUrl = `${import.meta.env.VITE_HOST}/login`;

    window.location.href = `https://discord.com/oauth2/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(
      redirectUrl
    )}&scope=identify+email`;
  };

  useEffect(() => {
    getDiscordResponse(code, mutationCallback);
  }, []);

  return (
    <FlexWrapper classes="mr-[8px]">
      <LoadingOutlined
        style={{ color: '#fff', fontSize: '18px', marginRight: '24px' }}
      />
      <Button onClick={getDiscordCode}>
        <DiscordFilled style={{ color: '#fff', fontSize: '18px' }} />
      </Button>
    </FlexWrapper>
  );
}
