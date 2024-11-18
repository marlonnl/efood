import { useEffect, useState } from 'react'
import Button from '../../components/Button'
import { CartContainer, Overlay, Sidebar } from '../../components/Cart/styles'
import { CartItem, InputGroup, Row, SideTitle, Subtotal } from './styles'
import { open, close, remove, clear } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { priceFormat } from '../../components/Item'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import InputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation()

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
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expMonth: '',
      expYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(4, 'O nome precisa ter no mínimo 4 caracteres.')
        .required(),
      address: Yup.string().required('O endereço é obrigatório'),
      city: Yup.string().required(),
      zipCode: Yup.string()
        .min(9, 'CEP inválido')
        .max(9, 'CEP inválido')
        .required(),
      addressNumber: Yup.string().required(),
      complement: Yup.string(),

      cardName: Yup.string()
        .min(4, 'O nome precisa ter no mínimo 4 caracteres')
        .required(),
      cardNumber: Yup.string()
        .min(19, 'Número do cartão inválido')
        .max(19, 'Número do cartão inválido')
        .required(),
      cvv: Yup.string().min(3).max(3).required(),
      expMonth: Yup.string().min(2).max(2).required(),
      expYear: Yup.string().min(4).max(4).required()
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.addressNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expMonth),
              year: Number(values.expYear)
            }
          }
        }
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    if (isSuccess) {
      goToFinal()
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />

        {isFinalized && isSuccess && data ? (
          <Sidebar>
            <SideTitle>Pedido realizado - {data?.orderId}</SideTitle>
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
        ) : (
          <>
            <>
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
            </>
            <>
              {isDeliveryOpen && (
                <Sidebar>
                  <SideTitle>Entrega</SideTitle>
                  <form>
                    <Row>
                      <InputGroup>
                        <label htmlFor="receiver">Quem irá receber</label>
                        <input
                          type="text"
                          name="receiver"
                          id="receiver"
                          value={form.values.receiver}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('receiver') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="address">Endereço</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          value={form.values.address}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('address') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="city">Cidade</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={form.values.city}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('city') ? 'error' : ''}
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="zipCode">CEP</label>
                        <InputMask
                          type="text"
                          name="zipCode"
                          id="zipCode"
                          value={form.values.zipCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask="99999-999"
                          className={
                            checkInputHasError('zipCode') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="addressNumber">Número</label>
                        <input
                          type="text"
                          name="addressNumber"
                          id="addressNumber"
                          value={form.values.addressNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('addressNumber') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="complement">
                          Complemento (opcional)
                        </label>
                        <input
                          type="text"
                          name="complement"
                          id="complement"
                          value={form.values.complement}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
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
            </>
            <>
              {isPayementOpen && (
                <Sidebar>
                  <SideTitle>
                    Pagamento - Valor a pagar {priceFormat(sumCart())}
                  </SideTitle>
                  <form onSubmit={form.handleSubmit}>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cardName">Nome no cartão</label>
                        <input
                          type="text"
                          name="cardName"
                          id="cardName"
                          value={form.values.cardName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardName') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                          mask="9999 9999 9999 9999"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="88px">
                        <label htmlFor="cvv">CVV</label>
                        <InputMask
                          type="text"
                          name="cvv"
                          id="cvv"
                          value={form.values.cvv}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cvv') ? 'error' : ''}
                          mask="999"
                        />
                      </InputGroup>
                    </Row>
                    <Row>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="expMonth">Mês de vencimento</label>
                        <InputMask
                          type="text"
                          name="expMonth"
                          id="expMonth"
                          value={form.values.expMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </InputGroup>
                      <InputGroup maxWidth="155px">
                        <label htmlFor="expYear">Ano de vencimento</label>
                        <InputMask
                          type="text"
                          name="expYear"
                          id="expYear"
                          value={form.values.expYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('expYear') ? 'error' : ''
                          }
                          mask="9999"
                        />
                      </InputGroup>
                    </Row>
                    <Row className="margin-top">
                      <InputGroup>
                        <Button
                          variant="secondary"
                          title="Finalizar o pagamento"
                          type="submit"
                          onClick={form.handleSubmit}
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
            </>
          </>
        )}
      </CartContainer>
    </>
  )
}

export default Checkout
