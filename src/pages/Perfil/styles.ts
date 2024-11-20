import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { breakpoints } from '../../styles'

export const MenuStyle = styled.section`
  background-color: ${colors.bg};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 56px 0 120px;
  height: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
