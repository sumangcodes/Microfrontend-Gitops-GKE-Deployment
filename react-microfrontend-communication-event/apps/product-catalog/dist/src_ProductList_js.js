"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproduct_catalog"] = self["webpackChunkproduct_catalog"] || []).push([["src_ProductList_js"],{

/***/ "./src/ProductList.js":
/*!****************************!*\
  !*** ./src/ProductList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sumangcodes_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sumangcodes/design-system */ \"../../node_modules/@sumangcodes/design-system/dist/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nconst MicrofrontendWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  border: ${props => props.theme.microfrontendBorder};\n  padding: ${props => props.theme.spacing(2)};\n  margin: ${props => props.theme.spacing(2)};\n  background-color: ${props => props.theme.colors.background};\n`;\nconst ProductList = () => {\n  const products = [{\n    id: 1,\n    name: \"Laptop\"\n  }, {\n    id: 2,\n    name: \"Phone\"\n  }];\n  const handleAddToCart = product => {\n    console.log(`Emitting add-to-cart event for product ID: ${product.id}`);\n    console.log(\"Window object before dispatch:\", window); // Debugging window\n\n    // Ensure cross-browser compatibility with CustomEvent\n    const customEvent = new CustomEvent('add-to-cart', {\n      detail: product,\n      bubbles: true,\n      cancelable: true\n    });\n    window.dispatchEvent(customEvent); // Dispatch event to global window object\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    theme: _sumangcodes_design_system__WEBPACK_IMPORTED_MODULE_1__.theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MicrofrontendWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Product Catalog\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, products.map(product => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: product.id\n  }, product.name, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_sumangcodes_design_system__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    onClick: () => handleAddToCart(product)\n  }, \"Add to Cart\"))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductList);\n\n//# sourceURL=webpack://product-catalog/./src/ProductList.js?");

/***/ })

}]);