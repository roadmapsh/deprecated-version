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

    return __jsx("div", {
      className: "links-group",
      key: groupTitle
    }, __jsx("h3", null, groupTitle, __jsx("span", {
      className: "badge badge-warning progress-badge"
    }, "In Progress")), __jsx("ul", null, sidebar[groupTitle].map(function (page) {
      var isActivePage = page.url === currentPage.url; // e.g. /frontend should mark `/frontend/landscape` as active

      var isSummaryPage = page.url === "".concat(currentPage.url, "/landscape");
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

/***/ })

})
//# sourceMappingURL=[page].js.c2276bdd7b832cdf9db2.hot-update.js.map