import Loader from '../../components/Loader'
import Hero from '../../containers/Hero'
import RestaurantList from '../../containers/RestaurantList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (!restaurants) {
    return <Loader />
  }

  return (
    <>
      <Hero />
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
