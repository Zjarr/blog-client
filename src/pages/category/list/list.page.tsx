import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Input } from '../../../components/input';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import { BodyContainer, CategoryListContainer, FilterContainer, ListContainer } from './list.style';

export const ListCategoryPage: React.FC<IListCategoryPage> = () => {
  const navigateTo = useNavigateTo();

  return (
    <CategoryListContainer>
      <Header title={'Categories'} />

      <BodyContainer>
        <ListContainer xl={9} position={'left'}>
          <List loading={false} cards={[]} />
        </ListContainer>

        <FilterContainer xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Search:'}>
            <Input icon={'search'} placeholder={'Category name'} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle />
          </FormField>
        </FilterContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton color={COLOR_PURPLE} icon={'add'} onClick={(): void => navigateTo('/admin/categories/add')} />
      </Footer>
    </CategoryListContainer>
  );
};

interface IListCategoryPage { }
