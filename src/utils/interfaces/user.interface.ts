import { ISocial } from './social.interface';

export interface IUser {
  _id?: string;
  about?: string;
  created: string;
  email: string;
  firstname: string;
  image?: string;
  lastname: string;
  password: string;
  social?: ISocial[];
}
