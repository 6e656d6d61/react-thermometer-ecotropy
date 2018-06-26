module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=11)}([function(e,t,r){"use strict";e.exports=r(10)},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,r){var n={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,s=0,l=[],m=r(1);function u(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function c(e,t){for(var r=[],n={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function p(e,t){var r=i(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=l[l.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),l.push(t);else if("bottom"===e.insertAt)r.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertInto+" "+e.insertAt.before);r.insertBefore(t,o)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function h(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),d(t,e.attrs),p(e,t),t}function d(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function b(e,t){var r,n,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var l=s++;r=a||(a=h(t)),n=g.bind(null,r,l,!1),o=g.bind(null,r,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",d(t,e.attrs),p(e,t),t}(t),n=function(e,t,r){var n=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(n=m(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,t),o=function(){f(r),r.href&&URL.revokeObjectURL(r.href)}):(r=h(t),n=function(e,t){var r=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){f(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=c(e,t);return u(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i];(s=n[a.id]).refs--,o.push(s)}e&&u(c(e,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete n[s.id]}}}};var _=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}();function g(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[r].concat(i).concat([o]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(n[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(e,t,r){(e.exports=r(3)(!1)).push([e.i,'.thermometer .thermometer__mercury {\n  transition: all .5s ease-in-out; }\n\n.thermometer .thermometer__percent-current:before, .thermometer .thermometer__percent-current:after, .thermometer .thermometer__draw-b:after, .thermometer .thermometer__draw-b:before {\n  content: "";\n  margin: auto; }\n\n.thermometer ul.thermometer__statistics {\n  font-size: 11px;\n  font-style: italic;\n  font-weight: 500; }\n\n.thermometer .thermometer__percent-current {\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 500; }\n\n.thermometer ul.thermometer__statistics {\n  margin: 0;\n  padding: 0; }\n\n.thermometer--small ul.thermometer__statistics li {\n  width: 52px;\n  padding-left: 8px; }\n\n.thermometer--small .thermometer__draw-a {\n  width: 14px; }\n  .thermometer--small .thermometer__draw-a:after {\n    position: absolute;\n    top: initial;\n    right: initial;\n    bottom: -12px;\n    left: -10px;\n    width: 34px;\n    height: 34px; }\n\n.thermometer--small .thermometer__draw-b:before {\n  width: 4px; }\n\n.thermometer--small .thermometer__draw-b:after {\n  position: absolute;\n  top: 13px;\n  right: 0;\n  bottom: initial;\n  left: 0;\n  width: 24px;\n  height: 24px; }\n\n.thermometer--small .thermometer__meter {\n  width: 4px; }\n\n.thermometer--normal ul.thermometer__statistics li {\n  width: 42px;\n  padding-left: 13px; }\n\n.thermometer--normal .thermometer__draw-a {\n  width: 30px; }\n  .thermometer--normal .thermometer__draw-a:after {\n    position: absolute;\n    top: initial;\n    right: initial;\n    bottom: -20px;\n    left: -10px;\n    width: 50px;\n    height: 50px; }\n\n.thermometer--normal .thermometer__draw-b:before {\n  width: 10px; }\n\n.thermometer--normal .thermometer__draw-b:after {\n  position: absolute;\n  top: 8px;\n  right: 0;\n  bottom: initial;\n  left: 0;\n  width: 34px;\n  height: 34px; }\n\n.thermometer--normal .thermometer__meter {\n  width: 10px; }\n\n.thermometer--large ul.thermometer__statistics li {\n  width: 52px;\n  padding-left: 34px; }\n\n.thermometer--large .thermometer__draw-a {\n  width: 50px; }\n  .thermometer--large .thermometer__draw-a:after {\n    position: absolute;\n    top: initial;\n    right: initial;\n    bottom: -30px;\n    left: -10px;\n    width: 70px;\n    height: 70px; }\n\n.thermometer--large .thermometer__draw-b:before {\n  width: 30px; }\n\n.thermometer--large .thermometer__draw-b:after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: initial;\n  left: 0;\n  width: 50px;\n  height: 50px; }\n\n.thermometer--large .thermometer__meter {\n  width: 30px; }\n\n.thermometer--theme-light .thermometer__draw-a, .thermometer--theme-light .thermometer__draw-a:before, .thermometer--theme-light .thermometer__draw-a:after {\n  background-color: #fff; }\n\n.thermometer--theme-light .thermometer__meter {\n  background-color: #d6d6d6; }\n\n.thermometer--theme-light ul.thermometer__statistics li {\n  color: #000; }\n  .thermometer--theme-light ul.thermometer__statistics li:before {\n    background: linear-gradient(90deg, rgba(0, 0, 0, 0.2), transparent); }\n\n.thermometer--theme-light .thermometer__percent-current {\n  color: #000;\n  background-color: #fff; }\n  .thermometer--theme-light .thermometer__percent-current:after {\n    border-left: 8px solid #fff; }\n\n.thermometer--theme-dark .thermometer__draw-a, .thermometer--theme-dark .thermometer__draw-a:before, .thermometer--theme-dark .thermometer__draw-a:after {\n  background-color: #333; }\n\n.thermometer--theme-dark .thermometer__meter {\n  background-color: #1d1d1d; }\n\n.thermometer--theme-dark ul.thermometer__statistics li {\n  color: #fff; }\n  .thermometer--theme-dark ul.thermometer__statistics li:before {\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.2), transparent); }\n\n.thermometer--theme-dark .thermometer__percent-current {\n  color: #fff;\n  background-color: #1d1d1d; }\n  .thermometer--theme-dark .thermometer__percent-current:after {\n    border-left: 8px solid #1d1d1d; }\n\n.thermometer {\n  width: 100px;\n  position: relative; }\n  .thermometer ul.thermometer__statistics {\n    position: absolute;\n    top: 0;\n    right: initial;\n    bottom: initial;\n    left: 0;\n    height: 100%;\n    z-index: 1; }\n    .thermometer ul.thermometer__statistics li {\n      position: absolute;\n      top: initial;\n      right: initial;\n      bottom: initial;\n      left: 0;\n      list-style: none; }\n      .thermometer ul.thermometer__statistics li:before {\n        position: absolute;\n        top: initial;\n        right: initial;\n        bottom: -1px;\n        left: 0;\n        content: "";\n        width: 100%;\n        height: 1px; }\n  .thermometer .thermometer__meter {\n    position: absolute;\n    top: 12px;\n    right: 0;\n    bottom: initial;\n    left: 0;\n    height: calc(100% - 58px);\n    margin: auto;\n    border-radius: 50px 50px 0 0;\n    z-index: 1; }\n  .thermometer .thermometer__mercury {\n    position: absolute;\n    top: initial;\n    right: initial;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0;\n    border-radius: 50px 50px 0 0; }\n  .thermometer .thermometer__mask {\n    position: absolute;\n    top: initial;\n    right: initial;\n    bottom: -1px;\n    left: initial;\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    border-radius: 50px 50px 0 0; }\n  .thermometer .thermometer__bg-color {\n    position: absolute;\n    top: initial;\n    right: initial;\n    bottom: 0;\n    left: initial;\n    width: 100%;\n    background: linear-gradient(#f44336, #f49136, #2196f3); }\n  .thermometer .thermometer__percent-current {\n    position: absolute;\n    top: 4px;\n    right: initial;\n    bottom: initial;\n    left: 0;\n    transform: translateX(calc(-100% - 8px)) translateY(-50%);\n    padding: 5px 10px;\n    border-radius: 2px;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 3px 3px 6px rgba(0, 0, 0, 0.1); }\n    .thermometer .thermometer__percent-current:before, .thermometer .thermometer__percent-current:after {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: initial;\n      width: 0;\n      height: 0; }\n    .thermometer .thermometer__percent-current:after {\n      border-top: 6px solid transparent;\n      border-bottom: 6px solid transparent;\n      transform: translateX(calc(100% - 2px)) translateY(0); }\n    .thermometer .thermometer__percent-current:before {\n      border-left: 8px solid rgba(0, 0, 0, 0.1);\n      border-top: 6px solid transparent;\n      border-bottom: 6px solid transparent;\n      transform: translateX(calc(100% - 0px)) translateY(0); }\n  .thermometer .thermometer__draw-a {\n    position: relative;\n    height: calc(100% - 20px);\n    margin: auto;\n    border-radius: 50px 50px 0 0;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 1px 1px 5px rgba(0, 0, 0, 0.2); }\n    .thermometer .thermometer__draw-a:after, .thermometer .thermometer__draw-a:before {\n      content: ""; }\n    .thermometer .thermometer__draw-a:before {\n      position: absolute;\n      top: initial;\n      right: initial;\n      bottom: 0;\n      left: 0;\n      height: 50px;\n      width: 100%;\n      z-index: 1; }\n    .thermometer .thermometer__draw-a:after {\n      border-radius: 50%;\n      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 1px 1px 5px rgba(0, 0, 0, 0.2); }\n  .thermometer .thermometer__draw-b {\n    position: absolute;\n    top: initial;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 50px;\n    height: 50px;\n    margin: auto;\n    z-index: 1; }\n    .thermometer .thermometer__draw-b:after {\n      background-color: #2196f3;\n      border-radius: 50%; }\n    .thermometer .thermometer__draw-b:before {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 40px;\n      left: 0;\n      height: 20px;\n      background-color: #2196f3;\n      border-radius: 50px 50px 0 0; }\n',""])},function(e,t,r){var n=r(4);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(2)(n,o);n.locals&&(e.exports=n.locals)},function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";e.exports={}},function(e,t,r){"use strict";var n=function(e){};e.exports=function(e,t,r,o,i,a,s,l){if(n(t),!e){var m;if(void 0===t)m=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,o,i,a,s,l],c=0;(m=new Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw m.framesToPop=1,m}}},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,a,s=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var m in r=Object(arguments[l]))o.call(r,m)&&(s[m]=r[m]);if(n){a=n(r);for(var u=0;u<a.length;u++)i.call(r,a[u])&&(s[a[u]]=r[a[u]])}}return s}},function(e,t,r){"use strict";
/** @license React v16.4.1
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(9),o=r(8),i=r(7),a=r(6),s="function"==typeof Symbol&&Symbol.for,l=s?Symbol.for("react.element"):60103,m=s?Symbol.for("react.portal"):60106,u=s?Symbol.for("react.fragment"):60107,c=s?Symbol.for("react.strict_mode"):60108,p=s?Symbol.for("react.profiler"):60114,f=s?Symbol.for("react.provider"):60109,h=s?Symbol.for("react.context"):60110,d=s?Symbol.for("react.async_mode"):60111,b=s?Symbol.for("react.forward_ref"):60112;s&&Symbol.for("react.timeout");var _="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);o(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function y(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||v}function x(){}function w(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||v}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&g("85"),this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var k=w.prototype=new x;k.constructor=w,n(k,y.prototype),k.isPureReactComponent=!0;var j={current:null},O=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function R(e,t,r){var n=void 0,o={},i=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,n)&&!S.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var m=Array(s),u=0;u<s;u++)m[u]=arguments[u+2];o.children=m}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===o[n]&&(o[n]=s[n]);return{$$typeof:l,type:e,key:i,ref:a,props:o,_owner:j.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var $=/\/+/g,U=[];function C(e,t,r,n){if(U.length){var o=U.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function P(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>U.length&&U.push(e)}function A(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var i=!1;if(null===e)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case l:case m:i=!0}}if(i)return r(n,e,""===t?"."+N(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var s=t+N(o=e[a],a);i+=A(o,s,r,n)}else if(null===e||void 0===e?s=null:s="function"==typeof(s=_&&e[_]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),a=0;!(o=e.next()).done;)i+=A(o=o.value,s=t+N(o,a++),r,n);else"object"===o&&g("31","[object Object]"===(r=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":r,"");return i}function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,a.thatReturnsArgument):null!=e&&(E(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),n.push(e))}function M(e,t,r,n,o){var i="";null!=r&&(i=(""+r).replace($,"$&/")+"/"),t=C(t,i,n,o),null==e||A(e,"",L,t),P(t)}var T={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;t=C(null,null,t,r),null==e||A(e,"",I,t),P(t)},count:function(e){return null==e?0:A(e,"",a.thatReturnsNull,null)},toArray:function(e){var t=[];return M(e,t,null,a.thatReturnsArgument),t},only:function(e){return E(e)||g("143"),e}},createRef:function(){return{current:null}},Component:y,PureComponent:w,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_defaultValue:e,_currentValue:e,_currentValue2:e,_changedBits:0,_changedBits2:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:b,render:e}},Fragment:u,StrictMode:c,unstable_AsyncMode:d,unstable_Profiler:p,createElement:R,cloneElement:function(e,t,r){(null===e||void 0===e)&&g("267",e);var o=void 0,i=n({},e.props),a=e.key,s=e.ref,m=e._owner;if(null!=t){void 0!==t.ref&&(s=t.ref,m=j.current),void 0!==t.key&&(a=""+t.key);var u=void 0;for(o in e.type&&e.type.defaultProps&&(u=e.type.defaultProps),t)O.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==u?u[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){u=Array(o);for(var c=0;c<o;c++)u[c]=arguments[c+2];i.children=u}return{$$typeof:l,type:e.type,key:a,ref:s,props:i,_owner:m}},createFactory:function(e){var t=R.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.4.1",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:j,assign:n}},B={default:T},z=B&&T||B;e.exports=z.default?z.default:z},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n);r(5);t.default=class extends n.Component{render(){this.options=this._generateOptions();const e=`thermometer--theme-${this.options.theme()}`,t=`thermometer--${this.options.size()}`,r={height:`${this.options.height}px`},n={height:`${this.options.percent()}%`},i={height:`calc(${this.options.height}px - 57px)`},a=this.options.valstr();this._createIntervals();const s=this._createIntervalsUI(this.options.intervals);return o.a.createElement("div",{style:r,className:`thermometer ${t} ${e}`},o.a.createElement("div",{className:"thermometer__draw-a"}),o.a.createElement("div",{className:"thermometer__draw-b"}),o.a.createElement("div",{className:"thermometer__meter"},o.a.createElement("ul",{className:"thermometer__statistics"},s),o.a.createElement("div",{style:n,className:"thermometer__mercury"},o.a.createElement("div",{className:"thermometer__percent-current"},a),o.a.createElement("div",{className:"thermometer__mask"},o.a.createElement("div",{className:"thermometer__bg-color",style:i})))))}_generateOptions(){return{theme:()=>"light"===this.props.theme||"dark"===this.props.theme?this.props.theme:"light",value:this.props.value||0,max:this.props.max||100,steps:this.props.steps,format:this.props.format||"",size:()=>"small"===this.props.size||"normal"===this.props.size||"large"===this.props.size?this.props.size:"normal",height:this.props.height||200,valstr:()=>this.options.value+this.options.format,percent:()=>this.options.value/this.options.max*100,intervals:[]}}_createIntervals(){if(this.options.steps)for(let e=0;e<=this.options.steps;e++){let t=(this.options.max/this.options.steps*e).toFixed(2),r={percent:t/this.options.max*100,label:t+this.options.format};this.options.intervals.push(r)}}_createIntervalsUI(e){return e.map((e,t)=>o.a.createElement("li",{key:t,style:{bottom:`calc(${e.percent}% - 1px)`}},e.label))}}}]);