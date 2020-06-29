import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { DashboardPage } from './dashboard';
import { LoginPage } from './login';
import { NotFoundPage } from './not-found';
import { PlaygroundPage } from './playground';
import { PrivatePage } from './private';

export const Pages: React.FC<{}> = () => {
  return (
    <Switch>
      {/* ADMIN ROUTES */}
      <Route exact path="/admin" component={LoginPage}></Route>

      <PrivatePage exact path="/admin/:section/:action/:param">
        <DashboardPage />
      </PrivatePage>

      <PrivatePage exact path="/admin/:section/:action">
        <DashboardPage />
      </PrivatePage>

      <PrivatePage exact path="/admin/:section">
        <DashboardPage />
      </PrivatePage>

      <PrivatePage exact path="/admin/dashboard">
        <DashboardPage />
      </PrivatePage>

      {/* BLOG ROUTES */}
      <Route path="/playground" component={PlaygroundPage}></Route>
      <Route path="*" component={NotFoundPage}></Route>
    </Switch>
  );
};
