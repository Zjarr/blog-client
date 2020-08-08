import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { jwt } from '../../utils/regexs';

export const PrivatePage: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [cookies] = useCookies(['authorization']);

  return (
    <Route
      render={(): React.ReactNode =>
        jwt.test(cookies.authorization) ? children : <Redirect to={'/admin'} />
      }
      {...rest}
    />
  );
};
