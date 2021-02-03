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
      onCustom = _ref.onCustom;

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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "admin-email",
        placeholder: "\uC0AC\uC5C5\uC790\uBC88\uD638",
        value: adminNumber,
        onChange: onChangeAdminNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-email",
        placeholder: "\uC544\uC774\uB514",
        value: email,
        onChange: onChangeEmail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-password",
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        value: password,
        onChange: onChangePassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ButtonBlock"], {
      htmlType: "submit",
      loading: logInLoading,
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["LowerBlock"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/signup",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
        onClick: onCustom,
        children: "\uB4A4\uB85C \uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiYWRtaW4iLCJvbkN1c3RvbSIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwiYWRtaW5OdW1iZXIiLCJvbkNoYW5nZUFkbWluTnVtYmVyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dJbkxvYWRpbmciLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIkxPR19JTl9SRVFVRVNUIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ1ZDLCtEQUFRLENBQUMsRUFBRCxDQURFO0FBQUE7QUFBQSxNQUNsQ0MsS0FEa0M7QUFBQSxNQUMzQkMsYUFEMkI7O0FBQUEsbUJBRUpGLCtEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUE7QUFBQSxNQUVsQ0csUUFGa0M7QUFBQSxNQUV4QkMsZ0JBRndCOztBQUFBLG1CQUdFSiwrREFBUSxDQUFDLEVBQUQsQ0FIVjtBQUFBO0FBQUEsTUFHbENLLFdBSGtDO0FBQUEsTUFHckJDLG1CQUhxQjs7QUFBQSxxQkFJaEJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBSks7QUFBQSxNQUlqQ0MsWUFKaUMsZ0JBSWpDQSxZQUppQzs7QUFLekMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFlBQVksR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3JDQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsS0FBWixFQUFtQkUsUUFBbkI7QUFDQVEsWUFBUSxDQUFDO0FBQ1BNLFVBQUksRUFBRUMsNkRBREM7QUFFUEMsVUFBSSxFQUFFO0FBQ0psQixhQUFLLEVBQUxBLEtBREk7QUFFSkUsZ0JBQVEsRUFBUkE7QUFGSTtBQUZDLEtBQUQsQ0FBUjtBQU9ELEdBVCtCLEVBUzdCLENBQUNGLEtBQUQsRUFBUUUsUUFBUixDQVQ2QixDQUFoQztBQVVBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVcsWUFBUSxFQUFFVSxZQUFyQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxtQkFBVyxFQUFDLGdDQUZkO0FBR0UsYUFBSyxFQUFFUixXQUhUO0FBSUUsZ0JBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBVUU7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUNFLFlBQUksRUFBQyxZQURQO0FBRUUsbUJBQVcsRUFBQyxvQkFGZDtBQUdFLGFBQUssRUFBRUwsS0FIVDtBQUlFLGdCQUFRLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixlQWtCRTtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsWUFBSSxFQUFDLGVBRFA7QUFFRSxtQkFBVyxFQUFDLDBCQUZkO0FBR0UsYUFBSyxFQUFFQyxRQUhUO0FBSUUsZ0JBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxCRixlQTBCRSxxRUFBQyxzREFBRDtBQUFhLGNBQVEsRUFBQyxRQUF0QjtBQUErQixhQUFPLEVBQUVNLFlBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUJGLGVBNkJFLHFFQUFDLHFEQUFEO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFxQixnQkFBUSxNQUE3QjtBQUFBLCtCQUNFLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUUscUVBQUMsaURBQUQ7QUFBUSxlQUFPLEVBQUVYLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBdEREOztHQUFNRixTO1VBQzJCRyx1RCxFQUNNQSx1RCxFQUNNQSx1RCxFQUNsQk8sdUQsRUFDUkssdUQ7OztLQUxiZixTO0FBd0RTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjAzZmY5MWVjMjY3MzE1NzUwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgRm9ybUJsb2NrLFxyXG4gIElucHV0QmxvY2ssXHJcbiAgQnV0dG9uQmxvY2ssXHJcbiAgQUJsb2NrLFxyXG4gIExvd2VyQmxvY2ssXHJcbn0gZnJvbSBcIi4vU3R5bGVGb3JtXCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlSW5wdXRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7IGFkbWluLCBvbkN1c3RvbSB9KSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbYWRtaW5OdW1iZXIsIG9uQ2hhbmdlQWRtaW5OdW1iZXJdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgeyBsb2dJbkxvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQmxvY2sgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxoMT7qt5zrqr3snbTsuKA8L2gxPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgICBuYW1lPVwiYWRtaW4tZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsgqzsl4XsnpDrsojtmLhcIlxyXG4gICAgICAgICAgdmFsdWU9e2FkbWluTnVtYmVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQWRtaW5OdW1iZXJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPElucHV0QmxvY2tcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JWE7J2065SUXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbkJsb2NrIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cclxuICAgICAgICDroZzqt7jsnbhcclxuICAgICAgPC9CdXR0b25CbG9jaz5cclxuICAgICAgPExvd2VyQmxvY2s+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiBwYXNzSHJlZj5cclxuICAgICAgICAgIDxBQmxvY2s+7ZqM7JuQ6rCA7J6FPC9BQmxvY2s+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxBQmxvY2sgb25DbGljaz17b25DdXN0b219PuuSpOuhnCDqsIDquLA8L0FCbG9jaz5cclxuICAgICAgPC9Mb3dlckJsb2NrPlxyXG4gICAgPC9Gb3JtQmxvY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==