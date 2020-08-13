import JwtDecode from 'jwt-decode';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { UserContext } from '../../contexts';
import { IPayload } from '../../utils/interfaces';
import { jwt } from '../../utils/regexs';

export const PrivatePage: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [cookies] = useCookies(['authorization']);

  const [checkingContext, setCheckingContext] = React.useState<boolean>(true);
  const { user, updateUser } = React.useContext(UserContext);

  const checkUserContext = React.useCallback((token: string) => {
    const payload: IPayload = JwtDecode(token);

    if (!payload.user) {
      return setCheckingContext(false);
    }

    updateUser(payload.user);

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
      <p>Loading...</p>
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
