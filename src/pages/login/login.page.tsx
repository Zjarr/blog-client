import Cookies from 'js-cookie';
import React from 'react';

import { SimpleButton } from '../../components/button';
import { Empty } from '../../components/empty';
import { FormField } from '../../components/form-field';
import { Input } from '../../components/input';
import { useInput, useNavigateTo } from '../../utils/hooks';
import { COLOR_PURPLE, STRING_AUTHORIZATION_COOKIE, STRING_FIELD_REQUIRED, STRING_SERVER_ERROR } from '../../utils/values';

import { ILoginMutationData, useLoginMutation } from './login.graphql';
import { ButtonsContainer, FormContainer, LoginContainer } from './login.style';

const {
  REACT_APP_COOKIE_DOMAIN,
  REACT_APP_COOKIE_EXPIRES,
  REACT_APP_COOKIE_PATH,
  REACT_APP_COOKIE_SAME_SITE,
  REACT_APP_COOKIE_SECURE
} = process.env;

export const LoginPage: React.FC<ILoginPage> = () => {
  const [error, setError] = React.useState<string>('');

  const navigateTo = useNavigateTo();

  const password = useInput();
  const email = useInput();

  const [loginMutation, {
    error: loginMutationError,
    data: loginMutationData,
    loading: loginMutationLoading
  }] = useLoginMutation();

  const isValidForm = (): boolean => {
    if (!email.value) email.setError(STRING_FIELD_REQUIRED);
    if (!password.value) password.setError(STRING_FIELD_REQUIRED);

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
    const cookieOptions: Cookies.CookieAttributes = {
      domain: REACT_APP_COOKIE_DOMAIN,
      expires: parseInt(REACT_APP_COOKIE_EXPIRES || '0', 10),
      path: REACT_APP_COOKIE_PATH,
      sameSite: REACT_APP_COOKIE_SAME_SITE as 'strict' || 'lax',
      secure: REACT_APP_COOKIE_SECURE === 'true' ? true : false,
    };

    Cookies.set(STRING_AUTHORIZATION_COOKIE, token, cookieOptions);
  }, []);

  const handleLoginMutationResponse = React.useCallback((data: ILoginMutationData): void => {
    const { error, token } = data.login;

    if (error) return password.setError(error.message);
    if (!token) return;

    setSession(token);

    return navigateTo('/admin/dashboard');
  }, [password, navigateTo, setSession]);

  React.useEffect(() => {
    if (loginMutationData) return handleLoginMutationResponse(loginMutationData);
  }, [loginMutationData, handleLoginMutationResponse]);

  React.useEffect(() => {
    if (loginMutationError) return setError(STRING_SERVER_ERROR);
  }, [loginMutationError]);

  if (!!error) {
    return (
      <LoginContainer>

        <Empty
          error={!!error}
          message={error ? error : undefined} />
      </LoginContainer>
    );
  }

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
    </LoginContainer>
  );
};

interface ILoginPage { }
