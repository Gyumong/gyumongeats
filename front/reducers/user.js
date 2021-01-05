/** @format */

import createReducer from "./createReducer";

const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export default createReducer(initialState, {
  [LOG_IN_REQUEST]: (state) => {
    state.logInLoading = true;
    state.logInError = null;
    state.logInDone = false;
  },
  [LOG_IN_SUCCESS]: (state, action) => {
    state.logInLoading = false;
    state.me = action.data;
    state.logInDone = true;
  },
  [LOG_IN_FAILURE]: (state, action) => {
    state.logInLoading = false;
    state.logInError = action.error;
  },
  [LOG_OUT_REQUEST]: (state) => {
    state.logOutLoading = true;
    state.logOutError = null;
    state.logOutDone = false;
  },
  [LOG_OUT_SUCCESS]: (state) => {
    state.logOutLoading = false;
    state.logOutDone = true;
    state.me = null;
  },
  [LOG_OUT_FAILURE]: (state, action) => {
    state.logOutLoading = false;
    state.logOutError = action.error;
  },
  [SIGN_UP_REQUEST]: (state) => {
    state.signUpLoading = true;
    state.signUpError = null;
    state.signUpDone = false;
  },
  [SIGN_UP_SUCCESS]: (state) => {
    state.signUpLoading = false;
    state.signUpDone = true;
  },
  [SIGN_UP_FAILURE]: (state, action) => {
    state.signUpLoading = false;
    state.signUpError = action.error;
  },
});
