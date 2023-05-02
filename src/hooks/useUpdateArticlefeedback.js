import { gql, useMutation } from '@apollo/client'

export const LIKE_ARTICLEFEEDBACK = gql`
mutation updateArticlefeedback($id: ID!, $liked: Boolean!, $nlikes: Int!, $usrliked: [ID!]) {
  updateArticlefeedback(id: $id data: {liked: $liked, nlikes: $nlikes, usrliked: $usrliked}) {
    data {
      id
      attributes {
        liked,
        nlikes,
        usrliked {
          data {
            id
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

export const useUpdateArticlefeedbackMutation = () => {
  const [updateArticlefeedbackMutation, { loading, error }] = useMutation(LIKE_ARTICLEFEEDBACK)
  return { updateArticlefeedbackMutation, loading, error }
}
