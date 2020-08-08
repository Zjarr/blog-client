import { useMutation } from '@apollo/client';
import React from 'react';
import { useCookies } from 'react-cookie';

import { SimpleButton } from '../../components/button';
import { FormField } from '../../components/form-field';
import { Input } from '../../components/input';
import { useInput, useNavigateTo } from '../../utils/hooks';
import { COLOR_PURPLE } from '../../utils/values';

import { ILoginInput, ILoginMutation, LOGIN_MUTATION } from './login.graphql';
import { ButtonsContainer, FormContainer, LoginContainer } from './login.style';

const {
  REACT_APP_COOKIE_DOMAIN,
  REACT_APP_COOKIE_MAX_AGE,
  REACT_APP_COOKIE_PATH,
  REACT_APP_COOKIE_SAME_SITE,
  REACT_APP_COOKIE_SECURE
} = process.env;

export const LoginPage: React.FC<ILoginPage> = () => {
  const [login, {
    error: loginMutationError,
    data: loginMutationData,
    loading: loginMutationLoading
  }] = useMutation<{ login: ILoginMutation, user: ILoginInput }>(LOGIN_MUTATION);

  const [loginButtonName, setLoginButtonName] = React.useState<string>('Login');

  const [, setCookie] = useCookies();
  const email = useInput();
  const password = useInput();
  const navigateTo = useNavigateTo();

  const isValidForm = (): boolean => {
    if (!email.value) {
      email.setError('This field is required.');
    }

    if (!password.value) {
      password.setError('This field is required.');
    }

    if (!email.value || !password.value) {
      return false;
    }

    return true;
  };

  const handleLoginClick = (): void => {
    if (!isValidForm()) return;

    login({
      variables: {
        user: {
          password: password.value,
          email: email.value
        }
      }
    });
  };

  const handleLoginMutationResponse = React.useCallback((data: ILoginMutation): void => {
    const { error, token } = data;

    setLoginButtonName('Login');

    if (error) return;

    setCookie('authorization', token, {
      domain: REACT_APP_COOKIE_DOMAIN,
      maxAge: parseInt(REACT_APP_COOKIE_MAX_AGE || '0', 10),
      path: REACT_APP_COOKIE_PATH,
      sameSite: REACT_APP_COOKIE_SAME_SITE === 'true' ? true : false,
      secure: REACT_APP_COOKIE_SECURE === 'true' ? true : false,
    });

    return navigateTo('/admin/dashboard');
  }, [navigateTo, setCookie]);

  React.useEffect(() => {
    if (loginMutationLoading) {
      return setLoginButtonName('Loading...');
    }

    if (loginMutationError) {
      return;
    }

    if (loginMutationData) {
      return handleLoginMutationResponse(loginMutationData.login);
    }
  }, [loginMutationData, loginMutationError, loginMutationLoading, handleLoginMutationResponse]);

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
            width={'auto'}>{loginButtonName}</SimpleButton>
        </ButtonsContainer>
      </FormContainer>
    </LoginContainer>
  );
};

interface ILoginPage { }
