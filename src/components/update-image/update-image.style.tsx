import Styled from 'styled-components';

import {
  BORDER_RADIUS_FULL,
  BORDER_RADIUS_MEDIUM,
  COLOR_GRAY_LIGHT,
  COLOR_PURPLE,
  COLOR_WHITE,
  MEDIA_MD,
  TEXT_BIG,
  TEXT_NORMAL
} from '../../utils/values';

import { Image } from '../image';
import { SubtitleText } from '../text';

const DEFAULT_IMAGE_CONTAINER_BORDER_COLOR = COLOR_GRAY_LIGHT;

const ACTIVE_IMAGE_CONTAINER_BORDER_COLOR = COLOR_PURPLE;

const getImageContainerBorderColor = (active: boolean): string => active ? ACTIVE_IMAGE_CONTAINER_BORDER_COLOR : DEFAULT_IMAGE_CONTAINER_BORDER_COLOR;

export const ButtonContainer = Styled.div`
  bottom: 0;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 16px;
  position: absolute;
  right: 0;
`;

export const ImageContainer = Styled.div<{ active: boolean }>`
  align-items: center;
  bottom: 0;
  display: flex;
  height: 160px;
  justify-content: center;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 24px;
  transition: 0.25s ease;
  width: 160px;

  border-radius: ${BORDER_RADIUS_FULL};

  border: 4px solid ${({ active }): string => getImageContainerBorderColor(active)};

  :hover {
    transition: 0.25s ease;

    border-color: ${COLOR_PURPLE};
  }

  ${MEDIA_MD} {
    height: 264px;
    width: 264px;
  }
`;

export const ImageInput = Styled.input`
  display: none;
`;

export const ImageLabel = Styled.label`
  cursor: pointer;
  height: 136px;
  margin-bottom: 0;
  width: 136px;

  background-color: ${COLOR_GRAY_LIGHT};
  border-radius: ${BORDER_RADIUS_FULL};

  ${MEDIA_MD} {
    height: 240px;
    width: 240px;
  }
`;

export const ImageResult = Styled(Image)`
  height: 136px;
  pointer-events: none;
  position: absolute;
  width: 136px;

  ${MEDIA_MD} {
    height: 240px;
    width: 240px;
  }
`;

export const ImageText = Styled(SubtitleText)`
  pointer-events: none;
  position: absolute;
  text-align: center;

  p {
    font-size: ${TEXT_NORMAL};
  }

  ${MEDIA_MD} {
    p {
      font-size: ${TEXT_BIG};
    }
  }
`;

export const TitleContainer = Styled.div`
  padding: 24px 68px 40px 24px;

  ${MEDIA_MD} {
    padding: 24px 24px 40px;
  }
`;

export const UpdateImageContainer = Styled.div`
  height: calc(100% - 32px);
  overflow: auto;
  position: relative;
  width: calc(100% - 32px);

  background-color: ${COLOR_WHITE};
  border-radius: ${BORDER_RADIUS_MEDIUM};

  ${MEDIA_MD} {
    height: 480px;
    width: 480px;
  }
`;
