import React from 'react';

import { COLOR_BLACK_0 } from '../../lib/values';

import { BodyContainer, CloseButton, BackgroundContainer, ModalContainer } from './style.modal.components';

export const Modal: React.FC<IProps> = ({ children, onClose, visible }) => {
  const [showContent, setShowContent] = React.useState<boolean>(false);

  const handleCloseRequest = (): void => {
    setShowContent(false);

    setTimeout(() => {
      return onClose && onClose();
    }, 250);
  };

  React.useEffect(() => {
    setShowContent(visible);
  }, [visible]);

  return (
    <ModalContainer visible={visible}>
      <BackgroundContainer visible={showContent}>
        <CloseButton
          color={COLOR_BLACK_0}
          icon={'close'}
          type={'color'}

          onClick={handleCloseRequest}
        />
        <BodyContainer visible={showContent}>
          {children}
        </BodyContainer>
      </BackgroundContainer>
    </ModalContainer>
  );
};

interface IProps {
  onClose: () => void;
  visible: boolean;
}
