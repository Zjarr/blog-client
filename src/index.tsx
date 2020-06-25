import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Pages } from './pages';
import { unregister } from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/fonts/material-icons/index.css';
import './assets/fonts/proxima-nova/index.css';
import './styles/body.style.css';
import './styles/bootstrap.style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();
