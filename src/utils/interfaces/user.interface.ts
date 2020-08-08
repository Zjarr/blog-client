import { ISocial } from './social.interface';

export interface IUser {
  _id?: string;
  about?: string;
  created: string;
  email: string;
  image?: string;
  lastname: string;
  name: string;
  password: string;
  social?: ISocial[];
}
