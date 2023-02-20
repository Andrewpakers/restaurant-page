/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/pad-thai.jpeg":
/*!**********************************!*\
  !*** ./src/assets/pad-thai.jpeg ***!
  \**********************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://restaurant-page/./src/assets/pad-thai.jpeg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n\n\n\n\n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_pad_thai_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pad-thai.jpeg */ \"./src/assets/pad-thai.jpeg\");\n/* harmony import */ var _assets_pad_thai_jpeg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_pad_thai_jpeg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pageMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageMenu.js */ \"./src/pageMenu.js\");\n/* harmony import */ var _pageHome_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageHome.js */ \"./src/pageHome.js\");\n/* harmony import */ var _pageContact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageContact.js */ \"./src/pageContact.js\");\n\n\n\n\n\nconst createHeader = function() {\n    const header = document.createElement('div');\n //   header.style.backgroundImage = `url(${backgroundImage})`;\n    header.classList.add('header');\n\n    const textContainer = document.createElement('div');\n    textContainer.classList.add('textContainer');\n\n    const title = document.createElement('h1');\n    title.textContent = `Andrew's Awesome Thai Spot`;\n\n    const address = document.createElement('div');\n    address.textContent = \"123 Boulevard Boulevard\\r\\nCity, State, 00000\";\n    address.classList.add('subtext');\n\n    textContainer.appendChild(title);\n    textContainer.appendChild(address);\n    header.appendChild(textContainer);\n\n    return header;\n};\n\nconst createContent = function () {\n    const contentContainer = document.createElement('div');\n    contentContainer.classList.add('contentContainer');\n    const para1 = document.createElement('p');\n    para1.classList.add('para1');\n    const para2 = document.createElement('p');\n    para2.classList.add('para2');\n    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus purus, tempus eu viverra eget, convallis tempus ligula. Vivamus auctor erat ante, id pellentesque mi vehicula nec. Maecenas eu elit sed augue faucibus fermentum. Phasellus libero libero, lobortis non arcu quis, suscipit porta leo. Maecenas eget nisi a quam molestie blandit elementum vel libero. Praesent vehicula nisl et tellus scelerisque congue. Morbi faucibus, sem a blandit egestas, urna est pulvinar arcu, ac tempus nulla magna non augue.';\n    para2.textContent = 'Sed ullamcorper est in viverra ullamcorper. Praesent semper, elit non volutpat accumsan, mauris purus facilisis mauris, sed imperdiet tortor lorem vel mi. Pellentesque ac ornare nisl. Etiam vitae nisl at mauris consectetur condimentum. Quisque rhoncus iaculis dolor et feugiat. Morbi interdum sollicitudin lobortis. In eget finibus felis, quis vulputate nisl. Mauris suscipit, augue ut bibendum aliquet, nunc arcu pulvinar elit, sit amet consequat odio felis vitae nulla. Duis consequat nec tortor a fringilla. Nunc iaculis velit tellus, sit amet vehicula erat scelerisque ac. Ut suscipit, risus ac dapibus aliquam, urna orci semper ipsum, vel imperdiet enim purus a orci. Etiam non facilisis sem, eget maximus libero. Praesent turpis mauris, fermentum nec est vitae, iaculis dictum est. Vestibulum condimentum lacus non nunc efficitur, sed malesuada ligula placerat.';\n    contentContainer.appendChild(para1);\n    contentContainer.appendChild(para2);\n\n    return contentContainer;\n};\n\nconst createNavBar = function() {\n    const navigationbar = document.createElement('div');\n    navigationbar.classList.add('navbar');\n    \n    const homeBtn = document.createElement('button');\n    homeBtn.textContent = 'Home';\n    homeBtn.addEventListener('click', () => {\n        (0,_pageHome_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    navigationbar.appendChild(homeBtn); \n\n    const menuBtn = document.createElement('button');\n    menuBtn.textContent = 'Menu';\n    menuBtn.addEventListener('click', () => {\n        (0,_pageMenu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    navigationbar.appendChild(menuBtn);\n\n    const contactBtn = document.createElement('button');\n    contactBtn.textContent = 'Contact';\n    contactBtn.addEventListener('click', () => {\n        (0,_pageContact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n    navigationbar.appendChild(contactBtn); \n    \n    return navigationbar;\n};\n\nconst init = function() {\n    const pageBody = document.querySelector('body');\n    const contentDiv = document.createElement('div');\n    contentDiv.id = \"content\";\n\n    pageBody.appendChild(createNavBar());\n    pageBody.appendChild(contentDiv);\n    contentDiv.appendChild(createHeader());\n    contentDiv.appendChild(createContent());\n  };\n\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/pageContact.js":
/*!****************************!*\
  !*** ./src/pageContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst init = function() {\n    const subtext = document.querySelector('.subtext');\n    const title = document.querySelector('h1');\n    const para1 = document.querySelector('.para1');\n    const para2 = document.querySelector('.para2');\n\n    subtext.textContent = \"123 Boulevard Boulevard\\r\\nCity, State, 00000\";\n    para1.textContent = 'Contact Me!';\n    para2.textContent = 'Owner@email.example';    \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://restaurant-page/./src/pageContact.js?");

/***/ }),

/***/ "./src/pageHome.js":
/*!*************************!*\
  !*** ./src/pageHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst init = function() {\n    const subtext = document.querySelector('.subtext');\n    const title = document.querySelector('h1');\n    const para1 = document.querySelector('.para1');\n    const para2 = document.querySelector('.para2');\n\n    subtext.textContent = \"123 Boulevard Boulevard\\r\\nCity, State, 00000\";\n    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus purus, tempus eu viverra eget, convallis tempus ligula. Vivamus auctor erat ante, id pellentesque mi vehicula nec. Maecenas eu elit sed augue faucibus fermentum. Phasellus libero libero, lobortis non arcu quis, suscipit porta leo. Maecenas eget nisi a quam molestie blandit elementum vel libero. Praesent vehicula nisl et tellus scelerisque congue. Morbi faucibus, sem a blandit egestas, urna est pulvinar arcu, ac tempus nulla magna non augue.';\n    para2.textContent = 'Sed ullamcorper est in viverra ullamcorper. Praesent semper, elit non volutpat accumsan, mauris purus facilisis mauris, sed imperdiet tortor lorem vel mi. Pellentesque ac ornare nisl. Etiam vitae nisl at mauris consectetur condimentum. Quisque rhoncus iaculis dolor et feugiat. Morbi interdum sollicitudin lobortis. In eget finibus felis, quis vulputate nisl. Mauris suscipit, augue ut bibendum aliquet, nunc arcu pulvinar elit, sit amet consequat odio felis vitae nulla. Duis consequat nec tortor a fringilla. Nunc iaculis velit tellus, sit amet vehicula erat scelerisque ac. Ut suscipit, risus ac dapibus aliquam, urna orci semper ipsum, vel imperdiet enim purus a orci. Etiam non facilisis sem, eget maximus libero. Praesent turpis mauris, fermentum nec est vitae, iaculis dictum est. Vestibulum condimentum lacus non nunc efficitur, sed malesuada ligula placerat.';\n    \n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://restaurant-page/./src/pageHome.js?");

/***/ }),

/***/ "./src/pageMenu.js":
/*!*************************!*\
  !*** ./src/pageMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst init = function() {\n    const subtext = document.querySelector('.subtext');\n    const title = document.querySelector('h1');\n    const para1 = document.querySelector('.para1');\n    const para2 = document.querySelector('.para2');\n\n    subtext.textContent = 'Menu';\n    para2.textContent = '';\n    para1.textContent = 'Filet Mignon, 8 ounce - $38\\r\\nFilet Mignon, 12 ounce - $49\\r\\nRibeye Steak, 18 ounce - $39\\r\\nPorterhouse Steak for Two - $40\\r\\nClassic New York Steak - $36';\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack://restaurant-page/./src/pageMenu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> * {\\n|     font-family: OpenSans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n|     text-decoration: none;\");\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;