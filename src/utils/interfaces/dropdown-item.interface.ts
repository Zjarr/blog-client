import { ICategory } from './category.interface';
import { IIcon } from './icon.interface';

export interface IDropdownItem extends Partial<ICategory & IIcon> {
  value?: string;
};
