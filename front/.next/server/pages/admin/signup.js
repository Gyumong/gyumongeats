module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/admin/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/StyleForm.js":
/*!*********************************!*\
  !*** ./components/StyleForm.js ***!
  \*********************************/
/*! exports provided: FormBlock, InputBlock, ButtonBlock, LowerBlock, ABlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBlock", function() { return FormBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonBlock", function() { return ButtonBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowerBlock", function() { return LowerBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABlock", function() { return ABlock; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/** @format */


const FormBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Form"])`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 768px;
  height: 100vh;
  padding: 60px 30px;
`;
const InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Input"])`
  padding: 5px 8px;
  margin-top: 30px;
  border: none;
  border-bottom: 1px solid #e2e2e2;
`;
const ButtonBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(antd__WEBPACK_IMPORTED_MODULE_1__["Button"])`
  margin-top: 30px;
  background-color: #42a5f5;
  color: white;
  &:hover {
    background-color: #42a5f5;
    color: white;
  }
`;
const LowerBlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  justify-content: space-between;
`;
const ABlock = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a`
  margin-top: 30px;
  width: 25%;
`;

/***/ }),

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/** @format */

/* harmony default export */ __webpack_exports__["default"] = ((initalValue = null) => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initalValue);
  const handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
});

/***/ }),

/***/ "./pages/admin/signup.js":
/*!*******************************!*\
  !*** ./pages/admin/signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/StyleForm */ "./components/StyleForm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\82104\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\project\\gyumongeats\\front\\pages\\admin\\signup.js";

/** @format */




const ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  color: red;
`;

const SignUp = () => {
  const [email, onChangeEmail] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const [nickname, onChangeNickname] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const [password, onChangePassword] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const [phonenumber, onChangePhonenumber] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [adminNumber, onChangeAdminNumber] = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])("");
  const {
    0: passwordCheck,
    1: setPasswordCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: passwordError,
    1: setPasswordError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  const onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    console.log(email, nickname, password, phonenumber, adminNumber);
  }, [password, passwordCheck]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["FormBlock"], {
    onFinish: onSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "\uD68C\uC6D0\uAC00\uC785 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
      name: "admin-number",
      placeholder: "\uC0AC\uC5C5\uC790\uBC88\uD638",
      type: "number",
      value: adminNumber,
      onChange: onChangeAdminNumber
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
      name: "user-email",
      placeholder: "\uC774\uBA54\uC77C",
      type: "email",
      value: email,
      onChange: onChangeEmail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
      name: "user-password",
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638",
      value: password,
      onChange: onChangePassword
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
      name: "user-password-check",
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638\uD655\uC778",
      value: passwordCheck,
      onChange: onChangePasswordCheck
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), passwordError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ErrorMessage, {
      children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
      name: "user-nick",
      type: "text",
      placeholder: "\uB2C9\uB124\uC784",
      value: nickname,
      onChange: onChangeNickname
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["InputBlock"], {
      name: "user-phone",
      type: "number",
      placeholder: "\uD578\uB4DC\uD3F0\uBC88\uD638",
      value: phonenumber,
      onChange: onChangePhonenumber
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_StyleForm__WEBPACK_IMPORTED_MODULE_2__["ButtonBlock"], {
      htmlType: "submit",
      children: "\uD68C\uC6D0\uAC00\uC785"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdHlsZUZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW4vc2lnbnVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiRm9ybUJsb2NrIiwic3R5bGVkIiwiRm9ybSIsIklucHV0QmxvY2siLCJJbnB1dCIsIkJ1dHRvbkJsb2NrIiwiQnV0dG9uIiwiTG93ZXJCbG9jayIsImRpdiIsIkFCbG9jayIsImEiLCJpbml0YWxWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImhhbmRsZXIiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJFcnJvck1lc3NhZ2UiLCJTaWduVXAiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJ1c2VJbnB1dCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInBob25lbnVtYmVyIiwib25DaGFuZ2VQaG9uZW51bWJlciIsImFkbWluTnVtYmVyIiwib25DaGFuZ2VBZG1pbk51bWJlciIsInBhc3N3b3JkQ2hlY2siLCJzZXRQYXNzd29yZENoZWNrIiwicGFzc3dvcmRFcnJvciIsInNldFBhc3N3b3JkRXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hZG1pbi9zaWdudXAuanNcIik7XG4iLCIvKiogQGZvcm1hdCAqL1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9ybUJsb2NrID0gc3R5bGVkKEZvcm0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDc2OHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogNjBweCAzMHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0QmxvY2sgPSBzdHlsZWQoSW5wdXQpYFxyXG4gIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmUyZTI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQmxvY2sgPSBzdHlsZWQoQnV0dG9uKWBcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MmE1ZjU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBMb3dlckJsb2NrID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuYDtcclxuZXhwb3J0IGNvbnN0IEFCbG9jayA9IHN0eWxlZC5hYFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuYDtcclxuIiwiLyoqIEBmb3JtYXQgKi9cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGluaXRhbFZhbHVlID0gbnVsbCkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoaW5pdGFsVmFsdWUpO1xyXG4gIGNvbnN0IGhhbmRsZXIgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVyLCBzZXRWYWx1ZV07XHJcbn07XHJcbiIsIi8qKiBAZm9ybWF0ICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1CbG9jaywgSW5wdXRCbG9jaywgQnV0dG9uQmxvY2sgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TdHlsZUZvcm1cIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi8uLi9ob29rcy91c2VJbnB1dFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogcmVkO1xyXG5gO1xyXG5jb25zdCBTaWduVXAgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bob25lbnVtYmVyLCBvbkNoYW5nZVBob25lbnVtYmVyXSA9IHVzZUlucHV0KCk7XHJcbiAgY29uc3QgW2FkbWluTnVtYmVyLCBvbkNoYW5nZUFkbWluTnVtYmVyXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVBhc3N3b3JkQ2hlY2sgPSB1c2VDYWxsYmFjayhcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgICB9LFxyXG4gICAgW3Bhc3N3b3JkXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBwYXNzd29yZENoZWNrKSB7XHJcbiAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCwgcGhvbmVudW1iZXIsIGFkbWluTnVtYmVyKTtcclxuICB9LCBbcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2tdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1CbG9jayBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICA8aDE+7ZqM7JuQ6rCA7J6FIDwvaDE+XHJcbiAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgbmFtZT1cImFkbWluLW51bWJlclwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLsgqzsl4XsnpDrsojtmLhcIlxyXG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgIHZhbHVlPXthZG1pbk51bWJlcn1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VBZG1pbk51bWJlcn1cclxuICAgICAgLz5cclxuICAgICAgPElucHV0QmxvY2tcclxuICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbxcIlxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dEJsb2NrXHJcbiAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmQtY2hlY2tcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjtmZXsnbhcIlxyXG4gICAgICAgIHZhbHVlPXtwYXNzd29yZENoZWNrfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkQ2hlY2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtwYXNzd29yZEVycm9yICYmIChcclxuICAgICAgICA8RXJyb3JNZXNzYWdlPuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICApfVxyXG4gICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgIG5hbWU9XCJ1c2VyLW5pY2tcIlxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIuuLieuEpOyehFwiXHJcbiAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8SW5wdXRCbG9ja1xyXG4gICAgICAgIG5hbWU9XCJ1c2VyLXBob25lXCJcclxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIu2VuOuTnO2PsOuyiO2YuFwiXHJcbiAgICAgICAgdmFsdWU9e3Bob25lbnVtYmVyfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBob25lbnVtYmVyfVxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uQmxvY2sgaHRtbFR5cGU9XCJzdWJtaXRcIj7tmozsm5DqsIDsnoU8L0J1dHRvbkJsb2NrPlxyXG4gICAgPC9Gb3JtQmxvY2s+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==