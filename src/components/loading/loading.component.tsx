import React from 'react';

import { COLOR_WHITE } from '../../lib/values';

import { Modal } from '../modal';
import { Spinner } from '../spinner';
import { Text } from '../text';

import { SpinnerContainer, TextContainer } from './loading.style';

export const Loading: React.FC<ILoading> = ({ text, visible }) => {
  return (
    <Modal visible={visible}>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>

      <TextContainer>
        <Text type={'paragraph'} color={COLOR_WHITE}>
          {text}
        </Text>
      </TextContainer>
    </Modal>
  );
};

interface ILoading {
  text?: string;
  visible: boolean;
}
