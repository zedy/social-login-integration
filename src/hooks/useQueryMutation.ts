// libs
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

// components
import { useStore } from '@/store/store';
import {
  genericToastError,
  messageToastError,
  messageToastSuccess,
} from '@/utils/helpers';
import { Data, ResponseData } from '@/api/socialMutations';
import { setSession } from '@/utils/tokenizer';

type CallbackFunction = (data: Data) => Promise<ResponseData>;

export default function useQueryMutation(apiEndpoint: CallbackFunction) {
  const { data, mutate, isLoading, isError, isSuccess } =
    useMutation(apiEndpoint);
  const { loginUser } = useStore();
  const navigate = useNavigate();

  if (isError) {
    genericToastError();
  }

  if (data) {
    const { created, message, token, user } = data as ResponseData;

    if (created || user) {
      messageToastSuccess(message);
      setSession(token);
      loginUser(user);
      navigate('/');
    } else {
      messageToastError(message);
    }
  }

  return {
    data,
    mutate,
    isLoading,
    isError,
    isSuccess,
  };
}
