import React, { useContext, useState } from 'react'
import jwt_decode from 'jwt-decode'
import { AppContext } from '../../context/AppContex'
import { useNavigate } from 'react-router-dom'
import { useAddPhotoCommentMutation } from '../../hooks/useAddPhotoComment'
import { useAddArticleCommentMutation } from '../../hooks/useAddArticleComment'
import moment from 'moment'
import { FrameComment, Input, Button } from './styles'
import { FaUserCircle } from 'react-icons/fa'


export const CommentsForm = ({ id, photoDriver }) => {
  
  const [comment, setComment] = useState('')
  const { isSP, isAuth } = useContext(AppContext)
  const { AddPhotoCommentMutation, data: dataPho, loading: loadingPho, error: errorPho } = useAddPhotoCommentMutation()
  const { AddArticleCommentMutation, data: dataArt, loading: loadingArt, error: errorArt } = useAddArticleCommentMutation()
  const navigate = useNavigate()
  const refreshPage = () => window.location.reload(false)
  

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePostComment = () => {
    if (comment.trim() !== '') {
      if (photoDriver) { // Comments for Photos
        if (isAuth) {
          const userID = window.sessionStorage.getItem('userID')
          const CurrentDate = moment()
          const nlikes = 0
          const liked = false
          AddPhotoCommentMutation(
              {
                variables: {
                  comment: comment,
                  photo: id,
                  usrcreate: userID,
                  nlikes: nlikes,
                  liked: liked
                }
              }
          )
          setComment('')
          refreshPage()
        } else {
          setComment('');
          navigate('/user')
        }  
      } else { // Comments for Articles
        if (isAuth) {
          const userID = window.sessionStorage.getItem('userID')
          const CurrentDate = moment()
          const nlikes = 0
          const liked = false
          AddArticleCommentMutation(
              {
                variables: {
                  comment: comment,
                  article: id,
                  usrcreate: userID,
                  nlikes: nlikes,
                  liked: liked
                }
              }
          )
          setComment('')
          refreshPage()
        } else {
          // console.log('Para Escribir un comentario tiene que estar logueado')
          setComment('');
          navigate('/user')
        } 

      }

    }
  };

  const wac = isSP ? "Escribe un comentario..." : "Write a comment..."


  return (
    <FrameComment>
      <FaUserCircle size={24} style={{ marginRight: 8 }} />
      <Input
        type="text"
        placeholder={wac}
        value={comment}
        onChange={handleCommentChange}
      />
      <Button
        onClick={handlePostComment}
      >
        Post
      </Button>
    </FrameComment>
  );
}

