import React from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import { SiteHeader } from '../components/SiteHeader'
import { InfinitySpin } from  'react-loader-spinner'
import { config } from '../config/config'

import { Link, Article, ButtonWrapper, ArticleButton, Parrafo, ArticleWrapper, RatingCard, Rating, Cat, Image, AutorWrapper } from '../styles/styles_pad'

const ARTICLE = gql`
query GetArticle($id: ID!) {
  article(id: $id) {
    data {
      id,
      attributes{
        title,
        rating,
        body,
        publishedAt,
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
        writer {
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
`

const ArticleDetails = () => {
  // const { loading, error, data } = useFetch(`http://localhost:1337/api/articles/${id}?populate=*`)
  const { id } = useParams()
  const { loading, error, data } = useQuery(ARTICLE, {
    variables: { id: id }
  })

  const BASEURL = config.backendUrl

  // if (loading) return <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" /> 
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <>
      <SiteHeader />
      <ArticleWrapper>
        {/* <RatingCard><Rating>{data.article.data.attributes.rating}</Rating></RatingCard> */}
        <RatingCard><Rating>{data.article.data.id}</Rating></RatingCard>
        <h2>{data.article.data.attributes.title}</h2>
        {data.article.data.attributes.categories.data.map(category => (
          <Cat key={category.id}>{category.attributes.name}</Cat>
        ))}
        <Article>
          <Image src={data?.article?.data?.attributes?.image_n2?.data?.attributes?.url} alt='Photo Article' />
          <ReactMarkdown escapeHtml={false}>
            {data.article.data.attributes.body}
          </ReactMarkdown>
        </Article>
        <AutorWrapper>
          <p>
            {`Autor: ${data.article.data.attributes.writer.data === null ? 'Backend: No Info Added' : data.article.data.attributes.writer.data.attributes.name} `}
            - Fecha de Publicacion: {moment(data.article.data.attributes.publishedAt).format('DD/MM/YYYY')}
          </p>
        </AutorWrapper>
        <ButtonWrapper>
          <ArticleButton>
            <Link to='/blog'>Return</Link>
          </ArticleButton>
        </ButtonWrapper>
      </ArticleWrapper>

    </>
  )
}

export default ArticleDetails
