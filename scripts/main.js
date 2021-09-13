(self["webpackChunkreact_demo_social"] = self["webpackChunkreact_demo_social"] || []).push([["main"],{

/***/ "./src/constants/configure.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    social: {
        facebook: {
            appId: 256156199689831,
            scope: ['public_profile', 'email', 'user_friends'],
        },
        google: {
            scope: [],
        },
        kakao: {
            appId: "b82fc3acb12c88fdb98e5e325fe6ba48",
        },
    },
});


/***/ }),

/***/ "./src/index.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ignitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@ignitor/core/dist/index.js");
/* harmony import */ var _ignitor_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ignitor_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mornya/react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/configure.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var option = {
    application: {
        component: function () { return Promise.all(/* import() */[__webpack_require__.e("vendors-node_modules_loadable_component_dist_loadable_esm_js-node_modules_mornya_react-social-6ca018"), __webpack_require__.e("src_App_tsx")]).then(__webpack_require__.bind(__webpack_require__, "./src/App.tsx")); },
        rootElementId: 'app',
        onHotReload: function (next) { var _a; return (_a = module.hot) === null || _a === void 0 ? void 0 : _a.accept('./App', next); },
        onRender: function () {
            var _a, _b;
            _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Loader.initKakaoSDK((_a = _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.kakao.appId) !== null && _a !== void 0 ? _a : '');
            _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Loader.initFacebookSDK((_b = _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.facebook.appId) !== null && _b !== void 0 ? _b : '', "development" !== 'production');
            _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Loader.initClipboardSDK();
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
_ignitor_core__WEBPACK_IMPORTED_MODULE_0__.Ignitor.initialize(option);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ignitor_core_dist_index_js-node_modules_mornya_react-social-libs_dist_in-158949"], () => (__webpack_exec__("../../mornya-react-vessel/node_modules/react-hot-loader/patch.js"), __webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1kZW1vLXNvY2lhbC8uL3NyYy9jb25zdGFudHMvY29uZmlndXJlLnRzIiwid2VicGFjazovL3JlYWN0LWRlbW8tc29jaWFsLy4vc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0EsbUJBQW1CLGVBQStCO0FBQ2xEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxtQkFBbUIsa0NBQTRCO0FBQy9DLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYnNDO0FBQ1c7QUFDTDtBQUM5QztBQUNBO0FBQ0EsZ0NBQWdDLFFBQVEscVFBQWUsQ0FBQyxFQUFFO0FBQzFEO0FBQ0Esc0NBQXNDLFFBQVEsd0ZBQXdGLEVBQUU7QUFDeEk7QUFDQTtBQUNBLFlBQVksMEVBQW1CLE9BQU8sNEVBQTRCO0FBQ2xFLFlBQVksNkVBQXNCLE9BQU8sK0VBQStCLHVDQUF1QyxhQUFvQjtBQUNuSSxZQUFZLDhFQUF1QjtBQUNuQyxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxrQkFBa0IsbUJBQXNCO0FBQ3hDLEtBQUs7QUFDTDtBQUNBLGVBQWUsYUFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLDZEQUFrQiIsImZpbGUiOiJzY3JpcHRzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgc29jaWFsOiB7XG4gICAgICAgIGZhY2Vib29rOiB7XG4gICAgICAgICAgICBhcHBJZDogcHJvY2Vzcy5lbnYuU0RLX0ZBQ0VCT09LX0FQUF9JRCxcbiAgICAgICAgICAgIHNjb3BlOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJywgJ3VzZXJfZnJpZW5kcyddLFxuICAgICAgICB9LFxuICAgICAgICBnb29nbGU6IHtcbiAgICAgICAgICAgIHNjb3BlOiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAga2FrYW86IHtcbiAgICAgICAgICAgIGFwcElkOiBwcm9jZXNzLmVudi5TREtfS0FLQU9fQVBQX0lELFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiaW1wb3J0IHsgSWduaXRvciB9IGZyb20gJ0BpZ25pdG9yL2NvcmUnO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQG1vcm55YS9yZWFjdC1zb2NpYWwtbGlicyc7XG5pbXBvcnQgQ29uZmlndXJlIGZyb20gJ0AvY29uc3RhbnRzL2NvbmZpZ3VyZSc7XG52YXIgb3B0aW9uID0ge1xuICAgIGFwcGxpY2F0aW9uOiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gaW1wb3J0KCcuL0FwcCcpOyB9LFxuICAgICAgICByb290RWxlbWVudElkOiAnYXBwJyxcbiAgICAgICAgb25Ib3RSZWxvYWQ6IGZ1bmN0aW9uIChuZXh0KSB7IHZhciBfYTsgcmV0dXJuIChfYSA9IG1vZHVsZS5ob3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hY2NlcHQoJy4vQXBwJywgbmV4dCk7IH0sXG4gICAgICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgTG9hZGVyLmluaXRLYWthb1NESygoX2EgPSBDb25maWd1cmUuc29jaWFsLmtha2FvLmFwcElkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJyk7XG4gICAgICAgICAgICBMb2FkZXIuaW5pdEZhY2Vib29rU0RLKChfYiA9IENvbmZpZ3VyZS5zb2NpYWwuZmFjZWJvb2suYXBwSWQpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnLCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKTtcbiAgICAgICAgICAgIExvYWRlci5pbml0Q2xpcGJvYXJkU0RLKCk7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICByb3V0ZXI6IHtcbiAgICAgICAgaXNVc2VCcm93c2VyUm91dGVyOiB0cnVlLFxuICAgICAgICBiYXNlbmFtZTogcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCxcbiAgICB9LFxuICAgIHNlcnZpY2VXb3JrZXI6IHtcbiAgICAgICAgaXNVc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgdXJsOiAnLi8nLFxuICAgICAgICAgICAgZmlsZTogJ3NlcnZpY2Utd29ya2VyLmpzJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbklnbml0b3IuaW5pdGlhbGl6ZShvcHRpb24pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==