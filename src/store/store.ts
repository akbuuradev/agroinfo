import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import YesSlice from "./reducer/yesSlice";
import TokenSlice from "./reducer/tokenSlice";
import product from "./reducer/productSlice";

const rootReducer = combineReducers({
  YesSlice,
  TokenSlice,
  product,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
