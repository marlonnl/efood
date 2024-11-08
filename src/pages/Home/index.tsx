import Hero from '../../containers/Hero'
import RestaurantList from '../../containers/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <div className="container">
          <RestaurantList restaurants={restaurants} />
        </div>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
