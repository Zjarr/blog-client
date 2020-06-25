import React from 'react';

import { BodyContainer, CloseButton, ModalContainer } from './modal.style';

export const Modal: React.FC<IModal> = ({ children, closeButton, onClose, visible }) => {
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
          icon={'close'}

          onClick={(): void => onClose && onClose()}
        />
      }
    </ModalContainer>
  );
};

interface IModal {
  closeButton?: boolean;
  onClose?: () => void;
  visible: boolean;
}
