import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../pages/Home'

type CartState = {
  items: Restaurant[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurant>) => {
      state.items = [...state.items, action.payload]
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
