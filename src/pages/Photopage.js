import React, { useContext } from 'react'
import { AppContext } from '../context/AppContex'
import { Helmet } from 'react-helmet'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const PhotopageComponent = () => {
  return (
    <>
      <Helmet>
        <title> Fotos - Edwar Aguiar</title>
        <meta name='description' content='Galería de fotos - fotos de diferentes epocas y sitios en la trayectoria personal y profesional de Edwar Aguiar' />
      </Helmet>
      <ListOfPhotoCategories />
      <ListOfPhotoCards />
    </>
  )
}
const Photopage = React.memo(PhotopageComponent)
export default Photopage
