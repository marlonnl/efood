import { useParams } from 'react-router-dom'

import { Grid, MenuStyle } from './styles'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Item from '../../components/Item'
import { useGetRestaurantQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetRestaurantQuery(id!)

  if (!restaurante) {
    return <h3>Carregando...</h3>
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
