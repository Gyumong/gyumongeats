/** @format */

import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import store from "./store";
import cart from "./cart";
import order from "./order";
import review from "./review";
import bookmark from "./bookmark";
import { combineReducers } from "redux";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
        store,
        cart,
        order,
        review,
        bookmark,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
