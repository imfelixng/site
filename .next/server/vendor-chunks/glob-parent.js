"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/glob-parent";
exports.ids = ["vendor-chunks/glob-parent"];
exports.modules = {

/***/ "(rsc)/./node_modules/glob-parent/index.js":
/*!*******************************************!*\
  !*** ./node_modules/glob-parent/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isGlob = __webpack_require__(/*! is-glob */ \"(rsc)/./node_modules/is-glob/index.js\");\nvar pathPosixDirname = (__webpack_require__(/*! path */ \"path\").posix).dirname;\nvar isWin32 = (__webpack_require__(/*! os */ \"os\").platform)() === 'win32';\n\nvar slash = '/';\nvar backslash = /\\\\/g;\nvar enclosure = /[\\{\\[].*[\\}\\]]$/;\nvar globby = /(^|[^\\\\])([\\{\\[]|\\([^\\)]+$)/;\nvar escaped = /\\\\([\\!\\*\\?\\|\\[\\]\\(\\)\\{\\}])/g;\n\n/**\n * @param {string} str\n * @param {Object} opts\n * @param {boolean} [opts.flipBackslashes=true]\n * @returns {string}\n */\nmodule.exports = function globParent(str, opts) {\n  var options = Object.assign({ flipBackslashes: true }, opts);\n\n  // flip windows path separators\n  if (options.flipBackslashes && isWin32 && str.indexOf(slash) < 0) {\n    str = str.replace(backslash, slash);\n  }\n\n  // special case for strings ending in enclosure containing path separator\n  if (enclosure.test(str)) {\n    str += slash;\n  }\n\n  // preserves full path in case of trailing path separator\n  str += 'a';\n\n  // remove path parts that are globby\n  do {\n    str = pathPosixDirname(str);\n  } while (isGlob(str) || globby.test(str));\n\n  // remove escape chars and return result\n  return str.replace(escaped, '$1');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ2xvYi1wYXJlbnQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLHNEQUFTO0FBQzlCLHVCQUF1QiwrQ0FBcUI7QUFDNUMsY0FBYyw4Q0FBc0I7O0FBRXBDO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QiwyQkFBMkI7QUFDM0IscUNBQXFDLEVBQUU7O0FBRXZDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBZ0MsdUJBQXVCOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL2dsb2ItcGFyZW50L2luZGV4LmpzPzRkZTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNHbG9iID0gcmVxdWlyZSgnaXMtZ2xvYicpO1xudmFyIHBhdGhQb3NpeERpcm5hbWUgPSByZXF1aXJlKCdwYXRoJykucG9zaXguZGlybmFtZTtcbnZhciBpc1dpbjMyID0gcmVxdWlyZSgnb3MnKS5wbGF0Zm9ybSgpID09PSAnd2luMzInO1xuXG52YXIgc2xhc2ggPSAnLyc7XG52YXIgYmFja3NsYXNoID0gL1xcXFwvZztcbnZhciBlbmNsb3N1cmUgPSAvW1xce1xcW10uKltcXH1cXF1dJC87XG52YXIgZ2xvYmJ5ID0gLyhefFteXFxcXF0pKFtcXHtcXFtdfFxcKFteXFwpXSskKS87XG52YXIgZXNjYXBlZCA9IC9cXFxcKFtcXCFcXCpcXD9cXHxcXFtcXF1cXChcXClcXHtcXH1dKS9nO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmZsaXBCYWNrc2xhc2hlcz10cnVlXVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnbG9iUGFyZW50KHN0ciwgb3B0cykge1xuICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBmbGlwQmFja3NsYXNoZXM6IHRydWUgfSwgb3B0cyk7XG5cbiAgLy8gZmxpcCB3aW5kb3dzIHBhdGggc2VwYXJhdG9yc1xuICBpZiAob3B0aW9ucy5mbGlwQmFja3NsYXNoZXMgJiYgaXNXaW4zMiAmJiBzdHIuaW5kZXhPZihzbGFzaCkgPCAwKSB7XG4gICAgc3RyID0gc3RyLnJlcGxhY2UoYmFja3NsYXNoLCBzbGFzaCk7XG4gIH1cblxuICAvLyBzcGVjaWFsIGNhc2UgZm9yIHN0cmluZ3MgZW5kaW5nIGluIGVuY2xvc3VyZSBjb250YWluaW5nIHBhdGggc2VwYXJhdG9yXG4gIGlmIChlbmNsb3N1cmUudGVzdChzdHIpKSB7XG4gICAgc3RyICs9IHNsYXNoO1xuICB9XG5cbiAgLy8gcHJlc2VydmVzIGZ1bGwgcGF0aCBpbiBjYXNlIG9mIHRyYWlsaW5nIHBhdGggc2VwYXJhdG9yXG4gIHN0ciArPSAnYSc7XG5cbiAgLy8gcmVtb3ZlIHBhdGggcGFydHMgdGhhdCBhcmUgZ2xvYmJ5XG4gIGRvIHtcbiAgICBzdHIgPSBwYXRoUG9zaXhEaXJuYW1lKHN0cik7XG4gIH0gd2hpbGUgKGlzR2xvYihzdHIpIHx8IGdsb2JieS50ZXN0KHN0cikpO1xuXG4gIC8vIHJlbW92ZSBlc2NhcGUgY2hhcnMgYW5kIHJldHVybiByZXN1bHRcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGVzY2FwZWQsICckMScpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/glob-parent/index.js\n");

/***/ })

};
;