import React from 'react'
// import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import { Title, Categories, Link } from './styles'

export const SiteHeader = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/api/categories')

  // console.log("NIVEL SiteHeader Data", data)

  if (loading) return <p>Loading...!</p>
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <div>
      <Link to='/'><Title>TIRAMUTO Blog</Title></Link>
      <Categories>
        <span>Filter Reviews by Categroy:</span>
        {data.data.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
      </Categories>
    </div>
  )
}
