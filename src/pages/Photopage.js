import React from 'react'
import { Helmet } from 'react-helmet'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

// export const Photopage = () => {
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

export const Photopage = React.memo(PhotopageComponent)
