import React from 'react'
import { ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
const BASEURL = 'http://localhost:1337'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE, description }) => {
  return (
    <article>
      <a href={`/photodetails/${id}`}>
        <ImgWrapper>
          <Img src={BASEURL + src} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size='32px' /> {likes} likes!
      </Button>
      <ReactMarkdown escapeHtml={false}>
        {description}
      </ReactMarkdown>
    </article>
  )
}
