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
      onPrev = _ref.onPrev;

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
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_7__["loginRequestAction"])({
      email: email,
      password: password
    }));
  }, [email, password]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["FormBlock"], {
    onFinish: onSubmitForm,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\uADDC\uBABD\uC774\uCE20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), admin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "admin-email",
        placeholder: "\uC0AC\uC5C5\uC790\uBC88\uD638",
        value: adminNumber,
        onChange: onChangeAdminNumber
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-email",
        placeholder: "\uC544\uC774\uB514",
        value: email,
        onChange: onChangeEmail
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["InputBlock"], {
        name: "user-password",
        placeholder: "\uBE44\uBC00\uBC88\uD638",
        value: password,
        onChange: onChangePassword
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ButtonBlock"], {
      htmlType: "submit",
      loading: logInLoading,
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["LowerBlock"], {
      children: [admin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/admin/signup",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/signup",
        passHref: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_StyleForm__WEBPACK_IMPORTED_MODULE_4__["ABlock"], {
        onClick: onPrev,
        children: "\uB4A4\uB85C \uAC00\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiTG9naW5Gb3JtIiwiYWRtaW4iLCJvblByZXYiLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsImFkbWluTnVtYmVyIiwib25DaGFuZ2VBZG1pbk51bWJlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsImxvZ2luUmVxdWVzdEFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxLQUFvQixRQUFwQkEsS0FBb0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ1JDLCtEQUFRLENBQUMsRUFBRCxDQURBO0FBQUE7QUFBQSxNQUNoQ0MsS0FEZ0M7QUFBQSxNQUN6QkMsYUFEeUI7O0FBQUEsbUJBRUZGLCtEQUFRLENBQUMsRUFBRCxDQUZOO0FBQUE7QUFBQSxNQUVoQ0csUUFGZ0M7QUFBQSxNQUV0QkMsZ0JBRnNCOztBQUFBLG1CQUdJSiwrREFBUSxDQUFDLEVBQUQsQ0FIWjtBQUFBO0FBQUEsTUFHaENLLFdBSGdDO0FBQUEsTUFHbkJDLG1CQUhtQjs7QUFBQSxxQkFJZEMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FKRztBQUFBLE1BSS9CQyxZQUorQixnQkFJL0JBLFlBSitCOztBQUt2QyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDckNDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixLQUFaLEVBQW1CRSxRQUFuQjtBQUNBUSxZQUFRLENBQUNNLHlFQUFrQixDQUFDO0FBQUVoQixXQUFLLEVBQUxBLEtBQUY7QUFBU0UsY0FBUSxFQUFSQTtBQUFULEtBQUQsQ0FBbkIsQ0FBUjtBQUNELEdBSCtCLEVBRzdCLENBQUNGLEtBQUQsRUFBUUUsUUFBUixDQUg2QixDQUFoQztBQUtBLHNCQUNFLHFFQUFDLG9EQUFEO0FBQVcsWUFBUSxFQUFFVSxZQUFyQjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFR2YsS0FBSyxnQkFDSjtBQUFBLDZCQUNFLHFFQUFDLHFEQUFEO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxtQkFBVyxFQUFDLGdDQUZkO0FBR0UsYUFBSyxFQUFFTyxXQUhUO0FBSUUsZ0JBQVEsRUFBRUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURJLEdBU0YsSUFYTixlQWFFO0FBQUEsNkJBQ0UscUVBQUMscURBQUQ7QUFDRSxZQUFJLEVBQUMsWUFEUDtBQUVFLG1CQUFXLEVBQUMsb0JBRmQ7QUFHRSxhQUFLLEVBQUVMLEtBSFQ7QUFJRSxnQkFBUSxFQUFFQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYkYsZUFxQkU7QUFBQSw2QkFDRSxxRUFBQyxxREFBRDtBQUNFLFlBQUksRUFBQyxlQURQO0FBRUUsbUJBQVcsRUFBQywwQkFGZDtBQUdFLGFBQUssRUFBRUMsUUFIVDtBQUlFLGdCQUFRLEVBQUVDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkYsZUE2QkUscUVBQUMsc0RBQUQ7QUFBYSxjQUFRLEVBQUMsUUFBdEI7QUFBK0IsYUFBTyxFQUFFTSxZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdCRixlQWdDRSxxRUFBQyxxREFBRDtBQUFBLGlCQUNHWixLQUFLLGdCQUNKLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZ0JBQVEsTUFBbkM7QUFBQSwrQkFDRSxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESSxnQkFLSixxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxTQUFYO0FBQXFCLGdCQUFRLE1BQTdCO0FBQUEsK0JBQ0UscUVBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkosZUFXRSxxRUFBQyxpREFBRDtBQUFRLGVBQU8sRUFBRUMsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0EzREQ7O0dBQU1GLFM7VUFDMkJHLHVELEVBQ01BLHVELEVBQ01BLHVELEVBQ2xCTyx1RCxFQUNSSyx1RDs7O0tBTGJmLFM7QUE2RFNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBiODE1NDRiZDk5ODFjZWIzMTMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBGb3JtQmxvY2ssXHJcbiAgSW5wdXRCbG9jayxcclxuICBCdXR0b25CbG9jayxcclxuICBBQmxvY2ssXHJcbiAgTG93ZXJCbG9jayxcclxufSBmcm9tIFwiLi9TdHlsZUZvcm1cIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IExvZ2luRm9ybSA9ICh7IGFkbWluLCBvblByZXYgfSkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW2FkbWluTnVtYmVyLCBvbkNoYW5nZUFkbWluTnVtYmVyXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKHsgZW1haWwsIHBhc3N3b3JkIH0pKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUJsb2NrIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8aDE+6rec66q97J207LigPC9oMT5cclxuICAgICAge2FkbWluID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgICAgICBuYW1lPVwiYWRtaW4tZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyCrOyXheyekOuyiO2YuFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXthZG1pbk51bWJlcn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQWRtaW5OdW1iZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPElucHV0QmxvY2tcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7JWE7J2065SUXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEJ1dHRvbkJsb2NrIGh0bWxUeXBlPVwic3VibWl0XCIgbG9hZGluZz17bG9nSW5Mb2FkaW5nfT5cclxuICAgICAgICDroZzqt7jsnbhcclxuICAgICAgPC9CdXR0b25CbG9jaz5cclxuICAgICAgPExvd2VyQmxvY2s+XHJcbiAgICAgICAge2FkbWluID8gKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi9zaWdudXBcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPEFCbG9jaz7tmozsm5DqsIDsnoU8L0FCbG9jaz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgPEFCbG9jaz7tmozsm5DqsIDsnoU8L0FCbG9jaz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8QUJsb2NrIG9uQ2xpY2s9e29uUHJldn0+65Kk66GcIOqwgOq4sDwvQUJsb2NrPlxyXG4gICAgICA8L0xvd2VyQmxvY2s+XHJcbiAgICA8L0Zvcm1CbG9jaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9