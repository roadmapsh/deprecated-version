webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/featured-guide/index.js":
/*!********************************************!*\
  !*** ./components/featured-guide/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/featured-guide/style.js");
/* harmony import */ var lib_author__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/author */ "./lib/author.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var FeaturedGuide = function FeaturedGuide(_ref) {
  var guide = _ref.guide;
  var author = Object(lib_author__WEBPACK_IMPORTED_MODULE_3__["findByUsername"])(guide.author) || {};
  return __jsx("div", {
    className: "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 grid-item-container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["BlockLink"], {
    href: guide.url
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, guide.title), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["BlockSubtitle"], null, guide.featuredDescription || guide.description), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["BlockMeta"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["Author"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["AuthorImage"], {
    src: author.picture
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["AuthorName"], null, author.name)), __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["PublishDate"], null, Object(date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(guide.createdAt), 'MMMM d, yyyy')))));
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedGuide);

/***/ })

})
//# sourceMappingURL=index.js.1de971e1868311c40198.hot-update.js.map