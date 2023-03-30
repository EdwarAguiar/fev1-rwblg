import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client'
import { AppProvider } from './context/AppContex'
import { App } from './components/App'

// Apollo client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    // uri: 'http://localhost:1337/graphql',
    uri: 'https://bev4-strapi.onrender.com/graphql',
    request: operation => {
      const token = window.sessionStorage.getItem('token')
      const authorization = token ? `Bearer ${token}` : ''
      operation.setContext({
        headers: {
          authorization
        }
      })
    },
    onError: error => {
      const { networkError } = error
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    }
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
