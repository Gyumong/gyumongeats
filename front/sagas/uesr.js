/** @format */

import { all, delay, put, fork, takeLatest } from "redux-saga/effects";
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from "../reducers/user";

function logInAPI(data) {
  // data를 받음 ex) {id:'abc@naver.com',password:'123456'}
  // return axios.post("/user/login", data); // 받은 data를 토대로 서버에 요청을 보냄
}

function* logIn(action) {
  // 액션을 받음
  try {
    yield delay(1000);
    // const result = yield call(logInAPI, action.data);
    // 요청이 성공이면 call로 logInAPI를 실행하고 결괏값을 변수 result에 저장
    // fork는 비동기 call은 동기 => async await 함수 비슷 결괏값 받으면 실행 ㅇㅇ
    // action에서 data를 꺼내서 logInAPI 함수에 인자로 보냄
    yield put({
      // 액션을 dispatch
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function* logOut() {
  try {
    yield delay(1000);
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
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
