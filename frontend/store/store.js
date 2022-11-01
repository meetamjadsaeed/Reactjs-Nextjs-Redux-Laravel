import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './profileSlice'
import categoriesSlice from './categoriesSlice'

export const store = configureStore({
    reducer: {
        profile: profileSlice,
        category: categoriesSlice,
    },
})
