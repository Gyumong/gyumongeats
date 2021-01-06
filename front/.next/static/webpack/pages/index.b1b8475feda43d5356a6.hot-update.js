webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Store/StyleStoreCard.js":
/*!********************************************!*\
  !*** ./components/Store/StyleStoreCard.js ***!
  \********************************************/
/*! exports provided: CardBlock, CardImageBlock, CardImageItem, CardMeta, TitleBar, SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardBlock", function() { return CardBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageBlock", function() { return CardImageBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImageItem", function() { return CardImageItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardMeta", function() { return CardMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleBar", function() { return TitleBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return SideBar; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: top;\n  h3 {\n    font-weight: bold;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 10px;\n  padding-bottom: 20px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: #e2e2e2;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  width: 100%;\n  height: 75%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 96%;\n  height: 40vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @format */

var CardBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var CardImageBlock = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var CardImageItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var CardMeta = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var TitleBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());
var SideBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6());

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TdG9yZS9TdHlsZVN0b3JlQ2FyZC5qcyJdLCJuYW1lcyI6WyJDYXJkQmxvY2siLCJzdHlsZWQiLCJkaXYiLCJDYXJkSW1hZ2VCbG9jayIsIkNhcmRJbWFnZUl0ZW0iLCJDYXJkTWV0YSIsIlRpdGxlQmFyIiwiU2lkZUJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtBQVFBLElBQU1DLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBcEI7QUFLQSxJQUFNRSxhQUFhLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO0FBTUEsSUFBTUcsUUFBUSxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFkO0FBTUEsSUFBTUksUUFBUSxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG9CQUFkO0FBU0EsSUFBTUssT0FBTyxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUFiIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIxYjg0NzVmZWRhNDNkNTM1NmE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkQmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogOTYlO1xyXG4gIGhlaWdodDogNDB2aDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2VCbG9jayA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDc1JTtcclxuYDtcclxuZXhwb3J0IGNvbnN0IENhcmRJbWFnZUl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcmRNZXRhID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZUJhciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IHRvcDtcclxuICBoMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZUJhciA9IHN0eWxlZC5kaXZgYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==