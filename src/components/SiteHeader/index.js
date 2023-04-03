import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Title, FilterTitle, Categories, Link, Header } from './styles'
import { InfinitySpin } from  'react-loader-spinner'

export const SiteHeader = () => {
  // const { loading, error, data } = useFetch('http://localhost:1337/api/categories')
  const { loading, error, data } = useFetch('https://bev4-strapi.onrender.com/api/categories')


  // console.log("NIVEL SiteHeader Data", data)

  // if (loading) return <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" /> 
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <Header>
      <Link to='/'><Title>TIRAMUTO Blog</Title></Link>
      <FilterTitle>
        <span>Filter Articles by Categroy:</span>
      </FilterTitle>
      <Categories>
        {data.data.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
      </Categories>
    </Header>
  )
}
