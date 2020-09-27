import { ApolloProvider } from '@apollo/client/react/context/ApolloProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { UserContext } from './contexts';
import { client } from './graphql';
import { Pages } from './pages';
import { unregister } from './serviceWorker';
import { useUser } from './utils/hooks';

import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/fonts/material-icons/index.css';
import './assets/fonts/proxima-nova/index.css';
import './assets/fonts/social-icons/index.css';
import './styles/body.style.css';
import './styles/bootstrap.style.css';
import './styles/input.style.css';

const App: React.FC<IApp> = () => {
  const user = useUser();

  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </UserContext.Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

interface IApp { }
