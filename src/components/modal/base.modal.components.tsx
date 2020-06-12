import React, { ReactElement } from 'react';

import { COLOR_BLACK_0 } from '../../lib/values';

import { CloseButton, BodyContainer, ModalContainer } from './style.modal.components';

export const Modal: React.FC<IProps> = ({ body, onClose, visible }) => {
  const handleCloseRequest = (): void => {
    return onClose && onClose();
  };

  return (
    <ModalContainer visible={visible}>
      <CloseButton
        color={COLOR_BLACK_0}
        icon={'close'}
        type={'color'}

        onClick={handleCloseRequest}
      />
      <BodyContainer>
        {body}
      </BodyContainer>
    </ModalContainer>
  );
};

interface IProps {
  body: ReactElement;
  onClose?: () => void;
  visible: boolean;
}
