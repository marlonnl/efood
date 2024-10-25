import { GlobalStyle } from './styles'
import Hero from './containers/Hero'
import RestaurantList from './containers/RestaurantList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <div className="container">
        <RestaurantList />
      </div>
      <Footer />
    </>
  )
}

export default App
