webpackHotUpdate("static/development/pages/[roadmap]/resources.js",{

/***/ "./content/roadmaps/1-frontend/resources.md":
/*!**************************************************!*\
  !*** ./content/roadmaps/1-frontend/resources.md ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var BadgeLink = makeShortcode("BadgeLink");
var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    "class": "alert alert-primary",
    style: {
      marginBottom: '-10px'
    }
  }, "This page is in progress. Please check back later or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "/signup"
  }, "subscribe"), " to get notified. Also, feel free to contribute by suggesting the resources in ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", null, "the issues"), "; we will see what we can add."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Become a Frontend Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before I go ahead and list down the resources, please know that the roadmap and the list below is exhaustive and you don't need to know it all from the get go. For frontend development, all you need to get started with is learn some basic HTML, CSS and JavaScript and start working on projects; everything else you will learn along the way. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Internet and how it works?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Get the basic understanding of internet, browsers, networks and other relevant knowledge. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "/guides/what-is-internet",
    mdxType: "BadgeLink"
  }, "What is Internet?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    variant: "primary",
    badgeText: "Watch",
    href: "https://www.youtube.com/watch?v=7_LPdttKXPc",
    mdxType: "BadgeLink"
  }, "How the internet works in 5 minutes")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "https://kamranahmed.info/blog/2016/08/13/http-in-depth/",
    mdxType: "BadgeLink"
  }, "What is HTTP and how it evolved?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "https://blog.cloudflare.com/http3-the-past-present-and-future/",
    mdxType: "BadgeLink"
  }, "HTTP/3: the past, the present, and the future")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "https://kinsta.com/blog/http3/",
    mdxType: "BadgeLink"
  }, "What Is HTTP/3 \u2013 Lowdown on the Fast New UDP-Based Protocol")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/",
    mdxType: "BadgeLink"
  }, "How Browsers Work: Behind the scenes of modern web browsers")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    variant: "primary",
    badgeText: "Watch",
    href: "https://www.youtube.com/watch?v=Rck3BALhI5c",
    mdxType: "BadgeLink"
  }, "DNS as Fast As Possible")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "https://howdns.works/",
    mdxType: "BadgeLink"
  }, "How DNS works?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "/guides/dns-in-one-picture",
    mdxType: "BadgeLink"
  }, "DNS in One Picture"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Learn HTML"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "HTML provides the skeleton of a webpage. Learn the basics of HTML; learn the basic tags, learn how to write semantic HTML, understand basic SEO, learn how to divide your pages into sections that will help you style them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(BadgeLink, {
    badgeText: "Read",
    href: "https://www.w3schools.com/html/default.asp",
    mdxType: "BadgeLink"
  }, "W3Schools \u2013 HTML Tutorial"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", null));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=resources.js.5b93e6f8716932c097ba.hot-update.js.map