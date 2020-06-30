import React from 'react';
import Row from 'react-bootstrap/Row';

import { SimpleButton } from '../../../components/button';
import { IconCard } from '../../../components/card';
import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Input } from '../../../components/input';
import { SubtitleText } from '../../../components/text';
import { TextArea } from '../../../components/textarea';
import { COLOR_PURPLE } from '../../../utils/values';

import {
  AddButtonContainer,
  BodyContainer,
  CurrentContainer,
  EditContainer,
  FooterContainer,
  ImageColumn,
  SocialNetworksContainer
} from './edit.style';

export const EditProfilePage: React.FC<IEditProfilePage> = () => {
  return (
    <EditContainer>
      <Header
        backButtonLink={'/admin/profile'}
        backButtonText={'Profile'}
        title={'Edit profile'} />

      <BodyContainer>
        <Row>
          <ImageColumn xl={4} position={'left'}>
            <Image shape={'circle'} height={'180px'} width={'180px'} updatable />
          </ImageColumn>

          <Column xl={4} position={'center'}>
            <FormField label={'Name:'}>
              <Input icon={'person'} placeholder={'John'} />
            </FormField>

            <FormField label={'Lastname:'}>
              <Input icon={'person'} placeholder={'Doe'} />
            </FormField>

            <FormField label={'Email:'} noMargin>
              <Input icon={'mail'} placeholder={'john.doe@email.com'} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField label={'About:'} height={'148px'} noMargin>
              <TextArea />
            </FormField>
          </Column>
        </Row>

        <SocialNetworksContainer>
          <SubtitleText>Social networks</SubtitleText>
          <Row>
            <Column xl={4} position={'left'}>
              <FormField label={'Name:'} noMargin>
                <Input icon={'web'} placeholder={'Facebook'} />
              </FormField>
            </Column>

            <Column xl={4} position={'center'}>
              <FormField label={'Icon:'} noMargin>
                <Dropdown name={'Select one'} icon={'public'} items={[]} onChange={(): void => { }} />
              </FormField>
            </Column>

            <Column xl={4} position={'right'}>
              <FormField label={'URL:'} noMargin>
                <Input icon={'link'} placeholder={'facebook.com/john.doe'} />
              </FormField>
            </Column>
          </Row>

          <AddButtonContainer>
            <SimpleButton icon={'add'} color={COLOR_PURPLE} width={'auto'}>Add social network</SimpleButton>
          </AddButtonContainer>
        </SocialNetworksContainer>

        <CurrentContainer>
          <SubtitleText>Current</SubtitleText>
          <Row>
            <Column xl={4} position={'left'}>
              <IconCard icon={'socicon-instagram'} title={'Instagram'} text={'instagram.com/pablo'} />
            </Column>

            <Column xl={4} position={'center'}>
              <IconCard icon={'socicon-instagram'} title={'Instagram'} text={'instagram.com/pablo'} />
            </Column>
            <Column xl={4} position={'right'}>
              <IconCard icon={'socicon-instagram'} title={'Instagram'} text={'instagram.com/pablo'} />
            </Column>
          </Row>
        </CurrentContainer>
      </BodyContainer>

      <FooterContainer>
        <SimpleButton icon={'clear'} />
        <SimpleButton color={COLOR_PURPLE} icon={'done'} />
      </FooterContainer>
    </EditContainer>
  );
};

interface IEditProfilePage {
}
