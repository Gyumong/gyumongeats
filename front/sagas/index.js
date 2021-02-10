/** @format */

import { all, fork } from "redux-saga/effects";
import axios from "axios";
import userSaga from "./uesr";

axios.defaults.baseURL = "http://localhost:3085/api/customer"; // baseurl 설정 앞으로 요청할때
axios.defaults.withCredentials = true; // 쿠키공유 전역으로 허용
export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
