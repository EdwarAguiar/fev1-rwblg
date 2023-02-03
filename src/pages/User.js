import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import { SubmitButton } from '../components/SubmitButton'
import { Frame } from '../styles/styles_user'

export const User = () => {
  const { removeAuth } = useContext(AppContext)

  return (
    <>
      <h1>User Profile</h1>
      <Frame>
        <p>Brilla, brilla intensamente </p>
        <p>Hasta que el Mundo, </p>
        <p>se maraville con lo que ve </p>
      </Frame>
      <div>
        <SubmitButton onClick={removeAuth}> Cerrar Sesion</SubmitButton>
      </div>
    </>
  )
}
