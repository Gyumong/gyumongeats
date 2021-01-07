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

/** @format */

var initialState = {
  logInLoading: false,
  logInError: null,
  logInDone: false,
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
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReducer__WEBPACK_IMPORTED_MODULE_1__["default"])(initialState, (_createReducer = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_IN_REQUEST, function (state) {
  state.logInLoading = true;
  state.logInError = null;
  state.logInDone = false;
}), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_createReducer, LOG_IN_SUCCESS, function (state, action) {
  state.logInLoading = false;
  state.me = action.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwibG9nSW5Eb25lIiwibWUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiY3JlYXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBFcnJvciIsInNpZ25VcERvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsY0FBWSxFQUFFLEtBREs7QUFFbkJDLFlBQVUsRUFBRSxJQUZPO0FBR25CQyxXQUFTLEVBQUUsS0FIUTtBQUluQkMsSUFBRSxFQUFFLElBSmU7QUFLbkJDLFlBQVUsRUFBRSxFQUxPO0FBTW5CQyxXQUFTLEVBQUU7QUFOUSxDQUFyQjtBQVNPLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVRQyw2SEFBYSxDQUFDaEIsWUFBRCxrSUFDekJPLGNBRHlCLEVBQ1IsVUFBQ1UsS0FBRCxFQUFXO0FBQzNCQSxPQUFLLENBQUNoQixZQUFOLEdBQXFCLElBQXJCO0FBQ0FnQixPQUFLLENBQUNmLFVBQU4sR0FBbUIsSUFBbkI7QUFDQWUsT0FBSyxDQUFDZCxTQUFOLEdBQWtCLEtBQWxCO0FBQ0QsQ0FMeUIsNkdBTXpCSyxjQU55QixFQU1SLFVBQUNTLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQ0QsT0FBSyxDQUFDaEIsWUFBTixHQUFxQixLQUFyQjtBQUNBZ0IsT0FBSyxDQUFDYixFQUFOLEdBQVdjLE1BQU0sQ0FBQ0MsSUFBbEI7QUFDQUYsT0FBSyxDQUFDZCxTQUFOLEdBQWtCLElBQWxCO0FBQ0QsQ0FWeUIsNkdBV3pCTSxjQVh5QixFQVdSLFVBQUNRLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQ0QsT0FBSyxDQUFDaEIsWUFBTixHQUFxQixLQUFyQjtBQUNBZ0IsT0FBSyxDQUFDZixVQUFOLEdBQW1CZ0IsTUFBTSxDQUFDRSxLQUExQjtBQUNELENBZHlCLDZHQWV6QlYsZUFmeUIsRUFlUCxVQUFDTyxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ0ksYUFBTixHQUFzQixJQUF0QjtBQUNBSixPQUFLLENBQUNLLFdBQU4sR0FBb0IsSUFBcEI7QUFDQUwsT0FBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0QsQ0FuQnlCLDZHQW9CekJaLGVBcEJ5QixFQW9CUCxVQUFDTSxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ0ksYUFBTixHQUFzQixLQUF0QjtBQUNBSixPQUFLLENBQUNNLFVBQU4sR0FBbUIsSUFBbkI7QUFDQU4sT0FBSyxDQUFDYixFQUFOLEdBQVcsSUFBWDtBQUNELENBeEJ5Qiw2R0F5QnpCUSxlQXpCeUIsRUF5QlAsVUFBQ0ssS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3BDRCxPQUFLLENBQUNJLGFBQU4sR0FBc0IsS0FBdEI7QUFDQUosT0FBSyxDQUFDSyxXQUFOLEdBQW9CSixNQUFNLENBQUNFLEtBQTNCO0FBQ0QsQ0E1QnlCLDZHQTZCekJQLGVBN0J5QixFQTZCUCxVQUFDSSxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ08sYUFBTixHQUFzQixJQUF0QjtBQUNBUCxPQUFLLENBQUNRLFdBQU4sR0FBb0IsSUFBcEI7QUFDQVIsT0FBSyxDQUFDUyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0QsQ0FqQ3lCLDZHQWtDekJaLGVBbEN5QixFQWtDUCxVQUFDRyxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ08sYUFBTixHQUFzQixLQUF0QjtBQUNBUCxPQUFLLENBQUNTLFVBQU4sR0FBbUIsSUFBbkI7QUFDRCxDQXJDeUIsNkdBc0N6QlgsZUF0Q3lCLEVBc0NQLFVBQUNFLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNwQ0QsT0FBSyxDQUFDTyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FQLE9BQUssQ0FBQ1EsV0FBTixHQUFvQlAsTUFBTSxDQUFDRSxLQUEzQjtBQUNELENBekN5QixtQkFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWIwYjk1MjhlZjczOWQ0NzYzOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tIFwiLi9jcmVhdGVSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XHJcbiAgW0xPR19JTl9SRVFVRVNUXTogKHN0YXRlKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgc3RhdGUubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICBzdGF0ZS5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICB9LFxyXG4gIFtMT0dfSU5fU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICBzdGF0ZS5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgW0xPR19JTl9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICB9LFxyXG4gIFtMT0dfT1VUX1JFUVVFU1RdOiAoc3RhdGUpID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgc3RhdGUubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgW0xPR19PVVRfU1VDQ0VTU106IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICBzdGF0ZS5tZSA9IG51bGw7XHJcbiAgfSxcclxuICBbTE9HX09VVF9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gIH0sXHJcbiAgW1NJR05fVVBfUkVRVUVTVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICBzdGF0ZS5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICBzdGF0ZS5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgfSxcclxuICBbU0lHTl9VUF9TVUNDRVNTXTogKHN0YXRlKSA9PiB7XHJcbiAgICBzdGF0ZS5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5zaWduVXBEb25lID0gdHJ1ZTtcclxuICB9LFxyXG4gIFtTSUdOX1VQX0ZBSUxVUkVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgfSxcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=