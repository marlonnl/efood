import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/perfil',
    element: <Perfil />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
      <Footer />
    </>
  )
}

export default App
