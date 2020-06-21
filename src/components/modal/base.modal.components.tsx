import React from 'react';

import { COLOR_BLACK_0 } from '../../lib/values';

import { BodyContainer, CloseButton, ModalContainer } from './style.modal.components';

export const Modal: React.FC<IModal> = ({ children, buttonColor = COLOR_BLACK_0, closeButton, onClose, visible }) => {
  const [showBody, setShowBody] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleCloseRequest = React.useCallback((): void => {
    setShowBody(false);
    setShowModal(false);
  }, []);

  const handleOpenRequest = React.useCallback((): void => {
    setShowModal(true);
    setShowBody(true);
  }, []);

  React.useEffect(() => {
    if (visible) {
      return handleOpenRequest();
    }

    return handleCloseRequest();
  }, [visible, handleCloseRequest, handleOpenRequest]);

  return (
    <ModalContainer visible={showModal}>
      <BodyContainer visible={showBody}>
        {children}
      </BodyContainer>

      {
        closeButton &&
        <CloseButton
          color={buttonColor}
          icon={'close'}
          type={'color'}

          onClick={(): void => onClose && onClose()}
        />
      }
    </ModalContainer>
  );
};

interface IModal {
  closeButton?: boolean;
  buttonColor?: string;
  onClose?: () => void;
  visible: boolean;
}
