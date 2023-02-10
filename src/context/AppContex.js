import React, { createContext, useState } from 'react'
// import { useApolloClient } from '@apollo/client'
const AppContext = createContext(null)

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const [isSP, setIsSP] = useState(true)

  const activateSP = () => setIsSP(true)
  const activateEN = () => setIsSP(false)

  // const client = useApolloClient()
  const activateAuth = () => setIsAuth(true)
  const removeAuth = () => setIsAuth(false)

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      //console.log('Cerrando Session')
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    },
    isSP,
    activateSP,
    activateEN
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
