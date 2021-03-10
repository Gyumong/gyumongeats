/** @format */
import createReducer from "./createReducer";
export const initialState = {
  onModalDone: false,
  oneStore: null,
  store: [],
  menu: [],
  storeid: 10,
  menuid: 0,
  hasMoreMenu: true,
  loadStoresLoading: false,
  loadStoresDone: false,
  loadStoresError: null,
  loadMenusLoading: false,
  loadMenusDone: false,
  loadMenusError: null,
  loadOneStoreLoading: false,
  loadOneStoreDone: false,
  loadOneStoreError: null,
};

export const MORE_STORES = "MORE_STORES";

export const ON_MODAL = "ON_MODAL";
export const OFF_MODAL = "OFF_MODAL";
export const LOAD_STORES_REQUEST = "LOAD_STORES_REQUEST";
export const LOAD_STORES_SUCCESS = "LOAD_STORES_SUCCESS";
export const LOAD_STORES_FAILURE = "LOAD_STORES_FAILURE";

export const LOAD_ONESTORE_REQUEST = "LOAD_ONESTORE_REQUEST";
export const LOAD_ONESTORE_SUCCESS = "LOAD_ONESTORE_SUCCESS";
export const LOAD_ONESTORE_FAILURE = "LOAD_ONESTORE_FAILURE";

export const LOAD_MENUS_REQUEST = "LOAD_MENUS_REQUEST";
export const LOAD_MENUS_SUCCESS = "LOAD_MENUS_SUCCESS";
export const LOAD_MENUS_FAILURE = "LOAD_MENUS_FAILURE";

export default createReducer(initialState, {
  [MORE_STORES]: (state) => {
    state.storeid = state.storeid + 10;
  },
  [ON_MODAL]: (state) => {
    state.onModalDone = true;
  },
  [OFF_MODAL]: (state) => {
    state.onModalDone = false;
  },
  [LOAD_MENUS_REQUEST]: (state) => {
    state.loadMenusLoading = true;
    state.loadMenusError = null;
    state.loadMenusDone = false;
  },
  [LOAD_MENUS_SUCCESS]: (state, action) => {
    state.loadMenusLoading = false;
    state.loadMenusDone = true;
    state.menu = state.menu.concat(
      action.data.slice(state.menuid, state.menuid + 10)
    );
    state.menuid = state.menuid + 10;
    state.hasMoreMenu = state.menu.length < 150;
  },
  [LOAD_MENUS_FAILURE]: (state, action) => {
    state.loadMENUSLoading = false;
    state.loadMENUSError = action.error;
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
  },
  [LOAD_STORES_FAILURE]: (state, action) => {
    state.loadStoresLoading = false;
    state.loadStoresError = action.error;
  },
  [LOAD_ONESTORE_REQUEST]: (state) => {
    state.loadOneStoreLoading = true;
    state.loadOneStoreError = null;
    state.loadOneStoreDone = false;
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
