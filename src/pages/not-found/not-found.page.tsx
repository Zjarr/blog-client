import React from 'react';

import BlackWave from '../../assets/images/black-wave.png';
import PurpleWave from '../../assets/images/purple-wave.png';
import { SimpleButton } from '../../components/button';
import { ParagraphText, TitleText } from '../../components/text';
import { usePointerPosition, useWindowSize } from '../../utils/hooks';
import { COLOR_GRAY_DARK, COLOR_PURPLE } from '../../utils/values';

import {
  BodyContainer,
  ButtonContainer,
  NotFoundContainer,
  TextContainer,
  Title,
  WaveImage,
  WavesContainer
} from './not-found.style';

export const NotFoundPage: React.FC<INotFoundPage> = () => {
  const { windowHeight, windowWidth } = useWindowSize();
  const { pointerX, pointerY } = usePointerPosition();

  const [right, setRight] = React.useState<number>(0);
  const [top, setTop] = React.useState<number>(0);

  const calcDistancePercentage = React.useCallback((pointerX: number, pointerY: number, heightCenter: number, widthCenter: number): void => {
    const percentFromCenterX = (pointerX - widthCenter) / widthCenter;
    const percentFromCenterY = -(pointerY - heightCenter) / heightCenter;

    setRight(percentFromCenterX);
    setTop(percentFromCenterY);
  }, []);

  React.useEffect(() => {
    const heightCenter = windowHeight / 2;
    const widthCenter = windowWidth / 2;

    return calcDistancePercentage(pointerX, pointerY, heightCenter, widthCenter);
  }, [calcDistancePercentage, pointerX, pointerY, windowHeight, windowWidth]);

  return (
    <NotFoundContainer>
      <WavesContainer>
        <WaveImage src={PurpleWave} right={right * 3} top={top * 3} />
        <WaveImage src={BlackWave} right={right * 10} top={top * 10} />
      </WavesContainer>

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
    </NotFoundContainer>
  );
};

interface INotFoundPage { }
