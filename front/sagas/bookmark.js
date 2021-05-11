/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { all, put, fork, takeLatest, call } from "redux-saga/effects";
import {
  ADD_BOOKMARK_FAILURE,
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  DELETE_BOOKMARK_REQUEST,
  DELETE_BOOKMARK_SUCCESS,
} from "../reducers/bookmark";
import axios from "axios";
import { DELETE_CART_MENU_FAILURE } from "../reducers/cart";

function AddBookMarkAPI(data) {
  return axios.post("/bookmark/add", data);
}

function* AddBookMark(action) {
  // 액션을 받음
  try {
    const result = yield call(AddBookMarkAPI, action.data);
    yield put({
      // 액션을 dispatch
      type: ADD_BOOKMARK_SUCCESS,
      data: result.data,
    });
    console.log(result.data);
  } catch (e) {
    yield put({
      type: ADD_BOOKMARK_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}

function DeleteBookMarkAPI({ e, id }) {
  return axios.delete(`/bookmark/del?e=${e}&id=${parseInt(id)}`);
}

function* DeleteBookMark(action) {
  // 액션을 받음
  try {
    const result = yield call(DeleteBookMarkAPI, action.data);
    yield put({
      // 액션을 dispatch
      type: DELETE_BOOKMARK_SUCCESS,
      data: result.data,
    });
    console.log(result.data);
  } catch (e) {
    yield put({
      type: DELETE_CART_MENU_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}

function* watchAddBookMark() {
  yield takeLatest(ADD_BOOKMARK_REQUEST, AddBookMark);
}
function* watchDeleteBookMark() {
  yield takeLatest(DELETE_BOOKMARK_REQUEST, DeleteBookMark);
}

export default function* bookMarkSaga() {
  yield all([fork(watchAddBookMark), fork(watchDeleteBookMark)]);
}
