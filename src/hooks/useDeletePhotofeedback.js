import { gql, useMutation } from '@apollo/client'

export const DELETE_PHOTOFEEDBACK = gql`
mutation deletePhotofeedback($id: ID!) {
  deletePhotofeedback(id: $id) {
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

export const useDeletePhotofeedbackMutation = () => {
  const [deletePhotofeedbackMutation, { loading, error }] = useMutation(DELETE_PHOTOFEEDBACK)
  return { deletePhotofeedbackMutation, loading, error }
}
