!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){"use strict";"serviceWorker"in navigator&&navigator.serviceWorker.register("/footballpeek/footballpeek.com/service-worker.js"),document.onkeydown=function(e){switch(e.keyCode){case 37:const e=document.getElementsByClassName("icon-left-open")[0];e&&(window.location=e.href);break;case 39:const t=document.getElementsByClassName("icon-right-open")[0];t&&(window.location=t.href)}};const o=document.getElementsByClassName("time"),r=(new Date).getTimezoneOffset()/60;for(let e=0;e<o.length;e++){const t=o[e].dataset.time,n=t.split(":")[0]-r-0+":"+t.split(":")[1];o[e].innerHTML=n}},function(e,t){}]);
