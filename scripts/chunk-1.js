(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/ShareAndWidget.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareAndWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ShareButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ShareButtons.tsx");
/* harmony import */ var _components_WidgetButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/WidgetButtons.tsx");



function ShareAndWidget() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-grp" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ShareButtons__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_WidgetButtons__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}


/***/ }),

/***/ "./src/components/ShareButtons.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mornya/react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/configure.ts");



function ShareButtons() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Band, { title: "\uBC34\uB4DC \uACF5\uC720", extra: { hashtags: ['react', 'demo'] } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Email, { title: "e\uBA54\uC77C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Facebook, { title: "\uD398\uC774\uC2A4\uBD81 \uACF5\uC720", extra: { appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.facebook.appId } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Flipboard, { title: "\uD50C\uB9BD\uBCF4\uB4DC \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Gmail, { title: "G\uBA54\uC77C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].GoogleBookmarks, { title: "\uAD6C\uAE00 \uBD81\uB9C8\uD06C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoStory, { title: "\uCE74\uCE74\uC624\uC2A4\uD1A0\uB9AC \uACF5\uC720", extra: {
                appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId,
                hashtags: ['mornya', '카카오스토리'],
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId,
                type: 'custom',
                value: {
                    templateId: 17349,
                    templateArgs: {
                        title: '카카오톡 공유하기로 파는 상품',
                        linkUrl: window.location.pathname.replace(/^\//, '') + window.location.search,
                        imageUrl0: 'https://heyboo.co.kr/web/product/big/201808/9eaacc90f41cb4fbe8aaa5cda79bc0d9.jpg',
                        imageUrl1: 'https://kimblog.co.kr/web/product/big/201810/757ef07410d8057d0f4e00aa33b98f2d.png',
                        imageUrl2: 'http://image2.lotteimall.com/goods/46/87/60/1296608746_L.jpg',
                        regularPrice: 12000,
                        discountPrice: 10000,
                        discountRate: 100 - Math.floor((10000 / 12000) * 100),
                    },
                },
                onComplete: function (isSuccess, response) {
                    console.log('KAKAO', isSuccess, response);
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Line, { title: "\uB77C\uC778 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].LinkedIn, { title: "\uB9C1\uD06C\uB4DC\uC778 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Naver, { title: "\uB124\uC774\uBC84 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].NaverBlog, { title: "\uB124\uC774\uBC84 \uBE14\uB85C\uADF8 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].SMS, { title: "SMS \uACF5\uC720", extra: { target: '+821011111111' } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Telegram, { title: "\uD154\uB808\uADF8\uB7A8 \uACF5\uC720", extra: { message: function () { return '아래와 같이 링크를 공유합니다.'; } } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Tumblr, { title: "\uD140\uBE14\uB7EC \uACF5\uC720", extra: { hashtags: ['mornya', '텀블러공유'] } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Twitter, { title: "\uD2B8\uC704\uD130 \uACF5\uC720", extra: { hashtags: ['mornya', '트위터공유'] } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Clipboard, { title: "\uD074\uB9BD\uBCF4\uB4DC \uBCF5\uC0AC", extra: { message: function () { return '복사된 메시지 입니다.'; } }, onComplete: function () { return alert('클립보드에 복사되었습니다.'); } })));
}


/***/ }),

/***/ "./src/components/WidgetButtons.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WidgetButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mornya/react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/configure.ts");



function WidgetButtons() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].FacebookLike, { extra: {
                    appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.facebook.appId,
                    pageUrl: 'https://developers.facebook.com/docs/plugins/',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].FlipboardFlipit, null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].KakaoStoryFollow, { extra: {
                    appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId,
                    subscribeChannelId: 'mornya',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].TumblrPost, { extra: { hashtags: ['mornya', '텀블러공유'] } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].TumblrFollow, { extra: { tumblelog: 'mornya' } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].TwitterFollow, { extra: {
                    screenName: '@mornyacom',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].TwitterMessage, { extra: {
                    screenName: '@mornyacom',
                    recipientId: '3805104374',
                    hashtags: ['mornya', '트위터메시지공유'],
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].TwitterTweet, { extra: { hashtags: ['mornya', '트위터공유', ''] } })),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].GoogleHangout, null))));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaGFyZUFuZFdpZGdldC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2hhcmVCdXR0b25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRCdXR0b25zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDc0I7QUFDRTtBQUN4QztBQUNmLFlBQVksbURBQW1CLFNBQVMsdUJBQXVCO0FBQy9ELFFBQVEsbURBQW1CLENBQUMsZ0VBQVk7QUFDeEMsUUFBUSxtREFBbUI7QUFDM0IsUUFBUSxtREFBbUIsQ0FBQyxpRUFBYTtBQUN6Qzs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDbUI7QUFDSjtBQUMvQjtBQUNmLFlBQVksbURBQW1CO0FBQy9CLFFBQVEsbURBQW1CLENBQUMsK0RBQUssUUFBUSw2Q0FBNkMsOEJBQThCLEVBQUU7QUFDdEgsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxTQUFTLHNDQUFzQztBQUNoRixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFlBQVkseURBQXlELFFBQVEsNERBQVMsd0JBQXdCLEVBQUU7QUFDakosUUFBUSxtREFBbUIsQ0FBQywrREFBSyxhQUFhLGlEQUFpRDtBQUMvRixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFNBQVMsc0NBQXNDO0FBQ2hGLFFBQVEsbURBQW1CLENBQUMsK0RBQUssbUJBQW1CLHdEQUF3RDtBQUM1RyxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGNBQWM7QUFDL0MsdUJBQXVCLDREQUFTO0FBQ2hDO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxhQUFhO0FBQzlDLHVCQUF1Qiw0REFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxRQUFRLHFDQUFxQztBQUM5RSxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFlBQVksaURBQWlEO0FBQzlGLFFBQVEsbURBQW1CLENBQUMsK0RBQUssU0FBUywyQ0FBMkM7QUFDckYsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxhQUFhLDhEQUE4RDtBQUM1RyxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLE9BQU8sb0NBQW9DLDBCQUEwQixFQUFFO0FBQ3hHLFFBQVEsbURBQW1CLENBQUMsK0RBQUssWUFBWSx5REFBeUQsdUJBQXVCLDRCQUE0QixFQUFFLEVBQUUsRUFBRTtBQUMvSixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFVBQVUsbURBQW1ELGdDQUFnQyxFQUFFO0FBQ2hJLFFBQVEsbURBQW1CLENBQUMsK0RBQUssV0FBVyxtREFBbUQsZ0NBQWdDLEVBQUU7QUFDakksUUFBUSxtREFBbUIsQ0FBQywrREFBSyxhQUFhLHlEQUF5RCx1QkFBdUIsdUJBQXVCLEVBQUUsRUFBRSwyQkFBMkIsZ0NBQWdDLEVBQUUsRUFBRTtBQUN4Tjs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ29CO0FBQ0w7QUFDL0I7QUFDZixZQUFZLG1EQUFtQjtBQUMvQixRQUFRLG1EQUFtQjtBQUMzQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGdCQUFnQjtBQUN0RCwyQkFBMkIsNERBQVM7QUFDcEM7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNO0FBQ3RDLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sb0JBQW9CO0FBQzFELDJCQUEyQiw0REFBUztBQUNwQztBQUNBLGlCQUFpQixFQUFFO0FBQ25CLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sY0FBYyxTQUFTLGdDQUFnQyxFQUFFO0FBQy9GLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sZ0JBQWdCLFNBQVMsc0JBQXNCLEVBQUU7QUFDdkYsWUFBWSxtREFBbUIsQ0FBQyxnRUFBTSxpQkFBaUI7QUFDdkQ7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGtCQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGdCQUFnQixTQUFTLG9DQUFvQyxFQUFFO0FBQ3JHLFFBQVEsbURBQW1CO0FBQzNCLFlBQVksbURBQW1CLENBQUMsZ0VBQU07QUFDdEMiLCJmaWxlIjoic2NyaXB0cy9jaHVuay0xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNoYXJlQnV0dG9ucyBmcm9tICdAL2NvbXBvbmVudHMvU2hhcmVCdXR0b25zJztcbmltcG9ydCBXaWRnZXRCdXR0b25zIGZyb20gJ0AvY29tcG9uZW50cy9XaWRnZXRCdXR0b25zJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoYXJlQW5kV2lkZ2V0KCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidG4tZ3JwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZUJ1dHRvbnMsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0QnV0dG9ucywgbnVsbCkpKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoYXJlIH0gZnJvbSAnQG1vcm55YS9yZWFjdC1zb2NpYWwtbGlicyc7XG5pbXBvcnQgQ29uZmlndXJlIGZyb20gJ0AvY29uc3RhbnRzL2NvbmZpZ3VyZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZUJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuQmFuZCwgeyB0aXRsZTogXCJcXHVCQzM0XFx1QjREQyBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYTogeyBoYXNodGFnczogWydyZWFjdCcsICdkZW1vJ10gfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5FbWFpbCwgeyB0aXRsZTogXCJlXFx1QkE1NFxcdUM3N0MgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5GYWNlYm9vaywgeyB0aXRsZTogXCJcXHVEMzk4XFx1Qzc3NFxcdUMyQTRcXHVCRDgxIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IGFwcElkOiBDb25maWd1cmUuc29jaWFsLmZhY2Vib29rLmFwcElkIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuRmxpcGJvYXJkLCB7IHRpdGxlOiBcIlxcdUQ1MENcXHVCOUJEXFx1QkNGNFxcdUI0REMgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5HbWFpbCwgeyB0aXRsZTogXCJHXFx1QkE1NFxcdUM3N0MgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5Hb29nbGVCb29rbWFya3MsIHsgdGl0bGU6IFwiXFx1QUQ2Q1xcdUFFMDAgXFx1QkQ4MVxcdUI5QzhcXHVEMDZDIFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9TdG9yeSwgeyB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVDMkE0XFx1RDFBMFxcdUI5QUMgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogQ29uZmlndXJlLnNvY2lhbC5rYWthby5hcHBJZCxcbiAgICAgICAgICAgICAgICBoYXNodGFnczogWydtb3JueWEnLCAn7Lm07Lm07Jik7Iqk7Yag66asJ10sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IENvbmZpZ3VyZS5zb2NpYWwua2FrYW8uYXBwSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVJZDogMTczNDksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQXJnczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsubTsubTsmKTthqEg6rO17Jyg7ZWY6riw66GcIO2MjOuKlCDsg4HtkognLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1VybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwwOiAnaHR0cHM6Ly9oZXlib28uY28ua3Ivd2ViL3Byb2R1Y3QvYmlnLzIwMTgwOC85ZWFhY2M5MGY0MWNiNGZiZThhYWE1Y2RhNzliYzBkOS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwxOiAnaHR0cHM6Ly9raW1ibG9nLmNvLmtyL3dlYi9wcm9kdWN0L2JpZy8yMDE4MTAvNzU3ZWYwNzQxMGQ4MDU3ZDBmNGUwMGFhMzNiOThmMmQucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMjogJ2h0dHA6Ly9pbWFnZTIubG90dGVpbWFsbC5jb20vZ29vZHMvNDYvODcvNjAvMTI5NjYwODc0Nl9MLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWd1bGFyUHJpY2U6IDEyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRQcmljZTogMTAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFJhdGU6IDEwMCAtIE1hdGguZmxvb3IoKDEwMDAwIC8gMTIwMDApICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIChpc1N1Y2Nlc3MsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdLQUtBTycsIGlzU3VjY2VzcywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkxpbmUsIHsgdGl0bGU6IFwiXFx1Qjc3Q1xcdUM3NzggXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5MaW5rZWRJbiwgeyB0aXRsZTogXCJcXHVCOUMxXFx1RDA2Q1xcdUI0RENcXHVDNzc4IFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuTmF2ZXIsIHsgdGl0bGU6IFwiXFx1QjEyNFxcdUM3NzRcXHVCQzg0IFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuTmF2ZXJCbG9nLCB7IHRpdGxlOiBcIlxcdUIxMjRcXHVDNzc0XFx1QkM4NCBcXHVCRTE0XFx1Qjg1Q1xcdUFERjggXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5TTVMsIHsgdGl0bGU6IFwiU01TIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IHRhcmdldDogJys4MjEwMTExMTExMTEnIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuVGVsZWdyYW0sIHsgdGl0bGU6IFwiXFx1RDE1NFxcdUI4MDhcXHVBREY4XFx1QjdBOCBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYTogeyBtZXNzYWdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAn7JWE656Y7JmAIOqwmeydtCDrp4Htgazrpbwg6rO17Jyg7ZWp64uI64ukLic7IH0gfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5UdW1ibHIsIHsgdGl0bGU6IFwiXFx1RDE0MFxcdUJFMTRcXHVCN0VDIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IGhhc2h0YWdzOiBbJ21vcm55YScsICfthYDruJTrn6zqs7XsnKAnXSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLlR3aXR0ZXIsIHsgdGl0bGU6IFwiXFx1RDJCOFxcdUM3MDRcXHVEMTMwIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IGhhc2h0YWdzOiBbJ21vcm55YScsICftirjsnITthLDqs7XsnKAnXSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkNsaXBib2FyZCwgeyB0aXRsZTogXCJcXHVEMDc0XFx1QjlCRFxcdUJDRjRcXHVCNERDIFxcdUJDRjVcXHVDMEFDXCIsIGV4dHJhOiB7IG1lc3NhZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICfrs7XsgqzrkJwg66mU7Iuc7KeAIOyeheuLiOuLpC4nOyB9IH0sIG9uQ29tcGxldGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFsZXJ0KCftgbTrpr3rs7Trk5zsl5Ag67O17IKs65CY7JeI7Iq164uI64ukLicpOyB9IH0pKSk7XG59XG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICdAbW9ybnlhL3JlYWN0LXNvY2lhbC1saWJzJztcbmltcG9ydCBDb25maWd1cmUgZnJvbSAnQC9jb25zdGFudHMvY29uZmlndXJlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldEJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LkZhY2Vib29rTGlrZSwgeyBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICBhcHBJZDogQ29uZmlndXJlLnNvY2lhbC5mYWNlYm9vay5hcHBJZCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zLycsXG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LkZsaXBib2FyZEZsaXBpdCwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5LYWthb1N0b3J5Rm9sbG93LCB7IGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiBDb25maWd1cmUuc29jaWFsLmtha2FvLmFwcElkLFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVDaGFubmVsSWQ6ICdtb3JueWEnLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5UdW1ibHJQb3N0LCB7IGV4dHJhOiB7IGhhc2h0YWdzOiBbJ21vcm55YScsICfthYDruJTrn6zqs7XsnKAnXSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuVHVtYmxyRm9sbG93LCB7IGV4dHJhOiB7IHR1bWJsZWxvZzogJ21vcm55YScgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LlR3aXR0ZXJGb2xsb3csIHsgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuTmFtZTogJ0Btb3JueWFjb20nLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5Ud2l0dGVyTWVzc2FnZSwgeyBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lOiAnQG1vcm55YWNvbScsXG4gICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudElkOiAnMzgwNTEwNDM3NCcsXG4gICAgICAgICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ21vcm55YScsICftirjsnITthLDrqZTsi5zsp4Dqs7XsnKAnXSxcbiAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuVHdpdHRlclR3ZWV0LCB7IGV4dHJhOiB7IGhhc2h0YWdzOiBbJ21vcm55YScsICftirjsnITthLDqs7XsnKAnLCAnJ10gfSB9KSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0Lkdvb2dsZUhhbmdvdXQsIG51bGwpKSkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==