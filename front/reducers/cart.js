/** @format */

import createReducer from "./createReducer";

const initialState = {
  mycart: [],
  addMyCartLoading: false,
  addMyCartDone: false,
  addMyCartError: null,
  deleteCartMenuLoading: false,
  deleteCartMenuDone: false,
  deleteCartMenuError: null,
  updateQuantityLoading: false,
  updateQuantityDone: false,
  updateQuantityError: null,
};

export const ADD_MY_CART_REQUEST = "ADD_MY_CART_REQUEST";
export const ADD_MY_CART_SUCCESS = "ADD_MY_CART_SUCCESS";
export const ADD_MY_CART_FAILURE = "ADD_MY_CART_FAILURE";

export const DELETE_CART_MENU_REQUEST = "DELETE_CART_MENU_REQUEST";
export const DELETE_CART_MENU_SUCCESS = "DELETE_CART_MENU_SUCCESS";
export const DELETE_CART_MENU_FAILURE = "DELETE_CART_MENU_FAILURE";

export const UPDATE_QUANTITY_REQUEST = "UPDATE_QUANTITY_REQUEST";
export const UPDATE_QUANTITY_SUCCESS = "UPDATE_QUANTITY_SUCCESS";
export const UPDATE_QUANTITY_FAILURE = "UPDATE_QUANTITY_FAILURE";
export default createReducer(initialState, {
  [ADD_MY_CART_REQUEST]: (state) => {
    state.addMyCartLoading = true;
    state.addMyCartError = null;
    state.addMyCartDone = false;
  },
  [ADD_MY_CART_SUCCESS]: (state, action) => {
    console.log(action);
    state.addMyCartLoading = false;
    state.mycart = state.mycart.concat(action.data);
    state.addMyCartDone = true;
  },
  [ADD_MY_CART_FAILURE]: (state, action) => {
    state.addMyCartLoading = false;
    state.addMyCartError = action.error;
  },
  [DELETE_CART_MENU_REQUEST]: (state) => {
    state.deleteCartMenuLoading = true;
    state.deleteCartMenuError = null;
    state.deleteCartMenuDone = false;
  },
  [DELETE_CART_MENU_SUCCESS]: (state) => {
    state.deleteCartMenuLoading = false;
    state.deleteCartMenuDone = true;
  },
  [DELETE_CART_MENU_FAILURE]: (state, action) => {
    state.deleteCartMenuLoading = false;
    state.deleteCartMenuError = action.error;
  },
  [UPDATE_QUANTITY_REQUEST]: (state) => {
    state.updateQuantityLoading = true;
    state.updateQuantityError = null;
    state.updateQuantityDone = false;
  },
  [UPDATE_QUANTITY_SUCCESS]: (state) => {
    state.updateQuantityLoading = false;
    state.updateQuantityDone = true;
  },
  [UPDATE_QUANTITY_FAILURE]: (state, action) => {
    state.updateQuantityLoading = false;
    state.updateQuantityError = action.error;
  },
});
