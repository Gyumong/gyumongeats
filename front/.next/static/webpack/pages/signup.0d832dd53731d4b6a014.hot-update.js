webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_StyleForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StyleForm */ "./components/StyleForm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");




var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\gyumongeats\\front\\pages\\signup.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: red;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @format */




var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject());
_c = ErrorMessage;

var SignUp = function SignUp() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(""),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useInput7 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useInput8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput7, 2),
      phonenumber = _useInput8[0],
      onChangePhonenumber = _useInput8[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    console.log(email, nickname, password, phonenumber);
  }, [password, passwordCheck]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["FormBlock"], {
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
      children: "\uD68C\uC6D0\uAC00\uC785 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      name: "user-email",
      placeholder: "\uC774\uBA54\uC77C",
      type: "email",
      value: email,
      onChange: onChangeEmail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      name: "user-password",
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638",
      value: password,
      onChange: onChangePassword
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      name: "user-password-check",
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638\uD655\uC778",
      value: passwordCheck,
      onChange: onChangePasswordCheck
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), passwordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(ErrorMessage, {
      children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      name: "user-nick",
      placeholder: "\uB2C9\uB124\uC784",
      value: nickname,
      onChange: onChangeNickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
      name: "user-phone",
      type: "number",
      placeholder: "\uD578\uB4DC\uD3F0\uBC88\uD638",
      value: phonenumber,
      onChange: onChangePhonenumber
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ButtonBlock"], {
      htmlType: "submit",
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(SignUp, "cSxXq67zrVPhTmJ7Y+sWnCt608s=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c2 = SignUp;
/* harmony default export */ __webpack_exports__["default"] = (SignUp);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ25VcCIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwicGhvbmVudW1iZXIiLCJvbkNoYW5nZVBob25lbnVtYmVyIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbEI7S0FBTUYsWTs7QUFHTixJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLCtEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLGFBREs7O0FBQUEsbUJBRWtCRiwrREFBUSxDQUFDLEVBQUQsQ0FGMUI7QUFBQTtBQUFBLE1BRVpHLFFBRlk7QUFBQSxNQUVGQyxnQkFGRTs7QUFBQSxtQkFHa0JKLCtEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBO0FBQUEsTUFHWkssUUFIWTtBQUFBLE1BR0ZDLGdCQUhFOztBQUFBLG1CQUl3Qk4sK0RBQVEsRUFKaEM7QUFBQTtBQUFBLE1BSVpPLFdBSlk7QUFBQSxNQUlDQyxtQkFKRDs7QUFBQSxrQkFLdUJDLHNEQUFRLENBQUMsRUFBRCxDQUwvQjtBQUFBLE1BS1pDLGFBTFk7QUFBQSxNQUtHQyxnQkFMSDs7QUFBQSxtQkFNdUJGLHNEQUFRLENBQUMsS0FBRCxDQU4vQjtBQUFBLE1BTVpHLGFBTlk7QUFBQSxNQU1HQyxnQkFOSDs7QUFPbkIsTUFBTUMscUJBQXFCLEdBQUdDLHlEQUFXLENBQ3ZDLFVBQUNDLENBQUQsRUFBTztBQUNMTCxvQkFBZ0IsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDQUwsb0JBQWdCLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CYixRQUFwQixDQUFoQjtBQUNELEdBSnNDLEVBS3ZDLENBQUNBLFFBQUQsQ0FMdUMsQ0FBekM7QUFRQSxNQUFNYyxRQUFRLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNqQyxRQUFJVixRQUFRLEtBQUtLLGFBQWpCLEVBQWdDO0FBQzlCLGFBQU9HLGdCQUFnQixDQUFDLElBQUQsQ0FBdkI7QUFDRDs7QUFDRE8sV0FBTyxDQUFDQyxHQUFSLENBQVlwQixLQUFaLEVBQW1CRSxRQUFuQixFQUE2QkUsUUFBN0IsRUFBdUNFLFdBQXZDO0FBQ0QsR0FMMkIsRUFLekIsQ0FBQ0YsUUFBRCxFQUFXSyxhQUFYLENBTHlCLENBQTVCO0FBTUEsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBVyxZQUFRLEVBQUVTLFFBQXJCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLFlBRFA7QUFFRSxpQkFBVyxFQUFDLG9CQUZkO0FBR0UsVUFBSSxFQUFDLE9BSFA7QUFJRSxXQUFLLEVBQUVsQixLQUpUO0FBS0UsY0FBUSxFQUFFQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVNFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLGVBRFA7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLGlCQUFXLEVBQUMsMEJBSGQ7QUFJRSxXQUFLLEVBQUVHLFFBSlQ7QUFLRSxjQUFRLEVBQUVDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBZ0JFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLHFCQURQO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxpQkFBVyxFQUFDLHNDQUhkO0FBSUUsV0FBSyxFQUFFSSxhQUpUO0FBS0UsY0FBUSxFQUFFSTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsRUF1QkdGLGFBQWEsaUJBQ1oscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCSixlQTBCRSxxRUFBQyxnRUFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsaUJBQVcsRUFBQyxvQkFGZDtBQUdFLFdBQUssRUFBRVQsUUFIVDtBQUlFLGNBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBZ0NFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLFlBRFA7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLGlCQUFXLEVBQUMsZ0NBSGQ7QUFJRSxXQUFLLEVBQUVHLFdBSlQ7QUFLRSxjQUFRLEVBQUVDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRixlQXVDRSxxRUFBQyxpRUFBRDtBQUFhLGNBQVEsRUFBQyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJDRCxDQWhFRDs7R0FBTVQsTTtVQUMyQkMsdUQsRUFDTUEsdUQsRUFDQUEsdUQsRUFDTUEsdUQ7OztNQUp2Q0QsTTtBQWtFU0EscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjBkODMyZGQ1MzczMWQ0YjZhMDE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtQmxvY2ssIElucHV0QmxvY2ssIEJ1dHRvbkJsb2NrIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU3R5bGVGb3JtXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6IHJlZDtcclxuYDtcclxuY29uc3QgU2lnblVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtwaG9uZW51bWJlciwgb25DaGFuZ2VQaG9uZW51bWJlcl0gPSB1c2VJbnB1dCgpO1xyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICB9LFxyXG4gICAgW3Bhc3N3b3JkXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENoZWNrKSB7XHJcbiAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCwgcGhvbmVudW1iZXIpO1xyXG4gIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVja10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUJsb2NrIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgIDxoMT7tmozsm5DqsIDsnoUgPC9oMT5cclxuICAgICAgPElucHV0QmxvY2tcclxuICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmQtY2hlY2tcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjtmZXsnbhcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtwYXNzd29yZEVycm9yICYmIChcclxuICAgICAgICA8RXJyb3JNZXNzYWdlPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICApfVxyXG4gICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgIG5hbWU9XCJ1c2VyLW5pY2tcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64uJ64Sk7J6EXCJcclxuICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgbmFtZT1cInVzZXItcGhvbmVcIlxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7ZW465Oc7Y+w67KI7Zi4XCJcclxuICAgICAgICB2YWx1ZT17cGhvbmVudW1iZXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGhvbmVudW1iZXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b25CbG9jayBodG1sVHlwZT1cInN1Ym1pdFwiPu2ajOybkOqwgOyehTwvQnV0dG9uQmxvY2s+XHJcbiAgICA8L0Zvcm1CbG9jaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9