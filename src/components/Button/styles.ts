import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button<Props>`
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.coral : colors.footerBg};
  color: ${(props) =>
    props.variant === 'primary' ? colors.footerBg : colors.coral};
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  font-weight: bold;
  font-size: 14px;
  padding: 4px 6px;
  background-color: ${colors.coral};
  color: ${colors.footerBg};
  text-decoration: none;
  cursor: pointer;
`
