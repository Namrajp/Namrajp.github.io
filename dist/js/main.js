(()=>{var e={282:()=>{const e=location.href,t=document.getElementsByClassName("nav-link");this_length=t.length;for(let o=0;o<this_length;o++)t[o].href===e&&t[o].classList.add("active");const o=document.getElementById("hamburg-btn"),n=(document.getElementById("overlay"),document.querySelector("header"));o.addEventListener("click",(function(){o.classList.contains("open")?(o.classList.remove("open"),n.classList.remove("mobile")):(o.classList.add("open"),n.classList.add("mobile")),console.log("click btn detected.")}));const r=document.getElementById("current_page"),l=location.href.split("/"),s=l[l.length-1].replace(".html","");r.innerHTML=s},887:()=>{$((function(){$("#nav").load("./nav.html"),$("#footer").load("./footer.html"),$("#hero").load("./hero.html")}))()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,o),l.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(887),o(282)})()})();