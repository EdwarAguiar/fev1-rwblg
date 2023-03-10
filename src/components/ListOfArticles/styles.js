import styled from 'styled-components'

export const List = styled.ul`
  display: block;
  overflow: scroll;
  width: 100%;
  min-width: 375px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
