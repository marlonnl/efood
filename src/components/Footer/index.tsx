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
          <img src={igLogo} alt="Instagram" />
        </li>
        <li>
          <img src={fbLogo} alt="Facebook" />
        </li>
        <li>
          <img src={twLogo} alt="Twitter" />
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
