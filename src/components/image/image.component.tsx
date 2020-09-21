import React from 'react';

import ImagePlaceholder from '../../assets/images/img-placeholder.png';
import { Icon } from '../icon';

import { ImageContainer, ImageErrorBorder, ImageUpdateButton, Img } from './image.style';

export const Image: React.FC<IImage> = ({ alt, error, onUpdateClick, shape, src, updatable = false, ...rest }) => {
  const handleUpdateImageClick = (): void => {
    return onUpdateClick && onUpdateClick();
  };

  return (
    <ImageContainer updatable={updatable} shape={shape} {...rest}>
      <Img alt={alt} noImg={!src} src={src || ImagePlaceholder} {...rest} />

      {
        error && <ImageErrorBorder />
      }

      <ImageUpdateButton disabled={!updatable} onClick={handleUpdateImageClick} shape={shape}>
        <Icon name={'edit'} size={'32px'} />
      </ImageUpdateButton>
    </ImageContainer>
  );
};

interface IImage {
  alt?: string;
  error?: boolean;
  height?: string;
  onUpdateClick?: () => void,
  shape: 'circle' | 'square';
  src?: string;
  updatable?: boolean;
  width?: string;
};
