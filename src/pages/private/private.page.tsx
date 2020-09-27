import Cookies from 'js-cookie';
import JwtDecode from 'jwt-decode';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { UserContext } from '../../contexts';
import { IPayload } from '../../utils/interfaces';
import { jwt } from '../../utils/regexs';
import { STRING_AUTHORIZATION_COOKIE } from '../../utils/values';

import { LoadingContainer } from './private.style';

export const PrivatePage: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [checkingContext, setCheckingContext] = React.useState<boolean>(true);
  const { user, updateUser } = React.useContext(UserContext);

  const checkUserContext = React.useCallback((token: string) => {
    const payload: IPayload = JwtDecode(token);

    if (!payload._id) {
      return setCheckingContext(false);
    }

    updateUser(payload._id);

    return setCheckingContext(false);
  }, [updateUser]);

  React.useEffect(() => {
    const token = Cookies.get(STRING_AUTHORIZATION_COOKIE);

    if (!token || user || !jwt.test(token)) return setCheckingContext(false);

    return checkUserContext(token);
  }, [user, checkUserContext]);

  if (checkingContext) {
    return (
      <LoadingContainer />
    );
  }

  return (
    <Route
      render={(): React.ReactNode =>
        user ? children : <Redirect to={'/admin'} />
      }
      {...rest}
    />
  );
};
