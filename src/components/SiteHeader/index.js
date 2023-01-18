import React from 'react'
import { Link } from 'react-router-dom'

import { Title } from './styles'

export const SiteHeader = () => {
  return (
    <div>
      <Link to='/'><Title>TIRAMUTO Blog</Title></Link>
      <nav className="categories">
        <span>Filter Reviews by Categroy:</span>
          {data.categories.data.map(category => (
            <Link key={category.id} to={`/category/${category.id}`}>{category.attributes.name}</Link>
          ))}
      </nav>
    </div>
  )
}
