import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContext } from '../../context/AppContex'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../../components/Logo'
import { NavBar } from '../../components/NavBar'

import { Homepage } from '../../pages/Homepage'
import { Blog } from '../../pages/Blog'
import { Category } from '../../pages/Category'
import { ArticleDetails } from '../../pages/ArticleDetails'
import { Photopage } from '../../pages/Photopage'
import { PhotoDetails } from '../../pages/PhotoDetails'
import { PhotosBCpage } from '../../pages/PhotosBCpage'
// import { Favs } from '../../pages/Favs'
import { User } from '../../pages/User'
import { NotRegisteredUser } from '../../pages/NotregisteredUser'
import { Notfound } from '../../pages/Notfound'

export const App = () => {
  const { isAuth } = useContext(AppContext)

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Logo />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/photos' element={<Photopage />} />
        <Route path='/photodetails/:id' element={<PhotoDetails />} />
        <Route path='/photocategories/:id' element={<PhotosBCpage />} />
        <Route path='/details/:id' element={<ArticleDetails />} />
        <Route path='/category/:id' element={<Category />} />
        {/* <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisteredUser />} /> */}
        <Route path='/user' element={isAuth ? <User /> : <NotRegisteredUser />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  )
}
