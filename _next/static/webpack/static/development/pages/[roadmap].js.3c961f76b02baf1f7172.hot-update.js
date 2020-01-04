webpackHotUpdate("static/development/pages/[roadmap].js",{

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
    className: "d-none d-md-block",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowLeft"]
  }), "Other Roadmaps")), roadmap.upcoming && __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["BadgeLink"], {
    href: "/signup"
  }, __jsx(components_badges__WEBPACK_IMPORTED_MODULE_3__["SecondaryBadge"], null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "d-none d-md-block",
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

/***/ })

})
//# sourceMappingURL=[roadmap].js.3c961f76b02baf1f7172.hot-update.js.map