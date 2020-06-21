import React from 'react';

import ImagePlaceholder from '../../assets/images/img-placeholder.png';

import { Icon } from '../icon';

import { CircleImage, CircleImageUpdateButton, CircleImageContainer } from './style.circle.image.components';
import { SquareImage, SquareImageUpdateButton, SquareImageContainer } from './style.square.image.components';

export const Image: React.FC<IImage> = ({ alt, onUpdateClick, src, type, updatable = false, ...rest }) => {
  const handleUpdateImageClick = (): void => {
    return onUpdateClick && onUpdateClick();
  };

  if (type === 'circle') {
    return (
      <CircleImageContainer updatable={updatable} {...rest}>
        <CircleImage alt={alt} noImg={!src} src={src || ImagePlaceholder} {...rest} />
        <CircleImageUpdateButton onClick={handleUpdateImageClick}>
          <Icon name={'edit'} size={'32px'} />
        </CircleImageUpdateButton>
      </CircleImageContainer>
    );
  }

  if (type === 'square') {
    return (
      <SquareImageContainer updatable={updatable} {...rest}>
        <SquareImage alt={alt} noImg={!src} src={src || ImagePlaceholder} {...rest} />
        <SquareImageUpdateButton onClick={handleUpdateImageClick}>
          <Icon name={'edit'} size={'32px'} />
        </SquareImageUpdateButton>
      </SquareImageContainer>
    );
  }

  return null;
};

interface IImage {
  alt?: string;
  height?: string;
  onUpdateClick?: () => void,
  src?: string;
  type: 'circle' | 'square';
  updatable?: boolean;
  width?: string;
};
