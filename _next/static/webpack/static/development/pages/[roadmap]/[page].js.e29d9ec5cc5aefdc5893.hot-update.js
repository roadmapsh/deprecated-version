webpackHotUpdate("static/development/pages/[roadmap]/[page].js",{

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
/* harmony import */ var content_site__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! content/site */ "./content/site.json");
var content_site__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! content/site */ "./content/site.json", 1);
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

  var roadmapPages = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sidebar || {}).map(function (groupTitle, groupCounter) {
    if (groupTitle.startsWith('_')) {
      return;
    }

    var isInProgress = groupCounter !== 0;
    return __jsx("div", {
      className: "links-group ".concat(isInProgress ? 'in-progress' : ''),
      key: groupTitle
    }, __jsx("h3", null, groupTitle, isInProgress && __jsx("span", {
      className: "badge badge-warning progress-badge"
    }, "In Progress")), __jsx("ul", null, sidebar[groupTitle].map(function (page) {
      var isActivePage = page.url === currentPage.url; // e.g. /frontend should mark `/frontend/landscape` as active

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

  var RoadmapContent = __webpack_require__("./content sync recursive ^\\.\\/.*$")("./".concat(filePath))["default"];

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
    href: content_site__WEBPACK_IMPORTED_MODULE_9__.url.repo,
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
})(["padding-bottom:150px;ul{list-style:none;margin:0;padding:0;}.bullet{display:inline-block;margin-right:7px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}.links-group{padding:30px 0 10px;width:260px;h3{font-size:12px;font-weight:600;text-transform:uppercase;padding-left:20px;}}.progress-badge{position:relative;top:-2px;margin-left:5px;}.links-group.in-progress{opacity:0.5;}.links-group li{list-style:none;margin:7px 0;a{font-size:14px;font-weight:normal;color:#696969;}.bullet{display:inline-block;margin-right:12px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}&.active a{color:#101010;}&.active .bullet{background:#101010;}}"]);
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
})(["border-left:1px solid #efefef;margin-left:12px;padding-bottom:20px;.links-group{width:auto;}.progress-badge{position:relative;top:-2px;margin-left:5px;}"]);

/***/ })

})
//# sourceMappingURL=[page].js.e29d9ec5cc5aefdc5893.hot-update.js.map