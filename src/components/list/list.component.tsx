import React from 'react';

import { IImageCard, ImageCard } from '../card';
import { Empty } from '../empty';

import { CardContainer, ListContainer } from './list.style';

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
        <Empty error={error} />
      }
    </ListContainer>
  );
};

interface IList {
  cards: IImageCard[];
  error?: boolean;
  loading: boolean;
};
