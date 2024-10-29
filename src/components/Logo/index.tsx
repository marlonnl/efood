import { LogoLink } from './styles'
import imageLogo from '../../assets/images/logo.png'

const Logo = () => (
  <>
    <LogoLink to="/">
      <img src={imageLogo} alt="EFood" />
    </LogoLink>
  </>
)

export default Logo
