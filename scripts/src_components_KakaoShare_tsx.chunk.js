(self["webpackChunkreact_demo_social"] = self["webpackChunkreact_demo_social"] || []).push([["src_components_KakaoShare_tsx"],{

/***/ "./src/components/KakaoShare.tsx":
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



var KakaoShare = function (_props) {
    var appId = _constants_configure__WEBPACK_IMPORTED_MODULE_2__.default.social.kakao.appId;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "kakao-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "kakao-title" }, "FEED\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { key: "kakaotalk-share-feed", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "kakao-title" }, "LIST\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { key: "kakaotalk-share-list", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "kakao-title" }, "LOCATION\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { key: "kakaotalk-share-location", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "kakao-title" }, "COMMERCE\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { key: "kakaotalk-share-commerce", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "kakao-title" }, "TEXT\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { key: "kakaotalk-share-text", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "kakao-title" }, "SCRAP\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { key: "kakaotalk-share-scrap", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "kakao-title" }, "CUSTOM\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__.Share.KakaoTalk, { key: "kakaotalk-share-custom", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KakaoShare);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1kZW1vLXNvY2lhbC8uL3NyYy9jb21wb25lbnRzL0tha2FvU2hhcmUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNKO0FBQzlDO0FBQ0EsZ0JBQWdCLDRFQUE0QjtBQUM1QyxZQUFZLDBEQUFtQixTQUFTLDBCQUEwQjtBQUNsRSxRQUFRLDBEQUFtQixVQUFVLDJCQUEyQjtBQUNoRSxRQUFRLDBEQUFtQixDQUFDLHNFQUFlLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSwwREFBbUIsVUFBVSwyQkFBMkI7QUFDaEUsUUFBUSwwREFBbUIsQ0FBQyxzRUFBZSxHQUFHO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSwwREFBbUIsVUFBVSwyQkFBMkI7QUFDaEUsUUFBUSwwREFBbUIsQ0FBQyxzRUFBZSxHQUFHO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLDBEQUFtQjtBQUMzQixRQUFRLDBEQUFtQixVQUFVLDJCQUEyQjtBQUNoRSxRQUFRLDBEQUFtQixDQUFDLHNFQUFlLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmLFFBQVEsMERBQW1CLFVBQVUsMkJBQTJCO0FBQ2hFLFFBQVEsMERBQW1CLENBQUMsc0VBQWUsR0FBRztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLDBEQUFtQixVQUFVLDJCQUEyQjtBQUNoRSxRQUFRLDBEQUFtQixDQUFDLHNFQUFlLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSwwREFBbUIsVUFBVSwyQkFBMkI7QUFDaEUsUUFBUSwwREFBbUIsQ0FBQyxzRUFBZSxHQUFHO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmO0FBQ0EsaUVBQWUsVUFBVSxFQUFDIiwiZmlsZSI6InNjcmlwdHMvc3JjX2NvbXBvbmVudHNfS2FrYW9TaGFyZV90c3guY2h1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2hhcmUgfSBmcm9tICdAbW9ybnlhL3JlYWN0LXNvY2lhbC1saWJzJztcbmltcG9ydCBDb25maWd1cmUgZnJvbSAnQC9jb25zdGFudHMvY29uZmlndXJlJztcbnZhciBLYWthb1NoYXJlID0gZnVuY3Rpb24gKF9wcm9wcykge1xuICAgIHZhciBhcHBJZCA9IENvbmZpZ3VyZS5zb2NpYWwua2FrYW8uYXBwSWQ7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXdyYXBcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiRkVFRFxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLWZlZWRcIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmVlZCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfrlLjquLAg7LmY7KaIIOy8gOydtScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJyPsvIDsnbUgI+uUuOq4sCAj7IK87Y+J64+ZICPsubTtjpggI+u2hOychOq4sCAj7IaM6rCc7YyFJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAnaHR0cDovL211ZC1rYWdlLmtha2FvLmNvLmtyL2RuL1EyaU54L2J0cWdlUmdWNTRQL1ZMZEJzOWN2eW44QkpYQjNvN044VUsva2FrYW9saW5rNDBfb3JpZ2luYWwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNvY2lhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUNvdW50OiAyODYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50Q291bnQ6IDQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkQ291bnQ6IDg0NSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Ju57Jy866GcIOuztOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfslbHsnLzroZwg67O06riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwia2FrYW8tdGl0bGVcIiB9LCBcIkxJU1RcXHVEMEMwXFx1Qzc4NVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5LYWthb1RhbGssIHsga2V5OiBcImtha2FvdGFsay1zaGFyZS1saXN0XCIsIHRpdGxlOiBcIlxcdUNFNzRcXHVDRTc0XFx1QzYyNFxcdUQxQTEgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xpc3QnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlclRpdGxlOiAnV0VFS0xZIE1BR0FaSU5FJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+y3qOuvuOydmCDtirnsp5UsIO2Dgeq1rCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfsiqTtj6zsuKAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAnaHR0cDovL211ZC1rYWdlLmtha2FvLmNvLmtyL2RuL2JEUE1JYi9idHFnZW9UUlF2ZC80OUJ1RjFnTm82VVhrZGJLZWN4NjAwL2tha2FvbGluazQwX29yaWdpbmFsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+2BrOumvOycvOuhnCDsnbTtlbTtlZjripQg7Luk7ZS87J207JW86riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+ydjOyLnScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vbXVkLWthZ2Uua2FrYW8uY28ua3IvZG4vUVBlTnQvYnRxZ2VTZlNzQ1IvMFFKSVJ1V1R0a2c0Y1ljNTduOEg4MC9rYWthb2xpbms0MF9vcmlnaW5hbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfqsJDshLHsnbQg6rCA65Od7ZWcIOu2hOychOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfsgqzsp4QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAnaHR0cDovL211ZC1rYWdlLmtha2FvLmNvLmtyL2RuL2M3TUJYNC9idHFnZVJnV2hCeS9aTUxubmRKRkFxeVVBbnF1NHNRSFMwL2tha2FvbGluazQwX29yaWdpbmFsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7JWx7Jy866GcIOuztOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJMT0NBVElPTlxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLWxvY2F0aW9uXCIsIHRpdGxlOiBcIlxcdUNFNzRcXHVDRTc0XFx1QzYyNFxcdUQxQTEgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2xvY2F0aW9uJyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAn6rK96riwIOyEseuCqOyLnCDrtoTri7nqtawg7YyQ6rWQ7Jet66GcIDIzNSDsl5DsnbTsuZjsiqTtgJjslrQgTuuPmSA47Li1JyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1RpdGxlOiAn7Lm07Lm07JikIO2MkOq1kOyYpO2UvOyKpCDsubTtjpjthqEnLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+yLoOuplOuJtCDstpzsi5zimaXvuI4g7LK066as67iU65287I24652865a8JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn7J2067KIIOyjvOuKlCDssrTrpqzruJTrnbzsjbjrnbzrlrwgMSsxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAnaHR0cDovL211ZC1rYWdlLmtha2FvLmNvLmtyL2RuL2JTYkg5dy9idHFnZWdhRURmVy92RDlLS1YwaEVpbnRnNmJaVDR2NFdLL2tha2FvbGluazQwX29yaWdpbmFsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzb2NpYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VDb3VudDogMjg2LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudENvdW50OiA0NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZENvdW50OiA4NDUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgbnVsbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJDT01NRVJDRVxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLWNvbW1lcmNlXCIsIHRpdGxlOiBcIlxcdUNFNzRcXHVDRTc0XFx1QzYyNFxcdUQxQTEgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NvbW1lcmNlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0l2b3J5IGxvbmcgZHJlc3MgKDQgQ29sb3IpJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAnaHR0cDovL211ZC1rYWdlLmtha2FvLmNvLmtyL2RuL1JZOFpOL2J0cWdPR3pJVHAzL3VDTTF4Mnh1N0dOZnI3TlM5UXZFczAva2FrYW9saW5rNDBfb3JpZ2luYWwucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lcmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWd1bGFyUHJpY2U6IDIwODgwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UHJpY2U6IDE0NjE2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UmF0ZTogMzAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+q1rOunpO2VmOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfqs7XsnKDtlZjquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiVEVYVFxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLXRleHRcIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+qzteycoOyaqSDthY3siqTtirgg7J6F64uI64ukLiDqs7XsnKDsmqkg7YWN7Iqk7Yq4IOyeheuLiOuLpC4g6rO17Jyg7JqpIO2FjeyKpO2KuCDsnoXri4jri6QuIOqzteycoOyaqSDthY3siqTtirgg7J6F64uI64ukLiDqs7XsnKDsmqkg7YWN7Iqk7Yq4IOyeheuLiOuLpC4g6rO17Jyg7JqpIO2FjeyKpO2KuCDsnoXri4jri6QuJyxcbiAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGl0bGU6ICfqt7jrg6Ug67O06riwJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwia2FrYW8tdGl0bGVcIiB9LCBcIlNDUkFQXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtc2NyYXBcIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2NyYXAnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6ICdodHRwczovL25hdmVyLmNvbScsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSWQ6IDE3MzQ5LFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUFyZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7Lm07Lm07Jik7YahIOqzteycoO2VmOq4sOuhnCDtjIzripQg7IOB7ZKIJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtVcmw6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMDogJ2h0dHBzOi8vaGV5Ym9vLmNvLmtyL3dlYi9wcm9kdWN0L2JpZy8yMDE4MDgvOWVhYWNjOTBmNDFjYjRmYmU4YWFhNWNkYTc5YmMwZDkuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMTogJ2h0dHBzOi8va2ltYmxvZy5jby5rci93ZWIvcHJvZHVjdC9iaWcvMjAxODEwLzc1N2VmMDc0MTBkODA1N2QwZjRlMDBhYTMzYjk4ZjJkLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDI6ICdodHRwOi8vaW1hZ2UyLmxvdHRlaW1hbGwuY29tL2dvb2RzLzQ2Lzg3LzYwLzEyOTY2MDg3NDZfTC5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVndWxhclByaWNlOiAxMjAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UHJpY2U6IDEwMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRSYXRlOiAxMDAgLSBNYXRoLmZsb29yKCgxMDAwMCAvIDEyMDAwKSAqIDEwMCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJDVVNUT01cXHVEMEMwXFx1Qzc4NVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5LYWthb1RhbGssIHsga2V5OiBcImtha2FvdGFsay1zaGFyZS1jdXN0b21cIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkOiAxNzM0OSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVBcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+y5tOy5tOyYpO2GoSDqs7XsnKDtlZjquLDroZwg7YyM64qUIOyDge2SiCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDA6ICdodHRwczovL2hleWJvby5jby5rci93ZWIvcHJvZHVjdC9iaWcvMjAxODA4LzllYWFjYzkwZjQxY2I0ZmJlOGFhYTVjZGE3OWJjMGQ5LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDE6ICdodHRwczovL2tpbWJsb2cuY28ua3Ivd2ViL3Byb2R1Y3QvYmlnLzIwMTgxMC83NTdlZjA3NDEwZDgwNTdkMGY0ZTAwYWEzM2I5OGYyZC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwyOiAnaHR0cDovL2ltYWdlMi5sb3R0ZWltYWxsLmNvbS9nb29kcy80Ni84Ny82MC8xMjk2NjA4NzQ2X0wuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ3VsYXJQcmljZTogMTIwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFByaWNlOiAxMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UmF0ZTogMTAwIC0gTWF0aC5mbG9vcigoMTAwMDAgLyAxMjAwMCkgKiAxMDApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogZnVuY3Rpb24gKGlzU3VjY2VzcywgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0tBS0FPJywgaXNTdWNjZXNzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBLYWthb1NoYXJlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==