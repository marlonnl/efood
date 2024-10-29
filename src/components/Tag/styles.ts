import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { Link } from 'react-router-dom'

export const TagContainer = styled.div`
  background-color: ${colors.coral};
  color: ${colors.footerBg};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 12px;
`

export const SaibaMais = styled(Link)`
  background-color: ${colors.coral};
  color: ${colors.footerBg};
  font-size: 14px;
  font-weight: bold;
  outline: none;
  border: none;
  padding: 4px 6px;
  text-decoration: none;
  cursor: pointer;
`
