/** @format */

export type Users = {
  id: number;
  name: string;
  username: string;
  email: string;
};
export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
export interface UsersState {
  user: Users[];
  status: Status;
}
