import React from 'react';
import Row from 'react-bootstrap/Row';

import { EditContainer, BodyContainer } from './edit.style';
import { Header } from '../../../components/header';

import { Column } from '../../../components/column';
import { Image } from '../../../components/image';
import { FormField } from '../../../components/form-field';
import { Input } from '../../../components/input';
import { SubtitleText } from '../../../components/text';
import { IconCard } from '../../../components/card';

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
            <FormField label={'Name'}>
              <Input icon={'person'} />
            </FormField>

            <FormField label={'Lastname'}>
              <Input icon={'person'} />
            </FormField>

            <FormField label={'Email'}>
              <Input icon={'mail'} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField label={'Email'}>
              <Input icon={'mail'} />
            </FormField>
          </Column>
        </Row>

        <SubtitleText>Social networks</SubtitleText>
        <Row>
          <Column xl={4} position={'left'}>
            <FormField label={'Email'}>
              <Input icon={'mail'} />
            </FormField>
          </Column>

          <Column xl={4} position={'center'}>
            <FormField label={'Email'}>
              <Input icon={'mail'} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField label={'Email'}>
              <Input icon={'mail'} />
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
