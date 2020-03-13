webpackHotUpdate("static/development/pages/[roadmap]/resources.js",{

/***/ "./components/sponsor-banner/index.js":
/*!********************************************!*\
  !*** ./components/sponsor-banner/index.js ***!
  \********************************************/
/*! exports provided: SponsorBanner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorBanner", function() { return SponsorBanner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/sponsor-banner/style.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SponsorBanner(_ref) {
  var _ref$onCloseBanner = _ref.onCloseBanner,
      onCloseBanner = _ref$onCloseBanner === void 0 ? function () {
    return null;
  } : _ref$onCloseBanner;
  return __jsx("div", {
    className: "row"
  }, __jsx("div", {
    className: "col p-0"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["BannerWrap"], {
    href: "https://www.youtube.com/channel/UCA0H2KIWgWTwpTFjSxp0now/playlists",
    target: "_blank",
    className: "alert alert-info"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["SponsorLogo"], {
    src: "/sponsors/youtube.svg"
  }), "We now have a youtube channel", __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["EmojiWrap"], {
    src: '/sponsors/heart-eyes.svg'
  }), __jsx("span", {
    className: "d-none d-sm-inline-block"
  }, "Subscribe it for the video content."), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["CloseSponsor"], {
    onClick: function onClick(e) {
      e.preventDefault();
      onCloseBanner();
    },
    className: "close"
  }, "\xD7"))));
}

/***/ })

})
//# sourceMappingURL=resources.js.fcb4f2a3ab525a0c00bd.hot-update.js.map