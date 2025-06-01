"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-number";
exports.ids = ["vendor-chunks/is-number"];
exports.modules = {

/***/ "(rsc)/./node_modules/is-number/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-number/index.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/*!\n * is-number <https://github.com/jonschlinkert/is-number>\n *\n * Copyright (c) 2014-present, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function(num) {\n  if (typeof num === 'number') {\n    return num - num === 0;\n  }\n  if (typeof num === 'string' && num.trim() !== '') {\n    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);\n  }\n  return false;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaXMtbnVtYmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9ub2RlX21vZHVsZXMvaXMtbnVtYmVyL2luZGV4LmpzPzg0YmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBpcy1udW1iZXIgPGh0dHBzOi8vZ2l0aHViLmNvbS9qb25zY2hsaW5rZXJ0L2lzLW51bWJlcj5cbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgSm9uIFNjaGxpbmtlcnQuXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG51bSkge1xuICBpZiAodHlwZW9mIG51bSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVtIC0gbnVtID09PSAwO1xuICB9XG4gIGlmICh0eXBlb2YgbnVtID09PSAnc3RyaW5nJyAmJiBudW0udHJpbSgpICE9PSAnJykge1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUgPyBOdW1iZXIuaXNGaW5pdGUoK251bSkgOiBpc0Zpbml0ZSgrbnVtKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/is-number/index.js\n");

/***/ })

};
;