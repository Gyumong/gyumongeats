webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\gyumongeats\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();

/** @format */





 // eslint-disable-next-line react/prop-types

var LoginForm = function LoginForm(_ref) {
  _s();

  var admin = _ref.admin,
      onCustom = _ref.onCustom,
      onAdmin = _ref.onAdmin;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      adminNumber = _useInput6[0],
      onChangeAdminNumber = _useInput6[1];

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      logInLoading = _useSelector.logInLoading;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    console.log(email, password);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["LOG_IN_REQUEST"],
      data: {
        email: email,
        password: password
      }
    });
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["FormBlock"], {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\uADDC\uBABD\uC774\uCE20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), admin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "admin-email",
        placeholder: "\uC0AC\uC5C5\uC790\uBC88\uD638",
        value: adminNumber,
        onChange: onChangeAdminNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-email",
        placeholder: "\uC544\uC774\uB514",
        value: email,
        onChange: onChangeEmail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-password",
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        value: password,
        onChange: onChangePassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ButtonBlock"], {
      htmlType: "submit",
      loading: logInLoading,
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["LowerBlock"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/signup",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
        onClick: onCustom,
        onCLick: onAdmin,
        children: "\uB4A4\uB85C \uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(LoginForm, "pUsdAWGwUkJCT1T+pnUZiA0EwNQ=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiYWRtaW4iLCJvbkN1c3RvbSIsIm9uQWRtaW4iLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImFkbWluTnVtYmVyIiwib25DaGFuZ2VBZG1pbk51bWJlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJMT0dfSU5fUkVRVUVTVCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBa0M7QUFBQTs7QUFBQSxNQUEvQkMsS0FBK0IsUUFBL0JBLEtBQStCO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDbkJDLCtEQUFRLENBQUMsRUFBRCxDQURXO0FBQUE7QUFBQSxNQUMzQ0MsS0FEMkM7QUFBQSxNQUNwQ0MsYUFEb0M7O0FBQUEsbUJBRWJGLCtEQUFRLENBQUMsRUFBRCxDQUZLO0FBQUE7QUFBQSxNQUUzQ0csUUFGMkM7QUFBQSxNQUVqQ0MsZ0JBRmlDOztBQUFBLG1CQUdQSiwrREFBUSxDQUFDLEVBQUQsQ0FIRDtBQUFBO0FBQUEsTUFHM0NLLFdBSDJDO0FBQUEsTUFHOUJDLG1CQUg4Qjs7QUFBQSxxQkFJekJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSmM7QUFBQSxNQUkxQ0MsWUFKMEMsZ0JBSTFDQSxZQUowQzs7QUFLbEQsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3JDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsS0FBWixFQUFtQkUsUUFBbkI7QUFDQVEsWUFBUSxDQUFDO0FBQ1BNLFVBQUksRUFBRUMsNkRBREM7QUFFUEMsVUFBSSxFQUFFO0FBQ0psQixhQUFLLEVBQUxBLEtBREk7QUFFSkUsZ0JBQVEsRUFBUkE7QUFGSTtBQUZDLEtBQUQsQ0FBUjtBQU9ELEdBVCtCLEVBUzdCLENBQUNGLEtBQUQsRUFBUUUsUUFBUixDQVQ2QixDQUFoQztBQVVBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVcsWUFBUSxFQUFFVSxZQUFyQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR2hCLEtBQUssZ0JBQ0o7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsbUJBQVcsRUFBQyxnQ0FGZDtBQUdFLGFBQUssRUFBRVEsV0FIVDtBQUlFLGdCQUFRLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESSxHQVNGLElBWE4sZUFhRTtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsWUFBSSxFQUFDLFlBRFA7QUFFRSxtQkFBVyxFQUFDLG9CQUZkO0FBR0UsYUFBSyxFQUFFTCxLQUhUO0FBSUUsZ0JBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGLGVBcUJFO0FBQUEsNkJBQ0UscUVBQUMscURBQUQ7QUFDRSxZQUFJLEVBQUMsZUFEUDtBQUVFLG1CQUFXLEVBQUMsMEJBRmQ7QUFHRSxhQUFLLEVBQUVDLFFBSFQ7QUFJRSxnQkFBUSxFQUFFQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBNkJFLHFFQUFDLHNEQUFEO0FBQWEsY0FBUSxFQUFDLFFBQXRCO0FBQStCLGFBQU8sRUFBRU0sWUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE3QkYsZUFnQ0UscUVBQUMscURBQUQ7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQXFCLGdCQUFRLE1BQTdCO0FBQUEsK0JBQ0UscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQyxpREFBRDtBQUFRLGVBQU8sRUFBRVosUUFBakI7QUFBMkIsZUFBTyxFQUFFQyxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQTNERDs7R0FBTUgsUztVQUMyQkksdUQsRUFDTUEsdUQsRUFDTUEsdUQsRUFDbEJPLHVELEVBQ1JLLHVEOzs7S0FMYmhCLFM7QUE2RFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI1MDU1MzJkZmQzOWRiYjliYzNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtQmxvY2ssXHJcbiAgSW5wdXRCbG9jayxcclxuICBCdXR0b25CbG9jayxcclxuICBBQmxvY2ssXHJcbiAgTG93ZXJCbG9jayxcclxufSBmcm9tIFwiLi9TdHlsZUZvcm1cIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgTE9HX0lOX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcclxuY29uc3QgTG9naW5Gb3JtID0gKHsgYWRtaW4sIG9uQ3VzdG9tLCBvbkFkbWluIH0pID0+IHtcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFthZG1pbk51bWJlciwgb25DaGFuZ2VBZG1pbk51bWJlcl0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCB7IGxvZ0luTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1CbG9jayBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgPGgxPuq3nOuqveydtOy4oDwvaDE+XHJcbiAgICAgIHthZG1pbiA/IChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPElucHV0QmxvY2tcclxuICAgICAgICAgICAgbmFtZT1cImFkbWluLWVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsgqzsl4XsnpDrsojtmLhcIlxyXG4gICAgICAgICAgICB2YWx1ZT17YWRtaW5OdW1iZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUFkbWluTnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyVhOydtOuUlFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxCdXR0b25CbG9jayBodG1sVHlwZT1cInN1Ym1pdFwiIGxvYWRpbmc9e2xvZ0luTG9hZGluZ30+XHJcbiAgICAgICAg66Gc6re47J24XHJcbiAgICAgIDwvQnV0dG9uQmxvY2s+XHJcbiAgICAgIDxMb3dlckJsb2NrPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICA8QUJsb2NrPu2ajOybkOqwgOyehTwvQUJsb2NrPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8QUJsb2NrIG9uQ2xpY2s9e29uQ3VzdG9tfSBvbkNMaWNrPXtvbkFkbWlufT5cclxuICAgICAgICAgIOuSpOuhnCDqsIDquLBcclxuICAgICAgICA8L0FCbG9jaz5cclxuICAgICAgPC9Mb3dlckJsb2NrPlxyXG4gICAgPC9Gb3JtQmxvY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==