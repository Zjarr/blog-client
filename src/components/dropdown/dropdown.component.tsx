import React from 'react';

import { IDropdownItem } from '../../utils/interfaces';

import { TextButton } from '../button';
import { Icon } from '../icon';
import { OutsideClick } from '../outside-click';
import { ParagraphText } from '../text';

import {
  DropdownContainer,
  DropdownItem,
  DropdownItemContainer,
  DropdownTrigger,
  DropdownTriggerCaret,
  DropdownTriggerContainer
} from './dropdown.style';

export const Dropdown: React.FC<IDropdown> = ({ disabled = false, field, icon, items, name, onChange, width }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDropdownItemContainer = (): void => {
    return setOpen(!open);
  };

  const handleItemClick = (item: IDropdownItem): void => {
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
    <OutsideClick onPlaceChange={(outside: boolean): void => handleOutsideClick(outside)} width={width}>
      <DropdownContainer>
        <DropdownTriggerContainer>
          <DropdownTrigger disabled={disabled} icon={icon} open={open} onClick={(): void => toggleDropdownItemContainer()} >
            {name}
          </DropdownTrigger>
          {
            icon && <Icon name={icon} />
          }
          <DropdownTriggerCaret disabled={disabled} open={open}>
            <Icon name={'keyboard_arrow_down'} size={'24px'} />
          </DropdownTriggerCaret>
        </DropdownTriggerContainer>
        <DropdownItemContainer open={open}>
          {
            items.length > 0 ? items.map((item: IDropdownItem, index: number) =>
              <DropdownItem key={`dropdown-item-${field ? item[field] : item.name}-${index}`}>
                <TextButton
                  align={'space-between'}
                  icon={item.icon}
                  height={'48px'}
                  width={'100%'}
                  onClick={(): void => handleItemClick(item)}
                >{item.name}</TextButton>
              </DropdownItem>
            ) : <ParagraphText>There are no items</ParagraphText>
          }
        </DropdownItemContainer>
      </DropdownContainer>
    </OutsideClick>
  );
};

interface IDropdown {
  disabled?: boolean;
  field?: keyof IDropdownItem;
  icon?: string;
  items: IDropdownItem[];
  name: string;
  onChange: (item: IDropdownItem) => void;
  width?: string;
};
