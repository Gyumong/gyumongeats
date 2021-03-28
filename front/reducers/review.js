/** @format */

import createReducer from "./createReducer";

const initialState = {
  writeReviewLoading: false,
  writeReviewDone: false,
  writeReviewError: null,
};
export const WRITE_REVIEW_REQUEST = "WRITE_REVIEW_REQUEST";
export const WRITE_REVIEW_SUCCESS = "WRITE_REVIEW_SUCCESS";
export const WRITE_REVIEW_FAILURE = "WRITE_REVIEW_FAILURE";

export default createReducer(initialState, {
  [WRITE_REVIEW_REQUEST]: (state) => {
    state.writeReviewLoading = true;
    state.writeReviewError = null;
    state.writeReviewDone = false;
  },
  [WRITE_REVIEW_SUCCESS]: (state) => {
    state.writeReviewLoading = false;
    state.writeReviewDone = true;
  },
  [WRITE_REVIEW_FAILURE]: (state, action) => {
    state.writeReviewLoading = false;
    state.writeReviewError = action.error;
  },
});
