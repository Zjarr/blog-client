import React from 'react';

import { IDropdownValue } from '../interfaces';

export const useDropdown = (initialValues?: IDropdownValue[]): IDropdownHook => {
  const [values, setValues] = React.useState<IDropdownValue[]>(initialValues || []);
  const [value, setValue] = React.useState<IDropdownValue | null>(null);
  const [error, setError] = React.useState<string>('');

  const onChange = (value: IDropdownValue): void => {
    if (error) {
      setError('');
    }

    setValue(value);
  };

  return {
    error,
    onChange,
    setError,
    setValue,
    setValues,
    value,
    values,
  };
};

interface IDropdownHook {
  error: string;
  onChange: (value: IDropdownValue) => void;
  setError: (error: string) => void;
  setValue: (value: IDropdownValue | null) => void;
  setValues: (values: IDropdownValue[]) => void;
  value: IDropdownValue | null;
  values: IDropdownValue[];
}
