import React from 'react';

export const useInput = (initialValue: string | number): IInputHook => {
  const [value, setValue] = React.useState<string | number>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return {
    onChange,
    value
  };
};

export interface IInputHook {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}
