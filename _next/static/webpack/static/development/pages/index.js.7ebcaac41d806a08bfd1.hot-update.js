webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/helmet/index.js":
/*!************************************!*\
  !*** ./components/helmet/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var prepareTitle = function prepareTitle(givenTitle) {
  givenTitle = givenTitle || storage_site__WEBPACK_IMPORTED_MODULE_2__.title;
  return "".concat(givenTitle, " - ").concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.name);
};

var prepareDescription = function prepareDescription(givenDescription) {
  return givenDescription || storage_site__WEBPACK_IMPORTED_MODULE_2__.description;
};

var Helmet = function Helmet(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    charSet: "UTF-8"
  }), __jsx("title", null, prepareTitle(props.title)), __jsx("meta", {
    name: "description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "author",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "keywords",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.keywords.join(',')
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"
  }), __jsx("link", {
    rel: "canonical",
    href: storage_site__WEBPACK_IMPORTED_MODULE_2__.url.web
  }), __jsx("meta", {
    httpEquiv: "Content-Language",
    content: "en"
  }), __jsx("meta", {
    property: "og:title",
    content: prepareTitle(props.title)
  }), __jsx("meta", {
    property: "og:description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.url.web).concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.logoSquare)
  }), __jsx("meta", {
    property: "og:url",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.url.web
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "article:publisher",
    content: "https://facebook.com/".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.facebook)
  }), __jsx("meta", {
    property: "og:site_name",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.name
  }), __jsx("meta", {
    property: "article:author",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.twitter)
  }), __jsx("meta", {
    name: "twitter:title",
    content: prepareTitle(props.title)
  }), __jsx("meta", {
    name: "twitter:description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "twitter:image",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.logo
  }), __jsx("meta", {
    name: "twitter:image:alt",
    content: "roadmap.sh"
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/manifest/apple-touch-icon.png"
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#101010"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#848a9a"
  }), __jsx("link", {
    rel: "manifest",
    href: "/static/manifest/manifest.json"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/manifest/icon32.png"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/manifest/icon16.png"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/manifest/favicon.ico",
    type: "image/x-icon"
  }), __jsx("link", {
    rel: "icon",
    href: "/static/manifest/favicon.ico",
    type: "image/x-icon"
  }), "" && false);
};

/* harmony default export */ __webpack_exports__["default"] = (Helmet);

/***/ })

})
//# sourceMappingURL=index.js.7ebcaac41d806a08bfd1.hot-update.js.map