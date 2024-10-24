import Logo from '../../components/Logo'
import { Description, HeroContainer, HeroStyle, LogoStyle } from './styles'

const Hero = () => (
  <HeroStyle>
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
  </HeroStyle>
)

export default Hero
