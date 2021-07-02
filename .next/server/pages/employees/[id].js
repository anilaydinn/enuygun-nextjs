/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/employees/[id]";
exports.ids = ["pages/employees/[id]"];
exports.modules = {

/***/ "./components/employee/EmployeDetail.js":
/*!**********************************************!*\
  !*** ./components/employee/EmployeDetail.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/EmployeDetail.module.scss */ \"./styles/EmployeDetail.module.scss\");\n/* harmony import */ var _styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_employeActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/employeActions */ \"./redux/actions/employeActions.js\");\n\nvar _jsxFileName = \"/home/thracian/enuygun-nextjs/components/employee/EmployeDetail.js\";\n\n\n\n\n\nfunction EmployeDetail(props) {\n  const {\n    employe,\n    id,\n    getEmploye\n  } = props;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    getEmploye(id);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default().detailContainer),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default().employeInfoPanel),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: employe.image,\n        className: (_styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default().employeDetailImage)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default().employeInfoContainer),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_EmployeDetail_module_scss__WEBPACK_IMPORTED_MODULE_4___default().employeInfos),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: [employe.firstName, \" \", employe.lastName]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Phone:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 23,\n              columnNumber: 15\n            }, this), \" \", employe.phone]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Address:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, this), \" \", employe.address]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n              children: \"Vote Count:\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, this), \" \", employe.voteCount]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\nconst mapStateToProps = state => ({\n  employe: state.employe\n});\n\nconst mapDispatchToProps = dispatch => ({\n  getEmploye: empId => {\n    dispatch((0,_redux_actions_employeActions__WEBPACK_IMPORTED_MODULE_3__.getEmploye)(empId));\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(EmployeDetail));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnV5Z3VuLW5leHRqcy8uL2NvbXBvbmVudHMvZW1wbG95ZWUvRW1wbG95ZURldGFpbC5qcz9jYjgyIl0sIm5hbWVzIjpbIkVtcGxveWVEZXRhaWwiLCJwcm9wcyIsImVtcGxveWUiLCJpZCIsImdldEVtcGxveWUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJpbWFnZSIsImVtcGxveWVEZXRhaWxJbWFnZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmUiLCJhZGRyZXNzIiwidm90ZUNvdW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsImVtcElkIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFDNUIsUUFBTTtBQUFFQyxXQUFGO0FBQVdDLE1BQVg7QUFBZUM7QUFBZixNQUE4QkgsS0FBcEM7QUFFQUksa0RBQVMsQ0FBQyxNQUFNO0FBQ2RELGNBQVUsQ0FBQ0QsRUFBRCxDQUFWO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFRywwRkFBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUEsMkZBQWhCO0FBQUEsOEJBQ0U7QUFBSyxXQUFHLEVBQUVKLE9BQU8sQ0FBQ0ssS0FBbEI7QUFBeUIsaUJBQVMsRUFBRUQsNkZBQXlCRTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUVGLCtGQUFoQjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRUEsdUZBQWhCO0FBQUEsa0NBQ0U7QUFBQSx1QkFDR0osT0FBTyxDQUFDTyxTQURYLE9BQ3VCUCxPQUFPLENBQUNRLFFBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUlFO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsT0FDaUJSLE9BQU8sQ0FBQ1MsS0FEekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGLGVBT0U7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixPQUNtQlQsT0FBTyxDQUFDVSxPQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEYsZUFVRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLE9BQ3NCVixPQUFPLENBQUNXLFNBRDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFWRixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7QUFFRCxNQUFNQyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ2IsU0FBTyxFQUFFYSxLQUFLLENBQUNiO0FBRG1CLENBQVosQ0FBeEI7O0FBSUEsTUFBTWMsa0JBQWtCLEdBQUlDLFFBQUQsS0FBZTtBQUN4Q2IsWUFBVSxFQUFHYyxLQUFELElBQVc7QUFDckJELFlBQVEsQ0FBQ2IseUVBQVUsQ0FBQ2MsS0FBRCxDQUFYLENBQVI7QUFDRDtBQUh1QyxDQUFmLENBQTNCOztBQU1BLCtEQUFlQyxvREFBTyxDQUFDTCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q2hCLGFBQTdDLENBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2VtcGxveWVlL0VtcGxveWVEZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvRW1wbG95ZURldGFpbC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgZ2V0RW1wbG95ZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL2VtcGxveWVBY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIEVtcGxveWVEZXRhaWwocHJvcHMpIHtcbiAgY29uc3QgeyBlbXBsb3llLCBpZCwgZ2V0RW1wbG95ZSB9ID0gcHJvcHM7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRFbXBsb3llKGlkKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxDb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXBsb3llSW5mb1BhbmVsfT5cbiAgICAgICAgPGltZyBzcmM9e2VtcGxveWUuaW1hZ2V9IGNsYXNzTmFtZT17c3R5bGVzLmVtcGxveWVEZXRhaWxJbWFnZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXBsb3llSW5mb0NvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbXBsb3llSW5mb3N9PlxuICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICB7ZW1wbG95ZS5maXJzdE5hbWV9IHtlbXBsb3llLmxhc3ROYW1lfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8Yj5QaG9uZTo8L2I+IHtlbXBsb3llLnBob25lfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxiPkFkZHJlc3M6PC9iPiB7ZW1wbG95ZS5hZGRyZXNzfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxiPlZvdGUgQ291bnQ6PC9iPiB7ZW1wbG95ZS52b3RlQ291bnR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZW1wbG95ZTogc3RhdGUuZW1wbG95ZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGdldEVtcGxveWU6IChlbXBJZCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldEVtcGxveWUoZW1wSWQpKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShFbXBsb3llRGV0YWlsKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/employee/EmployeDetail.js\n");

/***/ }),

/***/ "./pages/employees/[id]/index.js":
/*!***************************************!*\
  !*** ./pages/employees/[id]/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_employee_EmployeDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/employee/EmployeDetail */ \"./components/employee/EmployeDetail.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/thracian/enuygun-nextjs/pages/employees/[id]/index.js\";\n\n\n\nfunction index() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const {\n    id\n  } = router.query;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_employee_EmployeDetail__WEBPACK_IMPORTED_MODULE_2__.default, {\n      id: id\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnV5Z3VuLW5leHRqcy8uL3BhZ2VzL2VtcGxveWVlcy9baWRdL2luZGV4LmpzPzk1NjciXSwibmFtZXMiOlsiaW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBdEI7QUFFQSxzQkFDRTtBQUFBLDJCQUNFLDhEQUFDLHVFQUFEO0FBQWUsUUFBRSxFQUFFRDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9wYWdlcy9lbXBsb3llZXMvW2lkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBFbXBsb3llRGV0YWlsIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2VtcGxveWVlL0VtcGxveWVEZXRhaWxcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8RW1wbG95ZURldGFpbCBpZD17aWR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/employees/[id]/index.js\n");

/***/ }),

/***/ "./redux/actions/employeActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/employeActions.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setEmployees\": function() { return /* binding */ setEmployees; },\n/* harmony export */   \"getEmploye\": function() { return /* binding */ getEmploye; },\n/* harmony export */   \"incrementEmployeVote\": function() { return /* binding */ incrementEmployeVote; }\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./redux/actions/types.js\");\n\nconst setEmployees = employees => async dispatch => {\n  dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_EMPLOYEES,\n    payload: {\n      employees\n    }\n  });\n};\nconst getEmploye = empId => async (dispatch, getState) => {\n  const state = getState();\n  const {\n    employees\n  } = state;\n  let employe = employees.filter(employe => {\n    if (employe.id == empId) {\n      return employe;\n    }\n  });\n  dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.GET_EMPLOYE,\n    payload: {\n      employe\n    }\n  });\n};\nconst incrementEmployeVote = empId => async dispatch => {\n  dispatch({\n    type: _types__WEBPACK_IMPORTED_MODULE_0__.INCREMENT_EMPLOYE_VOTE,\n    payload: {\n      empId\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnV5Z3VuLW5leHRqcy8uL3JlZHV4L2FjdGlvbnMvZW1wbG95ZUFjdGlvbnMuanM/YzYxOCJdLCJuYW1lcyI6WyJzZXRFbXBsb3llZXMiLCJlbXBsb3llZXMiLCJkaXNwYXRjaCIsInR5cGUiLCJTRVRfRU1QTE9ZRUVTIiwicGF5bG9hZCIsImdldEVtcGxveWUiLCJlbXBJZCIsImdldFN0YXRlIiwic3RhdGUiLCJlbXBsb3llIiwiZmlsdGVyIiwiaWQiLCJHRVRfRU1QTE9ZRSIsImluY3JlbWVudEVtcGxveWVWb3RlIiwiSU5DUkVNRU5UX0VNUExPWUVfVk9URSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxHQUFJQyxTQUFELElBQWUsTUFBT0MsUUFBUCxJQUFvQjtBQUM3REEsVUFBUSxDQUFDO0FBQ1BDLFFBQUksRUFBRUMsaURBREM7QUFFUEMsV0FBTyxFQUFFO0FBQUVKO0FBQUY7QUFGRixHQUFELENBQVI7QUFJRCxDQUxNO0FBT0EsTUFBTUssVUFBVSxHQUFJQyxLQUFELElBQVcsT0FBT0wsUUFBUCxFQUFpQk0sUUFBakIsS0FBOEI7QUFDakUsUUFBTUMsS0FBSyxHQUFHRCxRQUFRLEVBQXRCO0FBQ0EsUUFBTTtBQUFFUDtBQUFGLE1BQWdCUSxLQUF0QjtBQUVBLE1BQUlDLE9BQU8sR0FBR1QsU0FBUyxDQUFDVSxNQUFWLENBQWtCRCxPQUFELElBQWE7QUFDMUMsUUFBSUEsT0FBTyxDQUFDRSxFQUFSLElBQWNMLEtBQWxCLEVBQXlCO0FBQ3ZCLGFBQU9HLE9BQVA7QUFDRDtBQUNGLEdBSmEsQ0FBZDtBQUtBUixVQUFRLENBQUM7QUFDUEMsUUFBSSxFQUFFVSwrQ0FEQztBQUVQUixXQUFPLEVBQUU7QUFBRUs7QUFBRjtBQUZGLEdBQUQsQ0FBUjtBQUlELENBYk07QUFlQSxNQUFNSSxvQkFBb0IsR0FBSVAsS0FBRCxJQUFXLE1BQU9MLFFBQVAsSUFBb0I7QUFDakVBLFVBQVEsQ0FBQztBQUNQQyxRQUFJLEVBQUVZLDBEQURDO0FBRVBWLFdBQU8sRUFBRTtBQUFFRTtBQUFGO0FBRkYsR0FBRCxDQUFSO0FBSUQsQ0FMTSIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvZW1wbG95ZUFjdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTRVRfRU1QTE9ZRUVTLCBHRVRfRU1QTE9ZRSwgSU5DUkVNRU5UX0VNUExPWUVfVk9URSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzZXRFbXBsb3llZXMgPSAoZW1wbG95ZWVzKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFNFVF9FTVBMT1lFRVMsXG4gICAgcGF5bG9hZDogeyBlbXBsb3llZXMgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RW1wbG95ZSA9IChlbXBJZCkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gIGNvbnN0IHsgZW1wbG95ZWVzIH0gPSBzdGF0ZTtcblxuICBsZXQgZW1wbG95ZSA9IGVtcGxveWVlcy5maWx0ZXIoKGVtcGxveWUpID0+IHtcbiAgICBpZiAoZW1wbG95ZS5pZCA9PSBlbXBJZCkge1xuICAgICAgcmV0dXJuIGVtcGxveWU7XG4gICAgfVxuICB9KTtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEdFVF9FTVBMT1lFLFxuICAgIHBheWxvYWQ6IHsgZW1wbG95ZSB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRFbXBsb3llVm90ZSA9IChlbXBJZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBJTkNSRU1FTlRfRU1QTE9ZRV9WT1RFLFxuICAgIHBheWxvYWQ6IHsgZW1wSWQgfSxcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/actions/employeActions.js\n");

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_EMPLOYEES\": function() { return /* binding */ SET_EMPLOYEES; },\n/* harmony export */   \"GET_EMPLOYE\": function() { return /* binding */ GET_EMPLOYE; },\n/* harmony export */   \"INCREMENT_EMPLOYE_VOTE\": function() { return /* binding */ INCREMENT_EMPLOYE_VOTE; }\n/* harmony export */ });\nconst SET_EMPLOYEES = \"SET_EMPLOYEES\";\nconst GET_EMPLOYE = \"GET_EMPLOYE\";\nconst INCREMENT_EMPLOYE_VOTE = \"INCREMENT_EMPLOYE_VOTE\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnV5Z3VuLW5leHRqcy8uL3JlZHV4L2FjdGlvbnMvdHlwZXMuanM/YmI0OSJdLCJuYW1lcyI6WyJTRVRfRU1QTE9ZRUVTIiwiR0VUX0VNUExPWUUiLCJJTkNSRU1FTlRfRU1QTE9ZRV9WT1RFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxNQUFNQSxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0IiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL3R5cGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9FTVBMT1lFRVMgPSBcIlNFVF9FTVBMT1lFRVNcIjtcbmV4cG9ydCBjb25zdCBHRVRfRU1QTE9ZRSA9IFwiR0VUX0VNUExPWUVcIjtcbmV4cG9ydCBjb25zdCBJTkNSRU1FTlRfRU1QTE9ZRV9WT1RFID0gXCJJTkNSRU1FTlRfRU1QTE9ZRV9WT1RFXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/types.js\n");

/***/ }),

/***/ "./styles/EmployeDetail.module.scss":
/*!******************************************!*\
  !*** ./styles/EmployeDetail.module.scss ***!
  \******************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"detailContainer\": \"EmployeDetail_detailContainer__1vMp_\",\n\t\"employeInfoPanel\": \"EmployeDetail_employeInfoPanel__QPCrg\",\n\t\"employeDetailImage\": \"EmployeDetail_employeDetailImage__2PmN8\",\n\t\"employeInfoContainer\": \"EmployeDetail_employeInfoContainer__1-x38\",\n\t\"employeInfos\": \"EmployeDetail_employeInfos__2Bfj7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnV5Z3VuLW5leHRqcy8uL3N0eWxlcy9FbXBsb3llRGV0YWlsLm1vZHVsZS5zY3NzP2FhMjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9FbXBsb3llRGV0YWlsLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGV0YWlsQ29udGFpbmVyXCI6IFwiRW1wbG95ZURldGFpbF9kZXRhaWxDb250YWluZXJfXzF2TXBfXCIsXG5cdFwiZW1wbG95ZUluZm9QYW5lbFwiOiBcIkVtcGxveWVEZXRhaWxfZW1wbG95ZUluZm9QYW5lbF9fUVBDcmdcIixcblx0XCJlbXBsb3llRGV0YWlsSW1hZ2VcIjogXCJFbXBsb3llRGV0YWlsX2VtcGxveWVEZXRhaWxJbWFnZV9fMlBtTjhcIixcblx0XCJlbXBsb3llSW5mb0NvbnRhaW5lclwiOiBcIkVtcGxveWVEZXRhaWxfZW1wbG95ZUluZm9Db250YWluZXJfXzEteDM4XCIsXG5cdFwiZW1wbG95ZUluZm9zXCI6IFwiRW1wbG95ZURldGFpbF9lbXBsb3llSW5mb3NfXzJCZmo3XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/EmployeDetail.module.scss\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/employees/[id]/index.js"));
module.exports = __webpack_exports__;

})();