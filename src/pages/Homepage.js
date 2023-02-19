import React, { useContext } from 'react'
import { AppContext } from './../context/AppContex'
import { useQuery, gql } from '@apollo/client'
import { Helmet } from 'react-helmet'
import { FrameHome, MsgWrapper, Msg1, Msg2, Msg3, Msg4, Img, ImgWrapper } from '../styles/styles_home'
import { config } from '../config/config'

const HOME_SP = gql`
query GetHome {
  home(locale: "es-VE") {
    data {
      id,
      attributes{
        Line1,
        Line2,
        Line3,
        Line4,
        art {
          data {
            id,
            attributes {
              url
            }
          }
        }       
      }
    }
  }
}
`

const HOME_EN = gql`
query GetHome {
  home(locale: "en") {
    data {
      id,
      attributes{
        Line1,
        Line2,
        Line3,
        Line4,
        art {
          data {
            id,
            attributes {
              url
            }
          }
        }       
      }
    }
  }
}
`

const BASEURL = config.backendUrl

const HomepageComponent = () => {
  const { isSP } = useContext(AppContext)
  const { loading, error, data } = isSP ? useQuery(HOME_SP) : useQuery(HOME_EN)

  if (loading) return isSP ? <p>Cargando...!</p> : <p>Loading...!</p>
  if (error) return isSP ? <p>Huy! Error - Algo salio mal...!</p> : <p>Oops! Error - Something went wrong!</p>

  // console.log('Home Data:', data)

  // const SPL1 = 'Brilla'
  // const SPL2 = 'brilla instensamente,'
  // const SPL3 = 'hasta que el Mundo,'
  // const SPL4 = 'se maraville con lo que ve...'

  const LINE1 = data.home.data.attributes.Line1
  const LINE2 = data.home.data.attributes.Line2
  const LINE3 = data.home.data.attributes.Line3
  const LINE4 = data.home.data.attributes.Line4
  const IMAGE = BASEURL + data?.home?.data?.attributes?.art?.data?.attributes?.url
  const DEFAULT_IMAGE = BASEURL + '/uploads/default_image_67dbbfc74a.png'
  // const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  // const DEFAULT_IMAGE = 'http://localhost:1337/uploads/Edwar_Aguiar_d7166d44ec.png'
  // const DEFAULT_IMAGE = 'http://localhost:1337/uploads/art_mobiledesktop_1500x1075_856d5141ca.png'

  return (
    <FrameHome>
      <Helmet>
        <title> Home - Edwar Aguiar</title>
        <meta name='description' content='Seccion Inicio - Pagina web de referencia y trayectoria de Edwar Aguiar' />
      </Helmet>
      <MsgWrapper>
        <Msg1>{LINE1 === null || LINE1 === '' ? 'Backend: No Info Added' : LINE1}</Msg1>
        <Msg2>{LINE2 === null || LINE2 === '' ? 'Backend: No Info Added' : LINE2}</Msg2>
        <ImgWrapper>
          <Img src={IMAGE === null || IMAGE === undefined ? DEFAULT_IMAGE : IMAGE} alt='homepage Art' />
        </ImgWrapper>
        <Msg3>{LINE3 === null || LINE3 === '' ? 'Backend: No Info Added' : LINE3}</Msg3>
        <Msg4>{LINE4 === null || LINE4 === '' ? 'Backend: No Info Added' : LINE4}</Msg4>
      </MsgWrapper>
    </FrameHome>
  )
}
const Homepage = React.memo(HomepageComponent)
export default Homepage
