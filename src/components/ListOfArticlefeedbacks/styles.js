import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const List = styled.ul`
  display: block;
  align-items: center; 
  justify-content: center;
  border: 1px solid #ccc;
  /* border-radius: 20px; */
  padding: 8px;
  margin-top: 10px;
  /* overflow: scroll; */
  width: 100%;
`

export const Item = styled.li`
  /* padding: 0 8px; */
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`
export const Link = styled(LinkRouter)`
  margin-left: 10px;
  text-decoration: none;
  color: #004ca4;
  font-size: 0.1em;
`
