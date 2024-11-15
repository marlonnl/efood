import styled from 'styled-components'
import { colors } from '../../styles/colors'
import lixeira from '../../assets/images/lixeira.png'

import { ButtonContainer } from '../../components/Button/styles'

type MaxWidth = {
  maxWidth?: string
}

export const SideTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
  color: ${colors.footerBg};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;

  &.margin-top {
    margin-top: 24px;
  }
`

export const InputGroup = styled.div<MaxWidth>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    margin-bottom: 8px;
    display: block;
  }

  input {
    padding: 8px;
    background-color: ${colors.footerBg};
    border: none;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }

  p {
    font-size: 16px;
    color: ${colors.footerBg};
    margin-bottom: 16px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  z-index: 1;
  background-color: ${colors.coral};
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0 8px;

  button {
    color: ${colors.coral};
    background-color: ${colors.footerBg};
    border: none;
    width: 100%;
    padding: 4px 0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`

export const CartItem = styled.div`
  background-color: ${colors.footerBg};
  color: ${colors.coral};
  padding: 8px;
  display: flex;
  column-gap: 8px;
  margin-bottom: 16px;
  position: relative;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  button {
    background-image: url(${lixeira});
    background-color: transparent;
    position: absolute;
    width: 16px;
    height: 16px;
    border: none;
    bottom: 8px;
    right: 8px;
  }
`

export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.footerBg};
  margin-bottom: 16px;
`
