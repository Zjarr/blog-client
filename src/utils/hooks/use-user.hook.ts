import React from 'react';

import { IUserContext } from '../../contexts';

import { IUser } from '../interfaces';

export const useUser = (): IUserContext => {
  const [user, setUser] = React.useState<IUser | null>(null);

  const updateUser = React.useCallback((user: IUser | null): void => {
    return setUser(user);
  }, []);

  return {
    updateUser,
    user
  };
};
