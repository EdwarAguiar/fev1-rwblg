import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteHeader } from '../../components/SiteHeader'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Homepage } from '../../pages/Homepage'
import { Category } from '../../pages/Category'
import { ArticleDetails } from '../../pages/ArticleDetails'
import { Notfound } from '../../pages/Notfound'

export const App = () => (
  <div>
    <BrowserRouter>
      <GlobalStyle />
      <SiteHeader />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/details/:id' element={<ArticleDetails />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  </div>
)
