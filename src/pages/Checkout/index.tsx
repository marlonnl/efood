import { useState } from 'react'
import Button from '../../components/Button'
import { CartContainer, Overlay, Sidebar } from '../../components/Cart/styles'
import { CartItem, InputGroup, Row, SideTitle, Subtotal } from './styles'
import { open, close, remove } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { priceFormat } from '../../components/Item'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [isCartOpen, setIsCartOpen] = useState(true)
  const [isDeliveryOpen, setIsDeliveryOpen] = useState(false)
  const [isPayementOpen, setIsPayementOpen] = useState(false)
  const [isFinalized, setIsFinalized] = useState(false)

  const closeCart = () => {
    setIsCartOpen(true)
    setIsDeliveryOpen(false)
    setIsPayementOpen(false)
    setIsFinalized(false)
    dispatch(close())
  }

  const sumCart = () => {
    return items.reduce((acc, actualPrice) => {
      return (acc += actualPrice.preco)
    }, 0)
  }

  const goBackToCart = () => {
    setIsCartOpen(true)
    setIsDeliveryOpen(false)
    setIsPayementOpen(false)
    setIsFinalized(false)
  }

  const goDelivery = () => {
    setIsCartOpen(false)
    setIsDeliveryOpen(true)
    setIsPayementOpen(false)
    setIsFinalized(false)
  }

  const goToPayement = () => {
    setIsCartOpen(false)
    setIsDeliveryOpen(false)
    setIsPayementOpen(true)
    setIsFinalized(false)
  }

  const goToFinal = () => {
    setIsCartOpen(false)
    setIsDeliveryOpen(false)
    setIsPayementOpen(false)
    setIsFinalized(true)
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      addressNumber: '',
      other: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(4, 'O nome precisa ter no mínimo 4 caracteres.')
        .required(),
      address: Yup.string().required('O endereço é obrigatório'),
      city: Yup.string().required(),
      cep: Yup.string().min(8, '').max(8, '').required(),
      addressNumber: Yup.string().required(),
      other: Yup.string()
    }),
    onSubmit: (values) => {
      console.log('oi')
    }
  })

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
                    onClick={goToPayement}
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

        {isPayementOpen && (
          <Sidebar>
            <SideTitle>Pagamento - Valor a pagar R$ 0,00</SideTitle>
            <form>
              <Row>
                <InputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input type="text" name="cardName" id="cardName" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input type="text" name="cardNumber" id="cardNumber" />
                </InputGroup>
                <InputGroup maxWidth="88px">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" name="cvv" id="cvv" />
                </InputGroup>
              </Row>
              <Row>
                <InputGroup>
                  <label htmlFor="expMonth">Mês de vencimento</label>
                  <input type="text" name="expMonth" id="expMonth" />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expYear">Ano de vencimento</label>
                  <input type="text" name="expYear" id="expYear" />
                </InputGroup>
              </Row>
              <Row className="margin-top">
                <InputGroup>
                  <Button
                    variant="secondary"
                    title="Finalizar o pagamento"
                    type="button"
                    onClick={goToFinal}
                  >
                    Finalizar pagamento
                  </Button>
                </InputGroup>
              </Row>
              <Button
                variant="secondary"
                title="Voltar para a edição do endereço"
                type="button"
                onClick={goDelivery}
              >
                Voltar para a edição do endereço
              </Button>
            </form>
          </Sidebar>
        )}

        {isFinalized && (
          <Sidebar>
            <SideTitle>Pedido realizado - ORDER_ID</SideTitle>
            <Row>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </Row>
          </Sidebar>
        )}
      </CartContainer>
    </>
  )
}

export default Checkout
