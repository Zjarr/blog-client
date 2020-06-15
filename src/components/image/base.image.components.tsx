import React from 'react';

import ImagePlaceholder from '../../assets/images/img-placeholder.png';

import { Icon } from '../icon';

import { ImageUpdateButton } from './style.base.image.components';
import { CircleImage, CircleImageContainer } from './style.circle.image.components';
import { SquareImage, SquareImageContainer } from './style.square.image.components';

export const Image: React.FC<IProps> = ({ alt, updatable = false, src, type, ...rest }) => {
  if (type === 'circle') {
    return (
      <CircleImageContainer updatable={updatable} {...rest}>
        <CircleImage alt={alt} noImg={!src} src={src || ImagePlaceholder} {...rest} />
        <ImageUpdateButton>
          <Icon name={'edit'} size={'32px'} />
        </ImageUpdateButton>
      </CircleImageContainer>
    );
  }

  if (type === 'square') {
    return (
      <SquareImageContainer updatable={updatable} {...rest}>
        <SquareImage alt={alt} noImg={!src} src={src || ImagePlaceholder} {...rest} />
        <ImageUpdateButton>
          <Icon name={'edit'} size={'32px'} />
        </ImageUpdateButton>
      </SquareImageContainer>
    );
  }

  return null;
};

interface IProps {
  alt?: string;
  height?: string;
  onUpdate?: () => void,
  src?: string;
  type: 'circle' | 'square';
  updatable?: boolean;
  width?: string;
};
