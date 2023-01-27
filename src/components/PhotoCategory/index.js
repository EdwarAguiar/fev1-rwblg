import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'
const DEFAULT_NAME = 'Todos'
const BASEURL = 'http://localhost:1337'

export const PhotoCategory = ({ src, path, name }) => (
  <>
    <Image src={BASEURL + src} />
    <p>{name}</p>
  </>
  // <Anchor href={path}>

  // </Anchor>
)
