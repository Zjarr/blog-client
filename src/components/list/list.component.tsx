import React from 'react';

import Broken from '../../assets/images/broken.png';
import Rocket from '../../assets/images/rocket.png';
import { COLOR_GRAY_MEDIUM } from '../../utils/values';

import { IImageCard, ImageCard } from '../card';
import { ParagraphText } from '../text';

import {
  CardContainer,
  EmptyListContainer,
  ImageContainer,
  ListContainer,
  RocketImage,
  TextContainer
} from './list.style';

const skeletonCards = 12;

export const List: React.FC<IList> = ({ cards, error, loading }) => {
  const getCardPadding = (index: number): string => {
    const position: number = index + 1;

    if (position % 2 === 0) return '8px 0px 8px 16px';

    return '8px 16px 8px 0px';
  };

  return (
    <ListContainer>
      {
        loading && [...Array(skeletonCards)].map((_, index) =>
          <CardContainer lg={6} key={`card-${index}`}>
            <ImageCard padding={getCardPadding(index)} loading />
          </CardContainer>
        )
      }
      {
        !loading && cards && cards.map((card, index) =>
          <CardContainer lg={6} key={`card-${index}`}>
            <ImageCard padding={getCardPadding(index)} {...card} />
          </CardContainer>
        )
      }
      {
        !loading && !cards.length &&
        <EmptyListContainer>
          <ImageContainer>
            <RocketImage src={error ? Broken : Rocket} />
          </ImageContainer>

          <TextContainer>
            <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops!</ParagraphText>
            <ParagraphText color={COLOR_GRAY_MEDIUM}>
              {
                error ? 'We ran into an error. Please try again.' : 'This looks empty. Did you add some fuel?'
              }
            </ParagraphText>
          </TextContainer>
        </EmptyListContainer>
      }
    </ListContainer>
  );
};

interface IList {
  cards: IImageCard[];
  error?: boolean;
  loading: boolean;
};
