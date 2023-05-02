import React, { useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { AppContext } from '../../context/AppContex'
import { Title, FilterTitle, Categories, Link, Header } from './styles'
import { InfinitySpin } from  'react-loader-spinner'

export const SiteHeader = () => {
  const { isSP } = useContext(AppContext)
  const { loading, error, data } = useFetch('https://bev4-strapi.onrender.com/api/categories')

  const filter = isSP ? "Filtrar Artículos por Categoría:" : "Filter Articles by Category:"

  // console.log("NIVEL SiteHeader Data", data)

  // if (loading) return <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" /> 
  if (error) return <p>Oops! Error - Something went wrong!</p>

  return (
    <Header>
      <Link to='/'><Title>TIRAMUTO Blog</Title></Link>
      <FilterTitle>
        <span>{filter}</span>
      </FilterTitle>
      <Categories>
        {data.data.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
      </Categories>
    </Header>
  )
}
