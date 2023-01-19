import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Link, Article, Parrafo, ArticleWrapper, RatingCard, Rating, Cat, Image } from '../styles/styles_pad'

export const ArticleDetails = () => {
  const { id } = useParams()
  const { loading, error, data } = useFetch(`http://localhost:1337/api/reviews/${id}?populate=*`)
  const BASEURL = 'http://localhost:1337'

  // console.log("Nivel Detail", data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <ArticleWrapper>
      <RatingCard><Rating>{data.data.attributes.rating}</Rating></RatingCard>
      <h2>{data.data.attributes.title}</h2>
      {data.data.attributes.categories.data.map(category => (
        <Cat key={category.id}>{category.attributes.name}</Cat>
      ))}
      <Article>
        <Image src={BASEURL + data.data.attributes.image.data.attributes.url} alt='Photo Article' />
        <Parrafo>{data.data.attributes.body}...</Parrafo>
      </Article>
      <Link to='/'>Return</Link>
    </ArticleWrapper>
  )
}
