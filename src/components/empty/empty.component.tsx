import React from 'react';

import Broken from '../../assets/images/broken.png';
import Rocket from '../../assets/images/rocket.png';

import { COLOR_GRAY_MEDIUM } from '../../utils/values';

import { ParagraphText } from '../text';

import {
  EmptyContainer,
  ImageContainer,
  RocketImage,
  TextContainer
} from './empty.style';

export const Empty: React.FC<IEmpty> = ({ error, height, message }) => {
  return (
    <EmptyContainer height={height}>
      <ImageContainer>
        <RocketImage src={error ? Broken : Rocket} />
      </ImageContainer>

      <TextContainer>
        <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops!</ParagraphText>
        <ParagraphText color={COLOR_GRAY_MEDIUM}>
          {
            message ?
              message :
              error ?
                'We ran into an error. Please try again.' :
                'This looks empty. Did you add some fuel?'
          }
        </ParagraphText>
      </TextContainer>
    </EmptyContainer>
  );
};

interface IEmpty {
  error?: boolean;
  height?: string;
  message?: string;
}
