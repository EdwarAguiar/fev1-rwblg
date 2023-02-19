import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

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
  width: auto;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const ArticleWrapper = styled.div`
  background: white;
  margin: 60px auto;
  padding: 1px 20px 20px 90px;
  position: relative;
`
export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 10px;
`
export const RatingCard = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  /* background: #8e2ad6; */
  background: #004ca4;
  font-size: 3em;
  width: 90px;
  height: 90px;
  text-align: center;
  color: white;
`
export const Rating = styled.h2`
  margin-bottom: 0;
`
export const Parrafo = styled.p`
  margin-top: 15px;
  width: 100%;
  margin-bottom: 15px;
`
export const Cat = styled.small`
  margin-right: 10px;
  color: #777;
`

export const ButtonWrapper = styled.div`
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 20px;
`

export const ArticleButton = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: center;
  /* border: 1px solid #8e2ad6; */
  border: 1px solid #004ca4; 
  background-color: #004ca4;
  height: auto;
  width: 100px;
  padding: 5px;
`
export const Link = styled(LinkRouter)`
  text-decoration: none;
  color: white;
  background-color: #004ca4;
  /* color: black; */
  /* color: #8e2ad6; */
  /* margin-top: 20px; */
`
export const AutorWrapper = styled.div`
  display: flex;
  border-top: 1px solid #cdd2da;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: flex-end;
`
