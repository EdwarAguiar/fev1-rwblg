import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const CardWrapper = styled.div`
  background: white;
  margin: 30px auto;
  padding: 1px 20px 20px 20px;
  position: relative;

  @media all and (min-width: 1200px) {
    background: white;
    margin: 60px auto;
    padding: 1px 20px 20px 90px;
    position: relative;
  }
`

export const Title = styled.h2`
  margin-left: 35px;
`

export const RatingCard = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  background: #004ca4;
  font-size: 1.5em;
  width: 60px;
  height: 60px;
  text-align: center;
  color: white;

  @media all and (min-width: 1200px) {
    position: absolute;
    top: -20px;
    left: -20px;
    background: #004ca4;
    font-size: 3em;
    width: 90px;
    height: 90px;
    text-align: center;
    color: white;
  }
`

export const Card = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column-reverse; */
  align-items: center;
  justify-content: center;

  @media all and (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center; */
  }
`

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
  overflow: hidden;
  object-fit: cover;
  height: 255px;
  width: 255px;
  margin-top: 10px;

  @media all and (min-width: 1200px) {
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    overflow: hidden;
    object-fit: cover;
    height: 255px;
    width: 255px;
  }
`

export const Rating = styled.h2`
  margin-bottom: 0;
`
export const Parrafo = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  @media all and (min-width: 1200px) {
    width: 75%;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`
export const CatWrapper = styled.div`
  display: flex;
  margin-left: 35px;
`

export const Cat = styled.small`
  margin-right: 10px;
  color: #777;

  @media all and (min-width: 1200px) {
    margin-right: 10px;
    color: #777;
  }
`
export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: white;
  background-color: #004ca4;
`

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid #004ca4;
  background-color: #004ca4;
  width: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
`
