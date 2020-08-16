import React from 'react';
import Row from 'react-bootstrap/Row';

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
import { IImageResult, ISocial } from '../../../utils/interfaces';
import { COLOR_GRAY_MEDIUM, COLOR_PURPLE, VALUE_SOCIAL } from '../../../utils/values';

import { IUpdateUserMutationInput, useUpdateUserMutation } from './edit.graphql';
import {
  AddButtonContainer,
  BodyContainer,
  CurrentContainer,
  EditContainer,
  EmptyListContainer,
  ImageColumn,
  SocialNetworksContainer
} from './edit.style';

export const EditProfilePage: React.FC<IEditProfilePage> = () => {
  const { user } = React.useContext(UserContext);

  const [socialNetworks, setSocialNetworks] = React.useState<ISocial[]>([]);
  const [imageModalVisible, setImageModalVisible] = React.useState<boolean>(false);
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [image, setImage] = React.useState<string>('');

  const [updateUserMutation, {
    error,
    data,
    loading
  }] = useUpdateUserMutation();

  const navigateTo = useNavigateTo();

  const userFirstName = useInput('Pablo');
  const userLastName = useInput('Navarro');
  const userAbout = useTextArea('Lorem ipsum');
  const userEmail = useInput('a@a.com');

  const socialIcon = useDropdown(VALUE_SOCIAL);
  const socialName = useInput();
  const socialURL = useInput();

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
    if (!socialName.value) {
      socialName.setError('This field is required.');
    }

    if (!socialIcon?.value?.icon) {
      socialIcon.setError('This field is required.');
    }

    if (!socialURL.value) {
      socialURL.setError('This field is required.');
    }

    if (!socialName.value || !socialIcon?.value?.icon || !socialURL.value) {
      return;
    }

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
    if (!userFirstName.value) {
      userFirstName.setError('This field is required.');
    }

    if (!userLastName.value) {
      userLastName.setError('This field is required.');
    }

    if (!userAbout.value) {
      userAbout.setError('This field is required.');
    }

    if (!userEmail.value) {
      userEmail.setError('This field is required.');
    }

    if (
      !userAbout.value ||
      !userEmail.value ||
      !userFirstName.value ||
      !userLastName.value
    ) {
      return false;
    }

    return true;
  };

  const buildUserObject = (): void => {
    const social: ISocial[] = socialNetworks.map(
      ({ _id, ...rest }) => rest
    );

    const newUserData: IUpdateUserMutationInput = {
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
      newUserData.user.file = imageFile;
    } else {
      newUserData.user.image = image;
    }

    updateUserMutation({
      variables: {
        ...newUserData
      }
    });
  };

  const handleUserUpdate = (): void => {
    if (!isValidForm()) return;

    return buildUserObject();
  };

  React.useEffect(() => {
    // console.log('Error: ', error);
    // console.log('Data: ', data);
    // console.log('Loading: ', loading);
  }, [error, data, loading]);

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
              updatable />
          </ImageColumn>

          <Column xl={4} position={'center'}>
            <FormField label={'First Name:'}>
              <Input icon={'person'} placeholder={'John'} {...userFirstName} />
            </FormField>

            <FormField label={'Last Name:'}>
              <Input icon={'person'} placeholder={'Doe'} {...userLastName} />
            </FormField>

            <FormField label={'Email:'}>
              <Input icon={'mail'} placeholder={'john.doe@email.com'} {...userEmail} />
            </FormField>
          </Column>

          <Column xl={4} position={'right'}>
            <FormField label={'About:'} height={'176px'}>
              <TextArea placeholder={`I'm awesome!`} {...userAbout} />
            </FormField>
          </Column>
        </Row>

        <SocialNetworksContainer>
          <SubtitleText>Social networks</SubtitleText>
          <Row>
            <Column xl={4} position={'left'}>
              <FormField label={'Name:'}>
                <Input icon={'web'} placeholder={'Facebook'} {...socialName} />
              </FormField>
            </Column>

            <Column xl={4} position={'center'}>
              <FormField label={'Icon:'}>
                <Dropdown
                  name={socialIcon?.value?.name || 'Select one'}
                  icon={'public'}
                  {...socialIcon} />
              </FormField>
            </Column>

            <Column xl={4} position={'right'}>
              <FormField label={'URL:'}>
                <Input icon={'link'} placeholder={'facebook.com/john.doe'} {...socialURL} />
              </FormField>
            </Column>
          </Row>

          <AddButtonContainer>
            <SimpleButton icon={'add'} color={COLOR_PURPLE} width={'auto'} onClick={addSocialNetwork}>Add social network</SimpleButton>
          </AddButtonContainer>
        </SocialNetworksContainer>

        <CurrentContainer>
          <SubtitleText>Current</SubtitleText>
          {
            socialNetworks.length > 0 &&
            <Row>
              {
                socialNetworks.map((socialNetwork: ISocial, index: number) =>
                  <Column xl={4} position={getSocialColumnPosition(index)} key={`social-${socialNetwork.name}-${index}`}>
                    <IconCard
                      onClick={(): void => removeSocialNetwork(index)}
                      title={socialNetwork.name}
                      icon={socialNetwork.icon}
                      text={socialNetwork.url} />
                  </Column>
                )
              }
            </Row>
          }
          {
            socialNetworks.length === 0 &&
            <EmptyListContainer>
              <ParagraphText color={COLOR_GRAY_MEDIUM}>Oops! There are no categories.</ParagraphText>
            </EmptyListContainer>
          }
        </CurrentContainer>
      </BodyContainer>

      <Footer>
        <SimpleButton icon={'clear'} onClick={(): void => navigateTo('/admin/profile')} />
        <SimpleButton color={COLOR_PURPLE} icon={'done'} onClick={handleUserUpdate} />
      </Footer>

      <UpdateImage
        onClose={handleImageUpdateModalClose}
        visible={imageModalVisible}
        src={image} />
    </EditContainer>
  );
};

interface IEditProfilePage { }
