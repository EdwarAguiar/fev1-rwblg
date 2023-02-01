import React from 'react'
// import { gql, useMutation } from '@apollo/client'

import { Mutation } from '@apollo/client/react/components'
import { gql } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation updatePhoto(
  $id: ID!
  $liked: Boolean!,
  $nlikes: Long!,
) {
  updatePhoto(id: $id data: {liked: $liked, nlikes: $nlikes }) {
    data {
      id
      attributes {
        liked,
        nlikes
      }
    }
  }
}
`
export const ToggleLikeMutation = ({ children }) => {
  return (
    <>
      <Mutation mutation={LIKE_PHOTO}>
        {children}
      </Mutation>
    </>
  )
}
