import { createSlice } from '@reduxjs/toolkit'

interface AppState {
  theme: string
}

const initialState: AppState = {
  theme: 'dark'
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action): void => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = appSlice.actions
export default appSlice.reducer
