webpackHotUpdate("static/development/pages/[roadmap].js",{

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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_guide_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/guide-body */ "./components/guide-body/index.js");
/* harmony import */ var components_roadmap_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/roadmap-header */ "./components/roadmap-header/index.js");
/* harmony import */ var components_share_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/share-page */ "./components/share-page/index.js");
/* harmony import */ var components_md_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/md-renderer */ "./components/md-renderer/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var RoadmapSummary = function RoadmapSummary(_ref) {
  var roadmap = _ref.roadmap;

  if (roadmap.upcoming) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_roadmap_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      roadmap: roadmap
    }), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["UpcomingContainer"], null, __jsx(components_guide_body__WEBPACK_IMPORTED_MODULE_3__["default"], {
      guide: {
        fileName: 'upcoming'
      }
    })));
  }

  var filePath = roadmap.path.replace(/^\//, '');

  var RoadmapContent = __webpack_require__("./content sync recursive ^\\.\\/.*$")("./".concat(filePath))["default"];

  return __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["SummaryContainer"], null, __jsx(components_roadmap_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    roadmap: roadmap
  }), __jsx(_style__WEBPACK_IMPORTED_MODULE_1__["Summary"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("container", {
      "container-small": roadmap.isTextHeavy
    })
  }, __jsx(components_md_renderer__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(RoadmapContent, null)), __jsx(components_share_page__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: roadmap.description,
    url: roadmap.url
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RoadmapSummary);

/***/ })

})
//# sourceMappingURL=[roadmap].js.be5f7ef2532809c776ff.hot-update.js.map