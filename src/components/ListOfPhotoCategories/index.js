import React from 'react'
import { PhotoCategory } from '../PhotoCategory'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { List, Item } from './styles'

const PHOTO_CATEGORIES = gql`
query GetPhotoCategories {
  photocategories {
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
       }
    }
  }
}
`

// export const ListOfPhotoCategories = () => {
const ListOfPhotoCategoriesComponents = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(PHOTO_CATEGORIES)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  // console.log('La data que llega', data)

  return (
    <List>
      {
        data.photocategories.data.map(pcategory =>
          <Item key={pcategory.id}>
            <PhotoCategory
              name={pcategory.attributes.name}
              src={pcategory.attributes.src.data.attributes.url}
              path={`/photocategories/${pcategory.id}`}
            />
          </Item>
        )
      }
    </List>
  )
}

export const ListOfPhotoCategories = React.memo(ListOfPhotoCategoriesComponents)
