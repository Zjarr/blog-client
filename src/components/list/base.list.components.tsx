import React from 'react';

import { Card, ICard } from '../card';

import { CardContainer, ListContainer } from './style.list.components';

export const List: React.FC<IList> = ({ cards }) => {

  const getCardItems = (cards: ICard[]): JSX.Element[] => {
    return cards.map((card, index) =>
      <CardContainer md={6} key={`${card.type}${index}`}>
        <Card {...card} />
      </CardContainer>
    );
  };

  return (
    <ListContainer>
      {
        cards && getCardItems(cards)
      }
    </ListContainer>
  );
};

interface IList {
  cards: ICard[];
};
