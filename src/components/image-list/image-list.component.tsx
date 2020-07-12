import React from 'react';

import { List } from '../list';
import { Modal } from '../modal';
import { TitleText } from '../text';

import { ImageListContainer, ListContainer, TitleContainer } from './image-list.style';

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

        <ListContainer>
          <List loading={false} cards={[
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true,
              clipboard: true
            }
          ]} />
        </ListContainer>
      </ImageListContainer>
    </Modal>
  );
};

interface IImageList {
  onClose: () => void;
  visible: boolean;
}
