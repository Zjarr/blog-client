import React from 'react';
import Row from 'react-bootstrap/Row';

import { Column } from '../../../components/column';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';

import { BlogListContainer } from './list.style';
import { SubtitleText } from '../../../components/text';

export const ListBlogPage: React.FC<IListBlogPage> = () => {
  return (
    <BlogListContainer>
      <Header title={'Blogs'} />

      <Row>
        <Column lg={9} position={'left'}>
          <List cards={[
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: false
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/blogs/view/123456',
              active: true
            }
          ]} />
        </Column>

        <Column lg={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>
        </Column>
      </Row>
    </BlogListContainer>
  );
};

interface IListBlogPage {
}
