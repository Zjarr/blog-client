import { format } from 'date-fns';
import React from 'react';
import Row from 'react-bootstrap/Row';

import { SimpleButton } from '../../../components/button';
import { ChangePassword } from '../../../components/change-password';
import { Empty } from '../../../components/empty';
import { Footer } from '../../../components/footer';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Skeleton } from '../../../components/skeleton';
import { SubtitleText } from '../../../components/text';
import { UserContext } from '../../../contexts';
import { useNavigateTo } from '../../../utils/hooks';
import { ISocial, IUser } from '../../../utils/interfaces';
import { BORDER_RADIUS_SMALL, COLOR_PURPLE, STRING_SERVER_ERROR } from '../../../utils/values';

import { IPasswordMutationData, IUserQueryData, usePasswordMutation, useUserQuery } from './view.graphql';
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
  const [error, setError] = React.useState<string>('');
  const [passwordModalVisible, setPasswordModalVisible] = React.useState<boolean>(false);
  const [userData, setUserData] = React.useState<IUser | null>(null);

  const { user } = React.useContext(UserContext);

  const navigateTo = useNavigateTo();

  const {
    error: userQueryError,
    data: userQueryData,
    loading: userQueryLoading
  } = useUserQuery(user!);

  const [passwordMutation, {
    error: passwordMutationError,
    data: passwordMutationData,
    loading: passwordMutationLoading
  }] = usePasswordMutation();

  const handlePasswordUpdate = (password: { current: string; updated: string } | null): void => {
    setPasswordModalVisible(false);

    if (!password) return;
    const { current, updated } = password;

    passwordMutation({
      variables: {
        password: {
          _id: user!,
          current,
          updated
        }
      }
    });
  };

  const handleUserQueryResponse = React.useCallback((data: IUserQueryData): void => {
    const { error, user } = data.user;

    if (error) return setError(error.message);
    if (!user) return;

    return setUserData(user);
  }, []);

  const handlePasswordMutationResponse = React.useCallback((data: IPasswordMutationData): void => {
    const { error, user } = data.password;

    if (error) return setError(error.message);
    if (!user) return;
  }, []);

  React.useEffect(() => {
    if (userQueryData) return handleUserQueryResponse(userQueryData);
  }, [userQueryData, handleUserQueryResponse]);

  React.useEffect(() => {
    if (passwordMutationData) return handlePasswordMutationResponse(passwordMutationData);
  }, [passwordMutationData, handlePasswordMutationResponse]);

  React.useEffect(() => {
    if (userQueryError) return setError(STRING_SERVER_ERROR);
  }, [userQueryError]);

  React.useEffect(() => {
    if (passwordMutationError) return setError(STRING_SERVER_ERROR);
  }, [passwordMutationError]);

  if (!!error) {
    return (
      <ViewContainer empty={!!error}>
        <Header title={'Profile'} />

        <Empty
          error={!!error}
          height={'calc(100% - 112px)'}
          message={error ? error : undefined} />
      </ViewContainer>
    );
  }

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
                  <Info>{userData?.created && format(new Date(userData.created), 'MMMM do, yyyy')}</Info>
              }
            </InfoContainer>
          </AdvancedInfoContainer>
        </ContentContainer>
      </Row>

      <Footer>
        <SimpleButton
          disabled={passwordMutationLoading}
          icon={passwordMutationLoading ? 'more_horiz' : 'vpn_key'}
          onClick={(): void => setPasswordModalVisible(true)} />

        <SimpleButton
          color={COLOR_PURPLE}
          disabled={passwordMutationLoading}
          icon={passwordMutationLoading ? 'more_horiz' : 'edit'}
          onClick={(): void => navigateTo('/admin/profile/edit')} />
      </Footer>

      <ChangePassword
        onClose={handlePasswordUpdate}
        visible={passwordModalVisible} />
    </ViewContainer>
  );
};

interface IViewProfilePage { }
