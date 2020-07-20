import React from 'react';

import { IDropdownValue } from '../../utils/interfaces';

import { TextButton } from '../button';
import { Error } from '../error';
import { Icon } from '../icon';
import { OutsideClick } from '../outside-click';
import { ParagraphText } from '../text';

import {
  DropdownContainer,
  DropdownTrigger,
  DropdownTriggerCaret,
  DropdownTriggerContainer,
  DropdownValue,
  DropdownValueContainer
} from './dropdown.style';

export const Dropdown: React.FC<IDropdown> = ({ disabled = false, error, field, icon, values, name, onChange, width }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDropdownValueContainer = (): void => {
    return setOpen(!open);
  };

  const handleValueClick = (value: IDropdownValue): void => {
    setOpen(false);

    return onChange(value);
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
          <DropdownTrigger disabled={disabled} error={error} icon={icon} open={open} onClick={(): void => toggleDropdownValueContainer()} >
            {name}
          </DropdownTrigger>
          {
            icon && <Icon name={icon} />
          }
          <DropdownTriggerCaret disabled={disabled} open={open}>
            <Icon name={'keyboard_arrow_down'} size={'24px'} />
          </DropdownTriggerCaret>
          {
            error && <Error>{error}</Error>
          }
        </DropdownTriggerContainer>
        <DropdownValueContainer open={open} error={error}>
          {
            values.length > 0 ? values.map((value: IDropdownValue, index: number) =>
              <DropdownValue key={`dropdown-value-${field ? value[field] : value.name}-${index}`}>
                <TextButton
                  align={'space-between'}
                  icon={value.icon}
                  height={'48px'}
                  width={'100%'}
                  onClick={(): void => handleValueClick(value)}
                >{value.name}</TextButton>
              </DropdownValue>
            ) : <ParagraphText>No options to choose from.</ParagraphText>
          }
        </DropdownValueContainer>
      </DropdownContainer>
    </OutsideClick>
  );
};

interface IDropdown {
  disabled?: boolean;
  error?: string;
  field?: keyof IDropdownValue;
  icon?: string;
  name: string;
  onChange: (value: IDropdownValue) => void;
  values: IDropdownValue[];
  width?: string;
};
