webpackHotUpdate("static/development/pages/[roadmap]/[page].js",{

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
})(["padding-bottom:150px;ul{list-style:none;margin:0;padding:0;}.bullet{display:inline-block;margin-right:7px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}.links-group{padding:30px 0 10px;width:260px;h3{font-size:12px;font-weight:600;text-transform:uppercase;padding-left:20px;}}.progress-badge{position:relative;top:-2px;margin-left:5px;}.links-group.in-progress{opacity:0.3;}.links-group li{list-style:none;margin:7px 0;a{font-size:14px;font-weight:normal;color:#696969;}.bullet{display:inline-block;margin-right:12px;width:7px;height:7px;min-width:7px;border-radius:100%;background:#efefef;transform:translateX(-4px);transition:background 0.5s ease;}&.active a{color:#101010;}&.active .bullet{background:#101010;}}"]);
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
//# sourceMappingURL=[page].js.353e4137c86059e56bdd.hot-update.js.map