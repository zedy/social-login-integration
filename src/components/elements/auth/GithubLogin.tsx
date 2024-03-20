// libs
import { useCallback, useState } from 'react';
import { LoginSocialGithub, IResolveParams } from 'reactjs-social-login';
import { GithubFilled, LoadingOutlined } from '@ant-design/icons';

// components
import FlexWrapper from '../FlexWrapper';
import { parseGithubData } from '../../../utils/socialDataParser';
import Button from '../Button';
import Typography, { Type } from '../Typography';

type Props = {
  mutationCallback: (data: Record<string, string>) => void;
};

export default function GithubLogin({ mutationCallback }: Props) {
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
      mutationCallback(parseGithubData(data));
    },
    [mutationCallback]
  );

  return (
    <FlexWrapper alignItems="center" justifyContent="center">
      <LoginSocialGithub
        client_id={import.meta.env.VITE_GITHUB_APP_ID || ''}
        client_secret={import.meta.env.VITE_GITHUB_APP_SECRET || ''}
        redirect_uri={`${import.meta.env.VITE_HOST}/login`}
        onLoginStart={onLoginStart}
        onResolve={onResolve}
        onReject={onReject}
      >
        {isFetching ? (
          <LoadingOutlined style={{ color: '#000', fontSize: '20px' }} />
        ) : (
          <Button
            type="button"
            className="w-full"
            icon={<GithubFilled style={{ color: '#000', fontSize: '20px' }} />}
          >
            <Typography
              classes="text-gray-800 ml-2 text-sm"
              component={Type.SPAN}
            >
              Github
            </Typography>
          </Button>
        )}
      </LoginSocialGithub>
    </FlexWrapper>
  );
}
