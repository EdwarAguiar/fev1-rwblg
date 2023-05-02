import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { ArticleCard } from '../ArticleCard'
import { List, Item } from './styles'
import { useQuery, gql } from '@apollo/client'
import { InfinitySpin } from  'react-loader-spinner'

const ARTICLES_SP = gql`
query GetArticles {
  articles(locale: "es-VE", pagination: { limit: 50}) {
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
const ARTICLES_EN = gql`
query GetArticles {
  articles(locale: "en", pagination: { limit: 50}) {
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
  const { isSP } = useContext(AppContext)
  console.log('Articles en SP', isSP)
  const { loading, error, data } = isSP ? useQuery(ARTICLES_SP) : useQuery(ARTICLES_EN)

  //if (loading) return <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" /> 
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <List>
      {
        data.articles.data.map(art => <Item key={art.id}>
          <ArticleCard
            id={art.id}
            title={art.attributes.title}
            rating={art.id}
            body={art.attributes.body}
            picture={art.attributes.image_n1.data.attributes.url}
            categories={art.attributes.categories}
          />
        </Item>)
      }
    </List>
  )
}
