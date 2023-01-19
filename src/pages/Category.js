import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { ArticleCard } from '../components/ArticleCard'
// import { ListOfArticlesFBC } from '../components/ListOfArticlesFBC'
// import { useFetch } from '../../hooks/useFetch'

const CATEGORY = gql`
query GetCategory($id: ID!) {
  category(id: $id) {
    data {
      id,
      attributes{
        name,
        reviews {
          data {
            id,
            attributes {
              title,
              rating,
              body,
              image {
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

export const Category = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id }
  })

  console.log("La Data FBC", data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <ul>
      {
        data.category.data.attributes.reviews.data.map((review) => (
          <li key={review.id}>
            <ArticleCard
              id={review.id}
              title={review.attributes.title}
              rating={review.attributes.rating}
              body={review.attributes.body.substring(0, 380) + '...'}
              picture={review.attributes.image.data.attributes.url}
              categories={review.attributes.categories}
            />
          </li>
        ))
      }
    </ul>
  )
}
