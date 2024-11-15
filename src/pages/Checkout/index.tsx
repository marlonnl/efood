import { useState } from 'react'
import Button from '../../components/Button'
import { CartContainer, Overlay, Sidebar } from '../../components/Cart/styles'
import { CartItem, InputGroup, Row, SideTitle, Subtotal } from './styles'
import { open, close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { priceFormat } from '../../components/Item'

type CheckoutPhase = {
  phase: 'cart' | 'delivery' | 'payement' | 'finalized'
}

// TODO
// usar o state para o carrinho
// usar CLASSES do CSS para mostrar/fechar o delivery/pagamento/finalizado

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false)
  const [isPayementOpen, setIsPayementOpen] = useState(false)

  const goBackToCart = () => {
    setIsCartOpen(true)
    setIsDeliveryOpen(false)
    setIsPayementOpen(false)
  }

  const closeCart = () => {
    setIsDeliveryOpen(false)
    setIsPayementOpen(false)
    dispatch(close())
  }

  const sumCart = () => {
    return items.reduce((acc, actualPrice) => {
      return (acc += actualPrice.preco)
    }, 0)
  }

  const goDelivery = () => {
    setIsCartOpen(false)
    setIsDeliveryOpen(true)
    setIsPayementOpen(false)
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        {isCartOpen && (
          <Sidebar>
            {items.map((item) => (
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
            ))}
            <Subtotal>
              <p>Valor total</p>
              <p>{priceFormat(sumCart())}</p>
            </Subtotal>
            <Button
              type="button"
              title="Prosseguir para a página de entrega"
              onClick={goDelivery}
            >
              Continuar com a entrega
            </Button>
          </Sidebar>
        )}

        {isDeliveryOpen && (
          <Sidebar>
            <SideTitle>Entrega</SideTitle>
            <form>
              <Row>
                <InputGroup>
                  <label htmlFor="receiver">Quem irá receber</label>
                  <input type="text" name="receiver" id="receiver" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input type="text" name="address" id="address" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input type="text" name="city" id="city" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup maxWidth="50%">
                  <label htmlFor="cep">CEP</label>
                  <input type="text" name="cep" id="cep" />
                </InputGroup>
                <InputGroup maxWidth="50%">
                  <label htmlFor="addressNumber">Número</label>
                  <input type="text" name="addressNumber" id="addressNumber" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="other">Complemento (opcional)</label>
                  <input type="text" name="other" id="other" />
                </InputGroup>
              </Row>
              <Row className="margin-top">
                <InputGroup>
                  <Button
                    title="Prosseguir para o pagamento"
                    type="button"
                    variant="secondary"
                  >
                    Continuar com o pagamento
                  </Button>
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <Button
                    title="Prosseguir para o pagamento"
                    type="button"
                    variant="secondary"
                    onClick={goBackToCart}
                  >
                    Voltar para o carrinho
                  </Button>
                </InputGroup>
              </Row>
            </form>
          </Sidebar>
        )}
      </CartContainer>
    </>
  )
}

export default Checkout
