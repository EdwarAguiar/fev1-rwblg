import React, { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Link, Card, Title, CardButton, Parrafo, Article, RatingCard, Rating, CatWrapper, Cat, Image } from './styles'

const BASEURL = 'http://localhost:1337'

export const ArticleCard = ({ id, title, rating, body, categories, picture }) => {
  const [show, element] = useNearScreen()

  return (
    <Article ref={element}>
      {
        show && <>
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
                {
                  (screen.width < 1200 ? body.substring(0, 200) + '...' : body.substring(0, 600) + '...')
                }
              </ReactMarkdown>
            </Parrafo>
            <Image src={BASEURL + picture} alt='Photo Article' />
          </Card>

          <CardButton>
            <Link to={`/details/${id}`}>Read More</Link>
          </CardButton>
        </>
      }
    </Article>
  )
}
