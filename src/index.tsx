import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './index.scss';
import App from './App';
import { store } from "redux/store";
import reportWebVitals from './reportWebVitals';
import { getGithubAccessToken } from 'services';
import { storeSessionData, getSessionData } from 'utils/storage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
    let accessToken = getSessionData('gh_accessToken');
    if (!accessToken) {
        // Fetch github access token from local server if it's fetched yet
        getGithubAccessToken().then((token) => {
            accessToken = token;
            storeSessionData('gh_accessToken', token);
        }).catch((e) => {
            console.error(e)
        })
    }
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : "",
        }
    }
});


const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <Provider store={store}>
              <App />
          </Provider>
      </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
