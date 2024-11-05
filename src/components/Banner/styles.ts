import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const BannerStyle = styled.div`
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`

export const RestaurantInfo = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 32px;

  font-size: 32px;
  color: ${colors.white};
`

export const Cozinha = styled.p`
  font-weight: 100;
`

export const Nome = styled.h2`
  font-weight: bold;
`
