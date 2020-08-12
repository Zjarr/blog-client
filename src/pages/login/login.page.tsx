import React from 'react';
import { useCookies } from 'react-cookie';

import { SimpleButton } from '../../components/button';
import { FormField } from '../../components/form-field';
import { Input } from '../../components/input';
import { UserContext } from '../../contexts';
import { useInput, useNavigateTo } from '../../utils/hooks';
import { IUser } from '../../utils/interfaces';
import { COLOR_PURPLE } from '../../utils/values';

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

  const { updateUser } = React.useContext(UserContext);
  const [loginButtonName, setLoginButtonName] = React.useState<string>('Login');

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

    loginMutation({
      variables: {
        user: {
          password: password.value,
          email: email.value
        }
      }
    });
  };

  const setSession = React.useCallback((token: string, user: IUser): void => {
    const cookieOptions = {
      domain: REACT_APP_COOKIE_DOMAIN,
      maxAge: parseInt(REACT_APP_COOKIE_MAX_AGE || '0', 10),
      path: REACT_APP_COOKIE_PATH,
      sameSite: REACT_APP_COOKIE_SAME_SITE === 'true' ? true : false,
      secure: REACT_APP_COOKIE_SECURE === 'true' ? true : false,
    };

    setCookie('authorization', token, cookieOptions);
    updateUser(user);
  }, [setCookie, updateUser]);

  const handleLoginMutationResponse = React.useCallback((data: ILoginMutationData): void => {
    const { error, token, user } = data.login;

    setLoginButtonName('Login');

    if (error || !token || !user) return;

    setSession(token, user);

    return navigateTo('/admin/dashboard');
  }, [navigateTo, setSession]);

  React.useEffect(() => {
    if (loginMutationLoading) {
      return setLoginButtonName('Loading...');
    }

    if (loginMutationError) {
      return;
    }

    if (loginMutationData) {
      return handleLoginMutationResponse(loginMutationData);
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
