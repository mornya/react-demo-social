(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/App.jsx":function(e,M,t){"use strict";t.r(M),t.d(M,"default",function(){return g});var L=t("./node_modules/react/index.js"),j=t("./node_modules/@mornya/react-social-libs/dist/index.js"),u=t("./src/constants/configure.js"),a=t("./src/assets/logo.svg"),N=t.n(a);t("./node_modules/@mornya/react-social-libs/dist/res/share.css"),t("./src/App.scss");function g(){return L.createElement("div",{className:"app-wrapper"},L.createElement("img",{src:N.a,className:"app-logo",alt:"React.js Logo"}),L.createElement("header",null,L.createElement("h1",null,"React Social Demo"),L.createElement("p",null,"Social Shares and Widgets are now ready!"),L.createElement("p",null," "),L.createElement("div",{className:"btn-grp"},L.createElement("div",null,L.createElement(j.Share.Band,{title:"밴드 공유"}),L.createElement(j.Share.Email,{title:"e메일 공유"}),L.createElement(j.Share.Facebook,{title:"페이스북 공유",extra:{appId:u.a.social.facebook.appId}}),L.createElement(j.Share.Flipboard,{title:"플립보드 공유"}),L.createElement(j.Share.Gmail,{title:"G메일 공유"}),L.createElement(j.Share.GoogleBookmarks,{title:"구글 북마크 공유"}),L.createElement(j.Share.KakaoStory,{title:"카카오스토리 공유",extra:{appId:u.a.social.kakao.appId,hashtags:["mornya","카카오스토리"]}}),L.createElement(j.Share.KakaoTalk,{title:"카카오톡 공유",extra:{appId:u.a.social.kakao.appId}}),L.createElement(j.Share.Line,{title:"라인 공유"}),L.createElement(j.Share.LinkedIn,{title:"링크드인 공유"}),L.createElement(j.Share.Naver,{title:"네이버 공유"}),L.createElement(j.Share.NaverBlog,{title:"네이버 블로그 공유"}),L.createElement(j.Share.SMS,{title:"SMS 공유",extra:{target:"+821011111111"}}),L.createElement(j.Share.Telegram,{title:"텔레그램 공유",extra:{message:function(){return"아래와 같이 링크를 공유합니다."}}}),L.createElement(j.Share.Tumblr,{title:"텀블러 공유",extra:{hashtags:["mornya","텀블러공유"]}}),L.createElement(j.Share.Twitter,{title:"트위터 공유",extra:{hashtags:["mornya","트위터공유"]}})),L.createElement("hr",null),L.createElement("div",null,L.createElement(j.Widget.FacebookLike,{extra:{appId:u.a.social.facebook.appId,pageUrl:"https://developers.facebook.com/docs/plugins/"}}),L.createElement(j.Widget.FlipboardFlipit,null),L.createElement(j.Widget.KakaoStoryFollow,{extra:{appId:u.a.social.kakao.appId,subscribeChannelId:"mornya"}}),L.createElement(j.Widget.TumblrFollow,{extra:{tumblelog:"mornya"}}),L.createElement(j.Widget.TumblrPost,{extra:{hashtags:["mornya","텀블러공유"]}}),L.createElement(j.Widget.TwitterFollow,{extra:{screenName:"@mornyacom"}}),L.createElement(j.Widget.TwitterMessage,{extra:{screenName:"@mornyacom",recipientId:"3805104374"}}),L.createElement(j.Widget.TwitterTweet,null)),L.createElement("div",null,L.createElement(j.Widget.GoogleHangout,null)))),L.createElement("footer",null,"Copyright 2019 by mornya. All rights reserved."))}},"./src/App.scss":function(e,M,t){},"./src/assets/logo.svg":function(e,M){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+Cgk8ZyBmaWxsPSIjMzIzNjNkIj4KCQk8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgoJCTxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KCQk8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KCTwvZz4KPC9zdmc+Cg=="},"./src/constants/configure.js":function(e,M,t){"use strict";(function(e){t.d(M,"a",function(){return L});const L={social:{facebook:{appId:e.env.FACEBOOK_APPID,scope:e.env.FACEBOOK_SCOPE.split(",").map(e=>e.trim())},google:{scope:e.env.GOOGLE_SCOPE.split(",").map(e=>e.trim())},kakao:{appId:e.env.KAKAO_APPID}}}}).call(this,t("../../mornya-react-vessel/node_modules/node-libs-browser/node_modules/process/browser.js"))}}]);
//# sourceMappingURL=8-c8fb22d3.js.map