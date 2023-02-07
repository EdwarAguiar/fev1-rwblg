import React, { useContext, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppContext } from '../../context/AppContex'
import { GlobalStyle } from '../../styles/GlobalStyles'
import { Logo } from '../../components/Logo'
import { NavBar } from '../../components/NavBar'

// import { Homepage } from '../../pages/Homepage'
// import { Blog } from '../../pages/Blog'
// import { Category } from '../../pages/Category'
// import { ArticleDetails } from '../../pages/ArticleDetails'
// import { Photopage } from '../../pages/Photopage'
// import { PhotoDetails } from '../../pages/PhotoDetails'
// import { PhotosBCpage } from '../../pages/PhotosBCpage'
// import { Favs } from '../../pages/Favs'
// import { User } from '../../pages/User'
// import { NotRegisteredUser } from '../../pages/NotregisteredUser'
// import { Notfound } from '../../pages/Notfound'

const Homepage = React.lazy(() => import('../../pages/Homepage'))
const Blog = React.lazy(() => import('../../pages/Blog'))
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
    </Suspense>

  )
}
