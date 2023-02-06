import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { ListOfPhotoCategories } from '../components/ListOfPhotoCategories'
import { PhotoCard } from '../components/PhotoCard'
import { FramePBCP } from '../styles/styles_bcp'
import { WhiteGap } from '../components/WhiteGap'

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
    }
  }
}
`

// export const PhotosBCpage = () => {
const PhotosBCpageComponent = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(PHOTO_CATEGORY, {
    variables: { id: id }
  })

  // console.log("La Data FBC", data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <FramePBCP>
      <ListOfPhotoCategories />
      <ul>
        {
          data.photocategory.data.attributes.photos.data.map((photo) => (
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
    </FramePBCP>
  )
}

export const PhotosBCpage = React.memo(PhotosBCpageComponent)
