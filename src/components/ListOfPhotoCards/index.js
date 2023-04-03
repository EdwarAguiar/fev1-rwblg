import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { WhiteGap } from '../WhiteGap'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'
import { FrameLOPC } from './styles'
import { InfinitySpin } from  'react-loader-spinner'

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
        }
      }
    }
  }
}
`

export const ListOfPhotoCards = () => {
  const { isSP } = useContext(AppContext)
  const { id } = useParams()
  const { loading, error, data } = isSP ? useQuery(ALL_PHOTOS_SP) : useQuery(ALL_PHOTOS_EN)

  console.log('Lista de Fotos:',data)

  // if (loading) return <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" />
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <FrameLOPC>
      <ul>
        {
          // [1, 2, 3, 4, 5].map(id => <PhotoCard key={id} />)
          data.photos.data.map((photo) => (
            <li key={photo.id}>
              <PhotoCard
                id={photo.id}
                nlikes={photo.attributes.nlikes}
                liked={photo.attributes.liked}
                description={photo.attributes.description}
                src={photo.attributes.src.data.attributes.url}
              />
            </li>
          ))
        }
      </ul>
      <WhiteGap />
    </FrameLOPC>
  )
}
