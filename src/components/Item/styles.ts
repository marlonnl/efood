import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.coral};
  padding: 8px;
  color: ${colors.footerBg};
`

export const ItemName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`

export const ItemDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`
