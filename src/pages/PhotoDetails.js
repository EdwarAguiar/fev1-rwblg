import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { PhotoCard } from '../components/PhotoCard'
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
        }
      }
    }
  }
}
`

const PhotoDetailsComponent = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(PHOTO, {
    variables: { id: id }
  })

  console.log('La Data',data)

  // if (loading) return <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" />
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <FramePD>
      <ListOfPhotoCategories />
      <ul>
        <PhotoCard
          id={data.photo.data.id}
          nlikes={data.photo.data.attributes.nlikes}
          liked={data.photo.data.attributes.liked}
          description={data.photo.data.attributes.description}
          src={data?.photo?.data?.attributes?.src?.data?.attributes?.url}
        />
      </ul>
    </FramePD>
  )
}

const PhotoDetails = React.memo(PhotoDetailsComponent)
export default PhotoDetails
