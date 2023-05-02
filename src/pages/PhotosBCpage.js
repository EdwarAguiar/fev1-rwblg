import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContex'
import { useQuery, gql } from '@apollo/client'
import { likedValidation } from '../hooks/useLikeValidation'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { PhotoCard } from '../components/PhotoCard'
import { FramePBCP } from '../styles/styles_bcp'
import { WhiteGap } from '../components/WhiteGap'
import { InfinitySpin } from  'react-loader-spinner'

const PHOTO_CATEGORY = gql`
query GetPhotoCategory($id: ID!) {
  photocategory(id: $id) {
    data {
      id,
      attributes{
        name,
        src {
          data {
            id,
            attributes {
              name,
              url
            }
          }
        }
        photos (pagination: { limit: 50}) {
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
    }
  }
}
`

const PhotosBCpageComponent = () => {
  const { id } = useParams()
  const { isSP, loggedUser } = useContext(AppContext)

  const { loading, error, data } = useQuery(PHOTO_CATEGORY, {
    variables: { id: id }
  })

  if (loading) return <InfinitySpin width='200' color='#004ca4' />
  if (error) return isSP ? <p>¡Ups! Error -¡Algo salió mal!</p> : <p>Oops! Error - Something went wrong!</p>

  return (
    <FramePBCP>
      <ListOfPhotoCategories />
      <ul>
        {
          data.photocategory.data.attributes.photos.data.map((photo) => (
            <li key={photo.id}>
              <PhotoCard
                id={photo.id}
                nlikes={photo.attributes.usrliked.data.length}
                liked={likedValidation(loggedUser, photo.attributes.usrliked.data)}
                description={photo.attributes.description}
                src={photo.attributes.src.data.attributes.url}
                likedList={photo.attributes.usrliked.data}
              />
            </li>
          ))
        }
      </ul>
      <WhiteGap />
    </FramePBCP>
  )
}

const PhotosBCpage = React.memo(PhotosBCpageComponent)
export default PhotosBCpage
