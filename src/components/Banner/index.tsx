import { BannerStyle, Cozinha, Nome, RestaurantInfo } from './styles'

type Props = {
  cozinha: string
  nome: string
  capa: string
}

const Banner = ({ cozinha, nome, capa }: Props) => (
  <BannerStyle style={{ backgroundImage: `url(${capa})` }}>
    <div className="container">
      <RestaurantInfo>
        <Cozinha>{cozinha}</Cozinha>
        <Nome>{nome}</Nome>
      </RestaurantInfo>
    </div>
  </BannerStyle>
)

export default Banner
