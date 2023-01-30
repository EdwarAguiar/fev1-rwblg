import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'

export const NotRegisteredUser = () => (
  <>
    <AppContext.Consumer>
      {
       ({ activateAuth }) => {
         return (
           <form onSubmit={activateAuth}>
             <button>Iniciar Session</button>
           </form>
         )
       }
    }
    </AppContext.Consumer>
  </>
)
