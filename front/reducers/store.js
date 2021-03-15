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
  loadDStoresLoading: false,
  loadDStoresDone: false,
  loadDStoresError: null,
  loadMStoresLoading: false,
  loadMStoresDone: false,
  loadMStoresError: null,
  loadAStoresLoading: false,
  loadAStoresDone: false,
  loadAStoresError: null,
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

export const LOAD_ASTORES_REQUEST = "LOAD_ASTORES_REQUEST";
export const LOAD_ASTORES_SUCCESS = "LOAD_ASTORES_SUCCESS";
export const LOAD_ASTORES_FAILURE = "LOAD_ASTORES_FAILURE";

export const LOAD_MSTORES_REQUEST = "LOAD_MSTORES_REQUEST";
export const LOAD_MSTORES_SUCCESS = "LOAD_MSTORES_SUCCESS";
export const LOAD_MSTORES_FAILURE = "LOAD_MSTORES_FAILURE";

export const LOAD_DSTORES_REQUEST = "LOAD_DSTORES_REQUEST";
export const LOAD_DSTORES_SUCCESS = "LOAD_DSTORES_SUCCESS";
export const LOAD_DSTORES_FAILURE = "LOAD_DSTORES_FAILURE";

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
  [LOAD_ASTORES_REQUEST]: (state) => {
    state.loadAStoresLoading = true;
    state.loadAStoresError = null;
    state.loadAStoresDone = false;
  },
  [LOAD_ASTORES_SUCCESS]: (state, action) => {
    state.loadAStoresLoading = false;
    state.loadAStoresDone = true;
    state.store = action.data;
  },
  [LOAD_ASTORES_FAILURE]: (state, action) => {
    state.loadAStoresLoading = false;
    state.loadAStoresError = action.error;
  },
  [LOAD_MSTORES_REQUEST]: (state) => {
    state.loadMStoresLoading = true;
    state.loadMStoresError = null;
    state.loadMStoresDone = false;
  },
  [LOAD_MSTORES_SUCCESS]: (state, action) => {
    state.loadMStoresLoading = false;
    state.loadMStoresDone = true;
    state.store = action.data;
  },
  [LOAD_MSTORES_FAILURE]: (state, action) => {
    state.loadMStoresLoading = false;
    state.loadMStoresError = action.error;
  },
  [LOAD_DSTORES_REQUEST]: (state) => {
    state.loadDStoresLoading = true;
    state.loadDStoresError = null;
    state.loadDStoresDone = false;
  },
  [LOAD_DSTORES_SUCCESS]: (state, action) => {
    state.loadDStoresLoading = false;
    state.loadDStoresDone = true;
    state.store = action.data;
  },
  [LOAD_DSTORES_FAILURE]: (state, action) => {
    state.loadDStoresLoading = false;
    state.loadDStoresError = action.error;
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
