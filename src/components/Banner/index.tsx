import { BannerStyle, Cozinha, Nome, RestaurantInfo } from './styles'

type Props = {
  cozinha: string
  nome: string
}

const Banner = ({ cozinha, nome }: Props) => (
  <BannerStyle>
    <div className="container">
      <RestaurantInfo>
        <Cozinha>{cozinha}</Cozinha>
        <Nome>{nome}</Nome>
      </RestaurantInfo>
    </div>
  </BannerStyle>
)

export default Banner
