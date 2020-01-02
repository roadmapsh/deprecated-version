webpackHotUpdate("static/development/pages/index.js",{

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

/***/ "./storage/roadmaps.json":
/*!*******************************!*\
  !*** ./storage/roadmaps.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Frontend Developer\",\"description\":\"Step by step guide to becoming a modern frontend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern frontend developer in 2019\",\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"featured\":true,\"detailed\":false,\"versions\":[\"latest\",\"2018\",\"2017\"],\"contributorsCount\":1,\"contributorsUrl\":\"/frontend/contributors\",\"url\":\"/frontend\",\"path\":\"/roadmaps/1-frontend/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/frontend/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/1-frontend/0-About/0-Summary.md\"},{\"url\":\"/frontend/skill-summary\",\"title\":\"Skill Summary\",\"path\":\"/roadmaps/1-frontend/0-About/1-Skill-Summary.md\"},{\"url\":\"/frontend/job-titles\",\"title\":\"Job Titles\",\"path\":\"/roadmaps/1-frontend/0-About/2-Job-Titles.md\"}],\"Landscape\":[{\"url\":\"/frontend/junior-developer\",\"title\":\"Junior Developer\",\"path\":\"/roadmaps/1-frontend/1-Landscape/1-Junior-Developer.md\"},{\"url\":\"/frontend/mid-level-developer\",\"title\":\"Mid Level Developer\",\"path\":\"/roadmaps/1-frontend/1-Landscape/2-Mid-Level-Developer.md\"},{\"url\":\"/frontend/senior-developer\",\"title\":\"Senior Developer\",\"path\":\"/roadmaps/1-frontend/1-Landscape/3-Senior-Developer.md\"}],\"Learn\":[{\"url\":\"/frontend/job-ready\",\"title\":\"Job Ready\",\"path\":\"/roadmaps/1-frontend/2-Learn/1-Job-Ready.md\"},{\"url\":\"/frontend/write-better-css\",\"title\":\"Write Better CSS\",\"path\":\"/roadmaps/1-frontend/2-Learn/2-Write-Better-CSS.md\"},{\"url\":\"/frontend/build-tools\",\"title\":\"Build Tools\",\"path\":\"/roadmaps/1-frontend/2-Learn/3-Build-Tools.md\"},{\"url\":\"/frontend/modern-applications\",\"title\":\"Modern Applications\",\"path\":\"/roadmaps/1-frontend/2-Learn/4-Modern-Applications.md\"},{\"url\":\"/frontend/automated-testing\",\"title\":\"Automated Testing\",\"path\":\"/roadmaps/1-frontend/2-Learn/5-Automated-Testing.md\"},{\"url\":\"/frontend/static-type-checkers\",\"title\":\"Static Type Checkers\",\"path\":\"/roadmaps/1-frontend/2-Learn/6-Static-Type-Checkers.md\"},{\"url\":\"/frontend/server-side-rendering\",\"title\":\"Server Side Rendering\",\"path\":\"/roadmaps/1-frontend/2-Learn/7-Server-Side-Rendering.md\"},{\"url\":\"/frontend/go-beyond\",\"title\":\"Go Beyond\",\"path\":\"/roadmaps/1-frontend/2-Learn/8-Go-Beyond.md\"}]}},{\"title\":\"Backend Developer\",\"description\":\"Step by step guide to becoming a modern backend developer\",\"featuredDescription\":\"Step by step guide to becoming a modern backend developer in 2019\",\"featured\":true,\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"contributorsCount\":1,\"contributorsUrl\":\"/backend/contributors\",\"url\":\"/backend\",\"path\":\"/roadmaps/2-backend/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/backend/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/2-backend/0-About/0-Summary.md\"}],\"Landscape\":[{\"url\":\"/backend/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/2-backend/1-Landscape/0-Summary.md\"},{\"url\":\"/backend/junior\",\"title\":\"Junior\",\"path\":\"/roadmaps/2-backend/1-Landscape/1-Junior.md\"},{\"url\":\"/backend/intermediate\",\"title\":\"Intermediate\",\"path\":\"/roadmaps/2-backend/1-Landscape/2-Intermediate.md\"},{\"url\":\"/backend/senior\",\"title\":\"Senior\",\"path\":\"/roadmaps/2-backend/1-Landscape/3-Senior.md\"}]}},{\"title\":\"DevOps Roadmap\",\"description\":\"Step by step guide for DevOps or any other Operations Role\",\"featuredDescription\":\"Step by step guide to become an SRE or for any operations role in 2019\",\"featured\":true,\"versions\":[\"latest\",\"2018\",\"2017\"],\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"contributorsCount\":1,\"contributorsUrl\":\"/devops/contributors\",\"url\":\"/devops\",\"path\":\"/roadmaps/3-devops/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/devops/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/3-devops/0-About/0-Summary.md\"}],\"Landscape\":[{\"url\":\"/devops/junior\",\"title\":\"Junior\",\"path\":\"/roadmaps/3-devops/1-Landscape/1-Junior.md\"},{\"url\":\"/devops/intermediate\",\"title\":\"Intermediate\",\"path\":\"/roadmaps/3-devops/1-Landscape/2-Intermediate.md\"},{\"url\":\"/devops/senior\",\"title\":\"Senior\",\"path\":\"/roadmaps/3-devops/1-Landscape/3-Senior.md\"}]}},{\"title\":\"Full Stack Developer\",\"description\":\"Step by step guide to becoming a modern fullstack developer in 2019\",\"featuredDescription\":\"Step by step guide to becoming a modern fullstack developer in 2019\",\"upcoming\":true,\"author\":{\"name\":\"Kamran Ahmed\",\"url\":\"https://twitter.com/kamranahmedse\"},\"contributorsCount\":1,\"contributorsUrl\":\"/fullstack/contributors\",\"url\":\"/fullstack\",\"path\":\"/roadmaps/4-fullstack/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/fullstack/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/4-fullstack/0-About/0-Summary.md\"}]}},{\"title\":\"QA Engineer\",\"description\":\"Steps to follow in order to become a modern QA Engineer in 2019\",\"featuredDescription\":\"Step by step guide to becoming a modern QA Engineer in 2019\",\"upcoming\":true,\"author\":{\"name\":\"Anas Fitiani\",\"url\":\"https://github.com/anas-qa\"},\"contributorsCount\":1,\"contributorsUrl\":\"/qa/contributors\",\"url\":\"/qa\",\"path\":\"/roadmaps/5-qa/0-About/0-Summary.md\",\"sidebar\":{\"About\":[{\"url\":\"/qa/summary\",\"title\":\"Summary\",\"path\":\"/roadmaps/5-qa/0-About/0-Summary.md\"}]}}]");

/***/ })

})
//# sourceMappingURL=index.js.81af57570b8a028dc594.hot-update.js.map