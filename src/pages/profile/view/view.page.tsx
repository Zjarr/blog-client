import React from 'react';
import Row from 'react-bootstrap/Row';

import { SimpleButton } from '../../../components/button';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { useNavigateTo } from '../../../utils/hooks';
import { COLOR_PURPLE } from '../../../utils/values';

import {
  AdvancedInfoContainer,
  BasicInfoContainer,
  ButtonContainer,
  ContentContainer,
  Info,
  InfoContainer,
  Label,
  Name,
  SocialContainer,
  ViewContainer
} from './view.style';

export const ViewProfilePage: React.FC<IViewProfilePage> = () => {
  const navigateTo = useNavigateTo();

  return (
    <ViewContainer>
      <Header title={'Profile'} />

      <Row>
        <ContentContainer md={{ span: 6, offset: 3 }}>
          <Image src={'https://www.aircraftcompare.com/wp-content/uploads/2019/04/78.jpg'} height={'180px'} width={'180px'} shape={'circle'} />

          <BasicInfoContainer>
            <Name>Pablo Navarro</Name>
          </BasicInfoContainer>

          <SocialContainer>
            <SimpleButton shape={'circle'} icon={'socicon-facebook'} />
            <SimpleButton shape={'circle'} icon={'socicon-twitter'} />
            <SimpleButton shape={'circle'} icon={'socicon-instagram'} />
          </SocialContainer>

          <AdvancedInfoContainer>
            <InfoContainer>
              <Label>About:</Label>
              <Info>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec dui lacus, malesuada vel odio in, lobortis interdum ante.
                In malesuada sit amet nunc vel porta
              </Info>
            </InfoContainer>

            <InfoContainer>
              <Label>Email:</Label>
              <Info>j.pablonavarro95@outlook.com</Info>
            </InfoContainer>

            <InfoContainer>
              <Label>Member since:</Label>
              <Info>June 28th, 2020</Info>
            </InfoContainer>
          </AdvancedInfoContainer>
        </ContentContainer>
      </Row>

      <ButtonContainer>
        <SimpleButton icon={'vpn_key'} />
        <SimpleButton icon={'edit'} color={COLOR_PURPLE} onClick={(): void => navigateTo('/admin/profile/edit')} />
      </ButtonContainer>
    </ViewContainer>
  );
};

interface IViewProfilePage {
}
