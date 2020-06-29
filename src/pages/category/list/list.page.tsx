import React from 'react';

import { Column } from '../../../components/column';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';

import { CategoryListContainer, ListContainer } from './list.style';

export const ListCategoryPage: React.FC<IListCategoryPage> = () => {
  return (
    <CategoryListContainer>
      <Header title={'Categories'} />

      <ListContainer>
        <Column xl={9} position={'left'}>
          <List cards={[
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: false
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              icon: 'category',
              link: '/admin/categories/view/123456',
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
    </CategoryListContainer>
  );
};

interface IListCategoryPage {
}
