import Hero from '../../containers/Hero'
import RestaurantList from '../../containers/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

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
