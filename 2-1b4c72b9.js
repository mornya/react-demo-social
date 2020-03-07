(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/KakaoShare.jsx":
/*!***************************************!*\
  !*** ./src/components/KakaoShare.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KakaoShare; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mornya/react-social-libs */ "../../vessel/mornya-react-social-libs/dist/index.js");
/* harmony import */ var _mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/configure */ "./src/constants/configure.js");



function KakaoShare() {
    var appId = constants_configure__WEBPACK_IMPORTED_MODULE_2__["default"].social.kakao.appId;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "kakao-wrap" },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kakao-title" }, "FEED\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-feed", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'feed',
                value: {
                    content: {
                        title: '딸기 치즈 케익',
                        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
                        imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                        link: {
                            mobileWebUrl: 'https://developers.kakao.com',
                            webUrl: 'https://developers.kakao.com'
                        }
                    },
                    social: {
                        likeCount: 286,
                        commentCount: 45,
                        sharedCount: 845
                    },
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        },
                        {
                            title: '앱으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        }
                    ]
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kakao-title" }, "LIST\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-list", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'list',
                value: {
                    headerTitle: 'WEEKLY MAGAZINE',
                    headerLink: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com'
                    },
                    contents: [
                        {
                            title: '취미의 특징, 탁구',
                            description: '스포츠',
                            imageUrl: 'http://mud-kage.kakao.co.kr/dn/bDPMIb/btqgeoTRQvd/49BuF1gNo6UXkdbKecx600/kakaolink40_original.png',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        }, {
                            title: '크림으로 이해하는 커피이야기',
                            description: '음식',
                            imageUrl: 'http://mud-kage.kakao.co.kr/dn/QPeNt/btqgeSfSsCR/0QJIRuWTtkg4cYc57n8H80/kakaolink40_original.png',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        }, {
                            title: '감성이 가득한 분위기',
                            description: '사진',
                            imageUrl: 'http://mud-kage.kakao.co.kr/dn/c7MBX4/btqgeRgWhBy/ZMLnndJFAqyUAnqu4sQHS0/kakaolink40_original.png',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        }
                    ],
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        },
                        {
                            title: '앱으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        }
                    ],
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kakao-title" }, "LOCATION\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-location", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
                            webUrl: 'https://developers.kakao.com'
                        }
                    },
                    social: {
                        likeCount: 286,
                        commentCount: 45,
                        sharedCount: 845
                    },
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        }
                    ],
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kakao-title" }, "COMMERCE\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-commerce", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'commerce',
                value: {
                    content: {
                        title: 'Ivory long dress (4 Color)',
                        imageUrl: 'http://mud-kage.kakao.co.kr/dn/RY8ZN/btqgOGzITp3/uCM1x2xu7GNfr7NS9QvEs0/kakaolink40_original.png',
                        link: {
                            mobileWebUrl: 'https://developers.kakao.com',
                            webUrl: 'https://developers.kakao.com'
                        }
                    },
                    commerce: {
                        regularPrice: 208800,
                        discountPrice: 146160,
                        discountRate: 30
                    },
                    buttons: [
                        {
                            title: '구매하기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        },
                        {
                            title: '공유하기',
                            link: {
                                mobileWebUrl: 'https://developers.kakao.com',
                                webUrl: 'https://developers.kakao.com'
                            }
                        }
                    ],
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kakao-title" }, "TEXT\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-text", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
                appId: appId,
                type: 'text',
                value: {
                    text: '공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다. 공유용 텍스트 입니다.',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com'
                    },
                    buttonTitle: '그냥 보기',
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kakao-title" }, "SCRAP\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-scrap", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: "kakao-title" }, "CUSTOM\uD0C0\uC785"),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mornya_react_social_libs__WEBPACK_IMPORTED_MODULE_1__["Share"].KakaoTalk, { key: "kakaotalk-share-custom", title: "\uCE74\uCE74\uC624\uD1A1 \uACF5\uC720", extra: {
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
                onComplete: function (result, response) {
                    console.warn('KAKAO', result, response);
                },
            } })));
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9LYWthb1NoYXJlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDbUI7QUFDTjtBQUM3QjtBQUNmLGdCQUFnQiwyREFBUztBQUN6QixZQUFZLG1EQUFtQixTQUFTLDBCQUEwQjtBQUNsRSxRQUFRLG1EQUFtQixVQUFVLDJCQUEyQjtBQUNoRSxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmLFFBQVEsbURBQW1CLFVBQVUsMkJBQTJCO0FBQ2hFLFFBQVEsbURBQW1CLENBQUMsK0RBQUssYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLG1EQUFtQixVQUFVLDJCQUEyQjtBQUNoRSxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmLFFBQVEsbURBQW1CO0FBQzNCLFFBQVEsbURBQW1CLFVBQVUsMkJBQTJCO0FBQ2hFLFFBQVEsbURBQW1CLENBQUMsK0RBQUssYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmLFFBQVEsbURBQW1CLFVBQVUsMkJBQTJCO0FBQ2hFLFFBQVEsbURBQW1CLENBQUMsK0RBQUssYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZixRQUFRLG1EQUFtQixVQUFVLDJCQUEyQjtBQUNoRSxRQUFRLG1EQUFtQixDQUFDLCtEQUFLLGFBQWE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYSxFQUFFO0FBQ2YsUUFBUSxtREFBbUIsVUFBVSwyQkFBMkI7QUFDaEUsUUFBUSxtREFBbUIsQ0FBQywrREFBSyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWEsRUFBRTtBQUNmIiwiZmlsZSI6IjItMWI0YzcyYjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTaGFyZSB9IGZyb20gJ0Btb3JueWEvcmVhY3Qtc29jaWFsLWxpYnMnO1xuaW1wb3J0IENvbmZpZ3VyZSBmcm9tICdjb25zdGFudHMvY29uZmlndXJlJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvU2hhcmUoKSB7XG4gICAgdmFyIGFwcElkID0gQ29uZmlndXJlLnNvY2lhbC5rYWthby5hcHBJZDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwia2FrYW8td3JhcFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJGRUVEXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtZmVlZFwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdmZWVkJyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+uUuOq4sCDsuZjspogg7LyA7J21JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnI+y8gOydtSAj65S46riwICPsgrztj4nrj5kgI+y5tO2OmCAj67aE7JyE6riwICPshozqsJztjIUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vbXVkLWthZ2Uua2FrYW8uY28ua3IvZG4vUTJpTngvYnRxZ2VSZ1Y1NFAvVkxkQnM5Y3Z5bjhCSlhCM283TjhVSy9rYWthb2xpbms0MF9vcmlnaW5hbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNvY2lhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUNvdW50OiAyODYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50Q291bnQ6IDQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkQ291bnQ6IDg0NVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfslbHsnLzroZwg67O06riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiTElTVFxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLWxpc3RcIiwgdGl0bGU6IFwiXFx1Q0U3NFxcdUNFNzRcXHVDNjI0XFx1RDFBMSBcXHVBQ0Y1XFx1QzcyMFwiLCBleHRyYToge1xuICAgICAgICAgICAgICAgIGFwcElkOiBhcHBJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnbGlzdCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyVGl0bGU6ICdXRUVLTFkgTUFHQVpJTkUnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJMaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfst6jrr7jsnZgg7Yq57KeVLCDtg4HqtawnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn7Iqk7Y+s7LigJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9tdWQta2FnZS5rYWthby5jby5rci9kbi9iRFBNSWIvYnRxZ2VvVFJRdmQvNDlCdUYxZ05vNlVYa2RiS2VjeDYwMC9rYWthb2xpbms0MF9vcmlnaW5hbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn7YGs66a87Jy866GcIOydtO2VtO2VmOuKlCDsu6TtlLzsnbTslbzquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn7J2M7IudJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9tdWQta2FnZS5rYWthby5jby5rci9kbi9RUGVOdC9idHFnZVNmU3NDUi8wUUpJUnVXVHRrZzRjWWM1N244SDgwL2tha2FvbGluazQwX29yaWdpbmFsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfqsJDshLHsnbQg6rCA65Od7ZWcIOu2hOychOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICfsgqzsp4QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiAnaHR0cDovL211ZC1rYWdlLmtha2FvLmNvLmtyL2RuL2M3TUJYNC9idHFnZVJnV2hCeS9aTUxubmRKRkFxeVVBbnF1NHNRSFMwL2tha2FvbGluazQwX29yaWdpbmFsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ybueycvOuhnCDrs7TquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+yVseycvOuhnCDrs7TquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiTE9DQVRJT05cXHVEMEMwXFx1Qzc4NVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5LYWthb1RhbGssIHsga2V5OiBcImtha2FvdGFsay1zaGFyZS1sb2NhdGlvblwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdsb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogJ+qyveq4sCDshLHrgqjsi5wg67aE64u56rWsIO2MkOq1kOyXreuhnCAyMzUg7JeQ7J207LmY7Iqk7YCY7Ja0IE7rj5kgOOy4tScsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NUaXRsZTogJ+y5tOy5tOyYpCDtjJDqtZDsmKTtlLzsiqQg7Lm07Y6Y7YahJyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsi6DrqZTribQg7Lac7Iuc4pml77iOIOyytOumrOu4lOudvOyNuOudvOuWvCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ+ydtOuyiCDso7zripQg7LK066as67iU65287I24652865a8IDErMScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9tdWQta2FnZS5rYWthby5jby5rci9kbi9iU2JIOXcvYnRxZ2VnYUVEZlcvdkQ5S0tWMGhFaW50ZzZiWlQ0djRXSy9rYWthb2xpbms0MF9vcmlnaW5hbC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNvY2lhbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlrZUNvdW50OiAyODYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50Q291bnQ6IDQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkQ291bnQ6IDg0NVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsm7nsnLzroZwg67O06riwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZVdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIG51bGwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiQ09NTUVSQ0VcXHVEMEMwXFx1Qzc4NVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZS5LYWthb1RhbGssIHsga2V5OiBcImtha2FvdGFsay1zaGFyZS1jb21tZXJjZVwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdjb21tZXJjZScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdJdm9yeSBsb25nIGRyZXNzICg0IENvbG9yKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogJ2h0dHA6Ly9tdWQta2FnZS5rYWthby5jby5rci9kbi9SWThaTi9idHFnT0d6SVRwMy91Q00xeDJ4dTdHTmZyN05TOVF2RXMwL2tha2FvbGluazQwX29yaWdpbmFsLnBuZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ3VsYXJQcmljZTogMjA4ODAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRQcmljZTogMTQ2MTYwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRSYXRlOiAzMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfqtazrp6TtlZjquLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9iaWxlV2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+qzteycoO2VmOq4sCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViVXJsOiAnaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJURVhUXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtdGV4dFwiLCB0aXRsZTogXCJcXHVDRTc0XFx1Q0U3NFxcdUM2MjRcXHVEMUExIFxcdUFDRjVcXHVDNzIwXCIsIGV4dHJhOiB7XG4gICAgICAgICAgICAgICAgYXBwSWQ6IGFwcElkLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn6rO17Jyg7JqpIO2FjeyKpO2KuCDsnoXri4jri6QuIOqzteycoOyaqSDthY3siqTtirgg7J6F64uI64ukLiDqs7XsnKDsmqkg7YWN7Iqk7Yq4IOyeheuLiOuLpC4g6rO17Jyg7JqpIO2FjeyKpO2KuCDsnoXri4jri6QuIOqzteycoOyaqSDthY3siqTtirgg7J6F64uI64ukLiDqs7XsnKDsmqkg7YWN7Iqk7Yq4IOyeheuLiOuLpC4nLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2JpbGVXZWJVcmw6ICdodHRwczovL2RldmVsb3BlcnMua2FrYW8uY29tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlYlVybDogJ2h0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblRpdGxlOiAn6re464OlIOuztOq4sCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImtha2FvLXRpdGxlXCIgfSwgXCJTQ1JBUFxcdUQwQzBcXHVDNzg1XCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNoYXJlLktha2FvVGFsaywgeyBrZXk6IFwia2FrYW90YWxrLXNoYXJlLXNjcmFwXCIsIHRpdGxlOiBcIlxcdUNFNzRcXHVDRTc0XFx1QzYyNFxcdUQxQTEgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3NjcmFwJyxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsOiAnaHR0cHM6Ly9uYXZlci5jb20nLFxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlkOiAxNzM0OSxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVBcmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+y5tOy5tOyYpO2GoSDqs7XsnKDtlZjquLDroZwg7YyM64qUIOyDge2SiCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDA6ICdodHRwczovL2hleWJvby5jby5rci93ZWIvcHJvZHVjdC9iaWcvMjAxODA4LzllYWFjYzkwZjQxY2I0ZmJlOGFhYTVjZGE3OWJjMGQ5LmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDE6ICdodHRwczovL2tpbWJsb2cuY28ua3Ivd2ViL3Byb2R1Y3QvYmlnLzIwMTgxMC83NTdlZjA3NDEwZDgwNTdkMGY0ZTAwYWEzM2I5OGYyZC5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwyOiAnaHR0cDovL2ltYWdlMi5sb3R0ZWltYWxsLmNvbS9nb29kcy80Ni84Ny82MC8xMjk2NjA4NzQ2X0wuanBnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ3VsYXJQcmljZTogMTIwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFByaWNlOiAxMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2NvdW50UmF0ZTogMTAwIC0gTWF0aC5mbG9vcigoMTAwMDAgLyAxMjAwMCkgKiAxMDApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJrYWthby10aXRsZVwiIH0sIFwiQ1VTVE9NXFx1RDBDMFxcdUM3ODVcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUuS2FrYW9UYWxrLCB7IGtleTogXCJrYWthb3RhbGstc2hhcmUtY3VzdG9tXCIsIHRpdGxlOiBcIlxcdUNFNzRcXHVDRTc0XFx1QzYyNFxcdUQxQTEgXFx1QUNGNVxcdUM3MjBcIiwgZXh0cmE6IHtcbiAgICAgICAgICAgICAgICBhcHBJZDogYXBwSWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVJZDogMTczNDksXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlQXJnczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfsubTsubTsmKTthqEg6rO17Jyg7ZWY6riw66GcIO2MjOuKlCDsg4HtkognLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1VybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwwOiAnaHR0cHM6Ly9oZXlib28uY28ua3Ivd2ViL3Byb2R1Y3QvYmlnLzIwMTgwOC85ZWFhY2M5MGY0MWNiNGZiZThhYWE1Y2RhNzliYzBkOS5qcGcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwxOiAnaHR0cHM6Ly9raW1ibG9nLmNvLmtyL3dlYi9wcm9kdWN0L2JpZy8yMDE4MTAvNzU3ZWYwNzQxMGQ4MDU3ZDBmNGUwMGFhMzNiOThmMmQucG5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsMjogJ2h0dHA6Ly9pbWFnZTIubG90dGVpbWFsbC5jb20vZ29vZHMvNDYvODcvNjAvMTI5NjYwODc0Nl9MLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWd1bGFyUHJpY2U6IDEyMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzY291bnRQcmljZTogMTAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNjb3VudFJhdGU6IDEwMCAtIE1hdGguZmxvb3IoKDEwMDAwIC8gMTIwMDApICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uIChyZXN1bHQsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignS0FLQU8nLCByZXN1bHQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9KSkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==