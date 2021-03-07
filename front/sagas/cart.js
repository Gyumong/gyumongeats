/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */

import { all, put, fork, takeLatest, call } from "redux-saga/effects";
import {
  ADD_MY_CART_REQUEST,
  ADD_MY_CART_SUCCESS,
  ADD_MY_CART_FAILURE,
  DELETE_CART_MENU_REQUEST,
  DELETE_CART_MENU_SUCCESS,
  DELETE_CART_MENU_FAILURE,
  UPDATE_QUANTITY_REQUEST,
  UPDATE_QUANTITY_SUCCESS,
  UPDATE_QUANTITY_FAILURE,
} from "../reducers/cart";
import axios from "axios";

function AddMyCartAPI(data) {
  const { storeId } = data;
  console.log(data);
  return axios.post(`/cart/add?id=${parseInt(storeId)}`, data.data);
}

function* AddMyCart(action) {
  // 액션을 받음
  try {
    const result = yield call(AddMyCartAPI, action.data);
    console.log(result);
    console.log(result.data.cart);
    yield put({
      // 액션을 dispatch
      type: ADD_MY_CART_SUCCESS,
      data: result.data.cart,
    });
  } catch (e) {
    console.log(action.data);
    console.error(e);
    yield put({
      type: ADD_MY_CART_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}

function DeleteCartMenuAPI(data) {
  return axios.delete("/cart/del", data);
}

function* DeleteCartMenu(action) {
  // 액션을 받음
  try {
    const result = yield call(DeleteCartMenuAPI, action.data);
    console.log(result);
    yield put({
      // 액션을 dispatch
      type: DELETE_CART_MENU_SUCCESS,
    });
  } catch (e) {
    console.log(action.data);
    console.error(e);
    yield put({
      type: DELETE_CART_MENU_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}

function UpdateQuantityAPI(data) {
  return axios.patch("/cart/update-quantity", data);
}

function* UpdateQuantity(action) {
  // 액션을 받음
  try {
    const result = yield call(UpdateQuantityAPI, action.data);
    console.log(result);
    yield put({
      // 액션을 dispatch
      type: UPDATE_QUANTITY_SUCCESS,
    });
  } catch (e) {
    console.log(action.data);
    console.error(e);
    yield put({
      type: UPDATE_QUANTITY_FAILURE,
      error: e.response.data.errorMessage,
    });
  }
}

function* watchAddMyCart() {
  yield takeLatest(ADD_MY_CART_REQUEST, AddMyCart);
}
function* watchDeleteCartMenu() {
  yield takeLatest(DELETE_CART_MENU_REQUEST, DeleteCartMenu);
}
function* watchUpdateQuantity() {
  yield takeLatest(UPDATE_QUANTITY_REQUEST, UpdateQuantity);
}
export default function* cartSaga() {
  yield all([
    fork(watchAddMyCart),
    fork(watchDeleteCartMenu),
    fork(watchUpdateQuantity),
  ]);
}
