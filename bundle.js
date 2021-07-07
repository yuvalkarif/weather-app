/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("searchBtn");
const searchBarBtn = document.getElementById("search-bar-button");
const searchBar = document.getElementById("place");
const searchError = document.querySelector(`#search-box span.error`);
const loader = document.querySelector("#loading");

getWeather(`Tel Aviv`);
searchBtn.addEventListener(`click`, () => {
  searchBox.classList.toggle(`is-active`);
});
searchBar.addEventListener(`keypress`, (e) => {
  if (e.key === "Enter") {
    getWeather(searchBar.value);
    searchBar.value = ``;
  }
});
searchBarBtn.addEventListener(`click`, (e) => {
  getWeather(searchBar.value);
  searchBar.value = ``;
});

async function getWeather(city) {
  try {
    displayLoading();
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3950530457354e88f3f37b02d71f4a4f`,
      { mode: "cors" }
    );

    const weatherData = await response.json();
    searchError.innerText = ``;
    hideLoading();
    update(weatherData);
  } catch (error) {
    console.log(error);
    searchError.innerText = `No matching location found, please try again`;
  }
}

function displayLoading() {
  loader.classList.add("display");
}

// hiding loading
function hideLoading() {
  loader.classList.remove("display");
}

function setValues(data) {
  const name = data.name;
  const temp = (data.main.temp / 10).toFixed(1);
  const feelTemp = (data.main.feels_like / 10).toFixed(1);
  const wind = (data.wind.speed / 1.852).toFixed(1);
  const humidity = data.main.humidity;
  const values = [name, temp, feelTemp, wind, humidity];
  return values;
}

function update(data) {
  const values = setValues(data);
  const elements = setElements();

  for (let i = 0; i < elements.length; i++) {
    elements[i].innerText = values[i];
  }
}
function setElements() {
  const nameElement = document.getElementById("name");
  const windElement = document.getElementById("wind");
  const tempElement = document.getElementById("temp");
  const feelTempElement = document.getElementById("feel-temp");
  const humidityElement = document.getElementById("humidity");
  const elements = [
    nameElement,
    tempElement,
    feelTempElement,
    windElement,
    humidityElement,
  ];
  return elements;
}

// &appid=fac5a8292c914f0d8563a269f4d416d6

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7QUFDL0QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYm94XCIpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hCdG5cIik7XG5jb25zdCBzZWFyY2hCYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1iYXItYnV0dG9uXCIpO1xuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGFjZVwiKTtcbmNvbnN0IHNlYXJjaEVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3NlYXJjaC1ib3ggc3Bhbi5lcnJvcmApO1xuY29uc3QgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nXCIpO1xuXG5nZXRXZWF0aGVyKGBUZWwgQXZpdmApO1xuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgKCkgPT4ge1xuICBzZWFyY2hCb3guY2xhc3NMaXN0LnRvZ2dsZShgaXMtYWN0aXZlYCk7XG59KTtcbnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKGBrZXlwcmVzc2AsIChlKSA9PiB7XG4gIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgZ2V0V2VhdGhlcihzZWFyY2hCYXIudmFsdWUpO1xuICAgIHNlYXJjaEJhci52YWx1ZSA9IGBgO1xuICB9XG59KTtcbnNlYXJjaEJhckJ0bi5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIChlKSA9PiB7XG4gIGdldFdlYXRoZXIoc2VhcmNoQmFyLnZhbHVlKTtcbiAgc2VhcmNoQmFyLnZhbHVlID0gYGA7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5KSB7XG4gIHRyeSB7XG4gICAgZGlzcGxheUxvYWRpbmcoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPTM5NTA1MzA0NTczNTRlODhmM2YzN2IwMmQ3MWY0YTRmYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBzZWFyY2hFcnJvci5pbm5lclRleHQgPSBgYDtcbiAgICBoaWRlTG9hZGluZygpO1xuICAgIHVwZGF0ZSh3ZWF0aGVyRGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHNlYXJjaEVycm9yLmlubmVyVGV4dCA9IGBObyBtYXRjaGluZyBsb2NhdGlvbiBmb3VuZCwgcGxlYXNlIHRyeSBhZ2FpbmA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheUxvYWRpbmcoKSB7XG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcbn1cblxuLy8gaGlkaW5nIGxvYWRpbmdcbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXlcIik7XG59XG5cbmZ1bmN0aW9uIHNldFZhbHVlcyhkYXRhKSB7XG4gIGNvbnN0IG5hbWUgPSBkYXRhLm5hbWU7XG4gIGNvbnN0IHRlbXAgPSAoZGF0YS5tYWluLnRlbXAgLyAxMCkudG9GaXhlZCgxKTtcbiAgY29uc3QgZmVlbFRlbXAgPSAoZGF0YS5tYWluLmZlZWxzX2xpa2UgLyAxMCkudG9GaXhlZCgxKTtcbiAgY29uc3Qgd2luZCA9IChkYXRhLndpbmQuc3BlZWQgLyAxLjg1MikudG9GaXhlZCgxKTtcbiAgY29uc3QgaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gIGNvbnN0IHZhbHVlcyA9IFtuYW1lLCB0ZW1wLCBmZWVsVGVtcCwgd2luZCwgaHVtaWRpdHldO1xuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoZGF0YSkge1xuICBjb25zdCB2YWx1ZXMgPSBzZXRWYWx1ZXMoZGF0YSk7XG4gIGNvbnN0IGVsZW1lbnRzID0gc2V0RWxlbWVudHMoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZWxlbWVudHNbaV0uaW5uZXJUZXh0ID0gdmFsdWVzW2ldO1xuICB9XG59XG5mdW5jdGlvbiBzZXRFbGVtZW50cygpIHtcbiAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XG4gIGNvbnN0IHdpbmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuICBjb25zdCB0ZW1wRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgY29uc3QgZmVlbFRlbXBFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsLXRlbXBcIik7XG4gIGNvbnN0IGh1bWlkaXR5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG4gIGNvbnN0IGVsZW1lbnRzID0gW1xuICAgIG5hbWVFbGVtZW50LFxuICAgIHRlbXBFbGVtZW50LFxuICAgIGZlZWxUZW1wRWxlbWVudCxcbiAgICB3aW5kRWxlbWVudCxcbiAgICBodW1pZGl0eUVsZW1lbnQsXG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuLy8gJmFwcGlkPWZhYzVhODI5MmM5MTRmMGQ4NTYzYTI2OWY0ZDQxNmQ2XG4iXSwic291cmNlUm9vdCI6IiJ9