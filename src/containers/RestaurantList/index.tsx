import RestaurantCard from '../../components/RestaurantCard'
import { Restaurant } from '../../pages/Home'
import { CardList } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
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
