import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { GraphqlClient } from './graphql';
import { Pages } from './pages';
import { unregister } from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/fonts/material-icons/index.css';
import './assets/fonts/proxima-nova/index.css';
import './assets/fonts/social-icons/index.css';
import './styles/body.style.css';
import './styles/bootstrap.style.css';
import './styles/input.style.css';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <GraphqlClient>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </GraphqlClient>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
