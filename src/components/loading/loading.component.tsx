import React from 'react';

import { COLOR_WHITE } from '../../lib/values';

import { Modal } from '../modal';
import { Spinner } from '../spinner';
import { ParagraphText } from '../text';

import { SpinnerContainer, TextContainer } from './loading.style';

export const Loading: React.FC<ILoading> = ({ text, visible }) => {
  return (
    <Modal visible={visible}>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>

      <TextContainer>
        <ParagraphText color={COLOR_WHITE}>
          {text}
        </ParagraphText>
      </TextContainer>
    </Modal>
  );
};

interface ILoading {
  text?: string;
  visible: boolean;
}
