import React from 'react'

export const removeElementFromList = (list, element) => {
  const index = list.indexOf(element)
  if (index > -1) {
    list.splice(index, 1)
  }
  return list
}
