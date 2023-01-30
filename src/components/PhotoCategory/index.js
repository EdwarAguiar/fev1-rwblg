import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
const DEFAULT_NAME = 'Todos'
const BASEURL = 'http://localhost:1337'

export const PhotoCategory = ({ src = DEFAULT_IMAGE, path = '#', name }) => (
  <>
    <Link to={path}>
      <Image src={BASEURL + src} />
      <p>{name}</p>
    </Link>
  </>
)
