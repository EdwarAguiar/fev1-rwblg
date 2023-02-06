import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { PhotoCard } from '../components/PhotoCard'

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
        }
      }
    }
  }
}
`
// export const PhotoDetails = () => {
const PhotoDetailsComponent = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(PHOTO, {
    variables: { id: id }
  })
  const BASEURL = 'http://localhost:1337'

  console.log('Detalle Photo', data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <>
      <ListOfPhotoCategories />
      <ul>
        <PhotoCard
          id={data.photo.data.id}
          nlikes={data.photo.data.attributes.nlikes}
          liked={data.photo.data.attributes.liked}
          description={data.photo.data.attributes.description}
          src={data.photo.data.attributes.src.data.attributes.url}
        />
      </ul>
    </>
  )
}

export const PhotoDetails = React.memo(PhotoDetailsComponent)
