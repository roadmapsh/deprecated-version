webpackHotUpdate("static/development/pages/guides/[guide].js",{

/***/ "./components/share-page/index.js":
/*!****************************************!*\
  !*** ./components/share-page/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var lib_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/url */ "./lib/url.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/share-page/style.js");
/* harmony import */ var components_share_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/share-icon */ "./components/share-icon/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SharePage = function SharePage(_ref) {
  var url = _ref.url,
      title = _ref.title,
      twitterUsername = _ref.twitterUsername;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareWrap"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareIconsList"], {
    className: "d-none d-sm-flex"
  }, __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getTwitterShareUrl"])({
      text: "".concat(title, " ").concat(twitterUsername ? "by @".concat(twitterUsername) : ''),
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitterSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getFacebookShareUrl"])({
      text: title,
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getHnShareUrl"])({
      text: title,
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHackerNewsSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getRedditShareUrl"])({
      text: title,
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faRedditSquare"]
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SharePage);

/***/ })

})
//# sourceMappingURL=[guide].js.31c227e7e4b7e47b0858.hot-update.js.map