import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloClient } from 'apollo-client'
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo-hooks'

const client = new ApolloClient({
  cache: new InMemoryCache({
    cacheRedirects: {
      Query: {
        entry: (_, args, { getCacheKey }) => getCacheKey({__typename: 'Entry', id: args.id})
      },
    },
  }),
  link: createHttpLink({uri: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'http://localhost:8080/food-time'})
})

const read = (key) => JSON.parse(window.localStorage.getItem(key))
const write = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <App storage={{read, write}}/>
    </ApolloProvider>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
