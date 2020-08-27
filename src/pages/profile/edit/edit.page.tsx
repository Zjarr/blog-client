import React from 'react';
import Row from 'react-bootstrap/Row';

import { Banner } from '../../../components/banner';
import { SimpleButton } from '../../../components/button';
import { IconCard } from '../../../components/card';
import { Column } from '../../../components/column';
import { Dropdown } from '../../../components/dropdown';
import { Footer } from '../../../components/footer';
import { FormField } from '../../../components/form-field';
import { Header } from '../../../components/header';
import { Image } from '../../../components/image';
import { Input } from '../../../components/input';
import { ParagraphText, SubtitleText } from '../../../components/text';
import { TextArea } from '../../../components/textarea';
import { UpdateImage } from '../../../components/update-image';
import { UserContext } from '../../../contexts';
import { useDropdown, useInput, useNavigateTo, useTextArea } from '../../../utils/hooks';
import { IImageResult, ISocial, IUser } from '../../../utils/interfaces';
import { COLOR_GRAY_MEDIUM, COLOR_PURPLE, COLOR_RED, STRING_FIELD_REQUIRED, STRING_SERVER_ERROR, VALUE_SOCIAL } from '../../../utils/values';

import { IUserData, IUserMutationInput, useUserMutation, useUserQuery } from './edit.graphql';
import {
  AddButtonContainer,
  BodyContainer,
  CurrentContainer,
  EditContainer,
  EmptyListContainer,
  ImageColumn,
  SocialCardContainer,
  SocialContainer
} from './edit.style';

export const EditProfilePage: React.FC<IEditProfilePage> = () => {
  const { user } = React.useContext(UserContext);

  const [imageModalVisible, setImageModalVisible] = React.useState<boolean>(false);
  const [socialNetworks, setSocialNetworks] = React.useState<ISocial[]>([]);
  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [fields, setFields] = React.useState<boolean>(false);
  const [profile, setProfile] = React.useState<IUser>();
  const [image, setImage] = React.useState<string>('');

  const [updateUserMutation, {
    error: userMutationError,
    data: userMutationData,
    loading: userMutationLoading
  }] = useUserMutation();

  const {
    error: userQueryError,
    data: userQueryData,
    loading: userQueryLoading
  } = useUserQuery(user!);

  const navigateTo = useNavigateTo();

  const userFirstName = useInput();
  const userLastName = useInput();
  const userAbout = useTextArea();
  const userEmail = useInput();

  const socialIcon = useDropdown(VALUE_SOCIAL);
  const socialName = useInput();
  const socialURL = useInput();

  const handleBannerMessageHide = (): void => {
    return setBannerVisible(false);
  };

  const showBannerMessage = (message: string): void => {
    setBannerMessage(message);

    return setBannerVisible(true);
  };

  const handleImageUpdateModalClose = (result: IImageResult | null): void => {
    setImageFile(result ? result.file : null);
    setImage(result ? result.base64 : image);

    return setImageModalVisible(false);
  };

  const getSocialColumnPosition = (index: number): string => {
    const position: number = index + 1;

    if (position % 3 === 0) return 'right';
    if (position % 3 === 1) return 'left';

    return 'center';
  };

  const addSocialNetwork = (): void => {
    if (!socialName.value) socialName.setError(STRING_FIELD_REQUIRED);
    if (!socialIcon?.value?.icon) socialIcon.setError(STRING_FIELD_REQUIRED);
    if (!socialURL.value) socialURL.setError(STRING_FIELD_REQUIRED);

    if (!socialName.value || !socialIcon?.value?.icon || !socialURL.value) return;

    const socialNetwork: ISocial = {
      name: socialName.value,
      icon: socialIcon.value.icon,
      url: socialURL.value
    };

    socialIcon.setValue(null);
    socialName.setValue('');
    socialURL.setValue('');

    return setSocialNetworks([...socialNetworks, { ...socialNetwork }]);
  };

  const removeSocialNetwork = (index: number): void => {
    socialNetworks.splice(index, 1);

    return setSocialNetworks([...socialNetworks]);
  };

  const isValidForm = (): boolean => {
    if (!userFirstName.value) userFirstName.setError(STRING_FIELD_REQUIRED);
    if (!userLastName.value) userLastName.setError(STRING_FIELD_REQUIRED);
    if (!userAbout.value) userAbout.setError(STRING_FIELD_REQUIRED);
    if (!userEmail.value) userEmail.setError(STRING_FIELD_REQUIRED);

    if (
      !userAbout.value ||
      !userEmail.value ||
      !userFirstName.value ||
      !userLastName.value
    ) return false;

    return true;
  };

  const buildUserObject = (): void => {
    const social: ISocial[] = socialNetworks.map(
      ({ _id, ...rest }) => rest
    );

    const userMutationData: IUserMutationInput = {
      user: {
        _id: user!,
        about: userAbout.value,
        email: userEmail.value,
        firstname: userFirstName.value,
        lastname: userLastName.value,
        social
      }
    };

    if (imageFile) {
      userMutationData.user.file = imageFile;
    } else {
      userMutationData.user.image = image;
    }

    updateUserMutation({
      variables: { ...userMutationData }
    });
  };

  const handleUserUpdate = (): void => {
    if (!isValidForm()) return;

    return buildUserObject();
  };

  const setUserData = React.useCallback((user: IUser): void => {
    if (fields) return;

    userFirstName.setValue(user.firstname);
    userLastName.setValue(user.lastname);
    userAbout.setValue(user.about || '');
    userEmail.setValue(user.email);

    setSocialNetworks(user.social || []);
    setImage(user.image || '');

    return setFields(true);
  }, [fields, userAbout, userEmail, userFirstName, userLastName]);

  const handleUserResponse = React.useCallback((data: IUserData, type: string): void => {
    const { error, user } = data.user;

    if (error) return showBannerMessage(error.message);
    if (!user) return;

    if (type === 'mutation') {
      return navigateTo('/admin/profile');
    }

    return setProfile(user);
  }, [navigateTo]);

  React.useEffect(() => {
    if (!profile) return;

    return setUserData(profile);
  }, [profile, setUserData]);

  React.useEffect(() => {
    if (userQueryData) return handleUserResponse(userQueryData, 'query');
  }, [userQueryData, handleUserResponse]);

  React.useEffect(() => {
    if (userMutationData) return handleUserResponse(userMutationData, 'mutation');
  }, [userMutationData, handleUserResponse]);

  React.useEffect(() => {
    if (userMutationError || userQueryError) return showBannerMessage(STRING_SERVER_ERROR);
  }, [userMutationError, userQueryError]);

  return (
    <EditContainer>
      <Header
        backButtonLink={'/admin/profile'}
        backButtonText={'Profile'}
        title={'Edit profile'} />

      <BodyContainer>
        <Row>
          <ImageColumn xl={4} position={'left'}>
            <Image
              onUpdateClick={(): void => setImageModalVisible(true)}
              shape={'circle'}
              height={'180px'}
              width={'180px'}
              src={image}
              updatable={!(userQueryLoading || userMutationLoading)} />
          </ImageColumn>

          <Column xl={4} position={'center'}>
            <FormField label={'First Name:'}>
              <Input
                disabled={userQueryLoading || userMutationLoading}
                icon={'person'}
                loading={userQueryLoading}
                placeholder={'John'}
                {...userFirstName} />
            </FormField>

            <FormField label={'Last Name:'}>
              <Input
                disabled={userQueryLoading || userMutationLoading}
                icon={'person'}
                loading={userQueryLoading}
                placeholder={'Doe'}
                {...userLastName} />
            </FormField>

            <FormField label={'Email:'}>
              <Input
                disabled={userQueryLoading || userMutationLoading}
                icon={'mail'}
                loading={userQueryLoading}
                placeholder={'john.doe@email.com'}
                {...userEmail} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField label={'About:'} height={'176px'}>
              <TextArea
                disabled={userQueryLoading || userMutationLoading}
                loading={userQueryLoading}
                placeholder={`I'm awesome!`}
                {...userAbout} />
            </FormField>
          </Column>
        </Row>

        <SocialContainer>
          <SubtitleText>Social networks</SubtitleText>
          <Row>
            <Column xl={4} position={'left'}>
              <FormField label={'Name:'}>
                <Input
                  disabled={userQueryLoading || userMutationLoading}
                  icon={'web'}
                  loading={userQueryLoading}
                  placeholder={'Facebook'}
                  {...socialName} />
              </FormField>
            </Column>

            <Column xl={4} position={'center'}>
              <FormField label={'Icon:'}>
                <Dropdown
                  disabled={userQueryLoading || userMutationLoading}
                  icon={'public'}
                  loading={userQueryLoading}
                  name={socialIcon?.value?.name || 'Select one'}
                  {...socialIcon} />
              </FormField>
            </Column>

            <Column xl={4} position={'right'}>
              <FormField label={'URL:'}>
                <Input
                  disabled={userQueryLoading || userMutationLoading}
                  icon={'link'}
                  loading={userQueryLoading}
                  placeholder={'facebook.com/john.doe'}
                  {...socialURL} />
              </FormField>
            </Column>
          </Row>

          <AddButtonContainer>
            <SimpleButton
              color={COLOR_PURPLE}
              disabled={userQueryLoading || userMutationLoading}
              onClick={addSocialNetwork}
              icon={'add'}
              width={'auto'}>Add social network</SimpleButton>
          </AddButtonContainer>
        </SocialContainer>

        <CurrentContainer>
          <SubtitleText>Current</SubtitleText>
          {
            socialNetworks.length > 0 ?
              <Row>
                {
                  socialNetworks.map((socialNetwork: ISocial, index: number) =>
                    <SocialCardContainer xl={4} position={getSocialColumnPosition(index)} key={`social-${socialNetwork.name}-${index}`}>
                      <IconCard
                        disabled={userQueryLoading || userMutationLoading}
                        icon={socialNetwork.icon}
                        onClick={(): void => removeSocialNetwork(index)}
                        text={socialNetwork.url}
                        title={socialNetwork.name} />
                    </SocialCardContainer>
                  )
                }
              </Row> :
              <EmptyListContainer>
                <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops! There are no categories.</ParagraphText>
              </EmptyListContainer>
          }
        </CurrentContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton
          disabled={userQueryLoading || userMutationLoading}
          icon={'clear'}
          onClick={(): void => navigateTo('/admin/profile')} />

        <SimpleButton
          disabled={userQueryLoading || userMutationLoading}
          color={COLOR_PURPLE}
          icon={userQueryLoading || userMutationLoading ? 'more_horiz' : 'done'}
          onClick={handleUserUpdate} />
      </Footer>

      <UpdateImage
        onClose={handleImageUpdateModalClose}
        visible={imageModalVisible}
        src={image} />

      <Banner
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </EditContainer>
  );
};

interface IEditProfilePage { }
