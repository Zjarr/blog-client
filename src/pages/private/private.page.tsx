import JwtDecode from 'jwt-decode';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { UserContext } from '../../contexts';
import { IPayload } from '../../utils/interfaces';
import { jwt } from '../../utils/regexs';

import { LoadingContainer } from './private.style';

export const PrivatePage: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [cookies] = useCookies(['authorization']);

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
    const token = cookies.authorization;

    if (user || !jwt.test(token)) {
      return setCheckingContext(false);
    }

    return checkUserContext(token);
  }, [cookies, user, checkUserContext]);

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
