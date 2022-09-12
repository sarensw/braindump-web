import {createSlice} from "../_snowpack/pkg/@reduxjs/toolkit.js";
const initialState = {
  theme: "dark"
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});
export const {setTheme} = appSlice.actions;
export default appSlice.reducer;
