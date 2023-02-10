import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { SiteHeader } from '../components/SiteHeader'
import { ArticleCard } from '../components/ArticleCard'

const CATEGORY = gql`
query GetCategory($id: ID!) {
  category(id: $id) {
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
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id }
  })

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <ul>
      <SiteHeader />
      {
        data.category.data.attributes.articles.data.map((art) => (
          <li key={art.id}>
            <ArticleCard
              id={art.id}
              title={art.attributes.title}
              rating={art.attributes.rating}
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
