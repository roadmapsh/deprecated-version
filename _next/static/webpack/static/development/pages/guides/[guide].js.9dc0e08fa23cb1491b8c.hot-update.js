webpackHotUpdate("static/development/pages/guides/[guide].js",{

/***/ "./pages/guides/[guide].js":
/*!*********************************!*\
  !*** ./pages/guides/[guide].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var layouts_guide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! layouts/guide */ "./layouts/guide/index.js");
/* harmony import */ var lib_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/server */ "./lib/server.js");
/* harmony import */ var components_guide_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/guide-header */ "./components/guide-header/index.js");
/* harmony import */ var components_guide_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/guide-body */ "./components/guide-body/index.js");
/* harmony import */ var components_guide_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/guide-footer */ "./components/guide-footer/index.js");
/* harmony import */ var lib_guide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/guide */ "./lib/guide.js");
/* harmony import */ var components_helmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/helmet */ "./components/helmet/index.js");
/* harmony import */ var storage_site__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! storage/site */ "./storage/site.json");
var storage_site__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! storage/site */ "./storage/site.json", 1);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Guide = function Guide(_ref) {
  var guide = _ref.guide,
      canonical = _ref.canonical;

  if (!guide) {
    return __jsx(next_error__WEBPACK_IMPORTED_MODULE_2___default.a, {
      statusCode: 404
    });
  }

  return __jsx(layouts_guide__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx(components_helmet__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: guide.title,
    description: guide.description,
    canonical: guide.canonical || canonical
  }), __jsx(components_guide_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    guide: guide
  }), __jsx(components_guide_body__WEBPACK_IMPORTED_MODULE_6__["default"], {
    guide: guide
  }), __jsx(components_guide_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    guide: guide
  }));
};

Guide.getInitialProps = Object(lib_server__WEBPACK_IMPORTED_MODULE_4__["serverOnlyProps"])(function _callee(_ref2) {
  var req;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req;
          _context.t0 = "".concat(storage_site__WEBPACK_IMPORTED_MODULE_10__.url.web).concat(req.url);
          _context.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(lib_guide__WEBPACK_IMPORTED_MODULE_8__["getRequestedGuide"])(req));

        case 4:
          _context.t1 = _context.sent;
          return _context.abrupt("return", {
            canonical: _context.t0,
            guide: _context.t1
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Guide);

/***/ })

})
//# sourceMappingURL=[guide].js.9dc0e08fa23cb1491b8c.hot-update.js.map