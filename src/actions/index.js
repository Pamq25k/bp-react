import { wc, cocart } from "../apis/wc";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  ADD_TO_CART,
  BUY_NOW,
  SET_LOADED,
  SET_NOT_LOADED,
} from "../types";

const setNotLoaded = () => {
  return {
    type: SET_NOT_LOADED,
  };
};

const setLoaded = () => {
  return {
    type: SET_LOADED,
  };
};

const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setNotLoaded());

    const response = await wc.get("products");
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoaded());
  }
};

const fetchProduct = (id) => async (dispatch) => {
  try {
    dispatch(setNotLoaded());

    const response = await wc.get(`products/${id}`);
    dispatch({
      type: FETCH_PRODUCT,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoaded());
  }
};

// cocart.post(`add-item`, { product_id });

// await cocart.get("get-cart");

const addToCart = (item) => {
  return { type: ADD_TO_CART, payload: item };
};

export { fetchProducts, fetchProduct, addToCart };
