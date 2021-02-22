/** @format */
import createReducer from "./createReducer";
export const initialState = {
  onModalDone: false,
  oneStore: null,
  store: [],
  hasMoreStore: true,
  loadStoresLoading: false,
  loadStoresDone: false,
  loadStoresError: null,
  loadOneStoreLoading: false,
  loadOneStoreDone: false,
  loadOneStoreError: null,
};

export const ON_MODAL = "ON_MODAL";
export const OFF_MODAL = "OFF_MODAL";
export const LOAD_STORES_REQUEST = "LOAD_STORES_REQUEST";
export const LOAD_STORES_SUCCESS = "LOAD_STORES_SUCCESS";
export const LOAD_STORES_FAILURE = "LOAD_STORES_FAILURE";

export const LOAD_ONESTORE_REQUEST = "LOAD_ONESTORE_REQUEST";
export const LOAD_ONESTORE_SUCCESS = "LOAD_ONESTORE_SUCCESS";
export const LOAD_ONESTORE_FAILURE = "LOAD_ONESTORE_FAILURE";

export default createReducer(initialState, {
  [ON_MODAL]: (state) => {
    state.onModalDone = true;
  },
  [OFF_MODAL]: (state) => {
    state.onModalDone = false;
  },
  [LOAD_STORES_REQUEST]: (state) => {
    state.loadStoresLoading = true;
    state.loadStoresError = null;
    state.loadStoresDone = false;
  },
  [LOAD_STORES_SUCCESS]: (state, action) => {
    state.loadStoresLoading = false;
    state.loadStoresDone = true;
    state.store = state.store.concat(action.data);
    state.hasMoreStore = state.store.length < 50;
  },
  [LOAD_STORES_FAILURE]: (state, action) => {
    state.loadStoresLoading = false;
    state.loadStoresError = action.error;
  },
  [LOAD_ONESTORE_REQUEST]: (state) => {
    state.loadOneStoreLoading = true;
    state.loadOneStoreError = null;
    state.loadStoreDone = false;
  },
  [LOAD_ONESTORE_SUCCESS]: (state, action) => {
    state.loadOneStoreLoading = false;
    state.loadOneStoreDone = true;
    state.oneStore = action.data;
  },
  [LOAD_ONESTORE_FAILURE]: (state, action) => {
    state.loadOneStoreLoading = false;
    state.loadOneStoreError = action.error;
  },
});
