import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { DisplayComment } from '../DisplayComment'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { List, Item } from './styles'
import { InfinitySpin } from  'react-loader-spinner'
import { likedValidation } from '../../hooks/useLikeValidation'

const PHOTOFEEDBACK = gql`
query GetPhoto($id: ID!) {
    photo(id: $id){
      data {
        id,
        attributes {
          nlikes,
          liked,
          description,
          photofeedbacks(pagination: {limit: 250}) {
            data {
              id,
              attributes {
                comment,
                usrcreate {
                  data {
                    id,
                    attributes {
                      username
                    }
                  }
                },
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
                createdAt
              }
            }
          }
        }
      }
    }
  }
`

const ListOfPhotofeedbackComponents = () => {
  const { isSP, loggedUser } = useContext(AppContext)
  const { id } = useParams()
  const nc = isSP ? '¡Aún no se han añadido comentarios!' : 'No comments added yet!'

  const { loading, error, data } = useQuery(PHOTOFEEDBACK, {
    variables: { id: id }
  })

  if (loading) return <InfinitySpin width='200' color='#004ca4' /> 
  if (error) return isSP ? <p>Huy! Error - Algo salio mal...!</p> : <p>Oops! Error - Something went wrong!</p>

  if (data.photo.data.attributes.photofeedbacks.data.length === 0) return <List><p>{nc}</p></List>

  const photoDriver = true

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
        data.photo.data.attributes.photofeedbacks.data.map(pfeedback =>
          <Item key={pfeedback.id}>
            <DisplayComment
              commentID={pfeedback.id}
              comment={pfeedback.attributes.comment}
              username={pfeedback.attributes.usrcreate.data.attributes.username}
              nlikes={pfeedback.attributes.usrliked.data.length}
              liked={likedValidation(loggedUser, pfeedback.attributes.usrliked.data)}
              likedList={pfeedback.attributes.usrliked.data}
              published={pfeedback.attributes.createdAt}
              photoDriver={photoDriver}
            />
          </Item>
        )
      }
    </List>
  )
}

export const ListOfPhotofeedback = React.memo(ListOfPhotofeedbackComponents)
