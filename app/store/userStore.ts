import { IUserStoreActions, User } from '../types/user.types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const userInfo = create<User & IUserStoreActions>()(
  persist(
    (set) => ({
      id: '',
      email: '',
      status: '',
      token: '',
      setUserInfo: (user: User) => set(user),
    }),
    {
      name: 'user-info',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
