import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'

import Logo from '../Logo'
import {
  CartLink,
  HeaderContainer,
  HeaderP,
  HeaderPRight,
  HeaderStyle
} from './styles'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderStyle>
      <div className="vectorBg">
        <div className="container">
          <HeaderContainer>
            <HeaderP>Restaurantes</HeaderP>
            <h1>
              <Logo />
            </h1>
            <HeaderPRight>
              <CartLink role="button" onClick={openCart}>
                {items.length} produto(s) no carrinho
              </CartLink>
            </HeaderPRight>
          </HeaderContainer>
        </div>
      </div>
    </HeaderStyle>
  )
}

export default Header
