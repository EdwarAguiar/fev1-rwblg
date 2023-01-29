import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import ReactMarkdown from 'react-markdown'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
const BASEURL = 'http://localhost:1337'

export const PhotoCard = ({ id, nlikes, src = DEFAULT_IMAGE, description }) => {
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/photodetails/${id}`}>
            <ImgWrapper>
              <Img src={BASEURL + src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {nlikes} likes!
          </Button>

          <ReactMarkdown escapeHtml={false}>
            {description}
          </ReactMarkdown>
        </>
      }
    </Article>
  )
}
