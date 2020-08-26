import React from 'react';
import { useCookies } from 'react-cookie';

import { Banner } from '../../components/banner';
import { SimpleButton } from '../../components/button';
import { FormField } from '../../components/form-field';
import { Input } from '../../components/input';
import { useInput, useNavigateTo } from '../../utils/hooks';
import { COLOR_PURPLE, COLOR_RED, STRING_SERVER_ERROR } from '../../utils/values';

import { ILoginMutationData, useLoginMutation } from './login.graphql';
import { ButtonsContainer, FormContainer, LoginContainer } from './login.style';

const {
  REACT_APP_COOKIE_DOMAIN,
  REACT_APP_COOKIE_MAX_AGE,
  REACT_APP_COOKIE_PATH,
  REACT_APP_COOKIE_SAME_SITE,
  REACT_APP_COOKIE_SECURE
} = process.env;

export const LoginPage: React.FC<ILoginPage> = () => {
  const [, setCookie] = useCookies();
  const navigateTo = useNavigateTo();
  const password = useInput();
  const email = useInput();

  const [loginMutation, {
    error: loginMutationError,
    data: loginMutationData,
    loading: loginMutationLoading
  }] = useLoginMutation();

  const [bannerVisible, setBannerVisible] = React.useState<boolean>(false);
  const [bannerMessage, setBannerMessage] = React.useState<string>('');

  const handleBannerMessageHide = (): void => {
    return setBannerVisible(false);
  };

  const showBannerMessageShow = (message: string): void => {
    setBannerMessage(message);

    return setBannerVisible(true);
  };

  const isValidForm = (): boolean => {
    if (!email.value) email.setError('This field is required.');
    if (!password.value) password.setError('This field is required.');

    if (!email.value || !password.value) return false;

    return true;
  };

  const handleLoginClick = (): void => {
    if (!isValidForm()) return;

    loginMutation({
      variables: {
        user: {
          password: password.value,
          email: email.value
        }
      }
    });
  };

  const setSession = React.useCallback((token: string): void => {
    const cookieOptions = {
      domain: REACT_APP_COOKIE_DOMAIN,
      maxAge: parseInt(REACT_APP_COOKIE_MAX_AGE || '0', 10),
      path: REACT_APP_COOKIE_PATH,
      sameSite: REACT_APP_COOKIE_SAME_SITE === 'true' ? true : false,
      secure: REACT_APP_COOKIE_SECURE === 'true' ? true : false,
    };

    setCookie('authorization', token, cookieOptions);
  }, [setCookie]);

  const handleLoginMutationResponse = React.useCallback((data: ILoginMutationData): void => {
    const { error, token } = data.login;

    if (error) return showBannerMessageShow(error.message);
    if (!token) return;

    setSession(token);

    return navigateTo('/admin/dashboard');
  }, [navigateTo, setSession]);

  React.useEffect(() => {
    if (loginMutationData) return handleLoginMutationResponse(loginMutationData);
  }, [loginMutationData, handleLoginMutationResponse]);

  React.useEffect(() => {
    if (loginMutationError) return showBannerMessageShow(STRING_SERVER_ERROR);
  }, [loginMutationError]);

  return (
    <LoginContainer>
      <FormContainer>
        <FormField label={'Email'}>
          <Input
            icon={'email'}
            placeholder={'email@provider.com'}
            type={'email'}
            {...email} />
        </FormField>

        <FormField label={'Password'}>
          <Input
            icon={'lock'}
            placeholder={'Your password'}
            type={'password'}
            {...password} />
        </FormField>

        <ButtonsContainer>
          <SimpleButton
            color={COLOR_PURPLE}
            disabled={loginMutationLoading}
            onClick={handleLoginClick}
            width={'auto'}>{loginMutationLoading ? 'Loading...' : 'Login'}</SimpleButton>
        </ButtonsContainer>
      </FormContainer>

      <Banner
        center
        color={COLOR_RED}
        icon={'clear'}
        onHide={handleBannerMessageHide}
        text={bannerMessage}
        visible={bannerVisible} />
    </LoginContainer>
  );
};

interface ILoginPage { }
