import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Article = styled.article`
  @media all and (max-width: 500px) {
    width: 100%;
    min-width: 375px;
    max-width: 490px; 
    min-height: 200px;
    /* border: 1px solid black; */
  }
  margin-bottom: 10px;
`
