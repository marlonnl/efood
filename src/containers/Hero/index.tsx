import Logo from '../../components/Logo'
import { Description, HeroContainer, LogoStyle } from './styles'

const Hero = () => (
  <div className="vectorBg">
    <div className="container">
      <HeroContainer>
        <LogoStyle>
          <Logo />
        </LogoStyle>

        <Description>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Description>
      </HeroContainer>
    </div>
  </div>
)

export default Hero
