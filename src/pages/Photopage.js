import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Photopage = () => {
  return (
    <>
      <ListOfPhotoCards />
    </>
  )
}
