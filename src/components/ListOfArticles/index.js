import React from 'react'
import { ArticleCard } from '../ArticleCard'
import { useFetch } from '../../hooks/useFetch'
// import { useParams } from 'react-router-dom'
import { List, Item } from './styles'

export const ListOfArticles = () => {
  // const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/reviews?populate=*')

  console.log("La Data", data)


  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <List>
      {
        data.data.map(article => <Item key={data.data.id}> <ArticleCard
          id={article.id}
          title={article.attributes.title}
          rating={article.attributes.rating}
          body={article.attributes.body}
          picture={article.attributes.image.data.attributes.url}
          categories={article.attributes.categories}
        />
        </Item>)
      }
    </List>
  )
}
