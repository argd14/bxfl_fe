export interface ILoginData {
  email: string;
  password: string;
}
export interface ILoginResponse {
  id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}