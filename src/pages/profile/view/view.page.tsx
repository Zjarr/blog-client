import React from 'react';
import Row from 'react-bootstrap/Row';

import { SimpleButton } from '../../../components/button';
import { ChangePassword } from '../../../components/change-password';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { SubtitleText } from '../../../components/text';
import { UserContext } from '../../../contexts';
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
  const navigateTo = useNavigateTo();

  const { user } = React.useContext(UserContext);
  const [passwordModalVisible, setPasswordModalVisible] = React.useState<boolean>(false);

  return (
    <ViewContainer>
      <Header title={'Profile'} />

      <Row>
        <ContentContainer md={{ span: 6, offset: 3 }}>
          <Image src={user!.image || ''} height={'180px'} width={'180px'} shape={'circle'} />

          <BasicInfoContainer>
            <SubtitleText margin={'0px'}> {`${user?.firstname} ${user?.lastname}`} </SubtitleText>
          </BasicInfoContainer>

          {
            user?.social && user?.social.length > 0 &&
            <SocialContainer>
              {
                user?.social.map((socialNetwork: ISocial, index: number) =>
                  <SimpleButton
                    key={`social-network=${socialNetwork._id}-${index}`}
                    icon={socialNetwork.icon}
                    shape={'circle'} />
                )
              }
            </SocialContainer>
          }

          <AdvancedInfoContainer>
            <InfoContainer>
              <Label>About:</Label>
              <Info>{user?.about}</Info>
            </InfoContainer>

            <InfoContainer>
              <Label>Email:</Label>
              <Info>{user?.email}</Info>
            </InfoContainer>

            <InfoContainer>
              <Label>Member since:</Label>
              <Info>{user?.created}</Info>
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
