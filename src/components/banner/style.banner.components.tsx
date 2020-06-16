import Styled from 'styled-components';

import { COLOR_BLACK, COLOR_BLACK_5, COLOR_WHITE } from '../../lib/values';

const DEFAULT_BANNER_OPACITY = '0';
const DEFAULT_BANNER_TRANSFORM = 'translateX(0)';

const VISIBLE_BANNER_OPACITY = '1';
const VISIBLE_BANNER_TRANSFORM = 'translateX(-380px)';

const getBannerOpacity = (isVisible?: boolean): string => isVisible ? VISIBLE_BANNER_OPACITY : DEFAULT_BANNER_OPACITY;
const getBannerTransform = (isVisible?: boolean): string => isVisible ? VISIBLE_BANNER_TRANSFORM : DEFAULT_BANNER_TRANSFORM;

export const BannerContainer = Styled.div<{ isVisible: boolean }>`
  align-items: center;
  border-radius: 10px;
  display: flex;
  min-height: 48px;
  padding: 8px 16px;
  position: fixed;
  right: -332px;
  text-align: justify;
  top: 48px;
  transition: 0.5s ease;
  width: 300px;
  z-index: 2;

  background-color: ${COLOR_BLACK};
  box-shadow: 0 0 8px 0px ${COLOR_BLACK_5};
  color: ${COLOR_WHITE};

  opacity:  ${({ isVisible }): string => getBannerOpacity(isVisible)};
  transform: ${({ isVisible }): string => getBannerTransform(isVisible)};
`;

export const IconContainer = Styled.div<{ color?: string }>`
  align-items: center;
  border-radius: 100%;
  display: flex;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  margin-right: 16px;
  width: 32px;

  background-color: ${COLOR_WHITE};
`;
