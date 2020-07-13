import React from 'react';

export const useInput = (initialValue?: string, checkValue?: boolean): IInputHook => {
  const [checked, setChecked] = React.useState<boolean>(checkValue || false);
  const [value, setValue] = React.useState<string>(initialValue || '');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
    setValue(e.target.value);
  };

  return {
    checked,
    onChange,
    value
  };
};

export interface IInputHook {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
