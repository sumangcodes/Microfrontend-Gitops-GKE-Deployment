"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproduct_catalog"] = self["webpackChunkproduct_catalog"] || []).push([["src_App_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList */ \"./src/ProductList.js\");\n// apps/product-catalog/src/App.js\n\n\nconst App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Product Catalog\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://product-catalog/./src/App.js?");

/***/ }),

/***/ "./src/ProductList.js":
/*!****************************!*\
  !*** ./src/ProductList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // Removed unnecessary import of useState\n\nconst ProductList = () => {\n  const products = [{\n    id: 1,\n    name: \"Laptop\"\n  }, {\n    id: 2,\n    name: \"Phone\"\n  }];\n  const handleAddToCart = product => {\n    console.log(`Emitting add-to-cart event for product ID: ${product.id}`);\n    console.log(\"Window object before dispatch:\", window); // Debugging window\n    // Ensure cross-browser compatibility with CustomEvent\n    const customEvent = new CustomEvent('add-to-cart', {\n      detail: product,\n      bubbles: true,\n      cancelable: true\n    });\n    window.dispatchEvent(customEvent); // Dispatch event to global window object\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Product Catalog\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: product.id\n  }, product.name, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: () => handleAddToCart(product)\n  }, \"Add to Cart\")))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\n\n//# sourceURL=webpack://product-catalog/./src/ProductList.js?");

/***/ })

}]);