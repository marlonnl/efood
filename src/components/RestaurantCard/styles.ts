import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  color: ${colors.coral};
  position: relative;

  > img {
    width: 100%;
    max-height: 315px;
    height: 100%;
    object-fit: cover;
  }
`

export const CardContainer = styled.div`
  margin-top: -4px;
  padding: 8px 8px 12px 8px;
  border-bottom: 1px solid ${colors.coral};
  border-left: 1px solid ${colors.coral};
  border-right: 1px solid ${colors.coral};
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  column-gap: 8px;
`

export const Nome = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Nota = styled.div`
  font-size: 18px;
  font-weight: bold;

  display: flex;
  align-items: center;
  column-gap: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0;
`
