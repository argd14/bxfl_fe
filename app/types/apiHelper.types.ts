import { AxiosError } from 'axios';

export interface ApiHelper<T> {
  [resultKey: string]:
    | T
    | boolean
    | AxiosError
    | ((requestFns: FunctionSignature<T>) => void | Promise<void>)
    | undefined;
  loading: boolean;
  error?: AxiosError;

  request: (params?: any) => Promise<void> | void;
}

export interface FunctionSignature<T> {
  setLoading: () => void;
  setSuccess: (data: T) => void;
  setError: (error: AxiosError) => void;
}
