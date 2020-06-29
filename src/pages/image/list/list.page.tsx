import React from 'react';

import { Column } from '../../../components/column';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';

import { ImageListContainer, ListContainer } from './list.style';

export const ListImagePage: React.FC<IListImagePage> = () => {
  return (
    <ImageListContainer>
      <Header title={'Images'} />

      <ListContainer>
        <Column xl={9} position={'left'}>
          <List cards={[
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: false
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              text: 'This is a short description for the image',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/images/view/123456',
              active: true
            }
          ]} />
        </Column>

        <Column xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Active:'}>
            <Toggle />
          </FormField>
        </Column>
      </ListContainer>
    </ImageListContainer>
  );
};

interface IListImagePage {
}
