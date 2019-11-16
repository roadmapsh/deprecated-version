webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/*! exports provided: firePageView, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firePageView", function() { return firePageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
var firePageView = function firePageView(url) {
  if (!window.gtag) {
    console.warn('Missing GTAG – Analytics disabled');
    return;
  }

  window.gtag('config', "", {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

var event = function event(_ref) {
  var action = _ref.action,
      category = _ref.category,
      label = _ref.label,
      value = _ref.value;

  if (!window.gtag) {
    console.warn('Missing GTAG – Analytics disabled');
    return;
  }

  console.log("");
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ })

})
//# sourceMappingURL=index.js.8b6cd4f53b2bb171c8e1.hot-update.js.map