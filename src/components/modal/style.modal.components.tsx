import Styled from 'styled-components';

import { COLOR_BLACK_8 } from '../../lib/values';

import { Button } from '../button';

const DEFAULT_BODY_TRANSFORM = 'scale(1.2)';
const DEFAULT_CONTAINER_OPACITY = '0';
const DEFAULT_CONTAINER_VISIBILITY = 'hidden';

const VISIBLE_BODY_TRANSFORM = 'scale(1)';
const VISIBLE_CONTAINER_OPACITY = '1';
const VISIBLE_CONTAINER_VISIBILITY = 'visible';

const getBodyContainerTransform = (visible?: boolean): string => visible ? VISIBLE_BODY_TRANSFORM : DEFAULT_BODY_TRANSFORM;

const getContainerOpacity = (visible?: boolean): string => visible ? VISIBLE_CONTAINER_OPACITY : DEFAULT_CONTAINER_OPACITY;
const getContainerVisibility = (visible?: boolean): string => visible ? VISIBLE_CONTAINER_VISIBILITY : DEFAULT_CONTAINER_VISIBILITY;

export const ModalContainer = Styled.div<{ visible: boolean }>`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: 0.25s ease;
  z-index: 1;

  background-color: ${COLOR_BLACK_8};

  opacity: ${({ visible }): string => getContainerOpacity(visible)};
  visibility: ${({ visible }): string => getContainerVisibility(visible)};
`;

export const BodyContainer = Styled.div<{ visible: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  transition: 0.25s ease;
  width: 100%;

  opacity: ${({ visible }): string => getContainerOpacity(visible)};
  transform: ${({ visible }): string => getBodyContainerTransform(visible)};
  visibility: ${({ visible }): string => getContainerVisibility(visible)};
`;

export const CloseButton = Styled(Button)`
  position: absolute;
  right: 32px;
  top: 32px;
`;
