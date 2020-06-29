import React from 'react';

import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';

import { BlogListContainer, ListContainer } from './list.style';

export const ListBlogPage: React.FC<IListBlogPage> = () => {
  return (
    <BlogListContainer>
      <Header title={'Blogs'} />

      <ListContainer>
        <Column xl={9} position={'left'}>
          <List cards={[
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: false
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              text: 'By Pablo Navarro',
              secondaryText: 'June 28th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/blogs/view/123456',
              active: true
            }
          ]} />
        </Column>

        <Column xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Author:'}>
            <Dropdown icon={'person'} name={'Any'} items={[]} onChange={(): void => {}} />
          </FormField>

          <FormField label={'Published:'}>
            <Toggle />
          </FormField>

          <FormField label={'Category:'}>
            <Dropdown icon={'category'} name={'Any'} items={[]} onChange={(): void => {}} />
          </FormField>
        </Column>
      </ListContainer>
    </BlogListContainer>
  );
};

interface IListBlogPage {
}
