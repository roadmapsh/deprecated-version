webpackHotUpdate("static/development/pages/[roadmap].js",{

/***/ "./pages/[roadmap]/index.js":
/*!**********************************!*\
  !*** ./pages/[roadmap]/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var layouts_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/default */ "./layouts/default/index.js");
/* harmony import */ var components_site_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/site-nav */ "./components/site-nav/index.js");
/* harmony import */ var components_page_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/page-footer */ "./components/page-footer/index.js");
/* harmony import */ var lib_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/server */ "./lib/server.js");
/* harmony import */ var lib_roadmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/roadmap */ "./lib/roadmap.js");
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");
/* harmony import */ var components_roadmap_summary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/roadmap-summary */ "./components/roadmap-summary/index.js");
/* harmony import */ var components_detailed_roadmap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/detailed-roadmap */ "./components/detailed-roadmap/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Roadmap = function Roadmap(_ref) {
  var roadmap = _ref.roadmap;

  if (!roadmap) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
      statusCode: 404
    });
  }

  var showSummary = roadmap.upcoming || !roadmap.detailed;
  return __jsx(layouts_default__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: roadmap.title,
    description: roadmap.description
  }), __jsx(components_site_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), showSummary ? __jsx(components_roadmap_summary__WEBPACK_IMPORTED_MODULE_9__["default"], {
    roadmap: roadmap
  }) : __jsx(components_detailed_roadmap__WEBPACK_IMPORTED_MODULE_10__["default"], {
    roadmap: roadmap
  }), __jsx(components_page_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Roadmap.getInitialProps = Object(lib_server__WEBPACK_IMPORTED_MODULE_5__["serverOnlyProps"])(function (_ref2) {
  var req = _ref2.req;
  var conanonical = "".concat(storage_site__WEBPACK_IMPORTED_MODULE_7__.url.web).concat(req.url);
  console.log(conanonical);
  return {
    roadmap: Object(lib_roadmap__WEBPACK_IMPORTED_MODULE_6__["getRequestedRoadmap"])(req)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Roadmap);

/***/ })

})
//# sourceMappingURL=[roadmap].js.e6eb8e1bc4f1c61de05e.hot-update.js.map