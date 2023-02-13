import React, { useContext } from 'react'
import { AppContext } from './../context/AppContex'
import { Helmet } from 'react-helmet'

const HomepageComponent = () => {
  const { isSP, setModule } = useContext(AppContext)
  setModule('home')
  console.log('IsSP Home', isSP)
  const SPL1 = 'Aqui va el Home'
  const ENL1 = 'Here English Content for Home'
  return (
    <div>
      <Helmet>
        <title> Home - Edwar Aguiar</title>
        <meta name='description' content='Seccion Blog - Pagina web de referencia y trayectoria de Edwar Aguiar' />
      </Helmet>
      {isSP ? <h2>{SPL1}</h2> : <h2>{ENL1}</h2>}
    </div>
  )
}
const Homepage = React.memo(HomepageComponent)
export default Homepage
