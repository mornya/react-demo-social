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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaGFyZUFuZFdpZGdldC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2hhcmVCdXR0b25zLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XaWRnZXRCdXR0b25zLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ29CO0FBQ0U7QUFDdEM7QUFDZixZQUFZLG1EQUFtQixTQUFTLHVCQUF1QjtBQUMvRCxRQUFRLG1EQUFtQixDQUFDLCtEQUFZO0FBQ3hDLFFBQVEsbURBQW1CO0FBQzNCLFFBQVEsbURBQW1CLENBQUMsZ0VBQWE7QUFDekM7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNtQjtBQUNOO0FBQzdCO0FBQ2YsWUFBWSxtREFBbUI7QUFDL0IsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxRQUFRLDZDQUE2Qyw4QkFBOEIsRUFBRTtBQUN0SCxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFNBQVMsc0NBQXNDO0FBQ2hGLFFBQVEsbURBQW1CLENBQUMsK0RBQUssWUFBWSx5REFBeUQsUUFBUSwyREFBUyx3QkFBd0IsRUFBRTtBQUNqSixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWEsaURBQWlEO0FBQy9GLFFBQVEsbURBQW1CLENBQUMsK0RBQUssU0FBUyxzQ0FBc0M7QUFDaEYsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxtQkFBbUIsd0RBQXdEO0FBQzVHLFFBQVEsbURBQW1CLENBQUMsK0RBQUssY0FBYztBQUMvQyx1QkFBdUIsMkRBQVM7QUFDaEM7QUFDQSxhQUFhLEVBQUU7QUFDZixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWE7QUFDOUMsdUJBQXVCLDJEQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLFFBQVEscUNBQXFDO0FBQzlFLFFBQVEsbURBQW1CLENBQUMsK0RBQUssWUFBWSxpREFBaUQ7QUFDOUYsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxTQUFTLDJDQUEyQztBQUNyRixRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWEsOERBQThEO0FBQzVHLFFBQVEsbURBQW1CLENBQUMsK0RBQUssT0FBTyxvQ0FBb0MsMEJBQTBCLEVBQUU7QUFDeEcsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxZQUFZLHlEQUF5RCx1QkFBdUIsNEJBQTRCLEVBQUUsRUFBRSxFQUFFO0FBQy9KLFFBQVEsbURBQW1CLENBQUMsK0RBQUssVUFBVSxtREFBbUQsZ0NBQWdDLEVBQUU7QUFDaEksUUFBUSxtREFBbUIsQ0FBQywrREFBSyxXQUFXLG1EQUFtRCxnQ0FBZ0MsRUFBRTtBQUNqSSxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWEseURBQXlELHVCQUF1Qix1QkFBdUIsRUFBRSxFQUFFLDJCQUEyQixnQ0FBZ0MsRUFBRSxFQUFFO0FBQ3hOOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ29CO0FBQ1A7QUFDN0I7QUFDZixZQUFZLG1EQUFtQjtBQUMvQixRQUFRLG1EQUFtQjtBQUMzQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGdCQUFnQjtBQUN0RCwyQkFBMkIsMkRBQVM7QUFDcEM7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNO0FBQ3RDLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sb0JBQW9CO0FBQzFELDJCQUEyQiwyREFBUztBQUNwQztBQUNBLGlCQUFpQixFQUFFO0FBQ25CLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sY0FBYyxTQUFTLGdDQUFnQyxFQUFFO0FBQy9GLFlBQVksbURBQW1CLENBQUMsZ0VBQU0sZ0JBQWdCLFNBQVMsc0JBQXNCLEVBQUU7QUFDdkYsWUFBWSxtREFBbUIsQ0FBQyxnRUFBTSxpQkFBaUI7QUFDdkQ7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGtCQUFrQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLG1EQUFtQixDQUFDLGdFQUFNLGdCQUFnQixTQUFTLG9DQUFvQyxFQUFFO0FBQ3JHLFFBQVEsbURBQW1CO0FBQzNCLFlBQVksbURBQW1CLENBQUMsZ0VBQU07QUFDdEMiLCJmaWxlIjoic2NyaXB0cy8xLTk4YmZiYjNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNoYXJlQnV0dG9ucyBmcm9tICdjb21wb25lbnRzL1NoYXJlQnV0dG9ucyc7XG5pbXBvcnQgV2lkZ2V0QnV0dG9ucyBmcm9tICdjb21wb25lbnRzL1dpZGdldEJ1dHRvbnMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmVBbmRXaWRnZXQoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ0bi1ncnBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlQnV0dG9ucywgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXRCdXR0b25zLCBudWxsKSkpO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2hhcmUgfSBmcm9tICdAbW9ybnlhL3JlYWN0LXNvY2lhbC1saWJzJztcbmltcG9ydCBDb25maWd1cmUgZnJvbSAnY29uc3RhbnRzL2NvbmZpZ3VyZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZUJ1dHRvbnMoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuQmFuZCwgeyB0aXRsZTogXCJcXHVCQzM0XFx1QjREQyBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYTogeyBoYXNodGFnczogWydyZWFjdCcsICdkZW1vJ10gfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5FbWFpbCwgeyB0aXRsZTogXCJlXFx1QkE1NFxcdUM3N0MgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5GYWNlYm9vaywgeyB0aXRsZTogXCJcXHVEMzk4XFx1Qzc3NFxcdUMyQTRcXHVCRDgxIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IGFwcElkOiBDb25maWd1cmUuc29jaWFsLmZhY2Vib29rLmFwcElkIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuRmxpcGJvYXJkLCB7IHRpdGxlOiBcIlxcdUQ1MENcXHVCOUJEXFx1QkNGNFxcdUI0REMgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5HbWFpbCwgeyB0aXRsZTogXCJHXFx1QkE1NFxcdUM3N0MgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5Hb29nbGVCb29rbWFya3MsIHsgdGl0bGU6IFwiXFx1QUQ2Q1xcdUFFMDAgXFx1QkQ4MVxcdUI5QzhcXHVEMDZDIFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9TdG9yeSwgeyB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVDMkE0XFx1RDFBMFxcdUI5QUMgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogQ29uZmlndXJlLnNvY2lhbC5rYWthby5hcHBJZCxcbiAgICAgICAgICAgICAgICBoYXNodGFnczogWydtb3JueWEnLCAn7Lm07Lm07Jik7Iqk7Yag66asJ10sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IENvbmZpZ3VyZS5zb2NpYWwua2FrYW8uYXBwSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVJZDogMTczNDksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQXJnczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsubTsubTsmKTthqEg6rO17Jyg7ZWY6riw66GcIO2MjOuKlCDsg4HtkognLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1VybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwwOiAnaHR0cHM6Ly9oZXlib28uY28ua3Ivd2ViL3Byb2R1Y3QvYmlnLzIwMTgwOC85ZWFhY2M5MGY0MWNiNGZiZThhYWE1Y2RhNzliYzBkOS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwxOiAnaHR0cHM6Ly9raW1ibG9nLmNvLmtyL3dlYi9wcm9kdWN0L2JpZy8yMDE4MTAvNzU3ZWYwNzQxMGQ4MDU3ZDBmNGUwMGFhMzNiOThmMmQucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMjogJ2h0dHA6Ly9pbWFnZTIubG90dGVpbWFsbC5jb20vZ29vZHMvNDYvODcvNjAvMTI5NjYwODc0Nl9MLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWd1bGFyUHJpY2U6IDEyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRQcmljZTogMTAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFJhdGU6IDEwMCAtIE1hdGguZmxvb3IoKDEwMDAwIC8gMTIwMDApICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIChyZXN1bHQsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignS0FLQU8nLCByZXN1bHQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5MaW5lLCB7IHRpdGxlOiBcIlxcdUI3N0NcXHVDNzc4IFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuTGlua2VkSW4sIHsgdGl0bGU6IFwiXFx1QjlDMVxcdUQwNkNcXHVCNERDXFx1Qzc3OCBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLk5hdmVyLCB7IHRpdGxlOiBcIlxcdUIxMjRcXHVDNzc0XFx1QkM4NCBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLk5hdmVyQmxvZywgeyB0aXRsZTogXCJcXHVCMTI0XFx1Qzc3NFxcdUJDODQgXFx1QkUxNFxcdUI4NUNcXHVBREY4IFxcdUFDRjVcXHVDNzIwXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuU01TLCB7IHRpdGxlOiBcIlNNUyBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYTogeyB0YXJnZXQ6ICcrODIxMDExMTExMTExJyB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLlRlbGVncmFtLCB7IHRpdGxlOiBcIlxcdUQxNTRcXHVCODA4XFx1QURGOFxcdUI3QTggXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgbWVzc2FnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ+yVhOuemOyZgCDqsJnsnbQg66eB7YGs66W8IOqzteycoO2VqeuLiOuLpC4nOyB9IH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuVHVtYmxyLCB7IHRpdGxlOiBcIlxcdUQxNDBcXHVCRTE0XFx1QjdFQyBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYTogeyBoYXNodGFnczogWydtb3JueWEnLCAn7YWA67iU65+s6rO17JygJ10gfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5Ud2l0dGVyLCB7IHRpdGxlOiBcIlxcdUQyQjhcXHVDNzA0XFx1RDEzMCBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYTogeyBoYXNodGFnczogWydtb3JueWEnLCAn7Yq47JyE7YSw6rO17JygJ10gfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5DbGlwYm9hcmQsIHsgdGl0bGU6IFwiXFx1RDA3NFxcdUI5QkRcXHVCQ0Y0XFx1QjREQyBcXHVCQ0Y1XFx1QzBBQ1wiLCBleHRyYTogeyBtZXNzYWdlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAn67O17IKs65CcIOuplOyLnOyngCDsnoXri4jri6QuJzsgfSB9LCBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBhbGVydCgn7YG066a967O065Oc7JeQIOuzteyCrOuQmOyXiOyKteuLiOuLpC4nKTsgfSB9KSkpO1xufVxuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnQG1vcm55YS9yZWFjdC1zb2NpYWwtbGlicyc7XG5pbXBvcnQgQ29uZmlndXJlIGZyb20gJ2NvbnN0YW50cy9jb25maWd1cmUnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2lkZ2V0QnV0dG9ucygpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuRmFjZWJvb2tMaWtlLCB7IGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiBDb25maWd1cmUuc29jaWFsLmZhY2Vib29rLmFwcElkLFxuICAgICAgICAgICAgICAgICAgICBwYWdlVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvJyxcbiAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuRmxpcGJvYXJkRmxpcGl0LCBudWxsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0Lktha2FvU3RvcnlGb2xsb3csIHsgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IENvbmZpZ3VyZS5zb2NpYWwua2FrYW8uYXBwSWQsXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZUNoYW5uZWxJZDogJ21vcm55YScsXG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LlR1bWJsclBvc3QsIHsgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2FgOu4lOufrOqzteycoCddIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5UdW1ibHJGb2xsb3csIHsgZXh0cmE6IHsgdHVtYmxlbG9nOiAnbW9ybnlhJyB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuVHdpdHRlckZvbGxvdywgeyBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lOiAnQG1vcm55YWNvbScsXG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LlR3aXR0ZXJNZXNzYWdlLCB7IGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU6ICdAbW9ybnlhY29tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50SWQ6ICczODA1MTA0Mzc0JyxcbiAgICAgICAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2KuOychO2EsOuplOyLnOyngOqzteycoCddLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5Ud2l0dGVyVHdlZXQsIHsgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2KuOychO2EsOqzteycoCcsICcnXSB9IH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuR29vZ2xlSGFuZ291dCwgbnVsbCkpKSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9