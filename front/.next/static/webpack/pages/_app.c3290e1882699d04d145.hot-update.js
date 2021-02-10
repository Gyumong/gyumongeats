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
    restaurant_name: "명륜진사갈비",
    // 가게이름
    category: "한식",
    // 카테고리
    phone: "0212341234",
    //전화번호
    delivery_fee: 2000,
    // 배달비
    estimated_del_time: "15~20분",
    // 배달소요시간
    min_order_price: 12000,
    // 최소주문
    gpa: 5,
    // 별점
    Thumbnail: [{
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
      image: "",
      // 사진
      introduction: "" // 소개

    }]
  }, {
    id: 2,
    restaurant_name: "닭치Go",
    // 가게이름
    category: "치킨",
    // 카테고리
    phone: "0212341234",
    //전화번호
    delivery_fee: 3000,
    // 배달비
    estimated_del_time: "10~15분",
    // 배달소요시간
    min_order_price: 12000,
    // 최소주문
    gpa: 5,
    // 별점
    Thumbnail: [{
      src: "1"
    }, {
      src: "2"
    }, {
      src: "3"
    }],
    Menu: [{
      name: "치킨",
      // 메뉴 이름
      price: "15000",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInJlc3RhdXJhbnRfbmFtZSIsImNhdGVnb3J5IiwicGhvbmUiLCJkZWxpdmVyeV9mZWUiLCJlc3RpbWF0ZWRfZGVsX3RpbWUiLCJtaW5fb3JkZXJfcHJpY2UiLCJncGEiLCJUaHVtYm5haWwiLCJzcmMiLCJNZW51IiwibmFtZSIsInByaWNlIiwiaW1hZ2UiLCJpbnRyb2R1Y3Rpb24iLCJjcmVhdGVSZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLENBQ1Q7QUFDRUMsTUFBRSxFQUFFLENBRE47QUFFRUMsbUJBQWUsRUFBRSxRQUZuQjtBQUU2QjtBQUMzQkMsWUFBUSxFQUFFLElBSFo7QUFHa0I7QUFDaEJDLFNBQUssRUFBRSxZQUpUO0FBSXVCO0FBQ3JCQyxnQkFBWSxFQUFFLElBTGhCO0FBS3NCO0FBQ3BCQyxzQkFBa0IsRUFBRSxRQU50QjtBQU1nQztBQUM5QkMsbUJBQWUsRUFBRSxLQVBuQjtBQU8wQjtBQUN4QkMsT0FBRyxFQUFFLENBUlA7QUFRVTtBQUNSQyxhQUFTLEVBQUUsQ0FBQztBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFELEVBQWU7QUFBRUEsU0FBRyxFQUFFO0FBQVAsS0FBZixFQUE2QjtBQUFFQSxTQUFHLEVBQUU7QUFBUCxLQUE3QixDQVRiO0FBVUVDLFFBQUksRUFBRSxDQUNKO0FBQ0VDLFVBQUksRUFBRSxJQURSO0FBQ2M7QUFDWkMsV0FBSyxFQUFFLE9BRlQ7QUFFa0I7QUFDaEJDLFdBQUssRUFBRSxFQUhUO0FBR2E7QUFDWEMsa0JBQVksRUFBRSxFQUpoQixDQUlvQjs7QUFKcEIsS0FESTtBQVZSLEdBRFMsRUFvQlQ7QUFDRWQsTUFBRSxFQUFFLENBRE47QUFFRUMsbUJBQWUsRUFBRSxNQUZuQjtBQUUyQjtBQUN6QkMsWUFBUSxFQUFFLElBSFo7QUFHa0I7QUFDaEJDLFNBQUssRUFBRSxZQUpUO0FBSXVCO0FBQ3JCQyxnQkFBWSxFQUFFLElBTGhCO0FBS3NCO0FBQ3BCQyxzQkFBa0IsRUFBRSxRQU50QjtBQU1nQztBQUM5QkMsbUJBQWUsRUFBRSxLQVBuQjtBQU8wQjtBQUN4QkMsT0FBRyxFQUFFLENBUlA7QUFRVTtBQUNSQyxhQUFTLEVBQUUsQ0FBQztBQUFFQyxTQUFHLEVBQUU7QUFBUCxLQUFELEVBQWU7QUFBRUEsU0FBRyxFQUFFO0FBQVAsS0FBZixFQUE2QjtBQUFFQSxTQUFHLEVBQUU7QUFBUCxLQUE3QixDQVRiO0FBVUVDLFFBQUksRUFBRSxDQUNKO0FBQ0VDLFVBQUksRUFBRSxJQURSO0FBQ2M7QUFDWkMsV0FBSyxFQUFFLE9BRlQ7QUFFa0I7QUFDaEJDLFdBQUssRUFBRSxFQUhULENBR2E7O0FBSGIsS0FESTtBQVZSLEdBcEJTO0FBRGUsQ0FBckI7QUEwQ1FFLDZIQUFhLENBQUNqQixZQUFELEVBQWUsRUFBZixDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMzMjkwZTE4ODI2OTlkMDRkMTQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xyXG5pbXBvcnQgY3JlYXRlUmVkdWNlciBmcm9tIFwiLi9jcmVhdGVSZWR1Y2VyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW1xyXG4gICAge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgcmVzdGF1cmFudF9uYW1lOiBcIuuqheulnOynhOyCrOqwiOu5hFwiLCAvLyDqsIDqsozsnbTrpoRcclxuICAgICAgY2F0ZWdvcnk6IFwi7ZWc7IudXCIsIC8vIOy5tO2FjOqzoOumrFxyXG4gICAgICBwaG9uZTogXCIwMjEyMzQxMjM0XCIsIC8v7KCE7ZmU67KI7Zi4XHJcbiAgICAgIGRlbGl2ZXJ5X2ZlZTogMjAwMCwgLy8g67Cw64us67mEXHJcbiAgICAgIGVzdGltYXRlZF9kZWxfdGltZTogXCIxNX4yMOu2hFwiLCAvLyDrsLDri6zshozsmpTsi5zqsIRcclxuICAgICAgbWluX29yZGVyX3ByaWNlOiAxMjAwMCwgLy8g7LWc7IaM7KO866y4XHJcbiAgICAgIGdwYTogNSwgLy8g67OE7KCQXHJcbiAgICAgIFRodW1ibmFpbDogW3sgc3JjOiBcIjFcIiB9LCB7IHNyYzogXCIyXCIgfSwgeyBzcmM6IFwiM1wiIH1dLFxyXG4gICAgICBNZW51OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCLqsIjruYRcIiwgLy8g66mU64m0IOydtOumhFxyXG4gICAgICAgICAgcHJpY2U6IFwiMTMwMDBcIiwgLy8g6rCA6rKpXHJcbiAgICAgICAgICBpbWFnZTogXCJcIiwgLy8g7IKs7KeEXHJcbiAgICAgICAgICBpbnRyb2R1Y3Rpb246IFwiXCIsIC8vIOyGjOqwnFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMixcclxuICAgICAgcmVzdGF1cmFudF9uYW1lOiBcIuuLrey5mEdvXCIsIC8vIOqwgOqyjOydtOumhFxyXG4gICAgICBjYXRlZ29yeTogXCLsuZjtgqhcIiwgLy8g7Lm07YWM6rOg66asXHJcbiAgICAgIHBob25lOiBcIjAyMTIzNDEyMzRcIiwgLy/soITtmZTrsojtmLhcclxuICAgICAgZGVsaXZlcnlfZmVlOiAzMDAwLCAvLyDrsLDri6zruYRcclxuICAgICAgZXN0aW1hdGVkX2RlbF90aW1lOiBcIjEwfjE167aEXCIsIC8vIOuwsOuLrOyGjOyalOyLnOqwhFxyXG4gICAgICBtaW5fb3JkZXJfcHJpY2U6IDEyMDAwLCAvLyDstZzshozso7zrrLhcclxuICAgICAgZ3BhOiA1LCAvLyDrs4TsoJBcclxuICAgICAgVGh1bWJuYWlsOiBbeyBzcmM6IFwiMVwiIH0sIHsgc3JjOiBcIjJcIiB9LCB7IHNyYzogXCIzXCIgfV0sXHJcbiAgICAgIE1lbnU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIuy5mO2CqFwiLCAvLyDrqZTribQg7J2066aEXHJcbiAgICAgICAgICBwcmljZTogXCIxNTAwMFwiLCAvLyDqsIDqsqlcclxuICAgICAgICAgIGltYWdlOiBcIlwiLCAvLyDsgqzsp4RcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVkdWNlcihpbml0aWFsU3RhdGUsIHt9KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==