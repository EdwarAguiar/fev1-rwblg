import React from 'react'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Photopage = () => {
  return (
    <>
      <ListOfPhotoCategories />
      <ListOfPhotoCards />
    </>
  )
}
