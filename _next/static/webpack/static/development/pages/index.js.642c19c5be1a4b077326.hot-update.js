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
/* harmony import */ var lib_gtag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/gtag */ "./lib/gtag.js");
var _jsxFileName = "/Users/kamranahmed/Workspace/roadmap.sh/components/helmet/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var _require = __webpack_require__(/*! next/constants */ "./node_modules/next/constants.js"),
    PHASE_DEVELOPMENT_SERVER = _require.PHASE_DEVELOPMENT_SERVER;





var prepareTitle = function prepareTitle(givenTitle) {
  givenTitle = givenTitle || storage_site__WEBPACK_IMPORTED_MODULE_2__.title;
  return "".concat(givenTitle, " - ").concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.name);
};

var prepareDescription = function prepareDescription(givenDescription) {
  return givenDescription || storage_site__WEBPACK_IMPORTED_MODULE_2__.description;
};

var Helmet = function Helmet(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("meta", {
    charSet: "UTF-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, prepareTitle(props.title)), __jsx("meta", {
    name: "description",
    content: prepareDescription(props.description),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("meta", {
    name: "author",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("meta", {
    name: "keywords",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.keywords.join(','),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: storage_site__WEBPACK_IMPORTED_MODULE_2__.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("meta", {
    httpEquiv: "Content-Language",
    content: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: prepareTitle(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: prepareDescription(props.description),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("meta", {
    property: "article:publisher",
    content: "https://facebook.com/".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.facebook),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("meta", {
    property: "article:author",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.author,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.twitter),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: prepareTitle(props.title),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: prepareDescription(props.description),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:image",
    content: storage_site__WEBPACK_IMPORTED_MODULE_2__.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:image:alt",
    content: "roadmap.sh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("meta", {
    name: "mobile-web-app-capable",
    content: "yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("meta", {
    name: "apple-mobile-web-app-status-bar-style",
    content: "black-translucent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/static/manifest/apple-touch-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#101010",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("meta", {
    name: "theme-color",
    content: "#848a9a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("link", {
    rel: "manifest",
    href: "/static/manifest/manifest.json",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/static/manifest/icon32.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/static/manifest/icon16.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/static/manifest/favicon.ico",
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "/static/manifest/favicon.ico",
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("link", {
    rel: "wth",
    href: "value",
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=".concat(lib_gtag__WEBPACK_IMPORTED_MODULE_3__["GA_TRACKING_ID"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("script", {
    dangerouslySetInnerHTML: {
      __html: "\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', '".concat(lib_gtag__WEBPACK_IMPORTED_MODULE_3__["GA_TRACKING_ID"], "');\n      ")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Helmet);

/***/ })

})
//# sourceMappingURL=index.js.642c19c5be1a4b077326.hot-update.js.map