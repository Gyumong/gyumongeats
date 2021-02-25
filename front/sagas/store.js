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
  LOAD_ONESTORE_REQUEST,
  LOAD_ONESTORE_SUCCESS,
  LOAD_ONESTORE_FAILURE,
  LOAD_MENUS_REQUEST,
  LOAD_MENUS_SUCCESS,
  LOAD_MENUS_FAILURE,
} from "../reducers/store";
import axios from "axios";

function loadMenusAPI(data) {
  return axios.get(`/store/info-and-menu/?id=${data}`);
}

function* loadMenus(action) {
  // 액션을 받음
  try {
    const result = yield call(loadMenusAPI, action.data);
    console.log("loadMenu", result);
    yield put({
      // 액션을 dispatch
      type: LOAD_MENUS_SUCCESS,
      data: result.data.menu,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MENUS_FAILURE,
      error: e.response.error,
    });
  }
}

function loadStoresAPI(data) {
  return axios.get("/store/all", data);
}

function* loadStores(action) {
  // 액션을 받음
  try {
    const result = yield call(loadStoresAPI, action.data);
    console.log(result);
    yield put({
      // 액션을 dispatch
      type: LOAD_STORES_SUCCESS,
      data: result.data.Store,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_STORES_FAILURE,
      error: e.response.error,
    });
  }
}

function loadOneStoreAPI(data) {
  return axios.get(`/store/info-and-menu/?id=${data}`);
}

function* loadOneStore(action) {
  // 액션을 받음
  try {
    const result = yield call(loadOneStoreAPI, action.data);
    console.log(result);
    console.log("원스토어");
    yield put({
      // 액션을 dispatch
      type: LOAD_ONESTORE_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_ONESTORE_FAILURE,
      error: e.response.error,
    });
  }
}

function* watchLoadStores() {
  yield throttle(1000, LOAD_STORES_REQUEST, loadStores);
}

function* watchLoadMenus() {
  yield throttle(1000, LOAD_MENUS_REQUEST, loadMenus);
}
function* watchLoadOneStore() {
  yield takeLatest(LOAD_ONESTORE_REQUEST, loadOneStore);
}

export default function* storeSaga() {
  yield all([
    fork(watchLoadStores),
    fork(watchLoadOneStore),
    fork(watchLoadMenus),
  ]);
}
