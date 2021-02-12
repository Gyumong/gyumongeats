module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\gyumongeats\\front\\pages\\_app.js";

/** @format */






const AppLayouts = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  margin: 0 auto;
  max-width: 768px;
  height: 100vh;
  font-family: "Noto Sans KR", sans-serif;
`; // eslint-disable-next-line react/prop-types

const App = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "\uADDC\uBABD\uC774\uCE20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppLayouts, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default()(App)));

/***/ }),

/***/ "./reducers/createReducer.js":
/*!***********************************!*\
  !*** ./reducers/createReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createReducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/** @format */

function createReducer(initState, handlerMap) {
  return function (state = initState, action) {
    return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
      const handler = handlerMap[action.type];

      if (handler) {
        handler(draft, action);
      }
    });
  };
}

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./reducers/store.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/** @format */





const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log("HYDRATE", action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/store.js":
/*!***************************!*\
  !*** ./reducers/store.js ***!
  \***************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReducer */ "./reducers/createReducer.js");
/** @format */

const initialState = {
  restaurant: [{
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
  }, {
    id: 3,
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
    gpa: 4.2,
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
    id: 4,
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
    gpa: 4.3,
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
    id: 5,
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
    gpa: 4.4,
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
    id: 6,
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
    gpa: 3.7,
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
    id: 7,
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
    gpa: 2.1,
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
    id: 8,
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
    gpa: 4.4,
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
    id: 9,
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
    gpa: 1.7,
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
    id: 10,
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
    gpa: 1,
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
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReducer__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, {}));

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, loginRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReducer */ "./reducers/createReducer.js");
/** @format */

const initialState = {
  logInLoading: false,
  // 로그인 시도중
  logInError: null,
  logInDone: false,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutError: null,
  logOutDone: false,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  me: null
};
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const loginRequestAction = data => {
  return {
    type: "LOG_IN_REQUEST",
    data
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_createReducer__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, {
  [LOG_IN_REQUEST]: state => {
    state.logInLoading = true;
    state.logInError = null;
    state.logInDone = false;
  },
  [LOG_IN_SUCCESS]: (state, action) => {
    state.logInLoading = false;
    state.me = action.data;
    state.logInDone = true;
  },
  [LOG_IN_FAILURE]: (state, action) => {
    state.logInLoading = false;
    state.logInError = action.error;
  },
  [LOG_OUT_REQUEST]: state => {
    state.logOutLoading = true;
    state.logOutError = null;
    state.logOutDone = false;
  },
  [LOG_OUT_SUCCESS]: state => {
    state.logOutLoading = false;
    state.logOutDone = true;
    state.me = null;
  },
  [LOG_OUT_FAILURE]: (state, action) => {
    state.logOutLoading = false;
    state.logOutError = action.error;
  },
  [SIGN_UP_REQUEST]: state => {
    state.signUpLoading = true;
    state.signUpError = null;
    state.signUpDone = false;
  },
  [SIGN_UP_SUCCESS]: state => {
    state.signUpLoading = false;
    state.signUpDone = true;
  },
  [SIGN_UP_FAILURE]: (state, action) => {
    state.signUpLoading = false;
    state.signUpError = action.error;
  }
}));

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/** @format */



axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = "http://localhost:3085/api/customer"; // baseurl 설정 앞으로 요청할때

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/**
 * /* eslint-disable no-unused-vars
 *
 * @format
 */

/** @format */




function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/signup", data);
}

function* signUp(action) {
  // 액션을 받음
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // 액션을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      error: e.response.error
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/login", data);
}

function* logIn(action) {
  // 액션을 받음
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000); // const result = yield call(logInAPI, action.data);
    // 요청이 성공이면 call로 logInAPI를 실행하고 결괏값을 변수 result에 저장
    // fork는 비동기 call은 동기 => async await 함수 비슷 결괏값 받으면 실행 ㅇㅇ
    // action에서 data를 꺼내서 logInAPI 함수에 인자로 보냄

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      // 액션을 dispatch
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      error: e.response.data
    });
  }
} // function logOutAPI() {
//   return axios.post("/logout");
// }


function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
    });
  } catch (e) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      error: e.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");
/** @format */







const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9jcmVhdGVSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkFwcExheW91dHMiLCJzdHlsZWQiLCJkaXYiLCJBcHAiLCJDb21wb25lbnQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSIsImNyZWF0ZVJlZHVjZXIiLCJpbml0U3RhdGUiLCJoYW5kbGVyTWFwIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJoYW5kbGVyIiwidHlwZSIsInJvb3RSZWR1Y2VyIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwicmVzdGF1cmFudCIsImlkIiwicmVzdGF1cmFudF9uYW1lIiwiY2F0ZWdvcnkiLCJwaG9uZSIsImRlbGl2ZXJ5X2ZlZSIsImVzdGltYXRlZF9kZWxfdGltZSIsIm1pbl9vcmRlcl9wcmljZSIsImdwYSIsIlRodW1ibmFpbCIsInNyYyIsIk1lbnUiLCJuYW1lIiwicHJpY2UiLCJpbWFnZSIsImludHJvZHVjdGlvbiIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJsb2dJbkRvbmUiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RXJyb3IiLCJsb2dPdXREb25lIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsIm1lIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImVycm9yIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJ1c2VyU2FnYSIsInNpZ25VcEFQSSIsInBvc3QiLCJzaWduVXAiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZSIsInJlc3BvbnNlIiwibG9nSW5BUEkiLCJsb2dJbiIsImRlbGF5IiwibG9nT3V0Iiwid2F0Y2hMb2dJbiIsInRha2VMYXRlc3QiLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLFVBQVUsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTEEsQyxDQU1B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QUFNbEUsS0FBSyxHQUFHdUUseURBQVcsQ0FBQ0MsaURBQUQsRUFBVUwsUUFBVixDQUF6QjtBQUNBbkUsT0FBSyxDQUFDeUUsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CL0IsOENBQW5CLENBQWpCO0FBQ0EsU0FBTzNDLEtBQVA7QUFDRCxDQVZEOztBQVlBLE1BQU1wQixPQUFPLEdBQUcrRix3RUFBYSxDQUFDWixjQUFELEVBQWlCO0FBQzVDYSxPQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSWVoRyxzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gXCJuZXh0LXJlZHV4LXNhZ2FcIjtcclxuY29uc3QgQXBwTGF5b3V0cyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA3NjhweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBLUlwiLCBzYW5zLXNlcmlmO1xyXG5gO1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmtcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT7qt5zrqr3snbTsuKA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxBcHBMYXlvdXRzPlxyXG4gICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgPC9BcHBMYXlvdXRzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoQXBwKSk7XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVSZWR1Y2VyKGluaXRTdGF0ZSwgaGFuZGxlck1hcCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlck1hcFthY3Rpb24udHlwZV07XHJcbiAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgaGFuZGxlcihkcmFmdCwgYWN0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4vc3RvcmVcIjtcclxuXHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHN0b3JlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuaW1wb3J0IGNyZWF0ZVJlZHVjZXIgZnJvbSBcIi4vY3JlYXRlUmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICByZXN0YXVyYW50OiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICByZXN0YXVyYW50X25hbWU6IFwi66qF66Wc7KeE7IKs6rCI67mEXCIsIC8vIOqwgOqyjOydtOumhFxyXG4gICAgICBjYXRlZ29yeTogXCLtlZzsi51cIiwgLy8g7Lm07YWM6rOg66asXHJcbiAgICAgIHBob25lOiBcIjAyMTIzNDEyMzRcIiwgLy/soITtmZTrsojtmLhcclxuICAgICAgZGVsaXZlcnlfZmVlOiAyMDAwLCAvLyDrsLDri6zruYRcclxuICAgICAgZXN0aW1hdGVkX2RlbF90aW1lOiBcIjE1fjIw67aEXCIsIC8vIOuwsOuLrOyGjOyalOyLnOqwhFxyXG4gICAgICBtaW5fb3JkZXJfcHJpY2U6IDEyMDAwLCAvLyDstZzshozso7zrrLhcclxuICAgICAgZ3BhOiA1LCAvLyDrs4TsoJBcclxuICAgICAgVGh1bWJuYWlsOiBbeyBzcmM6IFwiMVwiIH0sIHsgc3JjOiBcIjJcIiB9LCB7IHNyYzogXCIzXCIgfV0sXHJcbiAgICAgIE1lbnU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIuqwiOu5hFwiLCAvLyDrqZTribQg7J2066aEXHJcbiAgICAgICAgICBwcmljZTogXCIxMzAwMFwiLCAvLyDqsIDqsqlcclxuICAgICAgICAgIGltYWdlOiBcIlwiLCAvLyDsgqzsp4RcclxuICAgICAgICAgIGludHJvZHVjdGlvbjogXCJcIiwgLy8g7IaM6rCcXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICByZXN0YXVyYW50X25hbWU6IFwi64ut7LmYR29cIiwgLy8g6rCA6rKM7J2066aEXHJcbiAgICAgIGNhdGVnb3J5OiBcIuy5mO2CqFwiLCAvLyDsubTthYzqs6DrpqxcclxuICAgICAgcGhvbmU6IFwiMDIxMjM0MTIzNFwiLCAvL+yghO2ZlOuyiO2YuFxyXG4gICAgICBkZWxpdmVyeV9mZWU6IDMwMDAsIC8vIOuwsOuLrOu5hFxyXG4gICAgICBlc3RpbWF0ZWRfZGVsX3RpbWU6IFwiMTB+MTXrtoRcIiwgLy8g67Cw64us7IaM7JqU7Iuc6rCEXHJcbiAgICAgIG1pbl9vcmRlcl9wcmljZTogMTIwMDAsIC8vIOy1nOyGjOyjvOusuFxyXG4gICAgICBncGE6IDUsIC8vIOuzhOygkFxyXG4gICAgICBUaHVtYm5haWw6IFt7IHNyYzogXCIxXCIgfSwgeyBzcmM6IFwiMlwiIH0sIHsgc3JjOiBcIjNcIiB9XSxcclxuICAgICAgTWVudTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwi7LmY7YKoXCIsIC8vIOuplOuJtCDsnbTrpoRcclxuICAgICAgICAgIHByaWNlOiBcIjE1MDAwXCIsIC8vIOqwgOqyqVxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsIC8vIOyCrOynhFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogMyxcclxuICAgICAgcmVzdGF1cmFudF9uYW1lOiBcIuuqheulnOynhOyCrOqwiOu5hFwiLCAvLyDqsIDqsozsnbTrpoRcclxuICAgICAgY2F0ZWdvcnk6IFwi7ZWc7IudXCIsIC8vIOy5tO2FjOqzoOumrFxyXG4gICAgICBwaG9uZTogXCIwMjEyMzQxMjM0XCIsIC8v7KCE7ZmU67KI7Zi4XHJcbiAgICAgIGRlbGl2ZXJ5X2ZlZTogMjAwMCwgLy8g67Cw64us67mEXHJcbiAgICAgIGVzdGltYXRlZF9kZWxfdGltZTogXCIxNX4yMOu2hFwiLCAvLyDrsLDri6zshozsmpTsi5zqsIRcclxuICAgICAgbWluX29yZGVyX3ByaWNlOiAxMjAwMCwgLy8g7LWc7IaM7KO866y4XHJcbiAgICAgIGdwYTogNC4yLCAvLyDrs4TsoJBcclxuICAgICAgVGh1bWJuYWlsOiBbeyBzcmM6IFwiMVwiIH0sIHsgc3JjOiBcIjJcIiB9LCB7IHNyYzogXCIzXCIgfV0sXHJcbiAgICAgIE1lbnU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIuqwiOu5hFwiLCAvLyDrqZTribQg7J2066aEXHJcbiAgICAgICAgICBwcmljZTogXCIxMzAwMFwiLCAvLyDqsIDqsqlcclxuICAgICAgICAgIGltYWdlOiBcIlwiLCAvLyDsgqzsp4RcclxuICAgICAgICAgIGludHJvZHVjdGlvbjogXCJcIiwgLy8g7IaM6rCcXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA0LFxyXG4gICAgICByZXN0YXVyYW50X25hbWU6IFwi66qF66Wc7KeE7IKs6rCI67mEXCIsIC8vIOqwgOqyjOydtOumhFxyXG4gICAgICBjYXRlZ29yeTogXCLtlZzsi51cIiwgLy8g7Lm07YWM6rOg66asXHJcbiAgICAgIHBob25lOiBcIjAyMTIzNDEyMzRcIiwgLy/soITtmZTrsojtmLhcclxuICAgICAgZGVsaXZlcnlfZmVlOiAyMDAwLCAvLyDrsLDri6zruYRcclxuICAgICAgZXN0aW1hdGVkX2RlbF90aW1lOiBcIjE1fjIw67aEXCIsIC8vIOuwsOuLrOyGjOyalOyLnOqwhFxyXG4gICAgICBtaW5fb3JkZXJfcHJpY2U6IDEyMDAwLCAvLyDstZzshozso7zrrLhcclxuICAgICAgZ3BhOiA0LjMsIC8vIOuzhOygkFxyXG4gICAgICBUaHVtYm5haWw6IFt7IHNyYzogXCIxXCIgfSwgeyBzcmM6IFwiMlwiIH0sIHsgc3JjOiBcIjNcIiB9XSxcclxuICAgICAgTWVudTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwi6rCI67mEXCIsIC8vIOuplOuJtCDsnbTrpoRcclxuICAgICAgICAgIHByaWNlOiBcIjEzMDAwXCIsIC8vIOqwgOqyqVxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsIC8vIOyCrOynhFxyXG4gICAgICAgICAgaW50cm9kdWN0aW9uOiBcIlwiLCAvLyDshozqsJxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIHJlc3RhdXJhbnRfbmFtZTogXCLrqoXrpZzsp4TsgqzqsIjruYRcIiwgLy8g6rCA6rKM7J2066aEXHJcbiAgICAgIGNhdGVnb3J5OiBcIu2VnOyLnVwiLCAvLyDsubTthYzqs6DrpqxcclxuICAgICAgcGhvbmU6IFwiMDIxMjM0MTIzNFwiLCAvL+yghO2ZlOuyiO2YuFxyXG4gICAgICBkZWxpdmVyeV9mZWU6IDIwMDAsIC8vIOuwsOuLrOu5hFxyXG4gICAgICBlc3RpbWF0ZWRfZGVsX3RpbWU6IFwiMTV+MjDrtoRcIiwgLy8g67Cw64us7IaM7JqU7Iuc6rCEXHJcbiAgICAgIG1pbl9vcmRlcl9wcmljZTogMTIwMDAsIC8vIOy1nOyGjOyjvOusuFxyXG4gICAgICBncGE6IDQuNCwgLy8g67OE7KCQXHJcbiAgICAgIFRodW1ibmFpbDogW3sgc3JjOiBcIjFcIiB9LCB7IHNyYzogXCIyXCIgfSwgeyBzcmM6IFwiM1wiIH1dLFxyXG4gICAgICBNZW51OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCLqsIjruYRcIiwgLy8g66mU64m0IOydtOumhFxyXG4gICAgICAgICAgcHJpY2U6IFwiMTMwMDBcIiwgLy8g6rCA6rKpXHJcbiAgICAgICAgICBpbWFnZTogXCJcIiwgLy8g7IKs7KeEXHJcbiAgICAgICAgICBpbnRyb2R1Y3Rpb246IFwiXCIsIC8vIOyGjOqwnFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogNixcclxuICAgICAgcmVzdGF1cmFudF9uYW1lOiBcIuuqheulnOynhOyCrOqwiOu5hFwiLCAvLyDqsIDqsozsnbTrpoRcclxuICAgICAgY2F0ZWdvcnk6IFwi7ZWc7IudXCIsIC8vIOy5tO2FjOqzoOumrFxyXG4gICAgICBwaG9uZTogXCIwMjEyMzQxMjM0XCIsIC8v7KCE7ZmU67KI7Zi4XHJcbiAgICAgIGRlbGl2ZXJ5X2ZlZTogMjAwMCwgLy8g67Cw64us67mEXHJcbiAgICAgIGVzdGltYXRlZF9kZWxfdGltZTogXCIxNX4yMOu2hFwiLCAvLyDrsLDri6zshozsmpTsi5zqsIRcclxuICAgICAgbWluX29yZGVyX3ByaWNlOiAxMjAwMCwgLy8g7LWc7IaM7KO866y4XHJcbiAgICAgIGdwYTogMy43LCAvLyDrs4TsoJBcclxuICAgICAgVGh1bWJuYWlsOiBbeyBzcmM6IFwiMVwiIH0sIHsgc3JjOiBcIjJcIiB9LCB7IHNyYzogXCIzXCIgfV0sXHJcbiAgICAgIE1lbnU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIuqwiOu5hFwiLCAvLyDrqZTribQg7J2066aEXHJcbiAgICAgICAgICBwcmljZTogXCIxMzAwMFwiLCAvLyDqsIDqsqlcclxuICAgICAgICAgIGltYWdlOiBcIlwiLCAvLyDsgqzsp4RcclxuICAgICAgICAgIGludHJvZHVjdGlvbjogXCJcIiwgLy8g7IaM6rCcXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiA3LFxyXG4gICAgICByZXN0YXVyYW50X25hbWU6IFwi66qF66Wc7KeE7IKs6rCI67mEXCIsIC8vIOqwgOqyjOydtOumhFxyXG4gICAgICBjYXRlZ29yeTogXCLtlZzsi51cIiwgLy8g7Lm07YWM6rOg66asXHJcbiAgICAgIHBob25lOiBcIjAyMTIzNDEyMzRcIiwgLy/soITtmZTrsojtmLhcclxuICAgICAgZGVsaXZlcnlfZmVlOiAyMDAwLCAvLyDrsLDri6zruYRcclxuICAgICAgZXN0aW1hdGVkX2RlbF90aW1lOiBcIjE1fjIw67aEXCIsIC8vIOuwsOuLrOyGjOyalOyLnOqwhFxyXG4gICAgICBtaW5fb3JkZXJfcHJpY2U6IDEyMDAwLCAvLyDstZzshozso7zrrLhcclxuICAgICAgZ3BhOiAyLjEsIC8vIOuzhOygkFxyXG4gICAgICBUaHVtYm5haWw6IFt7IHNyYzogXCIxXCIgfSwgeyBzcmM6IFwiMlwiIH0sIHsgc3JjOiBcIjNcIiB9XSxcclxuICAgICAgTWVudTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwi6rCI67mEXCIsIC8vIOuplOuJtCDsnbTrpoRcclxuICAgICAgICAgIHByaWNlOiBcIjEzMDAwXCIsIC8vIOqwgOqyqVxyXG4gICAgICAgICAgaW1hZ2U6IFwiXCIsIC8vIOyCrOynhFxyXG4gICAgICAgICAgaW50cm9kdWN0aW9uOiBcIlwiLCAvLyDshozqsJxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIHJlc3RhdXJhbnRfbmFtZTogXCLrqoXrpZzsp4TsgqzqsIjruYRcIiwgLy8g6rCA6rKM7J2066aEXHJcbiAgICAgIGNhdGVnb3J5OiBcIu2VnOyLnVwiLCAvLyDsubTthYzqs6DrpqxcclxuICAgICAgcGhvbmU6IFwiMDIxMjM0MTIzNFwiLCAvL+yghO2ZlOuyiO2YuFxyXG4gICAgICBkZWxpdmVyeV9mZWU6IDIwMDAsIC8vIOuwsOuLrOu5hFxyXG4gICAgICBlc3RpbWF0ZWRfZGVsX3RpbWU6IFwiMTV+MjDrtoRcIiwgLy8g67Cw64us7IaM7JqU7Iuc6rCEXHJcbiAgICAgIG1pbl9vcmRlcl9wcmljZTogMTIwMDAsIC8vIOy1nOyGjOyjvOusuFxyXG4gICAgICBncGE6IDQuNCwgLy8g67OE7KCQXHJcbiAgICAgIFRodW1ibmFpbDogW3sgc3JjOiBcIjFcIiB9LCB7IHNyYzogXCIyXCIgfSwgeyBzcmM6IFwiM1wiIH1dLFxyXG4gICAgICBNZW51OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCLqsIjruYRcIiwgLy8g66mU64m0IOydtOumhFxyXG4gICAgICAgICAgcHJpY2U6IFwiMTMwMDBcIiwgLy8g6rCA6rKpXHJcbiAgICAgICAgICBpbWFnZTogXCJcIiwgLy8g7IKs7KeEXHJcbiAgICAgICAgICBpbnRyb2R1Y3Rpb246IFwiXCIsIC8vIOyGjOqwnFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgcmVzdGF1cmFudF9uYW1lOiBcIuuqheulnOynhOyCrOqwiOu5hFwiLCAvLyDqsIDqsozsnbTrpoRcclxuICAgICAgY2F0ZWdvcnk6IFwi7ZWc7IudXCIsIC8vIOy5tO2FjOqzoOumrFxyXG4gICAgICBwaG9uZTogXCIwMjEyMzQxMjM0XCIsIC8v7KCE7ZmU67KI7Zi4XHJcbiAgICAgIGRlbGl2ZXJ5X2ZlZTogMjAwMCwgLy8g67Cw64us67mEXHJcbiAgICAgIGVzdGltYXRlZF9kZWxfdGltZTogXCIxNX4yMOu2hFwiLCAvLyDrsLDri6zshozsmpTsi5zqsIRcclxuICAgICAgbWluX29yZGVyX3ByaWNlOiAxMjAwMCwgLy8g7LWc7IaM7KO866y4XHJcbiAgICAgIGdwYTogMS43LCAvLyDrs4TsoJBcclxuICAgICAgVGh1bWJuYWlsOiBbeyBzcmM6IFwiMVwiIH0sIHsgc3JjOiBcIjJcIiB9LCB7IHNyYzogXCIzXCIgfV0sXHJcbiAgICAgIE1lbnU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIuqwiOu5hFwiLCAvLyDrqZTribQg7J2066aEXHJcbiAgICAgICAgICBwcmljZTogXCIxMzAwMFwiLCAvLyDqsIDqsqlcclxuICAgICAgICAgIGltYWdlOiBcIlwiLCAvLyDsgqzsp4RcclxuICAgICAgICAgIGludHJvZHVjdGlvbjogXCJcIiwgLy8g7IaM6rCcXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxMCxcclxuICAgICAgcmVzdGF1cmFudF9uYW1lOiBcIuuqheulnOynhOyCrOqwiOu5hFwiLCAvLyDqsIDqsozsnbTrpoRcclxuICAgICAgY2F0ZWdvcnk6IFwi7ZWc7IudXCIsIC8vIOy5tO2FjOqzoOumrFxyXG4gICAgICBwaG9uZTogXCIwMjEyMzQxMjM0XCIsIC8v7KCE7ZmU67KI7Zi4XHJcbiAgICAgIGRlbGl2ZXJ5X2ZlZTogMjAwMCwgLy8g67Cw64us67mEXHJcbiAgICAgIGVzdGltYXRlZF9kZWxfdGltZTogXCIxNX4yMOu2hFwiLCAvLyDrsLDri6zshozsmpTsi5zqsIRcclxuICAgICAgbWluX29yZGVyX3ByaWNlOiAxMjAwMCwgLy8g7LWc7IaM7KO866y4XHJcbiAgICAgIGdwYTogMSwgLy8g67OE7KCQXHJcbiAgICAgIFRodW1ibmFpbDogW3sgc3JjOiBcIjFcIiB9LCB7IHNyYzogXCIyXCIgfSwgeyBzcmM6IFwiM1wiIH1dLFxyXG4gICAgICBNZW51OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCLqsIjruYRcIiwgLy8g66mU64m0IOydtOumhFxyXG4gICAgICAgICAgcHJpY2U6IFwiMTMwMDBcIiwgLy8g6rCA6rKpXHJcbiAgICAgICAgICBpbWFnZTogXCJcIiwgLy8g7IKs7KeEXHJcbiAgICAgICAgICBpbnRyb2R1Y3Rpb246IFwiXCIsIC8vIOyGjOqwnFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSZWR1Y2VyKGluaXRpYWxTdGF0ZSwge30pO1xyXG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IGNyZWF0ZVJlZHVjZXIgZnJvbSBcIi4vY3JlYXRlUmVkdWNlclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG4gIGxvZ0luRG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHR5cGU6IFwiTE9HX0lOX1JFUVVFU1RcIixcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJlZHVjZXIoaW5pdGlhbFN0YXRlLCB7XHJcbiAgW0xPR19JTl9SRVFVRVNUXTogKHN0YXRlKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgc3RhdGUubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICBzdGF0ZS5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICB9LFxyXG4gIFtMT0dfSU5fU1VDQ0VTU106IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzdGF0ZS5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICBzdGF0ZS5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gIH0sXHJcbiAgW0xPR19JTl9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICB9LFxyXG4gIFtMT0dfT1VUX1JFUVVFU1RdOiAoc3RhdGUpID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgc3RhdGUubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgc3RhdGUubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgW0xPR19PVVRfU1VDQ0VTU106IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICBzdGF0ZS5tZSA9IG51bGw7XHJcbiAgfSxcclxuICBbTE9HX09VVF9GQUlMVVJFXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN0YXRlLmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gIH0sXHJcbiAgW1NJR05fVVBfUkVRVUVTVF06IChzdGF0ZSkgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICBzdGF0ZS5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICBzdGF0ZS5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgfSxcclxuICBbU0lHTl9VUF9TVUNDRVNTXTogKHN0YXRlKSA9PiB7XHJcbiAgICBzdGF0ZS5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5zaWduVXBEb25lID0gdHJ1ZTtcclxuICB9LFxyXG4gIFtTSUdOX1VQX0ZBSUxVUkVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3RhdGUuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc3RhdGUuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgfSxcclxufSk7XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzA4NS9hcGkvY3VzdG9tZXJcIjsgLy8gYmFzZXVybCDshKTsoJUg7JWe7Jy866GcIOyalOyyre2VoOuVjFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh1c2VyU2FnYSldKTtcclxufVxyXG4iLCIvKipcclxuICogLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnNcclxuICpcclxuICogQGZvcm1hdFxyXG4gKi9cclxuXHJcbi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgeyBhbGwsIGRlbGF5LCBwdXQsIGZvcmssIHRha2VMYXRlc3QsIGNhbGwgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL3NpZ251cFwiLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICAvLyDslaHshZjsnYQg67Cb7J2MXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgLy8g7JWh7IWY7J2EIGRpc3BhdGNoXHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLnJlc3BvbnNlLmVycm9yLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvbG9naW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAvLyDslaHshZjsnYQg67Cb7J2MXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgLy8g7JqU7LKt7J20IOyEseqzteydtOuptCBjYWxs66GcIGxvZ0luQVBJ66W8IOyLpO2Wie2VmOqzoCDqsrDqtI/qsJLsnYQg67OA7IiYIHJlc3VsdOyXkCDsoIDsnqVcclxuICAgIC8vIGZvcmvripQg67mE64+Z6riwIGNhbGzsnYAg64+Z6riwID0+IGFzeW5jIGF3YWl0IO2VqOyImCDruYTsircg6rKw6rSP6rCSIOuwm+ycvOuptCDsi6Ttlokg44WH44WHXHJcbiAgICAvLyBhY3Rpb27sl5DshJwgZGF0YeulvCDqurzrgrTshJwgbG9nSW5BUEkg7ZWo7IiY7JeQIOyduOyekOuhnCDrs7Trg4RcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIC8vIOyVoeyFmOydhCBkaXNwYXRjaFxyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuLy8gICByZXR1cm4gYXhpb3MucG9zdChcIi9sb2dvdXRcIik7XHJcbi8vIH1cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZS5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaExvZ0luKSwgZm9yayh3YXRjaExvZ091dCksIGZvcmsod2F0Y2hTaWduVXApXSk7XHJcbn1cclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==