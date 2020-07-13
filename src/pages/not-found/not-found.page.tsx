import React from 'react';

import BlackWave from '../../assets/images/black-wave.png';
import PurpleWave from '../../assets/images/purple-wave.png';

import { SimpleButton } from '../../components/button';
import { ParagraphText, TitleText } from '../../components/text';
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
  const [windowHeightCenter, setWindowHeightCenter] = React.useState<number>(window.innerHeight / 2);
  const [windowWidthCenter, setWindowWidthCenter] = React.useState<number>(window.innerWidth / 2);

  const [top, setTop] = React.useState<number>(0);
  const [right, setRight] = React.useState<number>(0);

  const getMousePosition = React.useCallback((event: MouseEvent): void => {
    const percentFromCenterX = (event.clientX - windowWidthCenter) * 100 / windowWidthCenter;
    const percentFromCenterY = -(event.clientY - windowHeightCenter) * 100 / windowHeightCenter;

    setRight(percentFromCenterX / 10);
    setTop(percentFromCenterY / 10);
  }, [windowHeightCenter, windowWidthCenter]);

  const getWindowSize = React.useCallback((): void => {
    setWindowHeightCenter(window.innerHeight / 2);
    setWindowWidthCenter(window.innerWidth / 2);
  }, []);

  React.useEffect(() => {
    document.addEventListener('mousemove', getMousePosition);

    return (): void => document.removeEventListener('mousemove', getMousePosition);
  }, [getMousePosition]);

  React.useEffect(() => {
    window.addEventListener('resize', getWindowSize);

    return (): void => window.removeEventListener('resize', getWindowSize);
  }, [getWindowSize]);

  return (
    <NotFoundContainer>
      <WavesContainer>
        <WaveImage src={PurpleWave} right={-right} top={-top} />
        <WaveImage src={BlackWave} right={right} top={top} />
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
