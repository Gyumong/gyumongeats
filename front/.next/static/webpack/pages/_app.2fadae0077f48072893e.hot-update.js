webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReducer */ "./reducers/createReducer.js");
/** @format */

var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "민구"
    },
    content: "첫번째 게시글",
    Images: [0, 1, 2],
    Comments: []
  }, {
    id: 2,
    User: {
      id: 2,
      nickname: "민구"
    },
    content: "두번째 게시글",
    Images: [0, 1],
    Comments: []
  }, {
    id: 3,
    User: {
      id: 3,
      nickname: "민구"
    },
    content: "세번째 게시글",
    Images: [0],
    Comments: []
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReducer__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJDb21tZW50cyIsImNyZWF0ZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsQ0FDVDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUU7QUFDSkQsUUFBRSxFQUFFLENBREE7QUFFSkUsY0FBUSxFQUFFO0FBRk4sS0FGUjtBQU1FQyxXQUFPLEVBQUUsU0FOWDtBQU9FQyxVQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FQVjtBQVFFQyxZQUFRLEVBQUU7QUFSWixHQURTLEVBV1Q7QUFDRUwsTUFBRSxFQUFFLENBRE47QUFFRUMsUUFBSSxFQUFFO0FBQ0pELFFBQUUsRUFBRSxDQURBO0FBRUpFLGNBQVEsRUFBRTtBQUZOLEtBRlI7QUFNRUMsV0FBTyxFQUFFLFNBTlg7QUFPRUMsVUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FQVjtBQVFFQyxZQUFRLEVBQUU7QUFSWixHQVhTLEVBcUJUO0FBQ0VMLE1BQUUsRUFBRSxDQUROO0FBRUVDLFFBQUksRUFBRTtBQUNKRCxRQUFFLEVBQUUsQ0FEQTtBQUVKRSxjQUFRLEVBQUU7QUFGTixLQUZSO0FBTUVDLFdBQU8sRUFBRSxTQU5YO0FBT0VDLFVBQU0sRUFBRSxDQUFDLENBQUQsQ0FQVjtBQVFFQyxZQUFRLEVBQUU7QUFSWixHQXJCUztBQURlLENBQXJCO0FBbUNRQyw2SEFBYSxDQUFDUixZQUFELEVBQWUsRUFBZixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJmYWRhZTAwNzdmNDgwNzI4OTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tIFwiLi9jcmVhdGVSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIuuvvOq1rFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBcIuyyq+uyiOynuCDqsozsi5zquIBcIixcclxuICAgICAgSW1hZ2VzOiBbMCwgMSwgMl0sXHJcbiAgICAgIENvbW1lbnRzOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgbmlja25hbWU6IFwi66+86rWsXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IFwi65GQ67KI7Ke4IOqyjOyLnOq4gFwiLFxyXG4gICAgICBJbWFnZXM6IFswLCAxXSxcclxuICAgICAgQ29tbWVudHM6IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBuaWNrbmFtZTogXCLrr7zqtaxcIixcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogXCLshLjrsojsp7gg6rKM7Iuc6riAXCIsXHJcbiAgICAgIEltYWdlczogWzBdLFxyXG4gICAgICBDb21tZW50czogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge30pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9