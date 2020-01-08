(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{85:function(e,r,t){"use strict";t.r(r),function(e){
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function n(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;var n=Array(e),o=0;for(r=0;r<t;r++)for(var i=arguments[r],a=0,u=i.length;a<u;a++,o++)n[o]=i[a];return n}var o;t.d(r,"Immer",(function(){return me})),t.d(r,"applyPatches",(function(){return Ee})),t.d(r,"createDraft",(function(){return Ae})),t.d(r,"finishDraft",(function(){return ke})),t.d(r,"immerable",(function(){return a})),t.d(r,"isDraft",(function(){return f})),t.d(r,"isDraftable",(function(){return c})),t.d(r,"nothing",(function(){return i})),t.d(r,"original",(function(){return s})),t.d(r,"produce",(function(){return Pe})),t.d(r,"produceWithPatches",(function(){return ze})),t.d(r,"setAutoFreeze",(function(){return Oe})),t.d(r,"setUseProxies",(function(){return je}));var i="undefined"!=typeof Symbol?Symbol("immer-nothing"):((o={})["immer-nothing"]=!0,o),a="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("immer-draftable"):"__$immer_draftable",u="undefined"!=typeof Symbol&&Symbol.for?Symbol.for("immer-state"):"__$immer_state";function f(e){return!!e&&!!e[u]}function c(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e))return!0;var r=Object.getPrototypeOf(e);return!r||r===Object.prototype}(e)||!!e[a]||!!e.constructor[a]||P(e)||O(e))}function s(e){if(e&&e[u])return e[u].base}var l=Object.assign||function(e){for(var r=arguments,t=[],n=1;n<arguments.length;n++)t[n-1]=r[n];return t.forEach((function(r){"object"==typeof r&&null!==r&&Object.keys(r).forEach((function(t){return e[t]=r[t]}))})),e},p="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames;function d(e,r){if(void 0===r&&(r=!1),Array.isArray(e))return e.slice();if(P(e))return new Map(e);if(O(e))return new Set(e);var t=Object.create(Object.getPrototypeOf(e));return p(e).forEach((function(n){if(n!==u){var o=Object.getOwnPropertyDescriptor(e,n),i=o.value;if(o.get){if(!r)throw new Error("Immer drafts cannot have computed properties");i=o.get.call(e)}o.enumerable?t[n]=i:Object.defineProperty(t,n,{value:i,writable:!0,configurable:!0})}})),t}function h(e,r){Array.isArray(e)||P(e)||O(e)?e.forEach((function(t,n){return r(n,t,e)})):p(e).forEach((function(t){return r(t,e[t],e)}))}function v(e,r){var t=Object.getOwnPropertyDescriptor(e,r);return!(!t||!t.enumerable)}function y(e,r){return P(e)?e.has(r):Object.prototype.hasOwnProperty.call(e,r)}function b(e,r){return P(e)?e.get(r):e[r]}function g(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var m="undefined"!=typeof Symbol,w="undefined"!=typeof Map;function P(e){return w&&e instanceof Map}var z="undefined"!=typeof Set;function O(e){return z&&e instanceof Set}function j(e){var r,t;return(r={})[Symbol.iterator]=function(){return t},r.next=e,t=r}function E(e,r,t){var n="values"!==r;return function(){var r=k(e)[Symbol.iterator]();return j((function(){var e=r.next();if(!e.done){var o=e.value[0],i=t.get(o);e.value=n?[o,i]:i}return e}))}}function A(e){return function(r,t){var n="entries"===t;return function(){var t=k(r)[Symbol.iterator]();return j((function(){var o=t.next();if(!o.done){var i=function(r,t){var n=s(t)||t,o=r.drafts.get(n);if(!o){if(r.finalized||!c(t)||r.finalizing)return t;o=e(t,r),r.drafts.set(n,o),r.modified&&r.copy.add(o)}return o}(r,o.value);o.value=n?[i,i]:i}return o}))}}}function k(e){return e.copy||e.base}function x(e){if(!c(e))return e;if(Array.isArray(e))return e.map(x);if(P(e))return new Map(e);if(O(e))return new Set(e);var r=Object.create(Object.getPrototypeOf(e));for(var t in e)r[t]=x(e[t]);return r}function F(e,r){void 0===r&&(r=!1),!c(e)||f(e)||Object.isFrozen(e)||(O(e)?e.add=e.clear=e.delete=S:P(e)&&(e.set=e.clear=e.delete=S),Object.freeze(e),r&&h(e,(function(e,r){return F(r,!0)})))}function S(){throw new Error("This object has been frozen and should not be mutated")}var D=function(){function e(e){this.drafts=[],this.parent=e,this.canAutoFreeze=!0,this.patches=null}return e.prototype.usePatches=function(e){e&&(this.patches=[],this.inversePatches=[],this.patchListener=e)},e.prototype.revoke=function(){this.leave(),this.drafts.forEach(M),this.drafts=null},e.prototype.leave=function(){this===e.current&&(e.current=this.parent)},e.enter=function(){var r=new e(e.current);return e.current=r,r},e}();function M(e){e[u].revoke()}function R(e,r){var t,n=Array.isArray(e),o=C(e);P(e)?(t=o,Object.defineProperties(t,U),m&&Object.defineProperty(t,Symbol.iterator,B(E))):O(e)?function(e){Object.defineProperties(e,L),m&&Object.defineProperty(e,Symbol.iterator,B(J))}(o):h(o,(function(r){!function(e,r,t){var n=K[r];n?n.enumerable=t:K[r]=n={configurable:!0,enumerable:t,get:function(){return function(e,r){G(e);var t=N(I(e),r);if(e.finalizing)return t;if(t===N(e.base,r)&&c(t))return W(e),e.copy[r]=R(t,e);return t}(this[u],r)},set:function(e){!function(e,r,t){if(G(e),e.assigned[r]=!0,!e.modified){if(g(t,N(I(e),r)))return;T(e),W(e)}e.copy[r]=t}(this[u],r,e)}};Object.defineProperty(e,r,n)}(o,r,n||v(e,r))}));var i=r?r.scope:D.current,a={scope:i,modified:!1,finalizing:!1,finalized:!1,assigned:P(e)?new Map:{},parent:r,base:e,draft:o,drafts:O(e)?new Map:null,copy:null,revoke:_,revoked:!1};return function(e,r,t){Object.defineProperty(e,r,{value:t,enumerable:!1,writable:!0})}(o,u,a),i.drafts.push(o),o}function _(){this.revoked=!0}function I(e){return e.copy||e.base}function N(e,r){var t=e[u];if(t&&!t.finalizing){t.finalizing=!0;var n=e[r];return t.finalizing=!1,n}return e[r]}function T(e){e.modified||(e.modified=!0,e.parent&&T(e.parent))}function W(e){e.copy||(e.copy=C(e.base))}function C(e){var r=e&&e[u];if(r){r.finalizing=!0;var t=d(r.draft,!0);return r.finalizing=!1,t}return d(e)}var K={};var U=$({size:function(e){return I(e).size},has:function(e){return function(r){return I(e).has(r)}},set:function(e){return function(r,t){return I(e).get(r)!==t&&(W(e),T(e),e.assigned.set(r,!0),e.copy.set(r,t)),e.draft}},delete:function(e){return function(r){return W(e),T(e),e.assigned.set(r,!1),e.copy.delete(r),!1}},clear:function(e){return function(){e.copy||W(e),T(e),e.assigned=new Map;for(var r=0,t=I(e).keys();r<t.length;r++){var n=t[r];e.assigned.set(n,!1)}return e.copy.clear()}},forEach:function(e,r,t){return function(r){I(e).forEach((function(e,n,o){r(t.get(n),n,o)}))}},get:function(e){return function(r){var t=I(e).get(r);if(e.finalizing||e.finalized||!c(t))return t;if(t!==e.base.get(r))return t;var n=R(t,e);return W(e),e.copy.set(r,n),n}},keys:function(e){return function(){return I(e).keys()}},values:E,entries:E});var J=A(R),L=$({size:function(e){return I(e).size},add:function(e){return function(r){return I(e).has(r)||(T(e),e.copy||W(e),e.copy.add(r)),e.draft}},delete:function(e){return function(r){return T(e),e.copy||W(e),e.copy.delete(r)}},has:function(e){return function(r){return I(e).has(r)}},clear:function(e){return function(){return T(e),e.copy||W(e),e.copy.clear()}},keys:J,entries:J,values:J,forEach:function(e){return function(r,t){for(var n=J(e)(),o=n.next();!o.done;)r.call(t,o.value,o.value,e.draft),o=n.next()}}});function $(e){return Object.keys(e).reduce((function(r,t){var n="size"===t?q:B;return r[t]=n(e[t],t),r}),{})}function q(e){return{get:function(){var r=this[u];return G(r),e(r)}}}function B(e,r){return{get:function(){return function(){for(var t=arguments,n=[],o=0;o<arguments.length;o++)n[o]=t[o];var i=this[u];return G(i),e(i,r,i.draft).apply(void 0,n)}}}}function G(e){if(!0===e.revoked)throw new Error("Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+JSON.stringify(I(e)))}function H(e){for(var r=e.length-1;r>=0;r--){var t=e[r][u];t.modified||(Array.isArray(t.base)?V(t)&&T(t):P(t.base)?X(t)&&T(t):O(t.base)?Y(t)&&T(t):Q(t)&&T(t))}}function Q(e){for(var r=e.base,t=e.draft,n=Object.keys(t),o=n.length-1;o>=0;o--){var i=n[o],a=r[i];if(void 0===a&&!y(r,i))return!0;var f=t[i],c=f&&f[u];if(c?c.base!==a:!g(f,a))return!0}return n.length!==Object.keys(r).length}function V(e){var r=e.draft;if(r.length!==e.base.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);return!(!t||t.get)}function X(e){var r=e.base,t=e.draft;if(r.size!==t.size)return!0;var n=!1;return t.forEach((function(e,t){n||(n=c(e)?e.modified:e!==r.get(t))})),n}function Y(e){var r=e.base,t=e.draft;if(r.size!==t.size)return!0;var n=!1;return t.forEach((function(e,t){n||(n=c(e)?e.modified:!r.has(t))})),n}var Z,ee,re=Object.freeze({__proto__:null,willFinalize:function(e,r,t){e.drafts.forEach((function(e){e[u].finalizing=!0})),t?f(r)&&r[u].scope===e&&H(e.drafts):(e.patches&&function e(r){if(!r||"object"!=typeof r)return;var t=r[u];if(!t)return;var n=t.base,o=t.draft,i=t.assigned;if(Array.isArray(r)){if(V(t)){if(T(t),i.length=!0,o.length<n.length)for(var a=o.length;a<n.length;a++)i[a]=!1;else for(a=n.length;a<o.length;a++)i[a]=!0;for(a=0;a<o.length;a++)void 0===i[a]&&e(o[a])}}else Object.keys(o).forEach((function(r){void 0!==n[r]||y(n,r)?i[r]||e(o[r]):(i[r]=!0,T(t))})),Object.keys(n).forEach((function(e){void 0!==o[e]||y(o,e)||(i[e]=!1,T(t))}))}(e.drafts[0]),H(e.drafts))},createProxy:R});function te(e,r){var t=r?r.scope:D.current,n={scope:t,modified:!1,finalized:!1,assigned:{},parent:r,base:e,draft:null,drafts:{},copy:null,revoke:null},o=n,i=ne;Array.isArray(e)?(o=[n],i=oe):P(e)?(i=ae,n.drafts=new Map,n.assigned=new Map):O(e)&&(i=fe,n.drafts=new Map);var a=Proxy.revocable(o,i),u=a.revoke,f=a.proxy;return n.draft=f,n.revoke=u,t.drafts.push(f),f}var ne={get:function(e,r){if(r===u)return e;var t=e.drafts;if(!e.modified&&y(t,r))return t[r];var n=ce(e)[r];if(e.finalized||!c(n))return n;if(e.modified){if(n!==se(e.base,r))return n;t=e.copy}return t[r]=te(n,e)},has:function(e,r){return r in ce(e)},ownKeys:function(e){return Reflect.ownKeys(ce(e))},set:function(e,r,t){if(!e.modified){var n=se(e.base,r);if(t?g(n,t)||t===e.drafts[r]:g(n,t)&&r in e.base)return!0;le(e)}return e.assigned[r]=!0,e.copy[r]=t,!0},deleteProperty:function(e,r){return void 0!==se(e.base,r)||r in e.base?(e.assigned[r]=!1,le(e)):e.assigned[r]&&delete e.assigned[r],e.copy&&delete e.copy[r],!0},getOwnPropertyDescriptor:function(e,r){var t=ce(e),n=Reflect.getOwnPropertyDescriptor(t,r);return n&&(n.writable=!0,n.configurable=!Array.isArray(t)||"length"!==r),n},defineProperty:function(){throw new Error("Object.defineProperty() cannot be used on an Immer draft")},getPrototypeOf:function(e){return Object.getPrototypeOf(e.base)},setPrototypeOf:function(){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}},oe={};h(ne,(function(e,r){oe[e]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),oe.deleteProperty=function(e,r){if(isNaN(parseInt(r)))throw new Error("Immer only supports deleting array indices");return ne.deleteProperty.call(this,e[0],r)},oe.set=function(e,r,t){if("length"!==r&&isNaN(parseInt(r)))throw new Error("Immer only supports setting array indices and the 'length' property");return ne.set.call(this,e[0],r,t,e[0])};var ie=["ownKeys","has","set","deleteProperty","defineProperty","getOwnPropertyDescriptor","preventExtensions","isExtensible","getPrototypeOf"].reduce((function(e,r){return e[r]=function(e){for(var t=arguments,o=[],i=1;i<arguments.length;i++)o[i-1]=t[i];return Reflect[r].apply(Reflect,n([ce(e)],o))},e}),{}),ae=pe(((Z={})[u]=function(e){return e},Z.size=function(e){return ce(e).size},Z.has=function(e){return function(r){return ce(e).has(r)}},Z.set=function(e){return function(r,t){var n=ce(e);return n.has(r)&&n.get(r)===t||(le(e),e.assigned.set(r,!0),e.copy.set(r,t)),e.draft}},Z.delete=function(e){return function(r){return!!ce(e).has(r)&&(le(e),e.assigned.set(r,!1),e.copy.delete(r))}},Z.clear=function(e){return function(){return le(e),e.assigned=new Map,h(ce(e).keys(),(function(r,t){e.assigned.set(t,!1)})),e.copy.clear()}},Z.forEach=function(e,r,t){return function(r,n){return ce(e).forEach((function(e,o,i){var a=t.get(o);r.call(n,a,o,i)}))}},Z.get=function(e){return function(r){var t=e.modified?e.copy:e.drafts;if(t.has(r)){var n=t.get(r);if(f(n)||!c(n))return n;var o=te(n,e);return t.set(r,o),o}var i=ce(e).get(r);if(e.finalized||!c(i))return i;var a=te(i,e);return t.set(r,a),a}},Z.keys=function(e){return function(){return ce(e).keys()}},Z.values=E,Z.entries=E,Z[m?Symbol.iterator:"@@iterator"]=E,Z)),ue=A(te),fe=pe(((ee={})[u]=function(e){return e},ee.size=function(e){return ce(e).size},ee.has=function(e){return function(r){return ce(e).has(r)}},ee.add=function(e){return function(r){return ce(e).has(r)||(le(e),e.copy.add(r)),e.draft}},ee.delete=function(e){return function(r){return le(e),e.copy.delete(r)}},ee.clear=function(e){return function(){return le(e),e.copy.clear()}},ee.forEach=function(e){return function(r,t){for(var n=ue(e)(),o=n.next();!o.done;)r.call(t,o.value,o.value,e.draft),o=n.next()}},ee.keys=ue,ee.values=ue,ee.entries=ue,ee[m?Symbol.iterator:"@@iterator"]=ue,ee));function ce(e){return e.copy||e.base}function se(e,r){var t=e[u],n=Reflect.getOwnPropertyDescriptor(t?ce(t):e,r);return n&&n.value}function le(e){if(!e.modified){e.modified=!0;var r=e.base,t=e.drafts,n=e.parent,o=d(r);O(r)?(i=o,t.forEach((function(e){var r=s(e);r&&i.delete(r),i.add(e)}))):(P(r)?function(e,r){r.forEach((function(r,t){return e.set(t,r)}))}(o,t):l(o,t),e.drafts=null),e.copy=o,n&&le(n)}var i}function pe(e){return l({},ie,{get:function(r,t,n){return e.hasOwnProperty(t)?e[t](r,t,n):Reflect.get(r,t,n)},setPrototypeOf:function(e){throw new Error("Object.setPrototypeOf() cannot be used on an Immer draft")}})}var de=Object.freeze({__proto__:null,willFinalize:function(){},createProxy:te});function he(e,r,t,n){var o,i,a=e.base,u=e.copy,f=e.assigned;u.length<a.length&&(a=(o=[u,a])[0],u=o[1],t=(i=[n,t])[0],n=i[1]);for(var c=u.length-a.length,s=0;a[s]===u[s]&&s<a.length;)++s;for(var l=a.length;l>s&&a[l-1]===u[l+c-1];)--l;for(var p=s;p<l;++p)if(f[p]&&u[p]!==a[p]){var d=r.concat([p]);t.push({op:"replace",path:d,value:u[p]}),n.push({op:"replace",path:d,value:a[p]})}var h=t.length;for(p=l+c-1;p>=l;--p){d=r.concat([p]);t[h+p-l]={op:"add",path:d,value:u[p]},n.push({op:"remove",path:d})}}function ve(e,r,t,n){var o=e.base,i=e.copy;h(e.assigned,(function(e,a){var u=b(o,e),f=b(i,e),c=a?y(o,e)?"replace":"add":"remove";if(u!==f||"replace"!==c){var s=r.concat(e);t.push("remove"===c?{op:c,path:s}:{op:c,path:s,value:f}),n.push("add"===c?{op:"remove",path:s}:"remove"===c?{op:"add",path:s,value:u}:{op:"replace",path:s,value:u})}}))}function ye(e,r,t,n){var o=e.base,i=e.copy,a=0;o.forEach((function(e){if(!i.has(e)){var o=r.concat([a]);t.push({op:"remove",path:o,value:e}),n.unshift({op:"add",path:o,value:e})}a++})),a=0,i.forEach((function(e){if(!o.has(e)){var i=r.concat([a]);t.push({op:"add",path:i,value:e}),n.unshift({op:"remove",path:i,value:e})}a++}))}function be(e,r){return r.forEach((function(r){var t=r.path,n=r.op;if(!t.length)throw new Error("Illegal state");for(var o=e,i=0;i<t.length-1;i++)if(!(o=b(o,t[i]))||"object"!=typeof o)throw new Error("Cannot apply patch, path doesn't resolve: "+t.join("/"));var a=x(r.value),u=t[t.length-1];switch(n){case"replace":if(P(o))o.set(u,a);else{if(O(o))throw new Error('Sets cannot have "replace" patches.');o[u]=a}break;case"add":O(o)&&o.delete(r.value),Array.isArray(o)?o.splice(u,0,a):P(o)?o.set(u,a):O(o)?o.add(a):o[u]=a;break;case"remove":Array.isArray(o)?o.splice(u,1):P(o)?o.delete(u):O(o)?o.delete(r.value):delete o[u];break;default:throw new Error("Unsupported patch operation: "+n)}})),e}var ge={useProxies:"undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,autoFreeze:void 0===e&&"verifyMinified"===function(){}.name,onAssign:null,onDelete:null,onCopy:null},me=function(){function e(e){this.useProxies=!1,this.autoFreeze=!1,l(this,ge,e),this.setUseProxies(this.useProxies),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}return e.prototype.produce=function(e,r,t){var o,a=this;if("function"==typeof e&&"function"!=typeof r){var u=r;r=e;var f=this;return function(e){var t=arguments,o=this;void 0===e&&(e=u);for(var i=[],a=1;a<arguments.length;a++)i[a-1]=t[a];return f.produce(e,(function(e){return r.call.apply(r,n([o,e],i))}))}}if("function"!=typeof r)throw new Error("The first or second argument to `produce` must be a function");if(void 0!==t&&"function"!=typeof t)throw new Error("The third argument to `produce` must be a function or undefined");if(c(e)){var s=D.enter(),l=this.createProxy(e),p=!0;try{o=r(l),p=!1}finally{p?s.revoke():s.leave()}return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(e){return s.usePatches(t),a.processResult(e,s)}),(function(e){throw s.revoke(),e})):(s.usePatches(t),this.processResult(o,s))}if((o=r(e))!==i)return void 0===o&&(o=e),this.maybeFreeze(o,!0),o},e.prototype.produceWithPatches=function(e,r,t){var o,i,a=this;if("function"==typeof e)return function(r){for(var t=arguments,o=[],i=1;i<arguments.length;i++)o[i-1]=t[i];return a.produceWithPatches(r,(function(r){return e.apply(void 0,n([r],o))}))};if(t)throw new Error("A patch listener cannot be passed to produceWithPatches");return[this.produce(e,r,(function(e,r){o=e,i=r})),o,i]},e.prototype.createDraft=function(e){if(!c(e))throw new Error("First argument to `createDraft` must be a plain object, an array, or an immerable object");var r=D.enter(),t=this.createProxy(e);return t[u].isManual=!0,r.leave(),t},e.prototype.finishDraft=function(e,r){var t=e&&e[u];if(!t||!t.isManual)throw new Error("First argument to `finishDraft` must be a draft returned by `createDraft`");if(t.finalized)throw new Error("The given draft is already finalized");var n=t.scope;return n.usePatches(r),this.processResult(void 0,n)},e.prototype.setAutoFreeze=function(e){this.autoFreeze=e},e.prototype.setUseProxies=function(e){this.useProxies=e,l(this,e?de:re)},e.prototype.applyPatches=function(e,r){var t;for(t=r.length-1;t>=0;t--){var n=r[t];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}return f(e)?be(e,r):this.produce(e,(function(e){return be(e,r.slice(t+1))}))},e.prototype.processResult=function(e,r){var t=r.drafts[0],n=void 0!==e&&e!==t;if(this.willFinalize(r,e,n),n){if(t[u].modified)throw r.revoke(),new Error("An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.");c(e)&&(e=this.finalize(e,null,r),this.maybeFreeze(e)),r.patches&&(r.patches.push({op:"replace",path:[],value:e}),r.inversePatches.push({op:"replace",path:[],value:t[u].base}))}else e=this.finalize(t,[],r);return r.revoke(),r.patches&&r.patchListener(r.patches,r.inversePatches),e!==i?e:void 0},e.prototype.finalize=function(e,r,t){var n=this,o=e[u];if(!o)return Object.isFrozen(e)?e:this.finalizeTree(e,null,t);if(o.scope!==t)return e;if(!o.modified)return this.maybeFreeze(o.base,!0),o.base;if(!o.finalized){if(o.finalized=!0,this.finalizeTree(o.draft,r,t),this.onDelete&&!O(o.base))if(this.useProxies){h(o.assigned,(function(e,r){var t,i;r||null===(i=(t=n).onDelete)||void 0===i||i.call(t,o,e)}))}else{var i=o.base,a=o.copy;h(i,(function(e){var r,t;y(a,e)||null===(t=(r=n).onDelete)||void 0===t||t.call(r,o,e)}))}this.onCopy&&this.onCopy(o),this.autoFreeze&&t.canAutoFreeze&&F(o.copy,!1),r&&t.patches&&function(e,r,t,n){(Array.isArray(e.base)?he:O(e.base)?ye:ve)(e,r,t,n)}(o,r,t.patches,t.inversePatches)}return o.copy},e.prototype.finalizeTree=function(e,r,t){var n=this,o=e[u];o&&(this.useProxies||(o.copy=d(o.draft,!0)),e=o.copy);var i=!!r&&!!t.patches,a=function(u,s,l){if(s===l)throw Error("Immer forbids circular references");var p=!!o&&l===e,d=O(l);if(f(s)){var m=p&&i&&!d&&!y(o.assigned,u)?r.concat(u):null;if(function(e,r,t){P(e)?e.set(r,t):O(e)?(e.delete(r),e.add(t)):Array.isArray(e)||v(e,r)?e[r]=t:Object.defineProperty(e,r,{value:t,writable:!0,configurable:!0})}(l,u,s=n.finalize(s,m,t)),f(s)&&(t.canAutoFreeze=!1),p&&s===b(o.base,u))return}else{if(p&&g(s,b(o.base,u)))return;c(s)&&!Object.isFrozen(s)&&(h(s,a),n.maybeFreeze(s))}p&&n.onAssign&&!d&&n.onAssign(o,u,s)};return h(e,a),e},e.prototype.maybeFreeze=function(e,r){void 0===r&&(r=!1),this.autoFreeze&&!f(e)&&F(e,r)},e}();var we=new me,Pe=we.produce,ze=we.produceWithPatches.bind(we),Oe=we.setAutoFreeze.bind(we),je=we.setUseProxies.bind(we),Ee=we.applyPatches.bind(we),Ae=we.createDraft.bind(we),ke=we.finishDraft.bind(we);r.default=Pe}.call(this,t(29))}}]);
//# sourceMappingURL=vendors~vendor-d8ff14a4.js.map