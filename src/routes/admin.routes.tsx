import React from 'react';
import { Route } from 'react-router-dom';

import { DashboardAdminPage, LoginAdminPage } from '../pages/admin';
import { PrivateRoute } from './private.route';

export const AdminRoutes: React.FC<{}> = () => {
  return (
    <>
      <Route exact path="/admin" component={LoginAdminPage}></Route>

      <PrivateRoute exact path="/admin/dashboard/:section/:action/:param">
        <DashboardAdminPage />
      </PrivateRoute>

      <PrivateRoute exact path="/admin/dashboard/:section/:action">
        <DashboardAdminPage />
      </PrivateRoute>

      <PrivateRoute exact path="/admin/dashboard/:section">
        <DashboardAdminPage />
      </PrivateRoute>

      <PrivateRoute exact path="/admin/dashboard">
        <DashboardAdminPage />
      </PrivateRoute>
    </>
  );
};
