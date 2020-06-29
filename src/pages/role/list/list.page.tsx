import React from 'react';
import Row from 'react-bootstrap/Row';

import { Column } from '../../../components/column';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';

import { RoleListContainer } from './list.style';

export const ListRolePage: React.FC<IListRolePage> = () => {
  return (
    <RoleListContainer>
      <Header title={'Roles'} />

      <Row>
        <Column xl={9} position={'left'}>
          <List cards={[
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: false
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
              active: true
            },
            {
              title: 'Card title with long text for testing purposes',
              text: 'Card title with long text for testing purposes',
              secondaryText: 'Card title with long text for testing purposes',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/roles/view/123456',
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
      </Row>
    </RoleListContainer>
  );
};

interface IListRolePage {
}
