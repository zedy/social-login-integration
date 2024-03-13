// libs
import { useCallback } from 'react';
import { LoginSocialGithub, IResolveParams } from 'reactjs-social-login';
import { GithubFilled } from '@ant-design/icons';

export default function GithubLogin() {
  const onLoginStart = useCallback(() => {
    console.log('login start');
  }, []);

  return (
    <LoginSocialGithub
      client_id={import.meta.env.VITE_GITHUB_APP_ID || ''}
      client_secret={import.meta.env.VITE_GITHUB_APP_SECRET || ''}
      redirect_uri={`${import.meta.env.VITE_HOST}/login`}
      onLoginStart={onLoginStart}
      onResolve={({ provider, data }: IResolveParams) => {
        console.log(provider);
        console.log(data);
      }}
      onReject={(err: any) => {
        console.log(err);
      }}
    >
      <GithubFilled style={{ color: '#000', fontSize: '18px' }} />
    </LoginSocialGithub>
  );
}
