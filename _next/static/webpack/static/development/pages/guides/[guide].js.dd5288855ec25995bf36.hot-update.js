webpackHotUpdate("static/development/pages/guides/[guide].js",{

/***/ "./components/md-renderer/mdx-components/a.js":
/*!****************************************************!*\
  !*** ./components/md-renderer/mdx-components/a.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Link = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "a__Link",
  componentId: "sc-15mb891-0"
})(["font-weight:600;"]);

var EnrichedLink = function EnrichedLink(props) {
  // Is external URL or is a media URL
  var isExternalUrl = /(^http(s)?:\/\/)|(\.(png|svg|jpeg|jpg)$)/.test(props.href);
  return __jsx(Link, {
    href: props.href,
    target: isExternalUrl ? '_blank' : '_self'
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (EnrichedLink);

/***/ })

})
//# sourceMappingURL=[guide].js.dd5288855ec25995bf36.hot-update.js.map