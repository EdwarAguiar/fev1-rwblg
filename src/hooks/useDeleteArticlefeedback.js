import { gql, useMutation } from '@apollo/client'

export const DELETE_ARTICLEFEEDBACK = gql`
mutation deleteArticlefeedback($id: ID!) {
  deleteArticlefeedback(id: $id) {
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

export const useDeleteArticlefeedbackMutation = () => {
  const [deleteArticlefeedbackMutation, { loading, error }] = useMutation(DELETE_ARTICLEFEEDBACK)
  return { deleteArticlefeedbackMutation, loading, error }
}
