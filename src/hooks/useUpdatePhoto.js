import { gql, useMutation } from '@apollo/client'

export const LIKE_PHOTO = gql`
mutation updatePhoto($id: ID!, $liked: Boolean!, $nlikes: Int!, $usrliked: [ID!]) {
  updatePhoto(id: $id data: {liked: $liked, nlikes: $nlikes, usrliked: $usrliked}) {
    data {
      id
      attributes {
        liked,
        nlikes,
        usrliked {
          data {
            id,
            attributes {
              username
            }
          }
        }
      }
    }
  }
}
`

export const useUpdatePhotoMutation = () => {
  const [updatePhotoMutation, { loading, error }] = useMutation(LIKE_PHOTO)
  return { updatePhotoMutation, loading, error }
}
