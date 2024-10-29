import RestaurantCard from '../../components/RestaurantCard'
import { CardList } from './styles'

import japonesaImg from '../../assets/images/japonesa.png'
import italianaImg from '../../assets/images/italiana.png'

const RestaurantsArray = [
  {
    name: 'Hioki Sushi',
    style: 'Japonesa',
    rating: 4.9,
    image: japonesaImg,
    destaque: true,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    name: 'La Dolce Vita Trattoria',
    style: 'Italiana',
    rating: 4.6,
    image: italianaImg,
    destaque: false,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const RestaurantList = () => (
  <>
    <CardList>
      {RestaurantsArray.map((r) => (
        <RestaurantCard
          key={r.name}
          name={r.name}
          style={r.style}
          rating={r.rating}
          destaque={r.destaque}
          description={r.description}
          image={r.image}
        />
      ))}
    </CardList>
  </>
)

export default RestaurantList
