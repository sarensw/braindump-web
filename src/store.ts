import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storeApp from './store/storeApp'

const reducers = combineReducers({
  app: storeApp
})

export const store = configureStore({
  reducer: reducers,
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
