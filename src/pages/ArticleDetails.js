import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
// import { useFetch } from '../hooks/useFetch'
import { Link, Article, Parrafo, ArticleWrapper, RatingCard, Rating, Cat, Image } from '../styles/styles_pad'

const ARTICLE = gql`
query GetArticle($id: ID!) {
  article(id: $id) {
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

export const ArticleDetails = () => {
  // const { loading, error, data } = useFetch(`http://localhost:1337/api/articles/${id}?populate=*`)
  const { id } = useParams()
  const { loading, error, data } = useQuery(ARTICLE, {
    variables: { id: id }
  })
  const BASEURL = 'http://localhost:1337'

  console.log('Nivel Detail', data)
  // console.log("El Titulo", data.article.data.attributes.title)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <ArticleWrapper>
      <RatingCard><Rating>{data.article.data.attributes.rating}</Rating></RatingCard>
      <h2>{data.article.data.attributes.title}</h2>
      {data.article.data.attributes.categories.data.map(category => (
        <Cat key={category.id}>{category.attributes.name}</Cat>
      ))}
      <Article>
        <Image src={BASEURL + data.article.data.attributes.image_n2.data.attributes.url} alt='Photo Article' />
        <Parrafo>{data.article.data.attributes.body}...</Parrafo>
      </Article>
      <Link to='/'>Return</Link>
    </ArticleWrapper>
  )
}
