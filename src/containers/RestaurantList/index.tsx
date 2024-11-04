import RestaurantCard from '../../components/RestaurantCard'
import { CardList } from './styles'

import japonesaImg from '../../assets/images/japonesa.png'
import italianaImg from '../../assets/images/italiana.png'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

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

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((r) => r.json())
      .then((r) => setRestaurants(r))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <CardList>
        {restaurants.map((r) => (
          <RestaurantCard
            key={r.id}
            name={r.titulo}
            style={r.tipo}
            rating={r.avaliacao}
            destaque={r.destacado}
            description={r.descricao}
            image={r.capa}
          />
        ))}
      </CardList>
    </>
  )
}

export default RestaurantList
