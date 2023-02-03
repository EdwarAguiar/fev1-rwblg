import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const { removeAuth } = useContext(AppContext)

  return (
    <>
      <h1>User Profile</h1>
      <SubmitButton onClick={removeAuth}> Cerrar Sesion</SubmitButton>
    </>
  )
}
