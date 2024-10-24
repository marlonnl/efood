import imageLogo from '../../assets/images/logo.png'
import { Description, HeroContainer, HeroStyle, Logo } from './styles'

const Hero = () => (
  <HeroStyle>
    <div className="container">
      <HeroContainer>
        <Logo>
          <img src={imageLogo} alt="EFood" />
        </Logo>

        <Description>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Description>
      </HeroContainer>
    </div>
  </HeroStyle>
)

export default Hero
