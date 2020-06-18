import React from 'react';

import { COLOR_WHITE } from '../../lib/values';

import { Modal } from '../modal';
import { Spinner } from '../spinner';
import { Text } from '../text';

import { SpinnerContainer } from './style.loading.components';

export const Loading: React.FC<ILoading> = ({ text, visible }) => {
  return (
    <Modal visible={visible}>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>

      <Text type={'paragraph'} color={COLOR_WHITE}>
        {text}
      </Text>
    </Modal>
  );
};

interface ILoading {
  text?: string;
  visible: boolean;
}
