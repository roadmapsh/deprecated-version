webpackHotUpdate("static/development/pages/[roadmap]/resources.js",{

/***/ "./components/link/badge-link.js":
/*!***************************************!*\
  !*** ./components/link/badge-link.js ***!
  \***************************************/
/*! exports provided: BadgeLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeLink", function() { return BadgeLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function BadgeLink(_ref) {
  var _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'success' : _ref$variant,
      badgeText = _ref.badgeText,
      href = _ref.href,
      children = _ref.children;
  return __jsx("p", {
    className: "mb-0"
  }, __jsx("a", {
    href: href,
    target: target
  }, __jsx("span", {
    style: {
      position: 'relative',
      top: '-2px'
    },
    className: "badge badge-".concat(variant)
  }, badgeText), " ", children));
}

/***/ })

})
//# sourceMappingURL=resources.js.0567b8aea949b7615f1d.hot-update.js.map