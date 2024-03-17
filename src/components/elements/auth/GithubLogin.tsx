// libs
import { useCallback, useState } from 'react';
import { LoginSocialGithub, IResolveParams } from 'reactjs-social-login';
import { GithubFilled, LoadingOutlined } from '@ant-design/icons';

// components
import FlexWrapper from '../FlexWrapper';
import { parseGithubData } from '../../../utils/socialDataParser';

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
    <FlexWrapper
      alignItems="center"
      classes={`!w-auto transition-transform duration-150 ${
        isFetching ? 'translate-x-10' : 'translate-x-0'
      }`}
    >
      <LoadingOutlined
        style={{ color: '#fff', fontSize: '18px', marginRight: '24px' }}
      />
      <LoginSocialGithub
        client_id={import.meta.env.VITE_GITHUB_APP_ID || ''}
        client_secret={import.meta.env.VITE_GITHUB_APP_SECRET || ''}
        redirect_uri={`${import.meta.env.VITE_HOST}/login`}
        onLoginStart={onLoginStart}
        onResolve={onResolve}
        onReject={onReject}
      >
        <GithubFilled style={{ color: '#000', fontSize: '18px' }} />
      </LoginSocialGithub>
    </FlexWrapper>
  );
}
