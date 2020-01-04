webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/featured-content/roadmaps.js":
/*!*************************************************!*\
  !*** ./components/featured-content/roadmaps.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/featured-content/style.js");
/* harmony import */ var storage_roadmaps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storage/roadmaps */ "./storage/roadmaps.json");
var storage_roadmaps__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/roadmaps */ "./storage/roadmaps.json", 1);
/* harmony import */ var components_featured_roadmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/featured-roadmap */ "./components/featured-roadmap/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FeaturedRoadmaps = function FeaturedRoadmaps() {
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["FeaturedContentWrap"], {
    className: "featured-content-wrap"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "featured-head"
  }, __jsx("p", {
    className: "border-through featured-separator"
  }, __jsx("span", null, "Roadmaps mostly visited by the community\xA0", __jsx("a", {
    href: "/roadmaps",
    className: "dark-link d-none d-sm-none d-md-inline d-xl-inline"
  }, "View all Roadmaps \u2192")))), __jsx("div", {
    className: "swim-lane row"
  }, storage_roadmaps__WEBPACK_IMPORTED_MODULE_2__.filter(function (_ref) {
    var featured = _ref.featured;
    return featured;
  }).map(function (roadmap) {
    return __jsx(components_featured_roadmap__WEBPACK_IMPORTED_MODULE_3__["default"], {
      roadmap: roadmap,
      key: roadmap.url
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedRoadmaps);

/***/ })

})
//# sourceMappingURL=index.js.4e99b49939a8cd563d27.hot-update.js.map