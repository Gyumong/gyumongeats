/** @format */

import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./user";

axios.defaults.baseURL = "http://localhost:3085/api/customer"; // baseurl 설정 앞으로 요청할때

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
