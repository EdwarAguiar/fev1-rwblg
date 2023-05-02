import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { AppContext } from '../context/AppContex'
import { likedValidation } from '../hooks/useLikeValidation'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { ListOfPhotofeedback } from '../components/ListOfPhotofeedbacks'
import { PhotoCard } from '../components/PhotoCard'
import { CommentsForm } from '../components/CommentsForm'
import { FramePD } from '../styles/styles_pd'
import { InfinitySpin } from  'react-loader-spinner'

const PHOTO = gql`
query GetPhoto($id: ID!) {
  photo(id: $id){
    data {
      id,
      attributes {
        nlikes,
        liked,
        description,
        src {
          data {
            id,
            attributes {
              name,
              url
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
      }
    }
  }
}
`

const PhotoDetailsComponent = () => {
  const { loggedUser, isSP } = useContext(AppContext)
  const photoDriver = true
  const { id } = useParams()
  const { loading, error, data } = useQuery(PHOTO, {
    variables: { id: id }
  })

  if (loading) return <InfinitySpin width='200' color='#004ca4' />
  if (error) return isSP ? <p>¡Ups! Error -¡Algo salió mal!</p> : <p>Oops! Error - Something went wrong!</p>

  return (
    <FramePD>
      <ListOfPhotoCategories />
      <ul>
        <PhotoCard
          id={data.photo.data.id}
          nlikes={data.photo.data.attributes.usrliked.data.length}
          liked={likedValidation(loggedUser, data.photo.data.attributes.usrliked.data)}
          description={data.photo.data.attributes.description}
          src={data?.photo?.data?.attributes?.src?.data?.attributes?.url}
          likedList={data.photo.data.attributes.usrliked.data}
        />
      </ul>
      <CommentsForm id={data.photo.data.id} photoDriver={photoDriver}/>
      <ListOfPhotofeedback />
    </FramePD>
  )
}

const PhotoDetails = React.memo(PhotoDetailsComponent)
export default PhotoDetails
