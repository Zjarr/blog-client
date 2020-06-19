import React from 'react';

export const useTextArea = (inputValue: string): ITextAreaHook => {
  const [value, setValue] = React.useState<string>(inputValue);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.target.value);
  };

  return {
    onChange,
    value
  };
};

export interface ITextAreaHook {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}
