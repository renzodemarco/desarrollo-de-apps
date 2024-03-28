import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  total: 0 
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if (index === -1) {
        state.items.push({...action.payload, quantity: 1})
      }
      else {
        state.items[index].quantity++
      }
      state.total = state.items.reduce((acc, item) => acc = acc + item.price * item.quantity, 0)
    },
    deleteProduct: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload)
      if (state.items[index].quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload)
      }
      else {
        state.items[index].quantity--
      }
      state.total = state.items.reduce((acc, item) => acc = acc + item.price * item.quantity, 0)
    },
    deleteCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { addProduct, deleteProduct, deleteCart } = cartSlice.actions

export default cartSlice.reducer