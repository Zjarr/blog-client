import React from 'react';

import NotFoundWaves from '../../assets/images/not-found-waves.png';
import { SimpleButton } from '../../components/button';
import { ParagraphText, TitleText } from '../../components/text';
import { COLOR_GRAY_DARK, COLOR_PURPLE } from '../../utils/values';

import {
  BodyContainer,
  ButtonContainer,
  NotFoundContainer,
  TextContainer,
  Title,
  WavesContainer,
  WavesImage
} from './not-found.style';

export const NotFoundPage: React.FC<INotFoundPage> = () => {
  return (
    <NotFoundContainer>
      <BodyContainer>
        <TextContainer>
          <Title>404!</Title>
          <TitleText>We miss you. Come back home!</TitleText>
          <ParagraphText color={COLOR_GRAY_DARK}>Maybe we forgot to add something or had to remove it.</ParagraphText>
        </TextContainer>

        <ButtonContainer>
          <SimpleButton color={COLOR_PURPLE} width={'auto'}>Go home</SimpleButton>
        </ButtonContainer>
      </BodyContainer>

      <WavesContainer>
        <WavesImage src={NotFoundWaves} />
      </WavesContainer>
    </NotFoundContainer>
  );
};

interface INotFoundPage {

}
