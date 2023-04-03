import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { AppContext } from '../context/AppContex'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'
import { Frame } from '../styles/styles_nruser'
import { InfinitySpin } from  'react-loader-spinner'


const NotRegisteredUserComponent = () => {
  const { isSP } = useContext(AppContext)
  const { registerMutation, data: dataReg, loading: loadingReg, error: errorReg } = useRegisterMutation()
  const { loginMutation, data: dataLog, loading: loadingLog, error: errorLog } = useLoginMutation()

  const L1errorReg = isSP ? 'El usuario ya existe o hay algun problema' : 'The user already exists or there is a problem'
  const L2errorLog = isSP ? 'La contraseña no es correcta o el Usuario no existe' : 'The password is not correct or the User does not exist'
  const L3Registrarse = isSP ? 'Registrarse' : 'Sign Up'
  const L4IniciarSesion = isSP ? 'Iniciar Sesión' : 'Log In'

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
             const username = email.substring(0, email.indexOf('@'))
             const variables = ({ username, email, password })
             registerMutation({ variables }).then(({ data }) => {
               console.log(data.register.jwt)
               const { register: { jwt } } = data
               activateAuth(jwt)
             })
           }

           const onSubmitLog = ({ email, password }) => {
             const variables = ({ email, password })
             loginMutation({ variables }).then(({ data }) => {
               const { login: { jwt } } = data
               activateAuth(jwt)
             })
           }

           const errorMsgReg = errorReg && { L1errorReg }
           const errorMsgLog = errorLog && { L2errorLog }

           return (
             <>
               <Frame>
                 <UserForm title={L3Registrarse} onSubmit={onSubmitReg} disabled={loadingReg} error={errorMsgReg} />
                 <UserForm title={L4IniciarSesion} onSubmit={onSubmitLog} disabled={loadingLog} error={errorMsgLog} />
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
