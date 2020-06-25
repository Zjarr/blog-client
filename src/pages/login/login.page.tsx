import React from 'react';

import { SimpleButton } from '../../components/button';
import { FormField } from '../../components/form-field';
import { Input } from '../../components/input';

import { COLOR_PURPLE } from '../../utils/values';

import { ButtonsContainer, LoginContainer } from './login.style';

export const LoginPage: React.FC<{}> = () => {
  return (
    <LoginContainer>
      <FormField label={'Email'}>
        <Input icon={'email'} type={'email'} placeholder={'email@provider.com'} />
      </FormField>

      <FormField label={'Password'}>
        <Input type={'password'} icon={'lock'} placeholder={'Your password'} />
      </FormField>

      <ButtonsContainer>
        <SimpleButton width={'auto'}>Forgot password?</SimpleButton>
        <SimpleButton color={COLOR_PURPLE} width={'auto'}>Login</SimpleButton>
      </ButtonsContainer>
    </LoginContainer>
  );
};
