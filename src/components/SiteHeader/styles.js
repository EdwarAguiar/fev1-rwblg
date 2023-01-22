import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Title = styled.h1`
  font-size: 1.5em;
  /* color: #8e2ad6; */
  color: #004ca4;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  text-decoration: none;
`
export const Categories = styled.nav`
  text-align: right;
`

export const Link = styled(LinkRouter)`
  margin-left: 10px;
  text-decoration: none;
  /* color: #8e2ad6; */
  color: #004ca4;
`
