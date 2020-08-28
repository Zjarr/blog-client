import React from 'react';

import { useInput } from '../../utils/hooks';
import { COLOR_PURPLE, STRING_FIELD_REQUIRED } from '../../utils/values';

import { SimpleButton } from '../button';
import { FormField } from '../form-field';
import { Input } from '../input';
import { Modal } from '../modal';
import { TitleText } from '../text';

import {
  ButtonContainer,
  ChangePasswordContainer,
  PasswordContainer,
  TitleContainer
} from './change-password.style';

export const ChangePassword: React.FC<IChangePassword> = ({ onClose, visible }) => {
  const currentPassword = useInput('');
  const repeatPassword = useInput('');
  const updatedPassword = useInput('');

  const clearInputs = (): void => {
    currentPassword.setValue('');
    repeatPassword.setValue('');
    updatedPassword.setValue('');

    currentPassword.setError('');
    repeatPassword.setError('');
    updatedPassword.setError('');
  };

  const isValidForm = (): boolean => {
    if (!currentPassword.value) currentPassword.setError(STRING_FIELD_REQUIRED);
    if (!repeatPassword.value) repeatPassword.setError(STRING_FIELD_REQUIRED);
    if (!updatedPassword.value) updatedPassword.setError(STRING_FIELD_REQUIRED);

    if (!currentPassword.value || !repeatPassword.value || !updatedPassword.value) return false;

    if (updatedPassword.value !== repeatPassword.value) {
      repeatPassword.setError('Password does not match');

      return false;
    }

    return true;
  };

  const handleCloseRequest = (): void => {
    if (onClose) onClose(null);

    return clearInputs();
  };

  const handlePasswordUpdateClick = (): void => {
    if (!isValidForm()) return;

    if (onClose) onClose({ current: currentPassword.value, updated: updatedPassword.value });

    return clearInputs();
  };

  return (
    <Modal visible={visible} closeButton onClose={handleCloseRequest}>
      <ChangePasswordContainer>
        <TitleContainer>
          <TitleText>Change Password</TitleText>
        </TitleContainer>

        <PasswordContainer>
          <FormField label={'Current password:'}>
            <Input
              icon={'vpn_key'}
              placeholder={'Your current password'}
              type={'password'}
              {...currentPassword} />
          </FormField>

          <FormField label={'New password:'}>
            <Input
              icon={'vpn_key'}
              placeholder={'Your new password'}
              type={'password'}
              {...updatedPassword} />
          </FormField>

          <FormField label={'Repeat new password:'}>
            <Input
              icon={'vpn_key'}
              placeholder={'Repeat your new password'}
              type={'password'}
              {...repeatPassword} />
          </FormField>
        </PasswordContainer>

        <ButtonContainer>
          <SimpleButton
            color={COLOR_PURPLE}
            icon={'done'}
            onClick={handlePasswordUpdateClick} />
        </ButtonContainer>
      </ChangePasswordContainer>
    </Modal>
  );
};

interface IChangePassword {
  visible: boolean;
  onClose: (password: { current: string; updated: string } | null) => void;
}
