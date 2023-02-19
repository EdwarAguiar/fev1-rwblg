import * as React from 'react'
import { Link } from 'react-router-dom'
import { Svg, LogoWrapper } from './styles'

// width={695.319}
// height={122}
// viewBox='-97.659 14 695.319 122'
let xw = 695.319
let xh = 122
let vbox = '-5.659 24 500.319 122'

if (window.innerWidth <= 500) {
  xw = 280
  xh = 70
  vbox = '-5.659 24 500.319 122'
} else if (window.innerWidth > 500 && window.innerWidth <= 800) {
  xw = 300
  xh = 80
  vbox = '-5.659 24 500.319 122'
} else if (window.innerWidth > 800 && window.innerWidth < 1100) {
  xw = 320
  xh = 100
  vbox = '-5.659 24 500.319 122'
} else if (window.innerWidth >= 1100) {
  xw = 695.319
  xh = 122
  vbox = '-97.659 14 695.319 122'
}

export const Logo = (props) => (
  <Link to='/'>
    <LogoWrapper>
      <Svg
        xmlns='http://www.w3.org/2000/svg'
        width={xw}
        height={xh}
        preserveAspectRatio='xMidYMid'
        style={{
          background: '0 0'
        }}
        // viewBox='-5.659 24 500.319 122'
        viewBox = {vbox}
        {...props}
      >
      <defs>
        <linearGradient id='b' x1={0.5} x2={0.5} y1={0.2} y2={0.8}>
          <stop offset={0} stopColor='#004ca4' />
          <stop offset={1} stopColor='#9df' />
        </linearGradient>
        <filter id='a' width='300%' height='300%' x='-100%' y='-100%'>
          <feMorphology in='SourceAlpha' radius={1} result='alpha-erode' />
          <feConvolveMatrix
            divisor={1}
            in='alpha-erode'
            kernelMatrix='0 1 0 1 1 1 0 1 0'
            order='3,3'
            result='alpha-round'
          />
          <feMorphology
            in='alpha-round'
            operator='dilate'
            radius={3.5}
            result='dilate-shadow'
          />
          <feGaussianBlur in='dilate-shadow' result='shadow' stdDeviation={1.5} />
          <feFlood floodColor='#fff' result='flood-sticker' />
          <feComposite
            in='flood-sticker'
            in2='alpha-round'
            operator='in'
            result='comp-sticker'
          />
          <feMorphology
            in='comp-sticker'
            operator='dilate'
            radius={3}
            result='morph-sticker'
          />
          <feConvolveMatrix
            divisor={1}
            in='morph-sticker'
            kernelMatrix='0 1 0 1 1 1 0 1 0'
            order='3,3'
            result='sticker'
          />
          <feMerge>
            <feMergeNode in='shadow' />
            <feMergeNode in='sticker' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
        <g filter='url(#a)'>
          <path
            fill='url(#b)'
            stroke='#000'
            strokeWidth={2.5}
            d='M10.69-.32.64-14.72l12.67-13.06q2.05-2.04 4.61-2.04.96 0 1.89.57.93.58 1.31 1.67l-2.37 2.3-9.41 9.73 5.96 8q.76.96.76 2.01 0 1.06-.32 1.92-.32.87-1.02 1.57-1.41 1.6-4.03 1.73Zm39.68-9.54q1.21 1.54 1.21 4.04 0 3.45-2.56 5.28-2.56 1.82-6.59 1.82-2.3 0-5.82-.51Q29.7-.32 27.58-.32q-2.11 0-2.94.1-.83.09-2.18.22l7.88-42.24h27.58q0 3.9-1.89 5.95-1.89 2.05-5.6 2.05t-7.49-1.73l-1.98 11.2h11.39q0 3.39-1.66 5.28-1.67 1.89-4.45 1.89-2.78 0-4.51-.64t-1.92-.83L37.5-6.98q1.54.2 4.42.2 4.93 0 8.45-3.08Zm27.26-24.06q2.31 0 4.1.51.06-.25.19-.96l.32-1.98q.26-1.28.64-3.39l1.02-5.06 12.74-1.28-7.1 37.12q-.07.38-.07 1.02v1.03q0 1.41.71 2.46.7 1.06 1.85 1.06Q90.75-.38 86.85.9q-1.35.38-3.23.38-1.89 0-3.62-.99-1.73-.99-2.24-2.66Q76.74-.7 74.69.29q-2.05.99-5.03.99-2.97 0-5.44-.77-2.46-.77-4-2.43-2.81-3.26-2.81-10.69 0-9.6 5.63-15.42 5.63-5.89 14.59-5.89Zm-.45 3.84q-2.36 0-3.64 2.56-1.28 2.56-2.6 8.9-1.31 6.33-1.31 12.03 0 3.9 2.31 3.9 2.04 0 3.48-2.05 1.44-2.04 2.02-5.44l3.46-18.75q-1.35-1.15-3.72-1.15Zm68.04 19.39q-4.23 5.83-8.29 8.9-4.07 3.07-8.26 3.07-4.19 0-5.66-.83v-14.08q-3.65 9.73-10.18 13.5-2.37 1.41-4.61 1.41-4.28 0-6.14-.83-.45-14.66-.83-18.72-.39-4.07-.71-6.56-.64-4.99-2.81-7.04 2.75-2.05 6.59-2.05 7.42 0 8.45 9.22.25 2.17.25 4.48 0 3.45-.76 15.48 1.53-.7 3.16-3.23 1.64-2.53 2.98-5.98 3.01-8 3.01-14.91 0-1.09-.29-2.24-.29-1.16-.61-1.48 2.24-1.34 5.67-1.34 3.42 0 5.05 2.34 1.63 2.33 2.08 6.62.51 5.44.51 8.7 0 4.55-.44 11.27 3.2-2.31 5.82-9.86 2.62-7.55 2.62-12.93 0-2.36-.38-3.77 2.11-2.37 5.76-2.37 2.24 0 3.87 1.22 1.63 1.21 1.63 3.48 0 2.28-.67 4.71t-1.76 4.93q-2.11 4.99-5.05 8.89Zm12 8.77q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.27 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43Zm13.5-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.05 0 3.55-1.95t2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.92.51-1.66 1.67Zm43.94 9.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L206.34 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76ZM255.1 1.28q-8.19 0-8.96-11.65h-11q-1.28 2.95-2.18 5.51L231.3 0h-8.96l20.16-42.24h13.76l2.68 31.1q.64 6.72 3.2 8.71-1.85 3.71-7.04 3.71Zm-14.46-24.45-3.52 8.13h8.83l-.77-16.45v-1.73l-4.54 10.05Zm29.76-3.58q2.18-3.07 5.47-5.12 3.3-2.05 7.33-2.05t5.95 1.28l12.55-1.28-4.36 24.58Q295.1 3.2 290.37 8.13q-4.55 4.67-13.38 4.67-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.63 1.99-4.13 1.98-1.51 5.05-1.51 2.69 0 4.74 1.22 1.21.64 1.79 1.54-1.47 1.28-1.47 3.39 0 2.75 2.56 2.75 4.29 0 6.72-10.11.7-2.75 1.28-5.51-2.88 3.52-9.41 3.52-4.54 0-7.17-2.17-2.62-2.18-2.62-7.3 0-3.2 1.09-6.81 1.08-3.62 3.26-6.69Zm8.32 13.69q0 4.36 2.24 4.36 1.54 0 3.01-1.67 1.15-1.34 1.6-3.33l3.26-16.44q-.32-.07-.64-.2-.64-.25-1.47-.25-3.9 0-6.21 6.4-1.79 4.99-1.79 11.13Zm46.02 10.37q-3.08 3.97-10.69 3.97-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.19-2.88l4.29-22.78 12.99-1.28-4.67 24.7q-.26 1.41-.26 2.24 0 3.72 2.24 3.72 2.5 0 4.29-3.4.58-1.08.83-2.49l4.55-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.57 2.15.58 1.12 2.44 1.37-.39 1.54-1.73 2.56-2.82 2.18-5.86 2.18-3.04 0-4.83-1.09t-2.3-2.88Zm35.45-.83q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.9 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.62 3.78Zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34t4.83 1.34q1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3 0-4.89-1.28-1.89-1.28-1.89-3.78Zm17.7 39.62q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.27 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43Zm13.5-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.05 0 3.55-1.95t2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.92.51-1.66 1.67Zm43.94 9.92q2.3-4.1 2.3-8.26 0-2.75-1.98-2.75-1.54 0-3.14 2.62-1.66 2.63-2.18 6.02L417.54 0l-13.25 1.28 6.53-33.92 10.56-1.28-1.16 6.46q3.14-6.46 10.18-6.46 3.71 0 5.73 1.92 2.01 1.92 2.01 5.86 0 3.93-2.59 6.43-2.59 2.49-7.01 2.49-1.92 0-2.68-.76Zm21.82 27.52q0-1.16.58-2.82l20.92-57.79q1.16-.19 3.43-.19 2.27 0 3.65.6 1.37.61 1.37 2.47 0 1.6-1.02 4.54l-20.35 56.19q-.52.26-3.52.26-5.06 0-5.06-3.26Zm25.73-12.16 4.22-4.16 7.55-7.88-4.22-5.69q-.96-1.22-1.73-2.24-.77-1.03-.77-2.05 0-1.02.32-1.92.32-.9 1.03-1.6 1.47-1.6 4.03-1.73l10.05 14.4-12.67 13.06q-2.05 2.05-4.61 2.05-.96 0-1.89-.58-.93-.58-1.31-1.66Z'
            transform='translate(2.735 107.03)'
          />
        </g>
      </Svg>
    </LogoWrapper>
  </Link>
)
