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
  logOutLoading: false,
  logOutError: null,
  logOutDone: false,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwibG9nSW5Eb25lIiwibG9nT3V0TG9hZGluZyIsImxvZ091dEVycm9yIiwibG9nT3V0RG9uZSIsIm1lIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiY3JlYXRlUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcEVycm9yIiwic2lnblVwRG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxjQUFZLEVBQUUsS0FESztBQUVuQkMsWUFBVSxFQUFFLElBRk87QUFHbkJDLFdBQVMsRUFBRSxLQUhRO0FBSW5CQyxlQUFhLEVBQUUsS0FKSTtBQUtuQkMsYUFBVyxFQUFFLElBTE07QUFNbkJDLFlBQVUsRUFBRSxLQU5PO0FBT25CQyxJQUFFLEVBQUU7QUFQZSxDQUFyQjtBQVVPLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVRQyw2SEFBYSxDQUFDakIsWUFBRCxrSUFDekJRLGNBRHlCLEVBQ1IsVUFBQ1UsS0FBRCxFQUFXO0FBQzNCQSxPQUFLLENBQUNqQixZQUFOLEdBQXFCLElBQXJCO0FBQ0FpQixPQUFLLENBQUNoQixVQUFOLEdBQW1CLElBQW5CO0FBQ0FnQixPQUFLLENBQUNmLFNBQU4sR0FBa0IsS0FBbEI7QUFDRCxDQUx5Qiw2R0FNekJNLGNBTnlCLEVBTVIsVUFBQ1MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DRCxPQUFLLENBQUNqQixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FpQixPQUFLLENBQUNYLEVBQU4sR0FBV1ksTUFBTSxDQUFDQyxJQUFsQjtBQUNBRixPQUFLLENBQUNmLFNBQU4sR0FBa0IsSUFBbEI7QUFDRCxDQVZ5Qiw2R0FXekJPLGNBWHlCLEVBV1IsVUFBQ1EsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ25DRCxPQUFLLENBQUNqQixZQUFOLEdBQXFCLEtBQXJCO0FBQ0FpQixPQUFLLENBQUNoQixVQUFOLEdBQW1CaUIsTUFBTSxDQUFDRSxLQUExQjtBQUNELENBZHlCLDZHQWV6QlYsZUFmeUIsRUFlUCxVQUFDTyxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ2QsYUFBTixHQUFzQixJQUF0QjtBQUNBYyxPQUFLLENBQUNiLFdBQU4sR0FBb0IsSUFBcEI7QUFDQWEsT0FBSyxDQUFDWixVQUFOLEdBQW1CLEtBQW5CO0FBQ0QsQ0FuQnlCLDZHQW9CekJNLGVBcEJ5QixFQW9CUCxVQUFDTSxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ2QsYUFBTixHQUFzQixLQUF0QjtBQUNBYyxPQUFLLENBQUNaLFVBQU4sR0FBbUIsSUFBbkI7QUFDQVksT0FBSyxDQUFDWCxFQUFOLEdBQVcsSUFBWDtBQUNELENBeEJ5Qiw2R0F5QnpCTSxlQXpCeUIsRUF5QlAsVUFBQ0ssS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3BDRCxPQUFLLENBQUNkLGFBQU4sR0FBc0IsS0FBdEI7QUFDQWMsT0FBSyxDQUFDYixXQUFOLEdBQW9CYyxNQUFNLENBQUNFLEtBQTNCO0FBQ0QsQ0E1QnlCLDZHQTZCekJQLGVBN0J5QixFQTZCUCxVQUFDSSxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ0ksYUFBTixHQUFzQixJQUF0QjtBQUNBSixPQUFLLENBQUNLLFdBQU4sR0FBb0IsSUFBcEI7QUFDQUwsT0FBSyxDQUFDTSxVQUFOLEdBQW1CLEtBQW5CO0FBQ0QsQ0FqQ3lCLDZHQWtDekJULGVBbEN5QixFQWtDUCxVQUFDRyxLQUFELEVBQVc7QUFDNUJBLE9BQUssQ0FBQ0ksYUFBTixHQUFzQixLQUF0QjtBQUNBSixPQUFLLENBQUNNLFVBQU4sR0FBbUIsSUFBbkI7QUFDRCxDQXJDeUIsNkdBc0N6QlIsZUF0Q3lCLEVBc0NQLFVBQUNFLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNwQ0QsT0FBSyxDQUFDSSxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FKLE9BQUssQ0FBQ0ssV0FBTixHQUFvQkosTUFBTSxDQUFDRSxLQUEzQjtBQUNELENBekN5QixtQkFBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODMxODJlODZkNWUwYTI0OGZiZTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tIFwiLi9jcmVhdGVSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbWU6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge1xyXG4gIFtMT0dfSU5fUkVRVUVTVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgIHN0YXRlLmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgfSxcclxuICBbTE9HX0lOX1NVQ0NFU1NdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3RhdGUubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgc3RhdGUubG9nSW5Eb25lID0gdHJ1ZTtcclxuICB9LFxyXG4gIFtMT0dfSU5fRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgfSxcclxuICBbTE9HX09VVF9SRVFVRVNUXTogKHN0YXRlKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgIHN0YXRlLmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgIHN0YXRlLmxvZ091dERvbmUgPSBmYWxzZTtcclxuICB9LFxyXG4gIFtMT0dfT1VUX1NVQ0NFU1NdOiAoc3RhdGUpID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgc3RhdGUubWUgPSBudWxsO1xyXG4gIH0sXHJcbiAgW0xPR19PVVRfRkFJTFVSRV06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICB9LFxyXG4gIFtTSUdOX1VQX1JFUVVFU1RdOiAoc3RhdGUpID0+IHtcclxuICAgIHN0YXRlLnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgc3RhdGUuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgW1NJR05fVVBfU1VDQ0VTU106IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgfSxcclxuICBbU0lHTl9VUF9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gIH0sXHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9