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
      type: "text",
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
      lineNumber: 66,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ButtonBlock"], {
      htmlType: "submit",
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ25VcCIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwicGhvbmVudW1iZXIiLCJvbkNoYW5nZVBob25lbnVtYmVyIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbEI7S0FBTUYsWTs7QUFHTixJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1lDLCtEQUFRLENBQUMsRUFBRCxDQURwQjtBQUFBO0FBQUEsTUFDWkMsS0FEWTtBQUFBLE1BQ0xDLGFBREs7O0FBQUEsbUJBRWtCRiwrREFBUSxDQUFDLEVBQUQsQ0FGMUI7QUFBQTtBQUFBLE1BRVpHLFFBRlk7QUFBQSxNQUVGQyxnQkFGRTs7QUFBQSxtQkFHa0JKLCtEQUFRLENBQUMsRUFBRCxDQUgxQjtBQUFBO0FBQUEsTUFHWkssUUFIWTtBQUFBLE1BR0ZDLGdCQUhFOztBQUFBLG1CQUl3Qk4sK0RBQVEsRUFKaEM7QUFBQTtBQUFBLE1BSVpPLFdBSlk7QUFBQSxNQUlDQyxtQkFKRDs7QUFBQSxrQkFLdUJDLHNEQUFRLENBQUMsRUFBRCxDQUwvQjtBQUFBLE1BS1pDLGFBTFk7QUFBQSxNQUtHQyxnQkFMSDs7QUFBQSxtQkFNdUJGLHNEQUFRLENBQUMsS0FBRCxDQU4vQjtBQUFBLE1BTVpHLGFBTlk7QUFBQSxNQU1HQyxnQkFOSDs7QUFPbkIsTUFBTUMscUJBQXFCLEdBQUdDLHlEQUFXLENBQ3ZDLFVBQUNDLENBQUQsRUFBTztBQUNMTCxvQkFBZ0IsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBaEI7QUFDQUwsb0JBQWdCLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CYixRQUFwQixDQUFoQjtBQUNELEdBSnNDLEVBS3ZDLENBQUNBLFFBQUQsQ0FMdUMsQ0FBekM7QUFRQSxNQUFNYyxRQUFRLEdBQUdKLHlEQUFXLENBQUMsWUFBTTtBQUNqQyxRQUFJVixRQUFRLEtBQUtLLGFBQWpCLEVBQWdDO0FBQzlCLGFBQU9HLGdCQUFnQixDQUFDLElBQUQsQ0FBdkI7QUFDRDs7QUFDRE8sV0FBTyxDQUFDQyxHQUFSLENBQVlwQixLQUFaLEVBQW1CRSxRQUFuQixFQUE2QkUsUUFBN0IsRUFBdUNFLFdBQXZDO0FBQ0QsR0FMMkIsRUFLekIsQ0FBQ0YsUUFBRCxFQUFXSyxhQUFYLENBTHlCLENBQTVCO0FBTUEsc0JBQ0UscUVBQUMsK0RBQUQ7QUFBVyxZQUFRLEVBQUVTLFFBQXJCO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLFlBRFA7QUFFRSxpQkFBVyxFQUFDLG9CQUZkO0FBR0UsVUFBSSxFQUFDLE9BSFA7QUFJRSxXQUFLLEVBQUVsQixLQUpUO0FBS0UsY0FBUSxFQUFFQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVNFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLGVBRFA7QUFFRSxVQUFJLEVBQUMsVUFGUDtBQUdFLGlCQUFXLEVBQUMsMEJBSGQ7QUFJRSxXQUFLLEVBQUVHLFFBSlQ7QUFLRSxjQUFRLEVBQUVDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGLGVBZ0JFLHFFQUFDLGdFQUFEO0FBQ0UsVUFBSSxFQUFDLHFCQURQO0FBRUUsVUFBSSxFQUFDLFVBRlA7QUFHRSxpQkFBVyxFQUFDLHNDQUhkO0FBSUUsV0FBSyxFQUFFSSxhQUpUO0FBS0UsY0FBUSxFQUFFSTtBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsRUF1QkdGLGFBQWEsaUJBQ1oscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCSixlQTBCRSxxRUFBQyxnRUFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsVUFBSSxFQUFDLE1BRlA7QUFHRSxpQkFBVyxFQUFDLG9CQUhkO0FBSUUsV0FBSyxFQUFFVCxRQUpUO0FBS0UsY0FBUSxFQUFFQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExQkYsZUFpQ0UscUVBQUMsZ0VBQUQ7QUFDRSxVQUFJLEVBQUMsWUFEUDtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UsaUJBQVcsRUFBQyxnQ0FIZDtBQUlFLFdBQUssRUFBRUcsV0FKVDtBQUtFLGNBQVEsRUFBRUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNGLGVBd0NFLHFFQUFDLGlFQUFEO0FBQWEsY0FBUSxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNENELENBakVEOztHQUFNVCxNO1VBQzJCQyx1RCxFQUNNQSx1RCxFQUNBQSx1RCxFQUNNQSx1RDs7O01BSnZDRCxNO0FBbUVTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuZmQzOTY3NjcwZDJhZTIyZmM0YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1CbG9jaywgSW5wdXRCbG9jaywgQnV0dG9uQmxvY2sgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdHlsZUZvcm1cIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogcmVkO1xyXG5gO1xyXG5jb25zdCBTaWduVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lbnVtYmVyLCBvbkNoYW5nZVBob25lbnVtYmVyXSA9IHVzZUlucHV0KCk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgIH0sXHJcbiAgICBbcGFzc3dvcmRdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkLCBwaG9uZW51bWJlcik7XHJcbiAgfSwgW3Bhc3N3b3JkLCBwYXNzd29yZENoZWNrXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQmxvY2sgb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgPGgxPu2ajOybkOqwgOyehSA8L2gxPlxyXG4gICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLhcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgLz5cclxuICAgICAgPElucHV0QmxvY2tcclxuICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZC1jaGVja1wiXHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuO2ZleyduFwiXHJcbiAgICAgICAgdmFsdWU9e3Bhc3N3b3JkQ2hlY2t9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cclxuICAgICAgLz5cclxuICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgKFxyXG4gICAgICAgIDxFcnJvck1lc3NhZ2U+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9FcnJvck1lc3NhZ2U+XHJcbiAgICAgICl9XHJcbiAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgbmFtZT1cInVzZXItbmlja1wiXHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi64uJ64Sk7J6EXCJcclxuICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgbmFtZT1cInVzZXItcGhvbmVcIlxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7ZW465Oc7Y+w67KI7Zi4XCJcclxuICAgICAgICB2YWx1ZT17cGhvbmVudW1iZXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGhvbmVudW1iZXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCdXR0b25CbG9jayBodG1sVHlwZT1cInN1Ym1pdFwiPu2ajOybkOqwgOyehTwvQnV0dG9uQmxvY2s+XHJcbiAgICA8L0Zvcm1CbG9jaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnblVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9