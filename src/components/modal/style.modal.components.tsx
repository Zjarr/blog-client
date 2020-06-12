import Styled from 'styled-components';

import { COLOR_BLACK_8 } from '../../lib/values';

import { Button } from '../button';

const DEFAULT_CONTAINER_DISPLAY = 'none';

const VISIBLE_CONTAINER_DISPLAY = 'flex';

const getContainerVisible = (visible?: boolean): string => visible ? VISIBLE_CONTAINER_DISPLAY : DEFAULT_CONTAINER_DISPLAY;

export const ModalContainer = Styled.div<{ visible: boolean }>`
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  background-color: ${COLOR_BLACK_8};

  display: ${({ visible }): string => getContainerVisible(visible)};
`;

export const BodyContainer = Styled.div``;

export const CloseButton = Styled(Button)`
position: absolute;
right: 16px;
top: 16px;
`;
