/** @format */

import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import store from "./store";
import cart from "./cart";
import order from "./order";
import review from "./review";
import bookmark from "./bookmark";
import { combineReducers, AnyAction } from "redux";
import { IUser } from "@typings/db";

export interface State {
  users: IUser;
}
const rootReducer = (state: State | undefined, action: AnyAction, ...rest: unknown[]) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        // store,
        // cart,
        // order,
        // review,
        // bookmark,
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
