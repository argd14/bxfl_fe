export interface User {
  id: string;
  email: string;
  status: string;
  token: string;
}

export interface IUserStoreActions {
  setUserInfo: (user: User) => void;
}
