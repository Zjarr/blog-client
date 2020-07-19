import { ICategory } from './category.interface';

export interface IDropdownItem extends Partial<ICategory> {
  value?: string | number;
};
