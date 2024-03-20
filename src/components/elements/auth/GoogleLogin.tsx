// libs
import { useCallback, useState } from 'react';
import { LoginSocialGoogle, IResolveParams } from 'reactjs-social-login';
import { GoogleOutlined, LoadingOutlined } from '@ant-design/icons';

// components
import FlexWrapper from '../FlexWrapper';
import { parseGoogleData } from '../../../utils/socialDataParser';
import Button from '../Button';
import Typography, { Type } from '../Typography';

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
    <FlexWrapper alignItems="center" justifyContent="center">
      <LoginSocialGoogle
        client_id={import.meta.env.VITE_GOOGLE_APP_ID || ''}
        scope="openid email https://www.googleapis.com/auth/userinfo.email"
        onLoginStart={onLoginStart}
        onResolve={onResolve}
        onReject={onReject}
        className="flex w-full justify-center"
      >
        {isFetching ? (
          <LoadingOutlined style={{ color: '#fff', fontSize: '20px' }} />
        ) : (
          <Button
            type="button"
            className="w-full"
            icon={
              <GoogleOutlined style={{ color: '#fff', fontSize: '20px' }} />
            }
          >
            <Typography
              classes="text-gray-100 ml-2 text-sm"
              component={Type.SPAN}
            >
              Google
            </Typography>
          </Button>
        )}
      </LoginSocialGoogle>
    </FlexWrapper>
  );
}
