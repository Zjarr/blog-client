import React from 'react';

import Rocket from '../../assets/images/rocket.png';
import { useInput } from '../../utils/hooks';
import { COLOR_GRAY_MEDIUM } from '../../utils/values';

import { IImageCard, ImageCard } from '../card';
import { Input } from '../input';
import { Paginator } from '../paginator';
import { ParagraphText } from '../text';

import {
  CardContainer,
  CardsListContainer,
  EmptyListContainer,
  ImageContainer,
  ListContainer,
  PaginatorContainer,
  RocketImage,
  SearchContainer,
  TextContainer
} from './list.style';

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

  const getCardPadding = (index: number): string => {
    const position: number = index + 1;

    if (position % 2 === 0) return '8px 8px 8px 16px';

    return '8px 16px 8px 8px';
  };

  return (
    <ListContainer>
      <SearchContainer>
        <Input icon={'search'} placeholder={'Search by name'} type={'text'} value={searchInput.value} onChange={handleSearchOnChange} />
      </SearchContainer>

      <CardsListContainer>
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
              <RocketImage src={Rocket} />
            </ImageContainer>

            <TextContainer>
              <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops!</ParagraphText>
              <ParagraphText color={COLOR_GRAY_MEDIUM}>This looks empty. Did you add some fuel?</ParagraphText>
            </TextContainer>
          </EmptyListContainer>
        }
      </CardsListContainer>

      {
        !loading && cards.length > 0 &&
        <PaginatorContainer>
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
