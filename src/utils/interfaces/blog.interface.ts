import { ISource } from './source.interface';

export interface IBlog {
  _id?: string;
  active: boolean;
  body: string;
  categories?: string[];
  created: string;
  description: string;
  image: string;
  name: string;
  slug: string;
  sources?: ISource[];
  updated: string;
}
