webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReducer */ "./reducers/createReducer.js");


var _createReducer;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @format */

var initialState = {
  logInLoading: false,
  logInError: null,
  logInDone: false,
  logOutLoading: false,
  logOutError: null,
  logOutDone: false,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "규몽",
    id: 1,
    phone: "010-1234-1234",
    address: "문정동"
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_createReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState, (_createReducer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_IN_REQUEST, function (state) {
  state.logInLoading = true;
  state.logInError = null;
  state.logInDone = false;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_IN_SUCCESS, function (state, action) {
  state.logInLoading = false;
  state.me = dummyUser(action.data);
  state.logInDone = true;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_IN_FAILURE, function (state, action) {
  state.logInLoading = false;
  state.logInError = action.error;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_OUT_REQUEST, function (state) {
  state.logOutLoading = true;
  state.logOutError = null;
  state.logOutDone = false;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_OUT_SUCCESS, function (state) {
  state.logOutLoading = false;
  state.logOutDone = true;
  state.me = null;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_OUT_FAILURE, function (state, action) {
  state.logOutLoading = false;
  state.logOutError = action.error;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, SIGN_UP_REQUEST, function (state) {
  state.signUpLoading = true;
  state.signUpError = null;
  state.signUpDone = false;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, SIGN_UP_SUCCESS, function (state) {
  state.signUpLoading = false;
  state.signUpDone = true;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, SIGN_UP_FAILURE, function (state, action) {
  state.signUpLoading = false;
  state.signUpError = action.error;
}), _createReducer)));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwibG9nSW5Eb25lIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwicGhvbmUiLCJhZGRyZXNzIiwiY3JlYXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRXJyb3IiLCJzaWduVXBEb25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxjQUFZLEVBQUUsS0FESztBQUVuQkMsWUFBVSxFQUFFLElBRk87QUFHbkJDLFdBQVMsRUFBRSxLQUhRO0FBSW5CQyxlQUFhLEVBQUUsS0FKSTtBQUtuQkMsYUFBVyxFQUFFLElBTE07QUFNbkJDLFlBQVUsRUFBRSxLQU5PO0FBT25CQyxJQUFFLEVBQUUsSUFQZTtBQVFuQkMsWUFBVSxFQUFFLEVBUk87QUFTbkJDLFdBQVMsRUFBRTtBQVRRLENBQXJCO0FBWU8sSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCOztBQUVQLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQ7QUFBQSx5Q0FDYkEsSUFEYTtBQUVoQkMsWUFBUSxFQUFFLElBRk07QUFHaEJDLE1BQUUsRUFBRSxDQUhZO0FBSWhCQyxTQUFLLEVBQUUsZUFKUztBQUtoQkMsV0FBTyxFQUFFO0FBTE87QUFBQSxDQUFsQjs7QUFRZUMsNkhBQWEsQ0FBQ3pCLFlBQUQsa0lBQ3pCVSxjQUR5QixFQUNSLFVBQUNnQixLQUFELEVBQVc7QUFDM0JBLE9BQUssQ0FBQ3pCLFlBQU4sR0FBcUIsSUFBckI7QUFDQXlCLE9BQUssQ0FBQ3hCLFVBQU4sR0FBbUIsSUFBbkI7QUFDQXdCLE9BQUssQ0FBQ3ZCLFNBQU4sR0FBa0IsS0FBbEI7QUFDRCxDQUx5Qiw2R0FNekJRLGNBTnlCLEVBTVIsVUFBQ2UsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DRCxPQUFLLENBQUN6QixZQUFOLEdBQXFCLEtBQXJCO0FBQ0F5QixPQUFLLENBQUNuQixFQUFOLEdBQVdZLFNBQVMsQ0FBQ1EsTUFBTSxDQUFDUCxJQUFSLENBQXBCO0FBQ0FNLE9BQUssQ0FBQ3ZCLFNBQU4sR0FBa0IsSUFBbEI7QUFDRCxDQVZ5Qiw2R0FXekJTLGNBWHlCLEVBV1IsVUFBQ2MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DRCxPQUFLLENBQUN6QixZQUFOLEdBQXFCLEtBQXJCO0FBQ0F5QixPQUFLLENBQUN4QixVQUFOLEdBQW1CeUIsTUFBTSxDQUFDQyxLQUExQjtBQUNELENBZHlCLDZHQWV6QmYsZUFmeUIsRUFlUCxVQUFDYSxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ3RCLGFBQU4sR0FBc0IsSUFBdEI7QUFDQXNCLE9BQUssQ0FBQ3JCLFdBQU4sR0FBb0IsSUFBcEI7QUFDQXFCLE9BQUssQ0FBQ3BCLFVBQU4sR0FBbUIsS0FBbkI7QUFDRCxDQW5CeUIsNkdBb0J6QlEsZUFwQnlCLEVBb0JQLFVBQUNZLEtBQUQsRUFBVztBQUM1QkEsT0FBSyxDQUFDdEIsYUFBTixHQUFzQixLQUF0QjtBQUNBc0IsT0FBSyxDQUFDcEIsVUFBTixHQUFtQixJQUFuQjtBQUNBb0IsT0FBSyxDQUFDbkIsRUFBTixHQUFXLElBQVg7QUFDRCxDQXhCeUIsNkdBeUJ6QlEsZUF6QnlCLEVBeUJQLFVBQUNXLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNwQ0QsT0FBSyxDQUFDdEIsYUFBTixHQUFzQixLQUF0QjtBQUNBc0IsT0FBSyxDQUFDckIsV0FBTixHQUFvQnNCLE1BQU0sQ0FBQ0MsS0FBM0I7QUFDRCxDQTVCeUIsNkdBNkJ6QlosZUE3QnlCLEVBNkJQLFVBQUNVLEtBQUQsRUFBVztBQUM1QkEsT0FBSyxDQUFDRyxhQUFOLEdBQXNCLElBQXRCO0FBQ0FILE9BQUssQ0FBQ0ksV0FBTixHQUFvQixJQUFwQjtBQUNBSixPQUFLLENBQUNLLFVBQU4sR0FBbUIsS0FBbkI7QUFDRCxDQWpDeUIsNkdBa0N6QmQsZUFsQ3lCLEVBa0NQLFVBQUNTLEtBQUQsRUFBVztBQUM1QkEsT0FBSyxDQUFDRyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FILE9BQUssQ0FBQ0ssVUFBTixHQUFtQixJQUFuQjtBQUNELENBckN5Qiw2R0FzQ3pCYixlQXRDeUIsRUFzQ1AsVUFBQ1EsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3BDRCxPQUFLLENBQUNHLGFBQU4sR0FBc0IsS0FBdEI7QUFDQUgsT0FBSyxDQUFDSSxXQUFOLEdBQW9CSCxNQUFNLENBQUNDLEtBQTNCO0FBQ0QsQ0F6Q3lCLG1CQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNWRmMzI2MGQzYTE2ODk1NDcwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gXCIuL2NyZWF0ZVJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogXCLqt5zrqr1cIixcclxuICBpZDogMSxcclxuICBwaG9uZTogXCIwMTAtMTIzNC0xMjM0XCIsXHJcbiAgYWRkcmVzczogXCLrrLjsoJXrj5lcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xyXG4gIFtMT0dfSU5fUkVRVUVTVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgIHN0YXRlLmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgfSxcclxuICBbTE9HX0lOX1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3RhdGUubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICBzdGF0ZS5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgW0xPR19JTl9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICB9LFxyXG4gIFtMT0dfT1VUX1JFUVVFU1RdOiAoc3RhdGUpID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgc3RhdGUubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgW0xPR19PVVRfU1VDQ0VTU106IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICBzdGF0ZS5tZSA9IG51bGw7XHJcbiAgfSxcclxuICBbTE9HX09VVF9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gIH0sXHJcbiAgW1NJR05fVVBfUkVRVUVTVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICBzdGF0ZS5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICBzdGF0ZS5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgfSxcclxuICBbU0lHTl9VUF9TVUNDRVNTXTogKHN0YXRlKSA9PiB7XHJcbiAgICBzdGF0ZS5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5zaWduVXBEb25lID0gdHJ1ZTtcclxuICB9LFxyXG4gIFtTSUdOX1VQX0ZBSUxVUkVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=