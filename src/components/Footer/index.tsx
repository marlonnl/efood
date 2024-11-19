import Logo from '../Logo'
import { Disclaimer, FooterContainer, SocialList } from './styles'

import igLogo from '../../assets/images/ig.png'
import fbLogo from '../../assets/images/fb.png'
import twLogo from '../../assets/images/twt.png'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Logo />
      <SocialList>
        <li>
          <a href="">
            <img src={igLogo} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={fbLogo} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="">
            <img src={twLogo} alt="Twitter" />
          </a>
        </li>
      </SocialList>

      <Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Disclaimer>
    </div>
  </FooterContainer>
)

export default Footer
