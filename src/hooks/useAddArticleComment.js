import { gql, useMutation } from '@apollo/client'

export const ADD_ARTICLE_COMMENT = gql`
mutation addComment($comment: String!, $article: ID!, $usrcreate: ID!, $liked: Boolean!, $nlikes: Int!) {
  createArticlefeedback( data: { comment: $comment, article: $article, usrcreate: $usrcreate, nlikes: $nlikes, liked: $liked}) {
    data {
      id
      attributes {
        comment,
        nlikes,
        liked,
        article {
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

export const useAddArticleCommentMutation = () => {
  const [AddArticleCommentMutation, { loading, error }] = useMutation(ADD_ARTICLE_COMMENT)
  return { AddArticleCommentMutation, loading, error }
}
