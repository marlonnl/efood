import { GlobalStyle } from './styles'
import Hero from './containers/Hero'
import RestaurantList from './containers/RestaurantList'

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <div className="container">
        <RestaurantList />
      </div>
    </>
  )
}

export default App
