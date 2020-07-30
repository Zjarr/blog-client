import React from 'react';
import Row from 'react-bootstrap/Row';

import { SimpleButton } from '../../../components/button';
import { ChangePassword } from '../../../components/change-password';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { SubtitleText } from '../../../components/text';
import { useNavigateTo } from '../../../utils/hooks';
import { ISocial } from '../../../utils/interfaces';
import { COLOR_PURPLE } from '../../../utils/values';

import {
  AdvancedInfoContainer,
  BasicInfoContainer,
  ContentContainer,
  Info,
  InfoContainer,
  Label,
  SocialContainer,
  ViewContainer
} from './view.style';

export const ViewProfilePage: React.FC<IViewProfilePage> = () => {
  const [passwordModalVisible, setPasswordModalVisible] = React.useState<boolean>(false);
  const [socialNetworks] = React.useState<ISocial[]>([]);

  const navigateTo = useNavigateTo();

  return (
    <ViewContainer>
      <Header title={'Profile'} />

      <Row>
        <ContentContainer md={{ span: 6, offset: 3 }}>
          <Image src={''} height={'180px'} width={'180px'} shape={'circle'} />

          <BasicInfoContainer>
            <SubtitleText margin={'0px'}>Pablo Navarro</SubtitleText>
          </BasicInfoContainer>

          {
            socialNetworks.length > 0 &&
            <SocialContainer>
              {
                socialNetworks.map((socialNetwork: ISocial, index: number) =>
                  <SimpleButton
                    key={`social-network=${socialNetwork.name}-${index}`}
                    icon={socialNetwork.icon}
                    shape={'circle'} />
                )
              }
            </SocialContainer>
          }

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

      <Footer>
        <SimpleButton icon={'vpn_key'} onClick={(): void => setPasswordModalVisible(true)} />
        <SimpleButton icon={'edit'} color={COLOR_PURPLE} onClick={(): void => navigateTo('/admin/profile/edit')} />
      </Footer>

      <ChangePassword visible={passwordModalVisible} onClose={(): void => setPasswordModalVisible(false)} />
    </ViewContainer>
  );
};

interface IViewProfilePage { }
