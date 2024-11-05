import { Card, ItemDescription, ItemName } from './styles'

import AddToCart from '../AddToCart'

type Props = {
  nome: string
  descricao: string
  foto: string
  id: number
  preco: number
  porcao: string
}

const Item = ({ nome, descricao, foto, id, preco, porcao }: Props) => (
  <Card>
    <img src={foto} alt="Pizza" />
    <ItemName>{nome}</ItemName>
    <ItemDescription>{descricao}</ItemDescription>
    <AddToCart />
  </Card>
)

export default Item
