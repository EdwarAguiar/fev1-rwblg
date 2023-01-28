import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Title = styled.h1`
  font-size: 1.5em;
  color: #004ca4;
  padding-bottom: 5px;
  border-bottom: 2px solid;
  text-decoration: none;

  @media all and (min-width: 1200px) {
    font-size: 1.5em;
    color: #004ca4;
    padding-bottom: 10px;
    border-bottom: 2px solid;
    text-decoration: none
  }
`
export const FilterTitle = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1em;
  
  @media all and (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    font-size: 1.2em;
  }
`

export const Categories = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8em;

  @media all and (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    font-size: 1em;
  }
`

export const Link = styled(LinkRouter)`
    margin-left: 5px;
    text-decoration: none;
    color: #004ca4;

  @media all and (min-width: 1200px) {
    margin-left: 10px;
    text-decoration: none;
    color: #004ca4;
  }
`
