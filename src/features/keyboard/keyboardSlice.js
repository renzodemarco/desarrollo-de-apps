import { createSlice } from '@reduxjs/toolkit'

const initialState = false

export const cartSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    openKeyboard: (state) => state = true,
    closeKeyboard: (state) => state = false
  }
})