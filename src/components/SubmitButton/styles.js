import styled from 'styled-components'

export const Button = styled.button`
background: #004ca4;
border-radius: 3px;
color: #fff;
height: 32px;
display: block;
width: 100%;
text-align: center;
&[disabled] {
  opacity: .3;
}
`
