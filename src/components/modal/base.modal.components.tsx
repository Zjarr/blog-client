import React from 'react';

import { COLOR_BLACK_0 } from '../../lib/values';

import { BodyContainer, CloseButton, ModalContainer } from './style.modal.components';

export const Modal: React.FC<IProps> = ({ children, closeButton, onClose, visible }) => {
  const [showBody, setShowBody] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleCloseRequest = React.useCallback((): void => {
    setShowBody(false);
    setShowModal(false);

    return onClose && onClose();
  }, [onClose]);

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
      {
        closeButton &&
        <CloseButton
          color={COLOR_BLACK_0}
          icon={'close'}
          type={'color'}

          onClick={handleCloseRequest}
        />
      }
      <BodyContainer visible={showBody}>
        {children}
      </BodyContainer>
    </ModalContainer>
  );
};

interface IProps {
  closeButton?: boolean;
  onClose?: () => void;
  visible: boolean;
}
