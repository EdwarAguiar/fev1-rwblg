import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { Link, Nav } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline, MdArticle, MdCameraAlt } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

const SIZE = '16px'

export const NavBar = () => {
  const { isSP } = useContext(AppContext)
  const { pathname } = useLocation()
  const LGHome = isSP ? 'Inicio' : 'Home'
  const LGPhotos = isSP ? 'Fotos' : 'Photos'
  const LGUser = isSP ? 'Usuario' : 'User'
  return (
    <Nav>
      <Link to='/' className={pathname === '/' ? 'selected' : ''}><MdHome size={SIZE} /> {LGHome} </Link>
      <Link to='/blog' className={pathname === '/blog' ? 'selected' : ''}><MdArticle size={SIZE} /> Blog </Link>
      <Link to='/photos' className={pathname === '/photos' ? 'selected' : ''}><MdCameraAlt size={SIZE} /> {LGPhotos} </Link>
      {/* <Link to='/favs' className={pathname === '/favs' ? 'selected' : ''}><MdFavoriteBorder size={SIZE} /></Link> */}
      <Link to='/user' className={pathname === '/user' ? 'selected' : ''}><MdPersonOutline size={SIZE} /> {LGUser} </Link>
    </Nav>
  )
}
