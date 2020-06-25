import React from 'react';

import { useTextArea } from '../../utils/hooks';

import { LabelText } from '../text';

import { EditorContainer, EditorTextArea } from './editor.style';

export const Editor: React.FC<IEditor> = ({ label, onTextChange, text }) => {
  const bodyInput = useTextArea(text);

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onTextChange(e.target.value);

    return bodyInput.onChange(e);
  };

  return (
    <EditorContainer>
      <LabelText>{label}</LabelText>
      <EditorTextArea value={bodyInput.value} onChange={handleBodyChange} />
    </EditorContainer>
  );
};

interface IEditor {
  label: string;
  onTextChange: (text: string) => void;
  text: string;
}
