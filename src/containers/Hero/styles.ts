import styled from 'styled-components'

import { colors } from '../../styles/colors'

export const HeroContainer = styled.div`
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LogoStyle = styled.div`
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
