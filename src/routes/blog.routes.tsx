import React from 'react';
import { Route } from 'react-router-dom';

import {
  AboutBlogPage,
  ContactBlogPage,
  EntryBlogPage,
  LandingBlogPage
} from '../pages/blog';

export const BlogRoutes: React.FC<{}> = () => {
  return (
    <>
      <Route exact path="/about" component={AboutBlogPage}></Route>
      <Route exact path="/contact" component={ContactBlogPage}></Route>
      <Route exact path="/entry/:entry" component={EntryBlogPage}></Route>
      <Route exact path="/" component={LandingBlogPage}></Route>
    </>
  );
};
