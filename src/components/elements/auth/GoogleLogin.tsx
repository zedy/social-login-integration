// libs
import { useCallback } from 'react';
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login';
import { GoogleOutlined } from '@ant-design/icons';

export default function GoogleLogin() {
  const onLoginStart = useCallback(() => {
    console.log('login start');
  }, []);

  return (
    <LoginSocialGoogle
      client_id={import.meta.env.VITE_GOOGLE_APP_ID || ''}
      onLoginStart={onLoginStart}
      onResolve={({ provider, data }: IResolveParams) => {
        console.log(provider);
        console.log(data);
      }}
      onReject={(err) => {
        console.log(err);
      }}
    >
      <GoogleOutlined style={{ color: '#fff', fontSize: '18px' }} />
    </LoginSocialGoogle>
  );
}
