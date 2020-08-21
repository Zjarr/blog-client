import React from 'react';

import { SimpleButton } from '../../../components/button';
import { Dropdown } from '../../../components/dropdown';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Input } from '../../../components/input';
import { List } from '../../../components/list';
import { SubtitleText } from '../../../components/text';
import { Toggle } from '../../../components/toggle';
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import { BlogListContainer, BodyContainer, FilterContainer, ListContainer } from './list.style';

export const ListBlogPage: React.FC<IListBlogPage> = () => {
  const navigateTo = useNavigateTo();

  return (
    <BlogListContainer>
      <Header title={'Blogs'} />

      <BodyContainer>
        <ListContainer xl={9} position={'left'} empty={0}>
          <List loading={true} cards={[
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: false
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            },
            {
              title: 'Some airplane blog title',
              primaryText: 'Planes | Travel | Experience',
              secondaryText: 'June 28th, 2020',
              image: '',
              link: '/admin/blogs/view/123456',
              active: true
            }
          ]} />
        </ListContainer>

        <FilterContainer xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Search:'}>
            <Input icon={'search'} placeholder={'Blog name'} loading />
          </FormField>

          <FormField label={'Category:'}>
            <Dropdown icon={'category'} name={'Any'} values={[]} onChange={(): void => { }} loading />
          </FormField>

          <FormField label={'Published:'}>
            <Toggle loading />
          </FormField>
        </FilterContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton color={COLOR_PURPLE} icon={'add'} onClick={(): void => navigateTo('/admin/blogs/add')} />
      </Footer>
    </BlogListContainer>
  );
};

interface IListBlogPage { }
