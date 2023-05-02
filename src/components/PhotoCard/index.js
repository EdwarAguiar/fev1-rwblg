import React, { useEffect, useRef, useState, useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useUpdatePhotoMutation } from '../../hooks/useUpdatePhoto'
import { removeElementFromList } from '../../hooks/useRemoveElementFromList'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import { config } from '../../config/config'

// const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
// const BASEURL = 'http://localhost:1337'
const BASEURL = config.backendUrl

export const PhotoCard = ({ id, nlikes, liked, description, src, likedList }) => {
  const navigate = useNavigate()
  const { isAuth, loggedUser, loggedUserID } = useContext(AppContext)
  const { updatePhotoMutation, loading, error } = useUpdatePhotoMutation()
  const [show, element] = useNearScreen()
  const realLikedList = likedList.map(data => data.id)

  const handleFavClick = () => {
    if (isAuth) {
      if (!liked) {
        const newLikedList = [...realLikedList, loggedUserID]
        const counter = newLikedList.length
        const newliked = true
        // console.log('AGREGANDO --> New Liked List:', newLikedList)
        updatePhotoMutation(
          {
            variables: {
              id: id,
              liked: newliked,
              nlikes: counter,
              usrliked: newLikedList
            }
          }
        )
      } else {
        const newLikedList = removeElementFromList(realLikedList, loggedUserID)
        const counter = newLikedList.length
        const newliked = false
        // console.log('ELIMINANDO --> New Liked List:', newLikedList)
        updatePhotoMutation(
          {
            variables: {
              id: id,
              liked: newliked,
              nlikes: counter,
              usrliked: newLikedList
            }
          }
        )
      }
    } else {
      navigate('/user')
    }
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/photodetails/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <FavButton liked={liked} nlikes={nlikes} onClick={handleFavClick} />

          <ReactMarkdown>
            {description}
          </ReactMarkdown>
        </>
      }
    </Article>
  )
}
