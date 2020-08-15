import React from 'react';

import { IUserContext } from '../../contexts';

export const useUser = (): IUserContext => {
  const [user, setUser] = React.useState<string | null>(null);

  const updateUser = React.useCallback((user: string | null): void => {
    return setUser(user);
  }, []);

  return {
    updateUser,
    user
  };
};
