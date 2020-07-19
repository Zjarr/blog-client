import { ICategory } from './category.interface';
import { IIcon } from './icon.interface';

export interface IDropdownValue extends Partial<ICategory & IIcon> {
  value?: string;
};
