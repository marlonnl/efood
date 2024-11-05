import RestaurantCard from '../../components/RestaurantCard'
import { CardList } from './styles'

import { useEffect, useState } from 'react'

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
            id={r.id}
          />
        ))}
      </CardList>
    </>
  )
}

export default RestaurantList
