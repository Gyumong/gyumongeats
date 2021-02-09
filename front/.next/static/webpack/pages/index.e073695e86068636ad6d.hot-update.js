webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, loginRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createReducer */ "./reducers/createReducer.js");


var _createReducer;

/** @format */

var initialState = {
  logInLoading: false,
  // 로그인 시도중
  logInError: null,
  logInDone: false,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutError: null,
  logOutDone: false,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null
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
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: "LOG_IN_REQUEST",
    data: data
  };
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwibG9nSW5Eb25lIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJtZSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiY3JlYXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLGNBQVksRUFBRSxLQURLO0FBQ0U7QUFDckJDLFlBQVUsRUFBRSxJQUZPO0FBR25CQyxXQUFTLEVBQUUsS0FIUTtBQUluQkMsZUFBYSxFQUFFLEtBSkk7QUFJRztBQUN0QkMsYUFBVyxFQUFFLElBTE07QUFNbkJDLFlBQVUsRUFBRSxLQU5PO0FBT25CQyxlQUFhLEVBQUUsS0FQSTtBQU9HO0FBQ3RCQyxZQUFVLEVBQUUsS0FSTztBQVNuQkMsYUFBVyxFQUFFLElBVE07QUFVbkJDLElBQUUsRUFBRTtBQVZlLENBQXJCO0FBYU8sSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFELEVBQVU7QUFDMUMsU0FBTztBQUNMQyxRQUFJLEVBQUUsZ0JBREQ7QUFFTEQsUUFBSSxFQUFKQTtBQUZLLEdBQVA7QUFJRCxDQUxNO0FBT1FFLDZIQUFhLENBQUN2QixZQUFELGtJQUN6QlcsY0FEeUIsRUFDUixVQUFDYSxLQUFELEVBQVc7QUFDM0JBLE9BQUssQ0FBQ3ZCLFlBQU4sR0FBcUIsSUFBckI7QUFDQXVCLE9BQUssQ0FBQ3RCLFVBQU4sR0FBbUIsSUFBbkI7QUFDQXNCLE9BQUssQ0FBQ3JCLFNBQU4sR0FBa0IsS0FBbEI7QUFDRCxDQUx5Qiw2R0FNekJTLGNBTnlCLEVBTVIsVUFBQ1ksS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DRCxPQUFLLENBQUN2QixZQUFOLEdBQXFCLEtBQXJCO0FBQ0F1QixPQUFLLENBQUNkLEVBQU4sR0FBV2UsTUFBTSxDQUFDSixJQUFsQjtBQUNBRyxPQUFLLENBQUNyQixTQUFOLEdBQWtCLElBQWxCO0FBQ0QsQ0FWeUIsNkdBV3pCVSxjQVh5QixFQVdSLFVBQUNXLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNuQ0QsT0FBSyxDQUFDdkIsWUFBTixHQUFxQixLQUFyQjtBQUNBdUIsT0FBSyxDQUFDdEIsVUFBTixHQUFtQnVCLE1BQU0sQ0FBQ0MsS0FBMUI7QUFDRCxDQWR5Qiw2R0FlekJaLGVBZnlCLEVBZVAsVUFBQ1UsS0FBRCxFQUFXO0FBQzVCQSxPQUFLLENBQUNwQixhQUFOLEdBQXNCLElBQXRCO0FBQ0FvQixPQUFLLENBQUNuQixXQUFOLEdBQW9CLElBQXBCO0FBQ0FtQixPQUFLLENBQUNsQixVQUFOLEdBQW1CLEtBQW5CO0FBQ0QsQ0FuQnlCLDZHQW9CekJTLGVBcEJ5QixFQW9CUCxVQUFDUyxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ3BCLGFBQU4sR0FBc0IsS0FBdEI7QUFDQW9CLE9BQUssQ0FBQ2xCLFVBQU4sR0FBbUIsSUFBbkI7QUFDQWtCLE9BQUssQ0FBQ2QsRUFBTixHQUFXLElBQVg7QUFDRCxDQXhCeUIsNkdBeUJ6Qk0sZUF6QnlCLEVBeUJQLFVBQUNRLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNwQ0QsT0FBSyxDQUFDcEIsYUFBTixHQUFzQixLQUF0QjtBQUNBb0IsT0FBSyxDQUFDbkIsV0FBTixHQUFvQm9CLE1BQU0sQ0FBQ0MsS0FBM0I7QUFDRCxDQTVCeUIsNkdBNkJ6QlQsZUE3QnlCLEVBNkJQLFVBQUNPLEtBQUQsRUFBVztBQUM1QkEsT0FBSyxDQUFDakIsYUFBTixHQUFzQixJQUF0QjtBQUNBaUIsT0FBSyxDQUFDZixXQUFOLEdBQW9CLElBQXBCO0FBQ0FlLE9BQUssQ0FBQ2hCLFVBQU4sR0FBbUIsS0FBbkI7QUFDRCxDQWpDeUIsNkdBa0N6QlUsZUFsQ3lCLEVBa0NQLFVBQUNNLEtBQUQsRUFBVztBQUM1QkEsT0FBSyxDQUFDakIsYUFBTixHQUFzQixLQUF0QjtBQUNBaUIsT0FBSyxDQUFDaEIsVUFBTixHQUFtQixJQUFuQjtBQUNELENBckN5Qiw2R0FzQ3pCVyxlQXRDeUIsRUFzQ1AsVUFBQ0ssS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3BDRCxPQUFLLENBQUNqQixhQUFOLEdBQXNCLEtBQXRCO0FBQ0FpQixPQUFLLENBQUNmLFdBQU4sR0FBb0JnQixNQUFNLENBQUNDLEtBQTNCO0FBQ0QsQ0F6Q3lCLG1CQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMDczNjk1ZTg2MDY4NjM2YWQ2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCBjcmVhdGVSZWR1Y2VyIGZyb20gXCIuL2NyZWF0ZVJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5FcnJvcjogbnVsbCxcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+E7KSRXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICBzaWduVXBEb25lOiBmYWxzZSxcclxuICBzaWduVXBFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBcIkxPR19JTl9SRVFVRVNUXCIsXHJcbiAgICBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xyXG4gIFtMT0dfSU5fUkVRVUVTVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgIHN0YXRlLmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgfSxcclxuICBbTE9HX0lOX1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3RhdGUubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgc3RhdGUubG9nSW5Eb25lID0gdHJ1ZTtcclxuICB9LFxyXG4gIFtMT0dfSU5fRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgfSxcclxuICBbTE9HX09VVF9SRVFVRVNUXTogKHN0YXRlKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHN0YXRlLmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgIHN0YXRlLmxvZ091dERvbmUgPSBmYWxzZTtcclxuICB9LFxyXG4gIFtMT0dfT1VUX1NVQ0NFU1NdOiAoc3RhdGUpID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgc3RhdGUubWUgPSBudWxsO1xyXG4gIH0sXHJcbiAgW0xPR19PVVRfRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICB9LFxyXG4gIFtTSUdOX1VQX1JFUVVFU1RdOiAoc3RhdGUpID0+IHtcclxuICAgIHN0YXRlLnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgW1NJR05fVVBfU1VDQ0VTU106IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgfSxcclxuICBbU0lHTl9VUF9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gIH0sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9