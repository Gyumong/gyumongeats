/** @format */

import createReducer from "./createReducer";

const initialState = {
  addMyCartLoading: false, // 카트에 담기
  addMyCartDone: false,
  addMyCartError: null,
  loadMyInfoLoading: false, // 내정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logInLoading: false, // 로그인 시도중
  logInError: null,
  logInDone: false,
  logOutLoading: false, // 로그아웃 시도중
  logOutError: null,
  logOutDone: false,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null,
  cart: null,
};
export const ADD_MY_CART_REQUEST = "ADD_MY_CART_REQUEST";
export const ADD_MY_CART_SUCCESS = "ADD_MY_CART_SUCCESS";
export const ADD_MY_CART_FAILURE = "ADD_MY_CART_FAILURE";

export const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export default createReducer(initialState, {
  [ADD_MY_CART_REQUEST]: (state) => {
    state.addMyCartLoading = true;
    state.addMyCartError = null;
    state.addMyCartDone = false;
  },
  [ADD_MY_CART_SUCCESS]: (state, action) => {
    console.log(action);
    state.addMyCartLoading = false;
    state.cart = action.data;
    state.addMyCartDone = true;
  },
  [ADD_MY_CART_FAILURE]: (state, action) => {
    state.addMyCartLoading = false;
    state.addMyCartError = action.error;
  },
  [LOAD_MY_INFO_REQUEST]: (state) => {
    state.loadMyInfoLoading = true;
    state.loadMyInfoError = null;
    state.loadMyInfoDone = false;
  },
  [LOAD_MY_INFO_SUCCESS]: (state, action) => {
    console.log(action.data);
    state.loadMyInfoLoading = false;
    state.me = action.data;
    state.loadMyInfoDone = true;
  },
  [LOAD_MY_INFO_FAILURE]: (state, action) => {
    state.loadMyInfoLoading = false;
    state.loadMyInfoError = action.error;
  },
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
