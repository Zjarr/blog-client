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

import { BodyContainer, FilterContainer, ImageListContainer, ListContainer } from './list.style';

export const ListImagePage: React.FC<IListImagePage> = () => {
  const navigateTo = useNavigateTo();

  return (
    <ImageListContainer>
      <Header title={'Images'} />

      <BodyContainer>
        <ListContainer xl={9} position={'left'} empty={0}>
          <List loading={false} cards={[
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: false
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            },
            {
              title: 'Some title for the image',
              primaryText: 'This is a short description for the image',
              primaryTextIcon: 'description',
              secondaryText: 'Image alt text',
              secondaryTextIcon: 'broken_image',
              image: '',
              link: '/admin/images/view/123456',
              active: true
            }
          ]} />
        </ListContainer>

        <FilterContainer xl={3} position={'right'}>
          <SubtitleText icon={'filter_list'}>Filter</SubtitleText>

          <FormField label={'Search:'}>
            <Input icon={'search'} placeholder={'Image name'} />
          </FormField>

          <FormField label={'Active:'}>
            <Toggle />
          </FormField>
        </FilterContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton color={COLOR_PURPLE} icon={'add'} onClick={(): void => navigateTo('/admin/images/add')} />
      </Footer>
    </ImageListContainer>
  );
};

interface IListImagePage { }
