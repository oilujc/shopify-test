!function(){"use strict";var e,t,n={},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{}};return n[e](t,t.exports,o),t.exports}o.m=n,o.x=function(){},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return{443:"about",620:"collections"}[e]+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="dev:",o.l=function(n,r,i,u){if(e[n])e[n].push(r);else{var c,a;if(void 0!==i)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+i){c=s;break}}c||(a=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+i),c.src=n),e[n]=[r];var p=function(t,r){c.onerror=c.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),a&&document.head.appendChild(c)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={666:0},t=[];o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var u=o.p+o.u(t),c=new Error;o.l(u,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,r[1](c)}}),"chunk-"+t,t)}};var n=function(){},r=function(r,i){for(var u,c,a=i[0],l=i[1],f=i[2],s=i[3],p=0,d=[];p<a.length;p++)c=a[p],o.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(u in l)o.o(l,u)&&(o.m[u]=l[u]);for(f&&f(o),r&&r(i);d.length;)d.shift()();return s&&t.push.apply(t,s),n()},i=self.webpackChunkdev=self.webpackChunkdev||[];function u(){for(var n,r=0;r<t.length;r++){for(var i=t[r],u=!0,c=1;c<i.length;c++){var a=i[c];0!==e[a]&&(u=!1)}u&&(t.splice(r--,1),n=o(o.s=i[0]))}return 0===t.length&&(o.x(),o.x=function(){}),n}i.forEach(r.bind(null,0)),i.push=r.bind(null,i.push.bind(i));var c=o.x;o.x=function(){return o.x=c||function(){},(n=u)()}}(),o.x()}();