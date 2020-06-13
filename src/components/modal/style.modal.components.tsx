import Styled from 'styled-components';

import { COLOR_BLACK_8 } from '../../lib/values';

import { Button } from '../button';

const getBodyContainerTransform = (visible?: boolean): string => visible ? 'scale(1)' : 'scale(2)';

const getModalContainerOpacity = (visible?: boolean): string => visible ? '1' : '0';

export const ModalContainer = Styled.div<{ visible: boolean }>`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.25s ease;
  z-index: 1;

  background-color: ${COLOR_BLACK_8};

  opacity: ${({ visible }): string => getModalContainerOpacity(visible)};
`;

export const BodyContainer = Styled.div<{ visible: boolean }>`
  transition: 0.25s ease;

  transform: ${({ visible }): string => getBodyContainerTransform(visible)};
`;

export const CloseButton = Styled(Button)`
  position: absolute;
  right: 16px;
  top: 16px;
`;
