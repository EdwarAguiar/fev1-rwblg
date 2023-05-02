import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { WhiteGap } from '../WhiteGap'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { FrameLOPC } from './styles'
import { InfinitySpin } from  'react-loader-spinner'
import { likedValidation } from '../../hooks/useLikeValidation'

const ALL_PHOTOS_SP = gql`
query GetAllPhotos {
  photos(locale: "es-VE", pagination: {limit: 50}) {
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

const ALL_PHOTOS_EN = gql`
query GetAllPhotos {
  photos(locale: "en", pagination: {limit: 50}) {
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

export const ListOfPhotoCards = () => {
  const { isSP, loggedUser } = useContext(AppContext)
  const { id } = useParams()
  const { loading, error, data } = isSP ? useQuery(ALL_PHOTOS_SP) : useQuery(ALL_PHOTOS_EN)

  if (loading) return <InfinitySpin width='200' color='#004ca4' />
  if (error) return isSP ? <p>¡Ups! Error -¡Algo salió mal!</p> : <p>Oops! Error - Something went wrong!</p>

  return (
    <FrameLOPC>
      <ul>
        {
          data.photos.data.map((photo) => (
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
    </FrameLOPC>
  )
}
