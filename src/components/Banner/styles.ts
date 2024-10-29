import styled from 'styled-components'
import { colors } from '../../styles/colors'
import bannerImg from '../../assets/images/banner.png'

export const BannerStyle = styled.div`
  background-image: url(${bannerImg});
  background-size: cover;
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
