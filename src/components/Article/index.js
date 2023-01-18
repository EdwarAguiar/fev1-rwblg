import React from 'react'
import { Link } from 'react-router-dom'
import { Anchor, Card, Parrafo, CardWrapper, RatingCard, Rating, Cat, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
const BASEURL = 'localhost:1337'

export const Article = ({ id, title, rating, body, picture }) => (
  <CardWrapper>
    <RatingCard><Rating>{rating}</Rating></RatingCard>
    <h2>{title}</h2>
    <Cat>Tinaco, Tiramuto</Cat>
    <Card>
      <Parrafo>{body}...</Parrafo>

      <Image src={BASEURL + picture} />
    </Card>
    <Link to={`/details/${id}`}>Read More</Link>
  </CardWrapper>
)
