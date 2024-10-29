import Item from '../../components/Item'
import { Grid, MenuStyle } from './styles'

const Menu = () => (
  <MenuStyle>
    <div className="container">
      <Grid>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </div>
  </MenuStyle>
)

export default Menu
