webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/featured-content/guides.js":
/*!***********************************************!*\
  !*** ./components/featured-content/guides.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/featured-content/style.js");
/* harmony import */ var components_featured_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/featured-guide */ "./components/featured-guide/index.js");
/* harmony import */ var lib_guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/guide */ "./lib/guide.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var FeaturedGuides = function FeaturedGuides() {
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["FeaturedContentWrap"], {
    className: "featured-content-wrap"
  }, __jsx("div", {
    className: "container"
  }, __jsx("p", {
    className: "border-through featured-separator"
  }, __jsx("span", null, "Guides mostly visited by the community\xA0", __jsx("a", {
    href: "/guides",
    className: "dark-link d-none d-sm-none d-md-inline d-xl-inline"
  }, "View all Guides \u2192"))), __jsx("div", {
    className: "swim-lane row"
  }, Object(lib_guide__WEBPACK_IMPORTED_MODULE_4__["getFeaturedGuides"])().map(function (guide) {
    return __jsx(components_featured_guide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      guide: guide,
      key: guide.url
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedGuides);

/***/ })

})
//# sourceMappingURL=index.js.db8229b6b6961955e2cb.hot-update.js.map