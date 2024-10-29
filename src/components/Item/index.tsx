import { Card, ItemDescription, ItemName } from './styles'

import itemImg from '../../assets/images/item.png'
import AddToCart from '../AddToCart'

const Item = () => (
  <Card>
    <img src={itemImg} alt="Pizza" />
    <ItemName>Pizza Marguerita</ItemName>
    <ItemDescription>
      A clássica marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </ItemDescription>
    <AddToCart />
  </Card>
)

export default Item
