import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 48px;
  margin: 80px 0 120px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
