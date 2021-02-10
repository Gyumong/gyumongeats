/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { all, delay, put, fork, takeLatest, call } from "redux-saga/effects";
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
} from "../reducers/user";
import axios from "axios";
function signUpAPI(data) {
  return axios.post("/signup", data);
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
  return axios.post("/login", data);
}

function* logIn(action) {
  // 액션을 받음
  try {
    const result = yield call(logInAPI, action.data);
    yield delay(1000);
    // const result = yield call(logInAPI, action.data);
    // 요청이 성공이면 call로 logInAPI를 실행하고 결괏값을 변수 result에 저장
    // fork는 비동기 call은 동기 => async await 함수 비슷 결괏값 받으면 실행 ㅇㅇ
    // action에서 data를 꺼내서 logInAPI 함수에 인자로 보냄
    yield put({
      // 액션을 dispatch
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

// function logOutAPI() {
//   return axios.post("/logout");
// }
function* logOut() {
  try {
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
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
