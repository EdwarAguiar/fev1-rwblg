import React from 'react'
import { PhotoCategory } from '../PhotoCategory'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { List, Item, Link } from './styles'

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

export const ListOfPhotoCategories = () => {
  // const { loading, error, data } = useFetch('http://localhost:1337/api/photocategories')
  const { id } = useParams()
  const { loading, error, data } = useQuery(PHOTO_CATEGORIES)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  // console.log('La data que llega', data)

  return (
    <List>
      {
        // [1, 2, 3, 4, 5, 6].map((pcategory) => <Item key={pcategory}> <PhotoCategory /> </Item>)
        data.photocategories.data.map(pcategory =>
          <Link key={pcategory.id} to={`/photocategories/${pcategory.id}`}>
            <Item>
              <PhotoCategory
                name={pcategory.attributes.name}
                src={pcategory.attributes.src.data.attributes.url}
              />
            </Item>
          </Link>
        )
      }
    </List>
  )
}
