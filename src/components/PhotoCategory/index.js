import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
const DEFAULT_NAME = 'Todos'
// const BASEURL = 'http://localhost:1337'
const BASEURL = 'https://bev4-strapi.onrender.com/graphql'

export const PhotoCategory = ({ src = DEFAULT_IMAGE, path = '#', name }) => (
  <>
    <Link to={path}>
      {/* <Image src={BASEURL + src} /> */}
      <Image src={src} />
      <p>{name}</p>
    </Link>
  </>
)
