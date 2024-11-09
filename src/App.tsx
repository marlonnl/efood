import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'
import Cart from './components/Cart'

import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
