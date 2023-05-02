import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { DisplayComment } from '../DisplayComment'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { List, Item } from './styles'
import { InfinitySpin } from  'react-loader-spinner'
import { likedValidation } from '../../hooks/useLikeValidation'

const ARTICLEFEEDBACK = gql`
query GetArticle($id: ID!) {
  article(id: $id){
    data {
      id,
      attributes {
        title,
        articlefeedbacks (pagination: {limit: 250}) {
          data {
            id,
            attributes {
              comment,
              liked,
              nlikes,
              usrcreate {
                data {
                  id,
                  attributes {
                    username
                  }
                }
              },
              usrliked {
                data {
                  id,
                  attributes {
                    username
                  }
                }
              }
              userliked {
                  data {
                    id,
                    attributes {
                      articlefbids {
                        data {
                          id
                        }
                      }
                      userliked {
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
              createdAt
            }
          }
        }
      }
    }
  }
}
`

const ListOfArticlefeedbackComponents = () => {
  const { isSP, loggedUser} = useContext(AppContext)
  const { id } = useParams()
  const nc = isSP ? '¡Aún no se han añadido comentarios!' : 'No comments added yet!'

  const { loading, error, data } = useQuery(ARTICLEFEEDBACK, {
    variables: { id: id }
  })

  if (loading) return <InfinitySpin width='200' color='#004ca4' /> 
  if (error) return isSP ? <p>Huy! Error - Algo salio mal...!</p> : <p>Oops! Error - Something went wrong!</p>
  if (data.article.data.attributes.articlefeedbacks.data.length === 0) return <List><p>{nc}</p></List>

  const photoDriver = false

  // const likedValidation = (username, likedList) => {
  //   if (likedList.length === 0) {
  //     return false
  //   }

  //   const likedUsernames = likedList.map(data => data.attributes.username);
  //   if (likedUsernames.includes(username)) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

  return (
    <List>
      {
        data.article.data.attributes.articlefeedbacks.data.map(artfeedback =>
          <Item key={artfeedback.id}>
            <DisplayComment
              commentID={artfeedback.id}
              comment={artfeedback.attributes.comment}
              username={artfeedback.attributes.usrcreate.data.attributes.username}
              nlikes={artfeedback.attributes.usrliked.data.length}
              liked={likedValidation(loggedUser, artfeedback.attributes.usrliked.data)}
              likedList={artfeedback.attributes.usrliked.data}
              published={artfeedback.attributes.createdAt}
              photoDriver={photoDriver}
            />
          </Item>
        )
      }
    </List>
  )
}

export const ListOfArticlefeedback = React.memo(ListOfArticlefeedbackComponents)
