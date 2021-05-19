/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { all, put, fork, takeLatest, call } from "redux-saga/effects";
import {
  WRITE_REVIEW_FAILURE,
  WRITE_REVIEW_REQUEST,
  WRITE_REVIEW_SUCCESS,
} from "@reducers/review";
import axios from "axios";

function WriteReviewAPI(data) {
  return axios.post("/review/write", data);
}

function* WriteReview(action) {
  // 액션을 받음
  try {
    const result = yield call(WriteReviewAPI, action.data);
    console.log(result);
    console.log(result.data);
    yield put({
      // 액션을 dispatch
      type: WRITE_REVIEW_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(action.data);
    console.error(e);
    yield put({
      type: WRITE_REVIEW_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}

function* watchWriteReview() {
  yield takeLatest(WRITE_REVIEW_REQUEST, WriteReview);
}

export default function* reviewSaga() {
  yield all([fork(watchWriteReview)]);
}
