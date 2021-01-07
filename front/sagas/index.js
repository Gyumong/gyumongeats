/** @format */

import { all, fork } from "redux-saga/effects";
import userSaga from "./uesr";
export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
