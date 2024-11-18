import { useParams } from 'react-router-dom'

import { Grid, MenuStyle } from './styles'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Item from '../../components/Item'
import { useGetRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurante } = useGetRestaurantQuery(id)

  if (!restaurante) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Banner
        cozinha={restaurante.tipo}
        nome={restaurante.titulo}
        capa={restaurante.capa}
      />
      <MenuStyle>
        <div className="container">
          <Grid>
            {restaurante.cardapio.map((menu) => (
              <Item key={menu.id} item={menu} />
            ))}
          </Grid>
        </div>
      </MenuStyle>
    </>
  )
}

export default Perfil
