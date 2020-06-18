import React from 'react';
import Row from 'react-bootstrap/Row';

import { useInput } from '../../lib/hooks';

import { Card, ICard } from '../card';
import { Input } from '../input';

import { CardContainer, ListContainer, SearchContainer } from './style.list.components';

export const List: React.FC<IList> = ({ cards, onSearch }) => {
  const searchInput = useInput('');

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onSearch) {
      onSearch(e.target.value);
    }

    return searchInput.onChange(e);
  };

  const getCardItems = (cards: ICard[]): JSX.Element[] => {
    return cards.map((card, index) =>
      <CardContainer md={6} key={`${card.type}${index}`}>
        <Card {...card} />
      </CardContainer>
    );
  };

  return (
    <ListContainer>
      <SearchContainer>
        <Input icon={'search'} placeholder={'Search by name'} type={'text'} value={searchInput.value} onChange={handleSearchOnChange} />
      </SearchContainer>

      <Row>
        {
          cards && getCardItems(cards)
        }
      </Row>
    </ListContainer>
  );
};

interface IList {
  cards: ICard[];
  onSearch?: (searchString: string) => void
};
