import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { breakpoints } from '../../styles'

export const HeaderStyle = styled.header`
  .vectorBg {
    height: 186px;
    display: flex;
    align-items: center;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 18px;
  font-weight: bold;
  color: ${colors.coral};

  h1 {
    line-height: 0;
  }
`

export const HeaderP = styled.p`
  width: 200px;
`

export const HeaderPRight = styled.p`
  text-align: right;
`

export const CartLink = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
