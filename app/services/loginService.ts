import { AxiosInstance } from 'axios';
import { axiosInstance, requestWrapper } from './serviceHelper';
import { ILoginData } from '../types/login.types';
import { API_URL } from '@/lib/constants';

export const loginService = async (data: ILoginData, request: AxiosInstance = axiosInstance) => {
  const config = {
    headers: {
      Authorization: `Bearer No auth`,
    },
  };

  const { response, error } = await requestWrapper(request.post(`${API_URL.VERSION}${API_URL.LOGIN}`, data, config));
  console.log('response', response);

  if (error) throw error;
  if (response) return response.data;
};
