import React from 'react'
import { Helmet } from 'react-helmet'
import { ListOfArticles } from '../components/ListOfArticles'
import { SiteHeader } from '../components/SiteHeader'

export const Blog = () => {
  return (
    <>
      <Helmet>
        <title> Blog - Edwar Aguiar</title>
        <meta name='description' content='Blog - Articulos escritos por Edwar Aguiar en diferentes topicos de su interes' />
      </Helmet>
      <SiteHeader />
      <ListOfArticles />
    </>
  )
}
