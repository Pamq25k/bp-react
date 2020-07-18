import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import stateReducer from "./stateReducer";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  state: stateReducer,
});
