(self["webpackChunkreact_demo_social"] = self["webpackChunkreact_demo_social"] || []).push([["src_components_ShareAndWidget_tsx"],{

/***/ "./src/components/ShareAndWidget.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ShareButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/ShareButtons.tsx");
/* harmony import */ var _components_WidgetButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/WidgetButtons.tsx");



var ShareAndWidget = function (_props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "btn-grp" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShareButtons__WEBPACK_IMPORTED_MODULE_1__.default, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_WidgetButtons__WEBPACK_IMPORTED_MODULE_2__.default, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareAndWidget);


/***/ }),

/***/ "./src/components/ShareButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mornya/react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/configure.ts");



var ShareButtons = function (_props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Band, { title: "\uBC34\uB4DC \uACF5\uC720", extra: { hashtags: ['react', 'demo'] } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Email, { title: "e\uBA54\uC77C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Facebook, { title: "\uD398\uC774\uC2A4\uBD81 \uACF5\uC720", extra: { appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.facebook.appId } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Flipboard, { title: "\uD50C\uB9BD\uBCF4\uB4DC \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Gmail, { title: "G\uBA54\uC77C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.GoogleBookmarks, { title: "\uAD6C\uAE00 \uBD81\uB9C8\uD06C \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoStory, { title: "\uCE74\uCE74\uC624\uC2A4\uD1A0\uB9AC \uACF5\uC720", extra: {
                appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.kakao.appId,
                hashtags: ['mornya', '카카오스토리'],
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.kakao.appId,
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Line, { title: "\uB77C\uC778 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.LinkedIn, { title: "\uB9C1\uD06C\uB4DC\uC778 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Naver, { title: "\uB124\uC774\uBC84 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.NaverBlog, { title: "\uB124\uC774\uBC84 \uBE14\uB85C\uADF8 \uACF5\uC720" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.SMS, { title: "SMS \uACF5\uC720", extra: { target: '+821011111111' } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Telegram, { title: "\uD154\uB808\uADF8\uB7A8 \uACF5\uC720", extra: { message: function () { return '아래와 같이 링크를 공유합니다.'; } } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Tumblr, { title: "\uD140\uBE14\uB7EC \uACF5\uC720", extra: { hashtags: ['mornya', '텀블러공유'] } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Twitter, { title: "\uD2B8\uC704\uD130 \uACF5\uC720", extra: { hashtags: ['mornya', '트위터공유'] } }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.Clipboard, { title: "\uD074\uB9BD\uBCF4\uB4DC \uBCF5\uC0AC", extra: { message: function () { return '복사된 메시지 입니다.'; } }, onComplete: function () { return alert('클립보드에 복사되었습니다.'); } })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButtons);


/***/ }),

/***/ "./src/components/WidgetButtons.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mornya/react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/configure.ts");



var WidgetButtons = function (_props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.FacebookLike, { extra: {
                    appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.facebook.appId,
                    pageUrl: 'https://developers.facebook.com/docs/plugins/',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.FlipboardFlipit, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.KakaoStoryFollow, { extra: {
                    appId: _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.kakao.appId,
                    subscribeChannelId: 'mornya',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.TumblrPost, { extra: { hashtags: ['mornya', '텀블러공유'] } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.TumblrFollow, { extra: { tumblelog: 'mornya' } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.TwitterFollow, { extra: {
                    screenName: '@mornyacom',
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.TwitterMessage, { extra: {
                    screenName: '@mornyacom',
                    recipientId: '3805104374',
                    hashtags: ['mornya', '트위터메시지공유'],
                } }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.TwitterTweet, { extra: { hashtags: ['mornya', '트위터공유', ''] } })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Widget.GoogleHangout, null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetButtons);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1kZW1vLXNvY2lhbC8uL3NyYy9jb21wb25lbnRzL1NoYXJlQW5kV2lkZ2V0LnRzeCIsIndlYnBhY2s6Ly9yZWFjdC1kZW1vLXNvY2lhbC8uL3NyYy9jb21wb25lbnRzL1NoYXJlQnV0dG9ucy50c3giLCJ3ZWJwYWNrOi8vcmVhY3QtZGVtby1zb2NpYWwvLi9zcmMvY29tcG9uZW50cy9XaWRnZXRCdXR0b25zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUMyQjtBQUNFO0FBQ3ZEO0FBQ0EsWUFBWSwwREFBbUIsU0FBUyx1QkFBdUI7QUFDL0QsUUFBUSwwREFBbUIsQ0FBQyw2REFBWTtBQUN4QyxRQUFRLDBEQUFtQjtBQUMzQixRQUFRLDBEQUFtQixDQUFDLDhEQUFhO0FBQ3pDO0FBQ0EsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUSjtBQUN3QjtBQUNKO0FBQzlDO0FBQ0EsWUFBWSwwREFBbUI7QUFDL0IsUUFBUSwwREFBbUIsQ0FBQyxpRUFBVSxHQUFHLDZDQUE2Qyw4QkFBOEIsRUFBRTtBQUN0SCxRQUFRLDBEQUFtQixDQUFDLGtFQUFXLEdBQUcsc0NBQXNDO0FBQ2hGLFFBQVEsMERBQW1CLENBQUMscUVBQWMsR0FBRyx5REFBeUQsUUFBUSwrRUFBK0IsRUFBRSxFQUFFO0FBQ2pKLFFBQVEsMERBQW1CLENBQUMsc0VBQWUsR0FBRyxpREFBaUQ7QUFDL0YsUUFBUSwwREFBbUIsQ0FBQyxrRUFBVyxHQUFHLHNDQUFzQztBQUNoRixRQUFRLDBEQUFtQixDQUFDLDRFQUFxQixHQUFHLHdEQUF3RDtBQUM1RyxRQUFRLDBEQUFtQixDQUFDLHVFQUFnQixHQUFHO0FBQy9DLHVCQUF1Qiw0RUFBNEI7QUFDbkQ7QUFDQSxhQUFhLEVBQUU7QUFDZixRQUFRLDBEQUFtQixDQUFDLHNFQUFlLEdBQUc7QUFDOUMsdUJBQXVCLDRFQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSwwREFBbUIsQ0FBQyxpRUFBVSxHQUFHLHFDQUFxQztBQUM5RSxRQUFRLDBEQUFtQixDQUFDLHFFQUFjLEdBQUcsaURBQWlEO0FBQzlGLFFBQVEsMERBQW1CLENBQUMsa0VBQVcsR0FBRywyQ0FBMkM7QUFDckYsUUFBUSwwREFBbUIsQ0FBQyxzRUFBZSxHQUFHLDhEQUE4RDtBQUM1RyxRQUFRLDBEQUFtQixDQUFDLGdFQUFTLEdBQUcsb0NBQW9DLDBCQUEwQixFQUFFO0FBQ3hHLFFBQVEsMERBQW1CLENBQUMscUVBQWMsR0FBRyx5REFBeUQsdUJBQXVCLDRCQUE0QixFQUFFLEVBQUUsRUFBRTtBQUMvSixRQUFRLDBEQUFtQixDQUFDLG1FQUFZLEdBQUcsbURBQW1ELGdDQUFnQyxFQUFFO0FBQ2hJLFFBQVEsMERBQW1CLENBQUMsb0VBQWEsR0FBRyxtREFBbUQsZ0NBQWdDLEVBQUU7QUFDakksUUFBUSwwREFBbUIsQ0FBQyxzRUFBZSxHQUFHLHlEQUF5RCx1QkFBdUIsdUJBQXVCLEVBQUUsRUFBRSwyQkFBMkIsZ0NBQWdDLEVBQUUsRUFBRTtBQUN4TjtBQUNBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NGO0FBQ3lCO0FBQ0w7QUFDOUM7QUFDQSxZQUFZLDBEQUFtQjtBQUMvQixRQUFRLDBEQUFtQjtBQUMzQixZQUFZLDBEQUFtQixDQUFDLDBFQUFtQixHQUFHO0FBQ3RELDJCQUEyQiwrRUFBK0I7QUFDMUQ7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLDBEQUFtQixDQUFDLDZFQUFzQjtBQUN0RCxZQUFZLDBEQUFtQixDQUFDLDhFQUF1QixHQUFHO0FBQzFELDJCQUEyQiw0RUFBNEI7QUFDdkQ7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLDBEQUFtQixDQUFDLHdFQUFpQixHQUFHLFNBQVMsZ0NBQWdDLEVBQUU7QUFDL0YsWUFBWSwwREFBbUIsQ0FBQywwRUFBbUIsR0FBRyxTQUFTLHNCQUFzQixFQUFFO0FBQ3ZGLFlBQVksMERBQW1CLENBQUMsMkVBQW9CLEdBQUc7QUFDdkQ7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixZQUFZLDBEQUFtQixDQUFDLDRFQUFxQixHQUFHO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFO0FBQ25CLFlBQVksMERBQW1CLENBQUMsMEVBQW1CLEdBQUcsU0FBUyxvQ0FBb0MsRUFBRTtBQUNyRyxRQUFRLDBEQUFtQjtBQUMzQixZQUFZLDBEQUFtQixDQUFDLDJFQUFvQjtBQUNwRDtBQUNBLGlFQUFlLGFBQWEsRUFBQyIsImZpbGUiOiJzY3JpcHRzL3NyY19jb21wb25lbnRzX1NoYXJlQW5kV2lkZ2V0X3RzeC5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2hhcmVCdXR0b25zIGZyb20gJ0AvY29tcG9uZW50cy9TaGFyZUJ1dHRvbnMnO1xuaW1wb3J0IFdpZGdldEJ1dHRvbnMgZnJvbSAnQC9jb21wb25lbnRzL1dpZGdldEJ1dHRvbnMnO1xudmFyIFNoYXJlQW5kV2lkZ2V0ID0gZnVuY3Rpb24gKF9wcm9wcykge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidG4tZ3JwXCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZUJ1dHRvbnMsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0QnV0dG9ucywgbnVsbCkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGFyZUFuZFdpZGdldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaGFyZSB9IGZyb20gJ0Btb3JueWEvcmVhY3Qtc29jaWFsLWxpYnMnO1xuaW1wb3J0IENvbmZpZ3VyZSBmcm9tICdAL2NvbnN0YW50cy9jb25maWd1cmUnO1xudmFyIFNoYXJlQnV0dG9ucyA9IGZ1bmN0aW9uIChfcHJvcHMpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5CYW5kLCB7IHRpdGxlOiBcIlxcdUJDMzRcXHVCNERDIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IGhhc2h0YWdzOiBbJ3JlYWN0JywgJ2RlbW8nXSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkVtYWlsLCB7IHRpdGxlOiBcImVcXHVCQTU0XFx1Qzc3QyBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkZhY2Vib29rLCB7IHRpdGxlOiBcIlxcdUQzOThcXHVDNzc0XFx1QzJBNFxcdUJEODEgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgYXBwSWQ6IENvbmZpZ3VyZS5zb2NpYWwuZmFjZWJvb2suYXBwSWQgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5GbGlwYm9hcmQsIHsgdGl0bGU6IFwiXFx1RDUwQ1xcdUI5QkRcXHVCQ0Y0XFx1QjREQyBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkdtYWlsLCB7IHRpdGxlOiBcIkdcXHVCQTU0XFx1Qzc3QyBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkdvb2dsZUJvb2ttYXJrcywgeyB0aXRsZTogXCJcXHVBRDZDXFx1QUUwMCBcXHVCRDgxXFx1QjlDOFxcdUQwNkMgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5LYWthb1N0b3J5LCB7IHRpdGxlOiBcIlxcdUNFNzRcXHVDRTc0XFx1QzYyNFxcdUMyQTRcXHVEMUEwXFx1QjlBQyBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBDb25maWd1cmUuc29jaWFsLmtha2FvLmFwcElkLFxuICAgICAgICAgICAgICAgIGhhc2h0YWdzOiBbJ21vcm55YScsICfsubTsubTsmKTsiqTthqDrpqwnXSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IHRpdGxlOiBcIlxcdUNFNzRcXHVDRTc0XFx1QzYyNFxcdUQxQTEgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogQ29uZmlndXJlLnNvY2lhbC5rYWthby5hcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkOiAxNzM0OSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVBcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+y5tOy5tOyYpO2GoSDqs7XsnKDtlZjquLDroZwg7YyM64qUIOyDge2SiCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDA6ICdodHRwczovL2hleWJvby5jby5rci93ZWIvcHJvZHVjdC9iaWcvMjAxODA4LzllYWFjYzkwZjQxY2I0ZmJlOGFhYTVjZGE3OWJjMGQ5LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDE6ICdodHRwczovL2tpbWJsb2cuY28ua3Ivd2ViL3Byb2R1Y3QvYmlnLzIwMTgxMC83NTdlZjA3NDEwZDgwNTdkMGY0ZTAwYWEzM2I5OGYyZC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwyOiAnaHR0cDovL2ltYWdlMi5sb3R0ZWltYWxsLmNvbS9nb29kcy80Ni84Ny82MC8xMjk2NjA4NzQ2X0wuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ3VsYXJQcmljZTogMTIwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFByaWNlOiAxMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UmF0ZTogMTAwIC0gTWF0aC5mbG9vcigoMTAwMDAgLyAxMjAwMCkgKiAxMDApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKGlzU3VjY2VzcywgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0tBS0FPJywgaXNTdWNjZXNzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuTGluZSwgeyB0aXRsZTogXCJcXHVCNzdDXFx1Qzc3OCBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLkxpbmtlZEluLCB7IHRpdGxlOiBcIlxcdUI5QzFcXHVEMDZDXFx1QjREQ1xcdUM3NzggXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5OYXZlciwgeyB0aXRsZTogXCJcXHVCMTI0XFx1Qzc3NFxcdUJDODQgXFx1QUNGNVxcdUM3MjBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5OYXZlckJsb2csIHsgdGl0bGU6IFwiXFx1QjEyNFxcdUM3NzRcXHVCQzg0IFxcdUJFMTRcXHVCODVDXFx1QURGOCBcXHVBQ0Y1XFx1QzcyMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLlNNUywgeyB0aXRsZTogXCJTTVMgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgdGFyZ2V0OiAnKzgyMTAxMTExMTExMScgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5UZWxlZ3JhbSwgeyB0aXRsZTogXCJcXHVEMTU0XFx1QjgwOFxcdUFERjhcXHVCN0E4IFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7IG1lc3NhZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICfslYTrnpjsmYAg6rCZ7J20IOunge2BrOulvCDqs7XsnKDtlanri4jri6QuJzsgfSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLlR1bWJsciwgeyB0aXRsZTogXCJcXHVEMTQwXFx1QkUxNFxcdUI3RUMgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2FgOu4lOufrOqzteycoCddIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuVHdpdHRlciwgeyB0aXRsZTogXCJcXHVEMkI4XFx1QzcwNFxcdUQxMzAgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2KuOychO2EsOqzteycoCddIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuQ2xpcGJvYXJkLCB7IHRpdGxlOiBcIlxcdUQwNzRcXHVCOUJEXFx1QkNGNFxcdUI0REMgXFx1QkNGNVxcdUMwQUNcIiwgZXh0cmE6IHsgbWVzc2FnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJ+uzteyCrOuQnCDrqZTsi5zsp4Ag7J6F64uI64ukLic7IH0gfSwgb25Db21wbGV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWxlcnQoJ+2BtOumveuztOuTnOyXkCDrs7XsgqzrkJjsl4jsirXri4jri6QuJyk7IH0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGFyZUJ1dHRvbnM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnQG1vcm55YS9yZWFjdC1zb2NpYWwtbGlicyc7XG5pbXBvcnQgQ29uZmlndXJlIGZyb20gJ0AvY29uc3RhbnRzL2NvbmZpZ3VyZSc7XG52YXIgV2lkZ2V0QnV0dG9ucyA9IGZ1bmN0aW9uIChfcHJvcHMpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuRmFjZWJvb2tMaWtlLCB7IGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiBDb25maWd1cmUuc29jaWFsLmZhY2Vib29rLmFwcElkLFxuICAgICAgICAgICAgICAgICAgICBwYWdlVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3BsdWdpbnMvJyxcbiAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuRmxpcGJvYXJkRmxpcGl0LCBudWxsKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0Lktha2FvU3RvcnlGb2xsb3csIHsgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6IENvbmZpZ3VyZS5zb2NpYWwua2FrYW8uYXBwSWQsXG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZUNoYW5uZWxJZDogJ21vcm55YScsXG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LlR1bWJsclBvc3QsIHsgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2FgOu4lOufrOqzteycoCddIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5UdW1ibHJGb2xsb3csIHsgZXh0cmE6IHsgdHVtYmxlbG9nOiAnbW9ybnlhJyB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuVHdpdHRlckZvbGxvdywgeyBleHRyYToge1xuICAgICAgICAgICAgICAgICAgICBzY3JlZW5OYW1lOiAnQG1vcm55YWNvbScsXG4gICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2lkZ2V0LlR3aXR0ZXJNZXNzYWdlLCB7IGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmVlbk5hbWU6ICdAbW9ybnlhY29tJyxcbiAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50SWQ6ICczODA1MTA0Mzc0JyxcbiAgICAgICAgICAgICAgICAgICAgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2KuOychO2EsOuplOyLnOyngOqzteycoCddLFxuICAgICAgICAgICAgICAgIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldC5Ud2l0dGVyVHdlZXQsIHsgZXh0cmE6IHsgaGFzaHRhZ3M6IFsnbW9ybnlhJywgJ+2KuOychO2EsOqzteycoCcsICcnXSB9IH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQuR29vZ2xlSGFuZ291dCwgbnVsbCkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0QnV0dG9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=