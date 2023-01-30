import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import ReactMarkdown from 'react-markdown'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
const BASEURL = 'http://localhost:1337'

export const PhotoCard = ({ id, nlikes, src, description }) => {
  const counter = nlikes + 1
  const [show, element] = useNearScreen()
  const { mutation, data, loading, error } = ToggleLikeMutation()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  console.log(data)

  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        id: { id },
        nlikes: { counter }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/photodetails/${id}`}>
            <ImgWrapper>
              <Img src={BASEURL + src} />
            </ImgWrapper>
          </a>

          <FavButton liked={liked} nlikes={nlikes} onClick={handleFavClick} />

          <ReactMarkdown escapeHtml={false}>
            {description}
          </ReactMarkdown>
        </>
      }
    </Article>
  )
}
