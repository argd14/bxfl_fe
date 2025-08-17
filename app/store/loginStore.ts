import { loginService } from '../services/loginService';
import createAPIStoreHook from '../store/apiHelper';
import { FunctionSignature } from '../types/apiHelper.types';
import { AxiosError } from 'axios';
import { userInfo } from '../store/userStore';
import Router from 'next/router';
const cookieCutter = require('cookie-cutter');

const setState = userInfo;

const authSignatureFunction =
  ({ setLoading, setSuccess, setError }: FunctionSignature<any>) =>
  async (params: any) => {
    setLoading();
    try {
      localStorage.clear();
      const response = await loginService(params);
      let cookie = response.token;
      cookieCutter.set('access_token', cookie);
      setState.setState(response);
      setSuccess(response);
      Router.push('/');
    } catch (error) {
      setError(error as AxiosError);
    }
  };

export const useAuthStore = createAPIStoreHook(authSignatureFunction, 'auth');
