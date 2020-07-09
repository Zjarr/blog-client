import React from 'react';

import { COLOR_PURPLE } from '../../utils/values';

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
  const handleCloseRequest = (): void => {
    return onClose && onClose();
  };

  return (
    <Modal visible={visible} closeButton onClose={handleCloseRequest}>
      <ChangePasswordContainer>
        <TitleContainer>
          <TitleText>Change Password</TitleText>
        </TitleContainer>

        <PasswordContainer>
          <FormField label={'Current password:'}>
            <Input icon={'vpn_key'} placeholder={'Your current password'} />
          </FormField>

          <FormField label={'New password:'}>
            <Input icon={'vpn_key'} placeholder={'Your new password'} />
          </FormField>

          <FormField label={'Repeat new password:'}>
            <Input icon={'vpn_key'} placeholder={'Repeat your new password'} />
          </FormField>
        </PasswordContainer>

        <ButtonContainer>
          <SimpleButton icon={'clear'} onClick={handleCloseRequest} />
          <SimpleButton icon={'done'} color={COLOR_PURPLE} />
        </ButtonContainer>
      </ChangePasswordContainer>
    </Modal>
  );
};

interface IChangePassword {
  visible: boolean;
  onClose: () => void;
}
