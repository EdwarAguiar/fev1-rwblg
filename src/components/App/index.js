import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContext } from '../../context/AppContex'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../../components/Logo'
import { NavBar } from '../../components/NavBar'
import { Language } from '../../components/Language'

const Homepage = React.lazy(() => import('../../pages/Homepage'))
const Blog = React.lazy(() => import('../../pages/Blog'))
const Aboutme = React.lazy(() => import('../../pages/Aboutme'))
const Category = React.lazy(() => import('../../pages/Category'))
const ArticleDetails = React.lazy(() => import('../../pages/ArticleDetails'))
const Photopage = React.lazy(() => import('./../../pages/Photopage'))
const PhotoDetails = React.lazy(() => import('../../pages/PhotoDetails'))
const PhotosBCpage = React.lazy(() => import('../../pages/PhotosBCpage'))
const User = React.lazy(() => import('../../pages/User'))
const NotRegisteredUser = React.lazy(() => import('../../pages/NotregisteredUser'))
const Notfound = React.lazy(() => import('../../pages/Notfound'))

export const App = () => {
  const { isAuth } = useContext(AppContext)

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <GlobalStyle />
        <Language />
        {/* <Logo /> */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/aboutme' element={<Aboutme />} />
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
    </Suspense>

  )
}
