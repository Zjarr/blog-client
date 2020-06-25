import React from 'react';

export const useInput = (inputValue: string, checkValue = false): IInputHook => {
  const [checked, setChecked] = React.useState<boolean>(checkValue);
  const [value, setValue] = React.useState<string>(inputValue);

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
