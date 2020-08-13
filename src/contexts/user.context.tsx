import React from 'react';

import { IUser } from '../utils/interfaces';

const user: IUserContext = {
  updateUser: () => { },
  user: null
};

export interface IUserContext {
  updateUser: (user: IUser) => void;
  user: IUser | null;
}

export const UserContext = React.createContext<IUserContext>(user);
