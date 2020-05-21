import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ComponentsAdminPage,
  DashboardAdminPage,
  LoginAdminPage
} from '../pages/admin';

import {
  AboutBlogPage,
  AuthorBlogPage,
  BlogBlogPage,
  BlogsBlogPage,
  LandingBlogPage
} from '../pages/blog';

import {
  NotFoundCommonPage
} from '../pages/common';

import {
  PrivateRoute
} from './private.route';

export const Routes: React.FC<{}> = () => {
  return (
    <Switch>
      {/* ADMIN ROUTES */}
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

      <PrivateRoute exact path="/admin/components">
        <ComponentsAdminPage />
      </PrivateRoute>

      {/* BLOG ROUTES */}
      <Route exact path="/" component={LandingBlogPage}></Route>
      <Route exact path="/about" component={AboutBlogPage}></Route>
      <Route exact path="/author/:user" component={AuthorBlogPage}></Route>
      <Route exact path="/blog/:blog" component={BlogBlogPage}></Route>
      <Route exact path="/blogs" component={BlogsBlogPage}></Route>

      <Route path="*" component={NotFoundCommonPage}></Route>
    </Switch>
  );
};
