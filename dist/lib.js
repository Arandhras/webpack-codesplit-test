/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "lib";
exports.ids = ["lib"];
exports.modules = {

/***/ "./src/foo.js":
/*!********************!*\
  !*** ./src/foo.js ***!
  \********************/
/***/ ((module) => {

eval("\r\nclass Foo {\r\n    static Add(one, two) {\r\n        return one + two;\r\n    }\r\n\r\n    static Subtract(one, two) {\r\n        return one - two;\r\n    }\r\n}\r\n\r\nmodule.exports = Foo;\r\n\n\n//# sourceURL=webpack://webpack-codesplit-test/./src/foo.js?");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/foo.js"));

})();