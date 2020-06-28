import React from 'react';
import Row from 'react-bootstrap/Row';

import { useInput } from '../../utils/hooks';

import { ImageCard, IImageCard } from '../card';
import { Input } from '../input';
import { Paginator } from '../paginator';

import { CardContainer, ListContainer, PaginatorContainer, SearchContainer } from './list.style';

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

  const getCardItems = (cards: IImageCard[]): JSX.Element[] => {
    return cards.map((card, index) =>
      <CardContainer lg={6} key={`${index}`}>
        <ImageCard {...card} />
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
  cards: IImageCard[];
  onPrevClick?: () => void;
  onSearch?: (searchString: string) => void;
  onNextClick?: () => void;
};
