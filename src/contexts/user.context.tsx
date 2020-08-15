import React from 'react';

const user: IUserContext = {
  updateUser: () => { },
  user: null
};

export interface IUserContext {
  updateUser: (user: string | null) => void;
  user: string | null;
}

export const UserContext = React.createContext<IUserContext>(user);
