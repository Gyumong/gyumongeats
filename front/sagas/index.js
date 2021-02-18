/** @format */

import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";
import storeSaga from "./store";
axios.defaults.baseURL = "http://localhost:3085/api"; // baseurl 설정 앞으로 요청할때
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(storeSaga)]);
}
