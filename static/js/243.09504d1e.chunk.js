/*! For license information please see 243.09504d1e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfoodlist=self.webpackChunkfoodlist||[]).push([[243],{5846:function(t,e,r){r.r(e),r.d(e,{default:function(){return L}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(_){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new O(n||[]);return a(i,"_invoke",{value:j(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var v={};function p(){}function d(){}function m(){}var y={};f(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(N([])));w&&w!==e&&r.call(w,c)&&(y=w);var b=m.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function o(a,i,c,u){var s=h(t[a],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==(0,n.Z)(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(l).then((function(t){f.value=t,c(f)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=m,a(b,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:d,configurable:!0}),d.displayName=f(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,u,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(b),f(b,s,"Generator"),f(b,c,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Z),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),v}},t}function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}var i=r(4942),c=r(3433),u=r(9439),s=r(7313),f=r(6417),l=(0,s.memo)((function(t){var e=t.message;return(0,f.jsx)("div",{className:"mes-container ".concat("pc"===Object.keys(e)[0]?"secondary":"primary"),children:function(){var t=Object.values(e)[0];return"string"===typeof t?t:t()}()})})),h=l,v=r(8467),p=r(7279),d=r.p+"static/media/neonOn.7e6edcb462fc4194eb2b.mp3",m=r.p+"static/media/neonBlink.b91422a61d7511442179.mp3",y=function(){var t=(0,s.useState)("default"),e=(0,u.Z)(t,2),r=e[0],n=e[1],o=(0,s.useState)(),a=(0,u.Z)(o,2),i=a[0],c=a[1],l=(0,p.Z)(d),h=(0,u.Z)(l,2),y=(h[0],h[1]),g=(0,p.Z)(m),w=(0,u.Z)(g,2),b=(w[0],w[1]),x=(0,v.s0)();(0,s.useEffect)((function(){return function(){i&&clearInterval(i)}}),[]);return(0,f.jsx)("div",{className:"gc-intro ".concat(r),onMouseOver:function(){var t=setInterval((function(){n((function(t){return"red"!==t?"red":"blue"})),b()}),700);y(),c(t)},onMouseLeave:function(){i&&(clearInterval(i),c()),n("default")},onClick:function(){return x("/game")},children:"\u041d\u0438\u043a\u0438\u0442\u0430, \u0442\u044b \u0433\u043e\u0442\u043e\u0432?"})},g=[{name:"\u0417\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c\u0438",navigateTo:"/foodlist"},{name:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",navigateTo:"/chat"},{name:"\u041f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c",navigateTo:"/timer"},{name:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442",navigateTo:"/chat/"}],w=function(){var t=(0,v.s0)();return(0,f.jsx)("div",{className:"act-container",children:g.map((function(e){var r=e.name,n=e.navigateTo;return(0,f.jsx)("span",{className:"act-item",onClick:function(){return t(n)},children:r},n)}))})},b="\u041f\u0440\u0438\u0432\u0435\u0442, \u0447\u0435\u043c \u0437\u0430\u0439\u043c\u0435\u043c\u0441\u044f \u0441\u0435\u0433\u043e\u0434\u043d\u044f?",x=function(){return(0,f.jsx)(w,{})},L=function(){var t=(0,s.useState)(""),e=(0,u.Z)(t,2),r=e[0],n=e[1],l=(0,s.useState)([]),p=(0,u.Z)(l,2),d=p[0],m=p[1],g=(0,s.useState)(!1),w=(0,u.Z)(g,2),L=w[0],j=w[1],E=(0,s.useRef)([]),k=(0,v.s0)(),Z=(0,s.useCallback)((function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=setTimeout((function(){m((function(r){return[].concat((0,c.Z)(r),[(0,i.Z)({},t,e)])})),n(""),E.current=[]}),r);E.current=[].concat((0,c.Z)(E.current),[o]),console.log(E.current)}),[]);(0,s.useEffect)((function(){return Z("pc",b,500),Z("pc",x,500),function(){E.current.forEach((function(t){return clearTimeout(t)})),E.current=[],m([])}}),[Z]);var O=function(){var t,e=(t=o().mark((function t(e){var n,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),""!==r){t.next=3;break}return t.abrupt("return");case 3:n=function(t){var e=setTimeout((function(){k(t)}),500);E.current=[].concat((0,c.Z)(E.current),[e])},Z("user",r),a=setTimeout((function(){switch(!0){case!!r.toLowerCase().match(/^\u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b$/):case!!r.toLowerCase().match(/^\u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432$/):Z("pc","\u041e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e \u0437\u0430\u043f\u0440\u043e\u0441..."),n("/foodlist");break;case!!r.toLowerCase().match(/^\u043f\u043e\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c$/):case!!r.toLowerCase().match(/^\u0440\u0430\u0431\u043e\u0442\u0430$/):case!!r.toLowerCase().match(/^\u0442\u0430\u0439\u043c\u0435\u0440$/):Z("pc","\u041e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u044e \u0437\u0430\u043f\u0440\u043e\u0441..."),n("/timer");break;case!!r.toLowerCase().match(/\u043c\u043d\u0435 \u043a\u0430\u0436\u0435\u0442\u0441\u044f/):Z("pc","..."),Z("pc","\u042f \u0432\u043f\u043e\u043b\u043d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d, \u0447\u0442\u043e \u0443\u043c\u0435\u044e \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e, \u0447\u0442\u043e \u0443\u043a\u0430\u0437\u0430\u043b \u0432\u044b\u0448\u0435");break;case!!r.toLowerCase().match(/\u0447\u0442\u043e-\u0442\u043e/):j(!0);break;default:Z("pc","\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u044f \u043d\u0435 \u043f\u043e\u043d\u044f\u043b... \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043d\u0438\u0436\u0435"),Z("pc",x)}}),500),E.current=[].concat((0,c.Z)(E.current),[a]);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))});return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:"ch-container",children:[(0,f.jsxs)("div",{className:"ch-messages",children:[(0,f.jsx)("div",{className:"filler"}),d.map((function(t,e){return(0,f.jsx)(h,{message:t},e)})),L&&(0,f.jsx)(y,{})]}),(0,f.jsx)("div",{className:"ch-send-container",children:(0,f.jsxs)("form",{onSubmit:O,children:[(0,f.jsx)("input",{type:"text",value:r,onChange:function(t){return n(t.target.value)},placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),(0,f.jsx)("button",{className:"ch-send-button",type:"submit",children:(0,f.jsx)("i",{className:"fa-solid fa-paper-plane"})})]})})]})}},7279:function(t,e,r){var n=r(9439),o=r(7313);e.Z=function(t){var e=(0,o.useState)(new Audio(t)),r=(0,n.Z)(e,1)[0],a=(0,o.useState)(!1),i=(0,n.Z)(a,2),c=i[0],u=i[1];return(0,o.useEffect)((function(){c?r.play():r.load()}),[c]),(0,o.useEffect)((function(){return r.addEventListener("ended",(function(){return u(!1)})),function(){r.removeEventListener("ended",(function(){return u(!1)}))}}),[]),[c,function(){return u((function(t){return!t}))}]}},4942:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(9142);function o(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}}}]);