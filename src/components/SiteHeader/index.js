import React, { useContext } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { AppContext } from '../../context/AppContex'
import { useQuery, gql } from '@apollo/client'
import { Title, FilterTitle, Categories, Link, Header } from './styles'
import { InfinitySpin } from  'react-loader-spinner'


const CATEGORY_SP = gql`
query GetCategories{
  categories(locale: "es-VE") {
    data {
      id,
      attributes {
        name
      }
    }
  }
}
`
const CATEGORY_EN = gql`
query GetCategories{
  categories(locale: "en") {
    data {
      id,
      attributes {
        name
      }
    }
  }
}
`



export const SiteHeader = () => {
  const { isSP } = useContext(AppContext)
  const { loading, error, data } = isSP ? useQuery(CATEGORY_SP) : useQuery(CATEGORY_EN)

  const filter = isSP ? "Filtrar Artículos por Categoría:" : "Filter Articles by Category:"

  if (loading) return <InfinitySpin width="200" color='#004ca4' /> 
  if (error) return isSP ? <p>¡Ups! Error -¡Algo salió mal!</p> : <p>Oops! Error - Something went wrong!</p>

  return (
    <Header>
      <Link to='/'><Title>TIRAMUTO Blog</Title></Link>
      <FilterTitle>
        <span>{filter}</span>
      </FilterTitle>
      <Categories>
        {data.categories.data.map(category => (
          <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
        ))}
      </Categories>
    </Header>
  )
}
