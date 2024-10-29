import Logo from '../Logo'
import { HeaderContainer, HeaderP, HeaderPRight, HeaderStyle } from './styles'

const Header = () => (
  <HeaderStyle>
    <div className="vectorBg">
      <div className="container">
        <HeaderContainer>
          <HeaderP>Restaurantes</HeaderP>
          <Logo />
          <HeaderPRight>0 produto(s) no carrinho</HeaderPRight>
        </HeaderContainer>
      </div>
    </div>
  </HeaderStyle>
)

export default Header
