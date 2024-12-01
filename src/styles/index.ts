import { createGlobalStyle } from 'styled-components'

import bgImg from '../assets/images/vector.png'
import { colors } from './colors'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      list-style-type: none;

      background-color: ${colors.bg};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.tablet}) {
      width: 90%;
    }
  }

  .vectorBg {
    background-image: url(${bgImg});
    background-size: cover;
  }
`
