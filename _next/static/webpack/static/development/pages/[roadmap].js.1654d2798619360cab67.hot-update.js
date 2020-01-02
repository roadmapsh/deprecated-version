webpackHotUpdate("static/development/pages/[roadmap].js",{

/***/ "./components/detailed-roadmap/index.js":
false,

/***/ "./components/detailed-roadmap/style.js":
false,

/***/ "./components/guide-body/index.js":
/*!****************************************!*\
  !*** ./components/guide-body/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var components_mdx_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/mdx-components */ "./components/mdx-components/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/guide-body/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var GuideBody = function GuideBody(props) {
  return __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
    components: components_mdx_components__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["GuideBodyWrap"], null, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (GuideBody);

/***/ }),

/***/ "./components/guide-body/style.js":
/*!****************************************!*\
  !*** ./components/guide-body/style.js ***!
  \****************************************/
/*! exports provided: GuideBodyWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideBodyWrap", function() { return GuideBodyWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var GuideBodyWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__GuideBodyWrap",
  componentId: "sc-1fx3kue-0"
})(["position:relative;max-width:750px;margin:0 auto;padding:0 20px;min-height:300px;"]);

/***/ }),

/***/ "./components/md-renderer/index.js":
false,

/***/ "./components/md-renderer/mdx-components/a.js":
false,

/***/ "./components/md-renderer/mdx-components/blockquote.js":
false,

/***/ "./components/md-renderer/mdx-components/heading.js":
false,

/***/ "./components/md-renderer/mdx-components/iframe.js":
false,

/***/ "./components/md-renderer/mdx-components/img.js":
false,

/***/ "./components/md-renderer/mdx-components/index.js":
false,

/***/ "./components/md-renderer/mdx-components/p.js":
false,

/***/ "./components/md-renderer/mdx-components/pre.js":
false,

/***/ "./components/md-renderer/mdx-components/table.js":
false,

/***/ "./components/mdx-components/a.js":
/*!****************************************!*\
  !*** ./components/mdx-components/a.js ***!
  \****************************************/
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
  componentId: "otgt0a-0"
})(["font-weight:600;"]);

var EnrichedLink = function EnrichedLink(props) {
  return __jsx(Link, {
    href: props.href,
    target: /^http(s)?:\/\//.test(props.href) ? '_blank' : '_self'
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (EnrichedLink);

/***/ }),

/***/ "./components/mdx-components/blockquote.js":
/*!*************************************************!*\
  !*** ./components/mdx-components/blockquote.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BlockQuote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].blockquote.withConfig({
  displayName: "blockquote__BlockQuote",
  componentId: "sc-1gtfse3-0"
})(["padding:16px 20px;position:relative;background:#e8e8e8;border-radius:5px;h1,h2,h3,h4,h5,h6{margin-top:0;}p + h4{margin-top:15px;}p{margin:0;& + p{margin-top:10px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (BlockQuote);

/***/ }),

/***/ "./components/mdx-components/heading.js":
/*!**********************************************!*\
  !*** ./components/mdx-components/heading.js ***!
  \**********************************************/
/*! exports provided: Headings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headings", function() { return Headings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var components_icons_link_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/icons/link.svg */ "./components/icons/link.svg");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var linkify = function linkify(Component) {
  return function (props) {
    var text = props.children;
    var id = text.toLowerCase && text.toLowerCase().replace(/[^\x00-\x7F]/g, '').replace(/\s+/g, '-').replace(/[?!]/g, '');
    return __jsx(Component, {
      id: id
    }, __jsx(HeaderLink, {
      href: "#".concat(id)
    }, __jsx(components_icons_link_svg__WEBPACK_IMPORTED_MODULE_2__["default"], null)), props.children);
  };
};

var HeaderLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "heading__HeaderLink",
  componentId: "sc-1e0ksqp-0"
})(["position:absolute;top:0;left:-25px;width:25px;display:none;height:100%;align-items:center;justify-content:flex-start;"]);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "heading__H1",
  componentId: "sc-1e0ksqp-1"
})(["position:relative;font-size:42px;font-weight:700;margin:30px 0 8px;&:hover ", "{display:flex;}"], HeaderLink);
var H2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h2'
}).withConfig({
  displayName: "heading__H2",
  componentId: "sc-1e0ksqp-2"
})(["font-size:36px;"]);
var H3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h3'
}).withConfig({
  displayName: "heading__H3",
  componentId: "sc-1e0ksqp-3"
})(["margin:22px 0 8px;font-size:30px;"]);
var H4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h4'
}).withConfig({
  displayName: "heading__H4",
  componentId: "sc-1e0ksqp-4"
})(["margin:18px 0 8px;font-size:24px;"]);
var H5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h5'
}).withConfig({
  displayName: "heading__H5",
  componentId: "sc-1e0ksqp-5"
})(["margin:14px 0 8px;font-size:18px;"]);
var H6 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h6'
}).withConfig({
  displayName: "heading__H6",
  componentId: "sc-1e0ksqp-6"
})(["margin:12px 0 8px;font-size:18px;"]);
var Headings = {
  h1: linkify(H1),
  h2: linkify(H2),
  h3: linkify(H3),
  h4: linkify(H4),
  h5: linkify(H5),
  h6: linkify(H6)
};

/***/ }),

/***/ "./components/mdx-components/iframe.js":
/*!*********************************************!*\
  !*** ./components/mdx-components/iframe.js ***!
  \*********************************************/
/*! exports provided: IFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrame", function() { return IFrame; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var IFrame = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].iframe.withConfig({
  displayName: "iframe__IFrame",
  componentId: "uz4fpt-0"
})(["display:block;width:100%;border:none;margin:30px auto;"]);

/***/ }),

/***/ "./components/mdx-components/img.js":
/*!******************************************!*\
  !*** ./components/mdx-components/img.js ***!
  \******************************************/
/*! exports provided: Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "img__Img",
  componentId: "haah45-0"
})(["max-width:100%;margin:25px auto;display:block;"]);

/***/ }),

/***/ "./components/mdx-components/index.js":
/*!********************************************!*\
  !*** ./components/mdx-components/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./p */ "./components/mdx-components/p.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heading */ "./components/mdx-components/heading.js");
/* harmony import */ var _pre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pre */ "./components/mdx-components/pre.js");
/* harmony import */ var _blockquote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blockquote */ "./components/mdx-components/blockquote.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table */ "./components/mdx-components/table.js");
/* harmony import */ var _iframe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iframe */ "./components/mdx-components/iframe.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img */ "./components/mdx-components/img.js");
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./a */ "./components/mdx-components/a.js");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










var MdxComponents = _objectSpread({
  p: _p__WEBPACK_IMPORTED_MODULE_7__["default"]
}, _heading__WEBPACK_IMPORTED_MODULE_8__["Headings"], {
  pre: _pre__WEBPACK_IMPORTED_MODULE_9__["Pre"],
  blockquote: _blockquote__WEBPACK_IMPORTED_MODULE_10__["default"],
  a: _a__WEBPACK_IMPORTED_MODULE_14__["default"],
  table: _table__WEBPACK_IMPORTED_MODULE_11__["Table"],
  iframe: _iframe__WEBPACK_IMPORTED_MODULE_12__["IFrame"],
  img: _img__WEBPACK_IMPORTED_MODULE_13__["Img"]
});

/* harmony default export */ __webpack_exports__["default"] = (MdxComponents);

/***/ }),

/***/ "./components/mdx-components/p.js":
/*!****************************************!*\
  !*** ./components/mdx-components/p.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var P = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "p__P",
  componentId: "kuvab1-0"
})(["color:inherit;font-size:16px;font-weight:400;line-height:27px;margin:16px 0;img + em{text-align:center;color:#666666;font-style:normal;font-size:14px;margin:5px 0 10px;display:block;}"]);
/* harmony default export */ __webpack_exports__["default"] = (P);

/***/ }),

/***/ "./components/mdx-components/pre.js":
/*!******************************************!*\
  !*** ./components/mdx-components/pre.js ***!
  \******************************************/
/*! exports provided: Pre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Pre = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].pre.withConfig({
  displayName: "pre__Pre",
  componentId: "sc-1klgsn4-0"
})(["margin:25px -25px 25px -25px !important;padding:20px 25px !important;border-radius:10px;line-height:1.5 !important;code{background:transparent;}"]);

/***/ }),

/***/ "./components/mdx-components/table.js":
/*!********************************************!*\
  !*** ./components/mdx-components/table.js ***!
  \********************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Table = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table.withConfig({
  displayName: "table__Table",
  componentId: "sc-1b8d1zh-0"
})(["border-collapse:separate;width:100%;border-spacing:0;margin:20px 0;th{color:#666;font-size:12px;font-weight:400;background:#FAFAFA;text-transform:uppercase;height:40px;vertical-align:middle;padding:5px 10px;}td{font-size:14px;padding:10px;border-bottom:1px solid #EAEAEA;}"]);

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

/***/ "./components/roadmap-header/index.js":
false,

/***/ "./components/roadmap-header/style.js":
false,

/***/ "./components/roadmap-summary/index.js":
/*!*********************************************!*\
  !*** ./components/roadmap-summary/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./components/roadmap-summary/style.js");
/* harmony import */ var components_share_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/share-page */ "./components/share-page/index.js");
/* harmony import */ var components_badges__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/badges */ "./components/badges/index.js");
/* harmony import */ var components_guide_body__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/guide-body */ "./components/guide-body/index.js");
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var isActiveRoadmap = function isActiveRoadmap(loadedVersion, roadmapVersion) {
  return loadedVersion === roadmapVersion || loadedVersion === 'latest' && _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(roadmapVersion, 10) === new Date().getFullYear();
};

var UpcomingGuide = __webpack_require__(/*! ../../storage/roadmaps/upcoming.md */ "./storage/roadmaps/upcoming.md")["default"];

var RoadmapSummary = function RoadmapSummary(_ref) {
  var roadmap = _ref.roadmap;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["SummaryContainer"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["Header"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["Title"], null, roadmap.title), __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["Description"], null, roadmap.description), __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["BadgesList"], {
    className: "mt-4"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["BadgeLink"], {
    href: "/roadmaps"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["DarkBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"]
  }), "Other Roadmaps")), roadmap.upcoming && __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faClock"]
  }), "Upcoming Roadmap"), !roadmap.upcoming && __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["BadgeLink"], {
    href: "".concat(storage_site__WEBPACK_IMPORTED_MODULE_10__.url.issue, "?title=[").concat(roadmap.title, "] - Title Here"),
    target: "_blank"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHandshake"]
  }), "Suggest Changes")), __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["BadgeLink"], {
    href: "/signup"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_8__["PrimaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"]
  }), "Send me Updates"))), __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["VersionList"], {
    className: "border-bottom"
  }, (roadmap.versions || []).map(function (versionItem) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "".concat(roadmap.url, "/").concat(versionItem),
      passHref: true,
      key: versionItem
    }, __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["VersionLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        active: isActiveRoadmap(versionItem, roadmap.version)
      })
    }, versionItem, " Version"));
  }))), __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["Summary"], null, roadmap.upcoming && __jsx(components_guide_body__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx(UpcomingGuide, null)), !roadmap.upcoming && __jsx("div", {
    className: "container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    src: roadmap.picture
  }), __jsx(components_share_page__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: roadmap.description,
    url: roadmap.url
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadmapSummary);

/***/ }),

/***/ "./components/roadmap-summary/style.js":
/*!*********************************************!*\
  !*** ./components/roadmap-summary/style.js ***!
  \*********************************************/
/*! exports provided: SummaryContainer, Header, Summary, Title, Description, Image, VersionList, VersionLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryContainer", function() { return SummaryContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionList", function() { return VersionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionLink", function() { return VersionLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SummaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__SummaryContainer",
  componentId: "sc-1rroaxc-0"
})([""]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Header",
  componentId: "sc-1rroaxc-1"
})(["text-align:center;padding:45px 30px 55px;"]);
var Summary = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Summary",
  componentId: "sc-1rroaxc-2"
})(["text-align:center;padding:0 0 50px;.container{position:relative;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "style__Title",
  componentId: "sc-1rroaxc-3"
})(["font-weight:700;margin-bottom:12px;font-size:48px;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__Description",
  componentId: "sc-1rroaxc-4"
})(["font-size:16px;color:#444444;"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "style__Image",
  componentId: "sc-1rroaxc-5"
})(["width:100%;"]);
var VersionList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__VersionList",
  componentId: "sc-1rroaxc-6"
})(["margin:35px 0 15px;"]);
var VersionLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "style__VersionLink",
  componentId: "sc-1rroaxc-7"
})(["display:inline-block;position:relative;padding:5px 10px 8px;text-decoration:none;color:rgb(102,102,102);font-size:14px;font-weight:400;text-transform:capitalize;&.active,&.active:hover{color:#2d2d2d;&:after{position:absolute;content:\"\";display:block;height:0;left:9px;right:9px;bottom:-1px;border-bottom:2px solid currentColor;}}&:hover{text-decoration:none;color:#111111;}"]);

/***/ }),

/***/ "./components/share-icon/index.js":
false,

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SharePage = function SharePage(_ref) {
  var url = _ref.url,
      title = _ref.title,
      twitterUsername = _ref.twitterUsername;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareWrap"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareIconsList"], {
    className: "d-sm-none d-md-none d-lg-flex d-xl-flex"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getTwitterShareUrl"])({
      text: "".concat(title, " ").concat(twitterUsername ? "by @".concat(twitterUsername) : ''),
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitterSquare"]
  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getFacebookShareUrl"])({
      text: title,
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookSquare"]
  })), __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareIcon"], {
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

/***/ }),

/***/ "./components/share-page/style.js":
/*!****************************************!*\
  !*** ./components/share-page/style.js ***!
  \****************************************/
/*! exports provided: ShareIconsList, ShareWrap, ShareIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIconsList", function() { return ShareIconsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareWrap", function() { return ShareWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return ShareIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ShareIconsList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ShareIconsList",
  componentId: "t919y-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;position:sticky;top:50px;"]);
var ShareWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ShareWrap",
  componentId: "t919y-1"
})(["display:flex;align-items:center;flex-direction:column;position:absolute;padding:0 0;top:6px;left:-50px;height:100%;"]);
var ShareIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "style__ShareIcon",
  componentId: "t919y-2"
})(["display:block;width:22px;height:22px;margin-bottom:8px;svg{height:22px !important;width:22px !important;color:#757575;transition:all 0.2s;vertical-align:top;}&:hover svg{color:#000000}"]);

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

/***/ "./lib/roadmap.js":
/*!************************!*\
  !*** ./lib/roadmap.js ***!
  \************************/
/*! exports provided: getRequestedRoadmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestedRoadmap", function() { return getRequestedRoadmap; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var storage_roadmaps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! storage/roadmaps */ "./storage/roadmaps.json");
var storage_roadmaps__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/roadmaps */ "./storage/roadmaps.json", 1);









function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


var getRequestedRoadmap = function getRequestedRoadmap(req) {
  // Considering it a new roadmap URL e.g. `/roadmaps/frontend`
  var currentUrl = req.url.replace(/\/$/, ''); // Get the roadmap version out of the URL e.g. `/roadmaps/frontend/2019`

  var _ref = currentUrl.match(/(\d+|latest)$/) || ['latest'],
      _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_ref, 1),
      _ref2$ = _ref2[0],
      foundVersion = _ref2$ === void 0 ? '' : _ref2$;

  var foundVersionRegex = new RegExp("/?".concat(foundVersion, "$")); // Remove version from the URL because urls in roadmaps list don't have versions

  var urlWithoutVersion = currentUrl.replace(foundVersionRegex, '');
  var urlToSlugList = [currentUrl, urlWithoutVersion];
  var foundRoadmap = storage_roadmaps__WEBPACK_IMPORTED_MODULE_8__.find(function (roadmap) {
    return urlToSlugList.includes(roadmap.url);
  });

  if (!foundRoadmap) {
    return null;
  }

  return _objectSpread({}, foundRoadmap, {
    version: foundVersion,
    picture: (foundRoadmap.picture || '').replace('{version}', foundVersion)
  });
};

/***/ }),

/***/ "./lib/url.js":
/*!********************!*\
  !*** ./lib/url.js ***!
  \********************/
/*! exports provided: prefixHost, getTwitterUrl, getTwitterShareUrl, getFacebookShareUrl, getRedditShareUrl, getHnShareUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixHost", function() { return prefixHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterUrl", function() { return getTwitterUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTwitterShareUrl", function() { return getTwitterShareUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFacebookShareUrl", function() { return getFacebookShareUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRedditShareUrl", function() { return getRedditShareUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHnShareUrl", function() { return getHnShareUrl; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);


var prefixHost = function prefixHost(url) {
  // if it starts with forward slash then prefix site URL
  // @todo proper handling of full URLs and trailing slashes
  return /^\//.test(url) ? "".concat(storage_site__WEBPACK_IMPORTED_MODULE_1__.url.web).concat(url) : url;
};
var getTwitterUrl = function getTwitterUrl(username) {
  return "https://twitter.com/".concat(username);
};
var getTwitterShareUrl = function getTwitterShareUrl(_ref) {
  var text = _ref.text,
      url = _ref.url;
  var urlToShare = "".concat(prefixHost(url), "?").concat(query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
    utm_source: 'roadmap.sh',
    utm_campaign: 'share',
    utm_medium: 'twitter'
  }));
  return "https://twitter.com/intent/tweet?text=".concat(text, "&url=").concat(encodeURI(urlToShare));
};
var getFacebookShareUrl = function getFacebookShareUrl(_ref2) {
  var text = _ref2.text,
      url = _ref2.url;
  var urlToShare = "".concat(prefixHost(url), "?").concat(query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
    utm_source: 'roadmap.sh',
    utm_campaign: 'share',
    utm_medium: 'facebook'
  }));
  return "https://www.facebook.com/sharer/sharer.php?quote=".concat(text, "&u=").concat(encodeURI(urlToShare));
};
var getRedditShareUrl = function getRedditShareUrl(_ref3) {
  var text = _ref3.text,
      url = _ref3.url;
  var urlToShare = "".concat(prefixHost(url), "?").concat(query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
    utm_source: 'roadmap.sh',
    utm_campaign: 'share',
    utm_medium: 'reddit'
  }));
  return "https://www.reddit.com/submit?title=".concat(text, "&url=").concat(encodeURI(urlToShare));
};
var getHnShareUrl = function getHnShareUrl(_ref4) {
  var text = _ref4.text,
      url = _ref4.url;
  var urlToShare = "".concat(prefixHost(url), "?").concat(query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({
    utm_source: 'roadmap.sh',
    utm_campaign: 'share',
    utm_medium: 'hn'
  }));
  return "https://news.ycombinator.com/submitlink?t=".concat(text, "&u=").concat(urlToShare);
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArrayLimit(arr, i) {
  if (!(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(arr)) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/object/values.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
false,

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
const decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");
const splitOnFirst = __webpack_require__(/*! split-on-first */ "./node_modules/split-on-first/index.js");

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(',')];
			};

		default:
			return key => (result, value) => {
				if (value === undefined || (options.skipNull && value === null)) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;
				const newValue = isArray ? value.split(',') : value;
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(input, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof input !== 'string') {
		return ret;
	}

	input = input.trim().replace(/^[?#&]/, '');

	if (!input) {
		return ret;
	}

	for (const param of input.split('&')) {
		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none'
	}, options);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = Object.assign({}, object);
	if (options.skipNull) {
		for (const key of Object.keys(objectCopy)) {
			if (objectCopy[key] === undefined || objectCopy[key] === null) {
				delete objectCopy[key];
			}
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (input, options) => {
	return {
		url: removeHash(input).split('?')[0] || '',
		query: parse(extract(input), options)
	};
};


/***/ }),

/***/ "./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ "./pages/[roadmap]/index.js":
/*!**********************************!*\
  !*** ./pages/[roadmap]/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var layouts_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! layouts/default */ "./layouts/default/index.js");
/* harmony import */ var components_site_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/site-nav */ "./components/site-nav/index.js");
/* harmony import */ var components_page_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/page-footer */ "./components/page-footer/index.js");
/* harmony import */ var components_roadmap_summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/roadmap-summary */ "./components/roadmap-summary/index.js");
/* harmony import */ var lib_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/server */ "./lib/server.js");
/* harmony import */ var lib_roadmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/roadmap */ "./lib/roadmap.js");
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Roadmap = function Roadmap(_ref) {
  var roadmap = _ref.roadmap;

  if (!roadmap) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
      statusCode: 404
    });
  }

  return __jsx(layouts_default__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: roadmap.title,
    description: roadmap.description
  }), __jsx(components_site_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(components_roadmap_summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
    roadmap: roadmap
  }), __jsx(components_page_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Roadmap.getInitialProps = Object(lib_server__WEBPACK_IMPORTED_MODULE_6__["serverOnlyProps"])(function (_ref2) {
  var req = _ref2.req;
  return {
    roadmap: Object(lib_roadmap__WEBPACK_IMPORTED_MODULE_7__["getRequestedRoadmap"])(req)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Roadmap);

/***/ }),

/***/ "./storage sync recursive ^\\.\\/.*$":
false,

/***/ "./storage/authors.json":
false,

/***/ "./storage/guides sync recursive ^\\.\\/.*\\.md$":
false,

/***/ "./storage/guides.json":
false,

/***/ "./storage/guides/design-patterns-for-humans.md":
false,

/***/ "./storage/guides/dns-in-one-picture.md":
false,

/***/ "./storage/guides/history-of-javascript.md":
false,

/***/ "./storage/guides/http-caching.md":
false,

/***/ "./storage/guides/journey-to-http2.md":
false,

/***/ "./storage/guides/levels-of-seniority.md":
false,

/***/ "./storage/guides/upcoming.md":
false,

/***/ "./storage/pages/about.md":
false,

/***/ "./storage/project/backend-map.json":
false,

/***/ "./storage/project/devops-map.json":
false,

/***/ "./storage/project/disclaimer.json":
false,

/***/ "./storage/project/frontend-map.json":
false,

/***/ "./storage/project/intro-map.json":
false,

/***/ "./storage/roadmaps.json":
/*!*******************************!*\
  !*** ./storage/roadmaps.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Frontend Developer\",\"description\":\"Step by step guide to becoming a modern frontend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern frontend developer in 2019\",\"url\":\"/frontend\",\"picture\":\"/static/roadmaps/{version}/frontend.png\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"]},{\"title\":\"Backend Developer\",\"description\":\"Step by step guide to becoming a modern backend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern backend developer in 2019\",\"url\":\"/backend\",\"picture\":\"/static/roadmaps/{version}/backend.png\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"]},{\"title\":\"DevOps Roadmap\",\"description\":\"Step by step guide for DevOps or any other Operations Role\",\"featuredDescription\":\"Step by step guide to become an SRE or for any operations role in 2019\",\"url\":\"/devops\",\"picture\":\"/static/roadmaps/{version}/devops.png\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"]},{\"title\":\"Full Stack Developer\",\"description\":\"Step by step guide to becoming a modern full stack developer in 2019\",\"url\":\"/fullstack\",\"upcoming\":true},{\"title\":\"QA Engineer\",\"description\":\"Steps to follow in order to become a modern QA Engineer in 2019\",\"url\":\"/qa-engineer\",\"upcoming\":true}]");

/***/ }),

/***/ "./storage/roadmaps/1-frontend/0-About/0-Summary-detailed.md":
false,

/***/ "./storage/roadmaps/1-frontend/0-About/0-Summary.md":
false,

/***/ "./storage/roadmaps/1-frontend/0-About/1-Skill-Summary.md":
false,

/***/ "./storage/roadmaps/1-frontend/0-About/2-Job-Titles.md":
false,

/***/ "./storage/roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md":
false,

/***/ "./storage/roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md":
false,

/***/ "./storage/roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/1-Job-Ready.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/3-Build-Tools.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/4-Modern-Applications.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/5-Automated-Testing.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md":
false,

/***/ "./storage/roadmaps/1-frontend/2-Learn/8-Go-Beyond.md":
false,

/***/ "./storage/roadmaps/1-frontend/meta.json":
false,

/***/ "./storage/roadmaps/2-backend/0-About/0-Summary.md":
false,

/***/ "./storage/roadmaps/2-backend/1-Landscape/0-Summary.md":
false,

/***/ "./storage/roadmaps/2-backend/1-Landscape/1-Junior.md":
false,

/***/ "./storage/roadmaps/2-backend/1-Landscape/2-Intermediate.md":
false,

/***/ "./storage/roadmaps/2-backend/1-Landscape/3-Senior.md":
false,

/***/ "./storage/roadmaps/2-backend/meta.json":
false,

/***/ "./storage/roadmaps/3-devops/0-About/0-Summary.md":
false,

/***/ "./storage/roadmaps/3-devops/1-Landscape/1-Junior.md":
false,

/***/ "./storage/roadmaps/3-devops/1-Landscape/2-Intermediate.md":
false,

/***/ "./storage/roadmaps/3-devops/1-Landscape/3-Senior.md":
false,

/***/ "./storage/roadmaps/3-devops/meta.json":
false,

/***/ "./storage/roadmaps/4-fullstack/0-About/0-Summary.md":
false,

/***/ "./storage/roadmaps/4-fullstack/meta.json":
false,

/***/ "./storage/roadmaps/5-qa/0-About/0-Summary.md":
false,

/***/ "./storage/roadmaps/5-qa/meta.json":
false,

/***/ "./storage/roadmaps/upcoming.md":
/*!**************************************!*\
  !*** ./storage/roadmaps/upcoming.md ***!
  \**************************************/
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

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Roadmap is not ready yet"), ". Please check back later or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/signup"
  }), "subscribe to get notified"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "While we prepare the roadmap, follow this simple advice to learn anything"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Just ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "pick a project and start working on it"), ", you will learn all that you need along the way.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "\u2192"), " ", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/roadmaps"
  }), "All Roadmaps"), " ", "\xA0", "\u2022", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/guides"
  }), "Programming guides"), " ", "\xA0", "\u2022", "\xA0", " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/signup"
  }), "Subscribe"), " "));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=[roadmap].js.1654d2798619360cab67.hot-update.js.map