import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContex'
import { useQuery, gql } from '@apollo/client'
import { SiteHeader } from '../components/SiteHeader'
import { ArticleCard } from '../components/ArticleCard'
import { InfinitySpin } from  'react-loader-spinner'

const CATEGORY_EN = gql`
query GetCategory($id: ID!) {
  category(id: $id, locale: "en") {
    data {
      id,
      attributes{
        name,
        articles {
          data {
            id,
            attributes {
              title,
              rating,
              body,
              image_n1 {
                data {
                  id,
                  attributes {
                    name,
                    url
                  }
                }
              }
              image_n2 {
                data {
                  id,
                  attributes {
                    name,
                    url
                  }
                  
                }
              }
              categories {
                data {
                  id,
                  attributes {
                    name
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

const CATEGORY_SP = gql`
query GetCategory($id: ID!) {
  category(id: $id, locale: "es-VE") {
    data {
      id,
      attributes{
        name,
        articles {
          data {
            id,
            attributes {
              title,
              rating,
              body,
              image_n1 {
                data {
                  id,
                  attributes {
                    name,
                    url
                  }
                }
              }
              image_n2 {
                data {
                  id,
                  attributes {
                    name,
                    url
                  }
                  
                }
              }
              categories {
                data {
                  id,
                  attributes {
                    name
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



const Category = () => {
  const { loggedUser, isSP } = useContext(AppContext)
  const { id } = useParams()
  const { loading, error, data } = isSP ? useQuery(CATEGORY_SP, { variables: { id: id } }) : useQuery(CATEGORY_EN, { variables: { id: id } })

  // const { loading, error, data } = isSP ? useQuery(HOME_SP) : useQuery(HOME_EN)

  if (loading) return <InfinitySpin width='200' color='#004ca4' /> 
  if (error) return isSP ? <p>¡Ups! Error -¡Algo salió mal!</p> : <p>Oops! Error - Something went wrong!</p>

  return (
    <ul>
      <SiteHeader />
      {
        data.category.data.attributes.articles.data.map((art) => (
          <li key={art.id}>
            <ArticleCard
              id={art.id}
              title={art.attributes.title}
              // rating={art.attributes.rating}
              rating={art.id}
              body={art.attributes.body.substring(0, 380) + '...'}
              picture={art.attributes.image_n1.data.attributes.url}
              categories={art.attributes.categories}
            />
          </li>
        ))
      }
    </ul>
  )
}

export default Category
