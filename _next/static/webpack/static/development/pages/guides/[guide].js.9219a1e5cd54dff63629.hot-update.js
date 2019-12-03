webpackHotUpdate("static/development/pages/guides/[guide].js",{

/***/ "./storage/guides/history-of-javascript.md":
/*!*************************************************!*\
  !*** ./storage/guides/history-of-javascript.md ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */

var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Around 10 years ago, Jeff Atwood (the founder of stackoverflow) made a case that JavaScript is going to be the future and he coined the \u201CAtwood Law\u201D which states that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "Any application that can be written in JavaScript will eventually be written in JavaScript"), ". Fast-forward to today, 10 years later, if you look at it \u2014 it rings truer than ever. JavaScript is continuing to gain more and more adoption."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "JavaScript is announced"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "JavaScript was initially created by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com/BrendanEich"
  }), "Brendan Eich"), " of NetScape and was first announced in a press release by Netscape in 1995. It has a bizarre history of naming; initally it was named ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Mocha"), " by the creator, which was later renamed to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "LiveScript"), ".  In 1996, about a year later after the release, NetScape decided to rename it to be ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "JavaScript"), " with hopes of capitalizing on the Java community (although JavaScript did not have any relationship with Java) and released Netscape 2.0 with the official support of JavaScript."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "ES1, ES2 and ES3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In 1996, Netscape decided to submit it to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Ecma_International"
  }), "ECMA International"), " with the hopes of getting it standardized. First edition of the standard specification was released in 1997 and the language was standardized. After the initial release, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ECMAScript"), " was continued to be worked upon and in no-time two more versions were released ECMAScript 2 in 1998 and ECMAScript 3 in 1999."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Decade of Silence and ES4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "After the release of ES3 in 1999, there was a complete silence for a decade and no changes were made to the official standard. There was some work on the fourth edition in the initial days; some of the features that were being discussed included classes, modules, static typings, destructuring etc. It was being targeted to be released by 2008 but was abandoned due to political differences concerning language complexity. However, the vendors kept introducing the extensions to the language and the developers were left scratching their heads \u2014 adding polyfills to battle compatibility issues between different browsers."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "From silence to ES5"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Google, Microsoft, Yahoo and other disputers of ES4 came together and decided to work on a less ambition update to ES3 tentatively named ES3.1. But the teams were still fighting about what to include from ES4 and what not. Finally, in 2009 ES5 was released mainly focusing on fixing the compabitility and security issues etc. But there wasn\u2019t much of a splash in the water \u2014 it took ages for the vendors to incorporate the standards and many developers were still using ES3 without being aware of the \u201Cmodern\u201D standards."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Release of ES6 \u2014 ECMASript 2015"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "After a few years of the release of ES5, things started to change, TC39 (the committee under ECMA international responsible for ECMAScript standardization) kept working on the next version of ECMAScript (ES6) which was originally named ES Harmony, before being eventually released with the name ES2015. ES2015 adds significant features and syntactic sugar to allow writing complex applications. Some of the features that ES6 has to offer, include Classes, Modules, Arrows, Enhanced object literals, Template strings, Destructuring, Default param values + rest + spread, Let and Const, Iterators + for..of, Generators, Maps + Sets, Proxies, Symbols, Promises, math + number + string + array + object APIs ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://es6-features.org/#Constants"
  }), "etc")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Browser support for ES6 is still scarce but everything that ES6 has to offer is still available to developers by transpiling the ES6 code to ES5. With the release of 6th version of ECMAScript, TC39 decided to move to yearly model of releasing updates to ECMAScript so to make sure that the new features are added as soon as they are approved and we don\u2019t have to wait for the full specification to be drafted and approved \u2014 thus 6th version of ECMAScript was renamed as ECMAScript 2015 or ES2015 before the release in June 2015. And the next versions of ECMAScript were decided to published in June of every year."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Release of ES7 \u2014 ECMASript 2016"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In June 2016, seventh version of ECMAScript was released. As ECMAScript has been moved to an yearly release model, ECMAScript 2016 (ES2016) comparatively did not have much to offer. ES2016 includes just two new features"));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=[guide].js.9219a1e5cd54dff63629.hot-update.js.map