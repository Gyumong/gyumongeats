/** @format */

import createReducer from "./createReducer";

const initialState = {
  addBookMarkLoading: false,
  addBookMarkDone: false,
  addBookMarkError: null,
  deleteBookMarkLoading: false,
  deleteBookMarkDone: false,
  deleteBookMarkError: null,
};
export const ADD_BOOKMARK_REQUEST = "ADD_BOOKMARK_REQUEST";
export const ADD_BOOKMARK_SUCCESS = "ADD_BOOKMARK_SUCCESS";
export const ADD_BOOKMARK_FAILURE = "ADD_BOOKMARK_FAILURE";

export const DELETE_BOOKMARK_REQUEST = "DELETE_BOOKMARK_REQUEST";
export const DELETE_BOOKMARK_SUCCESS = "DELETE_BOOKMARK_SUCCESS";
export const DELETE_BOOKMARK_FAILURE = "DELETE_BOOKMARK_FAILURE";

export default createReducer(initialState, {
  [ADD_BOOKMARK_REQUEST]: (state) => {
    state.addBookMarkLoading = true;
    state.addBookMarkError = null;
    state.addBookMarkDone = false;
  },
  [ADD_BOOKMARK_SUCCESS]: (state) => {
    state.addBookMarkLoading = false;
    state.addBookMarkDone = true;
  },
  [ADD_BOOKMARK_FAILURE]: (state, action) => {
    state.addBookMarkLoading = false;
    state.addBookMarkError = action.error;
  },
  [DELETE_BOOKMARK_REQUEST]: (state) => {
    state.DELETEBookMarkLoading = true;
    state.deleteBookMarkError = null;
    state.deleteBookMarkDone = false;
  },
  [DELETE_BOOKMARK_SUCCESS]: (state) => {
    state.deleteBookMarkLoading = false;
    state.deleteBookMarkDone = true;
  },
  [DELETE_BOOKMARK_FAILURE]: (state, action) => {
    state.deleteBookMarkLoading = false;
    state.deleteBookMarkError = action.error;
  },
});
