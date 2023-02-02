import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, data: dataReg, loading: loadingReg, error: errorReg } = useRegisterMutation()
  const { loginMutation, data: dataLog, loading: loadingLog, error: errorLog } = useLoginMutation()

  return (
    <>
      <AppContext.Consumer>
        {
         ({ activateAuth }) => {
           const onSubmitReg = ({ email, password }) => {
             // console.log('Registrarse')
             const username = email.substring(0, email.indexOf('@'))
             // console.log(`username: ${username} email:${email} - Pwd:${password}`)
             const variables = ({ username, email, password })
             registerMutation({ variables }).then(activateAuth)
           }

           const onSubmitLog = ({ email, password }) => {
             // console.log('Iniciar session')
             const variables = ({ email, password })
             loginMutation({ variables }).then(activateAuth)
           }

           const errorMsgReg = errorReg && 'El usuario ya existe o hay algun problema'
           const errorMsgLog = errorLog && 'La contraseña no es correcta o el Usuario no existe'

           return (
             <>
               <UserForm title='Registrarse' onSubmit={onSubmitReg} disabled={loadingReg} error={errorMsgReg} />
               <UserForm title='Iniciar Sesion' onSubmit={onSubmitLog} disabled={loadingLog} error={errorMsgLog} />
             </>
           )
         }
       }
      </AppContext.Consumer>
    </>
  )
}
