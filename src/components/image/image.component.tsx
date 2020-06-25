import React from 'react';

import ImagePlaceholder from '../../assets/images/img-placeholder.png';

import { Icon } from '../icon';

import { ImageContainer, ImageUpdateButton, Img } from './image.style';

export const Image: React.FC<IImage> = ({ alt, onUpdateClick, shape, src, updatable = false, ...rest }) => {
  const handleUpdateImageClick = (): void => {
    return onUpdateClick && onUpdateClick();
  };

  return (
    <ImageContainer updatable={updatable} shape={shape} {...rest}>
      <Img alt={alt} noImg={!src} src={src || ImagePlaceholder} {...rest} />

      <ImageUpdateButton shape={shape} onClick={handleUpdateImageClick}>
        <Icon name={'edit'} size={'32px'} />
      </ImageUpdateButton>
    </ImageContainer>
  );
};

interface IImage {
  alt?: string;
  height?: string;
  onUpdateClick?: () => void,
  shape: 'circle' | 'square';
  src?: string;
  updatable?: boolean;
  width?: string;
};
