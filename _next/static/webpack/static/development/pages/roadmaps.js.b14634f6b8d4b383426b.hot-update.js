webpackHotUpdate("static/development/pages/roadmaps.js",{

/***/ "./pages/roadmaps.js":
/*!***************************!*\
  !*** ./pages/roadmaps.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var layouts_default_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/default/index */ "./layouts/default/index.js");
/* harmony import */ var components_site_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/site-nav */ "./components/site-nav/index.js");
/* harmony import */ var components_page_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/page-footer */ "./components/page-footer/index.js");
/* harmony import */ var components_page_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/page-header */ "./components/page-header/index.js");
/* harmony import */ var storage_roadmaps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! storage/roadmaps */ "./storage/roadmaps.json");
var storage_roadmaps__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/roadmaps */ "./storage/roadmaps.json", 1);
/* harmony import */ var components_row_block__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/row-block */ "./components/row-block/index.js");
/* harmony import */ var components_icon_row_block__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/icon-row-block */ "./components/icon-row-block/index.js");
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);
/* harmony import */ var components_badges__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/badges */ "./components/badges/index.js");
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var PageTitle = "Developer Roadmaps";
var PageDescription = "Developer roadmap ";

var RoadmapsList = function RoadmapsList() {
  return __jsx(layouts_default_index__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_12__["default"], {
    title: PageTitle,
    desciption: PageDescription
  }), __jsx(components_site_nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx("div", {
    className: "container"
  }, __jsx(components_page_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: PageTitle,
    subtitle: PageDescription
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_11__["BadgesList"], {
    className: "mt-4"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_11__["BadgeLink"], {
    href: "".concat(storage_site__WEBPACK_IMPORTED_MODULE_10__.url.issue, "?title=[RequestRoadmap] - Title Here"),
    target: "_blank"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_11__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCodeBranch"]
  }), "Request a Roadmap")), __jsx(components_badges__WEBPACK_IMPORTED_MODULE_11__["BadgeLink"], {
    href: "/signup"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_11__["PrimaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"]
  }), "Send me Updates"))))), __jsx("div", {
    className: "pt-5 pb-5 bg-light border-top"
  }, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "row"
  }, storage_roadmaps__WEBPACK_IMPORTED_MODULE_7__.map(function (roadmap) {
    return __jsx(components_row_block__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: roadmap.url,
      title: roadmap.title.replace(/roadmap|developer/i, ''),
      subtitle: roadmap.featuredDescription || roadmap.description,
      url: roadmap.url,
      disabled: roadmap.upcoming,
      badge: roadmap.upcoming ? 'upcoming' : ''
    });
  }), __jsx(components_icon_row_block__WEBPACK_IMPORTED_MODULE_9__["default"], {
    url: storage_site__WEBPACK_IMPORTED_MODULE_10__.url.addRoadmap,
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"],
    openExternal: true,
    text: "Submit a Roadmap"
  })))), __jsx(components_page_footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadmapsList);

/***/ })

})
//# sourceMappingURL=roadmaps.js.b14634f6b8d4b383426b.hot-update.js.map