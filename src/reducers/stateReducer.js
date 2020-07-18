import { SET_LOADED, SET_NOT_LOADED } from "../types";

const initialState = {
  isLoaded: false,
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADED:
      return { ...state, isLoaded: true };
    case SET_NOT_LOADED:
      return { ...state, isLoaded: false };
    default:
      return state;
  }
};

export default stateReducer;
