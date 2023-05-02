import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked, nlikes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const plural = nlikes >= 2 ? 'likes!' : 'like!'

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> {nlikes} {plural}
    </Button>
  )
}
