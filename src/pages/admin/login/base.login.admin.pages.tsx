import React from 'react';

import { Button } from '../../../components/button';
import { FormField } from '../../../components/form-field';
import { Input } from '../../../components/input';

import { COLOR_PURPLE } from '../../../lib/values';

import { ButtonsContainer, LoginContainer } from './style.login.admin.pages';

export const LoginAdminPage: React.FC<{}> = () => {
  return (
    <LoginContainer>
      <FormField label={'Email'}>
        <Input icon={'email'} type={'email'} placeholder={'email@provider.com'} />
      </FormField>

      <FormField label={'Password'}>
        <Input type={'password'} icon={'lock'} placeholder={'Your password'} />
      </FormField>

      <ButtonsContainer>
        <Button type={'color'} width={'auto'}>Forgot password?</Button>
        <Button type={'color'} color={COLOR_PURPLE} width={'auto'}>Login</Button>
      </ButtonsContainer>
    </LoginContainer>
  );
};
