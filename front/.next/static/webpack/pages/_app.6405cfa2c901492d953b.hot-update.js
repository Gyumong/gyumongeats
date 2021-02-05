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
    name: "명륜진사갈비",
    // 가게이름
    category: "한식",
    // 카테고리
    phone: "0212341234",
    //전화번호
    deliverycost: 2000,
    // 배달비
    deliverytime: "15~20분",
    // 배달소요시간
    minimumOrder: 12000,
    // 최소주문
    scope: 5,
    // 별점
    Images: [{
      src: "1"
    }, {
      src: "2"
    }, {
      src: "3"
    }],
    Menu: [{
      name: "갈비",
      // 메뉴 이름
      price: "13000",
      // 가격
      image: "" // 사진

    }]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIm5hbWUiLCJjYXRlZ29yeSIsInBob25lIiwiZGVsaXZlcnljb3N0IiwiZGVsaXZlcnl0aW1lIiwibWluaW11bU9yZGVyIiwic2NvcGUiLCJJbWFnZXMiLCJzcmMiLCJNZW51IiwicHJpY2UiLCJpbWFnZSIsImNyZWF0ZVJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0FBQzFCQyxXQUFTLEVBQUUsQ0FDVDtBQUNFQyxNQUFFLEVBQUUsQ0FETjtBQUVFQyxRQUFJLEVBQUUsUUFGUjtBQUVrQjtBQUNoQkMsWUFBUSxFQUFFLElBSFo7QUFHa0I7QUFDaEJDLFNBQUssRUFBRSxZQUpUO0FBSXVCO0FBQ3JCQyxnQkFBWSxFQUFFLElBTGhCO0FBS3NCO0FBQ3BCQyxnQkFBWSxFQUFFLFFBTmhCO0FBTTBCO0FBQ3hCQyxnQkFBWSxFQUFFLEtBUGhCO0FBT3VCO0FBQ3JCQyxTQUFLLEVBQUUsQ0FSVDtBQVFZO0FBQ1ZDLFVBQU0sRUFBRSxDQUFDO0FBQUVDLFNBQUcsRUFBRTtBQUFQLEtBQUQsRUFBZTtBQUFFQSxTQUFHLEVBQUU7QUFBUCxLQUFmLEVBQTZCO0FBQUVBLFNBQUcsRUFBRTtBQUFQLEtBQTdCLENBVFY7QUFVRUMsUUFBSSxFQUFFLENBQ0o7QUFDRVQsVUFBSSxFQUFFLElBRFI7QUFDYztBQUNaVSxXQUFLLEVBQUUsT0FGVDtBQUVrQjtBQUNoQkMsV0FBSyxFQUFFLEVBSFQsQ0FHYTs7QUFIYixLQURJO0FBVlIsR0FEUztBQURlLENBQXJCO0FBdUJRQyw2SEFBYSxDQUFDZixZQUFELEVBQWUsRUFBZixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY0MDVjZmEyYzkwMTQ5MmQ5NTNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tIFwiLi9jcmVhdGVSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmFtZTogXCLrqoXrpZzsp4TsgqzqsIjruYRcIiwgLy8g6rCA6rKM7J2066aEXHJcbiAgICAgIGNhdGVnb3J5OiBcIu2VnOyLnVwiLCAvLyDsubTthYzqs6DrpqxcclxuICAgICAgcGhvbmU6IFwiMDIxMjM0MTIzNFwiLCAvL+yghO2ZlOuyiO2YuFxyXG4gICAgICBkZWxpdmVyeWNvc3Q6IDIwMDAsIC8vIOuwsOuLrOu5hFxyXG4gICAgICBkZWxpdmVyeXRpbWU6IFwiMTV+MjDrtoRcIiwgLy8g67Cw64us7IaM7JqU7Iuc6rCEXHJcbiAgICAgIG1pbmltdW1PcmRlcjogMTIwMDAsIC8vIOy1nOyGjOyjvOusuFxyXG4gICAgICBzY29wZTogNSwgLy8g67OE7KCQXHJcbiAgICAgIEltYWdlczogW3sgc3JjOiBcIjFcIiB9LCB7IHNyYzogXCIyXCIgfSwgeyBzcmM6IFwiM1wiIH1dLFxyXG4gICAgICBNZW51OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCLqsIjruYRcIiwgLy8g66mU64m0IOydtOumhFxyXG4gICAgICAgICAgcHJpY2U6IFwiMTMwMDBcIiwgLy8g6rCA6rKpXHJcbiAgICAgICAgICBpbWFnZTogXCJcIiwgLy8g7IKs7KeEXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7fSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=