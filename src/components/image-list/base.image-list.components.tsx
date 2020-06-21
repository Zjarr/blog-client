import React from 'react';

import { List } from '../list';
import { Modal } from '../modal';
import { Text } from '../text';

import { ImageListContainer, ListContainer, TitleContainer } from './style.image-list.components';

export const ImageList: React.FC<IImageList> = ({ onClose, visible }) => {
  const handleCloseRequest = (): void => {
    return onClose && onClose();
  };

  return (
    <Modal buttonColor={''} onClose={handleCloseRequest} visible={visible} closeButton>
      <ImageListContainer>
        <TitleContainer>
          <Text type={'title'}>Stored images</Text>
        </TitleContainer>

        <ListContainer>
          <List cards={[
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              type: 'image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              active: true
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
