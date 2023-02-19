import styled from 'styled-components'

export const FrameLG = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  /* border: 1px solid black;  */
`

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: space-evenly;
padding-bottom: 5px;
margin-left: 5px;
margin-right: 5px;
&.selected{
    color: #000;
    font-weight: bold;
    border-bottom: 2px solid;
}
`
