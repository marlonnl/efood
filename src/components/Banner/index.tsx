import { BannerStyle, Cozinha, Nome, RestaurantInfo } from './styles'

const Banner = () => (
  <BannerStyle>
    <div className="container">
      <RestaurantInfo>
        <Cozinha>Italiana</Cozinha>
        <Nome>La Dolce Vita Trattoria</Nome>
      </RestaurantInfo>
    </div>
  </BannerStyle>
)

export default Banner
