import {configureStore, combineReducers} from "./_snowpack/pkg/@reduxjs/toolkit.js";
import storeApp from "./store/storeApp.js";
const reducers = combineReducers({
  app: storeApp
});
export const store = configureStore({
  reducer: reducers,
  devTools: true
});
