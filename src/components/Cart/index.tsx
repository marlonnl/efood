import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

import { CartContainer, CartItem, Overlay, Sidebar, Subtotal } from './styles'
import { priceFormat } from '../Item'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const sumCart = () => {
    return items.reduce((acc, actualPrice) => {
      return (acc += actualPrice.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCart()} />
      <Sidebar>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.foto} alt="oi" />
            <div>
              <h3>{item.nome}</h3>
              <p>{priceFormat(item.preco)}</p>
              <button type="button" />
            </div>
          </CartItem>
        ))}
        <Subtotal>
          <p>Valor total</p>
          <p>{priceFormat(sumCart())}</p>
        </Subtotal>
        <button>Continuar com a entrega</button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
