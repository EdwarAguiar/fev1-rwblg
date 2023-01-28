import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, Card, Title, CardButton, Parrafo, CardWrapper, RatingCard, Rating, CatWrapper, Cat, Image } from './styles'

const BASEURL = 'http://localhost:1337'

export const ArticleCard = ({ id, title, rating, body, categories, picture }) => (
  <CardWrapper>
    <RatingCard><Rating>{rating}</Rating></RatingCard>
    <Title>{title}</Title>
    <CatWrapper>
      {categories.data.map(category => (
        <Cat key={category.id}>{category.attributes.name}</Cat>
      ))}
    </CatWrapper>

    <Card>
      <Parrafo>
        <ReactMarkdown escapeHtml={false}>
          {body.substring(0, 600) + '...'}
        </ReactMarkdown>
      </Parrafo>
      <Image src={BASEURL + picture} alt='Photo Article' />
    </Card>

    <CardButton>
      <Link to={`/details/${id}`}>Read More</Link>
    </CardButton>
  </CardWrapper>
)
