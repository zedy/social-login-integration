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

type Data = Record<string, string>;

const apiHandler = async (data: Data, url: string) => {
  const response: Response = await axios({
    url,
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
    throw new Error('An error occured. Please try again.');
  }

  return response.data;
};

export async function loginFormUserApi(data: Data) {
  const result = await apiHandler(data, '/auth/login');
  return result;
}

export async function registerUserApi(data: Data) {
  const result = await apiHandler(data, '/user/create');
  return result;
}

export async function socialLoginApi(data: Data) {
  const result = await apiHandler(data, '/social-login/login');
  return result;
}
