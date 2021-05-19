/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { all, put, fork, takeLatest, call, throttle } from "redux-saga/effects";
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
  LOAD_DSTORES_REQUEST,
  LOAD_DSTORES_SUCCESS,
  LOAD_DSTORES_FAILURE,
  LOAD_MSTORES_REQUEST,
  LOAD_MSTORES_SUCCESS,
  LOAD_MSTORES_FAILURE,
  LOAD_ASTORES_SUCCESS,
  LOAD_ASTORES_FAILURE,
  LOAD_ASTORES_REQUEST,
} from "@reducers/store";
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

function loadDStoresAPI(data) {
  return axios.get(`/store/all?f=${data}`);
}

function* loadDStores(action) {
  // 액션을 받음
  try {
    const result = yield call(loadDStoresAPI, action.data);
    console.log(result);
    yield put({
      // 액션을 dispatch
      type: LOAD_DSTORES_SUCCESS,
      data: result.data.Store,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_DSTORES_FAILURE,
      error: e.response.error,
    });
  }
}

function loadMStoresAPI(data) {
  return axios.get(`/store/all?m=${parseInt(data)}`);
}

function* loadMStores(action) {
  // 액션을 받음
  try {
    const result = yield call(loadMStoresAPI, action.data);
    console.log(result);
    yield put({
      // 액션을 dispatch
      type: LOAD_MSTORES_SUCCESS,
      data: result.data.Store,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_MSTORES_FAILURE,
      error: e.response.error,
    });
  }
}

function loadAStoresAPI(data) {
  return axios.get(`/store/all?T=${data}`);
}

function* loadAStores(action) {
  // 액션을 받음
  try {
    const result = yield call(loadAStoresAPI, action.data);
    console.log(result);
    yield put({
      // 액션을 dispatch
      type: LOAD_ASTORES_SUCCESS,
      data: result.data.Store,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOAD_ASTORES_FAILURE,
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

function* watchLoadDStores() {
  yield throttle(1000, LOAD_DSTORES_REQUEST, loadDStores);
}
function* watchLoadMStores() {
  yield throttle(1000, LOAD_MSTORES_REQUEST, loadMStores);
}
function* watchLoadAStores() {
  yield throttle(1000, LOAD_ASTORES_REQUEST, loadAStores);
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
    fork(watchLoadDStores),
    fork(watchLoadMStores),
    fork(watchLoadAStores),
  ]);
}
