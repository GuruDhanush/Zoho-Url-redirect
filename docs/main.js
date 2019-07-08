!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);customElements.define("vaadin-lumo-styles",class extends HTMLElement{static get version(){return"1.5.0"}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let n,r=null,i=window.HTMLImports&&window.HTMLImports.whenReady||null;function s(t){requestAnimationFrame(function(){i?i(t):(r||(r=new Promise(t=>{n=t}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),r.then(function(){t&&t()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const a="__seenByShadyCSS",l="__shadyCSSCachedStyle";let c=null,d=null;class u{constructor(){this.customStyles=[],this.enqueued=!1,s(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&d&&(this.enqueued=!0,s(d))}addCustomStyle(t){t[a]||(t[a]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[l])return t[l];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const o=t[e];if(o[l])continue;const n=this.getStyleForCustomStyle(o);if(n){const t=n.__appliedElement||n;c&&c(t),o[l]=t}}return t}}u.prototype.addCustomStyle=u.prototype.addCustomStyle,u.prototype.getStyleForCustomStyle=u.prototype.getStyleForCustomStyle,u.prototype.processStyles=u.prototype.processStyles,Object.defineProperties(u.prototype,{transformCallback:{get:()=>c,set(t){c=t}},validateCallback:{get:()=>d,set(t){let e=!1;d||(e=!0),d=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function h(t,e){for(let o in e)null===o?t.style.removeProperty(o):t.style.setProperty(o,e[o])}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const p=!(window.ShadyDOM&&window.ShadyDOM.inUse);let m,_;function f(t){m=(!t||!t.shimcssproperties)&&(p||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(_=window.ShadyCSS.cssBuild);const y=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?m=window.ShadyCSS.nativeCss:window.ShadyCSS?(f(window.ShadyCSS),window.ShadyCSS=void 0):f(window.WebComponents&&window.WebComponents.flags);const v=m,b=new u;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,o){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,o){},styleSubtree(t,e){b.processStyles(),h(t,e)},styleElement(t){b.processStyles()},styleDocument(t){b.processStyles(),h(document.body,t)},getComputedStyleValue:(t,e)=>(function(t,e){const o=window.getComputedStyle(t).getPropertyValue(e);return o?o.trim():""})(t,e),flushCustomStyles(){},nativeCss:v,nativeShadow:p,cssBuild:_,disableRuntime:y}),window.ShadyCSS.CustomStyleInterface=b,
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t,e){return t};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let g,w,P=/(url\()([^)]*)(\))/g,x=/(^\/)|(^#)|(^[\w-\d]*:)/;function C(t,e){if(t&&x.test(t))return t;if(void 0===g){g=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",g="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),g?new URL(t,e).href:(w||((w=document.implementation.createHTMLDocument("temp")).base=w.createElement("base"),w.head.appendChild(w.base),w.anchor=w.createElement("a"),w.body.appendChild(w.anchor)),w.base.href=e,w.anchor.href=t,w.anchor.href||t)}function S(t,e){return t.replace(P,function(t,o,n,r){return o+"'"+C(n.replace(/["']/g,""),e)+"'"+r})}function T(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let E=T(document.baseURI||window.location.href);let O=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;let N=!1;let A=!1;let k=!1;let z=!1;let L=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let I={},M={};function R(t,e){I[t]=M[t.toLowerCase()]=e}function F(t){return I[t]||M[t.toLowerCase()]}class H extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let o=F(t);return o&&e?o.querySelector(e):o}return null}attributeChangedCallback(t,e,o,n){e!==o&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=C(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=T(e)}return this.__assetpath}register(t){if(t=t||this.id){if(A&&void 0!==F(t))throw R(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,R(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}H.prototype.modules=I,customElements.define("dom-module",H);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const D="link[rel=import][type~=css]",j="include",B="shady-unscoped";function Y(t){return H.import(t)}function V(t){const e=S((t.body?t.body:t).textContent,t.baseURI),o=document.createElement("style");return o.textContent=e,o}function $(t){const e=t.trim().split(/\s+/),o=[];for(let t=0;t<e.length;t++)o.push(...q(e[t]));return o}function q(t){const e=Y(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...J(e));const o=e.querySelector("template");o&&t.push(...U(o,e.assetpath)),e._styles=t}return e._styles}function U(t,e){if(!t._styles){const o=[],n=t.content.querySelectorAll("style");for(let t=0;t<n.length;t++){let r=n[t],i=r.getAttribute(j);i&&o.push(...$(i).filter(function(t,e,o){return o.indexOf(t)===e})),e&&(r.textContent=S(r.textContent,e)),o.push(r)}t._styles=o}return t._styles}function J(t){const e=[],o=t.querySelectorAll(D);for(let t=0;t<o.length;t++){let n=o[t];if(n.import){const t=n.import,o=n.hasAttribute(B);if(o&&!t._unscopedStyle){const e=V(t);e.setAttribute(B,""),t._unscopedStyle=e}else t._style||(t._style=V(t));e.push(o?t._unscopedStyle:t._style)}}return e}function X(t){let e=Y(t);if(e&&void 0===e._cssText){let t=W(e),o=e.querySelector("template");o&&(t+=function(t,e){let o="";const n=U(t,e);for(let t=0;t<n.length;t++){let e=n[t];e.parentNode&&e.parentNode.removeChild(e),o+=e.textContent}return o}(o,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function W(t){let e="",o=J(t);for(let t=0;t<o.length;t++)e+=o[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const K="include",G=window.ShadyCSS.CustomStyleInterface;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,G.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(K);return e&&(t.removeAttribute(K),t.textContent=function(t){let e=t.trim().split(/\s+/),o="";for(let t=0;t<e.length;t++)o+=X(e[t]);return o}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}});const Z=document.createElement("template");Z.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(Z.content);const Q=document.createElement("template");Q.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(Q.content);const tt=document.createElement("template");tt.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(tt.content);const et=document.createElement("template");et.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(et.content);const ot=document.createElement("template");ot.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(ot.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class nt{constructor(t){this.value=t.toString()}toString(){return this.value}}function rt(t){if(t instanceof nt)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const it=function(t,...e){const o=document.createElement("template");return o.innerHTML=e.reduce((e,o,n)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof nt)return rt(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(o)+t[n+1],t[0]),o},st=it`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(st.content);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let at=0;function lt(){}lt.prototype.__mixinApplications,lt.prototype.__mixinSet;const ct=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let o=at++;return function(n){let r=n.__mixinSet;if(r&&r[o])return n;let i=e,s=i.get(n);s||(s=t(n),i.set(n,s));let a=Object.create(s.__mixinSet||r||null);return a[o]=!0,s.__mixinSet=a,s}},dt=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:t=>t;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ut(t){return t.indexOf(".")>=0}function ht(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function pt(t,e){return 0===t.indexOf(e+".")}function mt(t,e){return 0===e.indexOf(t+".")}function _t(t,e,o){return e+o.slice(t.length)}function ft(t){if(Array.isArray(t)){let e=[];for(let o=0;o<t.length;o++){let n=t[o].toString().split(".");for(let t=0;t<n.length;t++)e.push(n[t])}return e.join(".")}return t}function yt(t){return Array.isArray(t)?ft(t).split("."):t.toString().split(".")}function vt(t,e,o){let n=t,r=yt(e);for(let t=0;t<r.length;t++){if(!n)return;n=n[r[t]]}return o&&(o.path=r.join(".")),n}function bt(t,e,o){let n=t,r=yt(e),i=r[r.length-1];if(r.length>1){for(let t=0;t<r.length-1;t++){if(!(n=n[r[t]]))return}n[i]=o}else n[e]=o;return r.join(".")}const gt={},wt=/-[a-z]/g,Pt=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function xt(t){return gt[t]||(gt[t]=t.indexOf("-")<0?t:t.replace(wt,t=>t[1].toUpperCase()))}function Ct(t){return gt[t]||(gt[t]=t.replace(Pt,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let St=0,Tt=0,Et=[],Ot=0,Nt=document.createTextNode("");new window.MutationObserver(function(){const t=Et.length;for(let e=0;e<t;e++){let t=Et[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}Et.splice(0,t),Tt+=t}).observe(Nt,{characterData:!0});const At={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},kt={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},zt={run:t=>(Nt.textContent=Ot++,Et.push(t),St++),cancel(t){const e=t-Tt;if(e>=0){if(!Et[e])throw new Error("invalid async handle: "+t);Et[e]=null}}},Lt=zt,It=ct(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let o in t)o in e||e._createPropertyAccessor(o)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,o){let n=this.__data[t],r=this._shouldPropertyChange(t,e,n);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=n),this.__data[t]=e,this.__dataPending[t]=e),r}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Lt.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(t,e,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,o))}_shouldPropertiesChange(t,e,o){return Boolean(e)}_propertiesChanged(t,e,o){}_shouldPropertyChange(t,e,o){return o!==e&&(o==o||e==e)}attributeChangedCallback(t,e,o,n){e!==o&&this._attributeToProperty(t,o),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,o,n)}_attributeToProperty(t,e,o){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[t]||t;this[r]=this._deserializeValue(e,o||this.constructor.typeForProperty(r))}}_propertyToAttribute(t,e,o){this.__serializing=!0,o=arguments.length<3?this[t]:o,this._valueToNodeAttribute(this,o,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,o){const n=this._serializeValue(e);void 0===n?t.removeAttribute(o):("class"!==o&&"name"!==o&&"slot"!==o||(t=dt(t)),t.setAttribute(o,n))}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}}),Mt={};let Rt=HTMLElement.prototype;for(;Rt;){let t=Object.getOwnPropertyNames(Rt);for(let e=0;e<t.length;e++)Mt[t[e]]=!0;Rt=Object.getPrototypeOf(Rt)}const Ft=ct(t=>{const e=It(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(xt(t[e]))}static attributeNameForProperty(t){return Ct(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const o=this;o.hasAttribute(t)||this._valueToNodeAttribute(o,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let o;switch(e){case Object:try{o=JSON.parse(t)}catch(e){o=t}break;case Array:try{o=JSON.parse(t)}catch(e){o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:o=isNaN(t)?String(t):Number(t),o=new Date(o);break;default:o=super._deserializeValue(t,e)}return o}_definePropertyAccessor(t,e){!function(t,e){if(!Mt[e]){let o=t[e];void 0!==o&&(t.__data?t._setPendingProperty(e,o):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=o))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),Ht=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),Dt={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function jt(t){let e=t.getAttribute("is");if(e&&Dt[e]){let o=t;for(o.removeAttribute("is"),t=o.ownerDocument.createElement(e),o.parentNode.replaceChild(t,o),t.appendChild(o);o.attributes.length;)t.setAttribute(o.attributes[0].name,o.attributes[0].value),o.removeAttribute(o.attributes[0].name)}return t}function Bt(t,e){let o=e.parentInfo&&Bt(t,e.parentInfo);if(!o)return t;Ht.currentNode=o;for(let t=Ht.firstChild(),o=0;t;t=Ht.nextSibling())if(e.parentIndex===o++)return t}function Yt(t,e,o,n){n.id&&(e[n.id]=o)}function Vt(t,e,o){if(o.events&&o.events.length)for(let n,r=0,i=o.events;r<i.length&&(n=i[r]);r++)t._addMethodEventListenerToNode(e,n.name,n.value,t)}function $t(t,e,o){o.templateInfo&&(e._templateInfo=o.templateInfo)}const qt=ct(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let o=t._templateInfo={};o.nodeInfoList=[],o.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,o,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,o){return this._parseTemplateNode(t.content,e,o)}static _parseTemplateNode(t,e,o){let n,r=t;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(e.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(r,e,o)||n,Ht.currentNode=r,Ht.firstChild()&&(n=this._parseTemplateChildNodes(r,e,o)||n),r.hasAttributes&&r.hasAttributes()&&(n=this._parseTemplateNodeAttributes(r,e,o)||n),n}static _parseTemplateChildNodes(t,e,o){if("script"!==t.localName&&"style"!==t.localName){Ht.currentNode=t;for(let n,r=Ht.firstChild(),i=0;r;r=n){if("template"==r.localName&&(r=jt(r)),Ht.currentNode=r,n=Ht.nextSibling(),r.nodeType===Node.TEXT_NODE){let o=n;for(;o&&o.nodeType===Node.TEXT_NODE;)r.textContent+=o.textContent,n=Ht.nextSibling(),t.removeChild(o),o=n;if(e.stripWhiteSpace&&!r.textContent.trim()){t.removeChild(r);continue}}let s={parentIndex:i,parentInfo:o};this._parseTemplateNode(r,e,s)&&(s.infoIndex=e.nodeInfoList.push(s)-1),Ht.currentNode=r,Ht.parentNode()&&i++}}}static _parseTemplateNestedTemplate(t,e,o){let n=this._parseTemplate(t,e);return(n.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),o.templateInfo=n,!0}static _parseTemplateNodeAttributes(t,e,o){let n=!1,r=Array.from(t.attributes);for(let i,s=r.length-1;i=r[s];s--)n=this._parseTemplateNodeAttribute(t,e,o,i.name,i.value)||n;return n}static _parseTemplateNodeAttribute(t,e,o,n,r){return"on-"===n.slice(0,3)?(t.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:r}),!0):"id"===n&&(o.id=r,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),o=e.nodeInfoList,n=e.content||t.content,r=document.importNode(n,!0);r.__noInsertionPoint=!e.hasInsertionPoint;let i=r.nodeList=new Array(o.length);r.$={};for(let t,e=0,n=o.length;e<n&&(t=o[e]);e++){let o=i[e]=Bt(r,t);Yt(0,r.$,o,t),$t(0,o,t),Vt(this,o,t)}return r=r}_addMethodEventListenerToNode(t,e,o,n){let r=function(t,e,o){return t=t._methodHost||t,function(e){t[o]?t[o](e,e.detail):console.warn("listener method `"+o+"` not defined")}}(n=n||t,0,o);return this._addEventListenerToNode(t,e,r),r}_addEventListenerToNode(t,e,o){t.addEventListener(e,o)}_removeEventListenerFromNode(t,e,o){t.removeEventListener(e,o)}}});
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ut=0;const Jt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Xt=/[A-Z]/;function Wt(t,e){let o=t[e];if(o){if(!t.hasOwnProperty(e)){o=t[e]=Object.create(t[e]);for(let t in o){let e=o[t],n=o[t]=Array(e.length);for(let t=0;t<e.length;t++)n[t]=e[t]}}}else o=t[e]={};return o}function Kt(t,e,o,n,r,i){if(e){let s=!1,a=Ut++;for(let l in o)Gt(t,e,a,l,o,n,r,i)&&(s=!0);return s}return!1}function Gt(t,e,o,n,r,i,s,a){let l=!1,c=e[s?ht(n):n];if(c)for(let e,d=0,u=c.length;d<u&&(e=c[d]);d++)e.info&&e.info.lastRun===o||s&&!Zt(n,e.trigger)||(e.info&&(e.info.lastRun=o),e.fn(t,n,r,i,e.info,s,a),l=!0);return l}function Zt(t,e){if(e){let o=e.name;return o==t||!(!e.structured||!pt(o,t))||!(!e.wildcard||!mt(o,t))}return!0}function Qt(t,e,o,n,r){let i="string"==typeof r.method?t[r.method]:r.method,s=r.property;i?i.call(t,t.__data[s],n[s]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function te(t,e,o){let n=ht(e);if(n!==e){return ee(t,Ct(n)+"-changed",o[e],e),!0}return!1}function ee(t,e,o,n){let r={value:o,queueProperty:!0};n&&(r.path=n),dt(t).dispatchEvent(new CustomEvent(e,{detail:r}))}function oe(t,e,o,n,r,i){let s=(i?ht(e):e)!=e?e:null,a=s?vt(t,s):t.__data[e];s&&void 0===a&&(a=o[e]),ee(t,r.eventName,a,s)}function ne(t,e,o,n,r){let i=t.__data[e];O&&(i=O(i,r.attrName,"attribute",t)),t._propertyToAttribute(e,r.attrName,i)}function re(t,e,o,n,r){let i=ue(t,e,o,n,r),s=r.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[s]?t._setPendingProperty(s,i,!0):t[s]=i}function ie(t,e,o,n,r,i,s){o.bindings=o.bindings||[];let a={kind:n,target:r,parts:i,literal:s,isCompound:1!==i.length};if(o.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||Ct(r)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let o=0;o<a.parts.length;o++){let n=a.parts[o];n.compoundIndex=o,se(t,e,a,n,l)}}function se(t,e,o,n,r){if(!n.literal)if("attribute"===o.kind&&"-"===o.target[0])console.warn("Cannot set attribute "+o.target+' because "-" is not a valid attribute starting character');else{let i=n.dependencies,s={index:r,binding:o,part:n,evaluator:t};for(let o=0;o<i.length;o++){let n=i[o];"string"==typeof n&&((n=fe(n)).wildcard=!0),t._addTemplatePropertyEffect(e,n.rootProperty,{fn:ae,info:s,trigger:n})}}}function ae(t,e,o,n,r,i,s){let a=s[r.index],l=r.binding,c=r.part;if(i&&c.source&&e.length>c.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=o[e];e=_t(c.source,l.target,e),a._setPendingPropertyOrPath(e,n,!1,!0)&&t._enqueueClient(a)}else{!function(t,e,o,n,r){r=function(t,e,o,n){if(o.isCompound){let r=t.__dataCompoundStorage[o.target];r[n.compoundIndex]=e,e=r.join("")}return"attribute"!==o.kind&&("textContent"!==o.target&&("value"!==o.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,r,o,n),O&&(r=O(r,o.target,o.kind,e));if("attribute"==o.kind)t._valueToNodeAttribute(e,r,o.target);else{let n=o.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[n]?e[Jt.READ_ONLY]&&e[Jt.READ_ONLY][n]||e._setPendingProperty(n,r)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,n,r)}}(t,a,l,c,r.evaluator._evaluateBinding(t,c,e,o,n,i))}}function le(t,e){if(e.isCompound){let o=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n[t].literal;let i=e.target;o[i]=r,e.literal&&"property"==e.kind&&(t[i]=e.literal)}}function ce(t,e,o){if(o.listenerEvent){let n=o.parts[0];t.addEventListener(o.listenerEvent,function(t){!function(t,e,o,n,r){let i,s=t.detail,a=s&&s.path;a?(n=_t(o,n,a),i=s&&s.value):i=t.currentTarget[o],i=r?!i:i,e[Jt.READ_ONLY]&&e[Jt.READ_ONLY][n]||!e._setPendingPropertyOrPath(n,i,!0,Boolean(a))||s&&s.queueProperty||e._invalidateProperties()}(t,e,o.target,n.source,n.negate)})}}function de(t,e,o,n,r,i){i=e.static||i&&("object"!=typeof i||i[e.methodName]);let s={methodName:e.methodName,args:e.args,methodInfo:r,dynamicFn:i};for(let r,i=0;i<e.args.length&&(r=e.args[i]);i++)r.literal||t._addPropertyEffect(r.rootProperty,o,{fn:n,info:s,trigger:r});i&&t._addPropertyEffect(e.methodName,o,{fn:n,info:s})}function ue(t,e,o,n,r){let i=t._methodHost||t,s=i[r.methodName];if(s){let n=t._marshalArgs(r.args,e,o);return s.apply(i,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const he=[],pe=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function me(t){let e="";for(let o=0;o<t.length;o++){e+=t[o].literal||""}return e}function _e(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:he};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let o=fe(t);return o.literal||(e.static=!1),o},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function fe(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),o={name:e,value:"",literal:!1},n=e[0];switch("-"===n&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':o.value=e.slice(1,-1),o.literal=!0;break;case"#":o.value=Number(e),o.literal=!0}return o.literal||(o.rootProperty=ht(e),o.structured=ut(e),o.structured&&(o.wildcard=".*"==e.slice(-2),o.wildcard&&(o.name=e.slice(0,-2)))),o}function ye(t,e,o){let n=vt(t,o);return void 0===n&&(n=e[o]),n}function ve(t,e,o,n){t.notifyPath(o+".splices",{indexSplices:n}),t.notifyPath(o+".length",e.length)}function be(t,e,o,n,r,i){ve(t,e,o,[{index:n,addedCount:r,removed:i,object:e,type:"splice"}])}const ge=ct(t=>{const e=qt(Ft(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return Jt}_initializeProperties(){super._initializeProperties(),we.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[Jt.READ_ONLY];for(let o in t)e&&e[o]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=t[o])}_addPropertyEffect(t,e,o){this._createPropertyAccessor(t,e==Jt.READ_ONLY);let n=Wt(this,e)[t];n||(n=this[e][t]=[]),n.push(o)}_removePropertyEffect(t,e,o){let n=Wt(this,e)[t],r=n.indexOf(o);r>=0&&n.splice(r,1)}_hasPropertyEffect(t,e){let o=this[e];return Boolean(o&&o[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,Jt.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,Jt.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,Jt.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,Jt.COMPUTE)}_setPendingPropertyOrPath(t,e,o,n){if(n||ht(Array.isArray(t)?t[0]:t)!==t){if(!n){let o=vt(this,t);if(!(t=bt(this,t,e))||!super._shouldPropertyChange(t,e,o))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,o))return function(t,e,o){let n=t.__dataLinkedPaths;if(n){let r;for(let i in n){let s=n[i];mt(i,e)?(r=_t(i,s,e),t._setPendingPropertyOrPath(r,o,!0,!0)):mt(s,e)&&(r=_t(s,i,e),t._setPendingPropertyOrPath(r,o,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,o);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,o){o===t[e]&&"object"!=typeof o||(t[e]=o)}_setPendingProperty(t,e,o){let n=this.__dataHasPaths&&ut(t),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,r[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),n?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(n||this[Jt.NOTIFY]&&this[Jt.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=o),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let o=t[e];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let o in t)!e&&this[Jt.READ_ONLY]&&this[Jt.READ_ONLY][o]||this._setPendingPropertyOrPath(o,t[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,o){let n=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,o,n){let r=t[Jt.COMPUTE];if(r){let i=e;for(;Kt(t,r,i,o,n);)Object.assign(o,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,o,n);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,o,n),this._flushClients(),Kt(this,this[Jt.REFLECT],e,o,n),Kt(this,this[Jt.OBSERVE],e,o,n),r&&function(t,e,o,n,r){let i,s,a=t[Jt.NOTIFY],l=Ut++;for(let s in e)e[s]&&(a&&Gt(t,a,l,s,o,n,r)?i=!0:r&&te(t,s,o)&&(i=!0));i&&(s=t.__dataHost)&&s._invalidateProperties&&s._invalidateProperties()}(this,r,e,o,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,o){this[Jt.PROPAGATE]&&Kt(this,this[Jt.PROPAGATE],t,e,o);let n=this.__templateInfo;for(;n;)Kt(this,n.propertyEffects,t,e,o,n.nodeList),n=n.nextTemplateInfo}linkPaths(t,e){t=ft(t),e=ft(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=ft(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let o={path:""};ve(this,vt(this,t,o),o.path,e)}get(t,e){return vt(e||this,t)}set(t,e,o){o?bt(o,t,e):this[Jt.READ_ONLY]&&this[Jt.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let o={path:""},n=vt(this,t,o),r=n.length,i=n.push(...e);return e.length&&be(this,n,o.path,r,e.length,[]),i}pop(t){let e={path:""},o=vt(this,t,e),n=Boolean(o.length),r=o.pop();return n&&be(this,o,e.path,o.length,0,[r]),r}splice(t,e,o,...n){let r,i={path:""},s=vt(this,t,i);return e<0?e=s.length-Math.floor(-e):e&&(e=Math.floor(e)),r=2===arguments.length?s.splice(e):s.splice(e,o,...n),(n.length||r.length)&&be(this,s,i.path,e,n.length,r),r}shift(t){let e={path:""},o=vt(this,t,e),n=Boolean(o.length),r=o.shift();return n&&be(this,o,e.path,0,0,[r]),r}unshift(t,...e){let o={path:""},n=vt(this,t,o),r=n.unshift(...e);return e.length&&be(this,n,o.path,0,e.length,[]),r}notifyPath(t,e){let o;if(1==arguments.length){let n={path:""};e=vt(this,t,n),o=n.path}else o=Array.isArray(t)?ft(t):t;this._setPendingPropertyOrPath(o,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var o;this._addPropertyEffect(t,Jt.READ_ONLY),e&&(this["_set"+(o=t,o[0].toUpperCase()+o.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,o){let n={property:t,method:e,dynamicFn:Boolean(o)};this._addPropertyEffect(t,Jt.OBSERVE,{fn:Qt,info:n,trigger:{name:t}}),o&&this._addPropertyEffect(e,Jt.OBSERVE,{fn:Qt,info:n,trigger:{name:e}})}_createMethodObserver(t,e){let o=_e(t);if(!o)throw new Error("Malformed observer expression '"+t+"'");de(this,o,Jt.OBSERVE,ue,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,Jt.NOTIFY,{fn:oe,info:{eventName:Ct(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,Jt.REFLECT,{fn:ne,info:{attrName:e}})}_createComputedProperty(t,e,o){let n=_e(e);if(!n)throw new Error("Malformed computed expression '"+e+"'");de(this,n,Jt.COMPUTE,re,t,o)}_marshalArgs(t,e,o){const n=this.__data,r=[];for(let i=0,s=t.length;i<s;i++){let{name:s,structured:a,wildcard:l,value:c,literal:d}=t[i];if(!d)if(l){const t=mt(s,e),r=ye(n,o,t?e:s);c={path:t?e:s,value:r,base:t?vt(n,s):r}}else c=a?ye(n,o,s):n[s];r[i]=c}return r}static addPropertyEffect(t,e,o){this.prototype._addPropertyEffect(t,e,o)}static createPropertyObserver(t,e,o){this.prototype._createPropertyObserver(t,e,o)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,o){this.prototype._createComputedProperty(t,e,o)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let o=this.constructor._parseTemplate(t),n=this.__templateInfo==o;if(!n)for(let t in o.propertyEffects)this._createPropertyAccessor(t);if(e&&((o=Object.create(o)).wasPreBound=n,!n&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=o,o.previousTemplateInfo=t,o}return this.__templateInfo=o}static _addTemplatePropertyEffect(t,e,o){(t.hostProps=t.hostProps||{})[e]=!0;let n=t.propertyEffects=t.propertyEffects||{};(n[e]=n[e]||[]).push(o)}_stampTemplate(t){we.beginHosting(this);let e=super._stampTemplate(t);we.endHosting(this);let o=this._bindTemplate(t,!0);if(o.nodeList=e.nodeList,!o.wasPreBound){let t=o.childNodes=[];for(let o=e.firstChild;o;o=o.nextSibling)t.push(o)}return e.templateInfo=o,function(t,e){let{nodeList:o,nodeInfoList:n}=e;if(n.length)for(let e=0;e<n.length;e++){let r=n[e],i=o[e],s=r.bindings;if(s)for(let e=0;e<s.length;e++){let o=s[e];le(i,o),ce(i,t,o)}i.__dataHost=t}}(this,o),this.__dataReady&&Kt(this,o.propertyEffects,this.__data,null,!1,o.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let o=e.childNodes;for(let t=0;t<o.length;t++){let e=o[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,o){let n=super._parseTemplateNode(t,e,o);if(t.nodeType===Node.TEXT_NODE){let r=this._parseBindings(t.textContent,e);r&&(t.textContent=me(r)||" ",ie(this,e,o,"text","textContent",r),n=!0)}return n}static _parseTemplateNodeAttribute(t,e,o,n,r){let i=this._parseBindings(r,e);if(i){let r=n,s="property";Xt.test(n)?s="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),s="attribute");let a=me(i);return a&&"attribute"==s&&("class"==n&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(n)),t.setAttribute(n,a)),"input"===t.localName&&"value"===r&&t.setAttribute(r,""),t.removeAttribute(r),"property"===s&&(n=xt(n)),ie(this,e,o,s,n,i,a),!0}return super._parseTemplateNodeAttribute(t,e,o,n,r)}static _parseTemplateNestedTemplate(t,e,o){let n=super._parseTemplateNestedTemplate(t,e,o),r=o.templateInfo.hostProps;for(let t in r)ie(this,e,o,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}]);return n}static _parseBindings(t,e){let o,n=[],r=0;for(;null!==(o=pe.exec(t));){o.index>r&&n.push({literal:t.slice(r,o.index)});let i=o[1][0],s=Boolean(o[2]),a=o[3].trim(),l=!1,c="",d=-1;"{"==i&&(d=a.indexOf("::"))>0&&(c=a.substring(d+2),a=a.substring(0,d),l=!0);let u=_e(a),h=[];if(u){let{args:t,methodName:o}=u;for(let e=0;e<t.length;e++){let o=t[e];o.literal||h.push(o)}let n=e.dynamicFns;(n&&n[o]||u.static)&&(h.push(o),u.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:i,negate:s,customEvent:l,signature:u,dependencies:h,event:c}),r=pe.lastIndex}if(r&&r<t.length){let e=t.substring(r);e&&n.push({literal:e})}return n.length?n:null}static _evaluateBinding(t,e,o,n,r,i){let s;return s=e.signature?ue(t,o,n,0,e.signature):o!=e.source?vt(t,e.source):i&&ut(o)?vt(t,o):t.__data[o],e.negate&&(s=!s),s}}});const we=new class{constructor(){this.stack=[]}registerHost(t){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(t)}beginHosting(t){this.stack.push(t)}endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Pe=[];const xe=ct(t=>{const e=It(t);function o(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof r?e:null}function n(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const o=t.properties;o&&(e=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(t){const e={};for(let o in t){const n=t[o];e[o]="function"==typeof n?{type:n}:n}return e}(o))}t.__ownProperties=e}return t.__ownProperties}class r extends e{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,Pe.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(t=>this.attributeNameForProperty(t)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=o(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=n(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=o(this);this.__properties=Object.assign({},t&&t._properties,n(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){0,this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),Ce="3.2.0",Se=window.ShadyCSS&&window.ShadyCSS.cssBuild,Te=ct(t=>{const e=xe(ge(t));function o(t,e,o,n){o.computed&&(o.readOnly=!0),o.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,o.computed,n)),o.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!o.computed):!1===o.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),o.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===o.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),o.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===o.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),o.observer&&t._createPropertyObserver(e,o.observer,n[o.observer]),t._addPropertyToAttributeMap(e)}function n(t,e,o,n){if(!Se){const r=e.content.querySelectorAll("style"),i=U(e),s=function(t){let e=Y(t);return e?J(e):[]}(o),a=e.content.firstElementChild;for(let o=0;o<s.length;o++){let r=s[o];r.textContent=t._processStyleText(r.textContent,n),e.content.insertBefore(r,a)}let l=0;for(let e=0;e<i.length;e++){let o=i[e],s=r[l];s!==o?(o=o.cloneNode(!0),s.parentNode.insertBefore(o,s)):l++,o.textContent=t._processStyleText(o.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,o)}return class extends e{static get polymerElementVersion(){return Ce}static _finalizeClass(){super._finalizeClass();const t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);var e;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):z||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)o(this.prototype,e,t[e],t)}static createObservers(t,e){const o=this.prototype;for(let n=0;n<t.length;n++)o._createMethodObserver(t[n],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(t){let e=null;if(t&&(!A||k)&&(e=H.import(t,"template"),A&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=T(t.url);else{const t=H.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=E,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let o in e){let n=e[o];"value"in n&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[o]=n)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let o=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof o.value?o.value.call(this):o.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return S(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const o=this.importPath;n(this,e,t,o?C(o):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=dt(this);if(e.attachShadow)return t?(e.shadowRoot||e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(t),L&&window.ShadyDOM&&ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=C(this.importPath)),C(t,e)}static _parseTemplateContent(t,e,o){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,o)}static _addTemplatePropertyEffect(t,e,o){return!z||e in this._properties||console.warn(`Property '${e}' used in template but not declared in 'properties'; `+"attribute will not be observed."),super._addTemplatePropertyEffect(t,e,o)}}})(HTMLElement);
/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Ee{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Oe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Oe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,e,o){return t instanceof Ee?t._cancelAsync():t=new Ee,t.setConfig(e,o),t}}let Oe=new Set;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ne="string"==typeof document.head.style.touchAction,Ae="__polymerGestures",ke="__polymerGesturesHandled",ze="__polymerGesturesTouchAction",Le=25,Ie=5,Me=2500,Re=["mousedown","mousemove","mouseup","click"],Fe=[0,1,4,2],He=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function De(t){return Re.indexOf(t)>-1}let je=!1;function Be(t){if(!De(t)&&"touchend"!==t)return Ne&&je&&N?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){je=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let Ye=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const Ve=[],$e={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},qe={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Ue(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let o=t.getRootNode();if(t.id){let n=o.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<n.length;t++)e.push(n[t])}}return e}let Je=function(t){let e=t.sourceCapabilities;var o;if((!e||e.firesTouchEvents)&&(t[ke]={skip:!0},"click"===t.type)){let e=!1,n=Qe(t);for(let t=0;t<n.length;t++){if(n[t].nodeType===Node.ELEMENT_NODE)if("label"===n[t].localName)Ve.push(n[t]);else if(o=n[t],$e[o.localName]){let o=Ue(n[t]);for(let t=0;t<o.length;t++)e=e||Ve.indexOf(o[t])>-1}if(n[t]===Ke.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function Xe(t){let e=Ye?["click"]:Re;for(let o,n=0;n<e.length;n++)o=e[n],t?(Ve.length=0,document.addEventListener(o,Je,!0)):document.removeEventListener(o,Je,!0)}function We(t){let e=t.type;if(!De(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!He&&(e=Fe[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let Ke={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ge(t,e,o){t.movefn=e,t.upfn=o,document.addEventListener("mousemove",e),document.addEventListener("mouseup",o)}function Ze(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){Ke.mouse.mouseIgnoreJob||Xe(!0),Ke.mouse.target=Qe(t)[0],Ke.mouse.mouseIgnoreJob=Ee.debounce(Ke.mouse.mouseIgnoreJob,At.after(Me),function(){Xe(),Ke.mouse.target=null,Ke.mouse.mouseIgnoreJob=null})},!!je&&{passive:!0});const Qe=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],to={},eo=[];function oo(t){const e=Qe(t);return e.length>0?e[0]:t.target}function no(t){let e,o=t.type,n=t.currentTarget[Ae];if(!n)return;let r=n[o];if(r){if(!t[ke]&&(t[ke]={},"touch"===o.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===o&&1===t.touches.length&&(Ke.touch.id=e.identifier),Ke.touch.id!==e.identifier)return;Ne||"touchstart"!==o&&"touchmove"!==o||function(t){let e=t.changedTouches[0],o=t.type;if("touchstart"===o)Ke.touch.x=e.clientX,Ke.touch.y=e.clientY,Ke.touch.scrollDecided=!1;else if("touchmove"===o){if(Ke.touch.scrollDecided)return;Ke.touch.scrollDecided=!0;let o=function(t){let e="auto",o=Qe(t);for(let t,n=0;n<o.length;n++)if((t=o[n])[ze]){e=t[ze];break}return e}(t),n=!1,r=Math.abs(Ke.touch.x-e.clientX),i=Math.abs(Ke.touch.y-e.clientY);t.cancelable&&("none"===o?n=!0:"pan-x"===o?n=i>r:"pan-y"===o&&(n=r>i)),n?t.preventDefault():lo("track")}}(t)}if(!(e=t[ke]).skip){for(let o,n=0;n<eo.length;n++)r[(o=eo[n]).name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let n,i=0;i<eo.length;i++)r[(n=eo[i]).name]&&!e[n.name]&&(e[n.name]=!0,n[o](t))}}}function ro(t,e,o){return!!to[e]&&(function(t,e,o){let n=to[e],r=n.deps,i=n.name,s=t[Ae];s||(t[Ae]=s={});for(let e,o,n=0;n<r.length;n++)e=r[n],Ye&&De(e)&&"click"!==e||((o=s[e])||(s[e]=o={_count:0}),0===o._count&&t.addEventListener(e,no,Be(e)),o[i]=(o[i]||0)+1,o._count=(o._count||0)+1);t.addEventListener(e,o),n.touchAction&&function(t,e){Ne&&t instanceof HTMLElement&&zt.run(()=>{t.style.touchAction=e});t[ze]=e}(t,n.touchAction)}(t,e,o),!0)}function io(t,e,o){return!!to[e]&&(function(t,e,o){let n=to[e],r=n.deps,i=n.name,s=t[Ae];if(s)for(let e,o,n=0;n<r.length;n++)e=r[n],(o=s[e])&&o[i]&&(o[i]=(o[i]||1)-1,o._count=(o._count||1)-1,0===o._count&&t.removeEventListener(e,no,Be(e)));t.removeEventListener(e,o)}(t,e,o),!0)}function so(t){eo.push(t);for(let e=0;e<t.emits.length;e++)to[t.emits[e]]=t}function ao(t,e,o){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=o,dt(t).dispatchEvent(n),n.defaultPrevented){let t=o.preventer||o.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function lo(t){let e=function(t){for(let e,o=0;o<eo.length;o++){e=eo[o];for(let o,n=0;n<e.emits.length;n++)if((o=e.emits[n])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function co(t,e,o,n){e&&ao(e,t,{x:o.clientX,y:o.clientY,sourceEvent:o,preventer:n,prevent:function(t){return lo(t)}})}function uo(t,e,o){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),r=Math.abs(t.y-o);return n>=Ie||r>=Ie}function ho(t,e,o){if(!e)return;let n,r=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],s=i.x-t.x,a=i.y-t.y,l=0;r&&(n=i.x-r.x,l=i.y-r.y),ao(e,"track",{state:t.state,x:o.clientX,y:o.clientY,dx:s,dy:a,ddx:n,ddy:l,sourceEvent:o,hover:function(){return function(t,e){let o=document.elementFromPoint(t,e),n=o;for(;n&&n.shadowRoot&&!window.ShadyDOM&&n!==(n=n.shadowRoot.elementFromPoint(t,e));)n&&(o=n);return o}(o.clientX,o.clientY)}})}function po(t,e,o){let n=Math.abs(e.clientX-t.x),r=Math.abs(e.clientY-t.y),i=oo(o||e);!i||qe[i.localName]&&i.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=Le&&r<=Le||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=oo(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let o=e.getBoundingClientRect(),n=t.pageX,r=t.pageY;return!(n>=o.left&&n<=o.right&&r>=o.top&&r<=o.bottom)}return!1}(e))&&(t.prevent||ao(i,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:o}))}so({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){Ze(this.info)},mousedown:function(t){if(!We(t))return;let e=oo(t),o=this;Ge(this.info,function(t){We(t)||(co("up",e,t),Ze(o.info))},function(t){We(t)&&co("up",e,t),Ze(o.info)}),co("down",e,t)},touchstart:function(t){co("down",oo(t),t.changedTouches[0],t)},touchend:function(t){co("up",oo(t),t.changedTouches[0],t)}}),so({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ze(this.info)},mousedown:function(t){if(!We(t))return;let e=oo(t),o=this,n=function(t){let n=t.clientX,r=t.clientY;uo(o.info,n,r)&&(o.info.state=o.info.started?"mouseup"===t.type?"end":"track":"start","start"===o.info.state&&lo("tap"),o.info.addMove({x:n,y:r}),We(t)||(o.info.state="end",Ze(o.info)),e&&ho(o.info,e,t),o.info.started=!0)};Ge(this.info,n,function(t){o.info.started&&n(t),Ze(o.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=oo(t),o=t.changedTouches[0],n=o.clientX,r=o.clientY;uo(this.info,n,r)&&("start"===this.info.state&&lo("tap"),this.info.addMove({x:n,y:r}),ho(this.info,e,o),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=oo(t),o=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:o.clientX,y:o.clientY}),ho(this.info,e,o))}}),so({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){We(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){We(t)&&po(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){po(this.info,t.changedTouches[0],t)}});const mo=ct(t=>{return class extends t{_addEventListenerToNode(t,e,o){ro(t,e,o)||super._addEventListenerToNode(t,e,o)}_removeEventListenerFromNode(t,e,o){io(t,e,o)||super._removeEventListenerFromNode(t,e,o)}}}),_o=t=>(class extends t{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(t,e,o){super.attributeChangedCallback(t,e,o),"theme"===t&&this._setTheme(o)}}),fo=t=>(class extends(_o(t)){static finalize(){super.finalize();const t=this.prototype._template,e=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,o=Object.getPrototypeOf(this.prototype)._template;o&&!e&&Array.from(o.content.querySelectorAll("style[include]")).forEach(e=>{this._includeStyle(e.getAttribute("include"),t)}),this._includeMatchingThemes(t)}static _includeMatchingThemes(t){const e=H.prototype.modules;let o=!1;const n=this.is+"-default-theme";Object.keys(e).sort((t,e)=>{const o=0===t.indexOf("vaadin-"),n=0===e.indexOf("vaadin-"),r=["lumo-","material-"],i=r.filter(e=>0===t.indexOf(e)).length>0,s=r.filter(t=>0===e.indexOf(t)).length>0;return o!==n?o?-1:1:i!==s?i?-1:1:0}).forEach(r=>{if(r!==n){const n=e[r].getAttribute("theme-for");n&&n.split(" ").forEach(e=>{new RegExp("^"+e.split("*").join(".*")+"$").test(this.is)&&(o=!0,this._includeStyle(r,t))})}}),!o&&e[n]&&this._includeStyle(n,t)}static _includeStyle(t,e){if(e&&!e.content.querySelector(`style[include="${t}"]`)){const o=document.createElement("style");o.setAttribute("include",t),e.content.appendChild(o)}}}),yo=t=>(class extends((t=>(class extends t{static get properties(){var t={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(t.tabIndex=t.tabindex),t}}))(t)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",t=>{t.composedPath()[0]===this?this._focus(t):-1===t.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",t=>this._setFocused(!1)),super.ready();const t=t=>{t.composed||t.target.dispatchEvent(new CustomEvent(t.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",t),this.shadowRoot.addEventListener("focusout",t),this.addEventListener("keydown",t=>{if(!t.defaultPrevented&&9===t.keyCode)if(t.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{const t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){const t=document.createElement("input");t.style.position="absolute",t.style.opacity=0,t.tabIndex=this.tabIndex,this.parentNode.insertBefore(t,this.nextSibling),t.focus(),t.addEventListener("focusout",()=>this.parentNode.removeChild(t))}}}),!this.autofocus||this.focused||this.disabled||window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")}),this._boundKeydownListener=this._bodyKeydownListener.bind(this),this._boundKeyupListener=this._bodyKeyupListener.bind(this)}connectedCallback(){super.connectedCallback(),document.body.addEventListener("keydown",this._boundKeydownListener,!0),document.body.addEventListener("keyup",this._boundKeyupListener,!0)}disconnectedCallback(){super.disconnectedCallback(),document.body.removeEventListener("keydown",this._boundKeydownListener,!0),document.body.removeEventListener("keyup",this._boundKeyupListener,!0),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){t?this.setAttribute("focused",""):this.removeAttribute("focused"),t&&this._tabPressed?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}_bodyKeydownListener(t){this._tabPressed=9===t.keyCode}_bodyKeyupListener(){this._tabPressed=!1}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(t){this._isShiftTabbing||(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement.blur(),this._setFocused(!1)}_disabledChanged(t){this.focusElement.disabled=t,t?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(t){void 0!==t&&(this.focusElement.tabIndex=t),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=t=void 0),window.ShadyDOM&&this.setProperties({tabIndex:t,tabindex:t})}click(){this.disabled||super.click()}}),vo=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,bo=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function go(t,e){if("function"!=typeof t)return;const o=vo.exec(t.toString());if(o)try{t=new Function(o[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const wo=function(t,e){if(window.Vaadin.developmentMode)return go(t,e)};function Po(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(bo?!function(){if(bo){const t=Object.keys(bo).map(t=>bo[t]).filter(t=>t.productionMode);if(t.length>0)return!0}return!1}():!go(function(){return!0}))}catch(t){return!1}}());const xo=function(){return wo(Po)};let Co;window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){xo&&xo()};const So=t=>(class extends t{static _finalizeClass(){var t;super._finalizeClass(),this.is&&(window.Vaadin.registrations.push(this),window.Vaadin.developmentModeCallback&&(Co=Ee.debounce(Co,kt,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),t=Co,Oe.add(t)))}ready(){super.ready(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class To extends(So(yo(fo(mo(Te))))){static get template(){return it`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.2.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){ro(this,"down",()=>!this.disabled&&this.setAttribute("active","")),ro(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",t=>!this.disabled&&[13,32].indexOf(t.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(To.is,To);const Eo=it`<dom-module id="lumo-app-layout" theme-for="vaadin-app-layout">
  <template>
    <style>
      :host {
        background-color: var(--lumo-base-color);
      }

      [part="navbar"] {
        background: var(--vaadin-app-layout-navbar-background, linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct)) var(--lumo-base-color));
      }

      [part="navbar"] > ::slotted(vaadin-tabs[slot="menu"]) {
        box-shadow: none;
        --lumo-font-size-m: var(--lumo-font-size-s);
        --lumo-icon-size-m: 1.5rem;
      }

      @media (min-width: 700px) {
        [part="navbar"] {
          padding: 0 var(--lumo-space-m);
        }

        [part="navbar"] > ::slotted(vaadin-tabs[slot="menu"]) {
          --lumo-font-size-m: unset;
          --lumo-icon-size-m: unset;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Eo.content);
/**
@license
Vaadin App Layout
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class Oo extends(So(fo(Te))){static get template(){return it`
    <style>
      :host {
        display: flex !important;
        flex-direction: column-reverse;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: var(--vaadin-app-layout-viewport-bottom);
        /* CSS API for host */
        --vaadin-app-layout-viewport-bottom: 0;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="branding"],
      [part="navbar"]::after {
        display: none;
      }

      [part="navbar"] {
        flex: none;
        display: flex;
        align-items: center;
        height: var(--vaadin-app-layout-navbar-height, auto);
        background: var(--vaadin-app-layout-navbar-background, #eee);
      }

      [part="navbar"]::after {
        content: '';
      }

      [part="branding"],
      [part="navbar"]::after {
        /*
          Makes the menu part horizontally centered on wide viewports,
          regardless of the size of contents inside the branding
          and the secondary parts. Prevents unnecessary menu shrinking.

          NOTE: IE requires a unit for the flex-basis value.

          NOTE: \`0px\` might confuse linters and minifiers.
        */
        flex: 1 0 0.001px;
      }

      [part=navbar] > ::slotted([slot="menu"]) {
        display: flex;
        align-items: center;
        overflow: hidden;
        max-width: 100%;
        margin: auto;
      }

      [part="content"] {
        flex: auto;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      @media (min-width: 700px) {
        :host {
          flex-direction: column;
        }

        [part=navbar] > ::slotted([slot="menu"]) {
          flex: initial;
        }

        [part="branding"],
        [part="navbar"]::after {
          display: flex;
        }
      }
    </style>

    <nav part="navbar">
      <div part="branding" role="banner">
        <slot name="branding"></slot>
      </div>
      <slot name="menu"></slot>
      </nav>
    <div part="content" role="main" aria-live="polite">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-app-layout"}static get version(){return"1.0.2"}constructor(){super(),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const t=window.innerHeight,e=window.innerWidth>t,o=document.documentElement.clientHeight;e&&o>t?this.style.setProperty("--vaadin-app-layout-viewport-bottom",o-t+"px"):this.style.setProperty("--vaadin-app-layout-viewport-bottom","0")}}customElements.define(Oo.is,Oo);const No=it`<dom-module id="lumo-notification-card" theme-for="vaadin-notification-card">
  <template>
    <style>
      :host {
        position: relative;
        margin: var(--lumo-space-s);
      }

      [part="overlay"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-s);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-wide-l);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      [part="content"] ::slotted(vaadin-button) {
        flex: none;
        margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
      }

      :host([slot^="middle"]) {
        width: 20em;
        max-width: 80vw;
        margin: var(--lumo-space-s) auto;
      }

      :host([slot\$="stretch"]) {
        margin: 0;
      }

      :host([slot\$="stretch"]) [part="overlay"] {
        border-radius: 0;
      }

      @media (min-width: 421px) {
        :host(:not([slot\$="stretch"])) {
          display: flex;
        }

        :host([slot\$="end"]) {
          justify-content: flex-end;
        }

        :host([slot^="middle"]),
        :host([slot\$="center"]) {
          display: flex;
          justify-content: center;
        }
      }

      @keyframes lumo-notification-exit-fade-out {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-fade-in {
        0% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-down {
        0% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-up {
        100% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-up {
        0% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-down {
        100% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      :host([slot="middle"][opening]) {
        animation: lumo-notification-enter-fade-in 300ms;
      }

      :host([slot="middle"][closing]) {
        animation: lumo-notification-exit-fade-out 300ms;
      }

      :host([slot^="top"][opening]) {
        animation: lumo-notification-enter-slide-down 300ms;
      }

      :host([slot^="top"][closing]) {
        animation: lumo-notification-exit-slide-up 300ms;
      }

      :host([slot^="bottom"][opening]) {
        animation: lumo-notification-enter-slide-up 300ms;
      }

      :host([slot^="bottom"][closing]) {
        animation: lumo-notification-exit-slide-down 300ms;
      }

      :host([theme~="primary"]) [part="overlay"] {
        background: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-color: var(--lumo-primary-text-color);
      }

      :host([theme~="contrast"]) [part="overlay"] {
        background: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"]) {
        --_lumo-button-background-color: var(--lumo-contrast-20pct);
        --_lumo-button-color: var(--lumo-base-color);
        --_lumo-button-primary-background-color: var(--lumo-base-color);
        --_lumo-button-primary-color: var(--lumo-contrast);
      }

      :host([theme~="success"]) [part="overlay"] {
        background: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-color: var(--lumo-success-text-color);
      }

      :host([theme~="error"]) [part="overlay"] {
        background: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-color: var(--lumo-error-text-color);
      }
    </style>
  </template>
</dom-module>`;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Ao(t,e,o,n,r){let i;r&&(i="object"==typeof o&&null!==o)&&(n=t.__dataTemp[e]);let s=n!==o&&(n==n||o==o);return i&&s&&(t.__dataTemp[e]=o),s}document.head.appendChild(No.content);const ko=ct(t=>{return class extends t{_shouldPropertyChange(t,e,o){return Ao(this,t,e,o,!0)}}});ct(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,o){return Ao(this,t,e,o,this.mutableData)}}});ko._mutablePropertyChange=Ao;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let zo=null;function Lo(){return zo}Lo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Lo,writable:!0}});const Io=ge(Lo),Mo=ko(Io);const Ro=ge(class{});class Fo extends Ro{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=this.children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let o=this.__templatizeOptions;(t&&o.instanceProps||!o.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,o){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,o(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,e,o)}}_showHideChildren(t){let e=this.children;for(let o=0;o<e.length;o++){let n=e[o];if(Boolean(t)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),dt(dt(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const t=n.__polymerReplaced__;t&&dt(dt(t).parentNode).replaceChild(n,t)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,o){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=o:super._setUnmanagedPropertyToNode(t,e,o)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Fo.prototype.__dataHost,Fo.prototype.__templatizeOptions,Fo.prototype._methodHost,Fo.prototype.__templatizeOwner,Fo.prototype.__hostProps;const Ho=ko(Fo);function Do(t){let e=t.__dataHost;return e&&e._methodHost||e}function jo(t,e,o){let n=o.mutableData?Ho:Fo;$o.mixin&&(n=$o.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=o,r.prototype._bindTemplate(t),function(t,e,o,n){let r=o.hostProps||{};for(let e in n.instanceProps){delete r[e];let o=n.notifyInstanceProp;o&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Vo(e,o)})}if(n.forwardHostProp&&e.__dataHost)for(let e in r)t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,o){t.__dataHost._setPendingPropertyOrPath("_host_"+e,o[e],!0,!0)}})}(r,t,e,o),r}function Bo(t,e,o){let n=o.forwardHostProp;if(n){let r=e.templatizeTemplateClass;if(!r){let t=o.mutableData?Mo:Io;r=e.templatizeTemplateClass=class extends t{};let i=e.hostProps;for(let t in i)r.prototype._addPropertyEffect("_host_"+t,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Yo(t,n)}),r.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){zo=t,Object.setPrototypeOf(t,e.prototype),new e,zo=null}(t,r),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function Yo(t,e){return function(t,o,n){e.call(t.__templatizeOwner,o.substring("_host_".length),n[o])}}function Vo(t,e){return function(t,o,n){e.call(t.__templatizeOwner,t,o,n[o])}}function $o(t,e,o){if(A&&!Do(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(o=o||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let n=(e?e.constructor:Fo)._parseTemplate(t),r=n.templatizeInstanceClass;r||(r=jo(t,n,o),n.templatizeInstanceClass=r),Bo(t,n,o);let i=class extends r{};return i.prototype._methodHost=Do(t),i.prototype.__dataHost=t,i.prototype.__templatizeOwner=e,i.prototype.__hostProps=n.hostProps,i=i}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function qo(t,e,o){return{index:t,removed:e,addedCount:o}}const Uo=0,Jo=1,Xo=2,Wo=3;function Ko(t,e,o,n,r,i){let s,a=0,l=0,c=Math.min(o-e,i-r);if(0==e&&0==r&&(a=function(t,e,o){for(let n=0;n<o;n++)if(!Go(t[n],e[n]))return n;return o}(t,n,c)),o==t.length&&i==n.length&&(l=function(t,e,o){let n=t.length,r=e.length,i=0;for(;i<o&&Go(t[--n],e[--r]);)i++;return i}(t,n,c-a)),r+=a,i-=l,(o-=l)-(e+=a)==0&&i-r==0)return[];if(e==o){for(s=qo(e,[],0);r<i;)s.removed.push(n[r++]);return[s]}if(r==i)return[qo(e,[],o-e)];let d=function(t){let e=t.length-1,o=t[0].length-1,n=t[e][o],r=[];for(;e>0||o>0;){if(0==e){r.push(Xo),o--;continue}if(0==o){r.push(Wo),e--;continue}let i,s=t[e-1][o-1],a=t[e-1][o],l=t[e][o-1];(i=a<l?a<s?a:s:l<s?l:s)==s?(s==n?r.push(Uo):(r.push(Jo),n=s),e--,o--):i==a?(r.push(Wo),e--,n=a):(r.push(Xo),o--,n=l)}return r.reverse(),r}(function(t,e,o,n,r,i){let s=i-r+1,a=o-e+1,l=new Array(s);for(let t=0;t<s;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let o=1;o<s;o++)for(let i=1;i<a;i++)if(Go(t[e+i-1],n[r+o-1]))l[o][i]=l[o-1][i-1];else{let t=l[o-1][i]+1,e=l[o][i-1]+1;l[o][i]=t<e?t:e}return l}(t,e,o,n,r,i));s=void 0;let u=[],h=e,p=r;for(let t=0;t<d.length;t++)switch(d[t]){case Uo:s&&(u.push(s),s=void 0),h++,p++;break;case Jo:s||(s=qo(h,[],0)),s.addedCount++,h++,s.removed.push(n[p]),p++;break;case Xo:s||(s=qo(h,[],0)),s.addedCount++,h++;break;case Wo:s||(s=qo(h,[],0)),s.removed.push(n[p]),p++}return s&&u.push(s),u}function Go(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Zo(t){return"slot"===t.localName}let Qo=class{static getFlattenedNodes(t){const e=dt(t);return Zo(t)?(t=t,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(t=>Zo(t)?dt(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){Zo(this._target)?this._listenSlots([this._target]):dt(this._target).children&&(this._listenSlots(dt(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){Zo(this._target)?this._unlistenSlots([this._target]):dt(this._target).children&&(this._unlistenSlots(dt(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,zt.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let o=t[e];o.addedNodes&&this._listenSlots(o.addedNodes),o.removedNodes&&this._unlistenSlots(o.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),o=(n=e,r=this._effectiveNodes,Ko(n,0,n.length,r,0,r.length));var n,r;for(let e,n=0;n<o.length&&(e=o[n]);n++)for(let o,n=0;n<e.removed.length&&(o=e.removed[n]);n++)t.removedNodes.push(o);for(let n,r=0;r<o.length&&(n=o[r]);r++)for(let o=n.index;o<n.index+n.addedCount;o++)t.addedNodes.push(e[o]);this._effectiveNodes=e;let i=!1;return(t.addedNodes.length||t.removedNodes.length)&&(i=!0,this.callback.call(this._target,t)),i}_listenSlots(t){for(let e=0;e<t.length;e++){let o=t[e];Zo(o)&&o.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let o=t[e];Zo(o)&&o.removeEventListener("slotchange",this._boundSchedule)}}};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class tn extends(fo(So(Te))){static get template(){return it`
    <style>
      :host {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        pointer-events: none;
      }

      [region-group] {
        flex: 1 1 0%;
        display: flex;
      }

      [region-group="top"] {
        align-items: flex-start;
      }

      [region-group="bottom"] {
        align-items: flex-end;
      }

      [region-group] > [region] {
        flex: 1 1 0%;
      }

      @media (max-width: 420px) {
        [region-group] {
          flex-direction: column;
          align-items: stretch;
        }

        [region-group="top"] {
          justify-content: flex-start;
        }

        [region-group="bottom"] {
          justify-content: flex-end;
        }

        [region-group] > [region] {
          flex: initial;
        }
      }
    </style>

    <div region="top-stretch"><slot name="top-stretch"></slot></div>
    <div region-group="top">
      <div region="top-start"><slot name="top-start"></slot></div>
      <div region="top-center"><slot name="top-center"></slot></div>
      <div region="top-end"><slot name="top-end"></slot></div>
    </div>
    <div region="middle"><slot name="middle"></slot></div>
    <div region-group="bottom">
      <div region="bottom-start"><slot name="bottom-start"></slot></div>
      <div region="bottom-center"><slot name="bottom-center"></slot></div>
      <div region="bottom-end"><slot name="bottom-end"></slot></div>
    </div>
    <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
`}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(t){t?(document.body.appendChild(this),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){const t=window.innerHeight,e=window.innerWidth>t,o=document.documentElement.clientHeight;this.style.bottom=e&&o>t?o-t+"px":"0"}}class en extends(fo(Te)){static get template(){return it`
    <style>
      :host {
        display: block;
        pointer-events: auto;
      }
    </style>

    <div part="overlay">
      <div part="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class on extends(_o(So(Te))){static get template(){return it`
    <style>
      :host {
        display: none;
      }
    </style>
    <vaadin-notification-card id="vaadin-notification-card" theme\$="[[theme]]">
    </vaadin-notification-card>
`}static get is(){return"vaadin-notification"}static get version(){return"1.4.0"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function,_notificationTemplate:Object}}static get observers(){return["_durationChanged(duration, opened)","_templateOrRendererChanged(_notificationTemplate, renderer, opened)"]}ready(){super.ready(),this._observer=new Qo(this,t=>{this._setTemplateFromNodes(t.addedNodes)})}_setTemplateFromNodes(t){this._notificationTemplate=t.filter(t=>t.localName&&"template"===t.localName)[0]||this._notificationTemplate}render(){"function"==typeof this.renderer&&this.renderer(this._card,this)}_removeNewRendererOrTemplate(t,e,o,n){t!==e?this._notificationTemplate=void 0:o!==n&&(this.renderer=void 0)}_templateOrRendererChanged(t,e,o){if(t&&e)throw this._removeNewRendererOrTemplate(t,this._oldTemplate,e,this._oldRenderer),new Error("You should only use either a renderer or a template for notification content");this._oldTemplate=t;const n=this._oldRenderer!==e;if(this._oldRenderer=e,e){if(this._card=this.$["vaadin-notification-card"],n)for(;this._card.firstChild;)this._card.removeChild(this._card.firstChild);o&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.render())}}open(){this.opened=!0}close(){this.opened=!1}get _container(){return on._container||(on._container=document.createElement("vaadin-notification-container"),document.body.appendChild(on._container)),on._container}_openedChanged(t){t?(this._container.opened=!0,this._instance||this.renderer||this._ensureTemplatized(),this._animatedAppendNotificationCard(),setTimeout(()=>this._updateShadyButtonStyles())):this._card&&this._closeNotificationCard()}_ensureTemplatized(){if(this._notificationTemplate=this.querySelector("template")||this._notificationTemplate,!this._notificationTemplate)return;this._notificationTemplate._Templatizer||(this._notificationTemplate._Templatizer=$o(this._notificationTemplate,this,{forwardHostProp:function(t,e){this._instance&&this._instance.forwardHostProp(t,e)}})),this._instance=new this._notificationTemplate._Templatizer({});const t=this._notificationTemplate.getRootNode(),e=t!==document;if(this._card=this.$["vaadin-notification-card"],this._cardContent=this._card.shadowRoot.querySelector('[part~="content"]'),e){if(this._cardContent.shadowRoot||this._cardContent.attachShadow({mode:"open"}),window.ShadyCSS&&!window.ShadyCSS.nativeShadow){var o=t.host&&t.host.localName;o&&-1===o.indexOf("-")&&(o=t.host.getAttribute("is")),o&&this._cardContent.setAttribute("is",o)}else{const e=Array.from(t.querySelectorAll("style")).reduce((t,e)=>t+e.textContent,"").replace(/:host/g,":host-nomatch");if(e){const t=document.createElement("style");t.textContent=e,this._cardContent.shadowRoot.appendChild(t)}}this._cardContent.shadowRoot.appendChild(this._instance.root)}else this._card.appendChild(this._instance.root);this._card.setAttribute("aria-label",this._card.textContent.trim())}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();const t=()=>{this._card.removeEventListener("animationend",t),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",t),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){this._card&&(this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)?(this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)):window.console.warn(`Invalid alignment parameter provided: position=${this.position}`))}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");const t=getComputedStyle(this._card).getPropertyValue("animation-name");if(t&&"none"!=t){const t=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",t)};this._card.addEventListener("animationend",t)}else this._removeNotificationCard()}_positionChanged(t){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(t,e){e&&(clearTimeout(this._durationTimeoutId),t>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),t)))}_updateShadyButtonStyles(){window.ShadyCSS&&!this.__buttonStylesPending&&(customElements.whenDefined("vaadin-button").then(()=>{Array.from(this._card.querySelectorAll("*")).filter(t=>t instanceof customElements.get("vaadin-button")).forEach(t=>{const e=["--_lumo-button-color","--_lumo-button-background-color","--_lumo-button-primary-color","--_lumo-button-primary-background-color"].reduce((t,e)=>{const o=window.ShadyCSS.getComputedStyleValue(this._card,e);return o&&(t[e]=o),t},{});t.updateStyles(e)}),this.__buttonStylesPending=!1}),this.__buttonStylesPending=!0)}}customElements.define(tn.is,tn),customElements.define(en.is,en),customElements.define(on.is,on),window.addEventListener("load",()=>{document.getElementById("main").innerText=window.location.search})}]);