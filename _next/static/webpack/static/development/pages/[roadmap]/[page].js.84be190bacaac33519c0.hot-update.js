webpackHotUpdate("static/development/pages/[roadmap]/[page].js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var content_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! content/site */ "./content/site.json");
var content_site__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! content/site */ "./content/site.json", 1);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var prepareTitle = function prepareTitle(givenTitle) {
  return givenTitle || content_site__WEBPACK_IMPORTED_MODULE_2__.title;
};

var prepareDescription = function prepareDescription(givenDescription) {
  return givenDescription || content_site__WEBPACK_IMPORTED_MODULE_2__.description;
}; // noinspection JSUnresolvedLibraryURL


var Helmet = function Helmet(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    charSet: "UTF-8"
  }), __jsx("title", null, prepareTitle(props.title)), __jsx("meta", {
    name: "description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "author",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "keywords",
    content: props.keywords ? props.keywords.join(',') : content_site__WEBPACK_IMPORTED_MODULE_2__.keywords.join(',')
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"
  }), props.canonical && __jsx("link", {
    rel: "canonical",
    href: props.canonical
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
    content: "".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.url.web).concat(content_site__WEBPACK_IMPORTED_MODULE_2__.logoSquare)
  }), __jsx("meta", {
    property: "og:url",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.url.web
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "article:publisher",
    content: "https://facebook.com/".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.facebook)
  }), __jsx("meta", {
    property: "og:site_name",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.name
  }), __jsx("meta", {
    property: "article:author",
    content: content_site__WEBPACK_IMPORTED_MODULE_2__.author
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary"
  }), __jsx("meta", {
    name: "twitter:site",
    content: "@".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.twitter)
  }), __jsx("meta", {
    name: "twitter:title",
    content: prepareTitle(props.title)
  }), __jsx("meta", {
    name: "twitter:description",
    content: prepareDescription(props.description)
  }), __jsx("meta", {
    name: "twitter:image",
    content: "".concat(content_site__WEBPACK_IMPORTED_MODULE_2__.url.web).concat(content_site__WEBPACK_IMPORTED_MODULE_2__.logoSquare)
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
    href: "/manifest/apple-touch-icon.png"
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#101010"
  }), __jsx("meta", {
    name: "theme-color",
    content: "#848a9a"
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest/manifest.json"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/manifest/icon32.png"
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/manifest/icon16.png"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "/manifest/favicon.ico",
    type: "image/x-icon"
  }), __jsx("link", {
    rel: "icon",
    href: "/manifest/favicon.ico",
    type: "image/x-icon"
  }), "" && false);
};

/* harmony default export */ __webpack_exports__["default"] = (Helmet);

/***/ }),

/***/ "./components/page-footer/index.js":
/*!*****************************************!*\
  !*** ./components/page-footer/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var content_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! content/site */ "./content/site.json");
var content_site__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! content/site */ "./content/site.json", 1);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.js */ "./components/page-footer/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PageFooter = function PageFooter() {
  return __jsx(_style_js__WEBPACK_IMPORTED_MODULE_3__["FooterWrap"], {
    className: "border-top"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "foot-cols-wrap row"
  }, __jsx("div", {
    className: "site-meta-wrap col-12 col-sm-12 col-lg col-xl col-md-12"
  }, __jsx("div", {
    className: "site-meta"
  }, __jsx("div", {
    className: "brand-detail"
  }, __jsx("a", {
    href: "/",
    className: "brand"
  }, __jsx("img", {
    src: "/brand.png",
    alt: ""
  }), " roadmap.sh"), __jsx("span", {
    className: "preposition"
  }, "by"), __jsx("a", {
    href: "https://twitter.com/kamranahmedse",
    target: "_blank",
    className: "follow-author"
  }, "@kamranahmedse")), __jsx("div", {
    className: "brand-explanation"
  }, __jsx("p", null, "Community created roadmaps, articles, resources and journeys to help you choose your path and grow in your career.")), __jsx("p", {
    className: "meta-links"
  }, "\xA9 roadmap.sh \xB7 \xA0 ", __jsx("a", {
    href: "/about"
  }, "FAQ"), " \xB7 \xA0 ", __jsx("a", {
    href: "/terms"
  }, "Terms"), " \xB7 \xA0 ", __jsx("a", {
    href: "/privacy"
  }, "Privacy")))), __jsx("div", {
    className: "site-contribute foot-col col-12 col-sm-4 col-lg-2"
  }, __jsx("ul", null, __jsx("li", {
    className: "foot-header"
  }, "Contribute"), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.addGuide,
    target: "_blank"
  }, "Write a Guide")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.addRoadmap,
    target: "_blank"
  }, "Submit a Roadmap")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.addResources,
    target: "_blank"
  }, "Add resources")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.repo,
    target: "_blank"
  }, "Codebase")))), __jsx("div", {
    className: "site-learn foot-col col-12 col-sm-4 col-lg-2"
  }, __jsx("ul", null, __jsx("li", {
    className: "foot-header"
  }, "Learn"), __jsx("li", null, __jsx("a", {
    href: "/guides"
  }, "Read Guides")), __jsx("li", null, __jsx("a", {
    href: "/roadmaps"
  }, "View Roadmaps")), __jsx("li", null, __jsx("a", {
    href: content_site__WEBPACK_IMPORTED_MODULE_2__.url.contribute,
    target: "_blank"
  }, "Contribute")))), __jsx("div", {
    className: "site-learn foot-col col-12 col-sm-4 col-lg-2"
  }, __jsx("ul", null, __jsx("li", {
    className: "foot-header"
  }, "Most Visited"), __jsx("li", null, __jsx("a", {
    href: "/frontend"
  }, "Frontend Roadmap")), __jsx("li", null, __jsx("a", {
    href: "/backend"
  }, "Backend Roadmap")), __jsx("li", null, __jsx("a", {
    href: "/devops"
  }, "DevOps Roadmap")), __jsx("li", null, __jsx("a", {
    href: "/roadmaps"
  }, "Upcoming")))))), "" && false);
};

/* harmony default export */ __webpack_exports__["default"] = (PageFooter);

/***/ })

})
//# sourceMappingURL=[page].js.84be190bacaac33519c0.hot-update.js.map