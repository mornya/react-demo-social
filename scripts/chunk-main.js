(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/constants/configure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    social: {
        facebook: {
            appId: "",
            scope: ['public_profile', 'email', 'user_friends'],
        },
        google: {
            scope: [],
        },
        kakao: {
            appId: "",
        },
    },
});


/***/ }),

/***/ "./src/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ignitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ignitor/core/dist/index.js");
/* harmony import */ var _ignitor_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ignitor_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mornya/react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/configure.ts");



var option = {
    application: {
        component: function () { return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "./src/App.tsx")); },
        rootElementId: 'app',
        onHotReload: function (next) { return module.hot && false; },
        onRender: function () {
            var _a, _b;
            _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Loader"].initKakaoSDK((_a = _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId) !== null && _a !== void 0 ? _a : '');
            _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Loader"].initFacebookSDK((_b = _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.facebook.appId) !== null && _b !== void 0 ? _b : '', "development" !== 'production');
            _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Loader"].initClipboardSDK();
        },
    },
    router: {
        isUseBrowserRouter: true,
        basename: "react-demo-social",
    },
    serviceWorker: {
        isUse: "development" === 'production',
        config: {
            url: './',
            file: 'service-worker.js',
        },
    },
};
_ignitor_core__WEBPACK_IMPORTED_MODULE_0__["Ignitor"].initialize(option);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../../mornya-react-vessel/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../mornya-react-vessel/node_modules/react-hot-loader/patch.js");
module.exports = __webpack_require__("./src/index.tsx");


/***/ })

},[[0,"runtime~main","vendors~..","vendors~.._.._mornya-react-vessel_node_modules_@hot-loader_react-dom_cjs_react-dom.development.js~fa~8b3bd9cc"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL2NvbmZpZ3VyZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsbUJBQW1CLEVBQStCO0FBQ2xEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxtQkFBbUIsRUFBNEI7QUFDL0MsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDLEVBQUM7Ozs7Ozs7OztBQ2JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNXO0FBQ0w7QUFDOUM7QUFDQTtBQUNBLGdDQUFnQyxRQUFRLDZGQUFlLENBQUMsRUFBRTtBQUMxRDtBQUNBLHNDQUFzQyxzQkFBc0IsS0FBZ0MsQ0FBQyxFQUFFO0FBQy9GO0FBQ0E7QUFDQSxZQUFZLGdFQUFNLG9CQUFvQiw0REFBUztBQUMvQyxZQUFZLGdFQUFNLHVCQUF1Qiw0REFBUyw2REFBNkQsYUFBb0I7QUFDbkksWUFBWSxnRUFBTTtBQUNsQixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQXNCO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLGVBQWUsYUFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLHFEQUFPIiwiZmlsZSI6InNjcmlwdHMvY2h1bmstbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzb2NpYWw6IHtcbiAgICAgICAgZmFjZWJvb2s6IHtcbiAgICAgICAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5TREtfRkFDRUJPT0tfQVBQX0lELFxuICAgICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnLCAndXNlcl9mcmllbmRzJ10sXG4gICAgICAgIH0sXG4gICAgICAgIGdvb2dsZToge1xuICAgICAgICAgICAgc2NvcGU6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBrYWthbzoge1xuICAgICAgICAgICAgYXBwSWQ6IHByb2Nlc3MuZW52LlNES19LQUtBT19BUFBfSUQsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJpbXBvcnQgeyBJZ25pdG9yIH0gZnJvbSAnQGlnbml0b3IvY29yZSc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAbW9ybnlhL3JlYWN0LXNvY2lhbC1saWJzJztcbmltcG9ydCBDb25maWd1cmUgZnJvbSAnQC9jb25zdGFudHMvY29uZmlndXJlJztcbnZhciBvcHRpb24gPSB7XG4gICAgYXBwbGljYXRpb246IHtcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBpbXBvcnQoJy4vQXBwJyk7IH0sXG4gICAgICAgIHJvb3RFbGVtZW50SWQ6ICdhcHAnLFxuICAgICAgICBvbkhvdFJlbG9hZDogZnVuY3Rpb24gKG5leHQpIHsgcmV0dXJuIG1vZHVsZS5ob3QgJiYgbW9kdWxlLmhvdC5hY2NlcHQoJy4vQXBwJywgbmV4dCk7IH0sXG4gICAgICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgTG9hZGVyLmluaXRLYWthb1NESygoX2EgPSBDb25maWd1cmUuc29jaWFsLmtha2FvLmFwcElkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgICAgICAgICBMb2FkZXIuaW5pdEZhY2Vib29rU0RLKChfYiA9IENvbmZpZ3VyZS5zb2NpYWwuZmFjZWJvb2suYXBwSWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKTtcbiAgICAgICAgICAgIExvYWRlci5pbml0Q2xpcGJvYXJkU0RLKCk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICByb3V0ZXI6IHtcbiAgICAgICAgaXNVc2VCcm93c2VyUm91dGVyOiB0cnVlLFxuICAgICAgICBiYXNlbmFtZTogcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCxcbiAgICB9LFxuICAgIHNlcnZpY2VXb3JrZXI6IHtcbiAgICAgICAgaXNVc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgdXJsOiAnLi8nLFxuICAgICAgICAgICAgZmlsZTogJ3NlcnZpY2Utd29ya2VyLmpzJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbklnbml0b3IuaW5pdGlhbGl6ZShvcHRpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==