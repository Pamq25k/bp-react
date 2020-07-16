import wc from "../apis/wc";

const fetchProducts = () => async (dispatch) => {
  const response = await wc.get("products");
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: response.data,
  });
};

const fetchProduct = (id) => async (dispatch) => {
  const response = await wc.get(`products/${id}`);
  dispatch({
    type: "FETCH_PRODUCT",
    payload: response.data,
  });
};

export { fetchProducts, fetchProduct };
