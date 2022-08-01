import{H as te,$ as ce,a0 as fe,a1 as de,S as R,i as F,s as H,F as U,C as m,l as Q,m as T,n as L,h as b,G as D,b as E,I as _,J as O,K as G,L as B,z,M as P,f as I,t as j,N as k,O as S,P as X,Q as q,T as W,Z as pe,_ as he,a2 as ne,U as me}from"./index-dc819829.js";var ee=function(a,e){return ee=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])},ee(a,e)};function ve(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");ee(a,e);function t(){this.constructor=a}a.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var K=function(){return K=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},K.apply(this,arguments)};function x(a){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&a[e],n=0;if(t)return t.call(a);if(a&&typeof a.length=="number")return{next:function(){return a&&n>=a.length&&(a=void 0),{value:a&&a[n++],done:!a}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ge=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ye(a){return a===void 0&&(a=window),Ae(a)?{passive:!0}:!1}function Ae(a){a===void 0&&(a=window);var e=!1;try{var t={get passive(){return e=!0,!1}},n=function(){};a.document.addEventListener("test",n,t),a.document.removeEventListener("test",n,t)}catch{e=!1}return e}const be=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:ye},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function _e(a,e){if(a.closest)return a.closest(e);for(var t=a;t;){if(oe(t,e))return t;t=t.parentElement}return null}function oe(a,e){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,e)}function Se(a){var e=a;if(e.offsetParent!==null)return e.scrollWidth;var t=e.cloneNode(!0);t.style.setProperty("position","absolute"),t.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(t);var n=t.scrollWidth;return document.documentElement.removeChild(t),n}const Ce=Object.freeze(Object.defineProperty({__proto__:null,closest:_e,matches:oe,estimateScrollWidth:Se},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var De={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},we={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},ie={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},N;function Me(a,e){e===void 0&&(e=!1);var t=a.CSS,n=N;if(typeof N=="boolean"&&!e)return N;var s=t&&typeof t.supports=="function";if(!s)return!1;var o=t.supports("--css-vars","yes"),l=t.supports("(--css-vars: yes)")&&t.supports("color","#00000000");return n=o||l,e||(N=n),n}function Re(a,e,t){if(!a)return{x:0,y:0};var n=e.x,s=e.y,o=n+t.left,l=s+t.top,r,f;if(a.type==="touchstart"){var c=a;r=c.changedTouches[0].pageX-o,f=c.changedTouches[0].pageY-l}else{var i=a;r=i.pageX-o,f=i.pageY-l}return{x:r,y:f}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ae=["touchstart","pointerdown","mousedown","keydown"],re=["touchend","pointerup","mouseup","contextmenu"],Y=[],Fe=function(a){ve(e,a);function e(t){var n=a.call(this,K(K({},e.defaultAdapter),t))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(s){n.activateImpl(s)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return De},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return we},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return ie},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var s=e.cssClasses,o=s.ROOT,l=s.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(o),t.adapter.isUnbounded()&&(t.adapter.addClass(l),t.layoutInternal())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,s=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(s),t.adapter.removeClass(o),t.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(t){this.activateImpl(t)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var t=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){t.layoutInternal(),t.layoutFrame=0})},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(t){var n,s;if(t){try{for(var o=x(ae),l=o.next();!l.done;l=o.next()){var r=l.value;this.adapter.registerInteractionHandler(r,this.activateHandler)}}catch(f){n={error:f}}finally{try{l&&!l.done&&(s=o.return)&&s.call(o)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(t){var n,s;if(t.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var o=x(re),l=o.next();!l.done;l=o.next()){var r=l.value;this.adapter.registerDocumentInteractionHandler(r,this.deactivateHandler)}}catch(f){n={error:f}}finally{try{l&&!l.done&&(s=o.return)&&s.call(o)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var t,n;try{for(var s=x(ae),o=s.next();!o.done;o=s.next()){var l=o.value;this.adapter.deregisterInteractionHandler(l,this.activateHandler)}}catch(r){t={error:r}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var t,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var s=x(re),o=s.next();!o.done;o=s.next()){var l=o.value;this.adapter.deregisterDocumentInteractionHandler(l,this.deactivateHandler)}}catch(r){t={error:r}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}},e.prototype.removeCssVars=function(){var t=this,n=e.strings,s=Object.keys(n);s.forEach(function(o){o.indexOf("VAR_")===0&&t.adapter.updateCssVariable(n[o],null)})},e.prototype.activateImpl=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var s=this.activationState;if(!s.isActivated){var o=this.previousActivationEvent,l=o&&t!==void 0&&o.type!==t.type;if(!l){s.isActivated=!0,s.isProgrammatic=t===void 0,s.activationEvent=t,s.wasActivatedByPointer=s.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var r=t!==void 0&&Y.length>0&&Y.some(function(f){return n.adapter.containsEventTarget(f)});if(r){this.resetActivationState();return}t!==void 0&&(Y.push(t.target),this.registerDeactivationHandlers(t)),s.wasElementMadeActive=this.checkElementMadeActive(t),s.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){Y=[],!s.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(s.wasElementMadeActive=n.checkElementMadeActive(t),s.wasElementMadeActive&&n.animateActivation()),s.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var t=this,n=e.strings,s=n.VAR_FG_TRANSLATE_START,o=n.VAR_FG_TRANSLATE_END,l=e.cssClasses,r=l.FG_DEACTIVATION,f=l.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var i="",u="";if(!this.adapter.isUnbounded()){var d=this.getFgTranslationCoordinates(),h=d.startPoint,p=d.endPoint;i=h.x+"px, "+h.y+"px",u=p.x+"px, "+p.y+"px"}this.adapter.updateCssVariable(s,i),this.adapter.updateCssVariable(o,u),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(r),this.adapter.computeBoundingRect(),this.adapter.addClass(f),this.activationTimer=setTimeout(function(){t.activationTimerCallback()},c)},e.prototype.getFgTranslationCoordinates=function(){var t=this.activationState,n=t.activationEvent,s=t.wasActivatedByPointer,o;s?o=Re(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):o={x:this.frame.width/2,y:this.frame.height/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2};var l={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:o,endPoint:l}},e.prototype.runDeactivationUXLogicIfReady=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,s=this.activationState,o=s.hasDeactivationUXRun,l=s.isActivated,r=o||!l;r&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){t.adapter.removeClass(n)},ie.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var t=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return t.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var t=this,n=this.activationState;if(!!n.isActivated){var s=K({},n);n.isProgrammatic?(requestAnimationFrame(function(){t.animateDeactivation(s)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){t.activationState.hasDeactivationUXRun=!0,t.animateDeactivation(s),t.resetActivationState()}))}},e.prototype.animateDeactivation=function(t){var n=t.wasActivatedByPointer,s=t.wasElementMadeActive;(n||s)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var t=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),s=function(){var l=Math.sqrt(Math.pow(t.frame.width,2)+Math.pow(t.frame.height,2));return l+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:s();var o=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&o%2!==0?this.initialSize=o-1:this.initialSize=o,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var t=e.strings,n=t.VAR_FG_SIZE,s=t.VAR_LEFT,o=t.VAR_TOP,l=t.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(l,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(s,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords.top+"px"))},e}(ge);function xe(a){return Object.entries(a).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function Ne(a,e,t,n={bubbles:!0},s=!1){if(typeof Event<"u"&&a){const o=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:t}));if(a==null||a.dispatchEvent(o),s&&e.startsWith("SMUI")){const l=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:t}));a==null||a.dispatchEvent(l),l.defaultPrevented&&o.preventDefault()}return o}}const se=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,He=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function V(a){let e,t=[];a.$on=(s,o)=>{let l=s,r=()=>{};return e?r=e(l,o):t.push([l,o]),l.match(se)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',l),()=>{r()}};function n(s){ce(a,s)}return s=>{const o=[],l={};e=(r,f)=>{let c=r,i=f,u=!1;const d=c.match(se),h=c.match(He),p=d||h;if(c.match(/^SMUI:\w+:/)){const g=c.split(":");let y="";for(let C=0;C<g.length;C++)y+=C===g.length-1?":"+g[C]:g[C].split("-").map(J=>J.slice(0,1).toUpperCase()+J.slice(1)).join("");console.warn(`The event ${c.split("$")[0]} has been renamed to ${y.split("$")[0]}.`),c=y}if(p){const g=c.split(d?":":"$");c=g[0];const y=Object.fromEntries(g.slice(1).map(C=>[C,!0]));y.passive&&(u=u||{},u.passive=!0),y.nonpassive&&(u=u||{},u.passive=!1),y.capture&&(u=u||{},u.capture=!0),y.once&&(u=u||{},u.once=!0),y.preventDefault&&(i=fe(i)),y.stopPropagation&&(i=de(i))}const M=te(s,c,i,u),w=()=>{M();const g=o.indexOf(w);g>-1&&o.splice(g,1)};return o.push(w),c in l||(l[c]=te(s,c,n)),w};for(let r=0;r<t.length;r++)e(t[r][0],t[r][1]);return{destroy:()=>{for(let r=0;r<o.length;r++)o[r]();for(let r of Object.entries(l))r[1]()}}}}function Z(a,e){let t=[];if(e)for(let n=0;n<e.length;n++){const s=e[n],o=Array.isArray(s)?s[0]:s;Array.isArray(s)&&s.length>1?t.push(o(a,s[1])):t.push(o(a))}return{update(n){if((n&&n.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(n)for(let s=0;s<n.length;s++){const o=t[s];if(o&&o.update){const l=n[s];Array.isArray(l)&&l.length>1?o.update(l[1]):o.update()}}},destroy(){for(let n=0;n<t.length;n++){const s=t[n];s&&s.destroy&&s.destroy()}}}}function Ue(a){let e,t,n,s,o;const l=a[6].default,r=U(l,a,a[5],null);let f=[a[3]],c={};for(let i=0;i<f.length;i+=1)c=m(c,f[i]);return{c(){e=Q("div"),r&&r.c(),this.h()},l(i){e=T(i,"DIV",{});var u=L(e);r&&r.l(u),u.forEach(b),this.h()},h(){D(e,c)},m(i,u){E(i,e,u),r&&r.m(e,null),a[7](e),n=!0,s||(o=[_(t=Z.call(null,e,a[0])),_(a[2].call(null,e))],s=!0)},p(i,[u]){r&&r.p&&(!n||u&32)&&O(r,l,i,i[5],n?B(l,i[5],u,null):G(i[5]),null),D(e,c=z(f,[u&8&&i[3]])),t&&P(t.update)&&u&1&&t.update.call(null,i[0])},i(i){n||(I(r,i),n=!0)},o(i){j(r,i),n=!1},d(i){i&&b(e),r&&r.d(i),a[7](null),s=!1,k(o)}}}function Le(a,e,t){const n=["use","getElement"];let s=S(e,n),{$$slots:o={},$$scope:l}=e,{use:r=[]}=e;const f=V(X());let c;function i(){return c}function u(d){W[d?"unshift":"push"](()=>{c=d,t(1,c)})}return a.$$set=d=>{e=m(m({},e),q(d)),t(3,s=S(e,n)),"use"in d&&t(0,r=d.use),"$$scope"in d&&t(5,l=d.$$scope)},[r,c,f,s,i,l,o,u]}class Ee extends R{constructor(e){super(),F(this,e,Le,Ue,H,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Oe(a){let e,t,n,s,o;const l=a[7].default,r=U(l,a,a[6],null);let f=[{href:a[1]},a[4]],c={};for(let i=0;i<f.length;i+=1)c=m(c,f[i]);return{c(){e=Q("a"),r&&r.c(),this.h()},l(i){e=T(i,"A",{href:!0});var u=L(e);r&&r.l(u),u.forEach(b),this.h()},h(){D(e,c)},m(i,u){E(i,e,u),r&&r.m(e,null),a[8](e),n=!0,s||(o=[_(t=Z.call(null,e,a[0])),_(a[3].call(null,e))],s=!0)},p(i,[u]){r&&r.p&&(!n||u&64)&&O(r,l,i,i[6],n?B(l,i[6],u,null):G(i[6]),null),D(e,c=z(f,[(!n||u&2)&&{href:i[1]},u&16&&i[4]])),t&&P(t.update)&&u&1&&t.update.call(null,i[0])},i(i){n||(I(r,i),n=!0)},o(i){j(r,i),n=!1},d(i){i&&b(e),r&&r.d(i),a[8](null),s=!1,k(o)}}}function Ge(a,e,t){const n=["use","href","getElement"];let s=S(e,n),{$$slots:o={},$$scope:l}=e,{use:r=[]}=e,{href:f="javascript:void(0);"}=e;const c=V(X());let i;function u(){return i}function d(h){W[h?"unshift":"push"](()=>{i=h,t(2,i)})}return a.$$set=h=>{e=m(m({},e),q(h)),t(4,s=S(e,n)),"use"in h&&t(0,r=h.use),"href"in h&&t(1,f=h.href),"$$scope"in h&&t(6,l=h.$$scope)},[r,f,i,c,s,u,l,o,d]}class Be extends R{constructor(e){super(),F(this,e,Ge,Oe,H,{use:0,href:1,getElement:5})}get getElement(){return this.$$.ctx[5]}}function ze(a){let e,t,n,s,o;const l=a[6].default,r=U(l,a,a[5],null);let f=[a[3]],c={};for(let i=0;i<f.length;i+=1)c=m(c,f[i]);return{c(){e=Q("button"),r&&r.c(),this.h()},l(i){e=T(i,"BUTTON",{});var u=L(e);r&&r.l(u),u.forEach(b),this.h()},h(){D(e,c)},m(i,u){E(i,e,u),r&&r.m(e,null),e.autofocus&&e.focus(),a[7](e),n=!0,s||(o=[_(t=Z.call(null,e,a[0])),_(a[2].call(null,e))],s=!0)},p(i,[u]){r&&r.p&&(!n||u&32)&&O(r,l,i,i[5],n?B(l,i[5],u,null):G(i[5]),null),D(e,c=z(f,[u&8&&i[3]])),t&&P(t.update)&&u&1&&t.update.call(null,i[0])},i(i){n||(I(r,i),n=!0)},o(i){j(r,i),n=!1},d(i){i&&b(e),r&&r.d(i),a[7](null),s=!1,k(o)}}}function Pe(a,e,t){const n=["use","getElement"];let s=S(e,n),{$$slots:o={},$$scope:l}=e,{use:r=[]}=e;const f=V(X());let c;function i(){return c}function u(d){W[d?"unshift":"push"](()=>{c=d,t(1,c)})}return a.$$set=d=>{e=m(m({},e),q(d)),t(3,s=S(e,n)),"use"in d&&t(0,r=d.use),"$$scope"in d&&t(5,l=d.$$scope)},[r,c,f,s,i,l,o,u]}class Ie extends R{constructor(e){super(),F(this,e,Pe,ze,H,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function je(a){let e,t,n,s,o;const l=a[6].default,r=U(l,a,a[5],null);let f=[a[3]],c={};for(let i=0;i<f.length;i+=1)c=m(c,f[i]);return{c(){e=Q("main"),r&&r.c(),this.h()},l(i){e=T(i,"MAIN",{});var u=L(e);r&&r.l(u),u.forEach(b),this.h()},h(){D(e,c)},m(i,u){E(i,e,u),r&&r.m(e,null),a[7](e),n=!0,s||(o=[_(t=Z.call(null,e,a[0])),_(a[2].call(null,e))],s=!0)},p(i,[u]){r&&r.p&&(!n||u&32)&&O(r,l,i,i[5],n?B(l,i[5],u,null):G(i[5]),null),D(e,c=z(f,[u&8&&i[3]])),t&&P(t.update)&&u&1&&t.update.call(null,i[0])},i(i){n||(I(r,i),n=!0)},o(i){j(r,i),n=!1},d(i){i&&b(e),r&&r.d(i),a[7](null),s=!1,k(o)}}}function ke(a,e,t){const n=["use","getElement"];let s=S(e,n),{$$slots:o={},$$scope:l}=e,{use:r=[]}=e;const f=V(X());let c;function i(){return c}function u(d){W[d?"unshift":"push"](()=>{c=d,t(1,c)})}return a.$$set=d=>{e=m(m({},e),q(d)),t(3,s=S(e,n)),"use"in d&&t(0,r=d.use),"$$scope"in d&&t(5,l=d.$$scope)},[r,c,f,s,i,l,o,u]}class Xe extends R{constructor(e){super(),F(this,e,ke,je,H,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function qe(a){let e,t,n,s,o;const l=a[6].default,r=U(l,a,a[5],null);let f=[a[3]],c={};for(let i=0;i<f.length;i+=1)c=m(c,f[i]);return{c(){e=Q("span"),r&&r.c(),this.h()},l(i){e=T(i,"SPAN",{});var u=L(e);r&&r.l(u),u.forEach(b),this.h()},h(){D(e,c)},m(i,u){E(i,e,u),r&&r.m(e,null),a[7](e),n=!0,s||(o=[_(t=Z.call(null,e,a[0])),_(a[2].call(null,e))],s=!0)},p(i,[u]){r&&r.p&&(!n||u&32)&&O(r,l,i,i[5],n?B(l,i[5],u,null):G(i[5]),null),D(e,c=z(f,[u&8&&i[3]])),t&&P(t.update)&&u&1&&t.update.call(null,i[0])},i(i){n||(I(r,i),n=!0)},o(i){j(r,i),n=!1},d(i){i&&b(e),r&&r.d(i),a[7](null),s=!1,k(o)}}}function We(a,e,t){const n=["use","getElement"];let s=S(e,n),{$$slots:o={},$$scope:l}=e,{use:r=[]}=e;const f=V(X());let c;function i(){return c}function u(d){W[d?"unshift":"push"](()=>{c=d,t(1,c)})}return a.$$set=d=>{e=m(m({},e),q(d)),t(3,s=S(e,n)),"use"in d&&t(0,r=d.use),"$$scope"in d&&t(5,l=d.$$scope)},[r,c,f,s,i,l,o,u]}class Ve extends R{constructor(e){super(),F(this,e,We,qe,H,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Ze(a){let e,t,n,s,o;const l=a[6].default,r=U(l,a,a[5],null);let f=[a[3]],c={};for(let i=0;i<f.length;i+=1)c=m(c,f[i]);return{c(){e=pe("svg"),r&&r.c(),this.h()},l(i){e=he(i,"svg",{});var u=L(e);r&&r.l(u),u.forEach(b),this.h()},h(){ne(e,c)},m(i,u){E(i,e,u),r&&r.m(e,null),a[7](e),n=!0,s||(o=[_(t=Z.call(null,e,a[0])),_(a[2].call(null,e))],s=!0)},p(i,[u]){r&&r.p&&(!n||u&32)&&O(r,l,i,i[5],n?B(l,i[5],u,null):G(i[5]),null),ne(e,c=z(f,[u&8&&i[3]])),t&&P(t.update)&&u&1&&t.update.call(null,i[0])},i(i){n||(I(r,i),n=!0)},o(i){j(r,i),n=!1},d(i){i&&b(e),r&&r.d(i),a[7](null),s=!1,k(o)}}}function Je(a,e,t){const n=["use","getElement"];let s=S(e,n),{$$slots:o={},$$scope:l}=e,{use:r=[]}=e;const f=V(X());let c;function i(){return c}function u(d){W[d?"unshift":"push"](()=>{c=d,t(1,c)})}return a.$$set=d=>{e=m(m({},e),q(d)),t(3,s=S(e,n)),"use"in d&&t(0,r=d.use),"$$scope"in d&&t(5,l=d.$$scope)},[r,c,f,s,i,l,o,u]}class Ke extends R{constructor(e){super(),F(this,e,Je,Ze,H,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const Ye=Be,$e=Ie,et=Ee,tt=Xe,nt=Ve,it=Ke,{applyPassive:$}=be,{matches:Qe}=Ce;function at(a,{ripple:e=!0,surface:t=!1,unbounded:n=!1,disabled:s=!1,color:o,active:l,rippleElement:r,eventTarget:f,activeTarget:c,addClass:i=p=>a.classList.add(p),removeClass:u=p=>a.classList.remove(p),addStyle:d=(p,M)=>a.style.setProperty(p,M),initPromise:h=Promise.resolve()}={}){let p,M=me("SMUI:addLayoutListener"),w,g=l,y=f,C=c;function J(){t?(i("mdc-ripple-surface"),o==="primary"?(i("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")):o==="secondary"?(u("smui-ripple-surface--primary"),i("smui-ripple-surface--secondary")):(u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary"))):(u("mdc-ripple-surface"),u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")),p&&g!==l&&(g=l,l?p.activate():l===!1&&p.deactivate()),e&&!p?(p=new Fe({addClass:i,browserSupportsCssVars:()=>Me(window),computeBoundingRect:()=>(r||a).getBoundingClientRect(),containsEventTarget:v=>a.contains(v),deregisterDocumentInteractionHandler:(v,A)=>document.documentElement.removeEventListener(v,A,$()),deregisterInteractionHandler:(v,A)=>(f||a).removeEventListener(v,A,$()),deregisterResizeHandler:v=>window.removeEventListener("resize",v),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>l==null?Qe(c||a,":active"):l,isSurfaceDisabled:()=>!!s,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(v,A)=>document.documentElement.addEventListener(v,A,$()),registerInteractionHandler:(v,A)=>(f||a).addEventListener(v,A,$()),registerResizeHandler:v=>window.addEventListener("resize",v),removeClass:u,updateCssVariable:d}),h.then(()=>{p&&(p.init(),p.setUnbounded(n))})):p&&!e&&h.then(()=>{p&&(p.destroy(),p=void 0)}),p&&(y!==f||C!==c)&&(y=f,C=c,p.destroy(),requestAnimationFrame(()=>{p&&(p.init(),p.setUnbounded(n))})),!e&&n&&i("mdc-ripple-upgraded--unbounded")}J(),M&&(w=M(le));function le(){p&&p.layout()}return{update(v){({ripple:e,surface:t,unbounded:n,disabled:s,color:o,active:l,rippleElement:r,eventTarget:f,activeTarget:c,addClass:i,removeClass:u,addStyle:d,initPromise:h}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:A=>a.classList.add(A),removeClass:A=>a.classList.remove(A),addStyle:(A,ue)=>a.style.setProperty(A,ue),initPromise:Promise.resolve()},v)),J()},destroy(){p&&(p.destroy(),p=void 0,u("mdc-ripple-surface"),u("smui-ripple-surface--primary"),u("smui-ripple-surface--secondary")),w&&w()}}}export{Ye as A,$e as B,Ee as D,ge as M,at as R,nt as S,ve as _,K as a,et as b,xe as c,Ne as d,tt as e,V as f,Ke as g,it as h,Z as u};