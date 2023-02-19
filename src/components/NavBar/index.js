import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { Link, Nav, NavIcon } from './styles'
import { MdHome, MdPerson, MdFavoriteBorder, MdPersonOutline, MdArticle, MdCameraAlt, MdOutlineEngineering } from 'react-icons/md'
import { FiUserCheck } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'

const SIZE = '32px'

export const NavBar = () => {
  const { isSP } = useContext(AppContext)
  const { pathname } = useLocation()
  const LGHome = isSP ? 'Inicio' : 'Home'
  const LGPhotos = isSP ? 'Fotos' : 'Photos'
  const LGUser = isSP ? 'Usuario' : 'User'
  const LGAboutme = isSP ? 'Sobre Mi' : 'About Me'
  return (
    <Nav>
      <Link to='/' className={pathname === '/' ? 'selected' : ''}>
        <NavIcon>
          <MdHome size={SIZE} /> {LGHome}
        </NavIcon>
      </Link>
      <Link to='/blog' className={pathname === '/blog' ? 'selected' : ''}>
        <NavIcon>
          <MdArticle size={SIZE} /> Blog
        </NavIcon>
      </Link>
      <Link to='/aboutme' className={pathname === '/aboutme' ? 'selected' : ''}>
        <NavIcon>
          <MdPerson size={SIZE} /> {LGAboutme}
        </NavIcon>
      </Link>
      <Link to='/photos' className={pathname === '/photos' ? 'selected' : ''}>
        <NavIcon>
          <MdCameraAlt size={SIZE} /> {LGPhotos}
        </NavIcon>
      </Link>
      {/* <Link to='/favs' className={pathname === '/favs' ? 'selected' : ''}><MdFavoriteBorder size={SIZE} /></Link> */}
      <Link to='/user' className={pathname === '/user' ? 'selected' : ''}>
        <NavIcon>
          <MdPersonOutline size={SIZE} /> {LGUser}
        </NavIcon>
      </Link>
    </Nav>
  )
}
