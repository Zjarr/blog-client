import React, { ReactElement } from 'react';

import { COLOR_BLACK_0 } from '../../lib/values';

import { BodyContainer, CloseButton, ModalContainer } from './style.modal.components';

export const Modal: React.FC<IProps> = ({ body, onClose, visible }) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleCloseRequest = (): void => {
    setShowModal(false);

    setTimeout(() => {
      return onClose && onClose();
    }, 250);
  };

  React.useEffect(() => {
    setShowModal(visible);
  }, [visible]);

  if (visible) {
    return (
      <ModalContainer visible={showModal}>
        <CloseButton
          color={COLOR_BLACK_0}
          icon={'close'}
          type={'color'}

          onClick={handleCloseRequest}
        />
        <BodyContainer visible={showModal}>
          {body}
        </BodyContainer>
      </ModalContainer>
    );
  }

  return null;
};

interface IProps {
  body: ReactElement;
  onClose?: () => void;
  visible: boolean;
}
