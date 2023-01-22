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
  /* border-radius: 50%; */
  overflow: hidden;
  object-fit: cover;
  /* height: 255px; */
  height: 255px;
  width: 255px;
  /* transform: scale(0.70); */
`
export const CardWrapper = styled.div`
  background: white;
  margin: 60px auto;
  padding: 1px 20px 20px 90px;
  position: relative;

`
export const Card = styled.div`
  display: flex;
  width: 100%;
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
export const Parrafo = styled.div`
  width: 75%;
`
export const Cat = styled.small`
  margin-right: 10px;
  color: #777;
`
export const Link = styled(LinkRouter)`
  text-decoration: none;
  /* color: #8e2ad6; */
  /* color: black; */
  color: white;
  background-color: #004ca4;
`

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  /* border: 1px solid #8e2ad6; */
  border: 1px solid #004ca4;
  background-color: #004ca4;
  width: 120px;
  padding-top: 5px;
  padding-bottom: 5px;
`
