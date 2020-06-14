import Styled from 'styled-components';

import { COLOR_BLACK_8 } from '../../lib/values';

import { Button } from '../button';

const DEFAULT_BODY_TRANSFORM = 'scale(2)';
const DEFAULT_CONTAINER_OPACITY = '0';
const DEFAULT_CONTAINER_VISIBILITY = 'hidden';

const VISIBLE_BODY_TRANSFORM = 'scale(1)';
const VISIBLE_CONTAINER_OPACITY = '1';
const VISIBLE_CONTAINER_VISIBILITY = 'visible';

const getBodyContainerTransform = (visible?: boolean): string => visible ? VISIBLE_BODY_TRANSFORM : DEFAULT_BODY_TRANSFORM;

const getModalContainerOpacity = (visible?: boolean): string => visible ? VISIBLE_CONTAINER_OPACITY : DEFAULT_CONTAINER_OPACITY;
const getModalContainerVisibility = (visible?: boolean): string => visible ? VISIBLE_CONTAINER_VISIBILITY : DEFAULT_CONTAINER_VISIBILITY;

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
  visibility: ${({ visible }): string => getModalContainerVisibility(visible)};
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
