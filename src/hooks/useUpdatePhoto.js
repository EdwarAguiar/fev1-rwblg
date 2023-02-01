import { gql, useMutation } from '@apollo/client'

export const LIKE_PHOTO = gql`
mutation updatePhoto($id: ID!, $liked: Boolean!, $nlikes: Long!) {
  updatePhoto(id: $id data: {liked: $liked, nlikes: $nlikes}) {
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

export const useUpdatePhotoMutation = () => {
  const [updatePhotoMutation, { loading, error }] = useMutation(LIKE_PHOTO)
  return { updatePhotoMutation, loading, error }
}
