/** @format */

import createReducer from "./createReducer";
import { IUser } from "./../typings/db";
const initialState: IUser = {
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
export const ADD_MY_CART_REQUEST = "ADD_MY_CART_REQUEST" as const;
export const ADD_MY_CART_SUCCESS = "ADD_MY_CART_SUCCESS" as const;
export const ADD_MY_CART_FAILURE = "ADD_MY_CART_FAILURE" as const;

export const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST" as const;
export const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS" as const;
export const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE" as const;

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS" as const;
export const LOG_IN_FAILURE = "LOG_IN_FAILURE" as const;

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST" as const;
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS" as const;
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE" as const;

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" as const;
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS" as const;
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE" as const;

export const loginRequestAction = (data: { email: string; password: string }) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export default createReducer(initialState, {
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
