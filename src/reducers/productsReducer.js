import _ from "lodash";

import { FETCH_PRODUCTS, FETCH_PRODUCT } from "../types";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, ..._.keyBy(action.payload, "id") };
    case FETCH_PRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
