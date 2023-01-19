import React from 'react'
import { useParams } from 'react-router-dom'
// import { useFetch } from '../../hooks/useFetch'
import { useQuery, gql } from '@apollo/client'
import { ArticleCard } from '../ArticleCard'
import { List, Item } from './styles'

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
            }
          }
        }
      }
    }
  }
}
`

export const ListOfArticlesFBC = () => {
  const { id } = useParams()
  // const { loading, error, data } = useFetch(`http://localhost:1337/api/categories/${id}?populate=*`)
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id: id }
  })

  console.log("La Data FBC", data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <List>
      {
        data.category.data.attributes.reviews.data.map(article => <Item key={article.id}> <ArticleCard
          id={article.id}
          title={article.attributes.tittle}
          rating={article.attributes.rating}
          body={article.attributes.body}
          picture={article.attributes.image.data.attributes.url}
          categories={data.category.}
        />
        </Item>)
      }
    </List>
    // <h2>Testing</h2>
  )
}
