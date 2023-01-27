import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../PhotoCard'

const ALL_PHOTOS = gql`
query GetAllPhotos {
  photos {
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
  const { id } = useParams()
  const { loading, error, data } = useQuery(ALL_PHOTOS)

  console.log('X-- TODO', data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
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
  )
}
