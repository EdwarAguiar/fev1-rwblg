import React from 'react'

export const likedValidation = (username, likedList) => {
  if (likedList.length === 0) {
    return false
  }

  const likedUsernames = likedList.map(data => data.attributes.username)
  if (likedUsernames.includes(username)) {
    return true
  } else {
    return false
  }
}
