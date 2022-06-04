import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './character/characterSlice'

export const createStore = () =>
  configureStore({
    reducer: {
      character: characterReducer,
    },
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
