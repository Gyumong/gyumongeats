webpackHotUpdate_N_E("pages/search",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _StyleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StyleForm */ "./components/StyleForm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");



var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\gyumongeats\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @format */



 // eslint-disable-next-line react/prop-types

var LoginForm = function LoginForm(_ref) {
  _s();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["FormBlock"], {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\uADDC\uBABD\uC774\uCE20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-id",
        placeholder: "\uC544\uC774\uB514",
        value: id,
        onChange: onChangeId
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-password",
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        value: password,
        onChange: onChangePassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ButtonBlock"], {
      htmlType: "submit",
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      passHref: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "XDBWGSalF7xldTftSzZVSBOwwyA=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();

/** @format */

/* harmony default export */ __webpack_exports__["default"] = (_s(function () {
  _s();

  var initalValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initalValue),
      value = _useState[0],
      setValue = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setValue(e.target.value);
  }, []);
  return [value, handler];
}, "V6Q4N/cH+hf5LwegX4vNr83wWyo="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZUlucHV0LmpzIl0sIm5hbWVzIjpbIkxvZ2luRm9ybSIsInNldElzTG9nZ2VkSW4iLCJ1c2VJbnB1dCIsImlkIiwib25DaGFuZ2VJZCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImluaXRhbFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsImUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBdUI7QUFBQTs7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9COztBQUFBLGtCQUNkQywrREFBUSxDQUFDLEVBQUQsQ0FETTtBQUFBO0FBQUEsTUFDaENDLEVBRGdDO0FBQUEsTUFDNUJDLFVBRDRCOztBQUFBLG1CQUVGRiwrREFBUSxDQUFDLEVBQUQsQ0FGTjtBQUFBO0FBQUEsTUFFaENHLFFBRmdDO0FBQUEsTUFFdEJDLGdCQUZzQjs7QUFJdkMsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDckNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxFQUFaLEVBQWdCRSxRQUFoQjtBQUNBSixpQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNELEdBSCtCLEVBRzdCLENBQUNFLEVBQUQsRUFBS0UsUUFBTCxDQUg2QixDQUFoQztBQUlBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVcsWUFBUSxFQUFFRSxZQUFyQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsWUFBSSxFQUFDLFNBRFA7QUFFRSxtQkFBVyxFQUFDLG9CQUZkO0FBR0UsYUFBSyxFQUFFSixFQUhUO0FBSUUsZ0JBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBVUU7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUNFLFlBQUksRUFBQyxlQURQO0FBRUUsbUJBQVcsRUFBQywwQkFGZDtBQUdFLGFBQUssRUFBRUMsUUFIVDtBQUlFLGdCQUFRLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixlQWtCRSxxRUFBQyxzREFBRDtBQUFhLGNBQVEsRUFBQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQW1CRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxTQUFYO0FBQXFCLGNBQVEsTUFBN0I7QUFBQSw2QkFDRSxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FqQ0Q7O0dBQU1OLFM7VUFDcUJFLHVELEVBQ1lBLHVEOzs7S0FGakNGLFM7QUFtQ1NBLHdFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFFQTtBQUVlLDhFQUF3QjtBQUFBOztBQUFBLE1BQXZCVyxXQUF1Qix1RUFBVCxJQUFTOztBQUFBLGtCQUNYQyxzREFBUSxDQUFDRCxXQUFELENBREc7QUFBQSxNQUM5QkUsS0FEOEI7QUFBQSxNQUN2QkMsUUFEdUI7O0FBRXJDLE1BQU1DLE9BQU8sR0FBR1AseURBQVcsQ0FBQyxVQUFDUSxDQUFELEVBQU87QUFDakNGLFlBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFGLENBQVNKLEtBQVYsQ0FBUjtBQUNELEdBRjBCLEVBRXhCLEVBRndCLENBQTNCO0FBR0EsU0FBTyxDQUFDQSxLQUFELEVBQVFFLE9BQVIsQ0FBUDtBQUNELENBTkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjg3NjUxN2RlYjBiNDUwYzdlM2Y0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEZvcm1CbG9jaywgSW5wdXRCbG9jaywgQnV0dG9uQmxvY2ssIEFCbG9jayB9IGZyb20gXCIuL1N0eWxlRm9ybVwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZUlucHV0XCI7XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG5jb25zdCBMb2dpbkZvcm0gPSAoeyBzZXRJc0xvZ2dlZEluIH0pID0+IHtcclxuICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xyXG4gICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcclxuICB9LCBbaWQsIHBhc3N3b3JkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQmxvY2sgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxoMT7qt5zrqr3snbTsuKA8L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgICBuYW1lPVwidXNlci1pZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICB2YWx1ZT17aWR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b25CbG9jayBodG1sVHlwZT1cInN1Ym1pdFwiPuuhnOq3uOyduDwvQnV0dG9uQmxvY2s+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgPEFCbG9jaz7tmozsm5DqsIDsnoU8L0FCbG9jaz5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9Gb3JtQmxvY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGluaXRhbFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyXTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==