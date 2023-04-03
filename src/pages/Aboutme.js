import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { AppContext } from '../context/AppContex'
import { useQuery, gql } from '@apollo/client'
import { Helmet } from 'react-helmet'
import { InfinitySpin } from  'react-loader-spinner'
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
  
  //if (loading) return isSP ? <p>Cargando...!</p> : <p>Loading...!</p>
  if (loading) return <InfinitySpin width="200" color="#004ca4" /> 
  if (error) return isSP ? <p>Error - Algo salio mal...!</p> : <p>Oops! Error - Something went wrong!</p>

  const SPL1 = data.aboutme.data.attributes.title
  const SPL2 = data.aboutme.data.attributes.body
  // const IMAGE = BASEURL + data?.aboutme?.data?.attributes?.art?.data?.attributes?.url
  const IMAGE = data?.aboutme?.data?.attributes?.art?.data?.attributes?.url

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
