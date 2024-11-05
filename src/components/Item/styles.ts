import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.coral};
  padding: 8px;
  color: ${colors.footerBg};

  > img {
    width: 304px;
    height: 167px;
  }
`

export const ItemName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding: 8px 0;
`

export const ItemDescription = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const AddToCartBtn = styled.button`
  border: none;
  outline: none;
  color: ${colors.coral};
  background-color: ${colors.footerBg};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 0;
  width: 100%;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${colors.coral};
  display: flex;
  flex-direction: column;
  column-gap: 24px;
  color: ${colors.white};

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  header {
    display: flex;
    justify-content: right;
    padding: 16px;

    img {
      cursor: pointer;
    }
  }
`

export const ModalInfo = styled.div`
  display: flex;
  column-gap: 24px;
  padding: 0 32px 32px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 280px;
    max-height: 280px;
  }
`

export const ModalBtn = styled.button`
  border: none;
  outline: none;
  color: ${colors.coral};
  background-color: ${colors.footerBg};
  font-weight: bold;
  font-size: 14px;
  padding: 4px 8px;
  margin-top: 16px;
  cursor: pointer;
`
