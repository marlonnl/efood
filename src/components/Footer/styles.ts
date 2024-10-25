import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const FooterContainer = styled.footer`
  background-color: ${colors.footerBg};
  padding: 40px 0;
  text-align: center;
`

export const SocialList = styled.ul`
  margin: 32px 0 80px;
  display: flex;
  justify-content: center;
  column-gap: 8px;
`

export const Disclaimer = styled.p`
  font-size: 10px;
  color: ${colors.coral};
  width: 480px;
  margin: 0 auto;
`
