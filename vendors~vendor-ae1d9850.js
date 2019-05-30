(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{47:function(e,r,t){"use strict";t.r(r),function(e){var n;t.d(r,"Immer",function(){return L}),t.d(r,"applyPatches",function(){return H}),t.d(r,"createDraft",function(){return Q}),t.d(r,"finishDraft",function(){return V}),t.d(r,"immerable",function(){return o}),t.d(r,"isDraft",function(){return f}),t.d(r,"isDraftable",function(){return s}),t.d(r,"nothing",function(){return i}),t.d(r,"original",function(){return u}),t.d(r,"produce",function(){return q}),t.d(r,"setAutoFreeze",function(){return B}),t.d(r,"setUseProxies",function(){return G});var i="undefined"!=typeof Symbol?Symbol("immer-nothing"):((n={})["immer-nothing"]=!0,n),o="undefined"!=typeof Symbol?Symbol.for("immer-draftable"):"__$immer_draftable",a="undefined"!=typeof Symbol?Symbol.for("immer-state"):"__$immer_state";function f(e){return!!e&&!!e[a]}function s(e){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e))return!0;var r=Object.getPrototypeOf(e);return!r||r===Object.prototype||(!!e[o]||!!e.constructor[o])}function u(e){if(e&&e[a])return e[a].base}var c=Object.assign||function(e,r){for(var t in r)y(r,t)&&(e[t]=r[t]);return e},p="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function l(e,r){if(void 0===r&&(r=!1),Array.isArray(e))return e.slice();var t=Object.create(Object.getPrototypeOf(e));return p(e).forEach(function(n){if(n!==a){var i=Object.getOwnPropertyDescriptor(e,n),o=i.value;if(i.get){if(!r)throw new Error("Immer drafts cannot have computed properties");o=i.get.call(e)}i.enumerable?t[n]=o:Object.defineProperty(t,n,{value:o,writable:!0,configurable:!0})}}),t}function d(e,r){if(Array.isArray(e))for(var t=0;t<e.length;t++)r(t,e[t],e);else p(e).forEach(function(t){return r(t,e[t],e)})}function h(e,r){return Object.getOwnPropertyDescriptor(e,r).enumerable}function y(e,r){return Object.prototype.hasOwnProperty.call(e,r)}function v(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var b=function(e){this.drafts=[],this.parent=e,this.canAutoFreeze=!0,this.patches=null};function g(e){e[a].revoke()}b.prototype.usePatches=function(e){e&&(this.patches=[],this.inversePatches=[],this.patchListener=e)},b.prototype.revoke=function(){this.leave(),this.drafts.forEach(g),this.drafts=null},b.prototype.leave=function(){this===b.current&&(b.current=this.parent)},b.current=null,b.enter=function(){return this.current=new b(this.current)};var m={};function w(e,r){var t=Array.isArray(e),n=k(e);d(n,function(r){!function(e,r,t){var n=m[r];n?n.enumerable=t:m[r]=n={configurable:!0,enumerable:t,get:function(){return function(e,r){D(e);var t=z(O(e),r);if(e.finalizing)return t;if(t===z(e.base,r)&&s(t))return A(e),e.copy[r]=w(t,e);return t}(this[a],r)},set:function(e){!function(e,r,t){if(D(e),e.assigned[r]=!0,!e.modified){if(v(t,z(O(e),r)))return;j(e),A(e)}e.copy[r]=t}(this[a],r,e)}};Object.defineProperty(e,r,n)}(n,r,t||h(e,r))});var i,o,f,u=r?r.scope:b.current;return i=n,o=a,f={scope:u,modified:!1,finalizing:!1,finalized:!1,assigned:{},parent:r,base:e,draft:n,copy:null,revoke:P,revoked:!1},Object.defineProperty(i,o,{value:f,enumerable:!1,writable:!0}),u.drafts.push(n),n}function P(){this.revoked=!0}function O(e){return e.copy||e.base}function z(e,r){var t=e[a];if(t&&!t.finalizing){t.finalizing=!0;var n=e[r];return t.finalizing=!1,n}return e[r]}function j(e){e.modified||(e.modified=!0,e.parent&&j(e.parent))}function A(e){e.copy||(e.copy=k(e.base))}function k(e){var r=e&&e[a];if(r){r.finalizing=!0;var t=l(r.draft,!0);return r.finalizing=!1,t}return l(e)}function D(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(O(e)))}function E(e){for(var r=e.length-1;r>=0;r--){var t=e[r][a];t.modified||(Array.isArray(t.base)?F(t)&&j(t):x(t)&&j(t))}}function x(e){for(var r=e.base,t=e.draft,n=Object.keys(t),i=n.length-1;i>=0;i--){var o=n[i],f=r[o];if(void 0===f&&!y(r,o))return!0;var s=t[o],u=s&&s[a];if(u?u.base!==f:!v(s,f))return!0}return n.length!==Object.keys(r).length}function F(e){var r=e.draft;if(r.length!==e.base.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);return!(!t||t.get)}var R=Object.freeze({willFinalize:function(e,r,t){e.drafts.forEach(function(e){e[a].finalizing=!0}),t?f(r)&&r[a].scope===e&&E(e.drafts):(e.patches&&function e(r){if(r&&"object"==typeof r){var t=r[a];if(t){var n=t.base,i=t.draft,o=t.assigned;if(Array.isArray(r)){if(F(t)){if(j(t),o.length=!0,i.length<n.length)for(var f=i.length;f<n.length;f++)o[f]=!1;else for(var s=n.length;s<i.length;s++)o[s]=!0;for(var u=0;u<i.length;u++)void 0===o[u]&&e(i[u])}}else Object.keys(i).forEach(function(r){void 0!==n[r]||y(n,r)?o[r]||e(i[r]):(o[r]=!0,j(t))}),Object.keys(n).forEach(function(e){void 0!==i[e]||y(i,e)||(o[e]=!1,j(t))})}}}(e.drafts[0]),E(e.drafts))},createProxy:w});function I(e,r){var t=r?r.scope:b.current,n={scope:t,modified:!1,finalized:!1,assigned:{},parent:r,base:e,draft:null,drafts:{},copy:null,revoke:null},i=Array.isArray(e)?Proxy.revocable([n],N):Proxy.revocable(n,S),o=i.revoke,a=i.proxy;return n.draft=a,n.revoke=o,t.drafts.push(a),a}var S={get:function(e,r){if(r===a)return e;var t=e.drafts;if(!e.modified&&y(t,r))return t[r];var n=T(e)[r];if(e.finalized||!s(n))return n;if(e.modified){if(n!==_(e.base,r))return n;t=e.copy}return t[r]=I(n,e)},has:function(e,r){return r in T(e)},ownKeys:function(e){return Reflect.ownKeys(T(e))},set:function(e,r,t){if(!e.modified){var n=_(e.base,r),i=t?v(n,t)||t===e.drafts[r]:v(n,t)&&r in e.base;if(i)return!0;C(e)}return e.assigned[r]=!0,e.copy[r]=t,!0},deleteProperty:function(e,r){(void 0!==_(e.base,r)||r in e.base)&&(e.assigned[r]=!1,C(e));e.copy&&delete e.copy[r];return!0},getOwnPropertyDescriptor:function(e,r){var t=T(e),n=Reflect.getOwnPropertyDescriptor(t,r);n&&(n.writable=!0,n.configurable=!Array.isArray(t)||"length"!==r);return n},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},N={};function T(e){return e.copy||e.base}function _(e,r){var t=e[a],n=Reflect.getOwnPropertyDescriptor(t?T(t):e,r);return n&&n.value}function C(e){e.modified||(e.modified=!0,e.copy=c(l(e.base),e.drafts),e.drafts=null,e.parent&&C(e.parent))}d(S,function(e,r){N[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}}),N.deleteProperty=function(e,r){if(isNaN(parseInt(r)))throw new Error("Immer only supports deleting array indices");return S.deleteProperty.call(this,e[0],r)},N.set=function(e,r,t){if("length"!==r&&isNaN(parseInt(r)))throw new Error("Immer only supports setting array indices and the 'length' property");return S.set.call(this,e[0],r,t)};var U=Object.freeze({willFinalize:function(){},createProxy:I});function K(e,r,t,n){Array.isArray(e.base)?function(e,r,t,n){var i,o,a=e.base,f=e.copy,s=e.assigned;f.length<a.length&&(a=(i=[f,a])[0],f=i[1],t=(o=[n,t])[0],n=o[1]);var u=f.length-a.length,c=0;for(;a[c]===f[c]&&c<a.length;)++c;var p=a.length;for(;p>c&&a[p-1]===f[p+u-1];)--p;for(var l=c;l<p;++l)if(s[l]&&f[l]!==a[l]){var d=r.concat([l]);t.push({op:"replace",path:d,value:f[l]}),n.push({op:"replace",path:d,value:a[l]})}for(var h=p!=a.length,y=t.length,v=p+u-1;v>=p;--v){var b=r.concat([v]);t[y+v-p]={op:"add",path:b,value:f[v]},h&&n.push({op:"remove",path:b})}h||n.push({op:"replace",path:r.concat(["length"]),value:a.length})}(e,r,t,n):function(e,r,t,n){var i=e.base,o=e.copy;d(e.assigned,function(e,a){var f=i[e],s=o[e],u=a?e in i?"replace":"add":"remove";if(f!==s||"replace"!==u){var c=r.concat(e);t.push("remove"===u?{op:u,path:c}:{op:u,path:c,value:s}),n.push("add"===u?{op:"remove",path:c}:"remove"===u?{op:"add",path:c,value:f}:{op:"replace",path:c,value:f})}})}(e,r,t,n)}function J(e,r){for(var t=0;t<r.length;t++){var n=r[t],i=n.path;if(0===i.length&&"replace"===n.op)e=n.value;else{for(var o=e,a=0;a<i.length-1;a++)if(!(o=o[i[a]])||"object"!=typeof o)throw new Error("Cannot apply patch, path doesn't resolve: "+i.join("/"));var f=i[i.length-1];switch(n.op){case"replace":o[f]=n.value;break;case"add":Array.isArray(o)?o.splice(f,0,n.value):o[f]=n.value;break;case"remove":Array.isArray(o)?o.splice(f,1):delete o[f];break;default:throw new Error("Unsupported patch operation: "+n.op)}}}return e}var M={useProxies:"undefined"!=typeof Proxy&&"undefined"!=typeof Reflect,autoFreeze:void 0===e&&"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},L=function(e){c(this,M,e),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this)};L.prototype.produce=function(e,r,t){var n,o=this;if("function"==typeof e&&"function"!=typeof r){var a=r;return r=e,function(e){void 0===e&&(e=a);for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];return o.produce(e,function(e){return r.call.apply(r,[e,e].concat(t))})}}if("function"!=typeof r)throw new Error("The first or second argument to `produce` must be a function");if(void 0!==t&&"function"!=typeof t)throw new Error("The third argument to `produce` must be a function or undefined");if(s(e)){var f=b.enter(),u=this.createProxy(e),c=!0;try{n=r.call(u,u),c=!1}finally{c?f.revoke():f.leave()}return n instanceof Promise?n.then(function(e){return f.usePatches(t),o.processResult(e,f)},function(e){throw f.revoke(),e}):(f.usePatches(t),this.processResult(n,f))}return void 0===(n=r(e))?e:n!==i?n:void 0},L.prototype.createDraft=function(e){if(!s(e))throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object");var r=b.enter(),t=this.createProxy(e);return t[a].isManual=!0,r.leave(),t},L.prototype.finishDraft=function(e,r){var t=e&&e[a];if(!t||!t.isManual)throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`");if(t.finalized)throw new Error("The given draft is already finalized");var n=t.scope;return n.usePatches(r),this.processResult(void 0,n)},L.prototype.setAutoFreeze=function(e){this.autoFreeze=e},L.prototype.setUseProxies=function(e){this.useProxies=e,c(this,e?U:R)},L.prototype.applyPatches=function(e,r){return f(e)?J(e,r):this.produce(e,function(e){return J(e,r)})},L.prototype.processResult=function(e,r){var t=r.drafts[0],n=void 0!==e&&e!==t;if(this.willFinalize(r,e,n),n){if(t[a].modified)throw r.revoke(),new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");s(e)&&(e=this.finalize(e,null,r)),r.patches&&(r.patches.push({op:"replace",path:[],value:e}),r.inversePatches.push({op:"replace",path:[],value:t[a].base}))}else e=this.finalize(t,[],r);return r.revoke(),r.patches&&r.patchListener(r.patches,r.inversePatches),e!==i?e:void 0},L.prototype.finalize=function(e,r,t){var n=this,i=e[a];if(!i)return Object.isFrozen(e)?e:this.finalizeTree(e,null,t);if(i.scope!==t)return e;if(!i.modified)return i.base;if(!i.finalized){if(i.finalized=!0,this.finalizeTree(i.draft,r,t),this.onDelete)if(this.useProxies){var o=i.assigned;for(var f in o)o[f]||this.onDelete(i,f)}else{var s=i.base,u=i.copy;d(s,function(e){y(u,e)||n.onDelete(i,e)})}this.onCopy&&this.onCopy(i),this.autoFreeze&&t.canAutoFreeze&&Object.freeze(i.copy),r&&t.patches&&K(i,r,t.patches,t.inversePatches)}return i.copy},L.prototype.finalizeTree=function(e,r,t){var n=this,i=e[a];i&&(this.useProxies||(i.copy=l(i.draft,!0)),e=i.copy);var o=!!r&&!!t.patches,u=function(a,c,p){if(c===p)throw Error("Immer forbids circular references");var l=!!i&&p===e;if(f(c)){var y=l&&o&&!i.assigned[a]?r.concat(a):null;if(f(c=n.finalize(c,y,t))&&(t.canAutoFreeze=!1),Array.isArray(p)||h(p,a)?p[a]=c:Object.defineProperty(p,a,{value:c}),l&&c===i.base[a])return}else{if(l&&v(c,i.base[a]))return;s(c)&&!Object.isFrozen(c)&&d(c,u)}l&&n.onAssign&&n.onAssign(i,a,c)};return d(e,u),e};var $=new L,q=$.produce,B=$.setAutoFreeze.bind($),G=$.setUseProxies.bind($),H=$.applyPatches.bind($),Q=$.createDraft.bind($),V=$.finishDraft.bind($);r.default=q}.call(this,t(17))}}]);
//# sourceMappingURL=vendors~vendor-ae1d9850.js.map