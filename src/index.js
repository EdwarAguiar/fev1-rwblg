import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppProvider } from './context/AppContex'
import { App } from './components/App'

// Apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:1337/graphql'
  })
})

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <ApolloProvider client={client}>
    <AppProvider>
      <App />
    </AppProvider>
  </ApolloProvider>
)
