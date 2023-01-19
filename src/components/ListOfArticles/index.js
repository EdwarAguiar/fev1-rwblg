import React from 'react'
import { ArticleCard } from '../ArticleCard'
// import { useFetch } from '../../hooks/useFetch'
import { List, Item } from './styles'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
query GetReviews {
  reviews {
    data {
      id,
      attributes{
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
            attributes{
              name
            }
          }
        }
      }
    }
  }
}
`

export const ListOfArticles = () => {
  // const { loading, error, data } = useFetch('http://localhost:1337/api/reviews?populate=*')
  const { loading, error, data } = useQuery(REVIEWS)

  console.log("La Data", data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <List>
      {
        data.reviews.data.map(article => <Item key={article.id}> <ArticleCard
          id={article.attributes.id}
          title={article.attributes.title}
          rating={article.attributes.rating}
          body={article.attributes.body}
          picture={article.attributes.image.data.attributes.url}
          categories={article.attributes.categories}
        />
        </Item>)
      }
    </List>
  )
}
