import React from 'react';

import { Input } from '../input';
import { List } from '../list';
import { Modal } from '../modal';
import { Paginator } from '../paginator';
import { TitleText } from '../text';

import { ImageListContainer, ListContainer, PaginatorContainer, SearchContainer, TitleContainer } from './image-list.style';

export const ImageList: React.FC<IImageList> = ({ onClose, visible }) => {
  const handleCloseRequest = (): void => {
    return onClose && onClose();
  };

  return (
    <Modal onClose={handleCloseRequest} visible={visible} closeButton>
      <ImageListContainer>
        <TitleContainer>
          <TitleText>Stored images</TitleText>
        </TitleContainer>

        <SearchContainer>
          <Input icon={'search'} placeholder={'Image name'} />
        </SearchContainer>

        <ListContainer>
          <List loading={false} cards={[
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              primaryText: 'Card title with long text for testing purposes',
              image: '',
              link: '',
              active: true,
              clipboard: true
            }
          ]} />
        </ListContainer>

        <PaginatorContainer>
          <Paginator current={1} total={1} onPrevClick={(): void => { }} onNextClick={(): void => { }} />
        </PaginatorContainer>
      </ImageListContainer>
    </Modal>
  );
};

interface IImageList {
  onClose: () => void;
  visible: boolean;
}
