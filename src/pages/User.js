import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import { SubmitButton } from '../components/SubmitButton'
import { Frame, Msg } from '../styles/styles_user'

// export const User = () => {
const User = () => {
  const { removeAuth } = useContext(AppContext)

  return (
    <Frame>
      <h1>Perfil del Usuario</h1>
      <Msg>
        <p>Brilla, brilla intensamente </p>
        <p>hasta que el Mundo, </p>
        <p>se maraville con lo que ve...</p>
      </Msg>
      <SubmitButton onClick={removeAuth}> Cerrar Sesion</SubmitButton>
    </Frame>
  )
}

export default User
