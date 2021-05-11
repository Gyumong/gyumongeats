/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { all, put, fork, takeLatest, call } from "redux-saga/effects";
import {
  TAKE_ORDER_FAILURE,
  TAKE_ORDER_REQUEST,
  TAKE_ORDER_SUCCESS,
} from "../reducers/order";
import axios from "axios";

function TakeOrderAPI(data) {
  return axios.post("/order/take", data);
}

function* TakeOrder(action) {
  // 액션을 받음
  try {
    const result = yield call(TakeOrderAPI, action.data);
    console.log(result);
    console.log(result.data);
    yield put({
      // 액션을 dispatch
      type: TAKE_ORDER_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(action.data);
    console.error(e);
    yield put({
      type: TAKE_ORDER_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}

function* watchTakeOrder() {
  yield takeLatest(TAKE_ORDER_REQUEST, TakeOrder);
}

export default function* orderSaga() {
  yield all([fork(watchTakeOrder)]);
}
