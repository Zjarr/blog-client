import React from 'react';
import Row from 'react-bootstrap/Row';

import { IconCard } from '../../../components/card';
import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Input } from '../../../components/input';
import { SubtitleText } from '../../../components/text';
import { TextArea } from '../../../components/textarea';

import { BodyContainer, EditContainer } from './edit.style';

export const EditProfilePage: React.FC<IEditProfilePage> = () => {
  return (
    <EditContainer>
      <Header
        backButtonLink={'/admin/profile'}
        backButtonText={'Profile'}
        title={'Edit profile'} />

      <BodyContainer>
        <Row>
          <Column xl={4} position={'left'}>
            <Image shape={'circle'} height={'180px'} width={'180px'} updatable />
          </Column>

          <Column xl={4} position={'center'}>
            <FormField label={'Name:'}>
              <Input icon={'person'} placeholder={'John'} />
            </FormField>

            <FormField label={'Lastname:'}>
              <Input icon={'person'} placeholder={'Doe'} />
            </FormField>

            <FormField label={'Email:'}>
              <Input icon={'mail'} placeholder={'john.doe@email.com'} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField label={'About:'} height={'148px'}>
              <TextArea />
            </FormField>
          </Column>
        </Row>

        <SubtitleText>Social networks</SubtitleText>
        <Row>
          <Column xl={4} position={'left'}>
            <FormField label={'Name:'}>
              <Input icon={'web'} placeholder={'Facebook'} />
            </FormField>
          </Column>

          <Column xl={4} position={'center'}>
            <FormField label={'Icon:'}>
              <Dropdown name={'Select one'} icon={'public'} items={[]} onChange={(): void => { }} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField label={'URL:'}>
              <Input icon={'link'} placeholder={'facebook.com/john.doe'} />
            </FormField>
          </Column>
        </Row>

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
      </BodyContainer>
    </EditContainer>
  );
};

interface IEditProfilePage {
}
