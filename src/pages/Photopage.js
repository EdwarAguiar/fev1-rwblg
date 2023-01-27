import React from 'react'
import { useQuery, gql } from '@apollo/client'
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
