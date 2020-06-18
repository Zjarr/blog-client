import React from 'react';
import Row from 'react-bootstrap/Row';

import { useInput } from '../../lib/hooks';

import { Card, ICard } from '../card';
import { Input } from '../input';
import { Paginator } from '../paginator';

import { CardContainer, ListContainer, PaginatorContainer, SearchContainer } from './style.list.components';

export const List: React.FC<IList> = ({ cards, onPrevClick, onSearch, onNextClick }) => {
  const searchInput = useInput('');

  const handleSearchOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onSearch) {
      onSearch(e.target.value);
    }

    return searchInput.onChange(e);
  };

  const handlePrevClick = (): void => {
    return onPrevClick && onPrevClick();
  };

  const handleNextClick = (): void => {
    return onNextClick && onNextClick();
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

      <PaginatorContainer>
        <Paginator current={1} total={1} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
      </PaginatorContainer>
    </ListContainer>
  );
};

interface IList {
  cards: ICard[];
  onPrevClick?: () => void;
  onSearch?: (searchString: string) => void;
  onNextClick?: () => void;
};
