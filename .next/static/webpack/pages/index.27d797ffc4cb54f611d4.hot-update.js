/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./redux/actions/employeActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/employeActions.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setEmployees\": function() { return /* binding */ setEmployees; },\n/* harmony export */   \"getEmploye\": function() { return /* binding */ getEmploye; }\n/* harmony export */ });\n/* harmony import */ var _home_thracian_enuygun_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_thracian_enuygun_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_thracian_enuygun_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_thracian_enuygun_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ \"./redux/actions/types.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar setEmployees = function setEmployees(employees) {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_home_thracian_enuygun_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_thracian_enuygun_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(dispatch) {\n      return _home_thracian_enuygun_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(employees);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_EMPLOYEES,\n                payload: {\n                  employees: employees\n                }\n              });\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar getEmploye = function getEmploye(empId) {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_home_thracian_enuygun_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_thracian_enuygun_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(dispatch, getState) {\n      var state, employe;\n      return _home_thracian_enuygun_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              state = getState();\n              employe = state.employees.filter(function (employe) {\n                if (employe.id == empId) {\n                  return employe;\n                }\n              });\n              dispatch({\n                type: GET_EMPLOYE,\n                payload: {\n                  employe: employe\n                }\n              });\n\n            case 3:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2, _x3) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvYWN0aW9ucy9lbXBsb3llQWN0aW9ucy5qcz9jNjE4Il0sIm5hbWVzIjpbInNldEVtcGxveWVlcyIsImVtcGxveWVlcyIsImRpc3BhdGNoIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJTRVRfRU1QTE9ZRUVTIiwicGF5bG9hZCIsImdldEVtcGxveWUiLCJlbXBJZCIsImdldFN0YXRlIiwic3RhdGUiLCJlbXBsb3llIiwiZmlsdGVyIiwiaWQiLCJHRVRfRU1QTE9ZRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxTQUFEO0FBQUE7QUFBQSw2UUFBZSxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3pDQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFDQUMsc0JBQVEsQ0FBQztBQUNQRyxvQkFBSSxFQUFFQyxpREFEQztBQUVQQyx1QkFBTyxFQUFFO0FBQUVOLDJCQUFTLEVBQVRBO0FBQUY7QUFGRixlQUFELENBQVI7O0FBRnlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFyQjtBQVFBLElBQU1PLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQ7QUFBQTtBQUFBLDhRQUFXLGtCQUFPUCxRQUFQLEVBQWlCUSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDN0JDLG1CQUQ2QixHQUNyQkQsUUFBUSxFQURhO0FBRy9CRSxxQkFIK0IsR0FHckJELEtBQUssQ0FBQ1YsU0FBTixDQUFnQlksTUFBaEIsQ0FBdUIsVUFBQ0QsT0FBRCxFQUFhO0FBQ2hELG9CQUFJQSxPQUFPLENBQUNFLEVBQVIsSUFBY0wsS0FBbEIsRUFBeUI7QUFDdkIseUJBQU9HLE9BQVA7QUFDRDtBQUNGLGVBSmEsQ0FIcUI7QUFRbkNWLHNCQUFRLENBQUM7QUFDUEcsb0JBQUksRUFBRVUsV0FEQztBQUVQUix1QkFBTyxFQUFFO0FBQUVLLHlCQUFPLEVBQVBBO0FBQUY7QUFGRixlQUFELENBQVI7O0FBUm1DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFuQiIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvZW1wbG95ZUFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfRU1QTE9ZRUVTLCBHRVRfRU1QTE9ZRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0RW1wbG95ZWVzID0gKGVtcGxveWVlcykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGVtcGxveWVlcyk7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBTRVRfRU1QTE9ZRUVTLFxuICAgIHBheWxvYWQ6IHsgZW1wbG95ZWVzIH0sXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEVtcGxveWUgPSAoZW1wSWQpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuXG4gIGxldCBlbXBsb3llID0gc3RhdGUuZW1wbG95ZWVzLmZpbHRlcigoZW1wbG95ZSkgPT4ge1xuICAgIGlmIChlbXBsb3llLmlkID09IGVtcElkKSB7XG4gICAgICByZXR1cm4gZW1wbG95ZTtcbiAgICB9XG4gIH0pO1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogR0VUX0VNUExPWUUsXG4gICAgcGF5bG9hZDogeyBlbXBsb3llIH0sXG4gIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/employeActions.js\n");

/***/ })

});