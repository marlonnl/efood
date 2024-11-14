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
import Button from '../Button'

type Props = {
  name: string
  description: string
  style: string
  image: string
  rating: number
  destaque: boolean
  id: number
}

const RestaurantCard = ({
  name,
  style,
  rating,
  destaque,
  image,
  description,
  id
}: Props) => (
  <Card>
    <img src={image} alt={name} />
    <Tags>
      {destaque && <Tag>Destaque da semana</Tag>}
      <Tag>{style}</Tag>
    </Tags>

    <CardContainer>
      <CardHeader>
        <Nome>{name}</Nome>
        <Nota>
          <p>{rating}</p>
          <img src={star} />
        </Nota>
      </CardHeader>
      <Description>{description}</Description>
      <Button
        type="link"
        title={`Ver página do restaurante ${name}`}
        to={`/perfil/${id}`}
      >
        Saiba mais
      </Button>
    </CardContainer>
  </Card>
)

export default RestaurantCard
