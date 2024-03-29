import React, { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNearScreen } from '../../hooks/useNearScreen'
import { config } from '../../config/config'
import { Link, Card, Title, CardButton, Parrafo, Article, RatingCard, Rating, CatWrapper, Cat, Image } from './styles'

const BASEURL = config.backendUrl

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
            {/* <Image src={BASEURL + picture} alt='Photo Article' /> */}
            <Image src={picture} alt='Photo Article' />
          </Card>

          <CardButton>
            <Link to={`/details/${id}`}>Read More</Link>
          </CardButton>
        </>
      }
    </Article>
  )
}
