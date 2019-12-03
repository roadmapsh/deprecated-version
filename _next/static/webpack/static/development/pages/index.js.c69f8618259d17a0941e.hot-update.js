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
    content: "".concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.url.web).concat(storage_site__WEBPACK_IMPORTED_MODULE_2__.logoSquare)
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

/***/ }),

/***/ "./components/page-footer/style.js":
/*!*****************************************!*\
  !*** ./components/page-footer/style.js ***!
  \*****************************************/
/*! exports provided: FooterWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrap", function() { return FooterWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__FooterWrap",
  componentId: "an4vc9-0"
})(["padding:65px 10px;.site-meta{margin-bottom:30px;width:350px;.brand-detail{display:flex;align-items:center;}.brand{display:flex;align-items:center;font-weight:600;color:#000;text-decoration:none;img{height:25px;width:25px;margin-right:8px;}}.preposition{margin:0 7px;}.follow-author{background-color:#1e99e6;border-radius:3px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;line-height:20px;padding:0 6px;white-space:nowrap;text-decoration:none;&:hover{background:#43aaea;}}.brand-explanation{color:#999;p{font-size:15px;line-height:24px;margin:15px 0;}}.meta-links{color:#a3a3a3;font-size:15px;a{color:#000;text-decoration:none;}}}.foot-col{margin-bottom:20px;a{color:#999;}.foot-header{font-weight:500;margin-bottom:7px;}ul{margin:0;padding:0;li{margin-bottom:2px;font-size:15px;list-style:none;margin-left:0;}}}"]);

/***/ }),

/***/ "./components/site-nav/index.js":
/*!**************************************!*\
  !*** ./components/site-nav/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./components/site-nav/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var SiteNav = function SiteNav() {
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_2__["HeaderWrap"], null, __jsx("div", {
    className: "top-row container"
  }, __jsx("div", {
    className: "flex-grow-1 brand"
  }, __jsx("a", {
    href: "/"
  }, __jsx("img", {
    src: "/static/brand.png",
    alt: ""
  }))), __jsx("div", {
    className: "nav-links"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/roadmaps"
  }, __jsx("a", null, "Roadmaps")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/guides"
  }, __jsx("a", null, "Guides")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, __jsx("a", null, "FAQ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signup"
  }, __jsx("a", {
    className: "signup"
  }, "Subscribe")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SiteNav);

/***/ }),

/***/ "./layouts/default/index.js":
/*!**********************************!*\
  !*** ./layouts/default/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global.scss */ "./layouts/default/global.scss");
/* harmony import */ var _global_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_global_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_gtag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/gtag */ "./lib/gtag.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var DefaultLayout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DefaultLayout, _React$Component);

  function DefaultLayout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DefaultLayout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DefaultLayout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DefaultLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(lib_gtag__WEBPACK_IMPORTED_MODULE_8__["firePageView"])(window.location.pathname);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, this.props.children);
    }
  }]);

  return DefaultLayout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_featured_content_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/featured-content/index */ "./components/featured-content/index.js");
/* harmony import */ var components_hero_section_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/hero-section/index */ "./components/hero-section/index.js");
/* harmony import */ var components_page_footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/page-footer/index */ "./components/page-footer/index.js");
/* harmony import */ var components_site_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/site-nav */ "./components/site-nav/index.js");
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");
/* harmony import */ var layouts_default_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! layouts/default/index */ "./layouts/default/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Home = function Home(props) {
  return __jsx(layouts_default_index__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(components_site_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(components_hero_section_index__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(components_featured_content_index__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(components_page_footer_index__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./storage/guides.json":
/*!*****************************!*\
  !*** ./storage/guides.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Levels of Seniority\",\"description\":\"How to Step Up as a Junior, Mid Level or a Senior Developer?\",\"url\":\"/guides/levels-of-seniority\",\"fileName\":\"levels-of-seniority\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2019-12-03T12:13:00.860Z\",\"createdAt\":\"2019-12-03T12:13:00.860Z\"},{\"title\":\"Design Patterns for Humans\",\"description\":\"A language agnostic, ultra-simplified explanation to design patterns\",\"url\":\"/guides/design-patterns-for-humans\",\"fileName\":\"design-patterns-for-humans\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2019-10-09T12:00:00.860Z\",\"createdAt\":\"2019-01-23T17:00:00.860Z\"},{\"title\":\"Journey to HTTP/2\",\"description\":\"The evolution of HTTP. How it all started and where we stand today\",\"url\":\"/guides/journey-to-http2\",\"fileName\":\"journey-to-http2\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2018-12-04T12:00:00.860Z\",\"updatedAt\":\"2018-12-04T12:00:00.860Z\",\"draft\":true},{\"title\":\"DNS in One Picture\",\"description\":\"Quick illustrative guide on how a website is found on the internet.\",\"url\":\"/guides/dns-in-one-picture\",\"fileName\":\"dns-in-one-picture\",\"featured\":true,\"author\":\"kamranahmedse\",\"updatedAt\":\"2018-12-04T12:00:00.860Z\",\"createdAt\":\"2018-12-04T17:00:00.860Z\"},{\"title\":\"HTTP Caching\",\"description\":\"Everything you need to know about web caching\",\"url\":\"/guides/http-caching\",\"fileName\":\"http-caching\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2018-11-29T17:00:00.860Z\",\"updatedAt\":\"2018-11-29T17:00:00.860Z\"},{\"title\":\"Brief History of JavaScript\",\"description\":\"How JavaScript was introduced and evolved over the years\",\"url\":\"/guides/history-of-javascript\",\"fileName\":\"history-of-javascript\",\"featured\":true,\"author\":\"kamranahmedse\",\"createdAt\":\"2017-10-28T17:00:00.860Z\",\"updatedAt\":\"2017-10-28T17:00:00.860Z\"}]");

/***/ }),

/***/ "./storage/roadmaps.json":
/*!*******************************!*\
  !*** ./storage/roadmaps.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Frontend Developer\",\"description\":\"Step by step guide to becoming a modern frontend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern frontend developer in 2019\",\"url\":\"/frontend\",\"picture\":\"/static/roadmaps/{version}/frontend.png\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"]},{\"title\":\"Backend Developer\",\"description\":\"Step by step guide to becoming a modern backend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern backend developer in 2019\",\"url\":\"/backend\",\"picture\":\"/static/roadmaps/{version}/backend.png\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"]},{\"title\":\"DevOps Roadmap\",\"description\":\"Step by step guide for DevOps or any other Operations Role\",\"featuredDescription\":\"Step by step guide to become an SRE or for any operations role in 2019\",\"url\":\"/devops\",\"picture\":\"/static/roadmaps/{version}/devops.png\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"]},{\"title\":\"Full Stack Developer\",\"description\":\"Step by step guide to becoming a modern full stack developer in 2019\",\"url\":\"/fullstack\",\"upcoming\":true},{\"title\":\"QA Engineer\",\"description\":\"Steps to follow in order to become a modern QA Engineer in 2019\",\"url\":\"/qa-engineer\",\"upcoming\":true}]");

/***/ }),

/***/ "./storage/site.json":
/*!***************************!*\
  !*** ./storage/site.json ***!
  \***************************/
/*! exports provided: author, title, name, description, twitter, facebook, logo, logoSquare, url, keywords, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"author\":\"Kamran Ahmed\",\"title\":\"Roadmaps to becoming a modern developer\",\"name\":\"roadmap.sh\",\"description\":\"Roadmaps, articles and resources to help you choose your path, learn and improve.\",\"twitter\":\"kamranahmedse\",\"facebook\":\"kamranahmedse\",\"logo\":\"/static/brand.png\",\"logoSquare\":\"/static/brand-square.png\",\"url\":{\"web\":\"https://roadmap.sh\",\"repo\":\"https://github.com/kamranahmedse/roadmap.sh\",\"repoData\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/storage\",\"addGuide\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing/guide.md\",\"addRoadmap\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing/roadmap.md\",\"addResources\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing/resources.md\",\"contribute\":\"https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing\",\"issue\":\"https://github.com/kamranahmedse/roadmap.sh/issues/new\"},\"keywords\":[\"roadmap\",\"developer roadmaps\",\"developer roadmap\",\"frontend developer\",\"frontend developer roadmap\",\"frontend\",\"frontend roadmap\",\"backend\",\"backend developer\",\"backend developer roadmap\",\"devops\",\"devops roadmap\",\"fullstack developer roadmap\",\"guide to becoming a developer\",\"sre roadmap\",\"sre\",\"operations roadmap\"]}");

/***/ })

})
//# sourceMappingURL=index.js.c69f8618259d17a0941e.hot-update.js.map