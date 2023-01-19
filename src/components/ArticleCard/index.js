import React from 'react'
import { Link, Card, Parrafo, CardWrapper, RatingCard, Rating, Cat, Image } from './styles'

const BASEURL = 'http://localhost:1337'

export const ArticleCard = ({ id, title, rating, body, categories, picture }) => (
  <CardWrapper>
    <RatingCard><Rating>{rating}</Rating></RatingCard>
    <h2>{title}</h2>
    {categories.data.map(category => (
      <Cat key={category.id}>{category.attributes.name}</Cat>
    ))}
    <Card>
      <Parrafo>{body.substring(0, 500)}...</Parrafo>
      <Image src={BASEURL + picture} alt='Photo Article' />
    </Card>
    <Link to={`/details/${id}`}>Read More</Link>
  </CardWrapper>
)
