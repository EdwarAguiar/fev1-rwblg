import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
mutation updatePhoto($id: ID!) {
    updatePhoto(id: $id, data: {liked: true }) {
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
export const ToggleLikeMutation = () => {
  const [mutation, { data, loading, error }] = useMutation(LIKE_PHOTO)
  return { mutation, loading, error }
}
