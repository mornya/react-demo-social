(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/ShareAndWidget.jsx":
/*!*******************************************!*\
  !*** ./src/components/ShareAndWidget.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareAndWidget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ShareButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ShareButtons */ "./src/components/ShareButtons.jsx");
/* harmony import */ var components_WidgetButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/WidgetButtons */ "./src/components/WidgetButtons.jsx");



function ShareAndWidget() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "btn-grp" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_ShareButtons__WEBPACK_IMPORTED_MODULE_1__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_WidgetButtons__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}


/***/ }),

/***/ "./src/components/ShareButtons.jsx":
/*!*****************************************!*\
  !*** ./src/components/ShareButtons.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mornya/react-social-libs */ "../../vessel/mornya-react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/configure */ "./src/constants/configure.js");



function ShareButtons() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Band, { title: "\uBC34\uB4DC \uACF5\uC720", extra: { hashtags: ['react', 'demo'] } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Email, { title: "e\uBA54\uC77C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Facebook, { title: "\uD398\uC774\uC2A4\uBD81 \uACF5\uC720", extra: { appId: constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.facebook.appId } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Flipboard, { title: "\uD50C\uB9BD\uBCF4\uB4DC \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].Gmail, { title: "G\uBA54\uC77C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].GoogleBookmarks, { title: "\uAD6C\uAE00 \uBD81\uB9C8\uD06C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoStory, { title: "\uCE74\uCE74\uC624\uC2A4\uD1A0\uB9AC \uACF5\uC720", extra: {
                appId: constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId,
                hashtags: ['mornya', '카카오스토리'],
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId,
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
                onComplete: function (result, response) {
                    console.warn('KAKAO', result, response);
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

/***/ "./src/components/WidgetButtons.jsx":
/*!******************************************!*\
  !*** ./src/components/WidgetButtons.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WidgetButtons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mornya/react-social-libs */ "../../vessel/mornya-react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/configure */ "./src/constants/configure.js");



function WidgetButtons() {
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].FacebookLike, { extra: {
                    appId: constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.facebook.appId,
                    pageUrl: 'https://developers.facebook.com/docs/plugins/',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].FlipboardFlipit, null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Widget"].KakaoStoryFollow, { extra: {
                    appId: constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaGFyZUFuZFdpZGdldC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2hhcmVCdXR0b25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRCdXR0b25zLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ29CO0FBQ0U7QUFDdEM7QUFDZixZQUFZLG1EQUFtQixTQUFTLHVCQUF1QjtBQUMvRCxRQUFRLG1EQUFtQixDQUFDLCtEQUFZO0FBQ3hDLFFBQVEsbURBQW1CO0FBQzNCLFFBQVEsbURBQW1CLENBQUMsZ0VBQWE7QUFDekM7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNtQjtBQUNOO0FBQzdCO0FBQ2YsWUFBWSxtREFBbUI7QUFDL0IsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxRQUFRLDZDQUE2Qyw4QkFBOEIsRUFBRTtBQUN0SCxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFNBQVMsc0NBQXNDO0FBQ2hGLFFBQVEsbURBQW1CLENBQUMsK0RBQUssWUFBWSx5REFBeUQsUUFBUSwyREFBUyx3QkFBd0IsRUFBRTtBQUNqSixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWEsaURBQWlEO0FBQy9GLFFBQVEsbURBQW1CLENBQUMsK0RBQUssU0FBUyxzQ0FBc0M7QUFDaEYsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxtQkFBbUIsd0RBQXdEO0FBQzVHLFFBQVEsbURBQW1CLENBQUMsK0RBQUssY0FBYztBQUMvQyx1QkFBdUIsMkRBQVM7QUFDaEM7QUFDQSxhQUFhLEVBQUU7QUFDZixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWE7QUFDOUMsdUJBQXVCLDJEQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFFBQVEscUNBQXFDO0FBQzlFLFFBQVEsbURBQW1CLENBQUMsK0RBQUssWUFBWSxpREFBaUQ7QUFDOUYsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxTQUFTLDJDQUEyQztBQUNyRixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWEsOERBQThEO0FBQzVHLFFBQVEsbURBQW1CLENBQUMsK0RBQUssT0FBTyxvQ0FBb0MsMEJBQTBCLEVBQUU7QUFDeEcsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxZQUFZLHlEQUF5RCx1QkFBdUIsNEJBQTRCLEVBQUUsRUFBRSxFQUFFO0FBQy9KLFFBQVEsbURBQW1CLENBQUMsK0RBQUssVUFBVSxtREFBbUQsZ0NBQWdDLEVBQUU7QUFDaEksUUFBUSxtREFBbUIsQ0FBQywrREFBSyxXQUFXLG1EQUFtRCxnQ0FBZ0MsRUFBRTtBQUNqSSxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWEseURBQXlELHVCQUF1Qix1QkFBdUIsRUFBRSxFQUFFLDJCQUEyQixnQ0FBZ0MsRUFBRSxFQUFFO0FBQ3hOOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ29CO0FBQ1A7QUFDN0I7QUFDZixZQUFZLG1EQUFtQjtBQUMvQixRQUFRLG1EQUFtQjtBQUMzQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGdCQUFnQjtBQUN0RCwyQkFBMkIsMkRBQVM7QUFDcEM7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNO0FBQ3RDLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sb0JBQW9CO0FBQzFELDJCQUEyQiwyREFBUztBQUNwQztBQUNBLGlCQUFpQixFQUFFO0FBQ25CLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sY0FBYyxTQUFTLGdDQUFnQyxFQUFFO0FBQy9GLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sZ0JBQWdCLFNBQVMsc0JBQXNCLEVBQUU7QUFDdkYsWUFBWSxtREFBbUIsQ0FBQyxnRUFBTSxpQkFBaUI7QUFDdkQ7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGtCQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGdCQUFnQixTQUFTLG9DQUFvQyxFQUFFO0FBQ3JHLFFBQVEsbURBQW1CO0FBQzNCLFlBQVksbURBQW1CLENBQUMsZ0VBQU07QUFDdEMiLCJmaWxlIjoiMS05OGJmYmIzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTaGFyZUJ1dHRvbnMgZnJvbSAnY29tcG9uZW50cy9TaGFyZUJ1dHRvbnMnO1xuaW1wb3J0IFdpZGdldEJ1dHRvbnMgZnJvbSAnY29tcG9uZW50cy9XaWRnZXRCdXR0b25zJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoYXJlQW5kV2lkZ2V0KCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidG4tZ3JwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZUJ1dHRvbnMsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0QnV0dG9ucywgbnVsbCkpKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNoYXJlIH0gZnJvbSAnQG1vcm55YS9yZWFjdC1zb2NpYWwtbGlicyc7XG5pbXBvcnQgQ29uZmlndXJlIGZyb20gJ2NvbnN0YW50cy9jb25maWd1cmUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmVCdXR0b25zKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkJhbmQsIHsgdGl0bGU6IFwiXFx1QkMzNFxcdUI0REMgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgaGFzaHRhZ3M6IFsncmVhY3QnLCAnZGVtbyddIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuRW1haWwsIHsgdGl0bGU6IFwiZVxcdUJBNTRcXHVDNzdDIFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuRmFjZWJvb2ssIHsgdGl0bGU6IFwiXFx1RDM5OFxcdUM3NzRcXHVDMkE0XFx1QkQ4MSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYTogeyBhcHBJZDogQ29uZmlndXJlLnNvY2lhbC5mYWNlYm9vay5hcHBJZCB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkZsaXBib2FyZCwgeyB0aXRsZTogXCJcXHVENTBDXFx1QjlCRFxcdUJDRjRcXHVCNERDIFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuR21haWwsIHsgdGl0bGU6IFwiR1xcdUJBNTRcXHVDNzdDIFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuR29vZ2xlQm9va21hcmtzLCB7IHRpdGxlOiBcIlxcdUFENkNcXHVBRTAwIFxcdUJEODFcXHVCOUM4XFx1RDA2QyBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvU3RvcnksIHsgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1QzJBNFxcdUQxQTBcXHVCOUFDIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IENvbmZpZ3VyZS5zb2NpYWwua2FrYW8uYXBwSWQsXG4gICAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+y5tOy5tOyYpOyKpO2GoOumrCddLFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5LYWthb1RhbGssIHsgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBDb25maWd1cmUuc29jaWFsLmtha2FvLmFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQ6IDE3MzQ5LFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Lm07Lm07Jik7YahIOqzteycoO2VmOq4sOuhnCDtjIzripQg7IOB7ZKIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtVcmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMDogJ2h0dHBzOi8vaGV5Ym9vLmNvLmtyL3dlYi9wcm9kdWN0L2JpZy8yMDE4MDgvOWVhYWNjOTBmNDFjYjRmYmU4YWFhNWNkYTc5YmMwZDkuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMTogJ2h0dHBzOi8va2ltYmxvZy5jby5rci93ZWIvcHJvZHVjdC9iaWcvMjAxODEwLzc1N2VmMDc0MTBkODA1N2QwZjRlMDBhYTMzYjk4ZjJkLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDI6ICdodHRwOi8vaW1hZ2UyLmxvdHRlaW1hbGwuY29tL2dvb2RzLzQ2Lzg3LzYwLzEyOTY2MDg3NDZfTC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVndWxhclByaWNlOiAxMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UHJpY2U6IDEwMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRSYXRlOiAxMDAgLSBNYXRoLmZsb29yKCgxMDAwMCAvIDEyMDAwKSAqIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAocmVzdWx0LCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0tBS0FPJywgcmVzdWx0LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuTGluZSwgeyB0aXRsZTogXCJcXHVCNzdDXFx1Qzc3OCBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkxpbmtlZEluLCB7IHRpdGxlOiBcIlxcdUI5QzFcXHVEMDZDXFx1QjREQ1xcdUM3NzggXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5OYXZlciwgeyB0aXRsZTogXCJcXHVCMTI0XFx1Qzc3NFxcdUJDODQgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5OYXZlckJsb2csIHsgdGl0bGU6IFwiXFx1QjEyNFxcdUM3NzRcXHVCQzg0IFxcdUJFMTRcXHVCODVDXFx1QURGOCBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLlNNUywgeyB0aXRsZTogXCJTTVMgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgdGFyZ2V0OiAnKzgyMTAxMTExMTExMScgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5UZWxlZ3JhbSwgeyB0aXRsZTogXCJcXHVEMTU0XFx1QjgwOFxcdUFERjhcXHVCN0E4IFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IG1lc3NhZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICfslYTrnpjsmYAg6rCZ7J20IOunge2BrOulvCDqs7XsnKDtlanri4jri6QuJzsgfSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLlR1bWJsciwgeyB0aXRsZTogXCJcXHVEMTQwXFx1QkUxNFxcdUI3RUMgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2FgOu4lOufrOqzteycoCddIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuVHdpdHRlciwgeyB0aXRsZTogXCJcXHVEMkI4XFx1QzcwNFxcdUQxMzAgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2KuOychO2EsOqzteycoCddIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuQ2xpcGJvYXJkLCB7IHRpdGxlOiBcIlxcdUQwNzRcXHVCOUJEXFx1QkNGNFxcdUI0REMgXFx1QkNGNVxcdUMwQUNcIiwgZXh0cmE6IHsgbWVzc2FnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ+uzteyCrOuQnCDrqZTsi5zsp4Ag7J6F64uI64ukLic7IH0gfSwgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWxlcnQoJ+2BtOumveuztOuTnOyXkCDrs7XsgqzrkJjsl4jsirXri4jri6QuJyk7IH0gfSkpKTtcbn1cbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJ0Btb3JueWEvcmVhY3Qtc29jaWFsLWxpYnMnO1xuaW1wb3J0IENvbmZpZ3VyZSBmcm9tICdjb25zdGFudHMvY29uZmlndXJlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldEJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LkZhY2Vib29rTGlrZSwgeyBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICBhcHBJZDogQ29uZmlndXJlLnNvY2lhbC5mYWNlYm9vay5hcHBJZCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZVVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9wbHVnaW5zLycsXG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LkZsaXBib2FyZEZsaXBpdCwgbnVsbCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5LYWthb1N0b3J5Rm9sbG93LCB7IGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiBDb25maWd1cmUuc29jaWFsLmtha2FvLmFwcElkLFxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVDaGFubmVsSWQ6ICdtb3JueWEnLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5UdW1ibHJQb3N0LCB7IGV4dHJhOiB7IGhhc2h0YWdzOiBbJ21vcm55YScsICfthYDruJTrn6zqs7XsnKAnXSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuVHVtYmxyRm9sbG93LCB7IGV4dHJhOiB7IHR1bWJsZWxvZzogJ21vcm55YScgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LlR3aXR0ZXJGb2xsb3csIHsgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuTmFtZTogJ0Btb3JueWFjb20nLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5Ud2l0dGVyTWVzc2FnZSwgeyBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lOiAnQG1vcm55YWNvbScsXG4gICAgICAgICAgICAgICAgICAgIHJlY2lwaWVudElkOiAnMzgwNTEwNDM3NCcsXG4gICAgICAgICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ21vcm55YScsICftirjsnITthLDrqZTsi5zsp4Dqs7XsnKAnXSxcbiAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuVHdpdHRlclR3ZWV0LCB7IGV4dHJhOiB7IGhhc2h0YWdzOiBbJ21vcm55YScsICftirjsnITthLDqs7XsnKAnLCAnJ10gfSB9KSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0Lkdvb2dsZUhhbmdvdXQsIG51bGwpKSkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==