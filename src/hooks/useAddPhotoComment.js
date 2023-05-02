import { gql, useMutation } from '@apollo/client'

export const ADD_PHOTO_COMMENT = gql`
mutation addComment($comment: String!, $photo: ID!, $usrcreate: ID!, $liked: Boolean!, $nlikes: Int!) {
  createPhotofeedback( data: { comment: $comment, photo: $photo, usrcreate: $usrcreate, nlikes: $nlikes, liked: $liked}) {
    data {
      id
      attributes {
        comment,
        nlikes,
        liked,
        photo {
          data{
            id
          }
        }
        usrcreate {
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

export const useAddPhotoCommentMutation = () => {
  const [AddPhotoCommentMutation, { loading, error }] = useMutation(ADD_PHOTO_COMMENT)
  return { AddPhotoCommentMutation, loading, error }
}
