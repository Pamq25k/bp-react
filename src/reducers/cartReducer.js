import _ from "lodash";
import { ADD_TO_CART } from "../types";

const cart = JSON.parse(localStorage.getItem("cart"));
const INIT = cart ? cart : {};

const cartReducer = (state = INIT, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // const time = new Date();
      // const timeID = `${time.getHours()}-${time.getMinutes()}-${time.getSeconds()}`;
      const newItem = { [action.payload.id]: action.payload };

      if (cart) {
        localStorage.setItem("cart", JSON.stringify({ ...cart, ...newItem }));
      } else {
        localStorage.setItem("cart", JSON.stringify({ ...newItem }));
      }

      return { ...state, ...newItem };

    default:
      return state;
  }
};

export default cartReducer;
