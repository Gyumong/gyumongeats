/** @format */

import createReducer from "./createReducer";

const initialState = {
  takeOrderLoading: false,
  takeOrderDone: false,
  takeOrderError: null,
  msg: null,
};
export const TAKE_ORDER_REQUEST = "TAKE_ORDER_REQUEST";
export const TAKE_ORDER_SUCCESS = "TAKE_ORDER_SUCCESS";
export const TAKE_ORDER_FAILURE = "TAKE_ORDER_FAILURE";

export default createReducer(initialState, {
  [TAKE_ORDER_REQUEST]: (state) => {
    state.takeOrderLoading = true;
    state.takeOrderError = null;
    state.takeOrderDone = false;
  },
  [TAKE_ORDER_SUCCESS]: (state, action) => {
    state.takeOrderLoading = false;
    state.takeOrderDone = true;
    state.msg = action.data.msg;
  },
  [TAKE_ORDER_FAILURE]: (state, action) => {
    state.takeOrderLoading = false;
    state.takeOrderError = action.error;
  },
});
