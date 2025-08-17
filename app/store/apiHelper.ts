import { create } from 'zustand';
import { ApiHelper, FunctionSignature } from '../types/apiHelper.types';

const createAPIStoreHook = <T>(
  fetcherFunction: (
    fns: FunctionSignature<T>
  ) => (params: any) => void | Promise<void>,
  resultKey: string
) =>
  create<ApiHelper<T>>((set) => ({
    loading: false,
    error: undefined,
    [resultKey]: undefined,

    //Implement a function that calls this 3 elements, create the store with this function as an argument

    request: fetcherFunction({
      // set loading, first thing of the function
      setLoading: () => {
        set({ loading: true, error: undefined, [resultKey]: undefined });
      },

      //set Success with the expected data
      setSuccess: (data) => {
        set({ loading: false, [resultKey]: data, error: undefined });
      },

      //set Error with the resulting error
      setError: (error) => {
        set({ loading: false, [resultKey]: undefined, error: error });
      },
    }),
  }));

export default createAPIStoreHook;
