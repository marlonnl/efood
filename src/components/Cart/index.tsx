import { CartContainer, CartItem, Overlay, Sidebar, Subtotal } from './styles'
import pizzaImg from '../../assets/images/item.png'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <CartItem>
        <img src={pizzaImg} alt="oi" />
        <div>
          <h3>Nome do item</h3>
          <p>R$ 60,90</p>
          <button type="button" />
        </div>
      </CartItem>
      <Subtotal>
        <p>Valor total</p>
        <p>R$ 0,00</p>
      </Subtotal>
      <button>Continuar com a entrega</button>
    </Sidebar>
  </CartContainer>
)

export default Cart
