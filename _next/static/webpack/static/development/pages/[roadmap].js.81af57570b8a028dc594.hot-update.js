webpackHotUpdate("static/development/pages/[roadmap].js",{

/***/ "./components/detailed-roadmap/index.js":
/*!**********************************************!*\
  !*** ./components/detailed-roadmap/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/detailed-roadmap/style.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var lib_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/url */ "./lib/url.js");
/* harmony import */ var components_share_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/share-icon */ "./components/share-icon/index.js");
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var DetailedRoadmap = function DetailedRoadmap(_ref) {
  var roadmap = _ref.roadmap;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuActive = _useState[0],
      setMenuState = _useState[1];

  var _roadmap$sidebar = roadmap.sidebar,
      sidebar = _roadmap$sidebar === void 0 ? {} : _roadmap$sidebar,
      _roadmap$page = roadmap.page,
      currentPage = _roadmap$page === void 0 ? {} : _roadmap$page,
      _roadmap$author = roadmap.author,
      author = _roadmap$author === void 0 ? {} : _roadmap$author;

  var roadmapPages = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sidebar || {}).map(function (groupTitle) {
    if (groupTitle.startsWith('_')) {
      return;
    }

    return __jsx("div", {
      className: "links-group",
      key: groupTitle
    }, __jsx("h3", null, groupTitle), __jsx("ul", null, sidebar[groupTitle].map(function (page) {
      var isActivePage = page.url === currentPage.url; // e.g. /frontend should mark `/frontend/summary` as active

      var isSummaryPage = page.url === "".concat(currentPage.url, "/summary");
      return __jsx("li", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
          active: isActivePage || isSummaryPage
        }),
        key: page.url
      }, __jsx("a", {
        href: page.url
      }, __jsx("span", {
        className: "bullet"
      }), page.title));
    })));
  });

  var filePath = currentPage.path.replace(/^\//, '');

  var RoadmapContent = __webpack_require__("./storage sync recursive ^\\.\\/.*$")("./".concat(filePath))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["SummaryContainer"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["PageHeader"], {
    className: "border-top border-bottom text-center text-md-left"
  }, __jsx("div", {
    className: "container d-flex align-items-center flex-column flex-md-row"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["RoadmapMeta"], null, __jsx("h3", null, roadmap.title), __jsx("p", null, "Roadmap contributed by ", __jsx("a", {
    href: author.url,
    target: "_blank"
  }, author.name), roadmap.contributorsCount > 1 && " and <a href=\"".concat(roadmap.contributorsUrl, "\">").concat(roadmap.contributorsCount, " others</a>"))), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["ShareRoadmap"], {
    className: "mt-2 mt-md-0"
  }, __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: storage_site__WEBPACK_IMPORTED_MODULE_9__.url.repo,
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithubSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_7__["getFacebookShareUrl"])({
      text: roadmap.title,
      url: roadmap.url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFacebookSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_7__["getTwitterShareUrl"])({
      text: roadmap.title,
      url: roadmap.url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTwitterSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_8__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_7__["getRedditShareUrl"])({
      text: roadmap.title,
      url: roadmap.url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRedditSquare"]
  }))))), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MobileNavHeader"], {
    className: "border-bottom d-block d-md-none"
  }, __jsx("div", {
    className: "container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["SidebarButton"], {
    onClick: function onClick() {
      return setMenuState(function (prevMenuActive) {
        return !prevMenuActive;
      });
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faBars"]
  }), currentPage.title)), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MobileSidebarWrap"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      visible: menuActive
    })
  }, __jsx("div", {
    className: "container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["MobileSidebar"], null, roadmapPages)))), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Summary"], {
    className: "container"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["DesktopSidebarWrap"], {
    className: "d-none d-md-block"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Sidebar"], null, roadmapPages)), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["PageDetail"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["PageTitle"], null, currentPage.title), __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(RoadmapContent, null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailedRoadmap);

/***/ }),

/***/ "./components/detailed-roadmap/style.js":
/*!**********************************************!*\
  !*** ./components/detailed-roadmap/style.js ***!
  \**********************************************/
/*! exports provided: SummaryContainer, Summary, PageHeader, RoadmapMeta, ShareRoadmap, MobileNavHeader, SidebarButton, PageDetail, PageTitle, Sidebar, DesktopSidebarWrap, MobileSidebarWrap, MobileSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryContainer", function() { return SummaryContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeader", function() { return PageHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapMeta", function() { return RoadmapMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareRoadmap", function() { return ShareRoadmap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavHeader", function() { return MobileNavHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarButton", function() { return SidebarButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDetail", function() { return PageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTitle", function() { return PageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopSidebarWrap", function() { return DesktopSidebarWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebarWrap", function() { return MobileSidebarWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileSidebar", function() { return MobileSidebar; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SummaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__SummaryContainer",
  componentId: "rhlp1q-0"
})([""]);
var Summary = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Summary",
  componentId: "rhlp1q-1"
})(["text-align:left;min-height:400px;display:flex;.container{position:relative;}"]);
var PageHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__PageHeader",
  componentId: "rhlp1q-2"
})(["padding-top:20px;padding-bottom:20px;h3{margin-bottom:4px;font-weight:600;font-size:21px;}p{margin-bottom:0;font-size:14px;color:#696969;a{color:#101010;}}"]);
var RoadmapMeta = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__RoadmapMeta",
  componentId: "rhlp1q-3"
})(["flex:1;"]);
var ShareRoadmap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ShareRoadmap",
  componentId: "rhlp1q-4"
})(["display:flex;align-items:center;a{margin-bottom:0;& + a{margin-left:5px;}}"]);
var MobileNavHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MobileNavHeader",
  componentId: "rhlp1q-5"
})(["padding:10px 0;display:flex;align-items:center;position:relative;"]);
var SidebarButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "style__SidebarButton",
  componentId: "rhlp1q-6"
})(["background:transparent;border:none !important;box-shadow:none !important;outline:none !important;-webkit-appearance:none;display:flex;align-items:center;svg{margin-right:10px;}"]);
var PageDetail = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__PageDetail",
  componentId: "rhlp1q-7"
})(["padding:25px 0 100px;"]);
var PageTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "style__PageTitle",
  componentId: "rhlp1q-8"
})(["font-size:40px;font-weight:700;"]);
var Sidebar = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Sidebar",
  componentId: "rhlp1q-9"
})(["padding-bottom:150px;ul{list-style:none;margin:0;padding:0;}.bullet{display:inline-block;margin-right:7px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}.links-group{padding:30px 0 10px;width:260px;h3{font-size:12px;font-weight:600;text-transform:uppercase;padding-left:20px;}}.links-group li{list-style:none;margin:7px 0;a{font-size:14px;font-weight:normal;color:#696969;}.bullet{display:inline-block;margin-right:12px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}&.active a{color:#101010;}&.active .bullet{background:#101010;}}"]);
var DesktopSidebarWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__DesktopSidebarWrap",
  componentId: "rhlp1q-10"
})(["border-left:1px solid #efefef;", "{position:sticky;top:0;background:white;}"], Sidebar);
var MobileSidebarWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__MobileSidebarWrap",
  componentId: "rhlp1q-11"
})(["position:absolute;z-index:999;background:white;width:100%;left:0;bottom:100%;overflow-y:scroll;box-shadow:rgba(0,0,0,0.1) 0 10px 20px;top:calc(100% + 1px);transition:bottom 0.5s ease 0s;&.visible{bottom:-50vh;}"]);
var MobileSidebar = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Sidebar).withConfig({
  displayName: "style__MobileSidebar",
  componentId: "rhlp1q-12"
})(["border-left:1px solid #efefef;margin-left:12px;padding-bottom:20px;.links-group{width:auto;}"]);

/***/ }),

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
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");
/* harmony import */ var components_share_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/share-page */ "./components/share-page/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./components/guide-body/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var GuideBody = function GuideBody(_ref) {
  var guide = _ref.guide;

  var GuideContent = __webpack_require__("./storage/guides sync recursive ^\\.\\/.*\\.md$")("./".concat(guide.fileName, ".md"))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_3__["GuideBodyWrap"], null, __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(GuideContent, null), guide.author && __jsx(components_share_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: guide.title,
    url: guide.url,
    twitterUsername: guide.author.twitter
  })));
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
})(["position:relative;max-width:750px;margin:0 auto;padding:0 20px;min-height:300px;p:first-child,h1,h2,h3,h4,h5,h6,img,blockquote{margin-top:0;}"]);

/***/ }),

/***/ "./components/md-renderer/index.js":
/*!*****************************************!*\
  !*** ./components/md-renderer/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var _mdx_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mdx-components */ "./components/md-renderer/mdx-components/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var MdRenderer = function MdRenderer(props) {
  return __jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__["MDXProvider"], {
    components: _mdx_components__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (MdRenderer);

/***/ }),

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
  return __jsx(Link, {
    href: props.href,
    target: /^http(s)?:\/\//.test(props.href) ? '_blank' : '_self'
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (EnrichedLink);

/***/ }),

/***/ "./components/md-renderer/mdx-components/blockquote.js":
/*!*************************************************************!*\
  !*** ./components/md-renderer/mdx-components/blockquote.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var BlockQuote = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].blockquote.withConfig({
  displayName: "blockquote__BlockQuote",
  componentId: "p7jfb4-0"
})(["padding:16px 20px;position:relative;background:#e8e8e8;border-radius:5px;h1,h2,h3,h4,h5,h6{margin-top:0;}p + h4{margin-top:15px;}p{margin:0;& + p{margin-top:10px;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (BlockQuote);

/***/ }),

/***/ "./components/md-renderer/mdx-components/heading.js":
/*!**********************************************************!*\
  !*** ./components/md-renderer/mdx-components/heading.js ***!
  \**********************************************************/
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
  componentId: "f6ws89-0"
})(["position:absolute;top:0;left:-25px;width:25px;display:none;height:100%;align-items:center;justify-content:flex-start;"]);
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "heading__H1",
  componentId: "f6ws89-1"
})(["position:relative;font-size:42px;font-weight:700;margin:32px 0 10px !important;&:hover ", "{display:flex;}"], HeaderLink);
var H2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h2'
}).withConfig({
  displayName: "heading__H2",
  componentId: "f6ws89-2"
})(["font-size:32px;"]);
var H3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h3'
}).withConfig({
  displayName: "heading__H3",
  componentId: "f6ws89-3"
})(["margin:22px 0 8px;font-size:30px;"]);
var H4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h4'
}).withConfig({
  displayName: "heading__H4",
  componentId: "f6ws89-4"
})(["margin:18px 0 8px;font-size:24px;"]);
var H5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h5'
}).withConfig({
  displayName: "heading__H5",
  componentId: "f6ws89-5"
})(["margin:14px 0 8px;font-size:18px;"]);
var H6 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(H1).attrs({
  as: 'h6'
}).withConfig({
  displayName: "heading__H6",
  componentId: "f6ws89-6"
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

/***/ "./components/md-renderer/mdx-components/iframe.js":
/*!*********************************************************!*\
  !*** ./components/md-renderer/mdx-components/iframe.js ***!
  \*********************************************************/
/*! exports provided: IFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IFrame", function() { return IFrame; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var IFrame = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].iframe.withConfig({
  displayName: "iframe__IFrame",
  componentId: "p4jywl-0"
})(["display:block;width:100%;border:none;margin:30px auto;"]);

/***/ }),

/***/ "./components/md-renderer/mdx-components/img.js":
/*!******************************************************!*\
  !*** ./components/md-renderer/mdx-components/img.js ***!
  \******************************************************/
/*! exports provided: Img */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Img", function() { return Img; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "img__Img",
  componentId: "arv17j-0"
})(["max-width:100%;margin:25px auto;display:block;"]);

/***/ }),

/***/ "./components/md-renderer/mdx-components/index.js":
/*!********************************************************!*\
  !*** ./components/md-renderer/mdx-components/index.js ***!
  \********************************************************/
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
/* harmony import */ var _p__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./p */ "./components/md-renderer/mdx-components/p.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heading */ "./components/md-renderer/mdx-components/heading.js");
/* harmony import */ var _pre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pre */ "./components/md-renderer/mdx-components/pre.js");
/* harmony import */ var _blockquote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blockquote */ "./components/md-renderer/mdx-components/blockquote.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table */ "./components/md-renderer/mdx-components/table.js");
/* harmony import */ var _iframe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iframe */ "./components/md-renderer/mdx-components/iframe.js");
/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./img */ "./components/md-renderer/mdx-components/img.js");
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./a */ "./components/md-renderer/mdx-components/a.js");








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

/***/ "./components/md-renderer/mdx-components/p.js":
/*!****************************************************!*\
  !*** ./components/md-renderer/mdx-components/p.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var P = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "p__P",
  componentId: "sc-1wvqmv1-0"
})(["color:inherit;font-size:16px;font-weight:400;line-height:26px;margin:0 0 12px;img + em{text-align:center;color:#666666;font-style:normal;font-size:14px;margin:5px 0 10px;display:block;}"]);
/* harmony default export */ __webpack_exports__["default"] = (P);

/***/ }),

/***/ "./components/md-renderer/mdx-components/pre.js":
/*!******************************************************!*\
  !*** ./components/md-renderer/mdx-components/pre.js ***!
  \******************************************************/
/*! exports provided: Pre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pre", function() { return Pre; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Pre = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].pre.withConfig({
  displayName: "pre__Pre",
  componentId: "sc-11s8hs3-0"
})(["margin:25px -25px 25px -25px !important;padding:20px 25px !important;border-radius:10px;line-height:1.5 !important;code{background:transparent;}"]);

/***/ }),

/***/ "./components/md-renderer/mdx-components/table.js":
/*!********************************************************!*\
  !*** ./components/md-renderer/mdx-components/table.js ***!
  \********************************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Table = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].table.withConfig({
  displayName: "table__Table",
  componentId: "sc-1t5lyto-0"
})(["border-collapse:separate;width:100%;border-spacing:0;margin:20px 0;th{color:#666;font-size:12px;font-weight:400;background:#FAFAFA;text-transform:uppercase;height:40px;vertical-align:middle;padding:5px 10px;}td{font-size:14px;padding:10px;border-bottom:1px solid #EAEAEA;}"]);

/***/ }),

/***/ "./components/mdx-components/a.js":
false,

/***/ "./components/mdx-components/blockquote.js":
false,

/***/ "./components/mdx-components/heading.js":
false,

/***/ "./components/mdx-components/iframe.js":
false,

/***/ "./components/mdx-components/img.js":
false,

/***/ "./components/mdx-components/index.js":
false,

/***/ "./components/mdx-components/p.js":
false,

/***/ "./components/mdx-components/pre.js":
false,

/***/ "./components/mdx-components/table.js":
false,

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
})(["padding:65px 0;.site-meta{margin-bottom:30px;width:350px;.brand-detail{display:flex;align-items:center;}.brand{display:flex;align-items:center;font-weight:600;color:#000;text-decoration:none;img{height:25px;width:25px;margin-right:8px;}}.preposition{margin:0 7px;}.follow-author{background-color:#1e99e6;border-radius:3px;color:#fff;cursor:pointer;font-size:12px;font-weight:600;line-height:20px;padding:0 6px;white-space:nowrap;text-decoration:none;&:hover{background:#43aaea;}}.brand-explanation{color:#999;p{font-size:15px;line-height:24px;margin:15px 0;}}.meta-links{color:#a3a3a3;font-size:15px;a{color:#000;text-decoration:none;}}}.foot-col{margin-bottom:20px;a{color:#999;}.foot-header{font-weight:500;margin-bottom:7px;}ul{margin:0;padding:0;li{margin-bottom:2px;font-size:15px;list-style:none;margin-left:0;}}}"]);

/***/ }),

/***/ "./components/roadmap-header/index.js":
/*!********************************************!*\
  !*** ./components/roadmap-header/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var components_badges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/badges */ "./components/badges/index.js");
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/roadmap-header/style.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var RoadmapHeader = function RoadmapHeader(_ref) {
  var roadmap = _ref.roadmap;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Header"], {
    className: "border-bottom"
  }, __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Title"], null, roadmap.title), __jsx(_style__WEBPACK_IMPORTED_MODULE_5__["Description"], null, roadmap.description), __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgesList"], {
    className: "mt-4"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "/roadmaps"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["DarkBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowLeft"]
  }), "Other Roadmaps")), roadmap.upcoming && __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "/signup"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faClock"]
  }), "Upcoming Roadmap")), !roadmap.upcoming && __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "".concat(storage_site__WEBPACK_IMPORTED_MODULE_4__.url.issue, "?title=[").concat(roadmap.title, "] - Title Here"),
    target: "_blank"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faHandshake"]
  }), "Suggest Changes")), __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "/signup"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["PrimaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"]
  }), "Send me Updates"))));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadmapHeader);

/***/ }),

/***/ "./components/roadmap-header/style.js":
/*!********************************************!*\
  !*** ./components/roadmap-header/style.js ***!
  \********************************************/
/*! exports provided: Header, Title, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Header = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Header",
  componentId: "sxz3ma-0"
})(["text-align:center;padding:45px 30px 30px;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "style__Title",
  componentId: "sxz3ma-1"
})(["font-weight:700;margin-bottom:12px;font-size:48px;"]);
var Description = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "style__Description",
  componentId: "sxz3ma-2"
})(["font-size:16px;color:#444444;"]);

/***/ }),

/***/ "./components/roadmap-summary/index.js":
/*!*********************************************!*\
  !*** ./components/roadmap-summary/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/roadmap-summary/style.js");
/* harmony import */ var components_guide_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/guide-body */ "./components/guide-body/index.js");
/* harmony import */ var components_roadmap_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/roadmap-header */ "./components/roadmap-header/index.js");
/* harmony import */ var components_share_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/share-page */ "./components/share-page/index.js");
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var RoadmapSummary = function RoadmapSummary(_ref) {
  var roadmap = _ref.roadmap;

  if (roadmap.upcoming) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_roadmap_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      roadmap: roadmap
    }), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["UpcomingContainer"], null, __jsx(components_guide_body__WEBPACK_IMPORTED_MODULE_2__["default"], {
      guide: {
        fileName: 'upcoming'
      }
    })));
  }

  var filePath = roadmap.path.replace(/^\//, '');

  var RoadmapContent = __webpack_require__("./storage sync recursive ^\\.\\/.*$")("./".concat(filePath))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["SummaryContainer"], null, __jsx(components_roadmap_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    roadmap: roadmap
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Summary"], {
    className: "container"
  }, __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(RoadmapContent, null)), __jsx(components_share_page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: roadmap.description,
    url: roadmap.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadmapSummary);

/***/ }),

/***/ "./components/roadmap-summary/style.js":
/*!*********************************************!*\
  !*** ./components/roadmap-summary/style.js ***!
  \*********************************************/
/*! exports provided: SummaryContainer, UpcomingContainer, Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryContainer", function() { return SummaryContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingContainer", function() { return UpcomingContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SummaryContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__SummaryContainer",
  componentId: "sc-1rroaxc-0"
})([""]);
var UpcomingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__UpcomingContainer",
  componentId: "sc-1rroaxc-1"
})(["text-align:center;padding:40px 0 50px;.container{position:relative;}"]);
var Summary = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__Summary",
  componentId: "sc-1rroaxc-2"
})(["margin-top:35px;min-height:400px;display:block;position:relative;text-align:left;"]);

/***/ }),

/***/ "./components/share-icon/index.js":
/*!****************************************!*\
  !*** ./components/share-icon/index.js ***!
  \****************************************/
/*! exports provided: ShareIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return ShareIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ShareIcon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "share-icon__ShareIcon",
  componentId: "sc-1gxg99b-0"
})(["display:block;width:22px;height:22px;margin-bottom:8px;svg{height:22px !important;width:22px !important;color:#757575;transition:all 0.2s;vertical-align:top;}&:hover svg{color:#000000}"]);

/***/ }),

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
/* harmony import */ var components_share_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/share-icon */ "./components/share-icon/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SharePage = function SharePage(_ref) {
  var url = _ref.url,
      title = _ref.title,
      twitterUsername = _ref.twitterUsername;
  return __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareWrap"], null, __jsx(_style__WEBPACK_IMPORTED_MODULE_4__["ShareIconsList"], {
    className: "d-none d-sm-flex"
  }, __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getTwitterShareUrl"])({
      text: "".concat(title, " ").concat(twitterUsername ? "by @".concat(twitterUsername) : ''),
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTwitterSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
    href: Object(lib_url__WEBPACK_IMPORTED_MODULE_3__["getFacebookShareUrl"])({
      text: title,
      url: url
    }),
    target: "_blank"
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faFacebookSquare"]
  })), __jsx(components_share_icon__WEBPACK_IMPORTED_MODULE_5__["ShareIcon"], {
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
/*! exports provided: ShareIconsList, ShareWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIconsList", function() { return ShareIconsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareWrap", function() { return ShareWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var ShareIconsList = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ShareIconsList",
  componentId: "t919y-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;position:sticky;top:50px;"]);
var ShareWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "style__ShareWrap",
  componentId: "t919y-1"
})(["display:flex;align-items:center;flex-direction:column;position:absolute;padding:0 0;top:0;left:-40px;min-height:100%;"]);

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
  }, __jsx("a", {
    className: "d-none d-md-inline-block"
  }, "FAQ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var storage_roadmaps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! storage/roadmaps */ "./storage/roadmaps.json");
var storage_roadmaps__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/roadmaps */ "./storage/roadmaps.json", 1);










function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


var getRequestedRoadmap = function getRequestedRoadmap(req) {
  var normalizedUrl = req.url.replace(/\/$/, '');
  var foundRoadmap = storage_roadmaps__WEBPACK_IMPORTED_MODULE_9__.find(function (roadmap) {
    return normalizedUrl.startsWith(roadmap.url);
  });

  if (!foundRoadmap) {
    return null;
  }

  var roadmapPages = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_8___default()(foundRoadmap.sidebar || {}).reduce(function (acc, menuPages) {
    return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(acc), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_7__["default"])(menuPages));
  }, []);

  var foundPage = roadmapPages.find(function (page) {
    return page.url === normalizedUrl;
  }) || {};
  return _objectSpread({}, foundRoadmap, {
    // Use the current page data or that of the found roadmap i.e. show the summary
    page: {
      title: foundPage.title || foundRoadmap.title,
      url: foundPage.url || foundRoadmap.url,
      path: foundPage.path || foundRoadmap.path
    }
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
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);

var prefixHost = function prefixHost(url) {
  // if it starts with forward slash then prefix site URL
  // @todo proper handling of full URLs and trailing slashes
  return /^\//.test(url) ? "".concat(storage_site__WEBPACK_IMPORTED_MODULE_0__.url.web).concat(url) : url;
};
var getTwitterUrl = function getTwitterUrl(username) {
  return "https://twitter.com/".concat(username);
};
var getTwitterShareUrl = function getTwitterShareUrl(_ref) {
  var text = _ref.text,
      url = _ref.url;
  return "https://twitter.com/intent/tweet?text=".concat(text, "&url=").concat(encodeURI(prefixHost(url)));
};
var getFacebookShareUrl = function getFacebookShareUrl(_ref2) {
  var text = _ref2.text,
      url = _ref2.url;
  return "https://www.facebook.com/sharer/sharer.php?quote=".concat(text, "&u=").concat(encodeURI(prefixHost(url)));
};
var getRedditShareUrl = function getRedditShareUrl(_ref3) {
  var text = _ref3.text,
      url = _ref3.url;
  return "https://www.reddit.com/submit?title=".concat(text, "&url=").concat(encodeURI(prefixHost(url)));
};
var getHnShareUrl = function getHnShareUrl(_ref4) {
  var text = _ref4.text,
      url = _ref4.url;
  return "https://news.ycombinator.com/submitlink?t=".concat(text, "&u=").concat(prefixHost(url));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "./node_modules/core-js/library/fn/object/values.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/values.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/values.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.values */ "./node_modules/core-js/library/modules/es7.object.values.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.values;


/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-to-array.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-to-array.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/es7.object.values.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.values.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/library/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
false,

/***/ "./node_modules/query-string/index.js":
false,

/***/ "./node_modules/split-on-first/index.js":
false,

/***/ "./node_modules/strict-uri-encode/index.js":
false,

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
/* harmony import */ var lib_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/server */ "./lib/server.js");
/* harmony import */ var lib_roadmap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/roadmap */ "./lib/roadmap.js");
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");
/* harmony import */ var components_roadmap_summary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/roadmap-summary */ "./components/roadmap-summary/index.js");
/* harmony import */ var components_detailed_roadmap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/detailed-roadmap */ "./components/detailed-roadmap/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Roadmap = function Roadmap(_ref) {
  var roadmap = _ref.roadmap;

  if (!roadmap) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_1___default.a, {
      statusCode: 404
    });
  }

  var showSummary = roadmap.upcoming || !roadmap.detailed;
  return __jsx(layouts_default__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: roadmap.title,
    description: roadmap.description
  }), __jsx(components_site_nav__WEBPACK_IMPORTED_MODULE_3__["default"], null), showSummary ? __jsx(components_roadmap_summary__WEBPACK_IMPORTED_MODULE_8__["default"], {
    roadmap: roadmap
  }) : __jsx(components_detailed_roadmap__WEBPACK_IMPORTED_MODULE_9__["default"], {
    roadmap: roadmap
  }), __jsx(components_page_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

Roadmap.getInitialProps = Object(lib_server__WEBPACK_IMPORTED_MODULE_5__["serverOnlyProps"])(function (_ref2) {
  var req = _ref2.req;
  return {
    roadmap: Object(lib_roadmap__WEBPACK_IMPORTED_MODULE_6__["getRequestedRoadmap"])(req)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (Roadmap);

/***/ }),

/***/ "./storage sync recursive ^\\.\\/.*$":
/*!*******************************!*\
  !*** ./storage sync ^\.\/.*$ ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authors": "./storage/authors.json",
	"./authors.json": "./storage/authors.json",
	"./guides": "./storage/guides.json",
	"./guides.json": "./storage/guides.json",
	"./guides/design-patterns-for-humans.md": "./storage/guides/design-patterns-for-humans.md",
	"./guides/dns-in-one-picture.md": "./storage/guides/dns-in-one-picture.md",
	"./guides/history-of-javascript.md": "./storage/guides/history-of-javascript.md",
	"./guides/http-caching.md": "./storage/guides/http-caching.md",
	"./guides/journey-to-http2.md": "./storage/guides/journey-to-http2.md",
	"./guides/levels-of-seniority.md": "./storage/guides/levels-of-seniority.md",
	"./guides/upcoming.md": "./storage/guides/upcoming.md",
	"./pages/about.md": "./storage/pages/about.md",
	"./project/backend-map": "./storage/project/backend-map.json",
	"./project/backend-map.json": "./storage/project/backend-map.json",
	"./project/devops-map": "./storage/project/devops-map.json",
	"./project/devops-map.json": "./storage/project/devops-map.json",
	"./project/disclaimer": "./storage/project/disclaimer.json",
	"./project/disclaimer.json": "./storage/project/disclaimer.json",
	"./project/frontend-map": "./storage/project/frontend-map.json",
	"./project/frontend-map.json": "./storage/project/frontend-map.json",
	"./project/intro-map": "./storage/project/intro-map.json",
	"./project/intro-map.json": "./storage/project/intro-map.json",
	"./roadmaps": "./storage/roadmaps.json",
	"./roadmaps.json": "./storage/roadmaps.json",
	"./roadmaps/1-frontend/0-About/0-Summary-detailed.md": "./storage/roadmaps/1-frontend/0-About/0-Summary-detailed.md",
	"./roadmaps/1-frontend/0-About/0-Summary.md": "./storage/roadmaps/1-frontend/0-About/0-Summary.md",
	"./roadmaps/1-frontend/0-About/1-Skill-Summary.md": "./storage/roadmaps/1-frontend/0-About/1-Skill-Summary.md",
	"./roadmaps/1-frontend/0-About/2-Job-Titles.md": "./storage/roadmaps/1-frontend/0-About/2-Job-Titles.md",
	"./roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md": "./storage/roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md",
	"./roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md": "./storage/roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md",
	"./roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md": "./storage/roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md",
	"./roadmaps/1-frontend/2-Learn/1-Job-Ready.md": "./storage/roadmaps/1-frontend/2-Learn/1-Job-Ready.md",
	"./roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md": "./storage/roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md",
	"./roadmaps/1-frontend/2-Learn/3-Build-Tools.md": "./storage/roadmaps/1-frontend/2-Learn/3-Build-Tools.md",
	"./roadmaps/1-frontend/2-Learn/4-Modern-Applications.md": "./storage/roadmaps/1-frontend/2-Learn/4-Modern-Applications.md",
	"./roadmaps/1-frontend/2-Learn/5-Automated-Testing.md": "./storage/roadmaps/1-frontend/2-Learn/5-Automated-Testing.md",
	"./roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md": "./storage/roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md",
	"./roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md": "./storage/roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md",
	"./roadmaps/1-frontend/2-Learn/8-Go-Beyond.md": "./storage/roadmaps/1-frontend/2-Learn/8-Go-Beyond.md",
	"./roadmaps/1-frontend/meta": "./storage/roadmaps/1-frontend/meta.json",
	"./roadmaps/1-frontend/meta.json": "./storage/roadmaps/1-frontend/meta.json",
	"./roadmaps/2-backend/0-About/0-Summary.md": "./storage/roadmaps/2-backend/0-About/0-Summary.md",
	"./roadmaps/2-backend/1-Landscape/0-Summary.md": "./storage/roadmaps/2-backend/1-Landscape/0-Summary.md",
	"./roadmaps/2-backend/1-Landscape/1-Junior.md": "./storage/roadmaps/2-backend/1-Landscape/1-Junior.md",
	"./roadmaps/2-backend/1-Landscape/2-Intermediate.md": "./storage/roadmaps/2-backend/1-Landscape/2-Intermediate.md",
	"./roadmaps/2-backend/1-Landscape/3-Senior.md": "./storage/roadmaps/2-backend/1-Landscape/3-Senior.md",
	"./roadmaps/2-backend/meta": "./storage/roadmaps/2-backend/meta.json",
	"./roadmaps/2-backend/meta.json": "./storage/roadmaps/2-backend/meta.json",
	"./roadmaps/3-devops/0-About/0-Summary.md": "./storage/roadmaps/3-devops/0-About/0-Summary.md",
	"./roadmaps/3-devops/1-Landscape/1-Junior.md": "./storage/roadmaps/3-devops/1-Landscape/1-Junior.md",
	"./roadmaps/3-devops/1-Landscape/2-Intermediate.md": "./storage/roadmaps/3-devops/1-Landscape/2-Intermediate.md",
	"./roadmaps/3-devops/1-Landscape/3-Senior.md": "./storage/roadmaps/3-devops/1-Landscape/3-Senior.md",
	"./roadmaps/3-devops/meta": "./storage/roadmaps/3-devops/meta.json",
	"./roadmaps/3-devops/meta.json": "./storage/roadmaps/3-devops/meta.json",
	"./roadmaps/4-fullstack/0-About/0-Summary.md": "./storage/roadmaps/4-fullstack/0-About/0-Summary.md",
	"./roadmaps/4-fullstack/meta": "./storage/roadmaps/4-fullstack/meta.json",
	"./roadmaps/4-fullstack/meta.json": "./storage/roadmaps/4-fullstack/meta.json",
	"./roadmaps/5-qa/0-About/0-Summary.md": "./storage/roadmaps/5-qa/0-About/0-Summary.md",
	"./roadmaps/5-qa/meta": "./storage/roadmaps/5-qa/meta.json",
	"./roadmaps/5-qa/meta.json": "./storage/roadmaps/5-qa/meta.json",
	"./site": "./storage/site.json",
	"./site.json": "./storage/site.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./storage sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./storage/guides sync recursive ^\\.\\/.*\\.md$":
/*!******************************************!*\
  !*** ./storage/guides sync ^\.\/.*\.md$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./design-patterns-for-humans.md": "./storage/guides/design-patterns-for-humans.md",
	"./dns-in-one-picture.md": "./storage/guides/dns-in-one-picture.md",
	"./history-of-javascript.md": "./storage/guides/history-of-javascript.md",
	"./http-caching.md": "./storage/guides/http-caching.md",
	"./journey-to-http2.md": "./storage/guides/journey-to-http2.md",
	"./levels-of-seniority.md": "./storage/guides/levels-of-seniority.md",
	"./upcoming.md": "./storage/guides/upcoming.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./storage/guides sync recursive ^\\.\\/.*\\.md$";

/***/ }),

/***/ "./storage/guides/upcoming.md":
/*!************************************!*\
  !*** ./storage/guides/upcoming.md ***!
  \************************************/
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

/***/ }),

/***/ "./storage/pages/about.md":
/*!********************************!*\
  !*** ./storage/pages/about.md ***!
  \********************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "What is roadmap.sh?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Roadmap.sh is the place containing community curated roadmaps, study plans, paths and resources for the budding developers. It started as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/developer-roadmap"
  }), "set of charts to guide the developers"), " who are confused about what should they learn next but that alone wasn't enough so I expanded it into the website to get more contributors involved."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "What are the plans for roadmap.sh?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The website started off as a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/developer-roadmap"
  }), "simple repository containing a few charts"), " for developers and based on my personal opinions but it could have been much more than that so I decided to expand it to a website where people can contribute to study plans with their areas of expertise as well, add more roadmaps, write guides etc. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "We haven't opened up the sign ups for now but we will be doing. My long term plans for this website are to turn it into a goto place for the developers to seek guidance about their careers, help others, share their journeys, incentivize the learnings, get feedbacks on their projects etc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "How did you build roadmap.sh?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The basic version of the website has been built with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/zeit/next.js/"
  }), "Next.js"), ", is opensource and can be found on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/roadmap.sh"
  }), "github"), ". It was hastily done to get it out in front of the people and get people to start contributing so it might be rough on the edges, but that is where we need your help."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "How does it make money?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It doesn't make any money. I have been using my personal time and budget to build it. I did not create this website with any intentions of monetization but as a good will, to help the people get out of the frustration that I was once in. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Having said that, I love teaching and my future plans are to be able to work full-time on roadmap.sh for which it has to make enough money to pay for my rent, groceries, bills, travel expenses, etc but even if it doesn't it's likely I'll continue growing the site however I can. My focus at the moment is not making money from it and just add content that creates value for the people."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Sponsor the efforts by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "http://gum.co/roadmap-sh"
  }), "paying as little as 3$ per month"), " or with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://paypal.me/kamranahmedse"
  }), "one time payment via paypal"), ". Alternatively, reach out to me at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "mailto:kamran@roadmap.sh"
  }), "kamran@roadmap.sh"), ".")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Can I contribute?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You definitely can, infact you are encouraged to do that. Even your minor contributions such as typo fixes count. The source code of the website can be ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/roadmap.sh"
  }), "found on Github"), ". Your contributions can be: "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Adding a new roadmap"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Updating existing roadmap"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Suggesting changes to the existing roadmaps"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Writing a Guide"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Updating an existing guide"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Fixing grammar mistakes, typos on the website or the content"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Updating the UI of the website"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Refactoring the codebase"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Becoming a sponsor")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Just make sure to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/kamranahmedse/roadmap.sh/tree/master/contributing"
  }), "follow the contribution guidelines"), " when you decide to contribute. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Can I redistribute the content?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "No, the license of the content on this website does not allow you to redistribute any of the content on this website anywhere. You can use it for personal use or share the link to the content if you have to but redistribution is not allowed."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "What is the best way to contact you?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Tweet or send me a message ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com/kamranahmedse"
  }), "@kamranahmedse"), " or email me at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "kamran@roadmap.sh"
  }), "kamran@roadmap.sh"), ". I get lots of messages so apologies in advance if you don't hear back from me soon but I do reply to everyone."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/project/backend-map.json":
/*!******************************************!*\
  !*** ./storage/project/backend-map.json ***!
  \******************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"109\",\"measuredH\":\"108\",\"measuredW\":\"124\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":108,\"x\":0,\"y\":108},\"p1\":{\"length\":0.5365262536126774,\"x\":0.4770542904147544,\"y\":0.24551909256212656},\"p2\":{\"length\":124.00403219250576,\"x\":124,\"y\":1},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"125\",\"x\":\"629\",\"y\":\"3237\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"h\":\"43\",\"measuredH\":\"42\",\"measuredW\":\"187\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":187,\"x\":187,\"y\":0},\"p1\":{\"length\":0.4575280110556166,\"x\":0.4575163398692811,\"y\":-0.0032679738562091947},\"p2\":{\"length\":42,\"x\":0,\"y\":42},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"188\",\"x\":\"577\",\"y\":\"3064\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"h\":\"18\",\"measuredH\":\"17\",\"measuredW\":\"199\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":199,\"x\":199,\"y\":0},\"p1\":{\"length\":0.4575280110556166,\"x\":0.4575163398692811,\"y\":-0.003267973856209203},\"p2\":{\"length\":17,\"x\":0,\"y\":17},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"200\",\"x\":\"577\",\"y\":\"3052\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"h\":\"8\",\"measuredH\":\"7\",\"measuredW\":\"229\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":229.10696191953664,\"x\":229,\"y\":7},\"p1\":{\"length\":0.4575280110556166,\"x\":0.4575163398692811,\"y\":-0.0032679738562092003},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"230\",\"x\":\"569\",\"y\":\"3036\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"h\":\"32\",\"measuredH\":\"31\",\"measuredW\":\"212\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":214.2545215392198,\"x\":212,\"y\":31},\"p1\":{\"length\":0.4575280110556167,\"x\":0.4575163398692812,\"y\":-0.003267973856209213},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"213\",\"x\":\"576\",\"y\":\"3002\",\"zOrder\":\"4\"},{\"ID\":\"5\",\"h\":\"91\",\"measuredH\":\"90\",\"measuredW\":\"97\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":1,\"x\":1,\"y\":0},\"p1\":{\"length\":0.5311393716427282,\"x\":0.47054747054747054,\"y\":-0.24636174636174635},\"p2\":{\"length\":132.32157798333574,\"x\":97,\"y\":90},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"98\",\"x\":\"659\",\"y\":\"2865\",\"zOrder\":\"5\"},{\"ID\":\"6\",\"h\":\"13\",\"measuredH\":\"12\",\"measuredW\":\"208\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":208.34586628968668,\"x\":208,\"y\":12},\"p1\":{\"length\":0.42287307048293654,\"x\":0.4228667507356033,\"y\":0.002311895754518708},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"209\",\"x\":\"565\",\"y\":\"2501\",\"zOrder\":\"6\"},{\"ID\":\"7\",\"h\":\"13\",\"measuredH\":\"12\",\"measuredW\":\"206\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":206,\"x\":206,\"y\":0},\"p1\":{\"length\":0.4228730704829363,\"x\":0.4228667507356031,\"y\":0.002311895754518704},\"p2\":{\"length\":12,\"x\":0,\"y\":12},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"207\",\"x\":\"577\",\"y\":\"2523\",\"zOrder\":\"7\"},{\"ID\":\"8\",\"h\":\"49\",\"measuredH\":\"48\",\"measuredW\":\"207\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":207,\"x\":207,\"y\":0},\"p1\":{\"length\":0.4228730704829362,\"x\":0.422866750735603,\"y\":0.0023118957545186923},\"p2\":{\"length\":48,\"x\":0,\"y\":48},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"208\",\"x\":\"581\",\"y\":\"2525\",\"zOrder\":\"8\"},{\"ID\":\"9\",\"h\":\"46\",\"measuredH\":\"45\",\"measuredW\":\"199\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":204.0245083317198,\"x\":199,\"y\":45},\"p1\":{\"length\":0.4228730704829365,\"x\":0.42286675073560326,\"y\":0.0023118957545186824},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"200\",\"x\":\"585\",\"y\":\"2463\",\"zOrder\":\"9\"},{\"ID\":\"10\",\"h\":\"72\",\"measuredH\":\"71\",\"measuredW\":\"183\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":196.29060089571277,\"x\":183,\"y\":71},\"p1\":{\"length\":0.4228730704829365,\"x\":0.42286675073560326,\"y\":0.002311895754518694},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"184\",\"x\":\"591\",\"y\":\"2427\",\"zOrder\":\"10\"},{\"ID\":\"11\",\"h\":\"16\",\"measuredH\":\"15\",\"measuredW\":\"161\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":161.69724796668618,\"x\":161,\"y\":15},\"p1\":{\"length\":0.45752801105561647,\"x\":0.457516339869281,\"y\":-0.0032679738562091465},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"162\",\"x\":\"747\",\"y\":\"2854\",\"zOrder\":\"11\"},{\"ID\":\"12\",\"h\":\"10\",\"measuredH\":\"9\",\"measuredW\":\"161\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":161,\"x\":161,\"y\":0},\"p1\":{\"length\":0.4575280110556166,\"x\":0.4575163398692811,\"y\":-0.003267973856209141},\"p2\":{\"length\":9,\"x\":0,\"y\":9},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"162\",\"x\":\"747\",\"y\":\"2833\",\"zOrder\":\"12\"},{\"ID\":\"13\",\"h\":\"29\",\"measuredH\":\"28\",\"measuredW\":\"148\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":148,\"x\":148,\"y\":0},\"p1\":{\"length\":0.4575280110556166,\"x\":0.4575163398692811,\"y\":-0.003267973856209201},\"p2\":{\"length\":28,\"x\":0,\"y\":28},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"149\",\"x\":\"744\",\"y\":\"2799\",\"zOrder\":\"13\"},{\"ID\":\"14\",\"h\":\"5\",\"measuredH\":\"4\",\"measuredW\":\"157\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":157.05094714773293,\"x\":157,\"y\":4},\"p1\":{\"length\":0.4736507882897012,\"x\":0.47363590855998666,\"y\":-0.003754380110128481},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"158\",\"x\":\"748\",\"y\":\"2704\",\"zOrder\":\"14\"},{\"ID\":\"15\",\"h\":\"19\",\"measuredH\":\"18\",\"measuredW\":\"168\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":168,\"x\":168,\"y\":0},\"p1\":{\"length\":0.4228730704829364,\"x\":0.4228667507356032,\"y\":0.0023118957545187053},\"p2\":{\"length\":18,\"x\":0,\"y\":18},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"169\",\"x\":\"728\",\"y\":\"2675\",\"zOrder\":\"15\"},{\"ID\":\"16\",\"h\":\"45\",\"measuredH\":\"44\",\"measuredW\":\"373\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":373.1340241789805,\"x\":373,\"y\":10},\"p1\":{\"length\":0.5595495431784525,\"x\":0.5494401310071895,\"y\":0.10588311343182816},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"374\",\"x\":\"387\",\"y\":\"2312\",\"zOrder\":\"16\"},{\"ID\":\"17\",\"h\":\"14\",\"measuredH\":\"13\",\"measuredW\":\"142\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":142.5938287584705,\"x\":142,\"y\":13},\"p1\":{\"length\":0.5359270689590179,\"x\":0.535877637338317,\"y\":-0.007278807849309005},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"143\",\"x\":\"622\",\"y\":\"2283\",\"zOrder\":\"17\"},{\"ID\":\"18\",\"h\":\"12\",\"measuredH\":\"11\",\"measuredW\":\"162\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":162,\"x\":162,\"y\":0},\"p1\":{\"length\":0.49103871661426146,\"x\":0.4910385289593246,\"y\":0.000429292025900624},\"p2\":{\"length\":11,\"x\":0,\"y\":11},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"163\",\"x\":\"613\",\"y\":\"2305\",\"zOrder\":\"18\"},{\"ID\":\"19\",\"h\":\"95\",\"measuredH\":\"94\",\"measuredW\":\"73\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":94,\"x\":0,\"y\":94},\"p1\":{\"length\":0.49294349912401414,\"x\":0.4552770914225203,\"y\":-0.1889869396399577},\"p2\":{\"length\":73,\"x\":73,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"74\",\"x\":\"739\",\"y\":\"2554\",\"zOrder\":\"19\"},{\"ID\":\"20\",\"h\":\"103\",\"measuredH\":\"102\",\"measuredW\":\"106\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":147.10540438746634,\"x\":106,\"y\":102},\"p1\":{\"length\":0.40077676963354736,\"x\":0.3841414944356122,\"y\":-0.11426868044515102},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"107\",\"x\":\"692\",\"y\":\"2165\",\"zOrder\":\"20\"},{\"ID\":\"21\",\"h\":\"13\",\"measuredH\":\"12\",\"measuredW\":\"214\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":214.1494805036893,\"x\":214,\"y\":8},\"p1\":{\"length\":0.5155229847842392,\"x\":0.5140765687406936,\"y\":0.03859053397720475},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"215\",\"x\":\"683\",\"y\":\"2161\",\"zOrder\":\"21\"},{\"ID\":\"22\",\"h\":\"101\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"Canvas\",\"w\":\"591\",\"x\":\"793\",\"y\":\"2119\",\"zOrder\":\"22\"},{\"ID\":\"23\",\"h\":\"6\",\"measuredH\":\"5\",\"measuredW\":\"86\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":86,\"x\":86,\"y\":0},\"p1\":{\"length\":0.515522984784239,\"x\":0.5140765687406934,\"y\":0.03859053397720476},\"p2\":{\"length\":4,\"x\":0,\"y\":4},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"87\",\"x\":\"717\",\"y\":\"1932\",\"zOrder\":\"23\"},{\"ID\":\"24\",\"h\":\"56\",\"measuredH\":\"55\",\"measuredW\":\"68\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":68,\"x\":68,\"y\":0},\"p1\":{\"length\":0.48211507364727585,\"x\":0.4585501858736059,\"y\":0.14888475836431225},\"p2\":{\"length\":55,\"x\":0,\"y\":55},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"69\",\"x\":\"721\",\"y\":\"1852\",\"zOrder\":\"24\"},{\"ID\":\"25\",\"h\":\"10\",\"measuredH\":\"9\",\"measuredW\":\"85\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":85.47514258543241,\"x\":85,\"y\":9},\"p1\":{\"length\":0.5155229847842391,\"x\":0.5140765687406935,\"y\":0.03859053397720476},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"86\",\"x\":\"715\",\"y\":\"1811\",\"zOrder\":\"25\"},{\"ID\":\"26\",\"h\":\"59\",\"measuredH\":\"58\",\"measuredW\":\"86\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.4713955797207152,\"x\":0.4275092936802974,\"y\":-0.1986192246415295},\"p2\":{\"length\":103.73041983911952,\"x\":86,\"y\":58},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"87\",\"x\":\"716\",\"y\":\"1692\",\"zOrder\":\"26\"},{\"ID\":\"27\",\"h\":\"2\",\"measuredH\":\"1\",\"measuredW\":\"71\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":1,\"x\":0,\"y\":1},\"p1\":{\"length\":0.5210750794247037,\"x\":0.5210234034113446,\"y\":-0.007338357794525981},\"p2\":{\"length\":71,\"x\":71,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"72\",\"x\":\"727\",\"y\":\"1620\",\"zOrder\":\"27\"},{\"ID\":\"28\",\"h\":\"49\",\"measuredH\":\"48\",\"measuredW\":\"98\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":109.12378292562992,\"x\":98,\"y\":48},\"p1\":{\"length\":0.5155229847842391,\"x\":0.5140765687406935,\"y\":0.03859053397720475},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"99\",\"x\":\"698\",\"y\":\"1539\",\"zOrder\":\"28\"},{\"ID\":\"29\",\"h\":\"75\",\"measuredH\":\"74\",\"measuredW\":\"8\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":74,\"x\":0,\"y\":74},\"p1\":{\"length\":0.41407298502930623,\"x\":0.4104031209362818,\"y\":-0.05500650195058516},\"p2\":{\"length\":8,\"x\":8,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"9\",\"x\":\"975\",\"y\":\"1492\",\"zOrder\":\"29\"},{\"ID\":\"30\",\"h\":\"84\",\"measuredH\":\"83\",\"measuredW\":\"8\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":8,\"x\":8,\"y\":0},\"p1\":{\"length\":0.5155229847842391,\"x\":0.5140765687406935,\"y\":0.038590533977204765},\"p2\":{\"length\":83,\"x\":0,\"y\":83},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"9\",\"x\":\"978\",\"y\":\"1320\",\"zOrder\":\"30\"},{\"ID\":\"31\",\"h\":\"15\",\"measuredH\":\"14\",\"measuredW\":\"100\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":9,\"x\":0,\"y\":9},\"p1\":{\"length\":0.46084674701434847,\"x\":0.4518400952286479,\"y\":-0.09066560857057832},\"p2\":{\"length\":100,\"x\":100,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"101\",\"x\":\"713\",\"y\":\"1439\",\"zOrder\":\"31\"},{\"ID\":\"32\",\"h\":\"92\",\"measuredH\":\"91\",\"measuredW\":\"133\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":91,\"x\":0,\"y\":91},\"p1\":{\"length\":0.3041860547783792,\"x\":0.2998344944382434,\"y\":-0.051268234479042475},\"p2\":{\"length\":133,\"x\":133,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"134\",\"x\":\"406\",\"y\":\"452\",\"zOrder\":\"32\"},{\"ID\":\"33\",\"h\":\"93\",\"measuredH\":\"92\",\"measuredW\":\"67\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":92.04890004774636,\"x\":3,\"y\":92},\"p1\":{\"length\":0.42540726084496694,\"x\":0.3850318471337579,\"y\":0.18089171974522292},\"p2\":{\"length\":67,\"x\":67,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"68\",\"x\":\"512\",\"y\":\"1139\",\"zOrder\":\"33\"},{\"ID\":\"34\",\"h\":\"23\",\"measuredH\":\"22\",\"measuredW\":\"145\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":22,\"x\":0,\"y\":22},\"p1\":{\"length\":0.5188215280466648,\"x\":0.5177460050462573,\"y\":-0.033389402859545836},\"p2\":{\"length\":145,\"x\":145,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"146\",\"x\":\"708\",\"y\":\"1019\",\"zOrder\":\"34\"},{\"ID\":\"35\",\"h\":\"123\",\"measuredH\":\"122\",\"measuredW\":\"118\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":118,\"x\":118,\"y\":0},\"p1\":{\"length\":0.5240000652931175,\"x\":0.5006130932798994,\"y\":0.1547985764273111},\"p2\":{\"length\":122,\"x\":0,\"y\":122},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"119\",\"x\":\"686\",\"y\":\"912\",\"zOrder\":\"35\"},{\"ID\":\"36\",\"h\":\"53\",\"measuredH\":\"52\",\"measuredW\":\"87\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":87,\"x\":87,\"y\":0},\"p1\":{\"length\":0.44445582863379945,\"x\":0.44426229508196713,\"y\":-0.013114754098360664},\"p2\":{\"length\":52,\"x\":0,\"y\":52},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"88\",\"x\":\"692\",\"y\":\"893\",\"zOrder\":\"36\"},{\"ID\":\"37\",\"h\":\"187\",\"measuredH\":\"186\",\"measuredW\":\"91\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":207.06762180505189,\"x\":91,\"y\":186},\"p1\":{\"length\":0.4899708901095371,\"x\":0.47500275367462585,\"y\":-0.12018259922407568},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"92\",\"x\":\"720\",\"y\":\"661\",\"zOrder\":\"37\"},{\"ID\":\"38\",\"h\":\"83\",\"measuredH\":\"82\",\"measuredW\":\"47\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":82.00609733428362,\"x\":1,\"y\":82},\"p1\":{\"length\":0.4500179451633659,\"x\":0.4278136688201293,\"y\":0.1396123767426046},\"p2\":{\"length\":47,\"x\":47,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"48\",\"x\":\"407\",\"y\":\"667\",\"zOrder\":\"38\"},{\"ID\":\"39\",\"h\":\"165\",\"measuredH\":\"164\",\"measuredW\":\"36\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":167.90473489452285,\"x\":36,\"y\":164},\"p1\":{\"length\":0.507292931309427,\"x\":0.4701515620167028,\"y\":0.1905351067120322},\"p2\":{\"length\":27,\"x\":27,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"37\",\"x\":\"666\",\"y\":\"451\",\"zOrder\":\"39\"},{\"ID\":\"40\",\"h\":\"255\",\"measuredH\":\"254\",\"measuredW\":\"78\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":4,\"x\":4,\"y\":0},\"p1\":{\"length\":0.4752342503759217,\"x\":0.4639175257731955,\"y\":-0.1030927835051546},\"p2\":{\"length\":265.70660511172844,\"x\":78,\"y\":254},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"79\",\"x\":\"819\",\"y\":\"302\",\"zOrder\":\"40\"},{\"ID\":\"41\",\"h\":\"60\",\"measuredH\":\"59\",\"measuredW\":\"127\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":59,\"x\":0,\"y\":59},\"p1\":{\"length\":0.5353036210999189,\"x\":0.5349434965654775,\"y\":0.019632173720363407},\"p2\":{\"length\":127,\"x\":127,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"128\",\"x\":\"407\",\"y\":\"444\",\"zOrder\":\"41\"},{\"ID\":\"42\",\"h\":\"61\",\"measuredH\":\"60\",\"measuredW\":\"88\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":106.50821564555478,\"x\":88,\"y\":60},\"p1\":{\"length\":0.642302803509632,\"x\":0.6410437235543018,\"y\":-0.04019746121297602},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"89\",\"x\":\"917\",\"y\":\"451\",\"zOrder\":\"42\"},{\"ID\":\"43\",\"h\":\"20\",\"measuredH\":\"19\",\"measuredW\":\"84\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":86.12200647918046,\"x\":84,\"y\":19},\"p1\":{\"length\":0.49440717248478033,\"x\":0.4935957934474855,\"y\":0.02831333423216934},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"85\",\"x\":\"919\",\"y\":\"441\",\"zOrder\":\"43\"},{\"ID\":\"44\",\"h\":\"138\",\"measuredH\":\"137\",\"measuredW\":\"140\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":2,\"x\":0,\"y\":2},\"p1\":{\"length\":0.2759238150891552,\"x\":0.26833582265545164,\"y\":0.06426381573775647},\"p2\":{\"length\":195.88006534611935,\"x\":140,\"y\":137},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"141\",\"x\":\"403\",\"y\":\"270\",\"zOrder\":\"44\"},{\"ID\":\"45\",\"h\":\"16\",\"measuredH\":\"15\",\"measuredW\":\"152\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":15,\"x\":0,\"y\":15},\"p1\":{\"length\":0.27592381508915526,\"x\":0.2683358226554517,\"y\":0.0642638157377565},\"p2\":{\"length\":152.0131573252789,\"x\":152,\"y\":2},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"153\",\"x\":\"392\",\"y\":\"400\",\"zOrder\":\"45\"},{\"ID\":\"46\",\"h\":\"60\",\"measuredH\":\"59\",\"measuredW\":\"151\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":59.00847396772772,\"x\":1,\"y\":59},\"p1\":{\"length\":0.27592381508915514,\"x\":0.26833582265545164,\"y\":0.06426381573775611},\"p2\":{\"length\":151,\"x\":151,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"152\",\"x\":\"396\",\"y\":\"402\",\"zOrder\":\"46\"},{\"ID\":\"47\",\"h\":\"46\",\"measuredH\":\"45\",\"measuredW\":\"151\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":5,\"x\":0,\"y\":5},\"p1\":{\"length\":0.2759238150891552,\"x\":0.26833582265545164,\"y\":0.06426381573775647},\"p2\":{\"length\":157.56268593801008,\"x\":151,\"y\":45},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"152\",\"x\":\"398\",\"y\":\"361\",\"zOrder\":\"47\"},{\"ID\":\"48\",\"h\":\"86\",\"measuredH\":\"85\",\"measuredW\":\"140\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":3,\"x\":0,\"y\":3},\"p1\":{\"length\":0.2759238150891552,\"x\":0.26833582265545164,\"y\":0.06426381573775647},\"p2\":{\"length\":163.783393541592,\"x\":140,\"y\":85},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"141\",\"x\":\"402\",\"y\":\"319\",\"zOrder\":\"48\"},{\"ID\":\"49\",\"h\":\"36\",\"measuredH\":\"35\",\"measuredW\":\"76\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":83.6719785830358,\"x\":76,\"y\":35},\"p1\":{\"length\":0.5005353511651633,\"x\":0.4949292958148836,\"y\":-0.07470361376946151},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"77\",\"x\":\"924\",\"y\":\"368\",\"zOrder\":\"49\"},{\"ID\":\"50\",\"h\":\"101\",\"measuredH\":\"100\",\"measuredW\":\"81\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":81.00617260431454,\"x\":81,\"y\":1},\"p1\":{\"length\":0.2722777833333223,\"x\":0.266776677667767,\"y\":-0.05445544554455441},\"p2\":{\"length\":100,\"x\":0,\"y\":100},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"82\",\"x\":\"914\",\"y\":\"263\",\"zOrder\":\"50\"},{\"ID\":\"51\",\"h\":\"53\",\"measuredH\":\"52\",\"measuredW\":\"92\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":92.02173656261871,\"x\":92,\"y\":2},\"p1\":{\"length\":0.33357646489981907,\"x\":0.321780372126961,\"y\":-0.08792411528639182},\"p2\":{\"length\":52,\"x\":0,\"y\":52},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"93\",\"x\":\"915\",\"y\":\"310\",\"zOrder\":\"51\"},{\"ID\":\"52\",\"h\":\"8\",\"measuredH\":\"7\",\"measuredW\":\"73\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":73.00684899377592,\"x\":73,\"y\":1},\"p1\":{\"length\":0.35496741249429986,\"x\":0.3537744641192917,\"y\":-0.02907735321528425},\"p2\":{\"length\":7,\"x\":0,\"y\":7},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"74\",\"x\":\"916\",\"y\":\"355\",\"zOrder\":\"52\"},{\"ID\":\"53\",\"measuredH\":\"40\",\"measuredW\":\"146\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"Back-end\"},\"typeID\":\"Label\",\"x\":\"598\",\"y\":\"121\",\"zOrder\":\"53\"},{\"ID\":\"54\",\"h\":\"70\",\"measuredH\":\"69\",\"measuredW\":\"15\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":3,\"y\":0},\"p1\":{\"x\":0.5214417744916817,\"y\":-0.11497227356746768},\"p2\":{\"x\":15,\"y\":69},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"16\",\"x\":\"640\",\"y\":\"35\",\"zOrder\":\"54\"},{\"ID\":\"55\",\"h\":\"108\",\"measuredH\":\"107\",\"measuredW\":\"19\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4416543574593797,\"y\":0.14967996061053665},\"p2\":{\"x\":7,\"y\":107},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"20\",\"x\":\"698\",\"y\":\"168\",\"zOrder\":\"55\"},{\"ID\":\"56\",\"h\":\"71\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"400\",\"x\":\"528\",\"y\":\"257\",\"zOrder\":\"56\"},{\"ID\":\"57\",\"measuredH\":\"25\",\"measuredW\":\"132\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Pick a Language\"},\"typeID\":\"Label\",\"x\":\"576\",\"y\":\"269\",\"zOrder\":\"57\"},{\"ID\":\"58\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"542\",\"y\":\"269\",\"zOrder\":\"58\"},{\"ID\":\"59\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"1\"},\"typeID\":\"Label\",\"x\":\"550\",\"y\":\"271\",\"zOrder\":\"59\"},{\"ID\":\"60\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"400\",\"x\":\"528\",\"y\":\"334\",\"zOrder\":\"60\"},{\"ID\":\"61\",\"measuredH\":\"25\",\"measuredW\":\"166\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Scripting Languages\"},\"typeID\":\"Label\",\"w\":\"371\",\"x\":\"547\",\"y\":\"342\",\"zOrder\":\"61\"},{\"ID\":\"62\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"989\",\"y\":\"336\",\"zOrder\":\"62\"},{\"ID\":\"63\",\"measuredH\":\"25\",\"measuredW\":\"34\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"PHP\"},\"typeID\":\"Label\",\"w\":\"45\",\"x\":\"1029\",\"y\":\"345\",\"zOrder\":\"63\"},{\"ID\":\"64\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"989\",\"y\":\"381\",\"zOrder\":\"64\"},{\"ID\":\"65\",\"measuredH\":\"25\",\"measuredW\":\"61\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Node.js\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"1029\",\"y\":\"390\",\"zOrder\":\"65\"},{\"ID\":\"66\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"989\",\"y\":\"291\",\"zOrder\":\"66\"},{\"ID\":\"67\",\"measuredH\":\"25\",\"measuredW\":\"40\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Ruby\"},\"typeID\":\"Label\",\"w\":\"45\",\"x\":\"1029\",\"y\":\"300\",\"zOrder\":\"67\"},{\"ID\":\"68\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"989\",\"y\":\"246\",\"zOrder\":\"68\"},{\"ID\":\"69\",\"measuredH\":\"25\",\"measuredW\":\"56\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Python\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"1028\",\"y\":\"255\",\"zOrder\":\"69\"},{\"ID\":\"70\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"400\",\"x\":\"528\",\"y\":\"381\",\"zOrder\":\"70\"},{\"ID\":\"71\",\"measuredH\":\"25\",\"measuredW\":\"177\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Functional Languages\"},\"typeID\":\"Label\",\"w\":\"191\",\"x\":\"550\",\"y\":\"389\",\"zOrder\":\"71\"},{\"ID\":\"72\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"272\",\"y\":\"387\",\"zOrder\":\"72\"},{\"ID\":\"73\",\"measuredH\":\"25\",\"measuredW\":\"59\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Clojure\"},\"typeID\":\"Label\",\"w\":\"61\",\"x\":\"312\",\"y\":\"396\",\"zOrder\":\"73\"},{\"ID\":\"74\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"272\",\"y\":\"432\",\"zOrder\":\"74\"},{\"ID\":\"75\",\"measuredH\":\"25\",\"measuredW\":\"58\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Haskell\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"312\",\"y\":\"441\",\"zOrder\":\"75\"},{\"ID\":\"76\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"272\",\"y\":\"342\",\"zOrder\":\"76\"},{\"ID\":\"77\",\"measuredH\":\"25\",\"measuredW\":\"52\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Erlang\"},\"typeID\":\"Label\",\"w\":\"61\",\"x\":\"312\",\"y\":\"351\",\"zOrder\":\"77\"},{\"ID\":\"78\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"272\",\"y\":\"297\",\"zOrder\":\"78\"},{\"ID\":\"79\",\"measuredH\":\"25\",\"measuredW\":\"46\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Scala\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"311\",\"y\":\"306\",\"zOrder\":\"79\"},{\"ID\":\"80\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"400\",\"x\":\"528\",\"y\":\"427\",\"zOrder\":\"80\"},{\"ID\":\"81\",\"measuredH\":\"25\",\"measuredW\":\"116\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Other Options\"},\"typeID\":\"Label\",\"w\":\"213\",\"x\":\"550\",\"y\":\"435\",\"zOrder\":\"81\"},{\"ID\":\"82\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"272\",\"y\":\"252\",\"zOrder\":\"82\"},{\"ID\":\"83\",\"measuredH\":\"25\",\"measuredW\":\"40\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Elixir\"},\"typeID\":\"Label\",\"w\":\"61\",\"x\":\"312\",\"y\":\"261\",\"zOrder\":\"83\"},{\"ID\":\"84\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"993\",\"y\":\"442\",\"zOrder\":\"84\"},{\"ID\":\"85\",\"measuredH\":\"25\",\"measuredW\":\"23\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Go\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"1033\",\"y\":\"451\",\"zOrder\":\"85\"},{\"ID\":\"86\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"994\",\"y\":\"488\",\"zOrder\":\"86\"},{\"ID\":\"87\",\"measuredH\":\"25\",\"measuredW\":\"38\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Rust\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"1034\",\"y\":\"497\",\"zOrder\":\"87\"},{\"ID\":\"88\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"272\",\"y\":\"478\",\"zOrder\":\"88\"},{\"ID\":\"89\",\"measuredH\":\"25\",\"measuredW\":\"37\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Java\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"312\",\"y\":\"487\",\"zOrder\":\"89\"},{\"ID\":\"90\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"273\",\"y\":\"524\",\"zOrder\":\"90\"},{\"ID\":\"91\",\"measuredH\":\"25\",\"measuredW\":\"39\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\".NET\"},\"typeID\":\"Label\",\"w\":\"47\",\"x\":\"313\",\"y\":\"533\",\"zOrder\":\"91\"},{\"ID\":\"92\",\"h\":\"215\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"465\",\"x\":\"838\",\"y\":\"556\",\"zOrder\":\"92\"},{\"ID\":\"93\",\"measuredH\":\"25\",\"measuredW\":\"413\",\"properties\":{\"size\":\"17\",\"text\":\"For the beginners, if you are just getting into backend\"},\"typeID\":\"Label\",\"x\":\"852\",\"y\":\"567\",\"zOrder\":\"93\"},{\"ID\":\"94\",\"measuredH\":\"25\",\"measuredW\":\"429\",\"properties\":{\"size\":\"17\",\"text\":\"development, I would recommend you to pick one of the\"},\"typeID\":\"Label\",\"x\":\"852\",\"y\":\"593\",\"zOrder\":\"94\"},{\"ID\":\"95\",\"measuredH\":\"25\",\"measuredW\":\"403\",\"properties\":{\"size\":\"17\",\"text\":\"scripting languages. For the quick-and-easy, go with\"},\"typeID\":\"Label\",\"x\":\"852\",\"y\":\"620\",\"zOrder\":\"95\"},{\"ID\":\"96\",\"measuredH\":\"25\",\"measuredW\":\"441\",\"properties\":{\"size\":\"17\",\"text\":\"*Node.js* or *PHP*. If you have already been doing backend,\"},\"typeID\":\"Label\",\"x\":\"852\",\"y\":\"647\",\"zOrder\":\"96\"},{\"ID\":\"97\",\"measuredH\":\"25\",\"measuredW\":\"410\",\"properties\":{\"size\":\"17\",\"text\":\"with some scripting language then don't pick another\"},\"typeID\":\"Label\",\"x\":\"852\",\"y\":\"675\",\"zOrder\":\"97\"},{\"ID\":\"98\",\"measuredH\":\"25\",\"measuredW\":\"416\",\"properties\":{\"size\":\"17\",\"text\":\"scripting language and have a look at Go, Rust or\"},\"typeID\":\"Label\",\"x\":\"852\",\"y\":\"701\",\"zOrder\":\"98\"},{\"ID\":\"99\",\"measuredH\":\"25\",\"measuredW\":\"393\",\"properties\":{\"size\":\"17\",\"text\":\"Clojure, it will definitely give you a new perspective.\"},\"typeID\":\"Label\",\"x\":\"852\",\"y\":\"730\",\"zOrder\":\"99\"},{\"ID\":\"100\",\"h\":\"96\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"405\",\"x\":\"366\",\"y\":\"593\",\"zOrder\":\"100\"},{\"ID\":\"101\",\"measuredH\":\"25\",\"measuredW\":\"198\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Practice what you learnt\"},\"typeID\":\"Label\",\"x\":\"412\",\"y\":\"605\",\"zOrder\":\"101\"},{\"ID\":\"102\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"378\",\"y\":\"605\",\"zOrder\":\"102\"},{\"ID\":\"103\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"2\"},\"typeID\":\"Label\",\"x\":\"386\",\"y\":\"607\",\"zOrder\":\"103\"},{\"ID\":\"104\",\"measuredH\":\"25\",\"measuredW\":\"315\",\"properties\":{\"size\":\"17\",\"text\":\"Excercise and make some command line\"},\"typeID\":\"Label\",\"x\":\"412\",\"y\":\"629\",\"zOrder\":\"104\"},{\"ID\":\"105\",\"measuredH\":\"25\",\"measuredW\":\"297\",\"properties\":{\"size\":\"17\",\"text\":\"applications with your picked language\"},\"typeID\":\"Label\",\"x\":\"412\",\"y\":\"651\",\"zOrder\":\"105\"},{\"ID\":\"106\",\"measuredH\":\"25\",\"measuredW\":\"292\",\"properties\":{\"size\":\"17\",\"text\":\"There are myriads of different options\"},\"typeID\":\"Label\",\"x\":\"575\",\"y\":\"293\",\"zOrder\":\"106\"},{\"ID\":\"107\",\"h\":\"187\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"575\",\"x\":\"152\",\"y\":\"710\",\"zOrder\":\"107\"},{\"ID\":\"108\",\"measuredH\":\"25\",\"measuredW\":\"111\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Sample Ideas\"},\"typeID\":\"Label\",\"w\":\"131\",\"x\":\"168\",\"y\":\"724\",\"zOrder\":\"108\"},{\"ID\":\"109\",\"measuredH\":\"25\",\"measuredW\":\"366\",\"properties\":{\"size\":\"17\",\"text\":\"Implement some command that you use e.g. `ls`\"},\"typeID\":\"Label\",\"x\":\"168\",\"y\":\"752\",\"zOrder\":\"109\"},{\"ID\":\"110\",\"measuredH\":\"25\",\"measuredW\":\"507\",\"properties\":{\"size\":\"17\",\"text\":\"Command that fetches and saves reddit posts on /r/programming\"},\"typeID\":\"Label\",\"x\":\"168\",\"y\":\"778\",\"zOrder\":\"110\"},{\"ID\":\"111\",\"measuredH\":\"25\",\"measuredW\":\"464\",\"properties\":{\"size\":\"17\",\"text\":\"Command that gives you directory structure in JSON format\"},\"typeID\":\"Label\",\"x\":\"168\",\"y\":\"804\",\"zOrder\":\"111\"},{\"ID\":\"112\",\"measuredH\":\"25\",\"measuredW\":\"543\",\"properties\":{\"size\":\"17\",\"text\":\"Command that reads JSON from above and creates director structure\"},\"typeID\":\"Label\",\"x\":\"168\",\"y\":\"830\",\"zOrder\":\"112\"},{\"ID\":\"113\",\"measuredH\":\"25\",\"measuredW\":\"511\",\"properties\":{\"size\":\"17\",\"text\":\"Think of some task that you do every day and try to automate that\"},\"typeID\":\"Label\",\"x\":\"168\",\"y\":\"856\",\"zOrder\":\"113\"},{\"ID\":\"114\",\"h\":\"133\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"523\",\"x\":\"766\",\"y\":\"798\",\"zOrder\":\"114\"},{\"ID\":\"115\",\"measuredH\":\"25\",\"measuredW\":\"195\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn Package Manager\"},\"typeID\":\"Label\",\"x\":\"813\",\"y\":\"813\",\"zOrder\":\"115\"},{\"ID\":\"116\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"779\",\"y\":\"813\",\"zOrder\":\"116\"},{\"ID\":\"117\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"3\"},\"typeID\":\"Label\",\"x\":\"787\",\"y\":\"815\",\"zOrder\":\"117\"},{\"ID\":\"118\",\"h\":\"72\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"485\",\"x\":\"241\",\"y\":\"912\",\"zOrder\":\"118\"},{\"ID\":\"119\",\"measuredH\":\"25\",\"measuredW\":\"442\",\"properties\":{\"size\":\"17\",\"text\":\"Package managers help you bring external dependencies\"},\"typeID\":\"Label\",\"x\":\"254\",\"y\":\"924\",\"zOrder\":\"119\"},{\"ID\":\"120\",\"measuredH\":\"25\",\"measuredW\":\"432\",\"properties\":{\"size\":\"17\",\"text\":\"in your application and to distribute your own packages. \"},\"typeID\":\"Label\",\"x\":\"254\",\"y\":\"946\",\"zOrder\":\"120\"},{\"ID\":\"121\",\"measuredH\":\"25\",\"measuredW\":\"445\",\"properties\":{\"size\":\"17\",\"text\":\"Learn how to use package manager for the language that\"},\"typeID\":\"Label\",\"x\":\"813\",\"y\":\"837\",\"zOrder\":\"121\"},{\"ID\":\"122\",\"measuredH\":\"25\",\"measuredW\":\"451\",\"properties\":{\"size\":\"17\",\"text\":\"you picked, e.g. *PHP has composer, Node.js has NPM and*\"},\"typeID\":\"Label\",\"x\":\"813\",\"y\":\"862\",\"zOrder\":\"122\"},{\"ID\":\"123\",\"h\":\"153\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"575\",\"x\":\"158\",\"y\":\"995\",\"zOrder\":\"123\"},{\"ID\":\"124\",\"measuredH\":\"25\",\"measuredW\":\"245\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Standards and Best Practices\"},\"typeID\":\"Label\",\"x\":\"204\",\"y\":\"1011\",\"zOrder\":\"124\"},{\"ID\":\"125\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"170\",\"y\":\"1011\",\"zOrder\":\"125\"},{\"ID\":\"126\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"4\"},\"typeID\":\"Label\",\"x\":\"178\",\"y\":\"1013\",\"zOrder\":\"126\"},{\"ID\":\"127\",\"measuredH\":\"25\",\"measuredW\":\"490\",\"properties\":{\"size\":\"17\",\"text\":\"Each of the language has its own standards and best practices\"},\"typeID\":\"Label\",\"x\":\"204\",\"y\":\"1038\",\"zOrder\":\"127\"},{\"ID\":\"128\",\"measuredH\":\"25\",\"measuredW\":\"511\",\"properties\":{\"size\":\"17\",\"text\":\"of doing things. Study them for your picked language. For example\"},\"typeID\":\"Label\",\"x\":\"204\",\"y\":\"1060\",\"zOrder\":\"128\"},{\"ID\":\"129\",\"measuredH\":\"25\",\"measuredW\":\"519\",\"properties\":{\"size\":\"17\",\"text\":\"*PHP has PHP-FIG and PSRs*, with Node.js there are many different\"},\"typeID\":\"Label\",\"x\":\"204\",\"y\":\"1085\",\"zOrder\":\"129\"},{\"ID\":\"130\",\"h\":\"110\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"570\",\"x\":\"806\",\"y\":\"957\",\"zOrder\":\"130\"},{\"ID\":\"131\",\"measuredH\":\"25\",\"measuredW\":\"504\",\"properties\":{\"size\":\"17\",\"text\":\"Make sure to read about the best practices for security. Read the\"},\"typeID\":\"Label\",\"x\":\"820\",\"y\":\"972\",\"zOrder\":\"131\"},{\"ID\":\"132\",\"measuredH\":\"25\",\"measuredW\":\"531\",\"properties\":{\"size\":\"17\",\"text\":\"OWASP guidelines and understand different security issues and how\"},\"typeID\":\"Label\",\"x\":\"820\",\"y\":\"998\",\"zOrder\":\"132\"},{\"ID\":\"133\",\"measuredH\":\"25\",\"measuredW\":\"311\",\"properties\":{\"size\":\"17\",\"text\":\"to avoid them in language of your choice\"},\"typeID\":\"Label\",\"x\":\"823\",\"y\":\"1025\",\"zOrder\":\"133\"},{\"ID\":\"134\",\"h\":\"323\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"textColor\":\"0\"},\"typeID\":\"TextArea\",\"w\":\"576\",\"x\":\"158\",\"y\":\"1166\",\"zOrder\":\"134\"},{\"ID\":\"135\",\"measuredH\":\"25\",\"measuredW\":\"350\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Make and Distribute Some Package/Library\"},\"typeID\":\"Label\",\"x\":\"207\",\"y\":\"1187\",\"zOrder\":\"135\"},{\"ID\":\"136\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"173\",\"y\":\"1187\",\"zOrder\":\"136\"},{\"ID\":\"137\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"5\"},\"typeID\":\"Label\",\"x\":\"181\",\"y\":\"1189\",\"zOrder\":\"137\"},{\"ID\":\"138\",\"measuredH\":\"25\",\"measuredW\":\"490\",\"properties\":{\"size\":\"17\",\"text\":\"Now go ahead and create a package and distribute it for others\"},\"typeID\":\"Label\",\"x\":\"207\",\"y\":\"1214\",\"zOrder\":\"138\"},{\"ID\":\"139\",\"measuredH\":\"25\",\"measuredW\":\"502\",\"properties\":{\"size\":\"17\",\"text\":\"to use, and make sure to follow the standards and best practices\"},\"typeID\":\"Label\",\"x\":\"207\",\"y\":\"1240\",\"zOrder\":\"139\"},{\"ID\":\"140\",\"measuredH\":\"25\",\"measuredW\":\"211\",\"properties\":{\"size\":\"17\",\"text\":\"that you have learnt this far.\"},\"typeID\":\"Label\",\"x\":\"207\",\"y\":\"1264\",\"zOrder\":\"140\"},{\"ID\":\"141\",\"measuredH\":\"25\",\"measuredW\":\"322\",\"properties\":{\"size\":\"17\",\"text\":\"*yarn, Python has pip, Ruby has gems* etc\"},\"typeID\":\"Label\",\"x\":\"813\",\"y\":\"890\",\"zOrder\":\"141\"},{\"ID\":\"142\",\"measuredH\":\"25\",\"measuredW\":\"329\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Contribute to Some Opensource Project\"},\"typeID\":\"Label\",\"x\":\"207\",\"y\":\"1302\",\"zOrder\":\"142\"},{\"ID\":\"143\",\"measuredH\":\"25\",\"measuredW\":\"499\",\"properties\":{\"size\":\"17\",\"text\":\"Search for some projects on github and open some pull requests\"},\"typeID\":\"Label\",\"x\":\"207\",\"y\":\"1330\",\"zOrder\":\"143\"},{\"ID\":\"144\",\"measuredH\":\"25\",\"measuredW\":\"344\",\"properties\":{\"size\":\"17\",\"text\":\"in opensource projects. Some ideas for that :\"},\"typeID\":\"Label\",\"x\":\"207\",\"y\":\"1355\",\"zOrder\":\"144\"},{\"ID\":\"145\",\"measuredH\":\"25\",\"measuredW\":\"448\",\"properties\":{\"size\":\"17\",\"text\":\"Refactor and implement the best practices that you learnt\"},\"typeID\":\"Label\",\"x\":\"209\",\"y\":\"1395\",\"zOrder\":\"145\"},{\"ID\":\"146\",\"measuredH\":\"25\",\"measuredW\":\"339\",\"properties\":{\"size\":\"17\",\"text\":\"Look into the open issues and try to resolve\"},\"typeID\":\"Label\",\"x\":\"209\",\"y\":\"1420\",\"zOrder\":\"146\"},{\"ID\":\"147\",\"measuredH\":\"25\",\"measuredW\":\"240\",\"properties\":{\"size\":\"17\",\"text\":\"Add any additional functionality\"},\"typeID\":\"Label\",\"x\":\"209\",\"y\":\"1445\",\"zOrder\":\"147\"},{\"ID\":\"148\",\"h\":\"138\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"595\",\"x\":\"782\",\"y\":\"1369\",\"zOrder\":\"148\"},{\"ID\":\"149\",\"measuredH\":\"25\",\"measuredW\":\"163\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn about Testing\"},\"typeID\":\"Label\",\"x\":\"830\",\"y\":\"1385\",\"zOrder\":\"149\"},{\"ID\":\"150\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"796\",\"y\":\"1385\",\"zOrder\":\"150\"},{\"ID\":\"151\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"6\"},\"typeID\":\"Label\",\"x\":\"804\",\"y\":\"1387\",\"zOrder\":\"151\"},{\"ID\":\"152\",\"measuredH\":\"25\",\"measuredW\":\"535\",\"properties\":{\"size\":\"17\",\"text\":\"There are several different testing types, but for now learn about how\"},\"typeID\":\"Label\",\"x\":\"830\",\"y\":\"1412\",\"zOrder\":\"152\"},{\"ID\":\"153\",\"measuredH\":\"25\",\"measuredW\":\"486\",\"properties\":{\"size\":\"17\",\"text\":\"to write *Unit and Integration tests* in the language you picked.\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1438\",\"zOrder\":\"153\"},{\"ID\":\"154\",\"measuredH\":\"25\",\"measuredW\":\"529\",\"properties\":{\"size\":\"17\",\"text\":\"Understand different testing terminologies such as mocks, stubs etc\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1464\",\"zOrder\":\"154\"},{\"ID\":\"155\",\"h\":\"252\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"603\",\"x\":\"774\",\"y\":\"1094\",\"zOrder\":\"155\"},{\"ID\":\"156\",\"measuredH\":\"25\",\"measuredW\":\"573\",\"properties\":{\"size\":\"17\",\"text\":\"There are several different options, each having different uses, depending \"},\"typeID\":\"Label\",\"x\":\"788\",\"y\":\"1109\",\"zOrder\":\"156\"},{\"ID\":\"157\",\"measuredH\":\"25\",\"measuredW\":\"553\",\"properties\":{\"size\":\"17\",\"text\":\"upon the language of your choice. *Google* around, see different options \"},\"typeID\":\"Label\",\"x\":\"791\",\"y\":\"1135\",\"zOrder\":\"157\"},{\"ID\":\"158\",\"measuredH\":\"25\",\"measuredW\":\"312\",\"properties\":{\"size\":\"17\",\"text\":\"and pick the one suitable for your needs.\"},\"typeID\":\"Label\",\"x\":\"791\",\"y\":\"1162\",\"zOrder\":\"158\"},{\"ID\":\"159\",\"measuredH\":\"25\",\"measuredW\":\"342\",\"properties\":{\"size\":\"17\",\"text\":\"*For PHP* – &*{color:blue}PHPUnit{color}*&, PHPSpec, Codeception\"},\"typeID\":\"Label\",\"x\":\"792\",\"y\":\"1203\",\"zOrder\":\"159\"},{\"ID\":\"160\",\"measuredH\":\"25\",\"measuredW\":\"454\",\"properties\":{\"size\":\"17\",\"text\":\"*For Node.js* – &*{color:blue}Mocha{color}*&, &*{color:blue}Chai{color}*&, &*{color:blue}Sinon{color}*&, &*{color:blue}Mockery{color}*&, Ava, Jasmine\"},\"typeID\":\"Label\",\"x\":\"792\",\"y\":\"1231\",\"zOrder\":\"160\"},{\"ID\":\"161\",\"measuredH\":\"25\",\"measuredW\":\"562\",\"properties\":{\"size\":\"17\",\"text\":\"For others, I don't want to start any flamewars so I am not going to make\"},\"typeID\":\"Label\",\"x\":\"791\",\"y\":\"1274\",\"zOrder\":\"161\"},{\"ID\":\"162\",\"measuredH\":\"25\",\"measuredW\":\"531\",\"properties\":{\"size\":\"17\",\"text\":\"any recommendations here, so look around and find the ones suitable\"},\"typeID\":\"Label\",\"x\":\"791\",\"y\":\"1300\",\"zOrder\":\"162\"},{\"ID\":\"163\",\"h\":\"117\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"594\",\"x\":\"783\",\"y\":\"1534\",\"zOrder\":\"163\"},{\"ID\":\"164\",\"measuredH\":\"25\",\"measuredW\":\"336\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Write Tests for the practical steps above\"},\"typeID\":\"Label\",\"x\":\"832\",\"y\":\"1555\",\"zOrder\":\"164\"},{\"ID\":\"165\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"798\",\"y\":\"1555\",\"zOrder\":\"165\"},{\"ID\":\"166\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"7\"},\"typeID\":\"Label\",\"x\":\"806\",\"y\":\"1557\",\"zOrder\":\"166\"},{\"ID\":\"167\",\"measuredH\":\"25\",\"measuredW\":\"501\",\"properties\":{\"size\":\"17\",\"text\":\"Go ahead and write the unit tests for the practical tasks that you\"},\"typeID\":\"Label\",\"x\":\"832\",\"y\":\"1582\",\"zOrder\":\"167\"},{\"ID\":\"168\",\"measuredH\":\"25\",\"measuredW\":\"252\",\"properties\":{\"size\":\"17\",\"text\":\"implemented in the steps before.\"},\"typeID\":\"Label\",\"x\":\"832\",\"y\":\"1608\",\"zOrder\":\"168\"},{\"ID\":\"169\",\"measuredH\":\"25\",\"measuredW\":\"191\",\"properties\":{\"size\":\"17\",\"text\":\"driven by community etc.\"},\"typeID\":\"Label\",\"x\":\"203\",\"y\":\"1109\",\"zOrder\":\"169\"},{\"ID\":\"170\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"575\",\"x\":\"158\",\"y\":\"1508\",\"zOrder\":\"170\"},{\"ID\":\"171\",\"measuredH\":\"25\",\"measuredW\":\"286\",\"properties\":{\"size\":\"17\",\"text\":\"Learn how to calculate test coverage\"},\"typeID\":\"Label\",\"x\":\"208\",\"y\":\"1521\",\"zOrder\":\"171\"},{\"ID\":\"172\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"icon\":{\"ID\":\"lightbulb-o\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"173\",\"y\":\"1521\",\"zOrder\":\"172\"},{\"ID\":\"173\",\"h\":\"159\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"371\",\"x\":\"366\",\"y\":\"1580\",\"zOrder\":\"173\"},{\"ID\":\"174\",\"measuredH\":\"25\",\"measuredW\":\"224\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn Relational Databases\"},\"typeID\":\"Label\",\"w\":\"226\",\"x\":\"411\",\"y\":\"1594\",\"zOrder\":\"174\"},{\"ID\":\"175\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"378\",\"y\":\"1592\",\"zOrder\":\"175\"},{\"ID\":\"176\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"8\"},\"typeID\":\"Label\",\"w\":\"11\",\"x\":\"386\",\"y\":\"1594\",\"zOrder\":\"176\"},{\"ID\":\"177\",\"measuredH\":\"32\",\"measuredW\":\"76\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"MySQL\"},\"typeID\":\"TextInput\",\"w\":\"121\",\"x\":\"110\",\"y\":\"1622\",\"zOrder\":\"177\"},{\"ID\":\"178\",\"measuredH\":\"32\",\"measuredW\":\"83\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"MariaDB\"},\"typeID\":\"TextInput\",\"w\":\"119\",\"x\":\"237\",\"y\":\"1622\",\"zOrder\":\"178\"},{\"ID\":\"179\",\"measuredH\":\"32\",\"measuredW\":\"114\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"PostgreSQL\"},\"typeID\":\"TextInput\",\"w\":\"246\",\"x\":\"108\",\"y\":\"1662\",\"zOrder\":\"179\"},{\"ID\":\"180\",\"measuredH\":\"32\",\"measuredW\":\"67\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Oracle\"},\"typeID\":\"TextInput\",\"w\":\"246\",\"x\":\"109\",\"y\":\"1580\",\"zOrder\":\"180\"},{\"ID\":\"181\",\"measuredH\":\"32\",\"measuredW\":\"78\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"MSSQL\"},\"typeID\":\"TextInput\",\"w\":\"246\",\"x\":\"108\",\"y\":\"1705\",\"zOrder\":\"181\"},{\"ID\":\"182\",\"measuredH\":\"25\",\"measuredW\":\"324\",\"properties\":{\"size\":\"17\",\"text\":\"There are several options here. However if\"},\"typeID\":\"Label\",\"x\":\"382\",\"y\":\"1623\",\"zOrder\":\"182\"},{\"ID\":\"183\",\"measuredH\":\"25\",\"measuredW\":\"339\",\"properties\":{\"size\":\"17\",\"text\":\"if you learn one, others should be fairly easy.\"},\"typeID\":\"Label\",\"x\":\"382\",\"y\":\"1647\",\"zOrder\":\"183\"},{\"ID\":\"184\",\"measuredH\":\"25\",\"measuredW\":\"334\",\"properties\":{\"size\":\"17\",\"text\":\"Pick *MySQL* for now but learn how they are\"},\"typeID\":\"Label\",\"x\":\"382\",\"y\":\"1672\",\"zOrder\":\"184\"},{\"ID\":\"185\",\"measuredH\":\"25\",\"measuredW\":\"209\",\"properties\":{\"size\":\"17\",\"text\":\"different and the usecases\"},\"typeID\":\"Label\",\"x\":\"382\",\"y\":\"1696\",\"zOrder\":\"185\"},{\"ID\":\"186\",\"h\":\"190\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"603\",\"x\":\"782\",\"y\":\"1674\",\"zOrder\":\"186\"},{\"ID\":\"187\",\"measuredH\":\"25\",\"measuredW\":\"118\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Practical Time\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1691\",\"zOrder\":\"187\"},{\"ID\":\"188\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"795\",\"y\":\"1691\",\"zOrder\":\"188\"},{\"ID\":\"189\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"9\"},\"typeID\":\"Label\",\"x\":\"803\",\"y\":\"1693\",\"zOrder\":\"189\"},{\"ID\":\"190\",\"measuredH\":\"25\",\"measuredW\":\"533\",\"properties\":{\"size\":\"17\",\"text\":\"Create a simple application using everything that you have learnt this\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1718\",\"zOrder\":\"190\"},{\"ID\":\"191\",\"measuredH\":\"25\",\"measuredW\":\"495\",\"properties\":{\"size\":\"17\",\"text\":\"far. It should have registration, login and CRUD. Create a blog, for\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1744\",\"zOrder\":\"191\"},{\"ID\":\"192\",\"measuredH\":\"25\",\"measuredW\":\"506\",\"properties\":{\"size\":\"17\",\"text\":\"example. Where anyone can register and get a public profile page\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1770\",\"zOrder\":\"192\"},{\"ID\":\"193\",\"measuredH\":\"25\",\"measuredW\":\"524\",\"properties\":{\"size\":\"17\",\"text\":\"create, update and delete posts and public page will show the posts\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1798\",\"zOrder\":\"193\"},{\"ID\":\"194\",\"measuredH\":\"25\",\"measuredW\":\"129\",\"properties\":{\"size\":\"17\",\"text\":\"created by them.\"},\"typeID\":\"Label\",\"x\":\"829\",\"y\":\"1823\",\"zOrder\":\"194\"},{\"ID\":\"195\",\"h\":\"108\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"585\",\"x\":\"142\",\"y\":\"1764\",\"zOrder\":\"195\"},{\"ID\":\"196\",\"measuredH\":\"25\",\"measuredW\":\"505\",\"properties\":{\"size\":\"17\",\"text\":\"Make sure to write tests, follow the standards and best practices.\"},\"typeID\":\"Label\",\"x\":\"155\",\"y\":\"1777\",\"zOrder\":\"196\"},{\"ID\":\"197\",\"measuredH\":\"25\",\"measuredW\":\"551\",\"properties\":{\"size\":\"17\",\"text\":\"Also for the database, add the indexes, use proper storage engines and\"},\"typeID\":\"Label\",\"x\":\"155\",\"y\":\"1803\",\"zOrder\":\"197\"},{\"ID\":\"198\",\"measuredH\":\"25\",\"measuredW\":\"540\",\"properties\":{\"size\":\"17\",\"text\":\"make sure to analyze the queries before using them in the application.\"},\"typeID\":\"Label\",\"x\":\"155\",\"y\":\"1830\",\"zOrder\":\"198\"},{\"ID\":\"199\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"205\",\"x\":\"1135\",\"y\":\"381\",\"zOrder\":\"199\"},{\"ID\":\"200\",\"measuredH\":\"25\",\"measuredW\":\"174\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"TypeScript (Optional)\"},\"typeID\":\"Label\",\"w\":\"175\",\"x\":\"1151\",\"y\":\"390\",\"zOrder\":\"200\"},{\"ID\":\"201\",\"h\":\"66\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"116\",\"y\":\"1888\",\"zOrder\":\"201\"},{\"ID\":\"202\",\"measuredH\":\"25\",\"measuredW\":\"154\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn a Framework\"},\"typeID\":\"Label\",\"x\":\"165\",\"y\":\"1909\",\"zOrder\":\"202\"},{\"ID\":\"203\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"131\",\"y\":\"1909\",\"zOrder\":\"203\"},{\"ID\":\"204\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"10\"},\"typeID\":\"Label\",\"x\":\"136\",\"y\":\"1911\",\"zOrder\":\"204\"},{\"ID\":\"205\",\"h\":\"220\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"594\",\"x\":\"791\",\"y\":\"1881\",\"zOrder\":\"205\"},{\"ID\":\"206\",\"measuredH\":\"25\",\"measuredW\":\"547\",\"properties\":{\"size\":\"17\",\"text\":\"Depending upon the project and the language you picked, you might or\"},\"typeID\":\"Label\",\"x\":\"804\",\"y\":\"1894\",\"zOrder\":\"206\"},{\"ID\":\"207\",\"measuredH\":\"25\",\"measuredW\":\"491\",\"properties\":{\"size\":\"17\",\"text\":\"might not need a framework. There are several different options\"},\"typeID\":\"Label\",\"x\":\"804\",\"y\":\"1922\",\"zOrder\":\"207\"},{\"ID\":\"208\",\"measuredH\":\"25\",\"measuredW\":\"558\",\"properties\":{\"size\":\"17\",\"text\":\"*For PHP* – &*{color:blue}Laravel{color}*& or &*{color:blue}Symfony{color}*& and Slim or Lumen for micro-frameworks\"},\"typeID\":\"Label\",\"x\":\"804\",\"y\":\"1962\",\"zOrder\":\"208\"},{\"ID\":\"209\",\"measuredH\":\"25\",\"measuredW\":\"258\",\"properties\":{\"size\":\"17\",\"text\":\"*For Node.js* – &*{color:blue}Express.js{color}*&, Hapi.js\"},\"typeID\":\"Label\",\"x\":\"804\",\"y\":\"1990\",\"zOrder\":\"209\"},{\"ID\":\"210\",\"measuredH\":\"25\",\"measuredW\":\"377\",\"properties\":{\"size\":\"17\",\"text\":\"*For Go* – I prefer to code without framework\"},\"typeID\":\"Label\",\"x\":\"804\",\"y\":\"2019\",\"zOrder\":\"210\"},{\"ID\":\"211\",\"measuredH\":\"25\",\"measuredW\":\"560\",\"properties\":{\"size\":\"17\",\"text\":\"For others, search and find the suitable ones for the language you picked\"},\"typeID\":\"Label\",\"x\":\"804\",\"y\":\"2058\",\"zOrder\":\"211\"},{\"ID\":\"212\",\"h\":\"80\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"637\",\"x\":\"116\",\"y\":\"1963\",\"zOrder\":\"212\"},{\"ID\":\"213\",\"measuredH\":\"25\",\"measuredW\":\"114\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Practical time\"},\"typeID\":\"Label\",\"x\":\"162\",\"y\":\"1976\",\"zOrder\":\"213\"},{\"ID\":\"214\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"129\",\"y\":\"1975\",\"zOrder\":\"214\"},{\"ID\":\"215\",\"measuredH\":\"21\",\"measuredW\":\"11\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"11\"},\"typeID\":\"Label\",\"x\":\"135\",\"y\":\"1977\",\"zOrder\":\"215\"},{\"ID\":\"216\",\"measuredH\":\"25\",\"measuredW\":\"576\",\"properties\":{\"size\":\"17\",\"text\":\"Make the same application you made in      to the framework of your choice\"},\"typeID\":\"Label\",\"x\":\"161\",\"y\":\"2004\",\"zOrder\":\"216\"},{\"ID\":\"217\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"467\",\"y\":\"2004\",\"zOrder\":\"217\"},{\"ID\":\"218\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"9\"},\"typeID\":\"Label\",\"x\":\"475\",\"y\":\"2006\",\"zOrder\":\"218\"},{\"ID\":\"219\",\"h\":\"179\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"116\",\"y\":\"2050\",\"zOrder\":\"219\"},{\"ID\":\"220\",\"measuredH\":\"25\",\"measuredW\":\"207\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn a NoSQL Database\"},\"typeID\":\"Label\",\"x\":\"165\",\"y\":\"2068\",\"zOrder\":\"220\"},{\"ID\":\"221\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"131\",\"y\":\"2068\",\"zOrder\":\"221\"},{\"ID\":\"222\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"12\"},\"typeID\":\"Label\",\"x\":\"136\",\"y\":\"2070\",\"zOrder\":\"222\"},{\"ID\":\"223\",\"measuredH\":\"25\",\"measuredW\":\"573\",\"properties\":{\"size\":\"17\",\"text\":\"Have a look at different options and see how they differ. If you have to pick\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"166\",\"y\":\"2154\",\"zOrder\":\"223\"},{\"ID\":\"224\",\"measuredH\":\"25\",\"measuredW\":\"149\",\"properties\":{\"size\":\"17\",\"text\":\"one, pick *MongoDB*\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"166\",\"y\":\"2180\",\"zOrder\":\"224\"},{\"ID\":\"225\",\"measuredH\":\"25\",\"measuredW\":\"527\",\"properties\":{\"size\":\"17\",\"text\":\"First understand what they are, how they are different from relational\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"166\",\"y\":\"2101\",\"zOrder\":\"225\"},{\"ID\":\"226\",\"measuredH\":\"25\",\"measuredW\":\"555\",\"properties\":{\"size\":\"17\",\"text\":\"databases and why they are needed. There are several different options\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"165\",\"y\":\"2127\",\"zOrder\":\"226\"},{\"ID\":\"227\",\"measuredH\":\"32\",\"measuredW\":\"104\",\"properties\":{\"align\":\"center\",\"color\":\"16777215\",\"size\":\"18\",\"text\":\"Cassandra\"},\"typeID\":\"TextInput\",\"w\":\"185\",\"x\":\"1023\",\"y\":\"2174\",\"zOrder\":\"227\"},{\"ID\":\"228\",\"measuredH\":\"32\",\"measuredW\":\"92\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"MongoDB\"},\"typeID\":\"TextInput\",\"w\":\"185\",\"x\":\"1023\",\"y\":\"2133\",\"zOrder\":\"228\"},{\"ID\":\"229\",\"measuredH\":\"32\",\"measuredW\":\"99\",\"properties\":{\"align\":\"center\",\"color\":\"16777215\",\"size\":\"18\",\"text\":\"RethinkDB\"},\"typeID\":\"TextInput\",\"w\":\"157\",\"x\":\"1215\",\"y\":\"2133\",\"zOrder\":\"229\"},{\"ID\":\"230\",\"measuredH\":\"32\",\"measuredW\":\"106\",\"properties\":{\"align\":\"center\",\"color\":\"16777215\",\"size\":\"18\",\"text\":\"Couchbase\"},\"typeID\":\"TextInput\",\"w\":\"157\",\"x\":\"1215\",\"y\":\"2173\",\"zOrder\":\"230\"},{\"ID\":\"231\",\"h\":\"86\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"750\",\"y\":\"2256\",\"zOrder\":\"231\"},{\"ID\":\"232\",\"measuredH\":\"25\",\"measuredW\":\"65\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Caching\"},\"typeID\":\"Label\",\"w\":\"101\",\"x\":\"799\",\"y\":\"2273\",\"zOrder\":\"232\"},{\"ID\":\"233\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"765\",\"y\":\"2273\",\"zOrder\":\"233\"},{\"ID\":\"234\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"13\"},\"typeID\":\"Label\",\"x\":\"770\",\"y\":\"2275\",\"zOrder\":\"234\"},{\"ID\":\"235\",\"measuredH\":\"25\",\"measuredW\":\"539\",\"properties\":{\"size\":\"17\",\"text\":\"Learn how to implement app level caching using Redis or Memcached\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"800\",\"y\":\"2300\",\"zOrder\":\"235\"},{\"ID\":\"236\",\"measuredH\":\"32\",\"measuredW\":\"113\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Memcached\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"472\",\"y\":\"2265\",\"zOrder\":\"236\"},{\"ID\":\"237\",\"measuredH\":\"32\",\"measuredW\":\"61\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Redis\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"472\",\"y\":\"2301\",\"zOrder\":\"237\"},{\"ID\":\"238\",\"measuredH\":\"25\",\"measuredW\":\"185\",\"properties\":{\"size\":\"17\",\"text\":\"Learn MongoDB for now\"},\"typeID\":\"Label\",\"w\":\"193\",\"x\":\"809\",\"y\":\"2130\",\"zOrder\":\"238\"},{\"ID\":\"239\",\"measuredH\":\"25\",\"measuredW\":\"201\",\"properties\":{\"size\":\"17\",\"text\":\"but make sure to look how\"},\"typeID\":\"Label\",\"w\":\"200\",\"x\":\"809\",\"y\":\"2154\",\"zOrder\":\"239\"},{\"ID\":\"240\",\"measuredH\":\"25\",\"measuredW\":\"181\",\"properties\":{\"size\":\"17\",\"text\":\"it compares with others\"},\"typeID\":\"Label\",\"w\":\"190\",\"x\":\"812\",\"y\":\"2179\",\"zOrder\":\"240\"},{\"ID\":\"241\",\"h\":\"142\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"116\",\"y\":\"2615\",\"zOrder\":\"241\"},{\"ID\":\"242\",\"measuredH\":\"25\",\"measuredW\":\"139\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Message Brokers\"},\"typeID\":\"Label\",\"w\":\"155\",\"x\":\"165\",\"y\":\"2632\",\"zOrder\":\"242\"},{\"ID\":\"243\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"131\",\"y\":\"2632\",\"zOrder\":\"243\"},{\"ID\":\"244\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"16\"},\"typeID\":\"Label\",\"w\":\"14\",\"x\":\"136\",\"y\":\"2634\",\"zOrder\":\"244\"},{\"ID\":\"245\",\"measuredH\":\"25\",\"measuredW\":\"542\",\"properties\":{\"size\":\"17\",\"text\":\"Learn about the message brokers, understand the \\\"Why\\\" and pick one.\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"166\",\"y\":\"2661\",\"zOrder\":\"245\"},{\"ID\":\"246\",\"h\":\"109\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"299\",\"x\":\"131\",\"y\":\"2247\",\"zOrder\":\"246\"},{\"ID\":\"247\",\"measuredH\":\"25\",\"measuredW\":\"254\",\"properties\":{\"size\":\"17\",\"text\":\"Once you have learnt, implement\"},\"typeID\":\"Label\",\"w\":\"258\",\"x\":\"148\",\"y\":\"2263\",\"zOrder\":\"247\"},{\"ID\":\"248\",\"measuredH\":\"25\",\"measuredW\":\"234\",\"properties\":{\"size\":\"17\",\"text\":\"caching strategy in application\"},\"typeID\":\"Label\",\"w\":\"258\",\"x\":\"148\",\"y\":\"2287\",\"zOrder\":\"248\"},{\"ID\":\"249\",\"measuredH\":\"25\",\"measuredW\":\"140\",\"properties\":{\"size\":\"17\",\"text\":\"you built in step 11\"},\"typeID\":\"Label\",\"w\":\"258\",\"x\":\"147\",\"y\":\"2313\",\"zOrder\":\"249\"},{\"ID\":\"250\",\"measuredH\":\"25\",\"measuredW\":\"554\",\"properties\":{\"size\":\"17\",\"text\":\"There are multiple options but I would go for *RabbitMQ* or *Kafka*. Learn\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"165\",\"y\":\"2689\",\"zOrder\":\"250\"},{\"ID\":\"251\",\"measuredH\":\"32\",\"measuredW\":\"95\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"RabbitMQ\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"886\",\"y\":\"2656\",\"zOrder\":\"251\"},{\"ID\":\"252\",\"measuredH\":\"32\",\"measuredW\":\"63\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Kafka\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"886\",\"y\":\"2692\",\"zOrder\":\"252\"},{\"ID\":\"253\",\"measuredH\":\"25\",\"measuredW\":\"409\",\"properties\":{\"size\":\"17\",\"text\":\"how to use RabbitMQ for now, if you want to pick one.\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"166\",\"y\":\"2717\",\"zOrder\":\"253\"},{\"ID\":\"254\",\"h\":\"143\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"116\",\"y\":\"2765\",\"zOrder\":\"254\"},{\"ID\":\"255\",\"measuredH\":\"25\",\"measuredW\":\"183\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn a Search Engine\"},\"typeID\":\"Label\",\"w\":\"280\",\"x\":\"164\",\"y\":\"2782\",\"zOrder\":\"255\"},{\"ID\":\"256\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"131\",\"y\":\"2782\",\"zOrder\":\"256\"},{\"ID\":\"257\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"17\"},\"typeID\":\"Label\",\"x\":\"136\",\"y\":\"2784\",\"zOrder\":\"257\"},{\"ID\":\"258\",\"measuredH\":\"32\",\"measuredW\":\"127\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"ElasticSearch\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"886\",\"y\":\"2781\",\"zOrder\":\"258\"},{\"ID\":\"259\",\"measuredH\":\"32\",\"measuredW\":\"47\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Solr\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"886\",\"y\":\"2817\",\"zOrder\":\"259\"},{\"ID\":\"260\",\"measuredH\":\"32\",\"measuredW\":\"69\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Sphinx\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"888\",\"y\":\"2853\",\"zOrder\":\"260\"},{\"ID\":\"261\",\"measuredH\":\"25\",\"measuredW\":\"564\",\"properties\":{\"size\":\"17\",\"text\":\"As the application grows, simple queries on your database aren't going to\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"165\",\"y\":\"2812\",\"zOrder\":\"261\"},{\"ID\":\"262\",\"measuredH\":\"25\",\"measuredW\":\"570\",\"properties\":{\"size\":\"17\",\"text\":\"cut it out and you will have to resort to a search engine. There are multiple\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"165\",\"y\":\"2837\",\"zOrder\":\"262\"},{\"ID\":\"263\",\"measuredH\":\"25\",\"measuredW\":\"313\",\"properties\":{\"size\":\"17\",\"text\":\"options, each having it's own differences.\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"165\",\"y\":\"2864\",\"zOrder\":\"263\"},{\"ID\":\"264\",\"h\":\"113\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"753\",\"y\":\"2350\",\"zOrder\":\"264\"},{\"ID\":\"265\",\"measuredH\":\"25\",\"measuredW\":\"184\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Creating RESTful APIs\"},\"typeID\":\"Label\",\"w\":\"203\",\"x\":\"802\",\"y\":\"2367\",\"zOrder\":\"265\"},{\"ID\":\"266\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"768\",\"y\":\"2367\",\"zOrder\":\"266\"},{\"ID\":\"267\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"14\"},\"typeID\":\"Label\",\"x\":\"773\",\"y\":\"2369\",\"zOrder\":\"267\"},{\"ID\":\"268\",\"measuredH\":\"25\",\"measuredW\":\"571\",\"properties\":{\"size\":\"17\",\"text\":\"Understand REST and learn how to make RESTful APIs and make sure to\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"803\",\"y\":\"2396\",\"zOrder\":\"268\"},{\"ID\":\"269\",\"measuredH\":\"25\",\"measuredW\":\"503\",\"properties\":{\"size\":\"17\",\"text\":\"read the part about REST from the original paper of *Roy Fielding*\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"803\",\"y\":\"2420\",\"zOrder\":\"269\"},{\"ID\":\"270\",\"h\":\"87\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"754\",\"y\":\"2470\",\"zOrder\":\"270\"},{\"ID\":\"271\",\"measuredH\":\"25\",\"measuredW\":\"354\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Authentication/Authorization Methodologies\"},\"typeID\":\"Label\",\"w\":\"377\",\"x\":\"805\",\"y\":\"2487\",\"zOrder\":\"271\"},{\"ID\":\"272\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"771\",\"y\":\"2487\",\"zOrder\":\"272\"},{\"ID\":\"273\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"15\"},\"typeID\":\"Label\",\"x\":\"776\",\"y\":\"2489\",\"zOrder\":\"273\"},{\"ID\":\"274\",\"measuredH\":\"25\",\"measuredW\":\"431\",\"properties\":{\"size\":\"17\",\"text\":\"Learn about the differences and how to implement them\"},\"typeID\":\"Label\",\"w\":\"495\",\"x\":\"804\",\"y\":\"2518\",\"zOrder\":\"274\"},{\"ID\":\"275\",\"measuredH\":\"32\",\"measuredW\":\"63\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"OAuth\"},\"typeID\":\"TextInput\",\"w\":\"210\",\"x\":\"386\",\"y\":\"2410\",\"zOrder\":\"275\"},{\"ID\":\"276\",\"measuredH\":\"32\",\"measuredW\":\"180\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Basic Authentication\"},\"typeID\":\"TextInput\",\"w\":\"210\",\"x\":\"386\",\"y\":\"2446\",\"zOrder\":\"276\"},{\"ID\":\"277\",\"measuredH\":\"32\",\"measuredW\":\"183\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Token Authentication\"},\"typeID\":\"TextInput\",\"w\":\"210\",\"x\":\"386\",\"y\":\"2482\",\"zOrder\":\"277\"},{\"ID\":\"278\",\"measuredH\":\"32\",\"measuredW\":\"55\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"JWT\"},\"typeID\":\"TextInput\",\"w\":\"210\",\"x\":\"386\",\"y\":\"2518\",\"zOrder\":\"278\"},{\"ID\":\"279\",\"measuredH\":\"32\",\"measuredW\":\"77\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"OpenID\"},\"typeID\":\"TextInput\",\"w\":\"210\",\"x\":\"387\",\"y\":\"2555\",\"zOrder\":\"279\"},{\"ID\":\"280\",\"h\":\"60\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"738\",\"y\":\"2924\",\"zOrder\":\"280\"},{\"ID\":\"281\",\"measuredH\":\"25\",\"measuredW\":\"207\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn How to Use Docker\"},\"typeID\":\"Label\",\"w\":\"280\",\"x\":\"788\",\"y\":\"2940\",\"zOrder\":\"281\"},{\"ID\":\"282\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"755\",\"y\":\"2939\",\"zOrder\":\"282\"},{\"ID\":\"283\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"18\"},\"typeID\":\"Label\",\"w\":\"14\",\"x\":\"760\",\"y\":\"2941\",\"zOrder\":\"283\"},{\"ID\":\"284\",\"h\":\"112\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"738\",\"y\":\"3180\",\"zOrder\":\"284\"},{\"ID\":\"285\",\"measuredH\":\"25\",\"measuredW\":\"124\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn GraphQL\"},\"typeID\":\"Label\",\"w\":\"153\",\"x\":\"788\",\"y\":\"3195\",\"zOrder\":\"285\"},{\"ID\":\"286\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"755\",\"y\":\"3194\",\"zOrder\":\"286\"},{\"ID\":\"287\",\"measuredH\":\"21\",\"measuredW\":\"14\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"21\"},\"typeID\":\"Label\",\"w\":\"14\",\"x\":\"760\",\"y\":\"3196\",\"zOrder\":\"287\"},{\"ID\":\"288\",\"measuredH\":\"25\",\"measuredW\":\"556\",\"properties\":{\"size\":\"17\",\"text\":\"While it is not required, feel free to have a look at it and see what it is all\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"789\",\"y\":\"3223\",\"zOrder\":\"288\"},{\"ID\":\"289\",\"measuredH\":\"25\",\"measuredW\":\"367\",\"properties\":{\"size\":\"17\",\"text\":\"about and why they are calling it the new REST\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"789\",\"y\":\"3250\",\"zOrder\":\"289\"},{\"ID\":\"290\",\"h\":\"114\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"738\",\"y\":\"2991\",\"zOrder\":\"290\"},{\"ID\":\"291\",\"measuredH\":\"25\",\"measuredW\":\"219\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Knowledge of Web Servers\"},\"typeID\":\"Label\",\"w\":\"280\",\"x\":\"789\",\"y\":\"3008\",\"zOrder\":\"291\"},{\"ID\":\"292\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"755\",\"y\":\"3006\",\"zOrder\":\"292\"},{\"ID\":\"293\",\"measuredH\":\"21\",\"measuredW\":\"13\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"19\"},\"typeID\":\"Label\",\"w\":\"14\",\"x\":\"760\",\"y\":\"3008\",\"zOrder\":\"293\"},{\"ID\":\"294\",\"measuredH\":\"25\",\"measuredW\":\"526\",\"properties\":{\"size\":\"17\",\"text\":\"There are several different options here, look at the different options,\"},\"typeID\":\"Label\",\"w\":\"566\",\"x\":\"789\",\"y\":\"3036\",\"zOrder\":\"294\"},{\"ID\":\"295\",\"measuredH\":\"25\",\"measuredW\":\"336\",\"properties\":{\"size\":\"17\",\"text\":\"understand their differences and limitations\"},\"typeID\":\"Label\",\"w\":\"566\",\"x\":\"790\",\"y\":\"3063\",\"zOrder\":\"295\"},{\"ID\":\"296\",\"measuredH\":\"32\",\"measuredW\":\"76\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Apache\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"403\",\"y\":\"2981\",\"zOrder\":\"296\"},{\"ID\":\"297\",\"measuredH\":\"32\",\"measuredW\":\"60\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Nginx\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"403\",\"y\":\"3017\",\"zOrder\":\"297\"},{\"ID\":\"298\",\"measuredH\":\"32\",\"measuredW\":\"67\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Caddy\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"405\",\"y\":\"3053\",\"zOrder\":\"298\"},{\"ID\":\"299\",\"measuredH\":\"32\",\"measuredW\":\"70\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"MS IIS\"},\"typeID\":\"TextInput\",\"w\":\"183\",\"x\":\"405\",\"y\":\"3090\",\"zOrder\":\"299\"},{\"ID\":\"300\",\"h\":\"60\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"739\",\"y\":\"3112\",\"zOrder\":\"300\"},{\"ID\":\"301\",\"measuredH\":\"25\",\"measuredW\":\"250\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn how to use Web Sockets\"},\"typeID\":\"Label\",\"w\":\"282\",\"x\":\"787\",\"y\":\"3129\",\"zOrder\":\"301\"},{\"ID\":\"302\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"754\",\"y\":\"3128\",\"zOrder\":\"302\"},{\"ID\":\"303\",\"measuredH\":\"21\",\"measuredW\":\"17\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"20\"},\"typeID\":\"Label\",\"w\":\"21\",\"x\":\"758\",\"y\":\"3130\",\"zOrder\":\"303\"},{\"ID\":\"304\",\"h\":\"112\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"638\",\"x\":\"216\",\"y\":\"3323\",\"zOrder\":\"304\"},{\"ID\":\"305\",\"measuredH\":\"25\",\"measuredW\":\"219\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Look into Graph Databases\"},\"typeID\":\"Label\",\"w\":\"231\",\"x\":\"266\",\"y\":\"3338\",\"zOrder\":\"305\"},{\"ID\":\"306\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"233\",\"y\":\"3337\",\"zOrder\":\"306\"},{\"ID\":\"307\",\"measuredH\":\"21\",\"measuredW\":\"17\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"22\"},\"typeID\":\"Label\",\"w\":\"29\",\"x\":\"237\",\"y\":\"3339\",\"zOrder\":\"307\"},{\"ID\":\"308\",\"measuredH\":\"25\",\"measuredW\":\"529\",\"properties\":{\"size\":\"17\",\"text\":\"Again not required but you should have a little understanding of what\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"267\",\"y\":\"3366\",\"zOrder\":\"308\"},{\"ID\":\"309\",\"measuredH\":\"25\",\"measuredW\":\"136\",\"properties\":{\"size\":\"17\",\"text\":\"they have to offer\"},\"typeID\":\"Label\",\"w\":\"574\",\"x\":\"267\",\"y\":\"3393\",\"zOrder\":\"309\"},{\"ID\":\"310\",\"h\":\"147\",\"measuredH\":\"146\",\"measuredW\":\"14\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":14,\"x\":14,\"y\":0},\"p1\":{\"length\":0.5865162746954035,\"x\":0.5864611260053622,\"y\":0.008042895442359291},\"p2\":{\"length\":146,\"x\":0,\"y\":146},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"15\",\"x\":\"537\",\"y\":\"3458\",\"zOrder\":\"310\"},{\"ID\":\"311\",\"measuredH\":\"32\",\"measuredW\":\"170\",\"properties\":{\"bold\":\"true\",\"size\":\"24\",\"text\":\"Keep Exploring\"},\"typeID\":\"Label\",\"x\":\"449\",\"y\":\"3628\",\"zOrder\":\"311\"},{\"ID\":\"312\",\"h\":\"87\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"637\",\"x\":\"216\",\"y\":\"3446\",\"zOrder\":\"312\"},{\"ID\":\"313\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"230\",\"y\":\"3460\",\"zOrder\":\"313\"},{\"ID\":\"314\",\"measuredH\":\"22\",\"measuredW\":\"18\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"size\":\"14\",\"text\":\"23\"},\"typeID\":\"Label\",\"w\":\"16\",\"x\":\"234\",\"y\":\"3462\",\"zOrder\":\"314\"},{\"ID\":\"315\",\"measuredH\":\"26\",\"measuredW\":\"371\",\"properties\":{\"bold\":\"true\",\"size\":\"18\",\"text\":\"All the things that weren't mentioned above\"},\"typeID\":\"Label\",\"w\":\"391\",\"x\":\"261\",\"y\":\"3459\",\"zOrder\":\"315\"},{\"ID\":\"316\",\"measuredH\":\"25\",\"measuredW\":\"367\",\"properties\":{\"size\":\"17\",\"text\":\"Profiling, Static Analysis, DDD, SOAP. Go Figure!\"},\"typeID\":\"Label\",\"x\":\"262\",\"y\":\"3486\",\"zOrder\":\"316\"},{\"ID\":\"317\",\"h\":\"141\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"properties\":{},\"typeID\":\"Canvas\",\"w\":\"350\",\"x\":\"974\",\"y\":\"37\",\"zOrder\":\"317\"},{\"ID\":\"318\",\"measuredH\":\"25\",\"measuredW\":\"314\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"Find the detailed version of this roadmap\"},\"typeID\":\"Label\",\"x\":\"988\",\"y\":\"54\",\"zOrder\":\"318\"},{\"ID\":\"319\",\"measuredH\":\"25\",\"measuredW\":\"322\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"along with resources and other roadmaps\"},\"typeID\":\"Label\",\"x\":\"988\",\"y\":\"82\",\"zOrder\":\"319\"},{\"ID\":\"320\",\"h\":\"45\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"properties\":{\"borderColor\":\"4273622\",\"color\":\"4273622\"},\"typeID\":\"Canvas\",\"w\":\"320\",\"x\":\"989\",\"y\":\"118\",\"zOrder\":\"320\"},{\"ID\":\"321\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"28\",\"measuredW\":\"103\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"roadmap.sh\"},\"typeID\":\"Label\",\"x\":\"65\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"28\",\"measuredW\":\"36\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"http\"},\"typeID\":\"Label\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"size\":\"20\",\"text\":\":\"},\"typeID\":\"Label\",\"x\":\"37\",\"y\":\"0\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"},\"typeID\":\"Label\",\"x\":\"44\",\"y\":\"1\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"},\"typeID\":\"Label\",\"x\":\"52\",\"y\":\"1\",\"zOrder\":\"4\"}]}},\"h\":\"29\",\"measuredH\":\"29\",\"measuredW\":\"168\",\"typeID\":\"__group__\",\"w\":\"168\",\"x\":\"1065\",\"y\":\"126\",\"zOrder\":\"321\"}]},\"measuredH\":\"3660\",\"measuredW\":\"1392\",\"mockupH\":\"3625\",\"mockupW\":\"1284\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./storage/project/devops-map.json":
/*!*****************************************!*\
  !*** ./storage/project/devops-map.json ***!
  \*****************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"324\",\"h\":\"54\",\"measuredH\":\"53\",\"measuredW\":\"42\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.5684273538382603,\"y\":-0.01687523160685284,\"length\":0.5686777910498629},\"p2\":{\"x\":42,\"y\":53,\"length\":67.62396025078685},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"43\",\"x\":\"1006\",\"y\":\"1580\",\"zOrder\":\"0\"},{\"ID\":\"325\",\"h\":\"65\",\"measuredH\":\"64\",\"measuredW\":\"43\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":43,\"y\":0,\"length\":43},\"p1\":{\"x\":0.56842735383826,\"y\":-0.0168752316068528,\"length\":0.5686777910498628},\"p2\":{\"x\":0,\"y\":64,\"length\":64},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"44\",\"x\":\"953\",\"y\":\"1570\",\"zOrder\":\"1\"},{\"ID\":\"326\",\"h\":\"64\",\"measuredH\":\"64\",\"measuredW\":\"210\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.6469975327179537,\"y\":0.10750144461308028,\"length\":0.6558676451365921},\"p2\":{\"x\":210,\"y\":64,\"length\":219.5358740616212},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"210\",\"x\":\"1024\",\"y\":\"1491\",\"zOrder\":\"2\"},{\"ID\":\"327\",\"h\":\"190\",\"measuredH\":\"189\",\"measuredW\":\"205\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":3,\"length\":3},\"p1\":{\"x\":0.4996671930671748,\"y\":0.28262486785607077,\"length\":0.5740593347018152},\"p2\":{\"x\":205,\"y\":189,\"length\":278.82969712711736},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"206\",\"x\":\"520\",\"y\":\"2136\",\"zOrder\":\"3\"},{\"ID\":\"328\",\"h\":\"56\",\"measuredH\":\"55\",\"measuredW\":\"64\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":64,\"y\":55,\"length\":84.38601779915912},\"p1\":{\"x\":0.5073725600337035,\"y\":0.2641482937789639,\"length\":0.5720150660441488},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"65\",\"x\":\"213\",\"y\":\"2086\",\"zOrder\":\"4\"},{\"ID\":\"329\",\"h\":\"57\",\"measuredH\":\"57\",\"measuredW\":\"42\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":41.6666666666672,\"y\":0,\"length\":41.6666666666672},\"p1\":{\"x\":0.5941112538286724,\"y\":0.04050983104436302,\"length\":0.5954907458030897},\"p2\":{\"x\":0,\"y\":56.66666666666674,\"length\":56.66666666666674},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"42\",\"x\":\"658\",\"y\":\"1980\",\"zOrder\":\"5\"},{\"ID\":\"330\",\"h\":\"282\",\"measuredH\":\"281\",\"measuredW\":\"49\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":281,\"length\":281},\"p1\":{\"x\":0.4804581786141355,\"y\":-0.13676128138964064,\"length\":0.49954350109329715},\"p2\":{\"x\":22,\"y\":0,\"length\":22},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"50\",\"x\":\"427\",\"y\":\"1842\",\"zOrder\":\"6\"},{\"ID\":\"331\",\"h\":\"1\",\"measuredH\":\"2\",\"measuredW\":\"43\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":42.66666666666663,\"y\":1.328384025265565,\"length\":42.68734061244647},\"p1\":{\"x\":0.5684273538382602,\"y\":-0.016875231606852725,\"length\":0.5686777910498628},\"p2\":{\"x\":0,\"y\":0.383271768326493,\"length\":0.383271768326493},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"43\",\"x\":\"654\",\"y\":\"1964\",\"zOrder\":\"7\"},{\"ID\":\"332\",\"h\":\"43\",\"measuredH\":\"43\",\"measuredW\":\"39\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":39,\"y\":43,\"length\":58.05170109479997},\"p1\":{\"x\":0.5684273538382602,\"y\":-0.016875231606852777,\"length\":0.5686777910498628},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"39\",\"x\":\"657\",\"y\":\"1921\",\"zOrder\":\"8\"},{\"ID\":\"333\",\"h\":\"34\",\"measuredH\":\"34\",\"measuredW\":\"40\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":33.66666666666674,\"length\":33.66666666666674},\"p1\":{\"x\":0.4988,\"y\":0.031599999999999955,\"length\":0.499799959983992},\"p2\":{\"x\":39.41051612824472,\"y\":0,\"length\":39.41051612824472},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"39\",\"x\":\"657\",\"y\":\"1971\",\"zOrder\":\"9\"},{\"ID\":\"334\",\"h\":\"107\",\"measuredH\":\"108\",\"measuredW\":\"13\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":12.333333333333371,\"y\":107.33333333333326,\"length\":108.03960179284049},\"p1\":{\"x\":0.5684273538382596,\"y\":-0.016875231606852795,\"length\":0.5686777910498624},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"12\",\"x\":\"763\",\"y\":\"1850\",\"zOrder\":\"10\"},{\"ID\":\"335\",\"h\":\"76\",\"measuredH\":\"75\",\"measuredW\":\"84\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":84,\"y\":75,\"length\":112.60994627474076},\"p1\":{\"x\":0.56842735383826,\"y\":-0.016875231606852743,\"length\":0.5686777910498628},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"85\",\"x\":\"1004\",\"y\":\"1904\",\"zOrder\":\"11\"},{\"ID\":\"336\",\"h\":\"69\",\"measuredH\":\"70\",\"measuredW\":\"2\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":69.00000000000045,\"length\":69.00000000000045},\"p1\":{\"x\":0.5684273538382597,\"y\":-0.016875231606852746,\"length\":0.5686777910498624},\"p2\":{\"x\":1.3333333333333712,\"y\":0,\"length\":1.3333333333333712},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"2\",\"x\":\"990\",\"y\":\"1897\",\"zOrder\":\"12\"},{\"ID\":\"337\",\"h\":\"165\",\"measuredH\":\"166\",\"measuredW\":\"113\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":112.33333333333326,\"y\":165.33333333333326,\"length\":199.88468898064414},\"p1\":{\"x\":0.5684273538382603,\"y\":-0.016875231606852836,\"length\":0.5686777910498629},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"112\",\"x\":\"1047\",\"y\":\"1806\",\"zOrder\":\"13\"},{\"ID\":\"338\",\"h\":\"50\",\"measuredH\":\"50\",\"measuredW\":\"113\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":112.33333333333336,\"y\":49.66666666666674,\"length\":122.82326960130791},\"p1\":{\"x\":0.5684273538382599,\"y\":-0.016875231606852784,\"length\":0.5686777910498627},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"112\",\"x\":\"753\",\"y\":\"1833\",\"zOrder\":\"14\"},{\"ID\":\"339\",\"h\":\"112\",\"measuredH\":\"112\",\"measuredW\":\"105\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":104.33333333333326,\"y\":111.66666666666674,\"length\":152.82306399522582},\"p1\":{\"x\":0.5684273538382603,\"y\":-0.01687523160685287,\"length\":0.5686777910498629},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"104\",\"x\":\"1055\",\"y\":\"1815\",\"zOrder\":\"15\"},{\"ID\":\"340\",\"h\":\"72\",\"measuredH\":\"73\",\"measuredW\":\"103\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":103,\"y\":72.33333333333326,\"length\":125.86147588166564},\"p1\":{\"x\":0.5684273538382603,\"y\":-0.016875231606852687,\"length\":0.5686777910498629},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"103\",\"x\":\"1057\",\"y\":\"1809\",\"zOrder\":\"16\"},{\"ID\":\"341\",\"h\":\"36\",\"measuredH\":\"36\",\"measuredW\":\"105\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":104.66666666666674,\"y\":35.66666666666674,\"length\":110.57677071710063},\"p1\":{\"x\":0.56842735383826,\"y\":-0.01687523160685275,\"length\":0.5686777910498628},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"105\",\"x\":\"1058\",\"y\":\"1801\",\"zOrder\":\"17\"},{\"ID\":\"342\",\"h\":\"2\",\"measuredH\":\"3\",\"measuredW\":\"99\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":98.3333333333344,\"y\":0.9516147139185224,\"length\":98.33793782161796},\"p1\":{\"x\":0.5684273538382603,\"y\":-0.016875231606852767,\"length\":0.5686777910498629},\"p2\":{\"x\":0,\"y\":2.330316019519209,\"length\":2.330316019519209},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"98\",\"x\":\"1054\",\"y\":\"1791\",\"zOrder\":\"18\"},{\"ID\":\"343\",\"h\":\"154\",\"measuredH\":\"153\",\"measuredW\":\"5\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":5,\"y\":153,\"length\":153.08167754502824},\"p1\":{\"x\":0.3921652300076813,\"y\":0.00025603823504313615,\"length\":0.3921653135892507},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"6\",\"x\":\"1106\",\"y\":\"834\",\"zOrder\":\"19\"},{\"ID\":\"344\",\"h\":\"108\",\"measuredH\":\"107\",\"measuredW\":\"3\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":3,\"y\":107,\"length\":107.0420478129973},\"p1\":{\"x\":0.39221504625589126,\"y\":-0.0109966835398848,\"length\":0.39236917508691643},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"4\",\"x\":\"1066\",\"y\":\"834\",\"zOrder\":\"20\"},{\"ID\":\"345\",\"h\":\"73\",\"measuredH\":\"72\",\"measuredW\":\"5\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":5,\"y\":72,\"length\":72.17340230306452},\"p1\":{\"x\":0.3433950804737322,\"y\":0.04300030367446098,\"length\":0.34607688077890564},\"p2\":{\"x\":1,\"y\":0,\"length\":1},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"6\",\"x\":\"1026\",\"y\":\"830\",\"zOrder\":\"21\"},{\"ID\":\"346\",\"h\":\"64\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"286\",\"x\":\"855\",\"y\":\"971\",\"zOrder\":\"22\"},{\"ID\":\"347\",\"measuredH\":\"23\",\"measuredW\":\"199\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Compiling apps from source\"},\"typeID\":\"Label\",\"w\":\"204\",\"x\":\"896\",\"y\":\"980\",\"zOrder\":\"23\"},{\"ID\":\"348\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"188\",\"x\":\"855\",\"y\":\"884\",\"zOrder\":\"24\"},{\"ID\":\"349\",\"measuredH\":\"23\",\"measuredW\":\"151\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Learn Bash Scripting\"},\"typeID\":\"Label\",\"w\":\"153\",\"x\":\"873\",\"y\":\"893\",\"zOrder\":\"25\"},{\"ID\":\"350\",\"measuredH\":\"23\",\"measuredW\":\"251\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"(gcc, make and other related stuff)\"},\"typeID\":\"Label\",\"w\":\"255\",\"x\":\"871\",\"y\":\"1000\",\"zOrder\":\"26\"},{\"ID\":\"351\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"230\",\"x\":\"855\",\"y\":\"928\",\"zOrder\":\"27\"},{\"ID\":\"352\",\"measuredH\":\"23\",\"measuredW\":\"207\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Vim/Nano/PowerShell/Emacs\"},\"typeID\":\"Label\",\"w\":\"211\",\"x\":\"865\",\"y\":\"936\",\"zOrder\":\"28\"},{\"ID\":\"353\",\"h\":\"104\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"580\",\"y\":\"884\",\"zOrder\":\"29\"},{\"ID\":\"354\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"borderColor\":\"16777215\",\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"218\",\"x\":\"614\",\"y\":\"887\",\"zOrder\":\"30\"},{\"ID\":\"355\",\"measuredH\":\"23\",\"measuredW\":\"165\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Text Manipulation Tools\"},\"typeID\":\"Label\",\"w\":\"169\",\"x\":\"637\",\"y\":\"897\",\"zOrder\":\"31\"},{\"ID\":\"356\",\"measuredH\":\"22\",\"measuredW\":\"224\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"awk, sed, grep, sort, uniq, cat, cut\"},\"typeID\":\"Label\",\"w\":\"231\",\"x\":\"604\",\"y\":\"931\",\"zOrder\":\"32\"},{\"ID\":\"357\",\"measuredH\":\"22\",\"measuredW\":\"208\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"echo, fmt, tr, nl, egrep, fgrep, wc\"},\"typeID\":\"Label\",\"w\":\"228\",\"x\":\"604\",\"y\":\"954\",\"zOrder\":\"33\"},{\"ID\":\"358\",\"h\":\"78\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"268\",\"x\":\"582\",\"y\":\"992\",\"zOrder\":\"34\"},{\"ID\":\"359\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"borderColor\":\"16777215\",\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"218\",\"x\":\"616\",\"y\":\"995\",\"zOrder\":\"35\"},{\"ID\":\"360\",\"measuredH\":\"23\",\"measuredW\":\"138\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Process Monitoring\"},\"typeID\":\"Label\",\"w\":\"169\",\"x\":\"639\",\"y\":\"1005\",\"zOrder\":\"36\"},{\"ID\":\"361\",\"measuredH\":\"22\",\"measuredW\":\"146\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"ps, top, htop, atop, lsof\"},\"typeID\":\"Label\",\"w\":\"159\",\"x\":\"647\",\"y\":\"1038\",\"zOrder\":\"37\"},{\"ID\":\"362\",\"h\":\"78\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"229\",\"x\":\"856\",\"y\":\"1039\",\"zOrder\":\"38\"},{\"ID\":\"363\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"borderColor\":\"16777215\",\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"218\",\"x\":\"862\",\"y\":\"1043\",\"zOrder\":\"39\"},{\"ID\":\"364\",\"measuredH\":\"23\",\"measuredW\":\"152\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"System Performance\"},\"typeID\":\"Label\",\"w\":\"169\",\"x\":\"885\",\"y\":\"1053\",\"zOrder\":\"40\"},{\"ID\":\"365\",\"measuredH\":\"22\",\"measuredW\":\"163\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"nmon, iostat, sar, vmstat\"},\"typeID\":\"Label\",\"w\":\"172\",\"x\":\"885\",\"y\":\"1086\",\"zOrder\":\"41\"},{\"ID\":\"366\",\"h\":\"126\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"268\",\"x\":\"582\",\"y\":\"1075\",\"zOrder\":\"42\"},{\"ID\":\"367\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"borderColor\":\"16777215\",\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"218\",\"x\":\"610\",\"y\":\"1083\",\"zOrder\":\"43\"},{\"ID\":\"368\",\"measuredH\":\"23\",\"measuredW\":\"59\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Network\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"685\",\"y\":\"1093\",\"zOrder\":\"44\"},{\"ID\":\"369\",\"measuredH\":\"22\",\"measuredW\":\"240\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"nmap, tcpdump, ping, mtr, traceroute\"},\"typeID\":\"Label\",\"w\":\"243\",\"x\":\"598\",\"y\":\"1128\",\"zOrder\":\"45\"},{\"ID\":\"370\",\"measuredH\":\"22\",\"measuredW\":\"200\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"airmon, airodump, dig, iptables\"},\"typeID\":\"Label\",\"w\":\"204\",\"x\":\"617\",\"y\":\"1150\",\"zOrder\":\"46\"},{\"ID\":\"371\",\"h\":\"78\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"285\",\"x\":\"856\",\"y\":\"1122\",\"zOrder\":\"47\"},{\"ID\":\"372\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"borderColor\":\"16777215\",\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"76\",\"x\":\"862\",\"y\":\"1138\",\"zOrder\":\"48\"},{\"ID\":\"373\",\"measuredH\":\"23\",\"measuredW\":\"50\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Others\"},\"typeID\":\"Label\",\"w\":\"57\",\"x\":\"871\",\"y\":\"1147\",\"zOrder\":\"49\"},{\"ID\":\"374\",\"measuredH\":\"22\",\"measuredW\":\"171\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"strace, dtrace, systemtap\"},\"typeID\":\"Label\",\"w\":\"172\",\"x\":\"954\",\"y\":\"1139\",\"zOrder\":\"50\"},{\"ID\":\"375\",\"measuredH\":\"22\",\"measuredW\":\"116\",\"properties\":{\"bold\":\"true\",\"size\":\"14\",\"text\":\"uname, df, history\"},\"typeID\":\"Label\",\"w\":\"172\",\"x\":\"954\",\"y\":\"1159\",\"zOrder\":\"51\"},{\"ID\":\"376\",\"h\":\"33\",\"measuredH\":\"33\",\"measuredW\":\"108\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":108,\"y\":0,\"length\":108},\"p1\":{\"x\":0.5684273538382599,\"y\":-0.016875231606852767,\"length\":0.5686777910498627},\"p2\":{\"x\":0,\"y\":33,\"length\":33},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"108\",\"x\":\"763\",\"y\":\"1801\",\"zOrder\":\"52\"},{\"ID\":\"377\",\"h\":\"219\",\"measuredH\":\"218\",\"measuredW\":\"73\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":73,\"y\":218,\"length\":229.8978033822855},\"p1\":{\"x\":0.4707334554431791,\"y\":0.20422871705025086,\"length\":0.5131270358707158},\"p2\":{\"x\":21,\"y\":0,\"length\":21},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"74\",\"x\":\"362\",\"y\":\"1599\",\"zOrder\":\"53\"},{\"ID\":\"378\",\"h\":\"58\",\"measuredH\":\"57\",\"measuredW\":\"6\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":6,\"y\":0,\"length\":6},\"p1\":{\"x\":0.5684273538382604,\"y\":-0.01687523160685275,\"length\":0.5686777910498632},\"p2\":{\"x\":0,\"y\":57,\"length\":57},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"7\",\"x\":\"207\",\"y\":\"1593\",\"zOrder\":\"54\"},{\"ID\":\"379\",\"h\":\"104\",\"measuredH\":\"103\",\"measuredW\":\"351\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":351,\"y\":5,\"length\":351.03561072916807},\"p1\":{\"x\":0.6352396370618576,\"y\":-0.1431723203192651,\"length\":0.6511741009899601},\"p2\":{\"x\":0,\"y\":103,\"length\":103},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"352\",\"x\":\"387\",\"y\":\"1475\",\"zOrder\":\"55\"},{\"ID\":\"380\",\"h\":\"55\",\"measuredH\":\"54\",\"measuredW\":\"207\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":207,\"y\":0,\"length\":207},\"p1\":{\"x\":0.6815856777493605,\"y\":-0.0997442455242967,\"length\":0.6888453749777712},\"p2\":{\"x\":0,\"y\":54,\"length\":54},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"208\",\"x\":\"537\",\"y\":\"1494\",\"zOrder\":\"56\"},{\"ID\":\"381\",\"h\":\"54\",\"measuredH\":\"53\",\"measuredW\":\"42\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.5684273538382603,\"y\":-0.01687523160685284,\"length\":0.5686777910498629},\"p2\":{\"x\":42,\"y\":53,\"length\":67.62396025078685},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"43\",\"x\":\"746\",\"y\":\"1580\",\"zOrder\":\"57\"},{\"ID\":\"382\",\"h\":\"65\",\"measuredH\":\"64\",\"measuredW\":\"43\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":43,\"y\":0,\"length\":43},\"p1\":{\"x\":0.56842735383826,\"y\":-0.0168752316068528,\"length\":0.5686777910498628},\"p2\":{\"x\":0,\"y\":64,\"length\":64},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"44\",\"x\":\"693\",\"y\":\"1570\",\"zOrder\":\"58\"},{\"ID\":\"383\",\"h\":\"70\",\"measuredH\":\"69\",\"measuredW\":\"36\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":36,\"y\":0,\"length\":36},\"p1\":{\"x\":0.56842735383826,\"y\":-0.016875231606852722,\"length\":0.5686777910498628},\"p2\":{\"x\":0,\"y\":69,\"length\":69},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"37\",\"x\":\"796\",\"y\":\"1492\",\"zOrder\":\"59\"},{\"ID\":\"384\",\"h\":\"66\",\"measuredH\":\"65\",\"measuredW\":\"2\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":0,\"length\":1},\"p1\":{\"x\":0.56842735383826,\"y\":-0.01687523160685271,\"length\":0.5686777910498628},\"p2\":{\"x\":2,\"y\":65,\"length\":65.03076195155643},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"3\",\"x\":\"1232\",\"y\":\"1575\",\"zOrder\":\"60\"},{\"ID\":\"385\",\"h\":\"45\",\"measuredH\":\"45\",\"measuredW\":\"32\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.5684273538382599,\"y\":-0.01687523160685271,\"length\":0.5686777910498627},\"p2\":{\"x\":32,\"y\":45,\"length\":55.21775076911409},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"32\",\"x\":\"964\",\"y\":\"1508\",\"zOrder\":\"61\"},{\"ID\":\"386\",\"h\":\"71\",\"measuredH\":\"70\",\"measuredW\":\"6\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":6,\"y\":0,\"length\":6},\"p1\":{\"x\":0.55,\"y\":0.024999999999999935,\"length\":0.550567888638631},\"p2\":{\"x\":0,\"y\":70,\"length\":70},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"7\",\"x\":\"464\",\"y\":\"1264\",\"zOrder\":\"62\"},{\"ID\":\"387\",\"h\":\"64\",\"measuredH\":\"63\",\"measuredW\":\"78\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.40013162224415905,\"y\":0.005923000987166839,\"length\":0.4001754578437268},\"p2\":{\"x\":78,\"y\":63,\"length\":100.26464980241042},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"79\",\"x\":\"787\",\"y\":\"1247\",\"zOrder\":\"63\"},{\"ID\":\"388\",\"h\":\"47\",\"measuredH\":\"46\",\"measuredW\":\"34\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":34,\"y\":46,\"length\":57.201398584300364},\"p1\":{\"x\":0.40610013427968555,\"y\":0.19892576251678504,\"length\":0.45220435430772116},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"35\",\"x\":\"216\",\"y\":\"1037\",\"zOrder\":\"64\"},{\"ID\":\"389\",\"h\":\"48\",\"measuredH\":\"47\",\"measuredW\":\"45\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":47,\"length\":47},\"p1\":{\"x\":0.5474728389230042,\"y\":0.18375059045819558,\"length\":0.577486613569656},\"p2\":{\"x\":45,\"y\":0,\"length\":45},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"46\",\"x\":\"203\",\"y\":\"1094\",\"zOrder\":\"65\"},{\"ID\":\"390\",\"h\":\"34\",\"measuredH\":\"33\",\"measuredW\":\"124\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":124,\"y\":33,\"length\":128.3160161476345},\"p1\":{\"x\":0.3433950804737322,\"y\":0.04300030367446098,\"length\":0.34607688077890564},\"p2\":{\"x\":0,\"y\":0,\"length\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"125\",\"x\":\"848\",\"y\":\"644\",\"zOrder\":\"66\"},{\"ID\":\"391\",\"h\":\"45\",\"measuredH\":\"44\",\"measuredW\":\"77\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":77,\"y\":0,\"length\":77},\"p1\":{\"x\":0.41515434985968175,\"y\":-0.026566884939195477,\"length\":0.4160035259259079},\"p2\":{\"x\":0,\"y\":44,\"length\":44},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"78\",\"x\":\"866\",\"y\":\"585\",\"zOrder\":\"67\"},{\"ID\":\"392\",\"h\":\"40\",\"measuredH\":\"39\",\"measuredW\":\"90\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.6399394856278366,\"y\":0.1664145234493191,\"length\":0.6612233653467519},\"p2\":{\"x\":90,\"y\":39,\"length\":98.08669634563088},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"91\",\"x\":\"854\",\"y\":\"762\",\"zOrder\":\"68\"},{\"ID\":\"393\",\"h\":\"57\",\"measuredH\":\"56\",\"measuredW\":\"2\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":2,\"y\":0,\"length\":2},\"p1\":{\"x\":0.35250000000000015,\"y\":-0.017499999999999967,\"length\":0.35293412983161615},\"p2\":{\"x\":1,\"y\":56,\"length\":56.00892785976178},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"3\",\"x\":\"313\",\"y\":\"758\",\"zOrder\":\"69\"},{\"ID\":\"394\",\"h\":\"220\",\"measuredH\":\"219\",\"measuredW\":\"149\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.4950543028990049,\"y\":0.1974288076166585,\"length\":0.5329698836667558},\"p2\":{\"x\":149,\"y\":219,\"length\":264.8811054039151},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"149\",\"x\":\"684\",\"y\":\"1259\",\"zOrder\":\"70\"},{\"ID\":\"395\",\"h\":\"95\",\"measuredH\":\"94\",\"measuredW\":\"2\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":0,\"length\":1},\"p1\":{\"x\":0.6144578313253012,\"y\":-0.012048192771084333,\"length\":0.6145759395111734},\"p2\":{\"x\":2,\"y\":94,\"length\":94.02127418834527},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"3\",\"x\":\"603\",\"y\":\"1261\",\"zOrder\":\"71\"},{\"ID\":\"396\",\"h\":\"53\",\"measuredH\":\"52\",\"measuredW\":\"79\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":52,\"length\":52},\"p1\":{\"x\":0.3488372093023255,\"y\":0.005813953488372137,\"length\":0.3488856555506394},\"p2\":{\"x\":79,\"y\":0,\"length\":79},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"80\",\"x\":\"1005\",\"y\":\"1251\",\"zOrder\":\"72\"},{\"ID\":\"397\",\"h\":\"96\",\"measuredH\":\"95\",\"measuredW\":\"83\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.3999439854362135,\"y\":-0.036969612099145746,\"length\":0.4016490305046976},\"p2\":{\"x\":83,\"y\":95,\"length\":126.15070352558483},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"84\",\"x\":\"1001\",\"y\":\"1339\",\"zOrder\":\"73\"},{\"ID\":\"398\",\"h\":\"60\",\"measuredH\":\"59\",\"measuredW\":\"75\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.39994398543621346,\"y\":-0.03696961209914577,\"length\":0.4016490305046975},\"p2\":{\"x\":75,\"y\":59,\"length\":95.42536350467836},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"76\",\"x\":\"1007\",\"y\":\"1329\",\"zOrder\":\"74\"},{\"ID\":\"399\",\"h\":\"16\",\"measuredH\":\"15\",\"measuredW\":\"71\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.3488372093023254,\"y\":0.005813953488372056,\"length\":0.34888565555063933},\"p2\":{\"x\":71,\"y\":15,\"length\":72.56721022610694},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"72\",\"x\":\"1011\",\"y\":\"1323\",\"zOrder\":\"75\"},{\"ID\":\"400\",\"h\":\"19\",\"measuredH\":\"18\",\"measuredW\":\"74\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":18,\"length\":18},\"p1\":{\"x\":0.348837209302325,\"y\":0.005813953488372172,\"length\":0.3488856555506389},\"p2\":{\"x\":74,\"y\":0,\"length\":74},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"75\",\"x\":\"1001\",\"y\":\"1297\",\"zOrder\":\"76\"},{\"ID\":\"401\",\"h\":\"130\",\"measuredH\":\"129\",\"measuredW\":\"160\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.4699936081058687,\"y\":-0.10231765346464336,\"length\":0.48100196867672357},\"p2\":{\"x\":160,\"y\":129,\"length\":205.526154053444},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"161\",\"x\":\"436\",\"y\":\"1104\",\"zOrder\":\"77\"},{\"ID\":\"402\",\"h\":\"239\",\"measuredH\":\"238\",\"measuredW\":\"129\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":129,\"y\":0,\"length\":129},\"p1\":{\"x\":0.5446521822273871,\"y\":-0.11694444035833539,\"length\":0.5570655273267043},\"p2\":{\"x\":1,\"y\":238,\"length\":238.0021008310641},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"130\",\"x\":\"426\",\"y\":\"834\",\"zOrder\":\"78\"},{\"ID\":\"403\",\"h\":\"4\",\"measuredH\":\"3\",\"measuredW\":\"146\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.35159873077861853,\"y\":-0.002318769831584085,\"length\":0.35160637676052936},\"p2\":{\"x\":146,\"y\":3,\"length\":146.03081866510234},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"147\",\"x\":\"349\",\"y\":\"751\",\"zOrder\":\"79\"},{\"ID\":\"404\",\"h\":\"62\",\"measuredH\":\"61\",\"measuredW\":\"14\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.5107471852610039,\"y\":0.2082906857727739,\"length\":0.5515865272391365},\"p2\":{\"x\":3,\"y\":61,\"length\":61.07372593840988},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"15\",\"x\":\"621\",\"y\":\"656\",\"zOrder\":\"80\"},{\"ID\":\"405\",\"h\":\"11\",\"measuredH\":\"10\",\"measuredW\":\"103\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":103,\"y\":1,\"length\":103.00485425454472},\"p1\":{\"x\":0.41515434985968175,\"y\":-0.02656688493919549,\"length\":0.4160035259259079},\"p2\":{\"x\":0,\"y\":10,\"length\":10},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"104\",\"x\":\"861\",\"y\":\"630\",\"zOrder\":\"81\"},{\"ID\":\"406\",\"h\":\"36\",\"measuredH\":\"35\",\"measuredW\":\"91\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":35,\"length\":35},\"p1\":{\"x\":0.3525,\"y\":-0.017500000000000012,\"length\":0.352934129831616},\"p2\":{\"x\":91,\"y\":0,\"length\":91},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"92\",\"x\":\"410\",\"y\":\"643\",\"zOrder\":\"82\"},{\"ID\":\"407\",\"h\":\"8\",\"measuredH\":\"7\",\"measuredW\":\"85\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.35250000000000004,\"y\":-0.01750000000000001,\"length\":0.35293412983161604},\"p2\":{\"x\":85,\"y\":7,\"length\":85.28774824088158},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"86\",\"x\":\"408\",\"y\":\"635\",\"zOrder\":\"83\"},{\"ID\":\"408\",\"h\":\"60\",\"measuredH\":\"59\",\"measuredW\":\"95\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.3525,\"y\":-0.017500000000000036,\"length\":0.35293412983161604},\"p2\":{\"x\":95,\"y\":59,\"length\":111.83022847155415},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"96\",\"x\":\"407\",\"y\":\"583\",\"zOrder\":\"84\"},{\"ID\":\"409\",\"h\":\"85\",\"measuredH\":\"84\",\"measuredW\":\"23\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":23,\"y\":0,\"length\":23},\"p1\":{\"x\":0.492839214528274,\"y\":-0.20183079875978152,\"length\":0.5325656416864099},\"p2\":{\"x\":13,\"y\":84,\"length\":85},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"24\",\"x\":\"597\",\"y\":\"538\",\"zOrder\":\"85\"},{\"ID\":\"410\",\"h\":\"97\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"341\",\"x\":\"484\",\"y\":\"448\",\"zOrder\":\"86\"},{\"ID\":\"411\",\"h\":\"54\",\"measuredH\":\"53\",\"measuredW\":\"166\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":166,\"y\":53},\"p1\":{\"x\":0.3433950804737322,\"y\":0.04300030367446098},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"167\",\"x\":\"817\",\"y\":\"428\",\"zOrder\":\"87\"},{\"ID\":\"412\",\"h\":\"12\",\"measuredH\":\"11\",\"measuredW\":\"173\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":173,\"y\":11},\"p1\":{\"x\":0.35191347753743757,\"y\":0.0108153078202995},\"p2\":{\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"174\",\"x\":\"814\",\"y\":\"422\",\"zOrder\":\"88\"},{\"ID\":\"413\",\"h\":\"30\",\"measuredH\":\"29\",\"measuredW\":\"183\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":183,\"y\":1},\"p1\":{\"x\":0.37895270841553463,\"y\":-0.035454596696916744},\"p2\":{\"x\":0,\"y\":29},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"184\",\"x\":\"803\",\"y\":\"388\",\"zOrder\":\"89\"},{\"ID\":\"414\",\"h\":\"41\",\"measuredH\":\"40\",\"measuredW\":\"120\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":40,\"length\":40},\"p1\":{\"x\":0.3525,\"y\":-0.0175,\"length\":0.352934129831616},\"p2\":{\"x\":120,\"y\":0,\"length\":120},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"121\",\"x\":\"383\",\"y\":\"429\",\"zOrder\":\"90\"},{\"ID\":\"415\",\"h\":\"5\",\"measuredH\":\"4\",\"measuredW\":\"118\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":4,\"length\":4},\"p1\":{\"x\":0.3816771970132108,\"y\":0.01895462377943711,\"length\":0.38214756375316766},\"p2\":{\"x\":118,\"y\":2,\"length\":118.01694793545543},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"119\",\"x\":\"388\",\"y\":\"419\",\"zOrder\":\"91\"},{\"ID\":\"416\",\"h\":\"34\",\"measuredH\":\"33\",\"measuredW\":\"109\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":1,\"length\":1},\"p1\":{\"x\":0.3586981790003874,\"y\":0.059434327779930254,\"length\":0.3635888102470236},\"p2\":{\"x\":109,\"y\":33,\"length\":113.8859078200635},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"110\",\"x\":\"387\",\"y\":\"378\",\"zOrder\":\"92\"},{\"ID\":\"417\",\"measuredH\":\"40\",\"measuredW\":\"119\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"DevOps\"},\"typeID\":\"Label\",\"x\":\"578\",\"y\":\"236\",\"zOrder\":\"93\"},{\"ID\":\"418\",\"h\":\"68\",\"measuredH\":\"67\",\"measuredW\":\"15\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":13,\"y\":0,\"length\":13},\"p1\":{\"x\":0.46601941747572834,\"y\":0.1067961165048544,\"length\":0.4780998932910732},\"p2\":{\"x\":0,\"y\":67,\"length\":67},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"16\",\"x\":\"642\",\"y\":\"161\",\"zOrder\":\"94\"},{\"ID\":\"419\",\"h\":\"117\",\"measuredH\":\"116\",\"measuredW\":\"27\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":14,\"y\":0},\"p1\":{\"x\":0.49697831496622813,\"y\":-0.169925346605048},\"p2\":{\"x\":27,\"y\":116},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"28\",\"x\":\"605\",\"y\":\"292\",\"zOrder\":\"95\"},{\"ID\":\"424\",\"h\":\"53\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"341\",\"x\":\"484\",\"y\":\"389\",\"zOrder\":\"96\"},{\"ID\":\"425\",\"measuredH\":\"25\",\"measuredW\":\"255\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn a Programming Language\"},\"typeID\":\"Label\",\"x\":\"534\",\"y\":\"403\",\"zOrder\":\"97\"},{\"ID\":\"426\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"500\",\"y\":\"403\",\"zOrder\":\"98\"},{\"ID\":\"427\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"1\"},\"typeID\":\"Label\",\"x\":\"509\",\"y\":\"405\",\"zOrder\":\"99\"},{\"ID\":\"428\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"259\",\"y\":\"399\",\"zOrder\":\"100\"},{\"ID\":\"429\",\"measuredH\":\"25\",\"measuredW\":\"40\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Ruby\"},\"typeID\":\"Label\",\"w\":\"45\",\"x\":\"299\",\"y\":\"408\",\"zOrder\":\"101\"},{\"ID\":\"430\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"259\",\"y\":\"354\",\"zOrder\":\"102\"},{\"ID\":\"431\",\"measuredH\":\"25\",\"measuredW\":\"56\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Python\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"298\",\"y\":\"363\",\"zOrder\":\"103\"},{\"ID\":\"432\",\"h\":\"43\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"259\",\"y\":\"445\",\"zOrder\":\"104\"},{\"ID\":\"433\",\"measuredH\":\"25\",\"measuredW\":\"61\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Node.js\"},\"typeID\":\"Label\",\"w\":\"68\",\"x\":\"299\",\"y\":\"454\",\"zOrder\":\"105\"},{\"ID\":\"434\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"985\",\"y\":\"369\",\"zOrder\":\"106\"},{\"ID\":\"435\",\"measuredH\":\"25\",\"measuredW\":\"23\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Go\"},\"typeID\":\"Label\",\"w\":\"38\",\"x\":\"1038\",\"y\":\"377\",\"zOrder\":\"107\"},{\"ID\":\"436\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"986\",\"y\":\"414\",\"zOrder\":\"108\"},{\"ID\":\"437\",\"measuredH\":\"25\",\"measuredW\":\"38\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Rust\"},\"typeID\":\"Label\",\"w\":\"50\",\"x\":\"1038\",\"y\":\"422\",\"zOrder\":\"109\"},{\"ID\":\"438\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"textColor\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"141\",\"x\":\"985\",\"y\":\"460\",\"zOrder\":\"110\"},{\"ID\":\"439\",\"measuredH\":\"25\",\"measuredW\":\"65\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"C / C++\"},\"typeID\":\"Label\",\"w\":\"73\",\"x\":\"1027\",\"y\":\"468\",\"zOrder\":\"111\"},{\"ID\":\"440\",\"measuredH\":\"25\",\"measuredW\":\"275\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"Doesn't matter which language you \"},\"typeID\":\"Label\",\"x\":\"499\",\"y\":\"458\",\"zOrder\":\"112\"},{\"ID\":\"441\",\"measuredH\":\"25\",\"measuredW\":\"289\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"pick, key is to get some programming\"},\"typeID\":\"Label\",\"x\":\"499\",\"y\":\"484\",\"zOrder\":\"113\"},{\"ID\":\"442\",\"measuredH\":\"25\",\"measuredW\":\"83\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"knowledge\"},\"typeID\":\"Label\",\"x\":\"499\",\"y\":\"510\",\"zOrder\":\"114\"},{\"ID\":\"443\",\"h\":\"129\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"386\",\"x\":\"483\",\"y\":\"715\",\"zOrder\":\"115\"},{\"ID\":\"444\",\"measuredH\":\"25\",\"measuredW\":\"248\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn about Managing Servers\"},\"typeID\":\"Label\",\"x\":\"528\",\"y\":\"729\",\"zOrder\":\"116\"},{\"ID\":\"445\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"494\",\"y\":\"729\",\"zOrder\":\"117\"},{\"ID\":\"446\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"3\"},\"typeID\":\"Label\",\"x\":\"502\",\"y\":\"731\",\"zOrder\":\"118\"},{\"ID\":\"447\",\"measuredH\":\"23\",\"measuredW\":\"352\",\"properties\":{\"size\":\"15\",\"text\":\"Get some administration in some OS. Especially any\"},\"typeID\":\"Label\",\"w\":\"352\",\"x\":\"498\",\"y\":\"760\",\"zOrder\":\"119\"},{\"ID\":\"448\",\"measuredH\":\"23\",\"measuredW\":\"345\",\"properties\":{\"size\":\"15\",\"text\":\"Linux distribution. Pick Ubuntu if you have a little to\"},\"typeID\":\"Label\",\"w\":\"352\",\"x\":\"498\",\"y\":\"784\",\"zOrder\":\"120\"},{\"ID\":\"449\",\"h\":\"54\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"386\",\"x\":\"484\",\"y\":\"611\",\"zOrder\":\"121\"},{\"ID\":\"450\",\"measuredH\":\"25\",\"measuredW\":\"282\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Understand different OS Concepts\"},\"typeID\":\"Label\",\"x\":\"533\",\"y\":\"626\",\"zOrder\":\"122\"},{\"ID\":\"451\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"500\",\"y\":\"625\",\"zOrder\":\"123\"},{\"ID\":\"452\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"2\"},\"typeID\":\"Label\",\"x\":\"508\",\"y\":\"627\",\"zOrder\":\"124\"},{\"ID\":\"453\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"207\",\"x\":\"217\",\"y\":\"565\",\"zOrder\":\"125\"},{\"ID\":\"454\",\"measuredH\":\"23\",\"measuredW\":\"155\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Process Management\"},\"typeID\":\"Label\",\"w\":\"156\",\"x\":\"243\",\"y\":\"574\",\"zOrder\":\"126\"},{\"ID\":\"455\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"207\",\"x\":\"217\",\"y\":\"610\",\"zOrder\":\"127\"},{\"ID\":\"456\",\"measuredH\":\"23\",\"measuredW\":\"184\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Threads and Concurrency\"},\"typeID\":\"Label\",\"w\":\"198\",\"x\":\"227\",\"y\":\"618\",\"zOrder\":\"128\"},{\"ID\":\"457\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"207\",\"x\":\"217\",\"y\":\"657\",\"zOrder\":\"129\"},{\"ID\":\"458\",\"measuredH\":\"23\",\"measuredW\":\"58\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Sockets\"},\"typeID\":\"Label\",\"w\":\"66\",\"x\":\"288\",\"y\":\"666\",\"zOrder\":\"130\"},{\"ID\":\"459\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"928\",\"y\":\"653\",\"zOrder\":\"131\"},{\"ID\":\"460\",\"measuredH\":\"23\",\"measuredW\":\"119\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Memory/Storage\"},\"typeID\":\"Label\",\"w\":\"123\",\"x\":\"965\",\"y\":\"661\",\"zOrder\":\"132\"},{\"ID\":\"461\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"928\",\"y\":\"562\",\"zOrder\":\"133\"},{\"ID\":\"462\",\"measuredH\":\"23\",\"measuredW\":\"120\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"I/O Management\"},\"typeID\":\"Label\",\"w\":\"123\",\"x\":\"967\",\"y\":\"571\",\"zOrder\":\"134\"},{\"ID\":\"463\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"928\",\"y\":\"607\",\"zOrder\":\"135\"},{\"ID\":\"464\",\"measuredH\":\"23\",\"measuredW\":\"95\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Virtualization\"},\"typeID\":\"Label\",\"w\":\"102\",\"x\":\"977\",\"y\":\"616\",\"zOrder\":\"136\"},{\"ID\":\"465\",\"measuredH\":\"23\",\"measuredW\":\"172\",\"properties\":{\"size\":\"15\",\"text\":\"no experience with Linux.\"},\"typeID\":\"Label\",\"w\":\"183\",\"x\":\"496\",\"y\":\"809\",\"zOrder\":\"137\"},{\"ID\":\"466\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"x\":\"220\",\"y\":\"811\",\"zOrder\":\"138\"},{\"ID\":\"467\",\"measuredH\":\"23\",\"measuredW\":\"37\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Linux\"},\"typeID\":\"Label\",\"w\":\"45\",\"x\":\"295\",\"y\":\"820\",\"zOrder\":\"139\"},{\"ID\":\"468\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"220\",\"y\":\"856\",\"zOrder\":\"140\"},{\"ID\":\"469\",\"measuredH\":\"23\",\"measuredW\":\"31\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Unix\"},\"typeID\":\"Label\",\"w\":\"45\",\"x\":\"295\",\"y\":\"865\",\"zOrder\":\"141\"},{\"ID\":\"470\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"220\",\"y\":\"900\",\"zOrder\":\"142\"},{\"ID\":\"471\",\"measuredH\":\"23\",\"measuredW\":\"63\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Windows\"},\"typeID\":\"Label\",\"w\":\"67\",\"x\":\"284\",\"y\":\"909\",\"zOrder\":\"143\"},{\"ID\":\"472\",\"h\":\"49\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"243\",\"y\":\"1060\",\"zOrder\":\"144\"},{\"ID\":\"473\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"255\",\"y\":\"1071\",\"zOrder\":\"145\"},{\"ID\":\"474\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"4\"},\"typeID\":\"Label\",\"x\":\"263\",\"y\":\"1073\",\"zOrder\":\"146\"},{\"ID\":\"475\",\"measuredH\":\"25\",\"measuredW\":\"199\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Networking and Security\"},\"typeID\":\"Label\",\"x\":\"288\",\"y\":\"1072\",\"zOrder\":\"147\"},{\"ID\":\"476\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"161\",\"y\":\"1147\",\"zOrder\":\"148\"},{\"ID\":\"477\",\"measuredH\":\"23\",\"measuredW\":\"40\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"HTTP\"},\"typeID\":\"Label\",\"w\":\"67\",\"x\":\"225\",\"y\":\"1156\",\"zOrder\":\"149\"},{\"ID\":\"478\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"161\",\"y\":\"1191\",\"zOrder\":\"150\"},{\"ID\":\"479\",\"measuredH\":\"23\",\"measuredW\":\"50\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"HTTPS\"},\"typeID\":\"Label\",\"w\":\"67\",\"x\":\"225\",\"y\":\"1200\",\"zOrder\":\"151\"},{\"ID\":\"480\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"162\",\"y\":\"1235\",\"zOrder\":\"152\"},{\"ID\":\"481\",\"measuredH\":\"23\",\"measuredW\":\"29\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"FTP\"},\"typeID\":\"Label\",\"w\":\"45\",\"x\":\"225\",\"y\":\"1244\",\"zOrder\":\"153\"},{\"ID\":\"482\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"147\",\"y\":\"961\",\"zOrder\":\"154\"},{\"ID\":\"483\",\"measuredH\":\"23\",\"measuredW\":\"31\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"DNS\"},\"typeID\":\"Label\",\"w\":\"35\",\"x\":\"222\",\"y\":\"970\",\"zOrder\":\"155\"},{\"ID\":\"484\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"147\",\"y\":\"1006\",\"zOrder\":\"156\"},{\"ID\":\"485\",\"measuredH\":\"23\",\"measuredW\":\"74\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"OSI Model\"},\"typeID\":\"Label\",\"w\":\"79\",\"x\":\"207\",\"y\":\"1015\",\"zOrder\":\"157\"},{\"ID\":\"486\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"928\",\"y\":\"699\",\"zOrder\":\"158\"},{\"ID\":\"487\",\"measuredH\":\"23\",\"measuredW\":\"93\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"File Systems\"},\"typeID\":\"Label\",\"w\":\"104\",\"x\":\"981\",\"y\":\"707\",\"zOrder\":\"159\"},{\"ID\":\"488\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"x\":\"161\",\"y\":\"1279\",\"zOrder\":\"160\"},{\"ID\":\"489\",\"measuredH\":\"23\",\"measuredW\":\"73\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"SSL / TLS\"},\"typeID\":\"Label\",\"w\":\"84\",\"x\":\"219\",\"y\":\"1288\",\"zOrder\":\"161\"},{\"ID\":\"490\",\"h\":\"49\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"386\",\"x\":\"402\",\"y\":\"1223\",\"zOrder\":\"162\"},{\"ID\":\"491\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"414\",\"y\":\"1234\",\"zOrder\":\"163\"},{\"ID\":\"492\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"5\"},\"typeID\":\"Label\",\"x\":\"422\",\"y\":\"1236\",\"zOrder\":\"164\"},{\"ID\":\"493\",\"measuredH\":\"25\",\"measuredW\":\"325\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"What is and how to setup a ____________\"},\"typeID\":\"Label\",\"w\":\"337\",\"x\":\"447\",\"y\":\"1235\",\"zOrder\":\"165\"},{\"ID\":\"494\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"161\",\"x\":\"851\",\"y\":\"1297\",\"zOrder\":\"166\"},{\"ID\":\"495\",\"measuredH\":\"23\",\"measuredW\":\"84\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Web Server\"},\"typeID\":\"Label\",\"w\":\"84\",\"x\":\"887\",\"y\":\"1306\",\"zOrder\":\"167\"},{\"ID\":\"496\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"144\",\"x\":\"386\",\"y\":\"1359\",\"zOrder\":\"168\"},{\"ID\":\"497\",\"measuredH\":\"23\",\"measuredW\":\"101\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Forward Proxy\"},\"typeID\":\"Label\",\"w\":\"108\",\"x\":\"407\",\"y\":\"1368\",\"zOrder\":\"169\"},{\"ID\":\"498\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"161\",\"x\":\"536\",\"y\":\"1316\",\"zOrder\":\"170\"},{\"ID\":\"499\",\"measuredH\":\"23\",\"measuredW\":\"110\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Caching Server\"},\"typeID\":\"Label\",\"w\":\"110\",\"x\":\"562\",\"y\":\"1325\",\"zOrder\":\"171\"},{\"ID\":\"500\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"102\",\"x\":\"1076\",\"y\":\"1276\",\"zOrder\":\"172\"},{\"ID\":\"501\",\"measuredH\":\"23\",\"measuredW\":\"54\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Apache\"},\"typeID\":\"Label\",\"w\":\"64\",\"x\":\"1098\",\"y\":\"1285\",\"zOrder\":\"173\"},{\"ID\":\"502\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"104\",\"x\":\"1076\",\"y\":\"1321\",\"zOrder\":\"174\"},{\"ID\":\"503\",\"measuredH\":\"23\",\"measuredW\":\"39\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Nginx\"},\"typeID\":\"Label\",\"w\":\"43\",\"x\":\"1107\",\"y\":\"1330\",\"zOrder\":\"175\"},{\"ID\":\"504\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"104\",\"x\":\"1075\",\"y\":\"1366\",\"zOrder\":\"176\"},{\"ID\":\"505\",\"measuredH\":\"23\",\"measuredW\":\"53\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Tomcat\"},\"typeID\":\"Label\",\"w\":\"57\",\"x\":\"1100\",\"y\":\"1375\",\"zOrder\":\"177\"},{\"ID\":\"506\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"104\",\"x\":\"1077\",\"y\":\"1411\",\"zOrder\":\"178\"},{\"ID\":\"507\",\"measuredH\":\"23\",\"measuredW\":\"45\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Caddy\"},\"typeID\":\"Label\",\"w\":\"49\",\"x\":\"1105\",\"y\":\"1420\",\"zOrder\":\"179\"},{\"ID\":\"508\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"104\",\"x\":\"1076\",\"y\":\"1232\",\"zOrder\":\"180\"},{\"ID\":\"509\",\"measuredH\":\"23\",\"measuredW\":\"21\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"IIS\"},\"typeID\":\"Label\",\"w\":\"29\",\"x\":\"1114\",\"y\":\"1241\",\"zOrder\":\"181\"},{\"ID\":\"510\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"143\",\"x\":\"387\",\"y\":\"1315\",\"zOrder\":\"182\"},{\"ID\":\"511\",\"measuredH\":\"23\",\"measuredW\":\"102\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Reverse Proxy\"},\"typeID\":\"Label\",\"w\":\"119\",\"x\":\"400\",\"y\":\"1324\",\"zOrder\":\"183\"},{\"ID\":\"512\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"161\",\"x\":\"535\",\"y\":\"1359\",\"zOrder\":\"184\"},{\"ID\":\"513\",\"measuredH\":\"23\",\"measuredW\":\"105\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Load Balancer\"},\"typeID\":\"Label\",\"w\":\"110\",\"x\":\"561\",\"y\":\"1368\",\"zOrder\":\"185\"},{\"ID\":\"514\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"311\",\"x\":\"386\",\"y\":\"1404\",\"zOrder\":\"186\"},{\"ID\":\"515\",\"measuredH\":\"23\",\"measuredW\":\"53\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Firewall\"},\"typeID\":\"Label\",\"w\":\"60\",\"x\":\"512\",\"y\":\"1413\",\"zOrder\":\"187\"},{\"ID\":\"516\",\"h\":\"49\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"311\",\"x\":\"721\",\"y\":\"1461\",\"zOrder\":\"188\"},{\"ID\":\"517\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"733\",\"y\":\"1472\",\"zOrder\":\"189\"},{\"ID\":\"518\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"6\"},\"typeID\":\"Label\",\"x\":\"741\",\"y\":\"1474\",\"zOrder\":\"190\"},{\"ID\":\"519\",\"measuredH\":\"25\",\"measuredW\":\"240\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn Infrastructure as Code\"},\"typeID\":\"Label\",\"x\":\"766\",\"y\":\"1472\",\"zOrder\":\"191\"},{\"ID\":\"520\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"x\":\"217\",\"y\":\"733\",\"zOrder\":\"192\"},{\"ID\":\"521\",\"measuredH\":\"23\",\"measuredW\":\"129\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Operating System\"},\"typeID\":\"Label\",\"w\":\"130\",\"x\":\"252\",\"y\":\"742\",\"zOrder\":\"193\"},{\"ID\":\"522\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"216\",\"x\":\"921\",\"y\":\"800\",\"zOrder\":\"194\"},{\"ID\":\"523\",\"measuredH\":\"23\",\"measuredW\":\"171\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Learn to live in Terminal\"},\"typeID\":\"Label\",\"w\":\"184\",\"x\":\"938\",\"y\":\"809\",\"zOrder\":\"195\"},{\"ID\":\"524\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"253\",\"x\":\"1113\",\"y\":\"1545\",\"zOrder\":\"196\"},{\"ID\":\"525\",\"measuredH\":\"25\",\"measuredW\":\"217\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Infrastructure Provisioning\"},\"typeID\":\"Label\",\"x\":\"1134\",\"y\":\"1553\",\"zOrder\":\"197\"},{\"ID\":\"526\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"152\",\"x\":\"1156\",\"y\":\"1625\",\"zOrder\":\"198\"},{\"ID\":\"527\",\"measuredH\":\"23\",\"measuredW\":\"71\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Terraform\"},\"typeID\":\"Label\",\"w\":\"75\",\"x\":\"1197\",\"y\":\"1634\",\"zOrder\":\"199\"},{\"ID\":\"528\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"152\",\"x\":\"1156\",\"y\":\"1669\",\"zOrder\":\"200\"},{\"ID\":\"529\",\"measuredH\":\"23\",\"measuredW\":\"116\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Cloud Formation\"},\"typeID\":\"Label\",\"w\":\"122\",\"x\":\"1174\",\"y\":\"1678\",\"zOrder\":\"201\"},{\"ID\":\"530\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"253\",\"x\":\"624\",\"y\":\"1544\",\"zOrder\":\"202\"},{\"ID\":\"531\",\"measuredH\":\"25\",\"measuredW\":\"217\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Configuration Management\"},\"typeID\":\"Label\",\"x\":\"643\",\"y\":\"1552\",\"zOrder\":\"203\"},{\"ID\":\"532\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"116\",\"x\":\"630\",\"y\":\"1624\",\"zOrder\":\"204\"},{\"ID\":\"533\",\"measuredH\":\"23\",\"measuredW\":\"52\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Ansible\"},\"typeID\":\"Label\",\"w\":\"59\",\"x\":\"659\",\"y\":\"1633\",\"zOrder\":\"205\"},{\"ID\":\"534\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"116\",\"x\":\"630\",\"y\":\"1667\",\"zOrder\":\"206\"},{\"ID\":\"535\",\"measuredH\":\"23\",\"measuredW\":\"36\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Chef\"},\"typeID\":\"Label\",\"w\":\"48\",\"x\":\"664\",\"y\":\"1677\",\"zOrder\":\"207\"},{\"ID\":\"536\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"107\",\"x\":\"749\",\"y\":\"1667\",\"zOrder\":\"208\"},{\"ID\":\"537\",\"measuredH\":\"23\",\"measuredW\":\"52\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Puppet\"},\"typeID\":\"Label\",\"w\":\"55\",\"x\":\"780\",\"y\":\"1676\",\"zOrder\":\"209\"},{\"ID\":\"538\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"107\",\"x\":\"750\",\"y\":\"1624\",\"zOrder\":\"210\"},{\"ID\":\"539\",\"measuredH\":\"23\",\"measuredW\":\"29\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Salt\"},\"typeID\":\"Label\",\"w\":\"51\",\"x\":\"784\",\"y\":\"1633\",\"zOrder\":\"211\"},{\"ID\":\"540\",\"h\":\"49\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"311\",\"x\":\"131\",\"y\":\"1558\",\"zOrder\":\"212\"},{\"ID\":\"541\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"143\",\"y\":\"1569\",\"zOrder\":\"213\"},{\"ID\":\"542\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"7\"},\"typeID\":\"Label\",\"x\":\"151\",\"y\":\"1571\",\"zOrder\":\"214\"},{\"ID\":\"543\",\"measuredH\":\"25\",\"measuredW\":\"189\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn some CI/CD Tool\"},\"typeID\":\"Label\",\"x\":\"176\",\"y\":\"1570\",\"zOrder\":\"215\"},{\"ID\":\"544\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"144\",\"x\":\"132\",\"y\":\"1640\",\"zOrder\":\"216\"},{\"ID\":\"545\",\"measuredH\":\"23\",\"measuredW\":\"54\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Jenkins\"},\"typeID\":\"Label\",\"w\":\"59\",\"x\":\"172\",\"y\":\"1649\",\"zOrder\":\"217\"},{\"ID\":\"546\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"144\",\"x\":\"132\",\"y\":\"1683\",\"zOrder\":\"218\"},{\"ID\":\"547\",\"measuredH\":\"23\",\"measuredW\":\"63\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Travis CI\"},\"typeID\":\"Label\",\"w\":\"65\",\"x\":\"167\",\"y\":\"1692\",\"zOrder\":\"219\"},{\"ID\":\"548\",\"h\":\"58\",\"measuredH\":\"57\",\"measuredW\":\"1\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":1,\"y\":0,\"length\":1},\"p1\":{\"x\":0.56842735383826,\"y\":-0.016875231606852763,\"length\":0.5686777910498628},\"p2\":{\"x\":1,\"y\":57,\"length\":57.0087712549569},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"2\",\"x\":\"540\",\"y\":\"1570\",\"zOrder\":\"220\"},{\"ID\":\"549\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"139\",\"x\":\"478\",\"y\":\"1544\",\"zOrder\":\"221\"},{\"ID\":\"550\",\"measuredH\":\"25\",\"measuredW\":\"89\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Containers\"},\"typeID\":\"Label\",\"x\":\"503\",\"y\":\"1552\",\"zOrder\":\"222\"},{\"ID\":\"551\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"116\",\"x\":\"478\",\"y\":\"1624\",\"zOrder\":\"223\"},{\"ID\":\"552\",\"measuredH\":\"23\",\"measuredW\":\"51\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Docker\"},\"typeID\":\"Label\",\"w\":\"59\",\"x\":\"507\",\"y\":\"1633\",\"zOrder\":\"224\"},{\"ID\":\"553\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"116\",\"x\":\"478\",\"y\":\"1667\",\"zOrder\":\"225\"},{\"ID\":\"554\",\"measuredH\":\"23\",\"measuredW\":\"21\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"rkt\"},\"typeID\":\"Label\",\"w\":\"29\",\"x\":\"522\",\"y\":\"1677\",\"zOrder\":\"226\"},{\"ID\":\"555\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"116\",\"x\":\"478\",\"y\":\"1710\",\"zOrder\":\"227\"},{\"ID\":\"556\",\"measuredH\":\"23\",\"measuredW\":\"30\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"LXC\"},\"typeID\":\"Label\",\"w\":\"38\",\"x\":\"522\",\"y\":\"1719\",\"zOrder\":\"228\"},{\"ID\":\"557\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"144\",\"x\":\"131\",\"y\":\"1727\",\"zOrder\":\"229\"},{\"ID\":\"558\",\"measuredH\":\"23\",\"measuredW\":\"68\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"TeamCity\"},\"typeID\":\"Label\",\"w\":\"70\",\"x\":\"166\",\"y\":\"1736\",\"zOrder\":\"230\"},{\"ID\":\"559\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"144\",\"x\":\"131\",\"y\":\"1771\",\"zOrder\":\"231\"},{\"ID\":\"560\",\"measuredH\":\"23\",\"measuredW\":\"43\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Drone\"},\"typeID\":\"Label\",\"w\":\"50\",\"x\":\"178\",\"y\":\"1780\",\"zOrder\":\"232\"},{\"ID\":\"561\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"144\",\"x\":\"131\",\"y\":\"1814\",\"zOrder\":\"233\"},{\"ID\":\"562\",\"measuredH\":\"23\",\"measuredW\":\"63\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Circle CI\"},\"typeID\":\"Label\",\"w\":\"65\",\"x\":\"171\",\"y\":\"1823\",\"zOrder\":\"234\"},{\"ID\":\"563\",\"h\":\"49\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"470\",\"x\":\"304\",\"y\":\"1805\",\"zOrder\":\"235\"},{\"ID\":\"564\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"316\",\"y\":\"1816\",\"zOrder\":\"236\"},{\"ID\":\"565\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"8\"},\"typeID\":\"Label\",\"x\":\"324\",\"y\":\"1818\",\"zOrder\":\"237\"},{\"ID\":\"566\",\"measuredH\":\"25\",\"measuredW\":\"402\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Learn how to monitor software and infrastructure\"},\"typeID\":\"Label\",\"x\":\"349\",\"y\":\"1817\",\"zOrder\":\"238\"},{\"ID\":\"567\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"206\",\"x\":\"857\",\"y\":\"1780\",\"zOrder\":\"239\"},{\"ID\":\"568\",\"measuredH\":\"23\",\"measuredW\":\"181\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Infrastructure Monitoring\"},\"typeID\":\"Label\",\"w\":\"185\",\"x\":\"869\",\"y\":\"1789\",\"zOrder\":\"240\"},{\"ID\":\"569\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"89\",\"x\":\"1156\",\"y\":\"1780\",\"zOrder\":\"241\"},{\"ID\":\"570\",\"measuredH\":\"23\",\"measuredW\":\"48\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Nagios\"},\"typeID\":\"Label\",\"w\":\"57\",\"x\":\"1174\",\"y\":\"1789\",\"zOrder\":\"242\"},{\"ID\":\"571\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"89\",\"x\":\"1156\",\"y\":\"1824\",\"zOrder\":\"243\"},{\"ID\":\"572\",\"measuredH\":\"23\",\"measuredW\":\"44\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Icinga\"},\"typeID\":\"Label\",\"w\":\"57\",\"x\":\"1174\",\"y\":\"1833\",\"zOrder\":\"244\"},{\"ID\":\"573\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"89\",\"x\":\"1156\",\"y\":\"1867\",\"zOrder\":\"245\"},{\"ID\":\"574\",\"measuredH\":\"23\",\"measuredW\":\"60\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Datadog\"},\"typeID\":\"Label\",\"w\":\"66\",\"x\":\"1168\",\"y\":\"1876\",\"zOrder\":\"246\"},{\"ID\":\"575\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"89\",\"x\":\"1157\",\"y\":\"1910\",\"zOrder\":\"247\"},{\"ID\":\"576\",\"measuredH\":\"23\",\"measuredW\":\"48\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Zabbix\"},\"typeID\":\"Label\",\"w\":\"66\",\"x\":\"1169\",\"y\":\"1919\",\"zOrder\":\"248\"},{\"ID\":\"577\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"206\",\"x\":\"857\",\"y\":\"1869\",\"zOrder\":\"249\"},{\"ID\":\"578\",\"measuredH\":\"23\",\"measuredW\":\"158\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Application Monitoring\"},\"typeID\":\"Label\",\"w\":\"185\",\"x\":\"870\",\"y\":\"1878\",\"zOrder\":\"250\"},{\"ID\":\"579\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"89\",\"x\":\"1157\",\"y\":\"1953\",\"zOrder\":\"251\"},{\"ID\":\"580\",\"measuredH\":\"23\",\"measuredW\":\"40\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Monit\"},\"typeID\":\"Label\",\"w\":\"41\",\"x\":\"1181\",\"y\":\"1962\",\"zOrder\":\"252\"},{\"ID\":\"581\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"127\",\"x\":\"904\",\"y\":\"1953\",\"zOrder\":\"253\"},{\"ID\":\"582\",\"measuredH\":\"23\",\"measuredW\":\"97\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"AppDynamics\"},\"typeID\":\"Label\",\"w\":\"103\",\"x\":\"918\",\"y\":\"1962\",\"zOrder\":\"254\"},{\"ID\":\"583\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"92\",\"x\":\"1038\",\"y\":\"1953\",\"zOrder\":\"255\"},{\"ID\":\"584\",\"measuredH\":\"23\",\"measuredW\":\"71\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"New Relic\"},\"typeID\":\"Label\",\"w\":\"78\",\"x\":\"1048\",\"y\":\"1962\",\"zOrder\":\"256\"},{\"ID\":\"585\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"189\",\"x\":\"693\",\"y\":\"1954\",\"zOrder\":\"257\"},{\"ID\":\"586\",\"measuredH\":\"23\",\"measuredW\":\"131\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Logs Management\"},\"typeID\":\"Label\",\"w\":\"173\",\"x\":\"707\",\"y\":\"1963\",\"zOrder\":\"258\"},{\"ID\":\"587\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"510\",\"y\":\"1900\",\"zOrder\":\"259\"},{\"ID\":\"588\",\"measuredH\":\"23\",\"measuredW\":\"75\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"ELK Stack\"},\"typeID\":\"Label\",\"w\":\"80\",\"x\":\"545\",\"y\":\"1909\",\"zOrder\":\"260\"},{\"ID\":\"589\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"511\",\"y\":\"1944\",\"zOrder\":\"261\"},{\"ID\":\"590\",\"measuredH\":\"23\",\"measuredW\":\"54\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Graylog\"},\"typeID\":\"Label\",\"w\":\"59\",\"x\":\"552\",\"y\":\"1953\",\"zOrder\":\"262\"},{\"ID\":\"591\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"511\",\"y\":\"1988\",\"zOrder\":\"263\"},{\"ID\":\"592\",\"measuredH\":\"23\",\"measuredW\":\"47\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Splunk\"},\"typeID\":\"Label\",\"w\":\"53\",\"x\":\"560\",\"y\":\"1996\",\"zOrder\":\"264\"},{\"ID\":\"593\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"512\",\"y\":\"2032\",\"zOrder\":\"265\"},{\"ID\":\"594\",\"measuredH\":\"23\",\"measuredW\":\"69\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Papertrail\"},\"typeID\":\"Label\",\"w\":\"79\",\"x\":\"551\",\"y\":\"2040\",\"zOrder\":\"266\"},{\"ID\":\"595\",\"h\":\"49\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"258\",\"x\":\"270\",\"y\":\"2116\",\"zOrder\":\"267\"},{\"ID\":\"596\",\"measuredH\":\"24\",\"measuredW\":\"24\",\"properties\":{\"color\":\"10027263\",\"icon\":{\"ID\":\"circle\",\"size\":\"small\"}},\"typeID\":\"Icon\",\"x\":\"282\",\"y\":\"2127\",\"zOrder\":\"268\"},{\"ID\":\"597\",\"measuredH\":\"21\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"text\":\"9\"},\"typeID\":\"Label\",\"x\":\"290\",\"y\":\"2129\",\"zOrder\":\"269\"},{\"ID\":\"598\",\"measuredH\":\"25\",\"measuredW\":\"127\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Cloud Providers\"},\"typeID\":\"Label\",\"w\":\"185\",\"x\":\"315\",\"y\":\"2128\",\"zOrder\":\"270\"},{\"ID\":\"599\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"131\",\"y\":\"1877\",\"zOrder\":\"271\"},{\"ID\":\"600\",\"measuredH\":\"23\",\"measuredW\":\"34\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"AWS\"},\"typeID\":\"Label\",\"w\":\"43\",\"x\":\"184\",\"y\":\"1886\",\"zOrder\":\"272\"},{\"ID\":\"601\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"131\",\"y\":\"1921\",\"zOrder\":\"273\"},{\"ID\":\"602\",\"measuredH\":\"23\",\"measuredW\":\"95\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Google Cloud\"},\"typeID\":\"Label\",\"w\":\"100\",\"x\":\"160\",\"y\":\"1930\",\"zOrder\":\"274\"},{\"ID\":\"603\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"131\",\"y\":\"1965\",\"zOrder\":\"275\"},{\"ID\":\"604\",\"measuredH\":\"23\",\"measuredW\":\"42\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Azure\"},\"typeID\":\"Label\",\"w\":\"47\",\"x\":\"181\",\"y\":\"1974\",\"zOrder\":\"276\"},{\"ID\":\"605\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"131\",\"y\":\"2009\",\"zOrder\":\"277\"},{\"ID\":\"606\",\"measuredH\":\"23\",\"measuredW\":\"97\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Digital Ocean\"},\"typeID\":\"Label\",\"w\":\"99\",\"x\":\"159\",\"y\":\"2018\",\"zOrder\":\"278\"},{\"ID\":\"607\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"149\",\"x\":\"131\",\"y\":\"2053\",\"zOrder\":\"279\"},{\"ID\":\"608\",\"measuredH\":\"23\",\"measuredW\":\"51\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Heroku\"},\"typeID\":\"Label\",\"w\":\"66\",\"x\":\"179\",\"y\":\"2061\",\"zOrder\":\"280\"},{\"ID\":\"609\",\"measuredH\":\"32\",\"measuredW\":\"170\",\"properties\":{\"bold\":\"true\",\"size\":\"24\",\"text\":\"Keep Exploring\"},\"typeID\":\"Label\",\"x\":\"652\",\"y\":\"2354\",\"zOrder\":\"281\"},{\"ID\":\"610\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"219\",\"x\":\"886\",\"y\":\"1544\",\"zOrder\":\"282\"},{\"ID\":\"611\",\"measuredH\":\"25\",\"measuredW\":\"196\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Container Orchestration\"},\"typeID\":\"Label\",\"x\":\"896\",\"y\":\"1552\",\"zOrder\":\"283\"},{\"ID\":\"612\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"115\",\"x\":\"886\",\"y\":\"1625\",\"zOrder\":\"284\"},{\"ID\":\"613\",\"measuredH\":\"23\",\"measuredW\":\"84\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Kubernetes\"},\"typeID\":\"Label\",\"w\":\"88\",\"x\":\"901\",\"y\":\"1634\",\"zOrder\":\"285\"},{\"ID\":\"614\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"99\",\"x\":\"1006\",\"y\":\"1626\",\"zOrder\":\"286\"},{\"ID\":\"615\",\"measuredH\":\"23\",\"measuredW\":\"47\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Mesos\"},\"typeID\":\"Label\",\"w\":\"51\",\"x\":\"1027\",\"y\":\"1635\",\"zOrder\":\"287\"},{\"ID\":\"616\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"115\",\"x\":\"886\",\"y\":\"1668\",\"zOrder\":\"288\"},{\"ID\":\"617\",\"measuredH\":\"23\",\"measuredW\":\"103\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Docker Swarm\"},\"typeID\":\"Label\",\"w\":\"112\",\"x\":\"892\",\"y\":\"1677\",\"zOrder\":\"289\"},{\"ID\":\"618\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"99\",\"x\":\"1006\",\"y\":\"1669\",\"zOrder\":\"290\"},{\"ID\":\"619\",\"measuredH\":\"23\",\"measuredW\":\"50\",\"properties\":{\"bold\":\"true\",\"size\":\"15\",\"text\":\"Nomad\"},\"typeID\":\"Label\",\"w\":\"51\",\"x\":\"1027\",\"y\":\"1678\",\"zOrder\":\"291\"},{\"ID\":\"647\",\"h\":\"141\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"properties\":{},\"typeID\":\"Canvas\",\"w\":\"350\",\"x\":\"821\",\"y\":\"173\",\"zOrder\":\"292\"},{\"ID\":\"648\",\"measuredH\":\"25\",\"measuredW\":\"314\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"Find the detailed version of this roadmap\"},\"typeID\":\"Label\",\"x\":\"835\",\"y\":\"190\",\"zOrder\":\"293\"},{\"ID\":\"649\",\"measuredH\":\"25\",\"measuredW\":\"322\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"along with resources and other roadmaps\"},\"typeID\":\"Label\",\"x\":\"835\",\"y\":\"218\",\"zOrder\":\"294\"},{\"ID\":\"653\",\"h\":\"45\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"properties\":{\"borderColor\":\"4273622\",\"color\":\"4273622\"},\"typeID\":\"Canvas\",\"w\":\"320\",\"x\":\"836\",\"y\":\"254\",\"zOrder\":\"295\"},{\"ID\":\"654\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"28\",\"measuredW\":\"103\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"roadmap.sh\"},\"typeID\":\"Label\",\"x\":\"65\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"28\",\"measuredW\":\"36\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"http\"},\"typeID\":\"Label\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"size\":\"20\",\"text\":\":\"},\"typeID\":\"Label\",\"x\":\"37\",\"y\":\"0\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"},\"typeID\":\"Label\",\"x\":\"44\",\"y\":\"1\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"},\"typeID\":\"Label\",\"x\":\"52\",\"y\":\"1\",\"zOrder\":\"4\"}]}},\"h\":\"29\",\"measuredH\":\"29\",\"measuredW\":\"168\",\"typeID\":\"__group__\",\"w\":\"168\",\"x\":\"912\",\"y\":\"262\",\"zOrder\":\"296\"}]},\"measuredH\":\"2386\",\"measuredW\":\"1366\",\"mockupH\":\"2225\",\"mockupW\":\"1235\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./storage/project/disclaimer.json":
/*!*****************************************!*\
  !*** ./storage/project/disclaimer.json ***!
  \*****************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"119\",\"h\":\"274\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"911\",\"x\":\"223\",\"y\":\"170\",\"zOrder\":\"0\"},{\"ID\":\"120\",\"measuredH\":\"40\",\"measuredW\":\"170\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"Disclaimer!\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"190\",\"zOrder\":\"1\"},{\"ID\":\"121\",\"measuredH\":\"32\",\"measuredW\":\"856\",\"properties\":{\"size\":\"24\",\"text\":\"The purpose of this roadmap is to give you an idea about the landscape and to\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"246\",\"zOrder\":\"2\"},{\"ID\":\"123\",\"measuredH\":\"32\",\"measuredW\":\"833\",\"properties\":{\"size\":\"24\",\"text\":\"guide you if you are confused about what to learn next and not to encourage\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"282\",\"zOrder\":\"3\"},{\"ID\":\"124\",\"measuredH\":\"32\",\"measuredW\":\"825\",\"properties\":{\"size\":\"24\",\"text\":\"you to learn what is hip and trendy. You should *grow some understanding* of\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"317\",\"zOrder\":\"4\"},{\"ID\":\"125\",\"measuredH\":\"32\",\"measuredW\":\"816\",\"properties\":{\"size\":\"24\",\"text\":\"*why one tool would be better suited for some cases than the other and*\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"353\",\"zOrder\":\"5\"},{\"ID\":\"126\",\"measuredH\":\"32\",\"measuredW\":\"710\",\"properties\":{\"size\":\"24\",\"text\":\"*remember hip and trendy never means best suited for the job*\"},\"typeID\":\"Label\",\"x\":\"245\",\"y\":\"389\",\"zOrder\":\"6\"}]},\"measuredH\":\"444\",\"measuredW\":\"1134\",\"mockupH\":\"274\",\"mockupW\":\"911\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./storage/project/frontend-map.json":
/*!*******************************************!*\
  !*** ./storage/project/frontend-map.json ***!
  \*******************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"17\",\"measuredH\":\"16\",\"measuredW\":\"72\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":16,\"x\":0,\"y\":16},\"p1\":{\"length\":0.48357394275391136,\"x\":0.4835193355826628,\"y\":0.007267064624967561},\"p2\":{\"length\":72,\"x\":72,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"73\",\"x\":\"442\",\"y\":\"2540\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"h\":\"32\",\"measuredH\":\"31\",\"measuredW\":\"110\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.4835739427539112,\"x\":0.48351933558266263,\"y\":0.00726706462496755},\"p2\":{\"length\":114.28473213863695,\"x\":110,\"y\":31},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"111\",\"x\":\"416\",\"y\":\"2505\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"h\":\"73\",\"measuredH\":\"72\",\"measuredW\":\"2\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.5646031730475429,\"x\":0.564183236848729,\"y\":0.021771960734960995},\"p2\":{\"length\":72.00694410957877,\"x\":1,\"y\":72},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"3\",\"x\":\"909\",\"y\":\"2348\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"h\":\"7\",\"measuredH\":\"6\",\"measuredW\":\"99\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":99,\"x\":99,\"y\":0},\"p1\":{\"length\":0.5448288419424034,\"x\":0.5446782555657212,\"y\":-0.01280878316559928},\"p2\":{\"length\":6,\"x\":0,\"y\":6},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"100\",\"x\":\"1056\",\"y\":\"2763\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"h\":\"10\",\"measuredH\":\"8\",\"measuredW\":\"202\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":8,\"x\":0,\"y\":8},\"p1\":{\"length\":0.5646031730475429,\"x\":0.564183236848729,\"y\":0.021771960734960988},\"p2\":{\"length\":202.02227599945508,\"x\":202,\"y\":3},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"204\",\"x\":\"920\",\"y\":\"2341\",\"zOrder\":\"4\"},{\"ID\":\"5\",\"h\":\"203\",\"measuredH\":\"202\",\"measuredW\":\"47\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":202.41788458533009,\"x\":13,\"y\":202},\"p1\":{\"length\":0.5719424178755412,\"x\":0.5340419070756148,\"y\":-0.2047373215912542},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"48\",\"x\":\"630\",\"y\":\"2540\",\"zOrder\":\"5\"},{\"ID\":\"6\",\"h\":\"38\",\"measuredH\":\"37\",\"measuredW\":\"107\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":107.00467279516349,\"x\":107,\"y\":1},\"p1\":{\"length\":0.403398664527008,\"x\":0.39756767359748935,\"y\":-0.06834052569635155},\"p2\":{\"length\":37,\"x\":0,\"y\":37},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"108\",\"x\":\"393\",\"y\":\"2763\",\"zOrder\":\"6\"},{\"ID\":\"7\",\"h\":\"11\",\"measuredH\":\"10\",\"measuredW\":\"92\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":92.5418824100742,\"x\":92,\"y\":10},\"p1\":{\"length\":0.6171475897252586,\"x\":0.6165131354486524,\"y\":-0.02797679972705563},\"p2\":{\"length\":1,\"x\":0,\"y\":1},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"93\",\"x\":\"398\",\"y\":\"2744\",\"zOrder\":\"7\"},{\"ID\":\"8\",\"h\":\"90\",\"measuredH\":\"89\",\"measuredW\":\"106\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":138.4088147481944,\"x\":106,\"y\":89},\"p1\":{\"length\":0.6106522362684027,\"x\":0.6104670902653149,\"y\":-0.01503613522820974},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"107\",\"x\":\"392\",\"y\":\"2659\",\"zOrder\":\"8\"},{\"ID\":\"9\",\"h\":\"199\",\"measuredH\":\"198\",\"measuredW\":\"176\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":199.21847303902317,\"x\":22,\"y\":198},\"p1\":{\"length\":0.5528410727252497,\"x\":0.43018217127288033,\"y\":0.3472413443283433},\"p2\":{\"length\":176,\"x\":176,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"177\",\"x\":\"613\",\"y\":\"2338\",\"zOrder\":\"9\"},{\"ID\":\"10\",\"h\":\"136\",\"measuredH\":\"135\",\"measuredW\":\"39\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":39,\"x\":39,\"y\":0},\"p1\":{\"length\":0.5597110320971225,\"x\":0.5161499405855028,\"y\":-0.21648482229664037},\"p2\":{\"length\":136.7808466123821,\"x\":22,\"y\":135},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"40\",\"x\":\"685\",\"y\":\"2049\",\"zOrder\":\"10\"},{\"ID\":\"11\",\"h\":\"124\",\"measuredH\":\"123\",\"measuredW\":\"155\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.4738906925817148,\"x\":0.4738851557727551,\"y\":0.0022907758094075355},\"p2\":{\"length\":197.87369708983556,\"x\":155,\"y\":123},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"156\",\"x\":\"826\",\"y\":\"2053\",\"zOrder\":\"11\"},{\"ID\":\"12\",\"h\":\"92\",\"measuredH\":\"91\",\"measuredW\":\"160\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.4738906925817147,\"x\":0.473885155772755,\"y\":0.002290775809407384},\"p2\":{\"length\":184.06792224611,\"x\":160,\"y\":91},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"161\",\"x\":\"824\",\"y\":\"2045\",\"zOrder\":\"12\"},{\"ID\":\"13\",\"h\":\"56\",\"measuredH\":\"55\",\"measuredW\":\"168\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.4738906925817145,\"x\":0.4738851557727548,\"y\":0.0022907758094073234},\"p2\":{\"length\":176.77386684688437,\"x\":168,\"y\":55},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"169\",\"x\":\"822\",\"y\":\"2041\",\"zOrder\":\"13\"},{\"ID\":\"14\",\"h\":\"26\",\"measuredH\":\"25\",\"measuredW\":\"171\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.4738906925817147,\"x\":0.473885155772755,\"y\":0.0022907758094073507},\"p2\":{\"length\":172.81782315490494,\"x\":171,\"y\":25},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"172\",\"x\":\"822\",\"y\":\"2034\",\"zOrder\":\"14\"},{\"ID\":\"15\",\"h\":\"89\",\"measuredH\":\"88\",\"measuredW\":\"1\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":88.0056816347672,\"x\":1,\"y\":88},\"p1\":{\"length\":0.4073544059505541,\"x\":0.4072427393330943,\"y\":0.00953746862674794},\"p2\":{\"length\":1,\"x\":1,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"2\",\"x\":\"934\",\"y\":\"3233\",\"zOrder\":\"15\"},{\"ID\":\"16\",\"h\":\"11\",\"measuredH\":\"10\",\"measuredW\":\"155\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":10,\"x\":0,\"y\":10},\"p1\":{\"length\":0.47389069258171473,\"x\":0.47388515577275503,\"y\":0.0022907758094073815},\"p2\":{\"length\":155,\"x\":155,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"156\",\"x\":\"827\",\"y\":\"2019\",\"zOrder\":\"16\"},{\"ID\":\"17\",\"h\":\"52\",\"measuredH\":\"51\",\"measuredW\":\"214\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":51,\"x\":0,\"y\":51},\"p1\":{\"length\":0.41973542836377015,\"x\":0.4003471278308693,\"y\":0.12609523012902282},\"p2\":{\"length\":214.0840956259946,\"x\":214,\"y\":6},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"215\",\"x\":\"634\",\"y\":\"3048\",\"zOrder\":\"17\"},{\"ID\":\"18\",\"h\":\"31\",\"measuredH\":\"30\",\"measuredW\":\"194\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":30,\"x\":0,\"y\":30},\"p1\":{\"length\":0.4320383106451746,\"x\":0.4319942611190819,\"y\":-0.006169296987087524},\"p2\":{\"length\":194,\"x\":194,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"195\",\"x\":\"296\",\"y\":\"2967\",\"zOrder\":\"18\"},{\"ID\":\"19\",\"h\":\"43\",\"measuredH\":\"42\",\"measuredW\":\"98\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.43203831064517456,\"x\":0.43199426111908185,\"y\":-0.006169296987087567},\"p2\":{\"length\":106.62082348209472,\"x\":98,\"y\":42},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"99\",\"x\":\"992\",\"y\":\"2892\",\"zOrder\":\"19\"},{\"ID\":\"20\",\"h\":\"8\",\"measuredH\":\"7\",\"measuredW\":\"103\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.43203831064517456,\"x\":0.43199426111908185,\"y\":-0.006169296987087555},\"p2\":{\"length\":103.23759005323592,\"x\":103,\"y\":7},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"104\",\"x\":\"985\",\"y\":\"2882\",\"zOrder\":\"20\"},{\"ID\":\"21\",\"h\":\"80\",\"measuredH\":\"79\",\"measuredW\":\"269\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":280.36048223670895,\"x\":269,\"y\":79},\"p1\":{\"length\":0.3818953898610312,\"x\":0.3554465668559629,\"y\":-0.1396489416623645},\"p2\":{\"length\":3,\"x\":0,\"y\":3},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"270\",\"x\":\"655\",\"y\":\"2966\",\"zOrder\":\"21\"},{\"ID\":\"22\",\"h\":\"11\",\"measuredH\":\"10\",\"measuredW\":\"174\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.4320383106451746,\"x\":0.4319942611190819,\"y\":-0.006169296987087518},\"p2\":{\"length\":174.28711943227475,\"x\":174,\"y\":10},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"175\",\"x\":\"304\",\"y\":\"2947\",\"zOrder\":\"22\"},{\"ID\":\"23\",\"h\":\"88\",\"measuredH\":\"87\",\"measuredW\":\"205\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":205.00243900988104,\"x\":205,\"y\":1},\"p1\":{\"length\":0.6546006826935066,\"x\":0.6338600999575079,\"y\":-0.16347301754314972},\"p2\":{\"length\":87,\"x\":0,\"y\":87},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"206\",\"x\":\"618\",\"y\":\"2881\",\"zOrder\":\"23\"},{\"ID\":\"24\",\"h\":\"36\",\"measuredH\":\"35\",\"measuredW\":\"97\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":35,\"x\":0,\"y\":35},\"p1\":{\"length\":0.4320383106451745,\"x\":0.4319942611190818,\"y\":-0.006169296987087552},\"p2\":{\"length\":97,\"x\":97,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"98\",\"x\":\"984\",\"y\":\"2846\",\"zOrder\":\"24\"},{\"ID\":\"25\",\"h\":\"95\",\"measuredH\":\"94\",\"measuredW\":\"38\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":36,\"x\":36,\"y\":0},\"p1\":{\"length\":0.573966251502026,\"x\":0.5467857377372116,\"y\":0.1745354258322937},\"p2\":{\"length\":94,\"x\":0,\"y\":94},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"39\",\"x\":\"891\",\"y\":\"2774\",\"zOrder\":\"25\"},{\"ID\":\"26\",\"h\":\"39\",\"measuredH\":\"38\",\"measuredW\":\"192\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":5,\"x\":0,\"y\":5},\"p1\":{\"length\":0.4336417315707421,\"x\":0.3915341200615699,\"y\":-0.18640328373524884},\"p2\":{\"length\":192,\"x\":192,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"193\",\"x\":\"639\",\"y\":\"2765\",\"zOrder\":\"26\"},{\"ID\":\"27\",\"h\":\"4\",\"measuredH\":\"3\",\"measuredW\":\"64\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":3,\"x\":0,\"y\":3},\"p1\":{\"length\":0.48115369243064626,\"x\":0.4807692307692308,\"y\":-0.01923076923076923},\"p2\":{\"length\":64,\"x\":64,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"65\",\"x\":\"240\",\"y\":\"2741\",\"zOrder\":\"27\"},{\"ID\":\"28\",\"h\":\"17\",\"measuredH\":\"16\",\"measuredW\":\"72\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":16,\"x\":0,\"y\":16},\"p1\":{\"length\":0.48357394275391136,\"x\":0.4835193355826628,\"y\":0.007267064624967561},\"p2\":{\"length\":72,\"x\":72,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"73\",\"x\":\"229\",\"y\":\"2666\",\"zOrder\":\"28\"},{\"ID\":\"29\",\"h\":\"29\",\"measuredH\":\"28\",\"measuredW\":\"87\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.48357394275391136,\"x\":0.4835193355826628,\"y\":0.007267064624967573},\"p2\":{\"length\":91.39474820797966,\"x\":87,\"y\":28},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"88\",\"x\":\"226\",\"y\":\"2634\",\"zOrder\":\"29\"},{\"ID\":\"30\",\"h\":\"166\",\"measuredH\":\"165\",\"measuredW\":\"7\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":165.14841809717706,\"x\":7,\"y\":165},\"p1\":{\"length\":0.40735440595055405,\"x\":0.4072427393330943,\"y\":0.009537468626747932},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"8\",\"x\":\"924\",\"y\":\"3055\",\"zOrder\":\"30\"},{\"ID\":\"31\",\"h\":\"133\",\"measuredH\":\"132\",\"measuredW\":\"153\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.6114043641088928,\"x\":0.5986334582323121,\"y\":0.1243112188670928},\"p2\":{\"length\":202.07176942858692,\"x\":153,\"y\":132},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"154\",\"x\":\"722\",\"y\":\"2204\",\"zOrder\":\"31\"},{\"ID\":\"32\",\"h\":\"103\",\"measuredH\":\"102\",\"measuredW\":\"210\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":210.00238093888365,\"x\":210,\"y\":1},\"p1\":{\"length\":0.4982428009090221,\"x\":0.4817959153606748,\"y\":-0.12695898786394355},\"p2\":{\"length\":102,\"x\":0,\"y\":102},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"211\",\"x\":\"365\",\"y\":\"1822\",\"zOrder\":\"32\"},{\"ID\":\"33\",\"h\":\"203\",\"measuredH\":\"202\",\"measuredW\":\"186\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":186,\"x\":186,\"y\":0},\"p1\":{\"length\":0.513285046013946,\"x\":0.4884615384615386,\"y\":0.15769230769230771},\"p2\":{\"length\":202,\"x\":0,\"y\":202},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"187\",\"x\":\"477\",\"y\":\"2196\",\"zOrder\":\"33\"},{\"ID\":\"34\",\"h\":\"4\",\"measuredH\":\"3\",\"measuredW\":\"149\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":149.03019828209315,\"x\":149,\"y\":3},\"p1\":{\"length\":0.5425114443366369,\"x\":0.5424177701836822,\"y\":0.010081161896625376},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"150\",\"x\":\"481\",\"y\":\"2189\",\"zOrder\":\"34\"},{\"ID\":\"35\",\"h\":\"202\",\"measuredH\":\"201\",\"measuredW\":\"97\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.6012412632763702,\"x\":0.5495265293852396,\"y\":0.24395009770028556},\"p2\":{\"length\":214.88834309938733,\"x\":76,\"y\":201},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"98\",\"x\":\"664\",\"y\":\"1827\",\"zOrder\":\"35\"},{\"ID\":\"36\",\"h\":\"16\",\"measuredH\":\"15\",\"measuredW\":\"123\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":123.9112585683803,\"x\":123,\"y\":15},\"p1\":{\"length\":0.4738906925817146,\"x\":0.4738851557727549,\"y\":0.0022907758094072007},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"124\",\"x\":\"1017\",\"y\":\"1818\",\"zOrder\":\"36\"},{\"ID\":\"37\",\"h\":\"21\",\"measuredH\":\"20\",\"measuredW\":\"123\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":123,\"x\":123,\"y\":0},\"p1\":{\"length\":0.4738906925817147,\"x\":0.473885155772755,\"y\":0.00229077580940721},\"p2\":{\"length\":20,\"x\":0,\"y\":20},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"124\",\"x\":\"1011\",\"y\":\"1794\",\"zOrder\":\"37\"},{\"ID\":\"38\",\"h\":\"366\",\"measuredH\":\"365\",\"measuredW\":\"210\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.5431292904961396,\"x\":0.5220922035809953,\"y\":-0.1496968842520795},\"p2\":{\"length\":421.0997506529777,\"x\":210,\"y\":365},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"211\",\"x\":\"421\",\"y\":\"1447\",\"zOrder\":\"38\"},{\"ID\":\"39\",\"h\":\"71\",\"measuredH\":\"70\",\"measuredW\":\"1\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":70.00714249274856,\"x\":1,\"y\":70},\"p1\":{\"length\":0.468480569910445,\"x\":0.4684719913970086,\"y\":0.002835076742594586},\"p2\":{\"length\":1,\"x\":1,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"2\",\"x\":\"260\",\"y\":\"1544\",\"zOrder\":\"39\"},{\"ID\":\"40\",\"h\":\"94\",\"measuredH\":\"93\",\"measuredW\":\"74\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":93,\"x\":0,\"y\":93},\"p1\":{\"length\":0.6450413563151326,\"x\":0.6083656396653744,\"y\":0.21440522342379104},\"p2\":{\"length\":74.00675644831355,\"x\":74,\"y\":1},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"75\",\"x\":\"231\",\"y\":\"1424\",\"zOrder\":\"40\"},{\"ID\":\"41\",\"h\":\"133\",\"measuredH\":\"132\",\"measuredW\":\"123\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":180.42449944505873,\"x\":123,\"y\":132},\"p1\":{\"length\":0.5160466847817807,\"x\":0.4752557367984518,\"y\":0.20108745737720027},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"124\",\"x\":\"598\",\"y\":\"1575\",\"zOrder\":\"41\"},{\"ID\":\"42\",\"h\":\"93\",\"measuredH\":\"92\",\"measuredW\":\"106\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":140.356688476182,\"x\":106,\"y\":92},\"p1\":{\"length\":0.5612259966264392,\"x\":0.5242639593908629,\"y\":0.2003045685279188},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"107\",\"x\":\"620\",\"y\":\"1571\",\"zOrder\":\"42\"},{\"ID\":\"43\",\"h\":\"46\",\"measuredH\":\"45\",\"measuredW\":\"75\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":87.46427842267951,\"x\":75,\"y\":45},\"p1\":{\"length\":0.6391374907061422,\"x\":0.5980392156862747,\"y\":0.22549019607843143},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"76\",\"x\":\"649\",\"y\":\"1573\",\"zOrder\":\"43\"},{\"ID\":\"44\",\"h\":\"118\",\"measuredH\":\"117\",\"measuredW\":\"79\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":141.1736519326464,\"x\":79,\"y\":117},\"p1\":{\"length\":0.48136367588301543,\"x\":0.48128449573507287,\"y\":-0.00873055694932263},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"80\",\"x\":\"483\",\"y\":\"1426\",\"zOrder\":\"44\"},{\"ID\":\"45\",\"h\":\"1\",\"measuredH\":\"0\",\"measuredW\":\"56\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":56,\"x\":56,\"y\":0},\"p1\":{\"length\":0.47109807413991345,\"x\":0.4710383049683653,\"y\":0.007504046299475204},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"57\",\"x\":\"526\",\"y\":\"1427\",\"zOrder\":\"45\"},{\"ID\":\"46\",\"h\":\"90\",\"measuredH\":\"89\",\"measuredW\":\"71\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":113.85077953180644,\"x\":71,\"y\":89},\"p1\":{\"length\":0.5141752640513094,\"x\":0.4814618292763812,\"y\":0.18047356901240283},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"72\",\"x\":\"700\",\"y\":\"1447\",\"zOrder\":\"46\"},{\"ID\":\"47\",\"h\":\"50\",\"measuredH\":\"48\",\"measuredW\":\"67\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":82.41965784932621,\"x\":67,\"y\":48},\"p1\":{\"length\":0.4834588204030492,\"x\":0.4618427902134307,\"y\":-0.14294638209266025},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"69\",\"x\":\"712\",\"y\":\"1427\",\"zOrder\":\"47\"},{\"ID\":\"48\",\"h\":\"178\",\"measuredH\":\"177\",\"measuredW\":\"165\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":165,\"x\":165,\"y\":0},\"p1\":{\"length\":0.6102319206616598,\"x\":0.5791841992271362,\"y\":-0.19216831258050665},\"p2\":{\"length\":177.00282483621552,\"x\":1,\"y\":177},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"166\",\"x\":\"421\",\"y\":\"1248\",\"zOrder\":\"48\"},{\"ID\":\"49\",\"h\":\"86\",\"measuredH\":\"85\",\"measuredW\":\"157\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":178.53291013143766,\"x\":157,\"y\":85},\"p1\":{\"length\":0.5096891694678537,\"x\":0.5048661800486618,\"y\":-0.06995133819951342},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"158\",\"x\":\"689\",\"y\":\"1237\",\"zOrder\":\"49\"},{\"ID\":\"50\",\"h\":\"37\",\"measuredH\":\"36\",\"measuredW\":\"169\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":169,\"x\":169,\"y\":0},\"p1\":{\"length\":0.51486881558342,\"x\":0.5145547945205478,\"y\":-0.01797945205479508},\"p2\":{\"length\":36,\"x\":0,\"y\":36},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"170\",\"x\":\"288\",\"y\":\"1248\",\"zOrder\":\"50\"},{\"ID\":\"51\",\"h\":\"6\",\"measuredH\":\"5\",\"measuredW\":\"170\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":170.07351351694948,\"x\":170,\"y\":5},\"p1\":{\"length\":0.5148688155834202,\"x\":0.514554794520548,\"y\":-0.017979452054794513},\"p2\":{\"length\":2,\"x\":0,\"y\":2},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"171\",\"x\":\"281\",\"y\":\"1238\",\"zOrder\":\"51\"},{\"ID\":\"52\",\"h\":\"44\",\"measuredH\":\"43\",\"measuredW\":\"165\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":170.51099671282202,\"x\":165,\"y\":43},\"p1\":{\"length\":0.5148688155834201,\"x\":0.5145547945205479,\"y\":-0.017979452054794544},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"166\",\"x\":\"287\",\"y\":\"1190\",\"zOrder\":\"52\"},{\"ID\":\"53\",\"h\":\"80\",\"measuredH\":\"79\",\"measuredW\":\"23\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":79,\"x\":0,\"y\":79},\"p1\":{\"length\":0.5155127783649347,\"x\":0.46839867737364194,\"y\":-0.21530467642890885},\"p2\":{\"length\":13,\"x\":13,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"text\":\"\"},\"typeID\":\"Arrow\",\"w\":\"24\",\"x\":\"634\",\"y\":\"1147\",\"zOrder\":\"53\"},{\"ID\":\"54\",\"h\":\"15\",\"measuredH\":\"14\",\"measuredW\":\"221\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":221.44299492194375,\"x\":221,\"y\":14},\"p1\":{\"length\":0.4540233391595285,\"x\":0.45401751492485337,\"y\":-0.0022997049873399963},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"222\",\"x\":\"791\",\"y\":\"1141\",\"zOrder\":\"54\"},{\"ID\":\"55\",\"h\":\"60\",\"measuredH\":\"59\",\"measuredW\":\"221\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":228.74002710500844,\"x\":221,\"y\":59},\"p1\":{\"length\":0.454023339159528,\"x\":0.45401751492485287,\"y\":-0.0022997049873399265},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"222\",\"x\":\"785\",\"y\":\"1145\",\"zOrder\":\"55\"},{\"ID\":\"56\",\"h\":\"27\",\"measuredH\":\"26\",\"measuredW\":\"212\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":212,\"x\":212,\"y\":0},\"p1\":{\"length\":0.4540233391595283,\"x\":0.4540175149248532,\"y\":-0.002299704987339999},\"p2\":{\"length\":26,\"x\":0,\"y\":26},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"213\",\"x\":\"793\",\"y\":\"1111\",\"zOrder\":\"56\"},{\"ID\":\"57\",\"h\":\"87\",\"measuredH\":\"86\",\"measuredW\":\"233\",\"properties\":{\"color\":\"10027263\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":233,\"x\":233,\"y\":0},\"p1\":{\"length\":0.5132593836863036,\"x\":0.5070114290346114,\"y\":-0.07984112831320413},\"p2\":{\"length\":86,\"x\":0,\"y\":86},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"234\",\"x\":\"702\",\"y\":\"908\",\"zOrder\":\"57\"},{\"ID\":\"58\",\"h\":\"107\",\"measuredH\":\"106\",\"measuredW\":\"80\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":80,\"x\":80,\"y\":0},\"p1\":{\"length\":0.501054655944908,\"x\":0.4879820026048863,\"y\":-0.11370722658562572},\"p2\":{\"length\":106,\"x\":0,\"y\":106},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"81\",\"x\":\"710\",\"y\":\"738\",\"zOrder\":\"58\"},{\"ID\":\"59\",\"h\":\"162\",\"measuredH\":\"161\",\"measuredW\":\"92\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":92,\"x\":92,\"y\":0},\"p1\":{\"length\":0.5010546559449078,\"x\":0.48798200260488617,\"y\":-0.11370722658562572},\"p2\":{\"length\":161,\"x\":0,\"y\":161},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"93\",\"x\":\"686\",\"y\":\"692\",\"zOrder\":\"59\"},{\"ID\":\"60\",\"h\":\"71\",\"measuredH\":\"70\",\"measuredW\":\"201\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":201,\"x\":201,\"y\":0},\"p1\":{\"length\":0.4540233391595282,\"x\":0.4540175149248531,\"y\":-0.00229970498733998},\"p2\":{\"length\":70,\"x\":0,\"y\":70},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"202\",\"x\":\"797\",\"y\":\"1060\",\"zOrder\":\"60\"},{\"ID\":\"61\",\"h\":\"107\",\"measuredH\":\"106\",\"measuredW\":\"33\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":22,\"x\":22,\"y\":0},\"p1\":{\"length\":0.5785559515548718,\"x\":0.5204368174726989,\"y\":-0.2527301092043681},\"p2\":{\"length\":111.0180165558726,\"x\":33,\"y\":106},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"34\",\"x\":\"596\",\"y\":\"1009\",\"zOrder\":\"61\"},{\"ID\":\"62\",\"h\":\"34\",\"measuredH\":\"33\",\"measuredW\":\"148\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":148,\"x\":148,\"y\":0},\"p1\":{\"length\":0.4512986882133154,\"x\":0.45079101868865695,\"y\":0.021400080670461157},\"p2\":{\"length\":33,\"x\":0,\"y\":33},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"149\",\"x\":\"333\",\"y\":\"1006\",\"zOrder\":\"62\"},{\"ID\":\"63\",\"h\":\"49\",\"measuredH\":\"48\",\"measuredW\":\"149\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":156.54072952429985,\"x\":149,\"y\":48},\"p1\":{\"length\":0.5148688155834201,\"x\":0.5145547945205479,\"y\":-0.017979452054794468},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"150\",\"x\":\"333\",\"y\":\"953\",\"zOrder\":\"63\"},{\"ID\":\"64\",\"h\":\"5\",\"measuredH\":\"4\",\"measuredW\":\"159\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":159.05030650709227,\"x\":159,\"y\":4},\"p1\":{\"length\":0.4502807169420433,\"x\":0.4501850789844111,\"y\":0.00928001668317608},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"160\",\"x\":\"320\",\"y\":\"998\",\"zOrder\":\"64\"},{\"ID\":\"65\",\"h\":\"124\",\"measuredH\":\"123\",\"measuredW\":\"33\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":20,\"x\":20,\"y\":0},\"p1\":{\"length\":0.5092536532052049,\"x\":0.4760057453625841,\"y\":0.18099119780988748},\"p2\":{\"length\":123,\"x\":0,\"y\":123},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"34\",\"x\":\"634\",\"y\":\"865\",\"zOrder\":\"65\"},{\"ID\":\"66\",\"h\":\"251\",\"measuredH\":\"250\",\"measuredW\":\"50\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":33,\"x\":33,\"y\":0},\"p1\":{\"length\":0.5149348597880793,\"x\":0.48903470353087286,\"y\":-0.1612543598400992},\"p2\":{\"length\":254.95097567963924,\"x\":50,\"y\":250},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"51\",\"x\":\"595\",\"y\":\"599\",\"zOrder\":\"66\"},{\"ID\":\"67\",\"h\":\"213\",\"measuredH\":\"212\",\"measuredW\":\"129\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":129,\"x\":129,\"y\":0},\"p1\":{\"length\":0.4758959123561307,\"x\":0.47589093518297126,\"y\":0.0021765127959818427},\"p2\":{\"length\":212,\"x\":0,\"y\":212},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"130\",\"x\":\"428\",\"y\":\"588\",\"zOrder\":\"67\"},{\"ID\":\"68\",\"h\":\"158\",\"measuredH\":\"157\",\"measuredW\":\"120\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":120,\"x\":120,\"y\":0},\"p1\":{\"length\":0.4668714996150437,\"x\":0.46686783637115814,\"y\":0.0018494634122600195},\"p2\":{\"length\":157,\"x\":0,\"y\":157},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"121\",\"x\":\"431\",\"y\":\"581\",\"zOrder\":\"68\"},{\"ID\":\"69\",\"h\":\"120\",\"measuredH\":\"119\",\"measuredW\":\"118\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":118,\"x\":118,\"y\":0},\"p1\":{\"length\":0.4638038171054964,\"x\":0.46376334167874567,\"y\":-0.006127289497957557},\"p2\":{\"length\":119,\"x\":0,\"y\":119},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"119\",\"x\":\"434\",\"y\":\"569\",\"zOrder\":\"69\"},{\"ID\":\"70\",\"h\":\"82\",\"measuredH\":\"81\",\"measuredW\":\"127\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":127,\"x\":127,\"y\":0},\"p1\":{\"length\":0.46826071309757666,\"x\":0.4682571775171856,\"y\":0.0018196522442377747},\"p2\":{\"length\":81,\"x\":0,\"y\":81},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"128\",\"x\":\"429\",\"y\":\"563\",\"zOrder\":\"70\"},{\"ID\":\"71\",\"h\":\"34\",\"measuredH\":\"33\",\"measuredW\":\"122\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":122,\"x\":122,\"y\":0},\"p1\":{\"length\":0.45028071694204375,\"x\":0.4501850789844116,\"y\":0.00928001668317608},\"p2\":{\"length\":33,\"x\":0,\"y\":33},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"123\",\"x\":\"429\",\"y\":\"565\",\"zOrder\":\"71\"},{\"ID\":\"72\",\"h\":\"84\",\"measuredH\":\"83\",\"measuredW\":\"107\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":135.41787178950938,\"x\":107,\"y\":83},\"p1\":{\"length\":0.5179501120391188,\"x\":0.5177263969171482,\"y\":0.0152215799614642},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"108\",\"x\":\"787\",\"y\":\"520\",\"zOrder\":\"72\"},{\"ID\":\"73\",\"h\":\"38\",\"measuredH\":\"37\",\"measuredW\":\"96\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":102.88342918079664,\"x\":96,\"y\":37},\"p1\":{\"length\":0.48834964512812046,\"x\":0.4882200619773317,\"y\":-0.011249310183809558},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"97\",\"x\":\"787\",\"y\":\"517\",\"zOrder\":\"73\"},{\"ID\":\"74\",\"h\":\"15\",\"measuredH\":\"14\",\"measuredW\":\"108\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":108,\"x\":108,\"y\":0},\"p1\":{\"length\":0.45329968793573056,\"x\":0.4532883642495784,\"y\":-0.0032040472175379714},\"p2\":{\"length\":14,\"x\":0,\"y\":14},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"109\",\"x\":\"788\",\"y\":\"501\",\"zOrder\":\"74\"},{\"ID\":\"75\",\"h\":\"58\",\"measuredH\":\"57\",\"measuredW\":\"97\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":97,\"x\":97,\"y\":0},\"p1\":{\"length\":0.4929592777882588,\"x\":0.4929203539823005,\"y\":-0.006194690265486787},\"p2\":{\"length\":57,\"x\":0,\"y\":57},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"98\",\"x\":\"787\",\"y\":\"452\",\"zOrder\":\"75\"},{\"ID\":\"76\",\"h\":\"59\",\"measuredH\":\"58\",\"measuredW\":\"110\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":124.35433245367852,\"x\":110,\"y\":58},\"p1\":{\"length\":0.4585249091872984,\"x\":0.45522128005575574,\"y\":-0.054942502032756434},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"111\",\"x\":\"432\",\"y\":\"389\",\"zOrder\":\"76\"},{\"ID\":\"77\",\"h\":\"58\",\"measuredH\":\"57\",\"measuredW\":\"111\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":111,\"x\":111,\"y\":0},\"p1\":{\"length\":0.48320470758421347,\"x\":0.47938350680544434,\"y\":0.06064851881505207},\"p2\":{\"length\":57,\"x\":0,\"y\":57},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"112\",\"x\":\"430\",\"y\":\"471\",\"zOrder\":\"77\"},{\"ID\":\"78\",\"h\":\"23\",\"measuredH\":\"22\",\"measuredW\":\"111\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":111,\"x\":111,\"y\":0},\"p1\":{\"length\":0.4458144099180621,\"x\":0.4453729012104649,\"y\":0.01983600156188987},\"p2\":{\"length\":22,\"x\":0,\"y\":22},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"112\",\"x\":\"434\",\"y\":\"461\",\"zOrder\":\"78\"},{\"ID\":\"79\",\"h\":\"14\",\"measuredH\":\"13\",\"measuredW\":\"114\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":114.73883387938018,\"x\":114,\"y\":13},\"p1\":{\"length\":0.4652808414804901,\"x\":0.4652789342214824,\"y\":-0.0013322231473772803},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"115\",\"x\":\"431\",\"y\":\"438\",\"zOrder\":\"79\"},{\"ID\":\"80\",\"h\":\"67\",\"measuredH\":\"66\",\"measuredW\":\"14\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.529252928988914,\"x\":0.510715363718684,\"y\":0.13884696649562317},\"p2\":{\"length\":66.61080993352356,\"x\":9,\"y\":66},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"15\",\"x\":\"658\",\"y\":\"377\",\"zOrder\":\"80\"},{\"ID\":\"81\",\"h\":\"55\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"543\",\"y\":\"429\",\"zOrder\":\"81\"},{\"ID\":\"82\",\"measuredH\":\"40\",\"measuredW\":\"149\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"Front-end\"},\"typeID\":\"Label\",\"x\":\"563\",\"y\":\"221\",\"zOrder\":\"82\"},{\"ID\":\"83\",\"h\":\"74\",\"measuredH\":\"73\",\"measuredW\":\"18\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":8,\"x\":8,\"y\":0},\"p1\":{\"length\":0.4979530082684307,\"x\":0.45894941634241254,\"y\":0.19319066147859923},\"p2\":{\"length\":73,\"x\":0,\"y\":73},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"19\",\"x\":\"637\",\"y\":\"147\",\"zOrder\":\"83\"},{\"ID\":\"84\",\"h\":\"61\",\"measuredH\":\"60\",\"measuredW\":\"15\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":2,\"x\":2,\"y\":0},\"p1\":{\"length\":0.4752342503759216,\"x\":0.46391752577319545,\"y\":-0.1030927835051546},\"p2\":{\"length\":61.84658438426491,\"x\":15,\"y\":60},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"16\",\"x\":\"626\",\"y\":\"277\",\"zOrder\":\"84\"},{\"ID\":\"85\",\"measuredH\":\"26\",\"measuredW\":\"147\",\"properties\":{\"bold\":\"true\",\"size\":\"18\",\"text\":\"Learn the Basics\"},\"typeID\":\"Label\",\"x\":\"589\",\"y\":\"344\",\"zOrder\":\"85\"},{\"ID\":\"86\",\"measuredH\":\"25\",\"measuredW\":\"48\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"HTML\"},\"typeID\":\"Label\",\"x\":\"644\",\"y\":\"444\",\"zOrder\":\"86\"},{\"ID\":\"87\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"173\",\"y\":\"369\",\"zOrder\":\"87\"},{\"ID\":\"88\",\"measuredH\":\"25\",\"measuredW\":\"131\",\"properties\":{\"size\":\"17\",\"text\":\"Learn the basics\"},\"typeID\":\"Label\",\"w\":\"134\",\"x\":\"241\",\"y\":\"377\",\"zOrder\":\"88\"},{\"ID\":\"89\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"173\",\"y\":\"416\",\"zOrder\":\"89\"},{\"ID\":\"90\",\"measuredH\":\"25\",\"measuredW\":\"186\",\"properties\":{\"size\":\"17\",\"text\":\"Writing Semantic HTML\"},\"typeID\":\"Label\",\"w\":\"189\",\"x\":\"214\",\"y\":\"424\",\"zOrder\":\"90\"},{\"ID\":\"91\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"173\",\"y\":\"462\",\"zOrder\":\"91\"},{\"ID\":\"92\",\"measuredH\":\"25\",\"measuredW\":\"83\",\"properties\":{\"size\":\"17\",\"text\":\"Basic SEO\"},\"typeID\":\"Label\",\"w\":\"84\",\"x\":\"266\",\"y\":\"470\",\"zOrder\":\"92\"},{\"ID\":\"93\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"173\",\"y\":\"509\",\"zOrder\":\"93\"},{\"ID\":\"94\",\"measuredH\":\"25\",\"measuredW\":\"97\",\"properties\":{\"size\":\"17\",\"text\":\"Accessibility\"},\"typeID\":\"Label\",\"w\":\"100\",\"x\":\"258\",\"y\":\"517\",\"zOrder\":\"94\"},{\"ID\":\"95\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"543\",\"y\":\"491\",\"zOrder\":\"95\"},{\"ID\":\"96\",\"measuredH\":\"25\",\"measuredW\":\"35\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS\"},\"typeID\":\"Label\",\"x\":\"651\",\"y\":\"504\",\"zOrder\":\"96\"},{\"ID\":\"97\",\"measuredH\":\"10\",\"measuredW\":\"100\",\"properties\":{\"color\":\"10027263\"},\"typeID\":\"HRule\",\"x\":\"1126\",\"y\":\"498\",\"zOrder\":\"97\"},{\"ID\":\"98\",\"h\":\"185\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"116\",\"x\":\"1195\",\"y\":\"436\",\"zOrder\":\"98\"},{\"ID\":\"99\",\"h\":\"43\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"297\",\"x\":\"875\",\"y\":\"433\",\"zOrder\":\"99\"},{\"ID\":\"100\",\"measuredH\":\"25\",\"measuredW\":\"131\",\"properties\":{\"size\":\"17\",\"text\":\"Learn the basics\"},\"typeID\":\"Label\",\"w\":\"140\",\"x\":\"954\",\"y\":\"442\",\"zOrder\":\"100\"},{\"ID\":\"101\",\"h\":\"47\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"298\",\"x\":\"874\",\"y\":\"481\",\"zOrder\":\"101\"},{\"ID\":\"102\",\"measuredH\":\"25\",\"measuredW\":\"122\",\"properties\":{\"size\":\"17\",\"text\":\"Making Layouts\"},\"typeID\":\"Label\",\"w\":\"130\",\"x\":\"959\",\"y\":\"492\",\"zOrder\":\"102\"},{\"ID\":\"103\",\"h\":\"42\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"297\",\"x\":\"875\",\"y\":\"580\",\"zOrder\":\"103\"},{\"ID\":\"104\",\"measuredH\":\"25\",\"measuredW\":\"101\",\"properties\":{\"size\":\"17\",\"text\":\"Learn CSS 3\"},\"typeID\":\"Label\",\"w\":\"106\",\"x\":\"971\",\"y\":\"589\",\"zOrder\":\"104\"},{\"ID\":\"105\",\"measuredH\":\"25\",\"measuredW\":\"46\",\"properties\":{\"size\":\"17\",\"text\":\"Floats\"},\"typeID\":\"Label\",\"x\":\"1230\",\"y\":\"449\",\"zOrder\":\"105\"},{\"ID\":\"106\",\"h\":\"43\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"297\",\"x\":\"875\",\"y\":\"532\",\"zOrder\":\"106\"},{\"ID\":\"107\",\"measuredH\":\"25\",\"measuredW\":\"113\",\"properties\":{\"size\":\"17\",\"text\":\"Media Queries\"},\"typeID\":\"Label\",\"w\":\"123\",\"x\":\"963\",\"y\":\"541\",\"zOrder\":\"107\"},{\"ID\":\"108\",\"measuredH\":\"25\",\"measuredW\":\"84\",\"properties\":{\"size\":\"17\",\"text\":\"Positioning\"},\"typeID\":\"Label\",\"x\":\"1211\",\"y\":\"476\",\"zOrder\":\"108\"},{\"ID\":\"109\",\"measuredH\":\"25\",\"measuredW\":\"56\",\"properties\":{\"size\":\"17\",\"text\":\"Display\"},\"typeID\":\"Label\",\"x\":\"1225\",\"y\":\"503\",\"zOrder\":\"109\"},{\"ID\":\"110\",\"measuredH\":\"25\",\"measuredW\":\"79\",\"properties\":{\"size\":\"17\",\"text\":\"Box Model\"},\"typeID\":\"Label\",\"x\":\"1214\",\"y\":\"530\",\"zOrder\":\"110\"},{\"ID\":\"111\",\"measuredH\":\"25\",\"measuredW\":\"73\",\"properties\":{\"size\":\"17\",\"text\":\"CSS Grid\"},\"typeID\":\"Label\",\"x\":\"1217\",\"y\":\"557\",\"zOrder\":\"111\"},{\"ID\":\"112\",\"measuredH\":\"25\",\"measuredW\":\"65\",\"properties\":{\"size\":\"17\",\"text\":\"Flex Box\"},\"typeID\":\"Label\",\"x\":\"1221\",\"y\":\"584\",\"zOrder\":\"112\"},{\"ID\":\"113\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"543\",\"y\":\"550\",\"zOrder\":\"113\"},{\"ID\":\"114\",\"measuredH\":\"25\",\"measuredW\":\"168\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Basics of JavaScript\"},\"typeID\":\"Label\",\"x\":\"584\",\"y\":\"563\",\"zOrder\":\"114\"},{\"ID\":\"115\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"173\",\"y\":\"573\",\"zOrder\":\"115\"},{\"ID\":\"116\",\"measuredH\":\"25\",\"measuredW\":\"228\",\"properties\":{\"size\":\"17\",\"text\":\"Syntax and Basic Constructs\"},\"typeID\":\"Label\",\"w\":\"228\",\"x\":\"194\",\"y\":\"581\",\"zOrder\":\"116\"},{\"ID\":\"117\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"173\",\"y\":\"619\",\"zOrder\":\"117\"},{\"ID\":\"118\",\"measuredH\":\"25\",\"measuredW\":\"190\",\"properties\":{\"size\":\"17\",\"text\":\"Learn DOM Manipulation\"},\"typeID\":\"Label\",\"w\":\"197\",\"x\":\"210\",\"y\":\"627\",\"zOrder\":\"118\"},{\"ID\":\"119\",\"h\":\"145\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"174\",\"y\":\"763\",\"zOrder\":\"119\"},{\"ID\":\"120\",\"measuredH\":\"25\",\"measuredW\":\"242\",\"properties\":{\"size\":\"17\",\"text\":\"Hoisting, Event Bubbling, Scope\"},\"typeID\":\"Label\",\"w\":\"247\",\"x\":\"187\",\"y\":\"808\",\"zOrder\":\"120\"},{\"ID\":\"121\",\"measuredH\":\"25\",\"measuredW\":\"243\",\"properties\":{\"size\":\"17\",\"text\":\"Prototype, Shadow DOM, strict,\"},\"typeID\":\"Label\",\"w\":\"245\",\"x\":\"187\",\"y\":\"837\",\"zOrder\":\"121\"},{\"ID\":\"122\",\"measuredH\":\"25\",\"measuredW\":\"197\",\"properties\":{\"size\":\"17\",\"text\":\"Understand the concepts\"},\"typeID\":\"Label\",\"w\":\"202\",\"x\":\"209\",\"y\":\"778\",\"zOrder\":\"122\"},{\"ID\":\"123\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"174\",\"y\":\"666\",\"zOrder\":\"123\"},{\"ID\":\"124\",\"measuredH\":\"25\",\"measuredW\":\"230\",\"properties\":{\"size\":\"17\",\"text\":\"Learn Fetch API / Ajax (XHR)\"},\"typeID\":\"Label\",\"w\":\"234\",\"x\":\"192\",\"y\":\"674\",\"zOrder\":\"124\"},{\"ID\":\"125\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"270\",\"x\":\"174\",\"y\":\"714\",\"zOrder\":\"125\"},{\"ID\":\"126\",\"measuredH\":\"25\",\"measuredW\":\"232\",\"properties\":{\"size\":\"17\",\"text\":\"ES6+ and modular JavaScript\"},\"typeID\":\"Label\",\"w\":\"234\",\"x\":\"192\",\"y\":\"722\",\"zOrder\":\"126\"},{\"ID\":\"127\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"540\",\"y\":\"834\",\"zOrder\":\"127\"},{\"ID\":\"128\",\"measuredH\":\"25\",\"measuredW\":\"150\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Package Managers\"},\"typeID\":\"Label\",\"x\":\"590\",\"y\":\"847\",\"zOrder\":\"128\"},{\"ID\":\"129\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"106\",\"x\":\"767\",\"y\":\"675\",\"zOrder\":\"129\"},{\"ID\":\"130\",\"measuredH\":\"25\",\"measuredW\":\"33\",\"properties\":{\"size\":\"17\",\"text\":\"npm\"},\"typeID\":\"Label\",\"w\":\"33\",\"x\":\"804\",\"y\":\"683\",\"zOrder\":\"130\"},{\"ID\":\"131\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"106\",\"x\":\"767\",\"y\":\"720\",\"zOrder\":\"131\"},{\"ID\":\"132\",\"measuredH\":\"25\",\"measuredW\":\"33\",\"properties\":{\"size\":\"17\",\"text\":\"yarn\"},\"typeID\":\"Label\",\"w\":\"33\",\"x\":\"804\",\"y\":\"728\",\"zOrder\":\"132\"},{\"ID\":\"133\",\"h\":\"88\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"3355443\"},\"typeID\":\"TextArea\",\"w\":\"439\",\"x\":\"885\",\"y\":\"674\",\"zOrder\":\"133\"},{\"ID\":\"134\",\"measuredH\":\"25\",\"measuredW\":\"402\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"{color:yellow}npm{color} improved a lot, post v5+, but is still behind yarn\"},\"typeID\":\"Label\",\"w\":\"403\",\"x\":\"905\",\"y\":\"689\",\"zOrder\":\"134\"},{\"ID\":\"135\",\"measuredH\":\"25\",\"measuredW\":\"390\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"in some features; nothing serious though. Pick any!\"},\"typeID\":\"Label\",\"w\":\"395\",\"x\":\"905\",\"y\":\"719\",\"zOrder\":\"135\"},{\"ID\":\"136\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"465\",\"y\":\"976\",\"zOrder\":\"136\"},{\"ID\":\"137\",\"measuredH\":\"25\",\"measuredW\":\"165\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS Pre-processors\"},\"typeID\":\"Label\",\"x\":\"508\",\"y\":\"989\",\"zOrder\":\"137\"},{\"ID\":\"138\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"146\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"46\",\"properties\":{\"size\":\"17\",\"text\":\"SASS\"},\"typeID\":\"Label\",\"w\":\"46\",\"x\":\"50\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"40\",\"measuredH\":\"40\",\"measuredW\":\"146\",\"typeID\":\"__group__\",\"w\":\"146\",\"x\":\"201\",\"y\":\"932\",\"zOrder\":\"138\"},{\"ID\":\"139\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"146\",\"x\":\"201\",\"y\":\"978\",\"zOrder\":\"139\"},{\"ID\":\"140\",\"measuredH\":\"25\",\"measuredW\":\"70\",\"properties\":{\"size\":\"17\",\"text\":\"PostCSS\"},\"typeID\":\"Label\",\"w\":\"69\",\"x\":\"240\",\"y\":\"986\",\"zOrder\":\"140\"},{\"ID\":\"141\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"15658734\"},\"typeID\":\"TextArea\",\"w\":\"146\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"38\",\"properties\":{\"size\":\"17\",\"text\":\"Less\"},\"typeID\":\"Label\",\"w\":\"42\",\"x\":\"52\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"40\",\"measuredH\":\"40\",\"measuredW\":\"146\",\"typeID\":\"__group__\",\"w\":\"146\",\"x\":\"201\",\"y\":\"1023\",\"zOrder\":\"141\"},{\"ID\":\"142\",\"h\":\"154\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"3355443\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"447\",\"x\":\"879\",\"y\":\"824\",\"zOrder\":\"142\"},{\"ID\":\"143\",\"measuredH\":\"25\",\"measuredW\":\"401\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"PostCSS is not a pre-processor but can be used as\"},\"typeID\":\"Label\",\"w\":\"403\",\"x\":\"902\",\"y\":\"844\",\"zOrder\":\"143\"},{\"ID\":\"144\",\"measuredH\":\"25\",\"measuredW\":\"385\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"one. Go for SASS and revisit PostCSS later. There\"},\"typeID\":\"Label\",\"w\":\"395\",\"x\":\"902\",\"y\":\"874\",\"zOrder\":\"144\"},{\"ID\":\"145\",\"measuredH\":\"25\",\"measuredW\":\"390\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"is still some {color:yellow}Less{color} in the market but I won't go for it\"},\"typeID\":\"Label\",\"w\":\"395\",\"x\":\"901\",\"y\":\"903\",\"zOrder\":\"145\"},{\"ID\":\"146\",\"measuredH\":\"25\",\"measuredW\":\"188\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"if I was starting in 2019.\"},\"typeID\":\"Label\",\"w\":\"192\",\"x\":\"901\",\"y\":\"933\",\"zOrder\":\"146\"},{\"ID\":\"147\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"557\",\"y\":\"1109\",\"zOrder\":\"147\"},{\"ID\":\"148\",\"measuredH\":\"25\",\"measuredW\":\"136\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS Frameworks\"},\"typeID\":\"Label\",\"x\":\"614\",\"y\":\"1122\",\"zOrder\":\"148\"},{\"ID\":\"149\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"196\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"74\",\"properties\":{\"size\":\"17\",\"text\":\"Bootstrap\"},\"typeID\":\"Label\",\"w\":\"72\",\"x\":\"62\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"41\",\"measuredH\":\"41\",\"measuredW\":\"196\",\"typeID\":\"__group__\",\"w\":\"196\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"196\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"124\",\"properties\":{\"size\":\"17\",\"text\":\"Materialize CSS\"},\"typeID\":\"Label\",\"w\":\"128\",\"x\":\"34\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"41\",\"measuredH\":\"41\",\"measuredW\":\"196\",\"typeID\":\"__group__\",\"w\":\"196\",\"x\":\"0\",\"y\":\"48\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"196\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"47\",\"properties\":{\"size\":\"17\",\"text\":\"Bulma\"},\"typeID\":\"Label\",\"w\":\"48\",\"x\":\"74\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"41\",\"measuredH\":\"41\",\"measuredW\":\"196\",\"typeID\":\"__group__\",\"w\":\"196\",\"x\":\"0\",\"y\":\"95\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"196\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"96\",\"properties\":{\"size\":\"17\",\"text\":\"Semantic UI\"},\"typeID\":\"Label\",\"w\":\"97\",\"x\":\"50\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"41\",\"measuredH\":\"41\",\"measuredW\":\"196\",\"typeID\":\"__group__\",\"w\":\"196\",\"x\":\"0\",\"y\":\"143\",\"zOrder\":\"3\"}]}},\"h\":\"184\",\"measuredH\":\"184\",\"measuredW\":\"196\",\"typeID\":\"__group__\",\"w\":\"196\",\"x\":\"982\",\"y\":\"1042\",\"zOrder\":\"149\"},{\"ID\":\"150\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"445\",\"y\":\"1211\",\"zOrder\":\"150\"},{\"ID\":\"151\",\"measuredH\":\"25\",\"measuredW\":\"142\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS Architecture\"},\"typeID\":\"Label\",\"x\":\"499\",\"y\":\"1224\",\"zOrder\":\"151\"},{\"ID\":\"152\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"146\",\"x\":\"168\",\"y\":\"1171\",\"zOrder\":\"152\"},{\"ID\":\"153\",\"measuredH\":\"25\",\"measuredW\":\"35\",\"properties\":{\"size\":\"17\",\"text\":\"BEM\"},\"typeID\":\"Label\",\"w\":\"35\",\"x\":\"224\",\"y\":\"1179\",\"zOrder\":\"153\"},{\"ID\":\"154\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"146\",\"x\":\"168\",\"y\":\"1262\",\"zOrder\":\"154\"},{\"ID\":\"155\",\"measuredH\":\"25\",\"measuredW\":\"70\",\"properties\":{\"size\":\"17\",\"text\":\"SMACSS\"},\"typeID\":\"Label\",\"w\":\"69\",\"x\":\"207\",\"y\":\"1270\",\"zOrder\":\"155\"},{\"ID\":\"156\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"146\",\"x\":\"168\",\"y\":\"1216\",\"zOrder\":\"156\"},{\"ID\":\"157\",\"measuredH\":\"25\",\"measuredW\":\"62\",\"properties\":{\"size\":\"17\",\"text\":\"OOCSS\"},\"typeID\":\"Label\",\"w\":\"65\",\"x\":\"209\",\"y\":\"1224\",\"zOrder\":\"157\"},{\"ID\":\"158\",\"h\":\"159\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"3355443\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"502\",\"x\":\"807\",\"y\":\"1261\",\"zOrder\":\"158\"},{\"ID\":\"159\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"25\",\"measuredW\":\"419\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"With modern front-end frameworks, there is more push\"},\"typeID\":\"Label\",\"w\":\"441\",\"x\":\"1\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"405\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"towards CSS in JS methodologies with which you are\"},\"typeID\":\"Label\",\"w\":\"456\",\"x\":\"1\",\"y\":\"31\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"25\",\"measuredW\":\"460\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"not going to need these. However, you should still learn {color:yellow}BEM{color}\"},\"typeID\":\"Label\",\"w\":\"464\",\"x\":\"0\",\"y\":\"61\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"25\",\"measuredW\":\"379\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"at-least, which would prove helpful in the long run\"},\"typeID\":\"Label\",\"w\":\"447\",\"x\":\"0\",\"y\":\"92\",\"zOrder\":\"3\"}]}},\"h\":\"117\",\"measuredH\":\"117\",\"measuredW\":\"464\",\"typeID\":\"__group__\",\"w\":\"464\",\"x\":\"826\",\"y\":\"1282\",\"zOrder\":\"159\"},{\"ID\":\"160\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"250\",\"x\":\"285\",\"y\":\"1402\",\"zOrder\":\"160\"},{\"ID\":\"161\",\"measuredH\":\"25\",\"measuredW\":\"87\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Build Tools\"},\"typeID\":\"Label\",\"x\":\"367\",\"y\":\"1415\",\"zOrder\":\"161\"},{\"ID\":\"162\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"755\",\"y\":\"1471\",\"zOrder\":\"162\"},{\"ID\":\"163\",\"measuredH\":\"25\",\"measuredW\":\"92\",\"properties\":{\"size\":\"17\",\"text\":\"npm scripts\"},\"typeID\":\"Label\",\"w\":\"97\",\"x\":\"795\",\"y\":\"1479\",\"zOrder\":\"163\"},{\"ID\":\"164\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"754\",\"y\":\"1517\",\"zOrder\":\"164\"},{\"ID\":\"165\",\"measuredH\":\"25\",\"measuredW\":\"34\",\"properties\":{\"size\":\"17\",\"text\":\"gulp\"},\"typeID\":\"Label\",\"w\":\"43\",\"x\":\"821\",\"y\":\"1525\",\"zOrder\":\"165\"},{\"ID\":\"166\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"710\",\"y\":\"1597\",\"zOrder\":\"166\"},{\"ID\":\"167\",\"measuredH\":\"25\",\"measuredW\":\"72\",\"properties\":{\"size\":\"17\",\"text\":\"Webpack\"},\"typeID\":\"Label\",\"w\":\"72\",\"x\":\"762\",\"y\":\"1605\",\"zOrder\":\"167\"},{\"ID\":\"168\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"709\",\"y\":\"1687\",\"zOrder\":\"168\"},{\"ID\":\"169\",\"measuredH\":\"25\",\"measuredW\":\"47\",\"properties\":{\"size\":\"17\",\"text\":\"Rollup\"},\"typeID\":\"Label\",\"w\":\"46\",\"x\":\"774\",\"y\":\"1695\",\"zOrder\":\"169\"},{\"ID\":\"170\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"709\",\"y\":\"1642\",\"zOrder\":\"170\"},{\"ID\":\"171\",\"measuredH\":\"25\",\"measuredW\":\"47\",\"properties\":{\"size\":\"17\",\"text\":\"Parcel\"},\"typeID\":\"Label\",\"w\":\"46\",\"x\":\"774\",\"y\":\"1650\",\"zOrder\":\"171\"},{\"ID\":\"172\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"177\",\"x\":\"515\",\"y\":\"1529\",\"zOrder\":\"172\"},{\"ID\":\"173\",\"measuredH\":\"25\",\"measuredW\":\"134\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Module Bundlers\"},\"typeID\":\"Label\",\"x\":\"538\",\"y\":\"1542\",\"zOrder\":\"173\"},{\"ID\":\"174\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"138\",\"x\":\"579\",\"y\":\"1402\",\"zOrder\":\"174\"},{\"ID\":\"175\",\"measuredH\":\"25\",\"measuredW\":\"109\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Task Runners\"},\"typeID\":\"Label\",\"x\":\"596\",\"y\":\"1416\",\"zOrder\":\"175\"},{\"ID\":\"176\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"225\",\"x\":\"169\",\"y\":\"1501\",\"zOrder\":\"176\"},{\"ID\":\"177\",\"measuredH\":\"25\",\"measuredW\":\"187\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Linters and Formatters\"},\"typeID\":\"Label\",\"x\":\"188\",\"y\":\"1514\",\"zOrder\":\"177\"},{\"ID\":\"178\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"59\",\"properties\":{\"size\":\"17\",\"text\":\"Prettier\"},\"typeID\":\"Label\",\"w\":\"58\",\"x\":\"59\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"40\",\"measuredH\":\"40\",\"measuredW\":\"176\",\"typeID\":\"__group__\",\"w\":\"176\",\"x\":\"172\",\"y\":\"1595\",\"zOrder\":\"178\"},{\"ID\":\"179\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"53\",\"properties\":{\"size\":\"17\",\"text\":\"JSHint\"},\"typeID\":\"Label\",\"w\":\"55\",\"x\":\"65\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"40\",\"measuredH\":\"40\",\"measuredW\":\"176\",\"typeID\":\"__group__\",\"w\":\"176\",\"x\":\"172\",\"y\":\"1686\",\"zOrder\":\"179\"},{\"ID\":\"180\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"52\",\"properties\":{\"size\":\"17\",\"text\":\"ESLint\"},\"typeID\":\"Label\",\"w\":\"52\",\"x\":\"62\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"40\",\"measuredH\":\"40\",\"measuredW\":\"176\",\"typeID\":\"__group__\",\"w\":\"176\",\"x\":\"172\",\"y\":\"1640\",\"zOrder\":\"180\"},{\"ID\":\"181\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"710\",\"y\":\"1597\",\"zOrder\":\"181\"},{\"ID\":\"182\",\"measuredH\":\"25\",\"measuredW\":\"72\",\"properties\":{\"size\":\"17\",\"text\":\"Webpack\"},\"typeID\":\"Label\",\"w\":\"72\",\"x\":\"762\",\"y\":\"1605\",\"zOrder\":\"182\"},{\"ID\":\"183\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"709\",\"y\":\"1687\",\"zOrder\":\"183\"},{\"ID\":\"184\",\"measuredH\":\"25\",\"measuredW\":\"47\",\"properties\":{\"size\":\"17\",\"text\":\"Rollup\"},\"typeID\":\"Label\",\"w\":\"46\",\"x\":\"774\",\"y\":\"1695\",\"zOrder\":\"184\"},{\"ID\":\"185\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"709\",\"y\":\"1642\",\"zOrder\":\"185\"},{\"ID\":\"186\",\"measuredH\":\"25\",\"measuredW\":\"47\",\"properties\":{\"size\":\"17\",\"text\":\"Parcel\"},\"typeID\":\"Label\",\"w\":\"46\",\"x\":\"774\",\"y\":\"1650\",\"zOrder\":\"186\"},{\"ID\":\"187\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"51\",\"properties\":{\"size\":\"17\",\"text\":\"JSLint\"},\"typeID\":\"Label\",\"w\":\"55\",\"x\":\"61\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"40\",\"measuredH\":\"40\",\"measuredW\":\"176\",\"typeID\":\"__group__\",\"w\":\"176\",\"x\":\"172\",\"y\":\"1731\",\"zOrder\":\"187\"},{\"ID\":\"188\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"40\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"176\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"94\",\"properties\":{\"size\":\"17\",\"text\":\"StandardJS\"},\"typeID\":\"Label\",\"x\":\"41\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"40\",\"measuredH\":\"40\",\"measuredW\":\"176\",\"typeID\":\"__group__\",\"w\":\"176\",\"x\":\"172\",\"y\":\"1776\",\"zOrder\":\"188\"},{\"ID\":\"189\",\"h\":\"92\",\"measuredH\":\"91\",\"measuredW\":\"61\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":108.72442227944924,\"x\":61,\"y\":90},\"p1\":{\"length\":0.4875455138272071,\"x\":0.3707257501744591,\"y\":0.3166434054431262},\"p2\":{\"length\":3,\"x\":3,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"62\",\"x\":\"958\",\"y\":\"1850\",\"zOrder\":\"189\"},{\"ID\":\"190\",\"h\":\"22\",\"measuredH\":\"21\",\"measuredW\":\"170\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":171.29214809792072,\"x\":170,\"y\":21},\"p1\":{\"length\":0.4738906925817147,\"x\":0.473885155772755,\"y\":0.0022907758094073884},\"p2\":{\"length\":0,\"x\":0,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"171\",\"x\":\"780\",\"y\":\"1832\",\"zOrder\":\"190\"},{\"ID\":\"191\",\"h\":\"3\",\"measuredH\":\"2\",\"measuredW\":\"145\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":145,\"x\":145,\"y\":0},\"p1\":{\"length\":0.4738906925817146,\"x\":0.4738851557727549,\"y\":0.002290775809407207},\"p2\":{\"length\":2,\"x\":0,\"y\":2},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"146\",\"x\":\"785\",\"y\":\"1816\",\"zOrder\":\"191\"},{\"ID\":\"192\",\"h\":\"115\",\"measuredH\":\"114\",\"measuredW\":\"96\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":113,\"x\":0,\"y\":113},\"p1\":{\"length\":0.504473074488309,\"x\":0.4250070996795001,\"y\":-0.2717757312669885},\"p2\":{\"length\":96,\"x\":96,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"97\",\"x\":\"1008\",\"y\":\"1663\",\"zOrder\":\"192\"},{\"ID\":\"193\",\"h\":\"208\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"205\",\"x\":\"999\",\"y\":\"1459\",\"zOrder\":\"193\"},{\"ID\":\"194\",\"h\":\"32\",\"measuredH\":\"31\",\"measuredW\":\"146\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"length\":31,\"x\":0,\"y\":31},\"p1\":{\"length\":0.47389069258171473,\"x\":0.47388515577275503,\"y\":0.0022907758094073837},\"p2\":{\"length\":146,\"x\":146,\"y\":0},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"147\",\"x\":\"778\",\"y\":\"1776\",\"zOrder\":\"194\"},{\"ID\":\"195\",\"h\":\"51\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"224\",\"x\":\"561\",\"y\":\"1794\",\"zOrder\":\"195\"},{\"ID\":\"196\",\"measuredH\":\"26\",\"measuredW\":\"149\",\"properties\":{\"bold\":\"true\",\"size\":\"18\",\"text\":\"Pick a Framework\"},\"typeID\":\"Label\",\"w\":\"148\",\"x\":\"599\",\"y\":\"1807\",\"zOrder\":\"196\"},{\"ID\":\"197\",\"measuredH\":\"32\",\"measuredW\":\"82\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"React.js\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"886\",\"y\":\"1761\",\"zOrder\":\"197\"},{\"ID\":\"198\",\"measuredH\":\"32\",\"measuredW\":\"67\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Redux\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"1013\",\"y\":\"1476\",\"zOrder\":\"198\"},{\"ID\":\"199\",\"measuredH\":\"32\",\"measuredW\":\"60\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"MobX\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"1013\",\"y\":\"1515\",\"zOrder\":\"199\"},{\"ID\":\"200\",\"measuredH\":\"25\",\"measuredW\":\"173\",\"properties\":{\"size\":\"17\",\"text\":\"These are not specific\"},\"typeID\":\"Label\",\"x\":\"1013\",\"y\":\"1557\",\"zOrder\":\"200\"},{\"ID\":\"201\",\"measuredH\":\"25\",\"measuredW\":\"166\",\"properties\":{\"size\":\"17\",\"text\":\"to React though, you \"},\"typeID\":\"Label\",\"x\":\"1013\",\"y\":\"1580\",\"zOrder\":\"201\"},{\"ID\":\"202\",\"measuredH\":\"25\",\"measuredW\":\"161\",\"properties\":{\"size\":\"17\",\"text\":\"can use them in any \"},\"typeID\":\"Label\",\"x\":\"1013\",\"y\":\"1604\",\"zOrder\":\"202\"},{\"ID\":\"203\",\"measuredH\":\"25\",\"measuredW\":\"136\",\"properties\":{\"size\":\"17\",\"text\":\"framework or app\"},\"typeID\":\"Label\",\"x\":\"1013\",\"y\":\"1628\",\"zOrder\":\"203\"},{\"ID\":\"204\",\"measuredH\":\"32\",\"measuredW\":\"63\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Vue.js\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"886\",\"y\":\"1836\",\"zOrder\":\"204\"},{\"ID\":\"205\",\"measuredH\":\"32\",\"measuredW\":\"80\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Angular\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"886\",\"y\":\"1799\",\"zOrder\":\"205\"},{\"ID\":\"206\",\"measuredH\":\"32\",\"measuredW\":\"60\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"RxJS\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"1118\",\"y\":\"1780\",\"zOrder\":\"206\"},{\"ID\":\"207\",\"measuredH\":\"32\",\"measuredW\":\"52\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"ngrx\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"1118\",\"y\":\"1816\",\"zOrder\":\"207\"},{\"ID\":\"208\",\"measuredH\":\"32\",\"measuredW\":\"55\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Vuex\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"1003\",\"y\":\"1926\",\"zOrder\":\"208\"},{\"ID\":\"209\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"191\",\"x\":\"613\",\"y\":\"2165\",\"zOrder\":\"209\"},{\"ID\":\"210\",\"measuredH\":\"25\",\"measuredW\":\"146\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Testing your Apps\"},\"typeID\":\"Label\",\"x\":\"636\",\"y\":\"2178\",\"zOrder\":\"210\"},{\"ID\":\"211\",\"measuredH\":\"32\",\"measuredW\":\"67\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Mocha\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"153\",\"y\":\"2089\",\"zOrder\":\"211\"},{\"ID\":\"212\",\"measuredH\":\"32\",\"measuredW\":\"51\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Chai\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"153\",\"y\":\"2126\",\"zOrder\":\"212\"},{\"ID\":\"213\",\"measuredH\":\"32\",\"measuredW\":\"43\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Ava\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"153\",\"y\":\"2164\",\"zOrder\":\"213\"},{\"ID\":\"214\",\"measuredH\":\"32\",\"measuredW\":\"69\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Karma\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"153\",\"y\":\"2201\",\"zOrder\":\"214\"},{\"ID\":\"215\",\"measuredH\":\"32\",\"measuredW\":\"82\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Jasmine\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"153\",\"y\":\"2239\",\"zOrder\":\"215\"},{\"ID\":\"216\",\"measuredH\":\"32\",\"measuredW\":\"97\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Protractor\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"154\",\"y\":\"2278\",\"zOrder\":\"216\"},{\"ID\":\"217\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"138\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"3355443\"},\"typeID\":\"TextArea\",\"w\":\"439\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"25\",\"measuredW\":\"344\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"Before you start this, you should have a good\"},\"typeID\":\"Label\",\"w\":\"403\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"395\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"understanding of what single page applications are\"},\"typeID\":\"Label\",\"w\":\"395\",\"x\":\"0\",\"y\":\"29\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"25\",\"measuredW\":\"409\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"how they work and what are some of the positive and\"},\"typeID\":\"Label\",\"w\":\"411\",\"x\":\"0\",\"y\":\"57\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"25\",\"measuredW\":\"347\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"negative aspects of single page applications.\"},\"typeID\":\"Label\",\"w\":\"411\",\"x\":\"0\",\"y\":\"86\",\"zOrder\":\"3\"}]}},\"h\":\"111\",\"measuredH\":\"111\",\"measuredW\":\"411\",\"typeID\":\"__group__\",\"w\":\"411\",\"x\":\"16\",\"y\":\"14\",\"zOrder\":\"1\"}]}},\"h\":\"138\",\"measuredH\":\"138\",\"measuredW\":\"439\",\"typeID\":\"__group__\",\"w\":\"439\",\"x\":\"153\",\"y\":\"1890\",\"zOrder\":\"217\"},{\"ID\":\"218\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"226\",\"x\":\"771\",\"y\":\"2314\",\"zOrder\":\"218\"},{\"ID\":\"219\",\"measuredH\":\"25\",\"measuredW\":\"180\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Progressive Web Apps\"},\"typeID\":\"Label\",\"x\":\"794\",\"y\":\"2327\",\"zOrder\":\"219\"},{\"ID\":\"220\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"226\",\"x\":\"508\",\"y\":\"2509\",\"zOrder\":\"220\"},{\"ID\":\"221\",\"measuredH\":\"25\",\"measuredW\":\"120\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Type Checkers\"},\"typeID\":\"Label\",\"x\":\"561\",\"y\":\"2522\",\"zOrder\":\"221\"},{\"ID\":\"222\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"248\",\"x\":\"478\",\"y\":\"2723\",\"zOrder\":\"222\"},{\"ID\":\"223\",\"measuredH\":\"25\",\"measuredW\":\"184\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Server Side Rendering\"},\"typeID\":\"Label\",\"x\":\"510\",\"y\":\"2736\",\"zOrder\":\"223\"},{\"ID\":\"224\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"116\",\"x\":\"292\",\"y\":\"2641\",\"zOrder\":\"224\"},{\"ID\":\"225\",\"measuredH\":\"25\",\"measuredW\":\"64\",\"properties\":{\"size\":\"17\",\"text\":\"React.js\"},\"typeID\":\"Label\",\"w\":\"69\",\"x\":\"315\",\"y\":\"2649\",\"zOrder\":\"225\"},{\"ID\":\"226\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"115\",\"x\":\"293\",\"y\":\"2724\",\"zOrder\":\"226\"},{\"ID\":\"227\",\"measuredH\":\"25\",\"measuredW\":\"62\",\"properties\":{\"size\":\"17\",\"text\":\"Angular\"},\"typeID\":\"Label\",\"w\":\"62\",\"x\":\"324\",\"y\":\"2732\",\"zOrder\":\"227\"},{\"ID\":\"228\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"97\",\"x\":\"149\",\"y\":\"2724\",\"zOrder\":\"228\"},{\"ID\":\"229\",\"measuredH\":\"25\",\"measuredW\":\"72\",\"properties\":{\"size\":\"17\",\"text\":\"Universal\"},\"typeID\":\"Label\",\"w\":\"73\",\"x\":\"161\",\"y\":\"2732\",\"zOrder\":\"229\"},{\"ID\":\"230\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"94\",\"x\":\"149\",\"y\":\"2614\",\"zOrder\":\"230\"},{\"ID\":\"231\",\"measuredH\":\"25\",\"measuredW\":\"54\",\"properties\":{\"size\":\"17\",\"text\":\"Next.js\"},\"typeID\":\"Label\",\"w\":\"54\",\"x\":\"169\",\"y\":\"2622\",\"zOrder\":\"231\"},{\"ID\":\"232\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"94\",\"x\":\"149\",\"y\":\"2661\",\"zOrder\":\"232\"},{\"ID\":\"233\",\"measuredH\":\"25\",\"measuredW\":\"55\",\"properties\":{\"size\":\"17\",\"text\":\"After.js\"},\"typeID\":\"Label\",\"w\":\"53\",\"x\":\"170\",\"y\":\"2669\",\"zOrder\":\"233\"},{\"ID\":\"234\",\"h\":\"2\",\"measuredH\":\"1\",\"measuredW\":\"64\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"length\":0,\"x\":0,\"y\":0},\"p1\":{\"length\":0.48115369243064626,\"x\":0.4807692307692308,\"y\":-0.01923076923076923},\"p2\":{\"length\":64.00781202322104,\"x\":64,\"y\":1},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"65\",\"x\":\"240\",\"y\":\"2797\",\"zOrder\":\"234\"},{\"ID\":\"235\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"115\",\"x\":\"293\",\"y\":\"2777\",\"zOrder\":\"235\"},{\"ID\":\"236\",\"measuredH\":\"25\",\"measuredW\":\"46\",\"properties\":{\"size\":\"17\",\"text\":\"Vue.js\"},\"typeID\":\"Label\",\"w\":\"48\",\"x\":\"327\",\"y\":\"2785\",\"zOrder\":\"236\"},{\"ID\":\"237\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"97\",\"x\":\"149\",\"y\":\"2777\",\"zOrder\":\"237\"},{\"ID\":\"238\",\"measuredH\":\"25\",\"measuredW\":\"54\",\"properties\":{\"size\":\"17\",\"text\":\"Nuxt.js\"},\"typeID\":\"Label\",\"w\":\"55\",\"x\":\"170\",\"y\":\"2785\",\"zOrder\":\"238\"},{\"ID\":\"239\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"248\",\"x\":\"821\",\"y\":\"2743\",\"zOrder\":\"239\"},{\"ID\":\"240\",\"measuredH\":\"25\",\"measuredW\":\"183\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Static Site Generators\"},\"typeID\":\"Label\",\"x\":\"859\",\"y\":\"2756\",\"zOrder\":\"240\"},{\"ID\":\"241\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"147\",\"x\":\"1126\",\"y\":\"2744\",\"zOrder\":\"241\"},{\"ID\":\"242\",\"measuredH\":\"25\",\"measuredW\":\"77\",\"properties\":{\"size\":\"17\",\"text\":\"GatsbyJS\"},\"typeID\":\"Label\",\"w\":\"78\",\"x\":\"1161\",\"y\":\"2752\",\"zOrder\":\"242\"},{\"ID\":\"243\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"210\",\"x\":\"791\",\"y\":\"2857\",\"zOrder\":\"243\"},{\"ID\":\"244\",\"measuredH\":\"25\",\"measuredW\":\"171\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Desktop Applications\"},\"typeID\":\"Label\",\"x\":\"813\",\"y\":\"2871\",\"zOrder\":\"244\"},{\"ID\":\"245\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"188\",\"x\":\"1074\",\"y\":\"2820\",\"zOrder\":\"245\"},{\"ID\":\"246\",\"measuredH\":\"25\",\"measuredW\":\"64\",\"properties\":{\"size\":\"17\",\"text\":\"Electron\"},\"typeID\":\"Label\",\"w\":\"64\",\"x\":\"1136\",\"y\":\"2828\",\"zOrder\":\"246\"},{\"ID\":\"247\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"210\",\"x\":\"469\",\"y\":\"2940\",\"zOrder\":\"247\"},{\"ID\":\"248\",\"measuredH\":\"25\",\"measuredW\":\"157\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Mobile Applications\"},\"typeID\":\"Label\",\"w\":\"157\",\"x\":\"496\",\"y\":\"2953\",\"zOrder\":\"248\"},{\"ID\":\"249\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"147\",\"x\":\"169\",\"y\":\"2922\",\"zOrder\":\"249\"},{\"ID\":\"250\",\"measuredH\":\"25\",\"measuredW\":\"100\",\"properties\":{\"size\":\"17\",\"text\":\"React Native\"},\"typeID\":\"Label\",\"w\":\"101\",\"x\":\"192\",\"y\":\"2930\",\"zOrder\":\"250\"},{\"ID\":\"251\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"210\",\"x\":\"825\",\"y\":\"3028\",\"zOrder\":\"251\"},{\"ID\":\"252\",\"measuredH\":\"25\",\"measuredW\":\"118\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Web Assembly\"},\"typeID\":\"Label\",\"x\":\"871\",\"y\":\"3041\",\"zOrder\":\"252\"},{\"ID\":\"253\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"207\",\"x\":\"839\",\"y\":\"3204\",\"zOrder\":\"253\"},{\"ID\":\"254\",\"measuredH\":\"25\",\"measuredW\":\"117\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Keep Learning\"},\"typeID\":\"Label\",\"x\":\"884\",\"y\":\"3217\",\"zOrder\":\"254\"},{\"ID\":\"255\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"188\",\"x\":\"1075\",\"y\":\"2869\",\"zOrder\":\"255\"},{\"ID\":\"256\",\"measuredH\":\"25\",\"measuredW\":\"104\",\"properties\":{\"size\":\"17\",\"text\":\"Proton Native\"},\"typeID\":\"Label\",\"w\":\"107\",\"x\":\"1116\",\"y\":\"2877\",\"zOrder\":\"256\"},{\"ID\":\"257\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"188\",\"x\":\"1075\",\"y\":\"2917\",\"zOrder\":\"257\"},{\"ID\":\"258\",\"measuredH\":\"25\",\"measuredW\":\"42\",\"properties\":{\"size\":\"17\",\"text\":\"Carlo\"},\"typeID\":\"Label\",\"w\":\"42\",\"x\":\"1148\",\"y\":\"2925\",\"zOrder\":\"258\"},{\"ID\":\"259\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"147\",\"x\":\"169\",\"y\":\"2968\",\"zOrder\":\"259\"},{\"ID\":\"260\",\"measuredH\":\"25\",\"measuredW\":\"95\",\"properties\":{\"size\":\"17\",\"text\":\"NativeScript\"},\"typeID\":\"Label\",\"w\":\"101\",\"x\":\"192\",\"y\":\"2976\",\"zOrder\":\"260\"},{\"ID\":\"261\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"185\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"3355443\",\"text\":\"\"},\"typeID\":\"TextArea\",\"w\":\"582\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"507\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"Web Assembly or WASM is the binary instructions generated from\"},\"typeID\":\"Label\",\"w\":\"524\",\"x\":\"20\",\"y\":\"21\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"25\",\"measuredW\":\"501\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"high level languages such as Go, C, C++ or Rust. It is faster than\"},\"typeID\":\"Label\",\"w\":\"509\",\"x\":\"20\",\"y\":\"52\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"25\",\"measuredW\":\"530\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"JavaScript and WASM 1.0 has already shipped in the major browsers.\"},\"typeID\":\"Label\",\"w\":\"528\",\"x\":\"19\",\"y\":\"83\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"measuredH\":\"25\",\"measuredW\":\"495\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"It is being touted by some to eventually replace JavaScript but I\"},\"typeID\":\"Label\",\"w\":\"525\",\"x\":\"19\",\"y\":\"114\",\"zOrder\":\"4\"},{\"ID\":\"5\",\"measuredH\":\"25\",\"measuredW\":\"541\",\"properties\":{\"color\":\"15658734\",\"size\":\"17\",\"text\":\"seriously doubt that it would happen or see it happening anytime soon.\"},\"typeID\":\"Label\",\"w\":\"538\",\"x\":\"19\",\"y\":\"144\",\"zOrder\":\"5\"}]}},\"h\":\"185\",\"measuredH\":\"185\",\"measuredW\":\"582\",\"typeID\":\"__group__\",\"w\":\"582\",\"x\":\"170\",\"y\":\"3079\",\"zOrder\":\"261\"},{\"ID\":\"262\",\"h\":\"50\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"201\",\"x\":\"634\",\"y\":\"2016\",\"zOrder\":\"262\"},{\"ID\":\"263\",\"measuredH\":\"25\",\"measuredW\":\"81\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"CSS in JS\"},\"typeID\":\"Label\",\"x\":\"694\",\"y\":\"2029\",\"zOrder\":\"263\"},{\"ID\":\"264\",\"measuredH\":\"32\",\"measuredW\":\"176\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Styled Components\"},\"typeID\":\"TextInput\",\"w\":\"217\",\"x\":\"971\",\"y\":\"2003\",\"zOrder\":\"264\"},{\"ID\":\"265\",\"measuredH\":\"32\",\"measuredW\":\"80\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Emotion\"},\"typeID\":\"TextInput\",\"w\":\"218\",\"x\":\"971\",\"y\":\"2081\",\"zOrder\":\"265\"},{\"ID\":\"266\",\"measuredH\":\"32\",\"measuredW\":\"125\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"CSS Modules\"},\"typeID\":\"TextInput\",\"w\":\"217\",\"x\":\"971\",\"y\":\"2042\",\"zOrder\":\"266\"},{\"ID\":\"267\",\"measuredH\":\"32\",\"measuredW\":\"76\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Radium\"},\"typeID\":\"TextInput\",\"w\":\"218\",\"x\":\"971\",\"y\":\"2120\",\"zOrder\":\"267\"},{\"ID\":\"268\",\"measuredH\":\"32\",\"measuredW\":\"101\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Glamorous\"},\"typeID\":\"TextInput\",\"w\":\"218\",\"x\":\"972\",\"y\":\"2159\",\"zOrder\":\"268\"},{\"ID\":\"269\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16776960\"},\"typeID\":\"TextArea\",\"w\":\"199\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"85\",\"properties\":{\"size\":\"17\",\"text\":\"TypeScript\"},\"typeID\":\"Label\",\"w\":\"91\",\"x\":\"54\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"41\",\"measuredH\":\"41\",\"measuredW\":\"199\",\"typeID\":\"__group__\",\"w\":\"199\",\"x\":\"243\",\"y\":\"2487\",\"zOrder\":\"269\"},{\"ID\":\"270\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"41\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16770457\"},\"typeID\":\"TextArea\",\"w\":\"199\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"34\",\"properties\":{\"size\":\"17\",\"text\":\"Flow\"},\"typeID\":\"Label\",\"w\":\"38\",\"x\":\"81\",\"y\":\"8\",\"zOrder\":\"1\"}]}},\"h\":\"41\",\"measuredH\":\"41\",\"measuredW\":\"199\",\"typeID\":\"__group__\",\"w\":\"199\",\"x\":\"243\",\"y\":\"2535\",\"zOrder\":\"270\"},{\"ID\":\"271\",\"measuredH\":\"25\",\"measuredW\":\"244\",\"properties\":{\"size\":\"17\",\"text\":\"how browsers work, DNS, HTTP\"},\"typeID\":\"Label\",\"w\":\"245\",\"x\":\"187\",\"y\":\"867\",\"zOrder\":\"271\"},{\"ID\":\"272\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"389\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"typeID\":\"Canvas\",\"w\":\"228\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"32\",\"measuredW\":\"150\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Service Workers\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"74\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"32\",\"measuredW\":\"78\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Storage\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"32\",\"measuredW\":\"83\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Location\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"111\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"32\",\"measuredW\":\"115\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Notifications\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"149\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"measuredH\":\"32\",\"measuredW\":\"166\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Device Orientation\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"186\",\"zOrder\":\"4\"},{\"ID\":\"5\",\"measuredH\":\"32\",\"measuredW\":\"94\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Payments\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"223\",\"zOrder\":\"5\"},{\"ID\":\"6\",\"measuredH\":\"32\",\"measuredW\":\"109\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Credentials\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"260\",\"zOrder\":\"6\"},{\"ID\":\"7\",\"measuredH\":\"32\",\"measuredW\":\"121\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Web Sockets\"},\"typeID\":\"TextInput\",\"w\":\"176\",\"x\":\"0\",\"y\":\"37\",\"zOrder\":\"7\"},{\"ID\":\"8\",\"measuredH\":\"25\",\"measuredW\":\"155\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"Learn different Web\"},\"typeID\":\"Label\",\"x\":\"11\",\"y\":\"305\",\"zOrder\":\"8\"},{\"ID\":\"9\",\"measuredH\":\"25\",\"measuredW\":\"147\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"APIs used in PWAs\"},\"typeID\":\"Label\",\"x\":\"15\",\"y\":\"331\",\"zOrder\":\"9\"}]}},\"h\":\"356\",\"measuredH\":\"356\",\"measuredW\":\"176\",\"typeID\":\"__group__\",\"w\":\"176\",\"x\":\"26\",\"y\":\"15\",\"zOrder\":\"1\"}]}},\"h\":\"389\",\"measuredH\":\"389\",\"measuredW\":\"228\",\"typeID\":\"__group__\",\"w\":\"228\",\"x\":\"1088\",\"y\":\"2228\",\"zOrder\":\"272\"},{\"ID\":\"273\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"281\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"typeID\":\"Canvas\",\"w\":\"262\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"32\",\"measuredW\":\"124\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"PRPL Pattern\"},\"typeID\":\"TextInput\",\"w\":\"225\",\"x\":\"20\",\"y\":\"19\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"32\",\"measuredW\":\"109\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"RAIL Model\"},\"typeID\":\"TextInput\",\"w\":\"225\",\"x\":\"20\",\"y\":\"57\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"32\",\"measuredW\":\"186\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Performance Metrics\"},\"typeID\":\"TextInput\",\"w\":\"225\",\"x\":\"20\",\"y\":\"95\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"measuredH\":\"32\",\"measuredW\":\"166\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Using Light House\"},\"typeID\":\"TextInput\",\"w\":\"225\",\"x\":\"20\",\"y\":\"132\",\"zOrder\":\"4\"},{\"ID\":\"5\",\"measuredH\":\"32\",\"measuredW\":\"142\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Using DevTools\"},\"typeID\":\"TextInput\",\"w\":\"225\",\"x\":\"20\",\"y\":\"170\",\"zOrder\":\"5\"},{\"ID\":\"6\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"25\",\"measuredW\":\"177\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"Calculating, Measuring\"},\"typeID\":\"Label\",\"w\":\"185\",\"x\":\"20\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"214\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"and improving performance\"},\"typeID\":\"Label\",\"w\":\"224\",\"x\":\"0\",\"y\":\"27\",\"zOrder\":\"1\"}]}},\"h\":\"52\",\"measuredH\":\"52\",\"measuredW\":\"224\",\"typeID\":\"__group__\",\"w\":\"224\",\"x\":\"20\",\"y\":\"215\",\"zOrder\":\"6\"}]}},\"h\":\"281\",\"measuredH\":\"281\",\"measuredW\":\"262\",\"typeID\":\"__group__\",\"w\":\"262\",\"x\":\"789\",\"y\":\"2416\",\"zOrder\":\"273\"},{\"ID\":\"274\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"h\":\"231\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"194\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"32\",\"measuredW\":\"84\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Cypress\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"23\",\"y\":\"92\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"32\",\"measuredW\":\"50\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Jest\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"23\",\"y\":\"17\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"32\",\"measuredW\":\"81\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Enzyme\"},\"typeID\":\"TextInput\",\"w\":\"147\",\"x\":\"23\",\"y\":\"54\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"measuredH\":\"25\",\"measuredW\":\"125\",\"properties\":{\"size\":\"17\",\"text\":\"You can fulfill all\"},\"typeID\":\"Label\",\"x\":\"29\",\"y\":\"140\",\"zOrder\":\"4\"},{\"ID\":\"5\",\"measuredH\":\"25\",\"measuredW\":\"147\",\"properties\":{\"size\":\"17\",\"text\":\"your testing needs\"},\"typeID\":\"Label\",\"x\":\"18\",\"y\":\"165\",\"zOrder\":\"5\"},{\"ID\":\"6\",\"measuredH\":\"25\",\"measuredW\":\"124\",\"properties\":{\"size\":\"17\",\"text\":\"with these three\"},\"typeID\":\"Label\",\"x\":\"30\",\"y\":\"190\",\"zOrder\":\"6\"}]}},\"h\":\"231\",\"measuredH\":\"231\",\"measuredW\":\"194\",\"typeID\":\"__group__\",\"w\":\"194\",\"x\":\"317\",\"y\":\"2082\",\"zOrder\":\"274\"},{\"ID\":\"275\",\"h\":\"126\",\"measuredH\":\"140\",\"measuredW\":\"200\",\"properties\":{\"color\":\"16777215\"},\"typeID\":\"TextArea\",\"w\":\"358\",\"x\":\"153\",\"y\":\"2327\",\"zOrder\":\"275\"},{\"ID\":\"276\",\"measuredH\":\"32\",\"measuredW\":\"98\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Functional\"},\"typeID\":\"TextInput\",\"w\":\"117\",\"x\":\"377\",\"y\":\"2344\",\"zOrder\":\"276\"},{\"ID\":\"277\",\"measuredH\":\"32\",\"measuredW\":\"47\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Unit\"},\"typeID\":\"TextInput\",\"w\":\"86\",\"x\":\"167\",\"y\":\"2344\",\"zOrder\":\"277\"},{\"ID\":\"278\",\"measuredH\":\"32\",\"measuredW\":\"101\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Integration\"},\"typeID\":\"TextInput\",\"w\":\"113\",\"x\":\"258\",\"y\":\"2344\",\"zOrder\":\"278\"},{\"ID\":\"279\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"25\",\"measuredW\":\"324\",\"properties\":{\"size\":\"17\",\"text\":\"Understand different types of testing and\"},\"typeID\":\"Label\",\"w\":\"326\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"25\",\"measuredW\":\"301\",\"properties\":{\"size\":\"17\",\"text\":\"learn how to write these with the above\"},\"typeID\":\"Label\",\"w\":\"302\",\"x\":\"12\",\"y\":\"26\",\"zOrder\":\"1\"}]}},\"h\":\"51\",\"measuredH\":\"51\",\"measuredW\":\"326\",\"typeID\":\"__group__\",\"w\":\"326\",\"x\":\"169\",\"y\":\"2390\",\"zOrder\":\"279\"},{\"ID\":\"280\",\"h\":\"141\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"properties\":{},\"typeID\":\"Canvas\",\"w\":\"350\",\"x\":\"945\",\"y\":\"190\",\"zOrder\":\"280\"},{\"ID\":\"281\",\"measuredH\":\"25\",\"measuredW\":\"314\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"Find the detailed version of this roadmap\"},\"typeID\":\"Label\",\"x\":\"959\",\"y\":\"207\",\"zOrder\":\"281\"},{\"ID\":\"282\",\"measuredH\":\"25\",\"measuredW\":\"322\",\"properties\":{\"color\":\"0\",\"size\":\"17\",\"text\":\"along with resources and other roadmaps\"},\"typeID\":\"Label\",\"x\":\"959\",\"y\":\"235\",\"zOrder\":\"282\"},{\"ID\":\"283\",\"h\":\"45\",\"measuredH\":\"70\",\"measuredW\":\"100\",\"properties\":{\"borderColor\":\"4273622\",\"color\":\"4273622\"},\"typeID\":\"Canvas\",\"w\":\"320\",\"x\":\"960\",\"y\":\"271\",\"zOrder\":\"283\"},{\"ID\":\"284\",\"children\":{\"controls\":{\"control\":[{\"ID\":\"0\",\"measuredH\":\"28\",\"measuredW\":\"103\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"roadmap.sh\"},\"typeID\":\"Label\",\"x\":\"65\",\"y\":\"0\",\"zOrder\":\"0\"},{\"ID\":\"1\",\"measuredH\":\"28\",\"measuredW\":\"36\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"http\"},\"typeID\":\"Label\",\"x\":\"0\",\"y\":\"0\",\"zOrder\":\"1\"},{\"ID\":\"2\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"bold\":\"true\",\"color\":\"16777215\",\"size\":\"20\",\"text\":\":\"},\"typeID\":\"Label\",\"x\":\"37\",\"y\":\"0\",\"zOrder\":\"2\"},{\"ID\":\"3\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"},\"typeID\":\"Label\",\"x\":\"44\",\"y\":\"1\",\"zOrder\":\"3\"},{\"ID\":\"4\",\"measuredH\":\"28\",\"measuredW\":\"10\",\"properties\":{\"color\":\"16777215\",\"size\":\"20\",\"text\":\"/\"},\"typeID\":\"Label\",\"x\":\"52\",\"y\":\"1\",\"zOrder\":\"4\"}]}},\"h\":\"29\",\"measuredH\":\"29\",\"measuredW\":\"168\",\"typeID\":\"__group__\",\"w\":\"168\",\"x\":\"1036\",\"y\":\"279\",\"zOrder\":\"284\"}]},\"measuredH\":\"3322\",\"measuredW\":\"1326\",\"mockupH\":\"3175\",\"mockupW\":\"1177\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./storage/project/intro-map.json":
/*!****************************************!*\
  !*** ./storage/project/intro-map.json ***!
  \****************************************/
/*! exports provided: mockup, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mockup\":{\"controls\":{\"control\":[{\"ID\":\"321\",\"measuredH\":\"40\",\"measuredW\":\"347\",\"properties\":{\"bold\":\"true\",\"size\":\"32\",\"text\":\"Web Developer in 2019\"},\"typeID\":\"Label\",\"x\":\"491\",\"y\":\"74\",\"zOrder\":\"0\"},{\"ID\":\"322\",\"h\":\"129\",\"measuredH\":\"127\",\"measuredW\":\"54\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4787915073918851,\"y\":0.19568921844056555},\"p2\":{\"x\":73,\"y\":128},\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"75\",\"x\":\"683\",\"y\":\"230\",\"zOrder\":\"1\"},{\"ID\":\"323\",\"h\":\"131\",\"measuredH\":\"129\",\"measuredW\":\"131\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":131,\"y\":0,\"length\":131},\"p1\":{\"x\":0.5684088130944218,\"y\":-0.21788259145523384,\"length\":0.6087375480965977},\"p2\":{\"x\":1,\"y\":129,\"length\":129.00387591076478},\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"133\",\"x\":\"518\",\"y\":\"229\",\"zOrder\":\"2\"},{\"ID\":\"324\",\"measuredH\":\"32\",\"measuredW\":\"93\",\"properties\":{\"align\":\"center\",\"color\":\"16767334\",\"size\":\"18\",\"text\":\"Front-end\"},\"typeID\":\"TextInput\",\"w\":\"132\",\"x\":\"441\",\"y\":\"367\",\"zOrder\":\"3\"},{\"ID\":\"325\",\"measuredH\":\"28\",\"measuredW\":\"167\",\"properties\":{\"bold\":\"true\",\"size\":\"20\",\"text\":\"Choose your path\"},\"typeID\":\"Label\",\"x\":\"589\",\"y\":\"189\",\"zOrder\":\"4\"},{\"ID\":\"326\",\"measuredH\":\"32\",\"measuredW\":\"179\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Git - Version Control\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"81\",\"zOrder\":\"5\"},{\"ID\":\"327\",\"measuredH\":\"32\",\"measuredW\":\"50\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"SSH\"},\"typeID\":\"TextInput\",\"w\":\"289\",\"x\":\"67\",\"y\":\"353\",\"zOrder\":\"6\"},{\"ID\":\"328\",\"measuredH\":\"32\",\"measuredW\":\"209\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"HTTP/HTTPS and APIs\"},\"typeID\":\"TextInput\",\"w\":\"289\",\"x\":\"67\",\"y\":\"391\",\"zOrder\":\"7\"},{\"ID\":\"329\",\"measuredH\":\"25\",\"measuredW\":\"175\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Required for any path\"},\"typeID\":\"Label\",\"x\":\"67\",\"y\":\"45\",\"zOrder\":\"8\"},{\"ID\":\"330\",\"measuredH\":\"32\",\"measuredW\":\"192\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Basic Terminal Usage\"},\"typeID\":\"TextInput\",\"w\":\"289\",\"x\":\"67\",\"y\":\"120\",\"zOrder\":\"9\"},{\"ID\":\"331\",\"measuredH\":\"25\",\"measuredW\":\"69\",\"properties\":{\"bold\":\"true\",\"size\":\"17\",\"text\":\"Legends\"},\"typeID\":\"Label\",\"x\":\"976\",\"y\":\"41\",\"zOrder\":\"10\"},{\"ID\":\"332\",\"measuredH\":\"32\",\"measuredW\":\"234\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Personal Recommendation!\"},\"typeID\":\"TextInput\",\"w\":\"240\",\"x\":\"976\",\"y\":\"84\",\"zOrder\":\"11\"},{\"ID\":\"334\",\"measuredH\":\"32\",\"measuredW\":\"153\",\"properties\":{\"align\":\"center\",\"color\":\"16770457\",\"size\":\"18\",\"text\":\"Available Options\"},\"typeID\":\"TextInput\",\"w\":\"240\",\"x\":\"976\",\"y\":\"124\",\"zOrder\":\"12\"},{\"ID\":\"335\",\"h\":\"47\",\"measuredH\":\"46\",\"measuredW\":\"0\",\"properties\":{\"color\":\"6710886\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.5,\"y\":0,\"length\":0.5},\"p2\":{\"x\":0,\"y\":46,\"length\":46},\"rightArrow\":\"false\",\"shape\":\"bezier\"},\"typeID\":\"Arrow\",\"w\":\"1\",\"x\":\"664\",\"y\":\"135\",\"zOrder\":\"13\"},{\"ID\":\"336\",\"measuredH\":\"32\",\"measuredW\":\"92\",\"properties\":{\"align\":\"center\",\"color\":\"16767334\",\"size\":\"18\",\"text\":\"Back-end\"},\"typeID\":\"TextInput\",\"w\":\"121\",\"x\":\"679\",\"y\":\"368\",\"zOrder\":\"14\"},{\"ID\":\"337\",\"h\":\"71\",\"measuredH\":\"69\",\"measuredW\":\"0\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"0\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.5621504039776257,\"y\":0.004661280298321849},\"p2\":{\"x\":0,\"y\":69},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"2\",\"x\":\"509\",\"y\":\"407\",\"zOrder\":\"15\"},{\"ID\":\"338\",\"h\":\"12\",\"measuredH\":\"11\",\"measuredW\":\"122\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"-1\",\"direction\":\"bottom\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":11,\"length\":11},\"p1\":{\"x\":0.45357350377687367,\"y\":0.059732713538640264,\"length\":0.4574898035968877},\"p2\":{\"x\":122,\"y\":4,\"length\":122.06555615733703},\"shape\":\"bezier\",\"stroke\":\"solid\"},\"typeID\":\"Arrow\",\"w\":\"123\",\"x\":\"811\",\"y\":\"373\",\"zOrder\":\"16\"},{\"ID\":\"339\",\"measuredH\":\"32\",\"measuredW\":\"81\",\"properties\":{\"align\":\"center\",\"color\":\"16767334\",\"size\":\"18\",\"text\":\"DevOps\"},\"typeID\":\"TextInput\",\"w\":\"112\",\"x\":\"946\",\"y\":\"361\",\"zOrder\":\"17\"},{\"ID\":\"340\",\"h\":\"71\",\"measuredH\":\"69\",\"measuredW\":\"0\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0},\"p1\":{\"x\":0.4608695652173913,\"y\":0.01304347826086956},\"p2\":{\"x\":0,\"y\":69},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"2\",\"x\":\"729\",\"y\":\"410\",\"zOrder\":\"18\"},{\"ID\":\"341\",\"h\":\"77\",\"measuredH\":\"76\",\"measuredW\":\"0\",\"properties\":{\"color\":\"2848996\",\"curvature\":\"1\",\"direction\":\"top\",\"leftArrow\":\"false\",\"p0\":{\"x\":0,\"y\":0,\"length\":0},\"p1\":{\"x\":0.4537465672812867,\"y\":0.01247548058061985,\"length\":0.4539180376844135},\"p2\":{\"x\":0,\"y\":76,\"length\":76},\"rightArrow\":\"false\",\"shape\":\"bezier\",\"stroke\":\"dotted\"},\"typeID\":\"Arrow\",\"w\":\"1\",\"x\":\"997\",\"y\":\"403\",\"zOrder\":\"19\"},{\"ID\":\"345\",\"measuredH\":\"32\",\"measuredW\":\"255\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Data Structures & Algorithms\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"159\",\"zOrder\":\"21\"},{\"ID\":\"346\",\"measuredH\":\"32\",\"measuredW\":\"188\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Character Encodings\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"469\",\"zOrder\":\"22\"},{\"ID\":\"349\",\"measuredH\":\"32\",\"measuredW\":\"146\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Design Patterns\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"430\",\"zOrder\":\"23\"},{\"ID\":\"350\",\"measuredH\":\"32\",\"measuredW\":\"177\",\"properties\":{\"align\":\"center\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"SOLID, KISS, YAGNI\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"197\",\"zOrder\":\"24\"},{\"ID\":\"354\",\"measuredH\":\"32\",\"measuredW\":\"70\",\"properties\":{\"align\":\"center\",\"borderStyle\":\"rectangle\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"GitHub\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"236\",\"zOrder\":\"20\"},{\"ID\":\"355\",\"measuredH\":\"32\",\"measuredW\":\"88\",\"properties\":{\"align\":\"center\",\"borderStyle\":\"rectangle\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Licenses\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"275\",\"zOrder\":\"25\"},{\"ID\":\"356\",\"measuredH\":\"32\",\"measuredW\":\"182\",\"properties\":{\"align\":\"center\",\"borderStyle\":\"rectangle\",\"color\":\"16776960\",\"size\":\"18\",\"text\":\"Semantic Versioning\"},\"typeID\":\"TextInput\",\"w\":\"288\",\"x\":\"68\",\"y\":\"314\",\"zOrder\":\"26\"}]},\"measuredH\":\"501\",\"measuredW\":\"1216\",\"mockupH\":\"460\",\"mockupW\":\"1149\",\"version\":\"1.0\"}}");

/***/ }),

/***/ "./storage/roadmaps.json":
/*!*******************************!*\
  !*** ./storage/roadmaps.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Frontend Developer\",\"description\":\"Step by step guide to becoming a modern frontend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern frontend developer in 2019\",\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"featured\":true,\"detailed\":false,\"versions\":[\"latest\",\"2018\",\"2017\"],\"contributorsCount\":1,\"contributorsUrl\":\"/frontend/contributors\",\"url\":\"/frontend\",\"path\":\"/roadmaps/1-frontend/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/frontend/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/1-frontend/0-About/0-Summary.md\"},{\"url\":\"/frontend/skill-summary\",\"title\":\"Skill Summary\",\"path\":\"/roadmaps/1-frontend/0-About/1-Skill-Summary.md\"},{\"url\":\"/frontend/job-titles\",\"title\":\"Job Titles\",\"path\":\"/roadmaps/1-frontend/0-About/2-Job-Titles.md\"}],\"Landscape\":[{\"url\":\"/frontend/junior-developer\",\"title\":\"Junior Developer\",\"path\":\"/roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md\"},{\"url\":\"/frontend/mid-level-developer\",\"title\":\"Mid Level Developer\",\"path\":\"/roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md\"},{\"url\":\"/frontend/senior-developer\",\"title\":\"Senior Developer\",\"path\":\"/roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md\"}],\"Learn\":[{\"url\":\"/frontend/job-ready\",\"title\":\"Job Ready\",\"path\":\"/roadmaps/1-frontend/2-Learn/1-Job-Ready.md\"},{\"url\":\"/frontend/write-better-css\",\"title\":\"Write Better CSS\",\"path\":\"/roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md\"},{\"url\":\"/frontend/build-tools\",\"title\":\"Build Tools\",\"path\":\"/roadmaps/1-frontend/2-Learn/3-Build-Tools.md\"},{\"url\":\"/frontend/modern-applications\",\"title\":\"Modern Applications\",\"path\":\"/roadmaps/1-frontend/2-Learn/4-Modern-Applications.md\"},{\"url\":\"/frontend/automated-testing\",\"title\":\"Automated Testing\",\"path\":\"/roadmaps/1-frontend/2-Learn/5-Automated-Testing.md\"},{\"url\":\"/frontend/static-type-checkers\",\"title\":\"Static Type Checkers\",\"path\":\"/roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md\"},{\"url\":\"/frontend/server-side-rendering\",\"title\":\"Server Side Rendering\",\"path\":\"/roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md\"},{\"url\":\"/frontend/go-beyond\",\"title\":\"Go Beyond\",\"path\":\"/roadmaps/1-frontend/2-Learn/8-Go-Beyond.md\"}]}},{\"title\":\"Backend Developer\",\"description\":\"Step by step guide to becoming a modern backend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern backend developer in 2019\",\"featured\":true,\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"contributorsCount\":1,\"contributorsUrl\":\"/backend/contributors\",\"url\":\"/backend\",\"path\":\"/roadmaps/2-backend/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/backend/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/2-backend/0-About/0-Summary.md\"}],\"Landscape\":[{\"url\":\"/backend/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/2-backend/1-Landscape/0-Summary.md\"},{\"url\":\"/backend/junior\",\"title\":\"Junior\",\"path\":\"/roadmaps/2-backend/1-Landscape/1-Junior.md\"},{\"url\":\"/backend/intermediate\",\"title\":\"Intermediate\",\"path\":\"/roadmaps/2-backend/1-Landscape/2-Intermediate.md\"},{\"url\":\"/backend/senior\",\"title\":\"Senior\",\"path\":\"/roadmaps/2-backend/1-Landscape/3-Senior.md\"}]}},{\"title\":\"DevOps Roadmap\",\"description\":\"Step by step guide for DevOps or any other Operations Role\",\"featuredDescription\":\"Step by step guide to become an SRE or for any operations role in 2019\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"],\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"contributorsCount\":1,\"contributorsUrl\":\"/devops/contributors\",\"url\":\"/devops\",\"path\":\"/roadmaps/3-devops/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/devops/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/3-devops/0-About/0-Summary.md\"}],\"Landscape\":[{\"url\":\"/devops/junior\",\"title\":\"Junior\",\"path\":\"/roadmaps/3-devops/1-Landscape/1-Junior.md\"},{\"url\":\"/devops/intermediate\",\"title\":\"Intermediate\",\"path\":\"/roadmaps/3-devops/1-Landscape/2-Intermediate.md\"},{\"url\":\"/devops/senior\",\"title\":\"Senior\",\"path\":\"/roadmaps/3-devops/1-Landscape/3-Senior.md\"}]}},{\"title\":\"Full Stack Developer\",\"description\":\"Step by step guide to becoming a modern fullstack developer in 2019\",\"featuredDescription\":\"Step by step guide to becoming a modern fullstack developer in 2019\",\"upcoming\":true,\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"contributorsCount\":1,\"contributorsUrl\":\"/fullstack/contributors\",\"url\":\"/fullstack\",\"path\":\"/roadmaps/4-fullstack/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/fullstack/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/4-fullstack/0-About/0-Summary.md\"}]}},{\"title\":\"QA Engineer\",\"description\":\"Steps to follow in order to become a modern QA Engineer in 2019\",\"featuredDescription\":\"Step by step guide to becoming a modern QA Engineer in 2019\",\"upcoming\":true,\"author\":{\"name\":\"Anas Fitiani\",\"url\":\"https://github.com/anas-qa\"},\"contributorsCount\":1,\"contributorsUrl\":\"/qa/contributors\",\"url\":\"/qa\",\"path\":\"/roadmaps/5-qa/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/qa/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/5-qa/0-About/0-Summary.md\"}]}}]");

/***/ }),

/***/ "./storage/roadmaps/1-frontend/0-About/0-Summary-detailed.md":
/*!*******************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/0-About/0-Summary-detailed.md ***!
  \*******************************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "What is a Frontend Developer?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A frontend developer is someone who works on the side of the websites that the user interacts with i.e. front or the client side of the website. Whenever you visit a website, everything that you see is mainly developed by the frontend developers. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "They work with designers or UX teams to convert their mockups or wireframes to the actual website that the users can interact with. Also they work with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "/backend"
  }), "backend developers"), " who work with database and servers to get the data from and to display on the website. Wikipedia describes frontend development as follows"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Front-end_web_development"
  }), "According to Wikipedia"), ":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Key Components of a Website"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If we talk about the frontend, all the websites are mainly built with three key technologies \u2013 ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "HTML"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "CSS"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "JavaScript"), ". If you know just these three, you can start building websites and be employable. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before we proceed, let me give you a brief overview of how ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "HTML"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "CSS"), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "JavaScript"), " are used on the website. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "HTML"), " provides the structure to a website i.e. all the text, headings, paragraphs, images etc that you see on the website, they have been created with HTML. HTML provides you just the structure, you need to put another layer on top of it to make the website pretty - this next layer is CSS. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "CSS"), " helps make your websites pretty - the colors, backgrounds, font size, borders, shadows etc are controlled using CSS. And finally, the third layer is ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "JavaScript"), " which helps make the website interactive e.g. controlling the actions like showing a popup, switching slider images upon click etc is all controlled by JavaScript. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "To understand it better, let me provide the analogy of a human body, the skeleton provides structure to our bodies so it can be equivalent to the HTML, the skin which hides the structure of our bodies and beautifies is like CSS and the muscles which help us perform different actions can be JavaScript."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/0-About/0-Summary.md":
/*!**********************************************************!*\
  !*** ./storage/roadmaps/1-frontend/0-About/0-Summary.md ***!
  \**********************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/static/roadmaps/frontend.png",
    "alt": null
  }))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/0-About/1-Skill-Summary.md":
/*!****************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/0-About/1-Skill-Summary.md ***!
  \****************************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Soft Skills"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Before we jump on to the technical skills there are few non-technical or soft skills that every employer is going to demand, so make sure to work on that side of the things as well when you are preparing yourself technically"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Communication skills"), " \u2014 Talking to your colleagues, writing emails, use of language"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Teamwork"), " \u2014 Working with others, sharing responsibilities, apart from personal goals, achieving goals as a team"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Adaptability"), " \u2014 Being able to adapt according to the situations, changes and pressure at the workplace"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Emotional Intelligence"), " \u2014 Empathy, being able to understand the emotions of those around you."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Work Ethics and Integrity"), " \u2014 Being able to follow through on your duties in timely and quality manner."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "li"
  }, "Be Curious"), " \u2014 Your curiosity is going to help you a great deal in evolving yourself. Don't just take things as they are, look at the reasoning behind the things. Look at the things that others are building, learn from them. Look at what community is most excited about these days.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Technical Skills"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In order to be a frontend developer, all you need is to learn HTML, CSS and JavaScript. Just learn these and you should be employable. I know a lot of developers who just know these and are working as frontend developers and are making decent money"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "HTML"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "CSS"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "JavaScript ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Frontend development is broad and there are further skills that are in play but those can be gained over time. All you need is to learn the above three and start making projects ...lots of them. This is how you will hone your skillset and continue to grow. Having said that, the skills and the relevant expertise in those skills varies from the job level, follow the links below to get an idea of the skills required for each of the role levels."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "/frontend/junior-developer"
  }), "Entry Level Developer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "/frontend/mid-level-developer"
  }), "Mid Level Developer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "li"
  }, {
    "href": "/frontend/senior-developer"
  }), "Senior Developer"))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/0-About/2-Job-Titles.md":
/*!*************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/0-About/2-Job-Titles.md ***!
  \*************************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Common Job Titles"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you know frontend development, there are jobs with different titles that you can apply to. Here is the list of different job titles with almost same responsibilities"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Frontend Developer / Engineer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "JavaScript Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "JavaScript Engineer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "HTML / CSS Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "UI Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Web Developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "FullStack Developer")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Having Web Developer or FullStack developer in the title would normally mean that you need to have some backend skills as well. Most of the small or service based companies require you to have backend and some UI designing skills as well so it is better to look at the job description also once you have shortlisted the jobs to apply to."));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md":
/*!***********************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md ***!
  \***********************************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Technical Skills"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The sections below describe different steps required to become a frontend developer"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Learning How Things Work"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "As a web developer, frontend, backend or fullstack, you should have a good understanding of how the internet works "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/static/roadmaps/frontend/beginner-1.png",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Learn the below listed in the order given below"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "What is Internet and how does it work?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "What is HTTP, how it evolved and where is it now?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "How do the browsers work? Engines behind different browsers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "What is DNS? How a website is found on the internet?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "What's in a domain name? What is an IP Address?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "What is Web Hosting?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Writing Some Code"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now that you understand how things work, next step is getting your hands dirty and start actual coding"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md":
/*!**************************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md ***!
  \**************************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md":
/*!***********************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md ***!
  \***********************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/1-Job-Ready.md":
/*!************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/1-Job-Ready.md ***!
  \************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md":
/*!*******************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md ***!
  \*******************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/3-Build-Tools.md":
/*!**************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/3-Build-Tools.md ***!
  \**************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/4-Modern-Applications.md":
/*!**********************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/4-Modern-Applications.md ***!
  \**********************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/5-Automated-Testing.md":
/*!********************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/5-Automated-Testing.md ***!
  \********************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md":
/*!***********************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md ***!
  \***********************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md":
/*!************************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md ***!
  \************************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/2-Learn/8-Go-Beyond.md":
/*!************************************************************!*\
  !*** ./storage/roadmaps/1-frontend/2-Learn/8-Go-Beyond.md ***!
  \************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/1-frontend/meta.json":
/*!***********************************************!*\
  !*** ./storage/roadmaps/1-frontend/meta.json ***!
  \***********************************************/
/*! exports provided: title, description, featuredDescription, author, featured, detailed, versions, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Frontend Developer\",\"description\":\"Step by step guide to becoming a modern frontend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern frontend developer in 2019\",\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"featured\":true,\"detailed\":false,\"versions\":[\"latest\",\"2018\",\"2017\"]}");

/***/ }),

/***/ "./storage/roadmaps/2-backend/0-About/0-Summary.md":
/*!*********************************************************!*\
  !*** ./storage/roadmaps/2-backend/0-About/0-Summary.md ***!
  \*********************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/static/roadmaps/backend.png",
    "alt": null
  }))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/2-backend/1-Landscape/0-Summary.md":
/*!*************************************************************!*\
  !*** ./storage/roadmaps/2-backend/1-Landscape/0-Summary.md ***!
  \*************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/2-backend/1-Landscape/1-Junior.md":
/*!************************************************************!*\
  !*** ./storage/roadmaps/2-backend/1-Landscape/1-Junior.md ***!
  \************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/2-backend/1-Landscape/2-Intermediate.md":
/*!******************************************************************!*\
  !*** ./storage/roadmaps/2-backend/1-Landscape/2-Intermediate.md ***!
  \******************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/2-backend/1-Landscape/3-Senior.md":
/*!************************************************************!*\
  !*** ./storage/roadmaps/2-backend/1-Landscape/3-Senior.md ***!
  \************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/2-backend/meta.json":
/*!**********************************************!*\
  !*** ./storage/roadmaps/2-backend/meta.json ***!
  \**********************************************/
/*! exports provided: title, description, featuredDescription, featured, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Backend Developer\",\"description\":\"Step by step guide to becoming a modern backend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern backend developer in 2019\",\"featured\":true,\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"}}");

/***/ }),

/***/ "./storage/roadmaps/3-devops/0-About/0-Summary.md":
/*!********************************************************!*\
  !*** ./storage/roadmaps/3-devops/0-About/0-Summary.md ***!
  \********************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    parentName: "p"
  }, {
    "src": "/static/roadmaps/devops.png",
    "alt": null
  }))));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/3-devops/1-Landscape/1-Junior.md":
/*!***********************************************************!*\
  !*** ./storage/roadmaps/3-devops/1-Landscape/1-Junior.md ***!
  \***********************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/3-devops/1-Landscape/2-Intermediate.md":
/*!*****************************************************************!*\
  !*** ./storage/roadmaps/3-devops/1-Landscape/2-Intermediate.md ***!
  \*****************************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/3-devops/1-Landscape/3-Senior.md":
/*!***********************************************************!*\
  !*** ./storage/roadmaps/3-devops/1-Landscape/3-Senior.md ***!
  \***********************************************************/
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
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/3-devops/meta.json":
/*!*********************************************!*\
  !*** ./storage/roadmaps/3-devops/meta.json ***!
  \*********************************************/
/*! exports provided: title, description, featuredDescription, featured, versions, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"DevOps Roadmap\",\"description\":\"Step by step guide for DevOps or any other Operations Role\",\"featuredDescription\":\"Step by step guide to become an SRE or for any operations role in 2019\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"],\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"}}");

/***/ }),

/***/ "./storage/roadmaps/4-fullstack/0-About/0-Summary.md":
/*!***********************************************************!*\
  !*** ./storage/roadmaps/4-fullstack/0-About/0-Summary.md ***!
  \***********************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Fullstack Roadmap"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Roadmap to becoming a fullstack developer"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/4-fullstack/meta.json":
/*!************************************************!*\
  !*** ./storage/roadmaps/4-fullstack/meta.json ***!
  \************************************************/
/*! exports provided: title, description, featuredDescription, upcoming, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Full Stack Developer\",\"description\":\"Step by step guide to becoming a modern fullstack developer in 2019\",\"featuredDescription\":\"Step by step guide to becoming a modern fullstack developer in 2019\",\"upcoming\":true,\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"}}");

/***/ }),

/***/ "./storage/roadmaps/5-qa/0-About/0-Summary.md":
/*!****************************************************!*\
  !*** ./storage/roadmaps/5-qa/0-About/0-Summary.md ***!
  \****************************************************/
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
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "QA Roadmap"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Roadmap to becoming a QA Engineer"));
}
;
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "./storage/roadmaps/5-qa/meta.json":
/*!*****************************************!*\
  !*** ./storage/roadmaps/5-qa/meta.json ***!
  \*****************************************/
/*! exports provided: title, description, featuredDescription, upcoming, author, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"QA Engineer\",\"description\":\"Steps to follow in order to become a modern QA Engineer in 2019\",\"featuredDescription\":\"Step by step guide to becoming a modern QA Engineer in 2019\",\"upcoming\":true,\"author\":{\"name\":\"Anas Fitiani\",\"url\":\"https://github.com/anas-qa\"}}");

/***/ }),

/***/ "./storage/roadmaps/upcoming.md":
false

})
//# sourceMappingURL=[roadmap].js.81af57570b8a028dc594.hot-update.js.map