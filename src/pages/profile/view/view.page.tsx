import Moment from 'moment';
import React from 'react';
import Row from 'react-bootstrap/Row';

import { Banner } from '../../../components/banner';
import { SimpleButton } from '../../../components/button';
import { ChangePassword } from '../../../components/change-password';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Skeleton } from '../../../components/skeleton';
import { SubtitleText } from '../../../components/text';
import { UserContext } from '../../../contexts';
import { useNavigateTo } from '../../../utils/hooks';
import { ISocial, IUser } from '../../../utils/interfaces';
import { BORDER_RADIUS_SMALL, COLOR_PURPLE, COLOR_RED, STRING_SERVER_ERROR } from '../../../utils/values';

import { IUserQueryData, useUserQuery } from './view.graphql';
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

  const {
    error: userQueryError,
    data: userQueryData,
    loading: userQueryLoading
  } = useUserQuery(user!);

  const [passwordModalVisible, setPasswordModalVisible] = React.useState<boolean>(false);
  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [userData, setUserData] = React.useState<IUser | null>(null);

  const handleBannerMessageHide = (): void => {
    return setBannerVisible(false);
  };

  const showBannerMessage = (message: string): void => {
    setBannerMessage(message);

    return setBannerVisible(true);
  };

  const handleUserQueryResponse = React.useCallback((data: IUserQueryData): void => {
    const { error, user } = data.user;

    if (error) return showBannerMessage(error.message);
    if (!user) return;

    return setUserData(user);
  }, []);

  React.useEffect(() => {
    if (userQueryError) return showBannerMessage(STRING_SERVER_ERROR);
    if (userQueryData) return handleUserQueryResponse(userQueryData);
  }, [userQueryError, userQueryData, handleUserQueryResponse]);

  return (
    <ViewContainer>
      <Header title={'Profile'} />

      <Row>
        <ContentContainer md={{ span: 6, offset: 3 }}>
          <Image src={userData?.image} height={'180px'} width={'180px'} shape={'circle'} />

          <BasicInfoContainer>
            {
              userQueryLoading ?
                <Skeleton height={'32px'} border={BORDER_RADIUS_SMALL} width={'60%'} /> :
                <SubtitleText margin={'0px'}>
                  {userData?.firstname} {userData?.lastname}
                </SubtitleText>
            }
          </BasicInfoContainer>

          {
            <SocialContainer>
              {
                userQueryLoading ?
                  [1, 2, 3].map((index) => <Skeleton key={`social-skeleton-${index}`} height={'48px'} width={'48px'} />) :
                  userData?.social?.map((socialNetwork: ISocial, index: number) =>
                    <SimpleButton
                      icon={socialNetwork.icon}
                      key={`social-network=${socialNetwork._id}-${index}`}
                      onClick={(): Window | null => window.open(`https://${socialNetwork.url}`, '_blank')}
                      shape={'circle'} />
                  )
              }
            </SocialContainer>
          }

          <AdvancedInfoContainer>
            <InfoContainer>
              <Label>About:</Label>
              {
                userQueryLoading ?
                  <Skeleton height={'80px'} border={BORDER_RADIUS_SMALL} margin={'auto'} width={'100%'} /> :
                  <Info>{userData?.about}</Info>
              }
            </InfoContainer>

            <InfoContainer>
              <Label>Email:</Label>
              {
                userQueryLoading ?
                  <Skeleton height={'24px'} border={BORDER_RADIUS_SMALL} margin={'auto'} width={'40%'} /> :
                  <Info>{userData?.email}</Info>
              }
            </InfoContainer>

            <InfoContainer>
              <Label>Member since:</Label>
              {
                userQueryLoading ?
                  <Skeleton height={'24px'} border={BORDER_RADIUS_SMALL} margin={'auto'} width={'50%'} /> :
                  <Info>{Moment(userData?.created, 'YYYY-MM-DDTHH:mm:ss').utc().format('MMMM Do, YYYY')}</Info>
              }
            </InfoContainer>
          </AdvancedInfoContainer>
        </ContentContainer>
      </Row>

      <Footer>
        <SimpleButton icon={'vpn_key'} onClick={(): void => setPasswordModalVisible(true)} />
        <SimpleButton icon={'edit'} color={COLOR_PURPLE} onClick={(): void => navigateTo('/admin/profile/edit')} />
      </Footer>

      <ChangePassword
        onClose={(): void => setPasswordModalVisible(false)}
        visible={passwordModalVisible} />

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </ViewContainer>
  );
};

interface IViewProfilePage { }
