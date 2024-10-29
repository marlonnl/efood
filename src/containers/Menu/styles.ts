import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const MenuStyle = styled.section`
  background-color: ${colors.bg};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`
