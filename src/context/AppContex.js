import React, { createContext, useState } from 'react'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })
  const [loggedUser, setLoggedUser] = useState(() => {
    return window.sessionStorage.getItem('username')
  })
  const [loggedUserID, setLoggedUserID] = useState(() => {
    return window.sessionStorage.getItem('userID')
  })


  const [isSP, setIsSP] = useState(true)
  const [module, setModule] = useState('home') 

  const activateSP = () => setIsSP(true)
  const activateEN = () => setIsSP(false)

  const activateAuth = () => setIsAuth(true)
  const removeAuth = () => setIsAuth(false)

  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
      window.sessionStorage.removeItem('username')
      window.sessionStorage.removeItem('userID')
    },
    registerLgUser: (username) => {
      window.sessionStorage.setItem('username', username)
      setLoggedUser(username)

    },
    registerLgUserID: (ID) => {
      window.sessionStorage.setItem('userID', ID)
      setLoggedUserID(ID)
    },
    isSP,
    activateSP,
    activateEN,
    module,
    setModule,
    loggedUser,
    loggedUserID
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
