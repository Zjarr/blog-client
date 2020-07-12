import React from 'react';
import Row from 'react-bootstrap/Row';

import { useInput } from '../../utils/hooks';

import { IImageCard, ImageCard } from '../card';
import { Input } from '../input';
import { Paginator } from '../paginator';

import { CardContainer, ListContainer, PaginatorContainer, SearchContainer } from './list.style';

const skeletonCards = 12;

export const List: React.FC<IList> = ({ cards, loading, onPrevClick, onSearch, onNextClick }) => {
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

  return (
    <ListContainer>
      <SearchContainer>
        <Input icon={'search'} placeholder={'Search by name'} type={'text'} value={searchInput.value} onChange={handleSearchOnChange} />
      </SearchContainer>

      <Row>
        {
          loading && [...Array(skeletonCards)].map((_, index) =>
            <CardContainer lg={6} key={`card-${index}`}>
              <ImageCard loading />
            </CardContainer>
          )
        }
        {
          !loading && cards && cards.map((card, index) =>
            <CardContainer lg={6} key={`card-${index}`}>
              <ImageCard {...card} />
            </CardContainer>
          )
        }
      </Row>

      {
        !loading && <PaginatorContainer>
          <Paginator current={1} total={1} onPrevClick={handlePrevClick} onNextClick={handleNextClick} />
        </PaginatorContainer>
      }
    </ListContainer>
  );
};

interface IList {
  cards: IImageCard[];
  loading: boolean;
  onPrevClick?: () => void;
  onSearch?: (searchString: string) => void;
  onNextClick?: () => void;
};
