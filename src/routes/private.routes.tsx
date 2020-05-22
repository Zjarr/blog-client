import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  return (
    <Route
      render={(): React.ReactNode =>
        false ? children : <Redirect to={'/admin'}/>
      }
      {...rest}
    />
  );
};
