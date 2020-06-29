import React from 'react';

import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';

import { ListContainer, UserListContainer } from './list.style';

export const ListUserPage: React.FC<IListUserPage> = () => {
  return (
    <UserListContainer>
      <Header title={'Users'} />

      <ListContainer>
        <Column xl={9} position={'left'}>
          <List cards={[
            {
              title: 'Some user Name',
              text: 'Administrator',
              secondaryText: 'June 20th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/users/view/123456',
              active: false
            },
            {
              title: 'Some user Name',
              text: 'Administrator',
              secondaryText: 'June 20th, 2020',
              image: 'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg',
              link: '/admin/users/view/123456',
              active: true
            }
          ]} />
        </Column>

        <Column xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Role:'}>
            <Dropdown icon={'policy'} name={'Any'} items={[]} onChange={(): void => { }} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle />
          </FormField>
        </Column>
      </ListContainer>
    </UserListContainer>
  );
};

interface IListUserPage {
}
