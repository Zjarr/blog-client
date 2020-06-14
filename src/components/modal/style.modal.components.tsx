import Styled from 'styled-components';

import { COLOR_BLACK_8 } from '../../lib/values';

import { Button } from '../button';

const getBodyContainerTransform = (visible?: boolean): string => visible ? 'scale(1)' : 'scale(2)';

const getBackgroundContainerOpacity = (visible?: boolean): string => visible ? '1' : '0';

const getModalContainerDisplay = (visible?: boolean): string => visible ? 'block' : 'none';

export const ModalContainer = Styled.div<{ visible: boolean }>`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  display: ${({ visible }): string => getModalContainerDisplay(visible)};
`;

export const BackgroundContainer = Styled.div<{ visible: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  transition: 0.25s ease;
  width: 100%;

  background-color: ${COLOR_BLACK_8};

  opacity: ${({ visible }): string => getBackgroundContainerOpacity(visible)};
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
