import React from 'react';
import Row from 'react-bootstrap/Row';

import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';

import { BlogListContainer } from './list.style';

export const ListBlogPage: React.FC<IListBlogPage> = () => {
  return (
    <BlogListContainer>
      <Header title={'Blogs'} />

      <Row>
        <Column xl={9} position={'left'}>
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

        <Column xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Author'}>
            <Dropdown icon={'person'} name={'Any'} items={[]} onChange={(): void => {}} />
          </FormField>

          <FormField label={'Published'}>
            <Toggle />
          </FormField>

          <FormField label={'Category'}>
            <Dropdown icon={'category'} name={'Any'} items={[]} onChange={(): void => {}} />
          </FormField>

          <FormField label={'From'}>
            <Column md={4} position={'left'}>
              <Dropdown name={'Month'} items={[]} onChange={(): void => {}} />
            </Column>
            <Column md={4} position={'center'}>
              <Dropdown name={'Day'} items={[]} onChange={(): void => {}} />
            </Column>
            <Column md={4} position={'right'}>
              <Dropdown name={'Year'} items={[]} onChange={(): void => {}} />
            </Column>
          </FormField>

          <FormField label={'To'}>
            <Column md={4} position={'left'}>
              <Dropdown name={'Month'} items={[]} onChange={(): void => {}} />
            </Column>
            <Column md={4} position={'center'}>
              <Dropdown name={'Day'} items={[]} onChange={(): void => {}} />
            </Column>
            <Column md={4} position={'right'}>
              <Dropdown name={'Year'} items={[]} onChange={(): void => {}} />
            </Column>
          </FormField>
        </Column>
      </Row>
    </BlogListContainer>
  );
};

interface IListBlogPage {
}
