import React, { useContext } from "react"
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { AppContext } from '../../context/AppContex'
import { FavButton } from '../FavButton'
import { useNavigate } from 'react-router-dom'
import { removeElementFromList } from '../../hooks/useRemoveElementFromList'
import { useUpdatePhotofeedbackMutation } from '../../hooks/useUpdatePhotofeedback'
import { useDeletePhotofeedbackMutation } from '../../hooks/useDeletePhotofeedback'
import { useUpdateArticlefeedbackMutation } from '../../hooks/useUpdateArticlefeedback'
import { useDeleteArticlefeedbackMutation } from '../../hooks/useDeleteArticlefeedback'
import { MdOutlineDeleteForever, MdOutlineDeleteOutline, MdPersonOutline } from 'react-icons/md'
import { DCframe, Tcomment, User, Userframe, DPost, Barframe} from './styles'

export const DisplayComment = ({ comment, commentID, nlikes, liked, likedList, username, published, photoDriver }) => {
  const formatteDate = moment(published).format('LLL')
  const size = 20
  const { isAuth, loggedUser, loggedUserID } = useContext(AppContext)
  const { updatePhotofeedbackMutation, loading: loadingUPho, error: errorUPho } = useUpdatePhotofeedbackMutation()
  const { deletePhotofeedbackMutation, loading: loadingDPho, error: errorDPho } = useDeletePhotofeedbackMutation()
  const { updateArticlefeedbackMutation, loading: loadingUArt, error: errorUArt } = useUpdateArticlefeedbackMutation()
  const { deleteArticlefeedbackMutation, loading: loadingDArt, error: errorDArt } = useDeleteArticlefeedbackMutation()
  const navigate = useNavigate()
  let visible = false
  const realLikedList = likedList.map(data => data.id)

  if (isAuth) {     
    visible = (loggedUser === username) ? true : false 
   }
  
  const deleteEnabled = <MdOutlineDeleteForever size={size} onClick={handleDelete}/>
  const deleteDisabled = <MdOutlineDeleteOutline size={size} onClick={handleDelete}/>
  const deleteIcon = isAuth ? deleteEnabled : deleteDisabled

  const handleDelete = () => {
    if (isAuth) {
      if (photoDriver) { // Working on Photos
        deletePhotofeedbackMutation(
        {
          variables: {
            id: commentID
          }
        }
      )
      } else { // Working on Articles
        deleteArticlefeedbackMutation(
        {
          variables: {
            id: commentID
          }
        }
      )
         
      }
    } else {
      navigate('/user')
    }
  }

  const handleFavClick = () => {
    if (isAuth) {
      if (photoDriver) { // WORKING ON PHOTOS
        if (!liked) {
          const newLikedList = [...realLikedList, loggedUserID]
          const counter = newLikedList.length
          const newliked = true
          updatePhotofeedbackMutation(
            {
              variables: {
                id: commentID,
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
            updatePhotofeedbackMutation(
              {
                variables: {
                  id: commentID,
                  liked: newliked,
                  nlikes: counter,
                  usrliked: newLikedList
                }
              }
            )
        }
      } else { ///////////////// WORKING ON ARTICLES
        if (!liked) {
          const newLikedList = [...realLikedList, loggedUserID]
          const counter = newLikedList.length
          const newliked = true
          updateArticlefeedbackMutation(
            {
              variables: {
                id: commentID,
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
            updateArticlefeedbackMutation(
              {
                variables: {
                  id: commentID,
                  liked: newliked,
                  nlikes: counter,
                  usrliked: newLikedList
                }
              }
            )
        }
         
      }

    } else {
      navigate('/user')
    }
  }

  return (
    <DCframe >
      <Barframe>
        <Userframe>
          <MdPersonOutline size={size}/>
          <User>{username}</User>
          <DPost>{formatteDate}</DPost>
        </Userframe>

        <Tcomment>
          <ReactMarkdown >
            {comment}
          </ReactMarkdown>
        </Tcomment>
        <FavButton liked={liked} nlikes={nlikes} onClick={handleFavClick} />
      </Barframe>
      {(isAuth && visible) ? <MdOutlineDeleteForever size={size} onClick={handleDelete}/> : <p></p>}
    </DCframe>
  );
}


