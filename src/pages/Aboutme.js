import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { AppContext } from '../context/AppContex'
import { useQuery, gql } from '@apollo/client'
import { Helmet } from 'react-helmet'
import { FrameAboutme, MsgWrapper, Msg1, Msg2, Img, ImgWrapper } from '../styles/styles_aboutme'
import { config } from '../config/config'

const ABOUTME_SP = gql`
query GetAboutme {
  aboutme(locale: "es-VE") {
    data{
      id,
      attributes{
        title,
        body,
        art{
          data{
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

const ABOUTME_EN = gql`
query GetAboutme {
  aboutme(locale: "en") {
    data{
      id,
      attributes{
        title,
        body,
        art{
          data{
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

const AboutmeComponent = () => {
  const { isSP } = useContext(AppContext)
  const { loading, error, data } = isSP ? useQuery(ABOUTME_SP) : useQuery(ABOUTME_EN)
  
  if (loading) return isSP ? <p>Cargando...!</p> : <p>Loading...!</p>
  if (error) return isSP ? <p>Error - Algo salio mal...!</p> : <p>Oops! Error - Something went wrong!</p>

   // console.log('La Data:', data)

  const SPL1 = data.aboutme.data.attributes.title
  const SPL2 = data.aboutme.data.attributes.body
  const IMAGE = BASEURL + data?.aboutme?.data?.attributes?.art?.data?.attributes?.url

  // const DEFAULT_IMAGE = 'http://localhost:1337/uploads/Edwar_Aguiar_d7166d44ec.png'
  // const DEFAULT_IMAGE = 'http://localhost:1337/uploads/art_mobiledesktop_1500x1075_856d5141ca.png'

  return (
    <FrameAboutme>
      <Helmet>
        <title> About Me - Edwar Aguiar</title>
        <meta name='description' content='Seccion Sobre Mi - Pagina web de referencia y trayectoria de Edwar Aguiar' />
      </Helmet>

      <ImgWrapper>
        <Img src={IMAGE} alt='About me Art' />
      </ImgWrapper>
      <MsgWrapper>
        <Msg1>{SPL1}</Msg1>
        {/* <Msg2>{SPL2}</Msg2> */}
        <ReactMarkdown escapeHtml={false}>
          {SPL2}
        </ReactMarkdown>
      </MsgWrapper>
    </FrameAboutme>
  )
}
const Aboutme = React.memo(AboutmeComponent)
export default Aboutme
