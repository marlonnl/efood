import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Grid, MenuStyle } from './styles'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Item from '../../components/Item'
import { Restaurant } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((r) => r.json())
      .then((r) => setRestaurante(r))
  }, [id])

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
              <Item
                key={menu.id}
                nome={menu.nome}
                descricao={menu.descricao}
                foto={menu.foto}
                preco={menu.preco}
                id={menu.id}
                porcao={menu.porcao}
              />
            ))}
          </Grid>
        </div>
      </MenuStyle>
    </>
  )
}

export default Perfil
