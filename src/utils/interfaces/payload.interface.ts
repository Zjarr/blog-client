import { IUser } from './user.interface';

export interface IPayload {
  exp: number;
  iat: number;
  user: IUser;
}
