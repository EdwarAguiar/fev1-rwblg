import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import { SubmitButton } from '../components/SubmitButton'
import { Frame, Msg } from '../styles/styles_user'

const User = () => {
  const { removeAuth, isSP, setModule, loggedUser } = useContext(AppContext)
  setModule('user')
  const L1 = isSP ? 'Perfil del Usuario' : 'User Profile'
  const L2 = isSP ? 'Brilla, brilla intensamente' : 'Shine, shine bright'
  const L3 = isSP ? 'hasta que el Mundo,' : 'until the world'
  const L4 = isSP ? 'se maraville con lo que ve...' : 'is marveled by what it sees...'
  const L5 = isSP ? 'Cerrar Sesión' : 'Log Out'

  return (
    <Frame>
      <h1>{L1}</h1>
      <h3>[ {loggedUser} ]</h3>
      <Msg>
        <p>{L2} </p>
        <p>{L3} </p>
        <p>{L4}</p>
      </Msg>
      <SubmitButton onClick={removeAuth}> {L5} </SubmitButton>
    </Frame>
  )
}

export default User
