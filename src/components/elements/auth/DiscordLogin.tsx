// libs
import { useCallback } from 'react';
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login';
import { DiscordFilled } from '@ant-design/icons';

export default function DiscordLogin() {
  const onLoginStart = useCallback(() => {
    console.log('login start');
  }, []);

  return (
    <LoginSocialGoogle
      isOnlyGetToken
      client_id="821362177792-nfcc1e19e7bbfnq1li8gkeir6j3pt7rs.apps.googleusercontent.com"
      onLoginStart={onLoginStart}
      onResolve={({ provider, data }: IResolveParams) => {
        console.log(provider);
        console.log(data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <DiscordFilled style={{ color: '#fff', fontSize: '18px' }} />
    </LoginSocialGoogle>
  );
}
