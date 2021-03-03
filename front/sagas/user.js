/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { all, put, fork, takeLatest, call } from "redux-saga/effects";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  ADD_MY_CART_REQUEST,
  ADD_MY_CART_FAILURE,
  ADD_MY_CART_SUCCESS,
} from "../reducers/user";
import axios from "axios";
function signUpAPI(data) {
  return axios.post("/auth/signup", data);
}

function* signUp(action) {
  // 액션을 받음
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      // 액션을 dispatch
      type: SIGN_UP_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.error,
    });
  }
}

function logInAPI(data) {
  return axios.post("/auth/login", data);
  // .then((res) => {
  //   console.log(res.data);
  //   const { accessToken } = res.data;
  //   axios.defaults.headers.common["Authorization"] = `Bearer${accessToken}`;
  // });
}

function* logIn(action) {
  // 액션을 받음
  try {
    const result = yield call(logInAPI, action.data);
    const { accessToken } = yield result.data;
    // API 요청 콜마다 헤더에 accessToken을 담아 보내도록 설정
    axios.defaults.headers.common["x-access-token"] = yield `${accessToken}`;
    console.log(accessToken);

    yield put({
      // 액션을 dispatch
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.error,
    });
  }
}

// const onLoginSuccess = (res) => {
//   const { accessToken } = res.data;
//   console.log(accessToken);
//   // API 요청 콜마다 헤더에 accessToken을 담아 보내도록 설정
//   axios.defaults.headers.common["Authorization"] = `Bearer${accessToken}`;
// };
function logOutAPI() {
  // return axios.post("/auth/logout");
  document.cookie = "";
}
function* logOut() {
  try {
    // yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: e.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get("/auth/check", { withCredentials: true });
}

function* loadMyInfo() {
  // 액션을 받음
  try {
    const result = yield call(loadMyInfoAPI);
    yield put({
      // 액션을 dispatch
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data.decoded,
    });
    console.log(result);
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: e.response.error,
    });
  }
}

function AddMyCartAPI(data) {
  const { storeId } = data;
  console.log(data);
  return axios.post(`/cart/add?id=${parseInt(storeId)}`, data.data);
}

function* AddMyCart(action) {
  // 액션을 받음
  try {
    const result = yield call(AddMyCartAPI, action.data);
    console.log(result);
    console.log(result.data.cart);
    yield put({
      // 액션을 dispatch
      type: ADD_MY_CART_SUCCESS,
      data: result.data.cart,
    });
  } catch (e) {
    console.log(action.data);
    console.error(e);
    yield put({
      type: ADD_MY_CART_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchAddMyCart() {
  yield takeLatest(ADD_MY_CART_REQUEST, AddMyCart);
}
export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadMyInfo),
    fork(watchAddMyCart),
  ]);
}
