import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
/* Mobile Version */
@media all and (max-width: 500px) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  height: 50px;
  left: 0;
  right:0;
  margin: 0 auto;
  width: 100%;
  min-width: 375px;
  max-width: 500px;
  position: fixed;
  z-index: 1000;
}

@media all and (min-width: 501px) {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  height: 50px;
  left: 0;
  right:0;
  margin: 0 auto;
  width: 100%;
  min-width: 500px;
  max-width: 1200px;
  position: fixed;
  z-index: 1000;
}
`

export const Link = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;
  &.selected{
    color: #000;
    border-top: 3px solid #000;
    background-color: #e0e0e0;
    font-weight: bold;
    &:after{
    ${fadeIn({ time: '0.5s' })}
      /* content: '·'; */
      /* position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height:20px; */
    }
  }
`

export const NavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  border-top: 0px;

`
