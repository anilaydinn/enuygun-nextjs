/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_employee_EmployeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/employee/EmployeList */ \"./components/employee/EmployeList.js\");\n/* harmony import */ var _redux_actions_employeActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/employeActions */ \"./redux/actions/employeActions.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/thracian/enuygun-nextjs/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction App(_ref) {\n  _s();\n\n  var employees = _ref.employees,\n      setEmployees = _ref.setEmployees;\n  useEffect(function () {\n    setEmployees(employees);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_employee_EmployeList__WEBPACK_IMPORTED_MODULE_2__.default, {\n    employees: employees\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 10\n  }, this);\n}\n\n_s(App, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = App;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    employe: state.employe\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setEmployees: function setEmployees(employees) {\n      dispatch((0,_redux_actions_employeActions__WEBPACK_IMPORTED_MODULE_3__.setEmployees)(employees));\n    }\n  };\n};\n\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(App));\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJBcHAiLCJlbXBsb3llZXMiLCJzZXRFbXBsb3llZXMiLCJ1c2VFZmZlY3QiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImVtcGxveWUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxHQUFULE9BQTBDO0FBQUE7O0FBQUEsTUFBM0JDLFNBQTJCLFFBQTNCQSxTQUEyQjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7QUFDeENDLFdBQVMsQ0FBQyxZQUFNO0FBQ2RELGdCQUFZLENBQUNELFNBQUQsQ0FBWjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFBTyw4REFBQyxxRUFBRDtBQUFhLGFBQVMsRUFBRUE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0dBTlFELEc7O0tBQUFBLEc7O0FBUVQsSUFBTUksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0MsV0FBTyxFQUFFRCxLQUFLLENBQUNDO0FBRG1CLEdBQVo7QUFBQSxDQUF4Qjs7QUFJQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLFFBQUQ7QUFBQSxTQUFlO0FBQ3hDTixnQkFBWSxFQUFFLHNCQUFDRCxTQUFELEVBQWU7QUFDM0JPLGNBQVEsQ0FBQ04sMkVBQVksQ0FBQ0QsU0FBRCxDQUFiLENBQVI7QUFDRDtBQUh1QyxHQUFmO0FBQUEsQ0FBM0I7OztBQU1BLCtEQUFlUSxvREFBTyxDQUFDTCxlQUFELEVBQWtCRyxrQkFBbEIsQ0FBUCxDQUE2Q1AsR0FBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEVtcGxveWVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2VtcGxveWVlL0VtcGxveWVMaXN0XCI7XG5pbXBvcnQgeyBnZXRBbGxFbXBsb3llZXMgfSBmcm9tIFwiLi4vYXBpL2luZGV4XCI7XG5pbXBvcnQgeyBzZXRFbXBsb3llZXMgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9lbXBsb3llQWN0aW9uc1wiO1xuXG5mdW5jdGlvbiBBcHAoeyBlbXBsb3llZXMsIHNldEVtcGxveWVlcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RW1wbG95ZWVzKGVtcGxveWVlcyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPEVtcGxveWVMaXN0IGVtcGxveWVlcz17ZW1wbG95ZWVzfSAvPjtcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBlbXBsb3llOiBzdGF0ZS5lbXBsb3llLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcbiAgc2V0RW1wbG95ZWVzOiAoZW1wbG95ZWVzKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0RW1wbG95ZWVzKGVtcGxveWVlcykpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEFwcCk7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZW1wbG95ZWVzID0gYXdhaXQgZ2V0QWxsRW1wbG95ZWVzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZW1wbG95ZWVzLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});