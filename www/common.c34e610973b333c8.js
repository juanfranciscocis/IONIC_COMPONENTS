"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9312],{436:(_,w,n)=>{n.d(w,{c:()=>c});var h=n(2992),u=n(5988),a=n(2528);const c=(e,s)=>{let t,o;const m=(i,E,f)=>{if(typeof document>"u")return;const d=document.elementFromPoint(i,E);d&&s(d)?d!==t&&(r(),g(d,f)):r()},g=(i,E)=>{t=i,o||(o=t);const f=t;(0,h.w)(()=>f.classList.add("ion-activated")),E()},r=(i=!1)=>{if(!t)return;const E=t;(0,h.w)(()=>E.classList.remove("ion-activated")),i&&o!==t&&t.click(),t=void 0};return(0,a.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:i=>m(i.currentX,i.currentY,u.a),onMove:i=>m(i.currentX,i.currentY,u.b),onEnd:()=>{r(!0),(0,u.h)(),o=void 0}})}},1008:(_,w,n)=>{n.d(w,{g:()=>u});var h=n(4829);const u=()=>{if(void 0!==h.w)return h.w.Capacitor}},5984:(_,w,n)=>{n.d(w,{c:()=>h,i:()=>u});const h=(a,c,e)=>"function"==typeof e?e(a,c):"string"==typeof e?a[e]===c[e]:Array.isArray(c)?c.includes(a):a===c,u=(a,c,e)=>void 0!==a&&(Array.isArray(a)?a.some(s=>h(s,c,e)):h(a,c,e))},6944:(_,w,n)=>{n.d(w,{g:()=>h});const h=(s,t,o,m,g)=>a(s[1],t[1],o[1],m[1],g).map(r=>u(s[0],t[0],o[0],m[0],r)),u=(s,t,o,m,g)=>g*(3*t*Math.pow(g-1,2)+g*(-3*o*g+3*o+m*g))-s*Math.pow(g-1,3),a=(s,t,o,m,g)=>e((m-=g)-3*(o-=g)+3*(t-=g)-(s-=g),3*o-6*t+3*s,3*t-3*s,s).filter(i=>i>=0&&i<=1),e=(s,t,o,m)=>{if(0===s)return((s,t,o)=>{const m=t*t-4*s*o;return m<0?[]:[(-t+Math.sqrt(m))/(2*s),(-t-Math.sqrt(m))/(2*s)]})(t,o,m);const g=(3*(o/=s)-(t/=s)*t)/3,r=(2*t*t*t-9*t*o+27*(m/=s))/27;if(0===g)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-g),-Math.sqrt(-g)];const i=Math.pow(r/2,2)+Math.pow(g/3,3);if(0===i)return[Math.pow(r/2,.5)-t/3];if(i>0)return[Math.pow(-r/2+Math.sqrt(i),1/3)-Math.pow(r/2+Math.sqrt(i),1/3)-t/3];const E=Math.sqrt(Math.pow(-g/3,3)),f=Math.acos(-r/(2*Math.sqrt(Math.pow(-g/3,3)))),d=2*Math.pow(E,1/3);return[d*Math.cos(f/3)-t/3,d*Math.cos((f+2*Math.PI)/3)-t/3,d*Math.cos((f+4*Math.PI)/3)-t/3]}},7716:(_,w,n)=>{n.d(w,{i:()=>h});const h=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},704:(_,w,n)=>{n.r(w),n.d(w,{startFocusVisible:()=>c});const h="ion-focused",a=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=e=>{let s=[],t=!0;const o=e?e.shadowRoot:document,m=e||document.body,g=M=>{s.forEach(l=>l.classList.remove(h)),M.forEach(l=>l.classList.add(h)),s=M},r=()=>{t=!1,g([])},i=M=>{t=a.includes(M.key),t||g([])},E=M=>{if(t&&void 0!==M.composedPath){const l=M.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));g(l)}},f=()=>{o.activeElement===m&&g([])};return o.addEventListener("keydown",i),o.addEventListener("focusin",E),o.addEventListener("focusout",f),o.addEventListener("touchstart",r,{passive:!0}),o.addEventListener("mousedown",r),{destroy:()=>{o.removeEventListener("keydown",i),o.removeEventListener("focusin",E),o.removeEventListener("focusout",f),o.removeEventListener("touchstart",r),o.removeEventListener("mousedown",r)},setFocus:g}}},2693:(_,w,n)=>{n.d(w,{c:()=>u});var h=n(1448);const u=s=>{const t=s;let o;return{hasLegacyControl:()=>{if(void 0===o){const g=void 0!==t.label||a(t),r=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,i=(0,h.h)(t);o=!0===t.legacy||!g&&!r&&null!==i}return o}}},a=s=>!!(c.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||e.includes(s.tagName)&&""!==s.textContent),c=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],e=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},5988:(_,w,n)=>{n.d(w,{I:()=>u,a:()=>t,b:()=>o,c:()=>s,d:()=>g,h:()=>m});var h=n(1008),u=function(r){return r.Heavy="HEAVY",r.Medium="MEDIUM",r.Light="LIGHT",r}(u||{});const c={getEngine(){const r=window.TapticEngine;if(r)return r;const i=(0,h.g)();return null!=i&&i.isPluginAvailable("Haptics")?i.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const i=(0,h.g)();return"web"!==(null==i?void 0:i.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,h.g)(),impact(r){const i=this.getEngine();if(!i)return;const E=this.isCapacitor()?r.style:r.style.toLowerCase();i.impact({style:E})},notification(r){const i=this.getEngine();if(!i)return;const E=this.isCapacitor()?r.type:r.type.toLowerCase();i.notification({type:E})},selection(){const r=this.isCapacitor()?u.Light:"light";this.impact({style:r})},selectionStart(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionStart():r.gestureSelectionStart())},selectionChanged(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionChanged():r.gestureSelectionChanged())},selectionEnd(){const r=this.getEngine();r&&(this.isCapacitor()?r.selectionEnd():r.gestureSelectionEnd())}},e=()=>c.available(),s=()=>{e()&&c.selection()},t=()=>{e()&&c.selectionStart()},o=()=>{e()&&c.selectionChanged()},m=()=>{e()&&c.selectionEnd()},g=r=>{e()&&c.impact(r)}},6016:(_,w,n)=>{n.d(w,{I:()=>s,a:()=>g,b:()=>e,c:()=>E,d:()=>d,f:()=>r,g:()=>m,i:()=>o,p:()=>f,r:()=>M,s:()=>i});var h=n(1528),u=n(1448),a=n(2032);const e="ion-content",s=".ion-content-scroll-host",t=`${e}, ${s}`,o=l=>"ION-CONTENT"===l.tagName,m=function(){var l=(0,h.c)(function*(v){return o(v)?(yield new Promise(y=>(0,u.c)(v,y)),v.getScrollElement()):v});return function(y){return l.apply(this,arguments)}}(),g=l=>l.querySelector(s)||l.querySelector(t),r=l=>l.closest(t),i=(l,v)=>o(l)?l.scrollToTop(v):Promise.resolve(l.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),E=(l,v,y,O)=>o(l)?l.scrollByPoint(v,y,O):Promise.resolve(l.scrollBy({top:y,left:v,behavior:O>0?"smooth":"auto"})),f=l=>(0,a.b)(l,e),d=l=>{if(o(l)){const y=l.scrollY;return l.scrollY=!1,y}return l.style.setProperty("overflow","hidden"),!0},M=(l,v)=>{o(l)?l.scrollY=v:l.style.removeProperty("overflow")}},4812:(_,w,n)=>{n.d(w,{a:()=>h,b:()=>E,c:()=>t,d:()=>f,e:()=>C,f:()=>s,g:()=>d,h:()=>a,i:()=>u,j:()=>O,k:()=>P,l:()=>o,m:()=>r,n:()=>M,o:()=>g,p:()=>e,q:()=>c,r:()=>y,s:()=>p,t:()=>i,u:()=>l,v:()=>v,w:()=>m});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2400:(_,w,n)=>{n.d(w,{c:()=>c,g:()=>e});var h=n(4829),u=n(1448),a=n(2032);const c=(t,o,m)=>{let g,r;if(void 0!==h.w&&"MutationObserver"in h.w){const d=Array.isArray(o)?o:[o];g=new MutationObserver(M=>{for(const l of M)for(const v of l.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&d.includes(v.slot))return m(),void(0,u.r)(()=>i(v))}),g.observe(t,{childList:!0})}const i=d=>{var M;r&&(r.disconnect(),r=void 0),r=new MutationObserver(l=>{m();for(const v of l)for(const y of v.removedNodes)y.nodeType===Node.ELEMENT_NODE&&y.slot===o&&f()}),r.observe(null!==(M=d.parentElement)&&void 0!==M?M:d,{subtree:!0,childList:!0})},f=()=>{r&&(r.disconnect(),r=void 0)};return{destroy:()=>{g&&(g.disconnect(),g=void 0),f()}}},e=(t,o,m)=>{const g=null==t?0:t.toString().length,r=s(g,o);if(void 0===m)return r;try{return m(g,o)}catch(i){return(0,a.a)("Exception in provided `counterFormatter`.",i),r}},s=(t,o)=>`${t} / ${o}`},8888:(_,w,n)=>{n.r(w),n.d(w,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>P,keyboardDidClose:()=>l,keyboardDidOpen:()=>d,keyboardDidResize:()=>M,resetKeyboardAssist:()=>g,setKeyboardClose:()=>f,setKeyboardOpen:()=>E,startKeyboardAssist:()=>r,trackViewportChanges:()=>O});var h=n(56);n(1008),n(4829);const c="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},o={},m=!1;const g=()=>{t={},o={},m=!1},r=p=>{if(h.K.getEngine())i(p);else{if(!p.visualViewport)return;o=P(p.visualViewport),p.visualViewport.onresize=()=>{O(p),d()||M(p)?E(p):l(p)&&f(p)}}},i=p=>{p.addEventListener("keyboardDidShow",C=>E(p,C)),p.addEventListener("keyboardDidHide",()=>f(p))},E=(p,C)=>{v(p,C),m=!0},f=p=>{y(p),m=!1},d=()=>!m&&t.width===o.width&&(t.height-o.height)*o.scale>150,M=p=>m&&!l(p),l=p=>m&&o.height===p.innerHeight,v=(p,C)=>{const b=new CustomEvent(c,{detail:{keyboardHeight:C?C.keyboardHeight:p.innerHeight-o.height}});p.dispatchEvent(b)},y=p=>{const C=new CustomEvent(e);p.dispatchEvent(C)},O=p=>{t=Object.assign({},o),o=P(p.visualViewport)},P=p=>({width:Math.round(p.width),height:Math.round(p.height),offsetTop:p.offsetTop,offsetLeft:p.offsetLeft,pageTop:p.pageTop,pageLeft:p.pageLeft,scale:p.scale})},56:(_,w,n)=>{n.d(w,{K:()=>c,a:()=>a});var h=n(1008),u=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(u||{}),a=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(a||{});const c={getEngine(){const e=(0,h.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(s=>{if(s.code!==u.Unimplemented)throw s}):Promise.resolve(void 0)}}},4908:(_,w,n)=>{n.d(w,{c:()=>s});var h=n(1528),u=n(4829),a=n(56);const c=t=>{if(void 0===u.d||t===a.a.None||void 0===t)return null;const o=u.d.querySelector("ion-app");return null!=o?o:u.d.body},e=t=>{const o=c(t);return null===o?0:o.clientHeight},s=function(){var t=(0,h.c)(function*(o){let m,g,r,i;const E=function(){var v=(0,h.c)(function*(){const y=yield a.K.getResizeMode(),O=void 0===y?void 0:y.mode;m=()=>{void 0===i&&(i=e(O)),r=!0,f(r,O)},g=()=>{r=!1,f(r,O)},null==u.w||u.w.addEventListener("keyboardWillShow",m),null==u.w||u.w.addEventListener("keyboardWillHide",g)});return function(){return v.apply(this,arguments)}}(),f=(v,y)=>{o&&o(v,d(y))},d=v=>{if(0===i||i===e(v))return;const y=c(v);return null!==y?new Promise(O=>{const p=new ResizeObserver(()=>{y.clientHeight===i&&(p.disconnect(),O())});p.observe(y)}):void 0};return yield E(),{init:E,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",m),null==u.w||u.w.removeEventListener("keyboardWillHide",g),m=g=void 0},isKeyboardVisible:()=>r}});return function(m){return t.apply(this,arguments)}}()},3464:(_,w,n)=>{n.d(w,{c:()=>u});var h=n(1528);const u=()=>{let a;return{lock:function(){var e=(0,h.c)(function*(){const s=a;let t;return a=new Promise(o=>t=o),void 0!==s&&(yield s),t});return function(){return e.apply(this,arguments)}}()}}},8092:(_,w,n)=>{n.d(w,{c:()=>a});var h=n(4829),u=n(1448);const a=(c,e,s)=>{let t;const o=()=>!(void 0===e()||void 0!==c.label||null===s()),g=()=>{const i=e();if(void 0===i)return;if(!o())return void i.style.removeProperty("width");const E=s().scrollWidth;if(0===E&&null===i.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const f=t=new IntersectionObserver(d=>{1===d[0].intersectionRatio&&(g(),f.disconnect(),t=void 0)},{threshold:.01,root:c});f.observe(i)}else i.style.setProperty("width",.75*E+"px")};return{calculateNotchWidth:()=>{o()&&(0,u.r)(()=>{g()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},9096:(_,w,n)=>{n.d(w,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(a,c,e)=>{const s=a*c/e-a+"ms",t=2*Math.PI*c/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(a,c,e)=>{const s=c/e,t=a*s-a+"ms",o=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(a,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(a,c,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*c+(c<e/2?180:-180)}deg)`,"animation-delay":a*c/e-a+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(a,c,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*c+(c<e/2?180:-180)}deg)`,"animation-delay":a*c/e-a+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(a,c,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/e-a+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(a,c,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":a*c/e-a+"ms"}})}}},808:(_,w,n)=>{n.r(w),n.d(w,{createSwipeBackGesture:()=>e});var h=n(1448),u=n(7716),a=n(2528);n(6560);const e=(s,t,o,m,g)=>{const r=s.ownerDocument.defaultView;let i=(0,u.i)(s);const f=y=>i?-y.deltaX:y.deltaX;return(0,a.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:y=>(i=(0,u.i)(s),(y=>{const{startX:P}=y;return i?P>=r.innerWidth-50:P<=50})(y)&&t()),onStart:o,onMove:y=>{const P=f(y)/r.innerWidth;m(P)},onEnd:y=>{const O=f(y),P=r.innerWidth,p=O/P,C=(y=>i?-y.velocityX:y.velocityX)(y),b=C>=0&&(C>.2||O>P/2),N=(b?1-p:p)*P;let L=0;if(N>5){const T=N/Math.abs(C);L=Math.min(T,540)}g(b,p<=0?.01:(0,h.l)(0,p,.9999),L)}})}},7128:(_,w,n)=>{n.d(w,{w:()=>h});const h=(c,e,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{s(u(o,e))});return t.observe(c,{childList:!0,subtree:!0}),t},u=(c,e)=>{let s;return c.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)s=a(t.addedNodes[o],e)||s}),s},a=(c,e)=>{if(1!==c.nodeType)return;const s=c;return(s.tagName===e.toUpperCase()?[s]:Array.from(s.querySelectorAll(e))).find(o=>o.value===s.value)}},7604:(_,w,n)=>{n.d(w,{z:()=>c});var h=n(1368),u=n(2112),a=n(4496);let c=(()=>{var e;class s{}return(e=s).\u0275fac=function(o){return new(o||e)},e.\u0275mod=a.a4G({type:e}),e.\u0275inj=a.s3X({imports:[h.MD,u.wZ]}),s})()},9824:(_,w,n)=>{n.r(w),n.d(w,{Newstab1PageModule:()=>E});var h=n(1368),u=n(4716),a=n(2112),c=n(422),e=n(4496),s=n(664),t=n(6032),o=n(6844);const g=[{path:"",component:(()=>{var f;class d{constructor(l){this.service=l,this.news=[]}ngOnInit(){this.service.getNews().subscribe(l=>{console.log(l),this.news.push(...l.articles)})}}return(f=d).\u0275fac=function(l){return new(l||f)(e.GI1(s.a))},f.\u0275cmp=e.In1({type:f,selectors:[["app-newstab1"]],decls:7,vars:2,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"news"]],template:function(l,v){1&l&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title",2),e.OEk(5,"Apple News"),e.C$Y()()(),e.wR5(6,"app-news",3),e.C$Y()),2&l&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(5),e.E7m("news",v.news))},dependencies:[a._i,a.wB,a.tM,a.Md,t.k,o.i],styles:[".news-image[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}"]}),d})()}];let r=(()=>{var f;class d{}return(f=d).\u0275fac=function(l){return new(l||f)},f.\u0275mod=e.a4G({type:f}),f.\u0275inj=e.s3X({imports:[c.qQ.forChild(g),c.qQ]}),d})();var i=n(7604);let E=(()=>{var f;class d{}return(f=d).\u0275fac=function(l){return new(l||f)},f.\u0275mod=e.a4G({type:f}),f.\u0275inj=e.s3X({imports:[h.MD,u.y,a.wZ,r,i.z]}),d})()},8320:(_,w,n)=>{n.r(w),n.d(w,{Newstab2PageModule:()=>f});var h=n(1368),u=n(4716),a=n(2112),c=n(422),e=n(4496),s=n(664),t=n(6032),o=n(6844);function m(d,M){if(1&d&&(e.I0R(0,"ion-segment-button",6),e.wR5(1,"ion-icon",7),e.I0R(2,"ion-label",8),e.OEk(3),e.C$Y()()),2&d){const l=M.$implicit;e.E7m("value",l.name),e.yG2(),e.E7m("name",l.icon)("color",l.color),e.yG2(),e.E7m("color",l.color),e.yG2(),e.cNF(l.name)}}const r=[{path:"",component:(()=>{var d;class M{segmentChanged(v){this.news=[],this.service.getByCategory(v.detail.value).subscribe(y=>{this.news.push(...y.articles),console.log(this.news)})}constructor(v){this.service=v,this.categories=[{name:"business",icon:"business-outline",color:"primary"},{name:"entertainment",icon:"film-outline",color:"secondary"},{name:"general",icon:"newspaper-outline",color:"tertiary"},{name:"health",icon:"medkit-outline",color:"success"},{name:"science",icon:"flask-outline",color:"warning"},{name:"sports",icon:"football-outline",color:"danger"},{name:"technology",icon:"hardware-chip-outline",color:"dark"}],this.news=[],this.segmentChanged({detail:{value:"business"}})}ngOnInit(){}}return(d=M).\u0275fac=function(v){return new(v||d)(e.GI1(s.a))},d.\u0275cmp=e.In1({type:d,selectors:[["app-newstab2"]],decls:9,vars:3,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],["value","business","scrollable","true","color","primary","mode","md",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"news"],[3,"value"],[3,"name","color"],[3,"color"]],template:function(v,y){1&v&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title",2),e.OEk(5,"Categories"),e.C$Y()()(),e.I0R(6,"ion-segment",3),e.qCj("ionChange",function(P){return y.segmentChanged(P)}),e.yuY(7,m,4,5,"ion-segment-button",4),e.C$Y(),e.wR5(8,"app-news",5),e.C$Y()),2&v&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(6),e.E7m("ngForOf",y.categories),e.yG2(),e.E7m("news",y.news))},dependencies:[h.ay,a._i,a.wB,a.Ko,a.QR,a._4,a.Wl,a.tM,a.Md,a.IT,t.k,o.i],styles:["[_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;overflow:hidden}"]}),M})()}];let i=(()=>{var d;class M{}return(d=M).\u0275fac=function(v){return new(v||d)},d.\u0275mod=e.a4G({type:d}),d.\u0275inj=e.s3X({imports:[c.qQ.forChild(r),c.qQ]}),M})();var E=n(7604);let f=(()=>{var d;class M{}return(d=M).\u0275fac=function(v){return new(v||d)},d.\u0275mod=e.a4G({type:d}),d.\u0275inj=e.s3X({imports:[h.MD,u.y,a.wZ,i,E.z]}),M})()},151:(_,w,n)=>{n.r(w),n.d(w,{Newstab3PageModule:()=>r});var h=n(1368),u=n(4716),a=n(2112),c=n(422),e=n(4496),s=n(6032);const o=[{path:"",component:(()=>{var i;class E{constructor(){}ngOnInit(){}}return(i=E).\u0275fac=function(d){return new(d||i)},i.\u0275cmp=e.In1({type:i,selectors:[["app-newstab3"]],decls:6,vars:1,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"]],template:function(d,M){1&d&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title",2),e.OEk(5,"newstab3"),e.C$Y()()()()),2&d&&(e.yG2(),e.E7m("fullscreen",!0))},dependencies:[a._i,a.wB,a.tM,a.Md,s.k]}),E})()}];let m=(()=>{var i;class E{}return(i=E).\u0275fac=function(d){return new(d||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[c.qQ.forChild(o),c.qQ]}),E})();var g=n(7604);let r=(()=>{var i;class E{}return(i=E).\u0275fac=function(d){return new(d||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[h.MD,u.y,a.wZ,m,g.z]}),E})()}}]);