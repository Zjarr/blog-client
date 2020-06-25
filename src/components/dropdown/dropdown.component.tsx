import React from 'react';

import { TextButton } from '../button';
import { Icon } from '../icon';
import { OutsideClick } from '../outside-click';
import { Text } from '../text';

import {
  DropdownContainer,
  DropdownItem,
  DropdownItemContainer,
  DropdownTrigger,
  DropdownTriggerCaret,
  DropdownTriggerContainer
} from './dropdown.style';

export const Dropdown: React.FC<IDropdown> = ({ disabled = false, icon, items, label, name, onChange, width }) => {
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

  const handleOutsideClick = (outside: boolean): void => {
    if (!outside) {
      return;
    }

    return setOpen(false);
  };

  return (
    <OutsideClick onPlaceChange={(outside: boolean): void => handleOutsideClick(outside)}>
      <DropdownContainer width={width}>
        {
          label && <Text type={'label'}>{label}</Text>
        }
        <DropdownTriggerContainer>
          <DropdownTrigger disabled={disabled} icon={icon} open={open} onClick={(): void => toggleDropdownItemContainer()} >
            {triggerName}
          </DropdownTrigger>
          {
            icon && <Icon name={icon} />
          }
          <DropdownTriggerCaret disabled={disabled} open={open}>
            <Icon name={'keyboard_arrow_down'} size={'24px'} />
          </DropdownTriggerCaret>
        </DropdownTriggerContainer>
        <DropdownItemContainer open={open} label={label}>
          {
            items.length > 0 ? items.map((item: IDropdownItem, index: number) =>
              <DropdownItem key={`${item.name + item.value + index}`}>
                <TextButton
                  align={'flex-end'}
                  height={'48px'}
                  width={'100%'}
                  onClick={(): void => handleItemClick(item)}
                >{item.name}</TextButton>
              </DropdownItem>
            ) : <Text type={'paragraph'}>There are no items</Text>
          }
        </DropdownItemContainer>
      </DropdownContainer>
    </OutsideClick>
  );
};

export interface IDropdownItem {
  name: string;
  value: string | number;
}

interface IDropdown {
  disabled?: boolean;
  icon?: string;
  items: IDropdownItem[];
  label?: string;
  name: string;
  onChange: (item: IDropdownItem) => void;
  width?: string;
};