"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshopping_cart"] = self["webpackChunkshopping_cart"] || []).push([["src_Cart_js"],{

/***/ "./src/Cart.js":
/*!*********************!*\
  !*** ./src/Cart.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sumangcodes_design_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sumangcodes/design-system */ \"../../node_modules/@sumangcodes/design-system/dist/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"../../node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nconst CartWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  border: ${props => props.theme.microfrontendBorder};\n  padding: ${props => props.theme.spacing(2)};\n  margin: ${props => props.theme.spacing(2)};\n  background-color: ${props => props.theme.colors.background};\n`;\nconst Cart = () => {\n  const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    console.log(\"Window object:\", window); // Prints the window object to the console\n    const handleAddToCart = event => {\n      const product = event.detail;\n      console.log(`Received product in cart: ID - ${product.id}, Name - ${product.name}`);\n      setCartItems(prevItems => {\n        const exists = prevItems.some(item => item.id === product.id);\n        if (exists) {\n          console.log(`Product with ID ${product.id} is already in the cart.`);\n          return prevItems;\n        }\n        return [...prevItems, product];\n      });\n    };\n    console.log(\"Setting up listener for add-to-cart event\");\n    window.addEventListener('add-to-cart', handleAddToCart);\n    return () => {\n      console.log(\"Cleaning up listener for add-to-cart event\");\n      window.removeEventListener('add-to-cart', handleAddToCart);\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    theme: _sumangcodes_design_system__WEBPACK_IMPORTED_MODULE_1__.theme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CartWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Shopping Cart\"), cartItems.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Your cart is empty.\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, cartItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n    key: item.id\n  }, item.name)))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);\n\n//# sourceURL=webpack://shopping-cart/./src/Cart.js?");

/***/ })

}]);