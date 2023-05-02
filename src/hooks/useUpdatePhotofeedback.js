import { gql, useMutation } from '@apollo/client'

export const LIKE_PHOTOFEEDBACK = gql`
mutation updatePhotofeedback($id: ID!, $liked: Boolean!, $nlikes: Int!, $usrliked: [ID!]) {
  updatePhotofeedback(id: $id data: {liked: $liked, nlikes: $nlikes, usrliked: $usrliked}) {
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

export const useUpdatePhotofeedbackMutation = () => {
  const [updatePhotofeedbackMutation, { loading, error }] = useMutation(LIKE_PHOTOFEEDBACK)
  return { updatePhotofeedbackMutation, loading, error }
}
