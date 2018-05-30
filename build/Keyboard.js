!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DigitalKeyboard=t():e.DigitalKeyboard=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build/",n(n.s=6)}([function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,u=0,l=[],f=n(0);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function v(e){var t=document.createElement("style");return e.attrs.type="text/css",y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=v(t)),r=w.bind(null,n,a,!1),o=w.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&d(p(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var m,k=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(t=e.exports=n(2)(!1)).push([e.i,'.Keyboard_keyboard_15A {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  font-family: PingFang-SC, "San Francisco", "Source Sans", Rotobo, "Helvetica Neue";\n  font-size: 12px; }\n  .Keyboard_keyboard_15A button {\n    width: calc(100% /3);\n    height: 2.17em;\n    line-height: 2.17em;\n    font-family: PingFang-SC, "San Francisco", "Source Sans", Rotobo, "Helvetica Neue";\n    font-size: 2em;\n    text-align: center;\n    color: #3f3f3f;\n    border: 0;\n    background-color: #fff;\n    cursor: pointer;\n    touch-action: none;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n    .Keyboard_keyboard_15A button:focus {\n      outline: none; }\n    .Keyboard_keyboard_15A button:active {\n      background-color: #dfdfdf; }\n    .Keyboard_keyboard_15A button.Keyboard_keyClear_1ZM {\n      height: 2.89em;\n      line-height: 2.89em;\n      font-size: 1.5em; }\n    .Keyboard_keyboard_15A button.Keyboard_keyDelete_2ew {\n      font-weight: bold; }\n    .Keyboard_keyboard_15A button.Keyboard_keyX_38u {\n      height: 2.55em;\n      line-height: 2.55em;\n      font-size: 1.7em; }\n',""]),t.locals={keyboard:"Keyboard_keyboard_15A",keyClear:"Keyboard_keyClear_1ZM",keyDelete:"Keyboard_keyDelete_2ew",keyX:"Keyboard_keyX_38u"}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),a=(r=i)&&r.__esModule?r:{default:r};var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.value="",this.options={},Object.assign(this.options,t),this.init(t)}return o(e,[{key:"handleClick",value:function(e,t){var n=this.options;switch(e){case"delete":this.value=this.value.substr(0,this.value.length-1);break;case"clear":this.value="";break;default:switch(n.type){case"phone":this.value.length<11&&(this.value+=t);break;case"idcard":this.value.length<18&&(this.value+=t);break;case"integer":n.integerDigits&&n.integerDigits<=this.value.length?this.value=this.value:this.value+=t;break;default:var r=(this.value+t).split("."),o=r[0]&&r[0].length||0,i=r[1]&&r[1].length||0,a=!n.integerDigits||n.integerDigits>=o,s=!n.decimalDigits||n.decimalDigits>=i;1==r.length&&a?this.value+=t:2==r.length&&s?this.value+=t:this.value=this.value}}n.inputValue(this.value)}},{key:"initKeys",value:function(e){var t={};switch(e){case"integer":case"phone":t={content:"清空",action:"clear"};break;case"idcard":t={content:"X",action:"value"};break;default:t={content:".",action:"value"}}this.items=[{content:"1",action:"value"},{content:"2",action:"value"},{content:"3",action:"value"},{content:"4",action:"value"},{content:"5",action:"value"},{content:"6",action:"value"},{content:"7",action:"value"},{content:"8",action:"value"},{content:"9",action:"value"},t,{content:"0",action:"value"},{content:"&larr;",action:"delete"}]}},{key:"_renderKeyboard",value:function(e){var t=this,n="",r=this.items.map(function(e,t){switch(e.content){case"X":n=a.default.keyX;break;case"清空":n=a.default.keyClear;break;case"&larr;":n=a.default.keyDelete;break;default:n=""}return'<button ontouchstart="" class="'+n+'" data-action="'+e.action+'" data-content="'+e.content+'">'+e.content+"</button>"}),o=document.createElement("div");o.className=a.default.keyboard+" "+this.options.className,o.innerHTML=r.join(""),o.addEventListener("click",function(e){var n=e.target.dataset,r=n.action,o=n.content;t.handleClick(r,o)}),e.appendChild(o)}},{key:"init",value:function(e){this.initKeys(e.type),this._renderKeyboard(e.el)}}]),e}();t.default=s},function(e,t,n){e.exports=n(5)}])});