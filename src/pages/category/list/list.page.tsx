import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Column } from '../../../components/column';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import { CategoryListContainer, ListContainer } from './list.style';

export const ListCategoryPage: React.FC<IListCategoryPage> = () => {
  const navigateTo = useNavigateTo();

  return (
    <CategoryListContainer>
      <Header title={'Categories'} />

      <ListContainer>
        <Column xl={9} position={'left'}>
          <List loading={false} cards={[
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: false
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
              icon: 'category',
              link: '/admin/categories/view/123456',
              active: true
            },
            {
              title: 'Some category title',
              text: 'This is a short description for the category',
              secondaryText: 'Icon name',
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

      <Footer>
        <SimpleButton color={COLOR_PURPLE} icon={'add'} onClick={(): void => navigateTo('/admin/categories/add')} />
      </Footer>
    </CategoryListContainer>
  );
};

interface IListCategoryPage {
}
