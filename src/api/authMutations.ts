// libs
import axios from 'axios';

// utils
import { getJwtToken } from '@/utils/tokenizer';

export type ResponseData = {
  message: string;
  success: boolean;
};

export type ResponseObject = {
  success: boolean;
  data: ResponseData;
};

export type Data = Record<string, string | number>;
const jwtToken = getJwtToken();
const apiHandler = async (data: Data, url: string, method?: string) => {
  const response: ResponseObject = await axios({
    url,
    baseURL: import.meta.env.VITE_SERVER_API as string,
    data,
    method: method || 'POST',
    headers: {
      Authorization: `Bearer ${jwtToken}`,
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

export async function profileUpdateApi(data: Data) {
  const { id, ...dataCopy } = data;

  const result = await apiHandler(dataCopy, `/profile/${id}`, 'PUT');
  return result;
}
