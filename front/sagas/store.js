/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import {
  all,
  delay,
  put,
  fork,
  takeLatest,
  call,
  throttle,
} from "redux-saga/effects";
import {
  LOAD_STORES_REQUEST,
  LOAD_STORES_SUCCESS,
  LOAD_STORES_FAILURE,
  DummyStore,
} from "../reducers/store";
import axios from "axios";

// function loadStoresAPI(data) {
//     return axios.get("/loadStores", data);
//   }

function* loadStores(action) {
  // 액션을 받음
  try {
    //   const result = yield call(loadStoresAPI, action.data);
    yield delay(2000);
    yield put({
      // 액션을 dispatch
      type: LOAD_STORES_SUCCESS,
      data: DummyStore(10),
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_STORES_FAILURE,
      error: e.response.error,
    });
  }
}

function* watchLoadStores() {
  yield throttle(1000, LOAD_STORES_REQUEST, loadStores);
}

export default function* storeSaga() {
  yield all([fork(watchLoadStores)]);
}
