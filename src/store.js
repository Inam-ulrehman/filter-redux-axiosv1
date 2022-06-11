import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './features/menu/menu.Slice'
import userSlice from './features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
  },
})

export default store
