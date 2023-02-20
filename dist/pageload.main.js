/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pageContact.js":
/*!****************************!*\
  !*** ./src/pageContact.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const init = function() {
    const subtext = document.querySelector('.subtext');
    const title = document.querySelector('h1');
    const para1 = document.querySelector('.para1');
    const para2 = document.querySelector('.para2');

    subtext.textContent = "123 Boulevard Boulevard\r\nCity, State, 00000";
    para1.textContent = 'Contact Me!';
    para2.textContent = 'Owner@email.example';    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./src/pageHome.js":
/*!*************************!*\
  !*** ./src/pageHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const init = function() {
    const subtext = document.querySelector('.subtext');
    const title = document.querySelector('h1');
    const para1 = document.querySelector('.para1');
    const para2 = document.querySelector('.para2');

    subtext.textContent = "123 Boulevard Boulevard\r\nCity, State, 00000";
    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus purus, tempus eu viverra eget, convallis tempus ligula. Vivamus auctor erat ante, id pellentesque mi vehicula nec. Maecenas eu elit sed augue faucibus fermentum. Phasellus libero libero, lobortis non arcu quis, suscipit porta leo. Maecenas eget nisi a quam molestie blandit elementum vel libero. Praesent vehicula nisl et tellus scelerisque congue. Morbi faucibus, sem a blandit egestas, urna est pulvinar arcu, ac tempus nulla magna non augue.';
    para2.textContent = 'Sed ullamcorper est in viverra ullamcorper. Praesent semper, elit non volutpat accumsan, mauris purus facilisis mauris, sed imperdiet tortor lorem vel mi. Pellentesque ac ornare nisl. Etiam vitae nisl at mauris consectetur condimentum. Quisque rhoncus iaculis dolor et feugiat. Morbi interdum sollicitudin lobortis. In eget finibus felis, quis vulputate nisl. Mauris suscipit, augue ut bibendum aliquet, nunc arcu pulvinar elit, sit amet consequat odio felis vitae nulla. Duis consequat nec tortor a fringilla. Nunc iaculis velit tellus, sit amet vehicula erat scelerisque ac. Ut suscipit, risus ac dapibus aliquam, urna orci semper ipsum, vel imperdiet enim purus a orci. Etiam non facilisis sem, eget maximus libero. Praesent turpis mauris, fermentum nec est vitae, iaculis dictum est. Vestibulum condimentum lacus non nunc efficitur, sed malesuada ligula placerat.';
    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./src/pageMenu.js":
/*!*************************!*\
  !*** ./src/pageMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const init = function() {
    const subtext = document.querySelector('.subtext');
    const title = document.querySelector('h1');
    const para1 = document.querySelector('.para1');
    const para2 = document.querySelector('.para2');

    subtext.textContent = 'Menu';
    para2.textContent = '';
    para1.textContent = 'Filet Mignon, 8 ounce - $38\r\nFilet Mignon, 12 ounce - $49\r\nRibeye Steak, 18 ounce - $39\r\nPorterhouse Steak for Two - $40\r\nClassic New York Steak - $36';

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./src/assets/pad-thai.jpeg":
/*!**********************************!*\
  !*** ./src/assets/pad-thai.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc3ffd838710465f1bf5.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_pad_thai_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pad-thai.jpeg */ "./src/assets/pad-thai.jpeg");
/* harmony import */ var _pageMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageMenu.js */ "./src/pageMenu.js");
/* harmony import */ var _pageHome_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageHome.js */ "./src/pageHome.js");
/* harmony import */ var _pageContact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pageContact.js */ "./src/pageContact.js");





const createHeader = function() {
    const header = document.createElement('div');
 //   header.style.backgroundImage = `url(${backgroundImage})`;
    header.classList.add('header');

    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    const title = document.createElement('h1');
    title.textContent = `Andrew's Awesome Thai Spot`;

    const address = document.createElement('div');
    address.textContent = "123 Boulevard Boulevard\r\nCity, State, 00000";
    address.classList.add('subtext');

    textContainer.appendChild(title);
    textContainer.appendChild(address);
    header.appendChild(textContainer);

    return header;
};

const createContent = function () {
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    const para1 = document.createElement('p');
    para1.classList.add('para1');
    const para2 = document.createElement('p');
    para2.classList.add('para2');
    para1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacus purus, tempus eu viverra eget, convallis tempus ligula. Vivamus auctor erat ante, id pellentesque mi vehicula nec. Maecenas eu elit sed augue faucibus fermentum. Phasellus libero libero, lobortis non arcu quis, suscipit porta leo. Maecenas eget nisi a quam molestie blandit elementum vel libero. Praesent vehicula nisl et tellus scelerisque congue. Morbi faucibus, sem a blandit egestas, urna est pulvinar arcu, ac tempus nulla magna non augue.';
    para2.textContent = 'Sed ullamcorper est in viverra ullamcorper. Praesent semper, elit non volutpat accumsan, mauris purus facilisis mauris, sed imperdiet tortor lorem vel mi. Pellentesque ac ornare nisl. Etiam vitae nisl at mauris consectetur condimentum. Quisque rhoncus iaculis dolor et feugiat. Morbi interdum sollicitudin lobortis. In eget finibus felis, quis vulputate nisl. Mauris suscipit, augue ut bibendum aliquet, nunc arcu pulvinar elit, sit amet consequat odio felis vitae nulla. Duis consequat nec tortor a fringilla. Nunc iaculis velit tellus, sit amet vehicula erat scelerisque ac. Ut suscipit, risus ac dapibus aliquam, urna orci semper ipsum, vel imperdiet enim purus a orci. Etiam non facilisis sem, eget maximus libero. Praesent turpis mauris, fermentum nec est vitae, iaculis dictum est. Vestibulum condimentum lacus non nunc efficitur, sed malesuada ligula placerat.';
    contentContainer.appendChild(para1);
    contentContainer.appendChild(para2);

    return contentContainer;
};

const createNavBar = function() {
    const navigationbar = document.createElement('div');
    navigationbar.classList.add('navbar');
    
    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        (0,_pageHome_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
    navigationbar.appendChild(homeBtn); 

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        (0,_pageMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });
    navigationbar.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        (0,_pageContact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    });
    navigationbar.appendChild(contactBtn); 
    
    return navigationbar;
};

const init = function() {
    const pageBody = document.querySelector('body');
    const contentDiv = document.createElement('div');
    contentDiv.id = "content";

    pageBody.appendChild(createNavBar());
    pageBody.appendChild(contentDiv);
    contentDiv.appendChild(createHeader());
    contentDiv.appendChild(createContent());
  };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7QUNYbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7O0FDWm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7VUNabkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxRDtBQUNwQjtBQUNBO0FBQ007O0FBRXZDO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBSTtBQUNaLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFJO0FBQ1osS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQU87QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLGlFQUFlLElBQUksRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlQ29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZUhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VNZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1sb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdWJ0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YnRleHQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYTEnKTtcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhMicpO1xuXG4gICAgc3VidGV4dC50ZXh0Q29udGVudCA9IFwiMTIzIEJvdWxldmFyZCBCb3VsZXZhcmRcXHJcXG5DaXR5LCBTdGF0ZSwgMDAwMDBcIjtcbiAgICBwYXJhMS50ZXh0Q29udGVudCA9ICdDb250YWN0IE1lISc7XG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSAnT3duZXJAZW1haWwuZXhhbXBsZSc7ICAgIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDsiLCJjb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc3VidGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJ0ZXh0Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhcmExJyk7XG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYTInKTtcblxuICAgIHN1YnRleHQudGV4dENvbnRlbnQgPSBcIjEyMyBCb3VsZXZhcmQgQm91bGV2YXJkXFxyXFxuQ2l0eSwgU3RhdGUsIDAwMDAwXCI7XG4gICAgcGFyYTEudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gQWxpcXVhbSBsYWN1cyBwdXJ1cywgdGVtcHVzIGV1IHZpdmVycmEgZWdldCwgY29udmFsbGlzIHRlbXB1cyBsaWd1bGEuIFZpdmFtdXMgYXVjdG9yIGVyYXQgYW50ZSwgaWQgcGVsbGVudGVzcXVlIG1pIHZlaGljdWxhIG5lYy4gTWFlY2VuYXMgZXUgZWxpdCBzZWQgYXVndWUgZmF1Y2lidXMgZmVybWVudHVtLiBQaGFzZWxsdXMgbGliZXJvIGxpYmVybywgbG9ib3J0aXMgbm9uIGFyY3UgcXVpcywgc3VzY2lwaXQgcG9ydGEgbGVvLiBNYWVjZW5hcyBlZ2V0IG5pc2kgYSBxdWFtIG1vbGVzdGllIGJsYW5kaXQgZWxlbWVudHVtIHZlbCBsaWJlcm8uIFByYWVzZW50IHZlaGljdWxhIG5pc2wgZXQgdGVsbHVzIHNjZWxlcmlzcXVlIGNvbmd1ZS4gTW9yYmkgZmF1Y2lidXMsIHNlbSBhIGJsYW5kaXQgZWdlc3RhcywgdXJuYSBlc3QgcHVsdmluYXIgYXJjdSwgYWMgdGVtcHVzIG51bGxhIG1hZ25hIG5vbiBhdWd1ZS4nO1xuICAgIHBhcmEyLnRleHRDb250ZW50ID0gJ1NlZCB1bGxhbWNvcnBlciBlc3QgaW4gdml2ZXJyYSB1bGxhbWNvcnBlci4gUHJhZXNlbnQgc2VtcGVyLCBlbGl0IG5vbiB2b2x1dHBhdCBhY2N1bXNhbiwgbWF1cmlzIHB1cnVzIGZhY2lsaXNpcyBtYXVyaXMsIHNlZCBpbXBlcmRpZXQgdG9ydG9yIGxvcmVtIHZlbCBtaS4gUGVsbGVudGVzcXVlIGFjIG9ybmFyZSBuaXNsLiBFdGlhbSB2aXRhZSBuaXNsIGF0IG1hdXJpcyBjb25zZWN0ZXR1ciBjb25kaW1lbnR1bS4gUXVpc3F1ZSByaG9uY3VzIGlhY3VsaXMgZG9sb3IgZXQgZmV1Z2lhdC4gTW9yYmkgaW50ZXJkdW0gc29sbGljaXR1ZGluIGxvYm9ydGlzLiBJbiBlZ2V0IGZpbmlidXMgZmVsaXMsIHF1aXMgdnVscHV0YXRlIG5pc2wuIE1hdXJpcyBzdXNjaXBpdCwgYXVndWUgdXQgYmliZW5kdW0gYWxpcXVldCwgbnVuYyBhcmN1IHB1bHZpbmFyIGVsaXQsIHNpdCBhbWV0IGNvbnNlcXVhdCBvZGlvIGZlbGlzIHZpdGFlIG51bGxhLiBEdWlzIGNvbnNlcXVhdCBuZWMgdG9ydG9yIGEgZnJpbmdpbGxhLiBOdW5jIGlhY3VsaXMgdmVsaXQgdGVsbHVzLCBzaXQgYW1ldCB2ZWhpY3VsYSBlcmF0IHNjZWxlcmlzcXVlIGFjLiBVdCBzdXNjaXBpdCwgcmlzdXMgYWMgZGFwaWJ1cyBhbGlxdWFtLCB1cm5hIG9yY2kgc2VtcGVyIGlwc3VtLCB2ZWwgaW1wZXJkaWV0IGVuaW0gcHVydXMgYSBvcmNpLiBFdGlhbSBub24gZmFjaWxpc2lzIHNlbSwgZWdldCBtYXhpbXVzIGxpYmVyby4gUHJhZXNlbnQgdHVycGlzIG1hdXJpcywgZmVybWVudHVtIG5lYyBlc3Qgdml0YWUsIGlhY3VsaXMgZGljdHVtIGVzdC4gVmVzdGlidWx1bSBjb25kaW1lbnR1bSBsYWN1cyBub24gbnVuYyBlZmZpY2l0dXIsIHNlZCBtYWxlc3VhZGEgbGlndWxhIHBsYWNlcmF0Lic7XG4gICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0OyIsImNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzdWJ0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1YnRleHQnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYTEnKTtcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhMicpO1xuXG4gICAgc3VidGV4dC50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9ICcnO1xuICAgIHBhcmExLnRleHRDb250ZW50ID0gJ0ZpbGV0IE1pZ25vbiwgOCBvdW5jZSAtICQzOFxcclxcbkZpbGV0IE1pZ25vbiwgMTIgb3VuY2UgLSAkNDlcXHJcXG5SaWJleWUgU3RlYWssIDE4IG91bmNlIC0gJDM5XFxyXFxuUG9ydGVyaG91c2UgU3RlYWsgZm9yIFR3byAtICQ0MFxcclxcbkNsYXNzaWMgTmV3IFlvcmsgU3RlYWsgLSAkMzYnO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi9hc3NldHMvcGFkLXRoYWkuanBlZyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL3BhZ2VNZW51LmpzJztcbmltcG9ydCBob21lIGZyb20gJy4vcGFnZUhvbWUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9wYWdlQ29udGFjdC5qcyc7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIC8vICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWA7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dENvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYEFuZHJldydzIEF3ZXNvbWUgVGhhaSBTcG90YDtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjMgQm91bGV2YXJkIEJvdWxldmFyZFxcclxcbkNpdHksIFN0YXRlLCAwMDAwMFwiO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnc3VidGV4dCcpO1xuXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50Q29udGFpbmVyJyk7XG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYTEuY2xhc3NMaXN0LmFkZCgncGFyYTEnKTtcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhMi5jbGFzc0xpc3QuYWRkKCdwYXJhMicpO1xuICAgIHBhcmExLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFsaXF1YW0gbGFjdXMgcHVydXMsIHRlbXB1cyBldSB2aXZlcnJhIGVnZXQsIGNvbnZhbGxpcyB0ZW1wdXMgbGlndWxhLiBWaXZhbXVzIGF1Y3RvciBlcmF0IGFudGUsIGlkIHBlbGxlbnRlc3F1ZSBtaSB2ZWhpY3VsYSBuZWMuIE1hZWNlbmFzIGV1IGVsaXQgc2VkIGF1Z3VlIGZhdWNpYnVzIGZlcm1lbnR1bS4gUGhhc2VsbHVzIGxpYmVybyBsaWJlcm8sIGxvYm9ydGlzIG5vbiBhcmN1IHF1aXMsIHN1c2NpcGl0IHBvcnRhIGxlby4gTWFlY2VuYXMgZWdldCBuaXNpIGEgcXVhbSBtb2xlc3RpZSBibGFuZGl0IGVsZW1lbnR1bSB2ZWwgbGliZXJvLiBQcmFlc2VudCB2ZWhpY3VsYSBuaXNsIGV0IHRlbGx1cyBzY2VsZXJpc3F1ZSBjb25ndWUuIE1vcmJpIGZhdWNpYnVzLCBzZW0gYSBibGFuZGl0IGVnZXN0YXMsIHVybmEgZXN0IHB1bHZpbmFyIGFyY3UsIGFjIHRlbXB1cyBudWxsYSBtYWduYSBub24gYXVndWUuJztcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9ICdTZWQgdWxsYW1jb3JwZXIgZXN0IGluIHZpdmVycmEgdWxsYW1jb3JwZXIuIFByYWVzZW50IHNlbXBlciwgZWxpdCBub24gdm9sdXRwYXQgYWNjdW1zYW4sIG1hdXJpcyBwdXJ1cyBmYWNpbGlzaXMgbWF1cmlzLCBzZWQgaW1wZXJkaWV0IHRvcnRvciBsb3JlbSB2ZWwgbWkuIFBlbGxlbnRlc3F1ZSBhYyBvcm5hcmUgbmlzbC4gRXRpYW0gdml0YWUgbmlzbCBhdCBtYXVyaXMgY29uc2VjdGV0dXIgY29uZGltZW50dW0uIFF1aXNxdWUgcmhvbmN1cyBpYWN1bGlzIGRvbG9yIGV0IGZldWdpYXQuIE1vcmJpIGludGVyZHVtIHNvbGxpY2l0dWRpbiBsb2JvcnRpcy4gSW4gZWdldCBmaW5pYnVzIGZlbGlzLCBxdWlzIHZ1bHB1dGF0ZSBuaXNsLiBNYXVyaXMgc3VzY2lwaXQsIGF1Z3VlIHV0IGJpYmVuZHVtIGFsaXF1ZXQsIG51bmMgYXJjdSBwdWx2aW5hciBlbGl0LCBzaXQgYW1ldCBjb25zZXF1YXQgb2RpbyBmZWxpcyB2aXRhZSBudWxsYS4gRHVpcyBjb25zZXF1YXQgbmVjIHRvcnRvciBhIGZyaW5naWxsYS4gTnVuYyBpYWN1bGlzIHZlbGl0IHRlbGx1cywgc2l0IGFtZXQgdmVoaWN1bGEgZXJhdCBzY2VsZXJpc3F1ZSBhYy4gVXQgc3VzY2lwaXQsIHJpc3VzIGFjIGRhcGlidXMgYWxpcXVhbSwgdXJuYSBvcmNpIHNlbXBlciBpcHN1bSwgdmVsIGltcGVyZGlldCBlbmltIHB1cnVzIGEgb3JjaS4gRXRpYW0gbm9uIGZhY2lsaXNpcyBzZW0sIGVnZXQgbWF4aW11cyBsaWJlcm8uIFByYWVzZW50IHR1cnBpcyBtYXVyaXMsIGZlcm1lbnR1bSBuZWMgZXN0IHZpdGFlLCBpYWN1bGlzIGRpY3R1bSBlc3QuIFZlc3RpYnVsdW0gY29uZGltZW50dW0gbGFjdXMgbm9uIG51bmMgZWZmaWNpdHVyLCBzZWQgbWFsZXN1YWRhIGxpZ3VsYSBwbGFjZXJhdC4nO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTEpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTIpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG59O1xuXG5jb25zdCBjcmVhdGVOYXZCYXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBuYXZpZ2F0aW9uYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2aWdhdGlvbmJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcbiAgICBcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBob21lKCk7XG4gICAgfSk7XG4gICAgbmF2aWdhdGlvbmJhci5hcHBlbmRDaGlsZChob21lQnRuKTsgXG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtZW51KCk7XG4gICAgfSk7XG4gICAgbmF2aWdhdGlvbmJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnRhY3QoKTtcbiAgICB9KTtcbiAgICBuYXZpZ2F0aW9uYmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pOyBcbiAgICBcbiAgICByZXR1cm4gbmF2aWdhdGlvbmJhcjtcbn07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwYWdlQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudERpdi5pZCA9IFwiY29udGVudFwiO1xuXG4gICAgcGFnZUJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICAgIHBhZ2VCb2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGVudCgpKTtcbiAgfTtcblxuICBleHBvcnQgZGVmYXVsdCBpbml0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==