import Styled from 'styled-components';

import { BORDER_RADIUS_FULL, BORDER_RADIUS_SMALL, BOX_SHADOW_OVERLAY, COLOR_BLACK, COLOR_WHITE, MEDIA_SM } from '../../utils/values';

const DEFAULT_BANNER_OPACITY = '0';
const DEFAULT_BANNER_TRANSFORM = 'translateY(0)';

const VISIBLE_BANNER_OPACITY = '1';
const VISIBLE_BANNER_TRANSFORM_BIG = 'translateY(-96px)';
const VISIBLE_BANNER_TRANSFORM_SMALL = 'translateY(-64px)';

const getBannerOpacity = (isVisible?: boolean): string => isVisible ? VISIBLE_BANNER_OPACITY : DEFAULT_BANNER_OPACITY;
const getBannerTransform = (isVisible?: boolean, mobile?: boolean): string => {
  if (!isVisible) {
    return DEFAULT_BANNER_TRANSFORM;
  }

  return mobile ? VISIBLE_BANNER_TRANSFORM_SMALL : VISIBLE_BANNER_TRANSFORM_BIG;
};

export const BannerContainer = Styled.div<{ isVisible: boolean }>`
  align-items: center;
  bottom: -64px;
  display: flex;
  height: 64px;
  justify-content: center;
  left: 16px;
  margin: auto;
  max-width: calc(100% - 32px);
  padding: 8px 16px;
  position: fixed;
  right: 16px;
  transition: 0.25s ease;
  width: 480px;
  z-index: 2;

  background-color: ${COLOR_BLACK};
  border-radius: ${BORDER_RADIUS_SMALL} ${BORDER_RADIUS_SMALL} 0 0;
  box-shadow: ${BOX_SHADOW_OVERLAY};
  color: ${COLOR_WHITE};

  opacity:  ${({ isVisible }): string => getBannerOpacity(isVisible)};
  transform: ${({ isVisible }): string => getBannerTransform(isVisible, true)};

  ${MEDIA_SM} {
    left: 0px;
    right: 0px;

    border-radius: ${BORDER_RADIUS_SMALL};

    transform: ${({ isVisible }): string => getBannerTransform(isVisible, false)};
  }
`;

export const IconContainer = Styled.div<{ color?: string }>`
  align-items: center;
  display: flex;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  margin-right: 16px;
  width: 32px;

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_FULL};
`;

export const TextContainer = Styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
