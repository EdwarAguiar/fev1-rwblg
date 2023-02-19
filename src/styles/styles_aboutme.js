import styled from 'styled-components'
import { fadeIn } from './animation'

export const FrameAboutme = styled.div`

@media all and (max-width: 500px) {
  width: 100%;
  max-width: 500px;
  padding-left: 10px;
  padding-right: 10px;
}

@media all and (max-width: 600px) {
  width: 100%;
  max-width: 500px;
  padding-left: 10px;
  padding-right: 10px;
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
  max-width: 1200px;
  display: flex;
  padding-top: 100px;
}
`

export const MsgWrapper = styled.div`
  @media all and (max-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-bottom: 60px;
 }


  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const Msg1 = styled.h1`
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

export const Msg2 = styled.p`
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
export const ImgWrapper = styled.div`
  /* @media all and (max-width: 500px) {
  width: 100%;
  display: grid;
  justify-content: center;
  overflow: hidden;
 } */

 @media all and (max-width: 1100px) {
  width: 100%;
  display: grid;
  justify-content: center;
  overflow: hidden;
 }

  display: grid;
  justify-content: center;
  overflow: hidden;
  width: 50%;
`

export const Img = styled.img`
  @media all and (max-width: 600px) {
    ${fadeIn()}
    width: 350px;
    height: 350px;

 }

  ${fadeIn()}
  width: 350px;
  height: 350px;
`
