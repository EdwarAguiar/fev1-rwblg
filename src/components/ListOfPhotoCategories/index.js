import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { PhotoCategory } from '../PhotoCategory'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { List, Item } from './styles'
import { InfinitySpin } from  'react-loader-spinner'

const PHOTO_CATEGORIES_SP = gql`
query GetPhotoCategories {
  photocategories(locale: "es-VE") {
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
const PHOTO_CATEGORIES_EN = gql`
query GetPhotoCategories {
  photocategories(locale: "en") {
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

const ListOfPhotoCategoriesComponents = () => {
  const { isSP } = useContext(AppContext)
  const { id } = useParams()

  const { loading, error, data } = isSP ? useQuery(PHOTO_CATEGORIES_SP) : useQuery(PHOTO_CATEGORIES_EN)

  // if (loading) return <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" /> 
  if (error) return <p>Oops! Error - Something went wrong!</p>

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
