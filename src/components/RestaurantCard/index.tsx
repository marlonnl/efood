import japonesaImg from '../../assets/images/japonesa.png'
import {
  Card,
  CardContainer,
  CardHeader,
  Description,
  Nome,
  Nota,
  Tags
} from './styles'

import star from '../../assets/images/estrela.png'
import Tag from '../Tag'
import { SaibaMais } from '../Tag/styles'

const RestaurantCard = () => (
  <Card>
    <img src={japonesaImg} alt="nome do restaurante" />
    <Tags>
      <Tag>Destaque da semana</Tag>
      <Tag>Japonesa</Tag>
    </Tags>

    <CardContainer>
      <CardHeader>
        <Nome>Nome do restaurante</Nome>
        <Nota>
          <p>4.9</p>
          <img src={star} />
        </Nota>
      </CardHeader>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <SaibaMais>Saiba mais</SaibaMais>
    </CardContainer>
  </Card>
)

export default RestaurantCard
