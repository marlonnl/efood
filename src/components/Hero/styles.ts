import styled from 'styled-components'

import bgImg from '../../assets/images/vector.png'
import { colors } from '../../styles/colors'

export const HeroStyle = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
`

export const HeroContainer = styled.div`
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Logo = styled.div`
  text-align: center;
  margin-top: 64px;
`

export const Description = styled.p`
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${colors.coral};
`
