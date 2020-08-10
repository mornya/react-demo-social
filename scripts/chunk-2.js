(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/KakaoShare.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KakaoShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@mornya/react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/constants/configure.ts");



function KakaoShare() {
    var appId = _constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "kakao-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "kakao-title" }, "FEED\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-feed", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'feed',
                value: {
                    content: {
                        title: '딸기 치즈 케익',
                        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
                        imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                        link: {
                            mobileWebUrl: 'https://developers.kakao.com',
                            webUrl: 'https://developers.kakao.com',
                        },
                    },
                    social: {
                        likeCount: 286,
                        commentCount: 45,
                        sharedCount: 845,
                    },
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                        {
                            title: '앱으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                    ],
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "kakao-title" }, "LIST\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-list", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'list',
                value: {
                    headerTitle: 'WEEKLY MAGAZINE',
                    headerLink: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                    contents: [
                        {
                            title: '취미의 특징, 탁구',
                            description: '스포츠',
                            imageUrl: 'http://mud-kage.kakao.co.kr/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        }, {
                            title: '크림으로 이해하는 커피이야기',
                            description: '음식',
                            imageUrl: 'http://mud-kage.kakao.co.kr/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        }, {
                            title: '감성이 가득한 분위기',
                            description: '사진',
                            imageUrl: 'http://mud-kage.kakao.co.kr/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                    ],
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                        {
                            title: '앱으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                    ],
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "kakao-title" }, "LOCATION\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-location", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'location',
                value: {
                    address: '경기 성남시 분당구 판교역로 235 에이치스퀘어 N동 8층',
                    addressTitle: '카카오 판교오피스 카페톡',
                    content: {
                        title: '신메뉴 출시♥︎ 체리블라썸라떼',
                        description: '이번 주는 체리블라썸라떼 1+1',
                        imageUrl: 'http://mud-kage.kakao.co.kr/dn/bSbH9w/btqgegaEDfW/vD9KKV0hEintg6bZT4v4WK/kakaolink40_original.png',
                        link: {
                            mobileWebUrl: 'https://developers.kakao.com',
                            webUrl: 'https://developers.kakao.com',
                        },
                    },
                    social: {
                        likeCount: 286,
                        commentCount: 45,
                        sharedCount: 845,
                    },
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                    ],
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "kakao-title" }, "COMMERCE\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-commerce", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'commerce',
                value: {
                    content: {
                        title: 'Ivory long dress (4 Color)',
                        imageUrl: 'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
                        link: {
                            mobileWebUrl: 'https://developers.kakao.com',
                            webUrl: 'https://developers.kakao.com',
                        },
                    },
                    commerce: {
                        regularPrice: 208800,
                        discountPrice: 146160,
                        discountRate: 30,
                    },
                    buttons: [
                        {
                            title: '구매하기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                        {
                            title: '공유하기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com',
                            },
                        },
                    ],
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "kakao-title" }, "TEXT\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-text", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'text',
                value: {
                    text: '공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다.',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                    buttonTitle: '그냥 보기',
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "kakao-title" }, "SCRAP\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-scrap", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'scrap',
                value: {
                    requestUrl: 'https://naver.com',
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
            } }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "kakao-title" }, "CUSTOM\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-custom", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
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
            } })));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9LYWthb1NoYXJlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUN3QjtBQUNKO0FBQy9CO0FBQ2YsZ0JBQWdCLDREQUFTO0FBQ3pCLFlBQVksNENBQUssdUJBQXVCLDBCQUEwQjtBQUNsRSxRQUFRLDRDQUFLLHdCQUF3QiwyQkFBMkI7QUFDaEUsUUFBUSw0Q0FBSyxlQUFlLCtEQUFLLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSw0Q0FBSyx3QkFBd0IsMkJBQTJCO0FBQ2hFLFFBQVEsNENBQUssZUFBZSwrREFBSyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSw0Q0FBSyx3QkFBd0IsMkJBQTJCO0FBQ2hFLFFBQVEsNENBQUssZUFBZSwrREFBSyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLDRDQUFLO0FBQ2IsUUFBUSw0Q0FBSyx3QkFBd0IsMkJBQTJCO0FBQ2hFLFFBQVEsNENBQUssZUFBZSwrREFBSyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLDRDQUFLLHdCQUF3QiwyQkFBMkI7QUFDaEUsUUFBUSw0Q0FBSyxlQUFlLCtEQUFLLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSw0Q0FBSyx3QkFBd0IsMkJBQTJCO0FBQ2hFLFFBQVEsNENBQUssZUFBZSwrREFBSyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmLFFBQVEsNENBQUssd0JBQXdCLDJCQUEyQjtBQUNoRSxRQUFRLDRDQUFLLGVBQWUsK0RBQUssYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZiIsImZpbGUiOiJzY3JpcHRzL2NodW5rLTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2hhcmUgfSBmcm9tICdAbW9ybnlhL3JlYWN0LXNvY2lhbC1saWJzJztcbmltcG9ydCBDb25maWd1cmUgZnJvbSAnQC9jb25zdGFudHMvY29uZmlndXJlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvU2hhcmUoKSB7XG4gICAgdmFyIGFwcElkID0gQ29uZmlndXJlLnNvY2lhbC5rYWthby5hcHBJZDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwia2FrYW8td3JhcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJGRUVEXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtZmVlZFwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdmZWVkJyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+uUuOq4sCDsuZjspogg7LyA7J21JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnI+y8gOydtSAj65S46riwICPsgrztj4nrj5kgI+y5tO2OmCAj67aE7JyE6riwICPshozqsJztjIUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vbXVkLWthZ2Uua2FrYW8uY28ua3IvZG4vUTJpTngvYnRxZ2VSZ1Y1NFAvVkxkQnM5Y3Z5bjhCSlhCM283TjhVSy9rYWthb2xpbms0MF9vcmlnaW5hbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc29jaWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaWtlQ291bnQ6IDI4NixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRDb3VudDogNDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWRDb3VudDogODQ1LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+yVseycvOuhnCDrs7TquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiTElTVFxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLWxpc3RcIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGl0bGU6ICdXRUVLTFkgTUFHQVpJTkUnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJMaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Leo66+47J2YIO2KueynlSwg7YOB6rWsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+yKpO2PrOy4oCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vbXVkLWthZ2Uua2FrYW8uY28ua3IvZG4vYkRQTUliL2J0cWdlb1RSUXZkLzQ5QnVGMWdObzZVWGtkYktlY3g2MDAva2FrYW9saW5rNDBfb3JpZ2luYWwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7YGs66a87Jy866GcIOydtO2VtO2VmOuKlCDsu6TtlLzsnbTslbzquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn7J2M7IudJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9tdWQta2FnZS5rYWthby5jby5rci9kbi9RUGVOdC9idHFnZVNmU3NDUi8wUUpJUnVXVHRrZzRjWWM1N244SDgwL2tha2FvbGluazQwX29yaWdpbmFsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+qwkOyEseydtCDqsIDrk53tlZwg67aE7JyE6riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+yCrOynhCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vbXVkLWthZ2Uua2FrYW8uY28ua3IvZG4vYzdNQlg0L2J0cWdlUmdXaEJ5L1pNTG5uZEpGQXF5VUFucXU0c1FIUzAva2FrYW9saW5rNDBfb3JpZ2luYWwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfslbHsnLzroZwg67O06riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwia2FrYW8tdGl0bGVcIiB9LCBcIkxPQ0FUSU9OXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtbG9jYXRpb25cIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbG9jYXRpb24nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICfqsr3quLAg7ISx64Ko7IucIOu2hOuLueq1rCDtjJDqtZDsl63roZwgMjM1IOyXkOydtOy5mOyKpO2AmOyWtCBO64+ZIDjsuLUnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVGl0bGU6ICfsubTsubTsmKQg7YyQ6rWQ7Jik7ZS87IqkIOy5tO2OmO2GoScsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Iug66mU64m0IOy2nOyLnOKZpe+4jiDssrTrpqzruJTrnbzsjbjrnbzrlrwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfsnbTrsogg7KO864qUIOyytOumrOu4lOudvOyNuOudvOuWvCAxKzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vbXVkLWthZ2Uua2FrYW8uY28ua3IvZG4vYlNiSDl3L2J0cWdlZ2FFRGZXL3ZEOUtLVjBoRWludGc2YlpUNHY0V0sva2FrYW9saW5rNDBfb3JpZ2luYWwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNvY2lhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUNvdW50OiAyODYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50Q291bnQ6IDQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkQ291bnQ6IDg0NSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCBudWxsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwia2FrYW8tdGl0bGVcIiB9LCBcIkNPTU1FUkNFXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtY29tbWVyY2VcIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29tbWVyY2UnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSXZvcnkgbG9uZyBkcmVzcyAoNCBDb2xvciknLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vbXVkLWthZ2Uua2FrYW8uY28ua3IvZG4vUlk4Wk4vYnRxZ09HeklUcDMvdUNNMXgyeHU3R05mcjdOUzlRdkVzMC9rYWthb2xpbms0MF9vcmlnaW5hbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ3VsYXJQcmljZTogMjA4ODAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRQcmljZTogMTQ2MTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRSYXRlOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6rWs66ek7ZWY6riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+qzteycoO2VmOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJURVhUXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtdGV4dFwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn6rO17Jyg7JqpIO2FjeyKpO2KuCDsnoXri4jri6QuIOqzteycoOyaqSDthY3siqTtirgg7J6F64uI64ukLiDqs7XsnKDsmqkg7YWN7Iqk7Yq4IOyeheuLiOuLpC4g6rO17Jyg7JqpIO2FjeyKpO2KuCDsnoXri4jri6QuIOqzteycoOyaqSDthY3siqTtirgg7J6F64uI64ukLiDqs7XsnKDsmqkg7YWN7Iqk7Yq4IOyeheuLiOuLpC4nLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBidXR0b25UaXRsZTogJ+q3uOuDpSDrs7TquLAnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiU0NSQVBcXHVEMEMwXFx1Qzc4NVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5LYWthb1RhbGssIHsga2V5OiBcImtha2FvdGFsay1zaGFyZS1zY3JhcFwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzY3JhcCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybDogJ2h0dHBzOi8vbmF2ZXIuY29tJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVJZDogMTczNDksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQXJnczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsubTsubTsmKTthqEg6rO17Jyg7ZWY6riw66GcIO2MjOuKlCDsg4HtkognLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1VybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwwOiAnaHR0cHM6Ly9oZXlib28uY28ua3Ivd2ViL3Byb2R1Y3QvYmlnLzIwMTgwOC85ZWFhY2M5MGY0MWNiNGZiZThhYWE1Y2RhNzliYzBkOS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwxOiAnaHR0cHM6Ly9raW1ibG9nLmNvLmtyL3dlYi9wcm9kdWN0L2JpZy8yMDE4MTAvNzU3ZWYwNzQxMGQ4MDU3ZDBmNGUwMGFhMzNiOThmMmQucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMjogJ2h0dHA6Ly9pbWFnZTIubG90dGVpbWFsbC5jb20vZ29vZHMvNDYvODcvNjAvMTI5NjYwODc0Nl9MLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWd1bGFyUHJpY2U6IDEyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRQcmljZTogMTAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFJhdGU6IDEwMCAtIE1hdGguZmxvb3IoKDEwMDAwIC8gMTIwMDApICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwia2FrYW8tdGl0bGVcIiB9LCBcIkNVU1RPTVxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLWN1c3RvbVwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQ6IDE3MzQ5LFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Lm07Lm07Jik7YahIOqzteycoO2VmOq4sOuhnCDtjIzripQg7IOB7ZKIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtVcmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMDogJ2h0dHBzOi8vaGV5Ym9vLmNvLmtyL3dlYi9wcm9kdWN0L2JpZy8yMDE4MDgvOWVhYWNjOTBmNDFjYjRmYmU4YWFhNWNkYTc5YmMwZDkuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMTogJ2h0dHBzOi8va2ltYmxvZy5jby5rci93ZWIvcHJvZHVjdC9iaWcvMjAxODEwLzc1N2VmMDc0MTBkODA1N2QwZjRlMDBhYTMzYjk4ZjJkLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDI6ICdodHRwOi8vaW1hZ2UyLmxvdHRlaW1hbGwuY29tL2dvb2RzLzQ2Lzg3LzYwLzEyOTY2MDg3NDZfTC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVndWxhclByaWNlOiAxMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UHJpY2U6IDEwMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRSYXRlOiAxMDAgLSBNYXRoLmZsb29yKCgxMDAwMCAvIDEyMDAwKSAqIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoaXNTdWNjZXNzLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnS0FLQU8nLCBpc1N1Y2Nlc3MsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==