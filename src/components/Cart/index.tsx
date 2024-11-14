import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { remove, close } from '../../store/reducers/cart'

import { CartContainer, CartItem, Overlay, Sidebar, Subtotal } from './styles'
import { priceFormat } from '../Item'
import { useState } from 'react'
import Checkout from '../../pages/Checkout'
import Button from '../Button'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [showCheckout, setShowCheckout] = useState(false)

  const closeCart = () => {
    dispatch(close())
  }

  const sumCart = () => {
    return items.reduce((acc, actualPrice) => {
      return (acc += actualPrice.preco)
    }, 0)
  }

  const goCheckout = () => {
    setShowCheckout(true)
    closeCart()
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        {!showCheckout && <Overlay onClick={closeCart} />}
        <Sidebar>
          {items.length < 1 ? (
            <p>Não há ítens no seu carrinho.</p>
          ) : (
            items.map((item) => (
              <>
                <CartItem key={item.id}>
                  <img src={item.foto} alt="oi" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{priceFormat(item.preco)}</p>
                    <button
                      type="button"
                      onClick={() => dispatch(remove(item.id))}
                    />
                  </div>
                </CartItem>
              </>
            ))
          )}
          <Subtotal>
            <p>Valor total</p>
            <p>{priceFormat(sumCart())}</p>
          </Subtotal>
          <Button
            type="button"
            title="Prosseguir para a página de entrega"
            onClick={goCheckout}
          >
            Continuar com a entrega
          </Button>
        </Sidebar>
      </CartContainer>

      {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
    </>
  )
}

export default Cart
