/** @format */

import produce from 'immer';

export default function createReducer(initState, handlerMap) {
  return function (state = initState, action) {
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
