import { useQuery } from '@apollo/client';
import React from 'react';
import Row from 'react-bootstrap/Row';
import { useCookies } from 'react-cookie';

import { SimpleButton } from '../../../components/button';
import { ChangePassword } from '../../../components/change-password';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { SubtitleText } from '../../../components/text';
import { useNavigateTo } from '../../../utils/hooks';
import { ISocial, IUser } from '../../../utils/interfaces';
import { COLOR_PURPLE } from '../../../utils/values';

import { IGetUserInput, IProfileQuery, PROFILE_QUERY } from './view.graphql';
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
  const [cookies] = useCookies(['user']);
  const navigateTo = useNavigateTo();

  const {
    error: profileQueryError,
    data: profileQueryData,
    loading: profileQueryLoading
  } = useQuery<IProfileQuery, IGetUserInput>(
    PROFILE_QUERY,
    {
      variables: {
        user: {
          email: cookies.user
        }
      }
    }
  );

  const [passwordModalVisible, setPasswordModalVisible] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<IUser>();

  const setUserData = React.useCallback((data: IProfileQuery): void => {
    const { error, user } = data.user;

    if (error || !user) {
      return;
    }

    return setUser(user);
  }, []);

  React.useEffect(() => {
    if (!profileQueryData || profileQueryLoading) {
      return;
    }

    return setUserData(profileQueryData);
  }, [profileQueryData, profileQueryLoading, setUserData]);

  return (
    <ViewContainer>
      <Header title={'Profile'} />

      <Row>
        <ContentContainer md={{ span: 6, offset: 3 }}>
          <Image src={''} height={'180px'} width={'180px'} shape={'circle'} />

          <BasicInfoContainer>
            <SubtitleText margin={'0px'}>
              {
                profileQueryLoading || profileQueryError ? '...' : `${user?.name} ${user?.lastname}`
              }
            </SubtitleText>
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
              <Info>
                {
                  profileQueryLoading || profileQueryError ? '...' : user?.about
                }
              </Info>
            </InfoContainer>

            <InfoContainer>
              <Label>Email:</Label>
              <Info>
                {
                  profileQueryLoading || profileQueryError ? '...' : user?.email
                }
              </Info>
            </InfoContainer>

            <InfoContainer>
              <Label>Member since:</Label>
              <Info>
                {
                  profileQueryLoading || profileQueryError ? '...' : user?.created
                }
              </Info>
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
