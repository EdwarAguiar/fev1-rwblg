import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { AppContext } from '../context/AppContex'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { Frame } from '../styles/styles_nruser'


// export const NotRegisteredUser = () => {
const NotRegisteredUserComponent = () => {
  const { registerMutation, data: dataReg, loading: loadingReg, error: errorReg } = useRegisterMutation()
  const { loginMutation, data: dataLog, loading: loadingLog, error: errorLog } = useLoginMutation()

  return (
    <>
      <Helmet>
        <title> Registrarse/Iniciar sesión - Edwar Aguiar</title>
        <meta name='description' content='Registrarse/Iniciar Sesión - Formulario para Iniciar Sesión o Registrarse para proveer retroalimentación a Edwar Aguiar' />
      </Helmet>
      <AppContext.Consumer>
        {
         ({ activateAuth }) => {
           const onSubmitReg = ({ email, password }) => {
             // console.log('Registrarse')
             const username = email.substring(0, email.indexOf('@'))
             const variables = ({ username, email, password })
             registerMutation({ variables }).then(({ data }) => {
               console.log(data.register.jwt)
               const { register: { jwt } } = data
               activateAuth(jwt)
             })
           }

           const onSubmitLog = ({ email, password }) => {
             // console.log('Iniciar session')
             const variables = ({ email, password })
             loginMutation({ variables }).then(({ data }) => {
               // console.log(data.login.jwt)
               const { login: { jwt } } = data
               activateAuth(jwt)
             })
           }

           const errorMsgReg = errorReg && 'El usuario ya existe o hay algun problema'
           const errorMsgLog = errorLog && 'La contraseña no es correcta o el Usuario no existe'

           return (
             <>
               <Frame>
                 <UserForm title='Registrarse' onSubmit={onSubmitReg} disabled={loadingReg} error={errorMsgReg} />
                 <UserForm title='Iniciar Sesion' onSubmit={onSubmitLog} disabled={loadingLog} error={errorMsgLog} />
               </Frame>
             </>
           )
         }
       }
      </AppContext.Consumer>
    </>
  )
}

const NotRegisteredUser = React.memo(NotRegisteredUserComponent)
export default NotRegisteredUser
