import React from 'react'
import { ListOfArticles } from '../components/ListOfArticles'
import { SiteHeader } from '../components/SiteHeader'

export const Homepage = () => {
  return (
    <>
      <SiteHeader />
      <ListOfArticles />
    </>
  )
}
