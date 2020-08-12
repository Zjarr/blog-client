import React from 'react';

import { IUser } from '../utils/interfaces';

const user: IUserContext = {
  user: null,
  updateUser: () => { }
};

export interface IUserContext {
  user: IUser | null;
  updateUser: (user: IUser) => void;
}

export const UserContext = React.createContext<IUserContext>(user);
