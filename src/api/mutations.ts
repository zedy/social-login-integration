// libs
import axios from 'axios';

// types
import User from '../types/user';

type Response = {
  success: boolean;
  data: {
    token: string;
    user: User;
    message: string;
    success: boolean;
    created: boolean;
  };
};

const registerUserApi = async (data: Record<string, string>) => {
  const response: Response = await axios({
    url: '/user/create',
    baseURL: import.meta.env.VITE_SERVER_API as string,
    data,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const { success } = response.data;

  if (!success) {
    throw new Error('Error registering user. Please try again.');
  }

  return response.data;
};

export default registerUserApi;
