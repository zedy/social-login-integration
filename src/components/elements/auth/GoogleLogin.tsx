// libs
import { useCallback, useState } from 'react';
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login';
import { GoogleOutlined, LoadingOutlined } from '@ant-design/icons';

// components
import FlexWrapper from '../FlexWrapper';
import { parseGoogleData } from '../../../utils/socialDataParser';

type Props = {
  mutationCallback: (data: Record<string, string>) => void;
};

export default function GoogleLogin({ mutationCallback }: Props) {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const onLoginStart = useCallback(() => {
    setIsFetching(true);
  }, []);

  const onReject = useCallback((error: Record<string, string>) => {
    setIsFetching(false);
    console.log(error);
  }, []);

  const onResolve = useCallback(
    ({ data }: IResolveParams) => {
      setIsFetching(false);
      mutationCallback(parseGoogleData(data));
    },
    [mutationCallback]
  );

  return (
    <FlexWrapper
      alignItems="center"
      classes={`!w-auto transition-transform duration-150 ${
        isFetching ? 'translate-x-10' : 'translate-x-0'
      }`}
    >
      <LoadingOutlined
        style={{ color: '#fff', fontSize: '18px', marginRight: '24px' }}
      />
      <LoginSocialGoogle
        client_id={import.meta.env.VITE_GOOGLE_APP_ID || ''}
        scope="openid email https://www.googleapis.com/auth/userinfo.email"
        onLoginStart={onLoginStart}
        onResolve={onResolve}
        onReject={onReject}
      >
        <GoogleOutlined style={{ color: '#fff', fontSize: '18px' }} />
      </LoginSocialGoogle>
    </FlexWrapper>
  );
}
