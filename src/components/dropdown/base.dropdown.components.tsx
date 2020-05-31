import React from 'react';

import { Button } from '../button';
import { Icon } from '../icon';
import { Text } from '../text';

import {
  DropdownItemContainer,
  DropdownContainer,
  DropdownItem,
  DropdownTrigger,
  DropdownTriggerContainer
} from './style.dropdown.components';


export const Dropdown: React.FC<IProps> = ({ name, icon, items, label, onChange, width }) => {
  const [triggerName, setTriggerName] = React.useState<string>(name);
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDropdownItemContainer = (): void => {
    return setOpen(!open);
  };

  const handleItemClick = (item: IDropdownItem): void => {
    setTriggerName(item.name);
    setOpen(false);

    return onChange(item);
  };

  return (
    <DropdownContainer width={width}>
      {
        label && <Text type={'label'}>{label}</Text>
      }
      <DropdownTriggerContainer open={open}>
        <DropdownTrigger icon={icon} open={open} onClick={(): void => toggleDropdownItemContainer()}>{triggerName}</DropdownTrigger>
        {
          icon && <Icon name={icon} />
        }
        <Icon name={'keyboard_arrow_down'} size={'24px'} />
      </DropdownTriggerContainer>
      <DropdownItemContainer open={open} label={label}>
        {
          items.length > 0 ? items.map((item: IDropdownItem, index: number) =>
            <DropdownItem key={`${item.name + item.value + index}`}>
              <Button type={'text'} width={'100%'} align={'flex-end'} onClick={(): void => handleItemClick(item)}>{item.name}</Button>
            </DropdownItem>
          ) : <Text type={'paragraph'}>There are no items</Text>
        }
      </DropdownItemContainer>
    </DropdownContainer>
  );
};

export interface IDropdownItem {
  name: string;
  value: string | number;
}

interface IProps {
  name: string;
  icon?: string;
  items: IDropdownItem[];
  label?: string;
  onChange: (item: IDropdownItem) => void;
  width?: string;
};
