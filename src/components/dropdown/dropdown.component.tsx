import React from 'react';

import { IDropdownValue } from '../../utils/interfaces';
import { BORDER_RADIUS_SMALL } from '../../utils/values';

import { TextButton } from '../button';
import { Error } from '../error';
import { Icon } from '../icon';
import { OutsideClick } from '../outside-click';
import { Skeleton } from '../skeleton';
import { ParagraphText } from '../text';

import {
  DropdownContainer,
  DropdownTrigger,
  DropdownTriggerCaret,
  DropdownTriggerContainer,
  DropdownValue,
  DropdownValueContainer
} from './dropdown.style';

export const Dropdown: React.FC<IDropdown> = ({ defaultValue, disabled = false, error, field, icon, loading, name, onChange, values, width }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDropdownValueContainer = (): void => {
    return setOpen(!open);
  };

  const handleValueClick = (value: IDropdownValue | null): void => {
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
          {
            loading ?
              <Skeleton border={BORDER_RADIUS_SMALL} /> :
              <>
                <DropdownTrigger disabled={disabled} error={error} icon={icon} open={open} onClick={(): void => toggleDropdownValueContainer()} >
                  {name}
                </DropdownTrigger>

                {
                  icon && <Icon name={icon} />
                }

                <DropdownTriggerCaret disabled={disabled} open={open}>
                  <Icon name={'keyboard_arrow_down'} size={'24px'} />
                </DropdownTriggerCaret>
              </>
          }

          {
            error && <Error>{error}</Error>
          }
        </DropdownTriggerContainer>

        <DropdownValueContainer open={open} error={error}>
          {
            defaultValue &&
            <DropdownValue>
              <TextButton
                align={'space-between'}
                icon={'apps'}
                height={'48px'}
                width={'100%'}
                onClick={(): void => handleValueClick(null)}>{defaultValue}</TextButton>
            </DropdownValue>
          }
          {
            values.length > 0 ? values.map((value: IDropdownValue, index: number) =>
              <DropdownValue key={`dropdown-value-${field ? value[field] : value.name}-${index}`}>
                <TextButton
                  align={'space-between'}
                  icon={value.icon}
                  height={'48px'}
                  width={'100%'}
                  onClick={(): void => handleValueClick(value)}>{value.name}</TextButton>
              </DropdownValue>
            ) : <ParagraphText>No options to choose from.</ParagraphText>
          }
        </DropdownValueContainer>
      </DropdownContainer>
    </OutsideClick>
  );
};

interface IDropdown {
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  field?: keyof IDropdownValue;
  icon?: string;
  loading?: boolean;
  name: string;
  onChange: (value: IDropdownValue | null) => void;
  values: IDropdownValue[];
  width?: string;
};
