import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Article } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useUpdatePhotoMutation } from '../../hooks/useUpdatePhoto'
import ReactMarkdown from 'react-markdown'
import { useMutation } from '@apollo/client'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
const BASEURL = 'http://localhost:1337'

export const PhotoCard = ({ id, nlikes, src, description }) => {
  const { updatePhotoMutation, loading, error } = useUpdatePhotoMutation()

  const counter = nlikes + 1
  const newliked = true

  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()

  const handleFavClick = () => {
    if (!liked) {
      updatePhotoMutation(
        {
          variables: {
            id: id,
            liked: newliked,
            nlikes: counter
          }
        }
      )
    }
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
