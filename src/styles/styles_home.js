import styled from 'styled-components'
import { fadeIn } from '../styles/animation'

export const FrameHome = styled.div`

@media all and (max-width: 500px) {
  width: 100%;
  max-width: 500px;

 }

 @media all and (min-width: 900px) {
  width: 100%;
  max-width: 900px;
 }

 @media all and (min-width: 1000px) {
  width: 100%;
  max-width: 1000px;
 }

 @media all and (min-width: 1200px) {
  width: 100%;
  max-width: 625px;
  padding-bottom: 60px;
 }
`

export const MsgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Msg1 = styled.h1`
@media all and (max-width: 500px) {
  font-family: system-ui;
  color: black;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.020em;
  background-image: linear-gradient(
      180deg,
      #9df,
      #004ca4,
  );
  background-clip: text;
  -webkit-background-clip: text;
}
`

export const Msg2 = styled.h1`
padding-bottom: 10px;
@media all and (max-width: 500px) {
  font-family: system-ui;
  color: black;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.020em;
  background-image: linear-gradient(
      180deg,
      #9df,
      #004ca4,
  );
  background-clip: text;
  -webkit-background-clip: text;
}
`
export const Msg3 = styled.h1`
padding-top: 10px;
@media all and (max-width: 500px) {
  font-family: system-ui;
  color: black;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.020em;
  background-image: linear-gradient(
      180deg,
      #9df,
      #004ca4,
  );
  background-clip: text;
  -webkit-background-clip: text;
}
`

export const Msg4 = styled.h1`
@media all and (max-width: 500px) {
  font-family: system-ui;
  color: black;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.020em;
  background-image: linear-gradient(
      180deg,
      #9df,
      #004ca4,
  );
  background-clip: text;
  -webkit-background-clip: text;
}
`


export const ImgWrapper = styled.div`
  /* border-radius: 10px; */
  /* border-radius: 50%;
  border: 5px solid white; */
  display: grid;
  justify-content: center;
  /* height: 0; */
  overflow: hidden;
  /* padding: 56.25% 0 0 0; */
  /* position: relative; */
  width: 100%;
`

export const Img = styled.img`
  @media all and (max-width: 600px) {
    ${fadeIn()}
    width: 350px;
    height: 350px;

 }

  ${fadeIn()}
  width: 550px;
  height: 550px;
`
