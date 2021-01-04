webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\gyumongeats\\front\\components\\AppLayout.js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  text-align: center;\n  color: #e2e2e2;\n  &.active {\n    color: black;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @format */





var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].a(_templateObject()); // eslint-disable-next-line react/prop-types

_c = MenuItem;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      linked = _useState[0],
      setLinked = _useState[1];

  var onToggle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setLinked(function (prev) {
      return !prev;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
      mode: "horizontal",
      style: {
        display: "flex",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MenuItem, {
            children: linked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeOutlined"], {
              style: {
                color: "#808080"
              },
              onClick: onToggle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HomeTwoTone"], {
              twoToneColor: "black",
              onClick: onToggle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/search",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["SearchOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/favorite",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["HeartOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/cart",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["CarryOutOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/profile",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(AppLayout, "GEpcNmdQSX9KgnhqGygPG295LP8=");

_c2 = AppLayout;
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c, _c2;

$RefreshReg$(_c, "MenuItem");
$RefreshReg$(_c2, "AppLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiTWVudUl0ZW0iLCJzdHlsZWQiLCJhIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImxpbmtlZCIsInNldExpbmtlZCIsIm9uVG9nZ2xlIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxDQUFWLG1CQUFkLEMsQ0FRQTs7S0FSTUYsUTs7QUFTTixJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDTkMsc0RBQVEsQ0FBQyxLQUFELENBREY7QUFBQSxNQUMzQkMsTUFEMkI7QUFBQSxNQUNuQkMsU0FEbUI7O0FBRWxDLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ2pDRixhQUFTLENBQUMsVUFBQ0csSUFBRDtBQUFBLGFBQVUsQ0FBQ0EsSUFBWDtBQUFBLEtBQUQsQ0FBVDtBQUNELEdBRjJCLEVBRXpCLEVBRnlCLENBQTVCO0FBR0Esc0JBQ0U7QUFBQSxlQUNHTixRQURILGVBRUUscUVBQUMseUNBQUQ7QUFDRSxVQUFJLEVBQUMsWUFEUDtBQUVFLFdBQUssRUFBRTtBQUFFTyxlQUFPLEVBQUUsTUFBWDtBQUFtQkMsc0JBQWMsRUFBRTtBQUFuQyxPQUZUO0FBQUEsOEJBSUUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUNFLHFFQUFDLFFBQUQ7QUFBQSxzQkFDR04sTUFBTSxnQkFDTCxxRUFBQyw4REFBRDtBQUFjLG1CQUFLLEVBQUU7QUFBRU8scUJBQUssRUFBRTtBQUFULGVBQXJCO0FBQTJDLHFCQUFPLEVBQUVMO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREssZ0JBR0wscUVBQUMsNkRBQUQ7QUFBYSwwQkFBWSxFQUFDLE9BQTFCO0FBQWtDLHFCQUFPLEVBQUVBO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQWVFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixlQXNCRSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxXQUFYO0FBQUEsaUNBQ0U7QUFBQSxtQ0FDRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLGVBNkJFLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBLCtCQUNFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLE9BQVg7QUFBQSxpQ0FDRTtBQUFBLG1DQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkYsZUFvQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFBLGlDQUNFO0FBQUEsbUNBQ0UscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlERCxDQXRERDs7R0FBTUwsUzs7TUFBQUEsUztBQXdEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDE0ZDMxNzZkMjUyNGNmMTczNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgSG9tZU91dGxpbmVkLFxyXG4gIFNlYXJjaE91dGxpbmVkLFxyXG4gIEhlYXJ0T3V0bGluZWQsXHJcbiAgQ2FycnlPdXRPdXRsaW5lZCxcclxuICBVc2VyT3V0bGluZWQsXHJcbiAgSG9tZVR3b1RvbmUsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQuYWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNlMmUyZTI7XHJcbiAgJi5hY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuYDtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbbGlua2VkLCBzZXRMaW5rZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0TGlua2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDxNZW51XHJcbiAgICAgICAgbW9kZT1cImhvcml6b250YWxcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAge2xpbmtlZCA/IChcclxuICAgICAgICAgICAgICAgIDxIb21lT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6IFwiIzgwODA4MFwiIH19IG9uQ2xpY2s9e29uVG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8SG9tZVR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiYmxhY2tcIiBvbkNsaWNrPXtvblRvZ2dsZX0gLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaFwiPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8U2VhcmNoT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2Zhdm9yaXRlXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxDYXJyeU91dE91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8TWVudS5JdGVtPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxVc2VyT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwTGF5b3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9