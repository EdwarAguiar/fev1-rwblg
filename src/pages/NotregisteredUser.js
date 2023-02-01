import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, loading, error } = useRegisterMutation()
  return (
    <>
      <AppContext.Consumer>
        {
         ({ activateAuth }) => {
           const onSubmit = ({ email, password }) => {
             const username = email.substring(0, email.indexOf('@'))
             // console.log(`username: ${username} email:${email} - Pwd:${password}`)
             const variables = ({ username, email, password })
             registerMutation({ variables }).then(activateAuth)
           }

           const errorMsg = error && 'El usuario ya existe.'

           return (
             <>
               <UserForm
                 title='Registrarse'
                 onSubmit={onSubmit}
                 disabled={loading}
                 error={errorMsg}
               />
               <UserForm
                 title='Iniciar Sesion'
                 onSubmit={activateAuth}
               />
             </>
           )
         }
       }
      </AppContext.Consumer>
    </>
  )
}
