import React from 'react'
import { ArticleCard } from '../ArticleCard'
import { List, Item } from './styles'
import { useQuery, gql } from '@apollo/client'

const ARTICLES = gql`
query GetArticles {
  articles {
    data {
      id,
      attributes{
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
  const { loading, error, data } = useQuery(ARTICLES)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <List>
      {
        data.articles.data.map(art => <Item key={art.id}>
          <ArticleCard
            id={art.id}
            title={art.attributes.title}
            rating={art.attributes.rating}
            body={art.attributes.body}
            picture={art.attributes.image_n1.data.attributes.url}
            categories={art.attributes.categories}
          />
        </Item>)
      }
    </List>
  )
}
