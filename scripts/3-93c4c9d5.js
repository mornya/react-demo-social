(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(0),a=n.n(r),o=n(31),i=n(10),c=n(4),l=n(1);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=n(8),d=n(13),f=n.n(d);function h(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var p=a.a.createContext();var m=function(e){return e};function y(e){var t=e.resolve,n=void 0===t?m:t,r=e.render,o=e.onLoad;function i(e,t){void 0===t&&(t={});var i=function(e){return"function"==typeof e?{requireAsync:e}:e}(e),d={};function f(e){return t.cacheKey?t.cacheKey(e):i.resolve?i.resolve(e):null}var m,y=function(e){function a(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:f(n)},r.promise=null,h(!n.__chunkExtractor||i.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(i.requireAsync(n).catch((function(){})),r.loadSync(),n.__chunkExtractor.addChunk(i.chunkName(n))),u(r)):(!1!==t.ssr&&i.isReady&&i.isReady(n)&&r.loadSync(),r)}Object(s.a)(a,e),a.getDerivedStateFromProps=function(e,t){var n=f(e);return Object(l.a)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var p=a.prototype;return p.componentDidMount=function(){this.mounted=!0,this.state.loading?this.loadAsync():this.state.error||this.triggerOnLoad()},p.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&(this.promise=null,this.loadAsync())},p.componentWillUnmount=function(){this.mounted=!1},p.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},p.triggerOnLoad=function(){var e=this;o&&setTimeout((function(){o(e.state.result,e.props)}))},p.loadSync=function(){if(this.state.loading)try{var e=i.requireSync(this.props),t=n(e,{Loadable:b});this.state.result=t,this.state.loading=!1}catch(e){this.state.error=e}},p.getCacheKey=function(){return f(this.props)||JSON.stringify(this.props)},p.getCache=function(){return d[this.getCacheKey()]},p.setCache=function(e){d[this.getCacheKey()]=e},p.loadAsync=function(){var e=this;if(!this.promise){var r=this.props,a=(r.__chunkExtractor,r.forwardedRef,Object(c.a)(r,["__chunkExtractor","forwardedRef"]));this.promise=i.requireAsync(a).then((function(r){var a=n(r,{Loadable:b});t.suspense&&e.setCache(a),e.safeSetState({result:n(r,{Loadable:b}),loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){e.safeSetState({error:t,loading:!1})}))}return this.promise},p.render=function(){var e=this.props,n=e.forwardedRef,a=e.fallback,o=(e.__chunkExtractor,Object(c.a)(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,u=i.error,s=i.loading,d=i.result;if(t.suspense){var f=this.getCache();if(!f)throw this.loadAsync();return r({loading:!1,fallback:null,result:f,options:t,props:Object(l.a)({},o,{ref:n})})}if(u)throw u;var h=a||t.fallback||null;return s?h:r({loading:s,fallback:h,result:d,options:t,props:Object(l.a)({},o,{ref:n})})},a}(a.a.Component),v=(m=y,function(e){return a.a.createElement(p.Consumer,null,(function(t){return a.a.createElement(m,Object.assign({__chunkExtractor:t},e))}))}),b=a.a.forwardRef((function(e,t){return a.a.createElement(v,Object.assign({forwardedRef:t},e))}));return b.preload=function(e){i.requireAsync(e)},b.load=function(e){return i.requireAsync(e)},b}return{loadable:i,lazy:function(e,t){return i(e,Object(l.a)({},t,{suspense:!0}))}}}var v=y({resolve:function(e,t){var n=t.Loadable,r=e.__esModule?e.default:e.default||e;return f()(n,r,{preload:!0}),r},render:function(e){var t=e.result,n=e.props;return a.a.createElement(t,n)}}),b=v.loadable,g=v.lazy,E=y({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.loading,r=e.props;return!n&&r.children?r.children(t):null}}),k=E.loadable,w=E.lazy;var S=b;S.lib=k,g.lib=w;var _=S,R=(n(83),n(84),_((function(){return n.e(5).then(n.bind(null,86))}))),O=_((function(){return n.e(4).then(n.bind(null,85))}));function C(){return r.createElement("div",{className:"app-wrapper"},r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{to:"/"},"Home")),r.createElement("li",null,r.createElement(o.Link,{to:"/kakao"},"KakaoShare")))),r.createElement("header",null,r.createElement("h1",null,"React Demo"),r.createElement("p",null,"Social Share and Widget library is now ready!"),r.createElement("br",null),r.createElement(i.d,{exact:!0,path:"/",component:R}),r.createElement(i.d,{path:"/kakao",component:O})),r.createElement("footer",null,"Copyright 2020. mornya. All rights reserved."))}},83:function(e,t,n){},84:function(e,t,n){}}]);
//# sourceMappingURL=3-93c4c9d5.js.map