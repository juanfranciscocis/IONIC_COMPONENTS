"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9312],{436:(y,h,i)=>{i.d(h,{c:()=>s});var d=i(2992),c=i(5988),l=i(2528);const s=(e,o)=>{let t,n;const _=(a,p,E)=>{if(typeof document>"u")return;const w=document.elementFromPoint(a,p);w&&o(w)?w!==t&&(r(),u(w,E)):r()},u=(a,p)=>{t=a,n||(n=t);const E=t;(0,d.w)(()=>E.classList.add("ion-activated")),p()},r=(a=!1)=>{if(!t)return;const p=t;(0,d.w)(()=>p.classList.remove("ion-activated")),a&&n!==t&&t.click(),t=void 0};return(0,l.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>_(a.currentX,a.currentY,c.a),onMove:a=>_(a.currentX,a.currentY,c.b),onEnd:()=>{r(!0),(0,c.h)(),n=void 0}})}},1008:(y,h,i)=>{i.d(h,{g:()=>c});var d=i(4829);const c=()=>{if(void 0!==d.w)return d.w.Capacitor}},5984:(y,h,i)=>{i.d(h,{c:()=>d,i:()=>c});const d=(l,s,e)=>"function"==typeof e?e(l,s):"string"==typeof e?l[e]===s[e]:Array.isArray(s)?s.includes(l):l===s,c=(l,s,e)=>void 0!==l&&(Array.isArray(l)?l.some(o=>d(o,s,e)):d(l,s,e))},6944:(y,h,i)=>{i.d(h,{g:()=>d});const d=(o,t,n,_,u)=>l(o[1],t[1],n[1],_[1],u).map(r=>c(o[0],t[0],n[0],_[0],r)),c=(o,t,n,_,u)=>u*(3*t*Math.pow(u-1,2)+u*(-3*n*u+3*n+_*u))-o*Math.pow(u-1,3),l=(o,t,n,_,u)=>e((_-=u)-3*(n-=u)+3*(t-=u)-(o-=u),3*n-6*t+3*o,3*t-3*o,o).filter(a=>a>=0&&a<=1),e=(o,t,n,_)=>{if(0===o)return((o,t,n)=>{const _=t*t-4*o*n;return _<0?[]:[(-t+Math.sqrt(_))/(2*o),(-t-Math.sqrt(_))/(2*o)]})(t,n,_);const u=(3*(n/=o)-(t/=o)*t)/3,r=(2*t*t*t-9*t*n+27*(_/=o))/27;if(0===u)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-u),-Math.sqrt(-u)];const a=Math.pow(r/2,2)+Math.pow(u/3,3);if(0===a)return[Math.pow(r/2,.5)-t/3];if(a>0)return[Math.pow(-r/2+Math.sqrt(a),1/3)-Math.pow(r/2+Math.sqrt(a),1/3)-t/3];const p=Math.sqrt(Math.pow(-u/3,3)),E=Math.acos(-r/(2*Math.sqrt(Math.pow(-u/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(E/3)-t/3,w*Math.cos((E+2*Math.PI)/3)-t/3,w*Math.cos((E+4*Math.PI)/3)-t/3]}},7716:(y,h,i)=>{i.d(h,{i:()=>d});const d=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},704:(y,h,i)=>{i.r(h),i.d(h,{startFocusVisible:()=>s});const d="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=e=>{let o=[],t=!0;const n=e?e.shadowRoot:document,_=e||document.body,u=M=>{o.forEach(v=>v.classList.remove(d)),M.forEach(v=>v.classList.add(d)),o=M},r=()=>{t=!1,u([])},a=M=>{t=l.includes(M.key),t||u([])},p=M=>{if(t&&void 0!==M.composedPath){const v=M.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));u(v)}},E=()=>{n.activeElement===_&&u([])};return n.addEventListener("keydown",a),n.addEventListener("focusin",p),n.addEventListener("focusout",E),n.addEventListener("touchstart",r,{passive:!0}),n.addEventListener("mousedown",r),{destroy:()=>{n.removeEventListener("keydown",a),n.removeEventListener("focusin",p),n.removeEventListener("focusout",E),n.removeEventListener("touchstart",r),n.removeEventListener("mousedown",r)},setFocus:u}}},2693:(y,h,i)=>{i.d(h,{c:()=>c});var d=i(1448);const c=o=>{const t=o;let n;return{hasLegacyControl:()=>{if(void 0===n){const u=void 0!==t.label||l(t),r=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,a=(0,d.h)(t);n=!0===t.legacy||!u&&!r&&null!==a}return n}}},l=o=>!!(s.includes(o.tagName)&&null!==o.querySelector('[slot="label"]')||e.includes(o.tagName)&&""!==o.textContent),s=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],e=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},5988:(y,h,i)=>{i.d(h,{I:()=>c,a:()=>t,b:()=>n,c:()=>o,d:()=>u,h:()=>_});var d=i(1008),c=function(r){return r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",r}(c||{});const s={getEngine(){const r=window.TapticEngine;if(r)return r;const a=(0,d.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,d.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,d.g)(),impact(r){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?r.style:r.style.toLowerCase();a.impact({style:p})},notification(r){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?r.type:r.type.toLowerCase();a.notification({type:p})},selection(){const r=this.isCapacitor()?c.Light:"light";this.impact({style:r})},selectionStart(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionStart():r.gestureSelectionStart())},selectionChanged(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionChanged():r.gestureSelectionChanged())},selectionEnd(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionEnd():r.gestureSelectionEnd())}},e=()=>s.available(),o=()=>{e()&&s.selection()},t=()=>{e()&&s.selectionStart()},n=()=>{e()&&s.selectionChanged()},_=()=>{e()&&s.selectionEnd()},u=r=>{e()&&s.impact(r)}},6016:(y,h,i)=>{i.d(h,{I:()=>o,a:()=>u,b:()=>e,c:()=>p,d:()=>w,f:()=>r,g:()=>_,i:()=>n,p:()=>E,r:()=>M,s:()=>a});var d=i(1528),c=i(1448),l=i(2032);const e="ion-content",o=".ion-content-scroll-host",t=`${e}, ${o}`,n=v=>"ION-CONTENT"===v.tagName,_=function(){var v=(0,d.c)(function*(g){return n(g)?(yield new Promise(m=>(0,c.c)(g,m)),g.getScrollElement()):g});return function(m){return v.apply(this,arguments)}}(),u=v=>v.querySelector(o)||v.querySelector(t),r=v=>v.closest(t),a=(v,g)=>n(v)?v.scrollToTop(g):Promise.resolve(v.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),p=(v,g,m,O)=>n(v)?v.scrollByPoint(g,m,O):Promise.resolve(v.scrollBy({top:m,left:g,behavior:O>0?"smooth":"auto"})),E=v=>(0,l.b)(v,e),w=v=>{if(n(v)){const m=v.scrollY;return v.scrollY=!1,m}return v.style.setProperty("overflow","hidden"),!0},M=(v,g)=>{n(v)?v.scrollY=g:v.style.removeProperty("overflow")}},4812:(y,h,i)=>{i.d(h,{a:()=>d,b:()=>p,c:()=>t,d:()=>E,e:()=>D,f:()=>o,g:()=>w,h:()=>l,i:()=>c,j:()=>O,k:()=>C,l:()=>n,m:()=>r,n:()=>M,o:()=>u,p:()=>e,q:()=>s,r:()=>m,s:()=>f,t:()=>a,u:()=>v,v:()=>g,w:()=>_});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2400:(y,h,i)=>{i.d(h,{c:()=>s,g:()=>e});var d=i(4829),c=i(1448),l=i(2032);const s=(t,n,_)=>{let u,r;if(void 0!==d.w&&"MutationObserver"in d.w){const w=Array.isArray(n)?n:[n];u=new MutationObserver(M=>{for(const v of M)for(const g of v.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&w.includes(g.slot))return _(),void(0,c.r)(()=>a(g))}),u.observe(t,{childList:!0})}const a=w=>{var M;r&&(r.disconnect(),r=void 0),r=new MutationObserver(v=>{_();for(const g of v)for(const m of g.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===n&&E()}),r.observe(null!==(M=w.parentElement)&&void 0!==M?M:w,{subtree:!0,childList:!0})},E=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),E()}}},e=(t,n,_)=>{const u=null==t?0:t.toString().length,r=o(u,n);if(void 0===_)return r;try{return _(u,n)}catch(a){return(0,l.a)("Exception in provided `counterFormatter`.",a),r}},o=(t,n)=>`${t} / ${n}`},8888:(y,h,i)=>{i.r(h),i.d(h,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>C,keyboardDidClose:()=>v,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>u,setKeyboardClose:()=>E,setKeyboardOpen:()=>p,startKeyboardAssist:()=>r,trackViewportChanges:()=>O});var d=i(56);i(1008),i(4829);const s="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},_=!1;const u=()=>{t={},n={},_=!1},r=f=>{if(d.K.getEngine())a(f);else{if(!f.visualViewport)return;n=C(f.visualViewport),f.visualViewport.onresize=()=>{O(f),w()||M(f)?p(f):v(f)&&E(f)}}},a=f=>{f.addEventListener("keyboardDidShow",D=>p(f,D)),f.addEventListener("keyboardDidHide",()=>E(f))},p=(f,D)=>{g(f,D),_=!0},E=f=>{m(f),_=!1},w=()=>!_&&t.width===n.width&&(t.height-n.height)*n.scale>150,M=f=>_&&!v(f),v=f=>_&&n.height===f.innerHeight,g=(f,D)=>{const L=new CustomEvent(s,{detail:{keyboardHeight:D?D.keyboardHeight:f.innerHeight-n.height}});f.dispatchEvent(L)},m=f=>{const D=new CustomEvent(e);f.dispatchEvent(D)},O=f=>{t=Object.assign({},n),n=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},56:(y,h,i)=>{i.d(h,{K:()=>s,a:()=>l});var d=i(1008),c=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(c||{}),l=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(l||{});const s={getEngine(){const e=(0,d.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(o=>{if(o.code!==c.Unimplemented)throw o}):Promise.resolve(void 0)}}},4908:(y,h,i)=>{i.d(h,{c:()=>o});var d=i(1528),c=i(4829),l=i(56);const s=t=>{if(void 0===c.d||t===l.a.None||void 0===t)return null;const n=c.d.querySelector("ion-app");return null!=n?n:c.d.body},e=t=>{const n=s(t);return null===n?0:n.clientHeight},o=function(){var t=(0,d.c)(function*(n){let _,u,r,a;const p=function(){var g=(0,d.c)(function*(){const m=yield l.K.getResizeMode(),O=void 0===m?void 0:m.mode;_=()=>{void 0===a&&(a=e(O)),r=!0,E(r,O)},u=()=>{r=!1,E(r,O)},null==c.w||c.w.addEventListener("keyboardWillShow",_),null==c.w||c.w.addEventListener("keyboardWillHide",u)});return function(){return g.apply(this,arguments)}}(),E=(g,m)=>{n&&n(g,w(m))},w=g=>{if(0===a||a===e(g))return;const m=s(g);return null!==m?new Promise(O=>{const f=new ResizeObserver(()=>{m.clientHeight===a&&(f.disconnect(),O())});f.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",_),null==c.w||c.w.removeEventListener("keyboardWillHide",u),_=u=void 0},isKeyboardVisible:()=>r}});return function(_){return t.apply(this,arguments)}}()},3464:(y,h,i)=>{i.d(h,{c:()=>c});var d=i(1528);const c=()=>{let l;return{lock:function(){var e=(0,d.c)(function*(){const o=l;let t;return l=new Promise(n=>t=n),void 0!==o&&(yield o),t});return function(){return e.apply(this,arguments)}}()}}},8092:(y,h,i)=>{i.d(h,{c:()=>l});var d=i(4829),c=i(1448);const l=(s,e,o)=>{let t;const n=()=>!(void 0===e()||void 0!==s.label||null===o()),u=()=>{const a=e();if(void 0===a)return;if(!n())return void a.style.removeProperty("width");const p=o().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==d.w&&"IntersectionObserver"in d.w){if(void 0!==t)return;const E=t=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(u(),E.disconnect(),t=void 0)},{threshold:.01,root:s});E.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{n()&&(0,c.r)(()=>{u()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},9096:(y,h,i)=>{i.d(h,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(l,s,e)=>{const o=l*s/e-l+"ms",t=2*Math.PI*s/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":o}}}},circles:{dur:1e3,circles:8,fn:(l,s,e)=>{const o=s/e,t=l*o-l+"ms",n=2*Math.PI*o;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,s)=>({r:6,style:{left:32-32*s+"%","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,s,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*s+(s<e/2?180:-180)}deg)`,"animation-delay":l*s/e-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,s,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*s+(s<e/2?180:-180)}deg)`,"animation-delay":l*s/e-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,s,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":l*s/e-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,s,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":l*s/e-l+"ms"}})}}},808:(y,h,i)=>{i.r(h),i.d(h,{createSwipeBackGesture:()=>e});var d=i(1448),c=i(7716),l=i(2528);i(6560);const e=(o,t,n,_,u)=>{const r=o.ownerDocument.defaultView;let a=(0,c.i)(o);const E=m=>a?-m.deltaX:m.deltaX;return(0,l.createGesture)({el:o,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,c.i)(o),(m=>{const{startX:C}=m;return a?C>=r.innerWidth-50:C<=50})(m)&&t()),onStart:n,onMove:m=>{const C=E(m)/r.innerWidth;_(C)},onEnd:m=>{const O=E(m),C=r.innerWidth,f=O/C,D=(m=>a?-m.velocityX:m.velocityX)(m),L=D>=0&&(D>.2||O>C/2),b=(L?1-f:f)*C;let T=0;if(b>5){const A=b/Math.abs(D);T=Math.min(A,540)}u(L,f<=0?.01:(0,d.l)(0,f,.9999),T)}})}},7128:(y,h,i)=>{i.d(h,{w:()=>d});const d=(s,e,o)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{o(c(n,e))});return t.observe(s,{childList:!0,subtree:!0}),t},c=(s,e)=>{let o;return s.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)o=l(t.addedNodes[n],e)||o}),o},l=(s,e)=>{if(1!==s.nodeType)return;const o=s;return(o.tagName===e.toUpperCase()?[o]:Array.from(o.querySelectorAll(e))).find(n=>n.value===o.value)}},7604:(y,h,i)=>{i.d(h,{z:()=>s});var d=i(1368),c=i(2112),l=i(4496);let s=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275mod=l.a4G({type:e}),e.\u0275inj=l.s3X({imports:[d.MD,c.wZ]}),o})()},6032:(y,h,i)=>{i.d(h,{k:()=>l});var d=i(4496),c=i(2112);let l=(()=>{var s;class e{constructor(){this.titulo=""}ngOnInit(){}}return(s=e).\u0275fac=function(t){return new(t||s)},s.\u0275cmp=d.In1({type:s,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start"],["text","Regresar","defaultHref","/"],[1,"ion-text-capitalize"]],template:function(t,n){1&t&&(d.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),d.wR5(3,"ion-back-button",2),d.C$Y(),d.I0R(4,"ion-title",3),d.OEk(5),d.C$Y()()()),2&t&&(d.E7m("translucent",!0),d.yG2(5),d.cNF(n.titulo))},dependencies:[c.GS,c.wB,c.tM,c.Md,c.Im]}),e})()},8644:(y,h,i)=>{i.d(h,{A:()=>l});var d=i(4496),c=i(7048);let l=(()=>{var s;class e{constructor(t){this.http=t}getUsuarios(){return console.log(this.http.get("https://jsonplaceholder.typicode.com/users")),this.http.get("https://jsonplaceholder.typicode.com/users")}getAlbums(){return this.http.get("https://jsonplaceholder.typicode.com/albums")}}return(s=e).\u0275fac=function(t){return new(t||s)(d.CoB(c.KK))},s.\u0275prov=d.wxM({token:s,factory:s.\u0275fac,providedIn:"root"}),e})()}}]);