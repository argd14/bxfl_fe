import axios, { InternalAxiosRequestConfig } from 'axios';
import { NonNullableProperties, Param, RequestResponse } from '../types/request.types';
import { API_URL } from '@/lib/constants';

const cookieCutter = require('cookie-cutter');

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  try {
    const access_token = cookieCutter.get(API_URL.ACCESS_TOKEN);
    if (!access_token || access_token === '') return config;
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${access_token}`;
    return config;
  } catch (e) {
    return config;
  }
});

axiosInstance?.interceptors?.response?.use(
  (response) => {
    if (response.status === 401) {
      localStorage.clear();
      cookieCutter.set(API_URL.ACCESS_TOKEN, '', { expires: new Date(0) });
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      cookieCutter.set(API_URL.ACCESS_TOKEN, '', { expires: new Date(0) });
    }
    throw error;
  }
);

export const requestWrapper = async (request: Promise<any>) => {
  try {
    const response = await request;
    return { response } as RequestResponse;
  } catch (error) {
    return { error } as RequestResponse;
  }
};

export const getQueryString = (params: Param = {}) => {
  //non empty params
  const keys = Object.keys(params).filter((key) => !!params[key]);
  const queryObject = keys.reduce((state: Param, key) => {
    state[key] = params[key];
    return state;
  }, {}) as NonNullableProperties<Param>;
  const queryArray = keys.map((key) => {
    const value = encodeURIComponent(queryObject[key]);
    return `${key}=${value}`;
  });

  return queryArray.join('&');
};
