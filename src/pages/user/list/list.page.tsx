import React from 'react';
import Row from 'react-bootstrap/Row';

import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';

import { UserListContainer } from './list.style';

export const ListUserPage: React.FC<IListUserPage> = () => {
  return (
    <UserListContainer>
      <Header title={'Users'} />

      <Row>
        <Column xl={9} position={'left'}>
          <List cards={[
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: false
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/dashboard/users/view/123456',
              active: true
            }
          ]} />
        </Column>

        <Column xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Role:'}>
            <Dropdown icon={'policy'} name={'Any'} items={[]} onChange={(): void => {}} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle />
          </FormField>
        </Column>
      </Row>
    </UserListContainer>
  );
};

interface IListUserPage {
}
