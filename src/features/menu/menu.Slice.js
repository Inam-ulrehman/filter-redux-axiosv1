import { categories, menu } from '../../utils/data'
const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  isLoading: true,
  mainMenu: menu,
  menu: menu,
  categories: categories,
}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    getUniqueValues: (state, { payload }) => {
      const { value, tempValue } = payload
      if (value === 'all') {
        state.menu = state.mainMenu
        return console.log('all')
      }
      state.menu = tempValue
    },
  },
})

export const { getUniqueValues } = menuSlice.actions
export default menuSlice.reducer
