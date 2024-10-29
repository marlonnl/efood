import Hero from '../../containers/Hero'
import RestaurantList from '../../containers/RestaurantList'

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <RestaurantList />
    </div>
  </>
)

export default Home
