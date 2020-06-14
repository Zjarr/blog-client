import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

import { COLOR_WHITE } from '../../lib/values';

import { Modal } from '../modal';
import { Text } from '../text';

import { SpinnerContainer } from './style.loading.components';

export const Loading: React.FC<IProps> = ({ text, visible }) => {
  return (
    <Modal visible={visible}>
      <SpinnerContainer>
        <BarLoader color={'white'} width={288} height={6} />
      </SpinnerContainer>

      <Text type={'paragraph'} color={COLOR_WHITE}>
        {text}
      </Text>
    </Modal>
  );
};

interface IProps {
  text?: string;
  visible: boolean;
}
