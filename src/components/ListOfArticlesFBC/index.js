import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { ArticleCard } from '../ArticleCard'
import { List, Item } from './styles'

export const ListOfArticlesFBC = () => {
  const { id } = useParams()
  const { loading, error, data } = useFetch(`http://localhost:1337/api/categories/${id}?populate=*`)

  console.log("La Data FBC", data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    // <List>
    //   {
    //     data.data.attributes.reviews.data.map(article => <Item key={data.data.attributes.reviews.data.id}> <ArticleCard
    //       id={data.data.attributes.reviews.data.id}
    //       title={article.attributes.tittle}
    //       rating={article.attributes.rating}
    //       body={article.attributes.body}
    //       picture={article.attributes.image.data.attributes.url}
    //       categories={article.attributes.categories}
    //     />
    //     </Item>)
    //   }
    // </List>
    <h2>Testing</h2>
  )
}
