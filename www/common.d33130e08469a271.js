"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9312],{436:(M,w,o)=>{o.d(w,{c:()=>l});var n=o(2992),u=o(5988),c=o(2528);const l=(e,a)=>{let t,s;const h=(r,v,m)=>{if(typeof document>"u")return;const f=document.elementFromPoint(r,v);f&&a(f)?f!==t&&(i(),d(f,m)):i()},d=(r,v)=>{t=r,s||(s=t);const m=t;(0,n.w)(()=>m.classList.add("ion-activated")),v()},i=(r=!1)=>{if(!t)return;const v=t;(0,n.w)(()=>v.classList.remove("ion-activated")),r&&s!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>h(r.currentX,r.currentY,u.a),onMove:r=>h(r.currentX,r.currentY,u.b),onEnd:()=>{i(!0),(0,u.h)(),s=void 0}})}},1008:(M,w,o)=>{o.d(w,{g:()=>u});var n=o(4829);const u=()=>{if(void 0!==n.w)return n.w.Capacitor}},5984:(M,w,o)=>{o.d(w,{c:()=>n,i:()=>u});const n=(c,l,e)=>"function"==typeof e?e(c,l):"string"==typeof e?c[e]===l[e]:Array.isArray(l)?l.includes(c):c===l,u=(c,l,e)=>void 0!==c&&(Array.isArray(c)?c.some(a=>n(a,l,e)):n(c,l,e))},6944:(M,w,o)=>{o.d(w,{g:()=>n});const n=(a,t,s,h,d)=>c(a[1],t[1],s[1],h[1],d).map(i=>u(a[0],t[0],s[0],h[0],i)),u=(a,t,s,h,d)=>d*(3*t*Math.pow(d-1,2)+d*(-3*s*d+3*s+h*d))-a*Math.pow(d-1,3),c=(a,t,s,h,d)=>e((h-=d)-3*(s-=d)+3*(t-=d)-(a-=d),3*s-6*t+3*a,3*t-3*a,a).filter(r=>r>=0&&r<=1),e=(a,t,s,h)=>{if(0===a)return((a,t,s)=>{const h=t*t-4*a*s;return h<0?[]:[(-t+Math.sqrt(h))/(2*a),(-t-Math.sqrt(h))/(2*a)]})(t,s,h);const d=(3*(s/=a)-(t/=a)*t)/3,i=(2*t*t*t-9*t*s+27*(h/=a))/27;if(0===d)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-d),-Math.sqrt(-d)];const r=Math.pow(i/2,2)+Math.pow(d/3,3);if(0===r)return[Math.pow(i/2,.5)-t/3];if(r>0)return[Math.pow(-i/2+Math.sqrt(r),1/3)-Math.pow(i/2+Math.sqrt(r),1/3)-t/3];const v=Math.sqrt(Math.pow(-d/3,3)),m=Math.acos(-i/(2*Math.sqrt(Math.pow(-d/3,3)))),f=2*Math.pow(v,1/3);return[f*Math.cos(m/3)-t/3,f*Math.cos((m+2*Math.PI)/3)-t/3,f*Math.cos((m+4*Math.PI)/3)-t/3]}},7716:(M,w,o)=>{o.d(w,{i:()=>n});const n=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},704:(M,w,o)=>{o.r(w),o.d(w,{startFocusVisible:()=>l});const n="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],l=e=>{let a=[],t=!0;const s=e?e.shadowRoot:document,h=e||document.body,d=y=>{a.forEach(g=>g.classList.remove(n)),y.forEach(g=>g.classList.add(n)),a=y},i=()=>{t=!1,d([])},r=y=>{t=c.includes(y.key),t||d([])},v=y=>{if(t&&void 0!==y.composedPath){const g=y.composedPath().filter(p=>!!p.classList&&p.classList.contains("ion-focusable"));d(g)}},m=()=>{s.activeElement===h&&d([])};return s.addEventListener("keydown",r),s.addEventListener("focusin",v),s.addEventListener("focusout",m),s.addEventListener("touchstart",i,{passive:!0}),s.addEventListener("mousedown",i),{destroy:()=>{s.removeEventListener("keydown",r),s.removeEventListener("focusin",v),s.removeEventListener("focusout",m),s.removeEventListener("touchstart",i),s.removeEventListener("mousedown",i)},setFocus:d}}},2693:(M,w,o)=>{o.d(w,{c:()=>u});var n=o(1448);const u=a=>{const t=a;let s;return{hasLegacyControl:()=>{if(void 0===s){const d=void 0!==t.label||c(t),i=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,r=(0,n.h)(t);s=!0===t.legacy||!d&&!i&&null!==r}return s}}},c=a=>!!(l.includes(a.tagName)&&null!==a.querySelector('[slot="label"]')||e.includes(a.tagName)&&""!==a.textContent),l=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],e=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},5988:(M,w,o)=>{o.d(w,{I:()=>u,a:()=>t,b:()=>s,c:()=>a,d:()=>d,h:()=>h});var n=o(1008),u=function(i){return i.Heavy="HEAVY",i.Medium="MEDIUM",i.Light="LIGHT",i}(u||{});const l={getEngine(){const i=window.TapticEngine;if(i)return i;const r=(0,n.g)();return null!=r&&r.isPluginAvailable("Haptics")?r.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const r=(0,n.g)();return"web"!==(null==r?void 0:r.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,n.g)(),impact(i){const r=this.getEngine();if(!r)return;const v=this.isCapacitor()?i.style:i.style.toLowerCase();r.impact({style:v})},notification(i){const r=this.getEngine();if(!r)return;const v=this.isCapacitor()?i.type:i.type.toLowerCase();r.notification({type:v})},selection(){const i=this.isCapacitor()?u.Light:"light";this.impact({style:i})},selectionStart(){const i=this.getEngine();i&&(this.isCapacitor()?i.selectionStart():i.gestureSelectionStart())},selectionChanged(){const i=this.getEngine();i&&(this.isCapacitor()?i.selectionChanged():i.gestureSelectionChanged())},selectionEnd(){const i=this.getEngine();i&&(this.isCapacitor()?i.selectionEnd():i.gestureSelectionEnd())}},e=()=>l.available(),a=()=>{e()&&l.selection()},t=()=>{e()&&l.selectionStart()},s=()=>{e()&&l.selectionChanged()},h=()=>{e()&&l.selectionEnd()},d=i=>{e()&&l.impact(i)}},6016:(M,w,o)=>{o.d(w,{I:()=>a,a:()=>d,b:()=>e,c:()=>v,d:()=>f,f:()=>i,g:()=>h,i:()=>s,p:()=>m,r:()=>y,s:()=>r});var n=o(1528),u=o(1448),c=o(2032);const e="ion-content",a=".ion-content-scroll-host",t=`${e}, ${a}`,s=g=>"ION-CONTENT"===g.tagName,h=function(){var g=(0,n.c)(function*(p){return s(p)?(yield new Promise(E=>(0,u.c)(p,E)),p.getScrollElement()):p});return function(E){return g.apply(this,arguments)}}(),d=g=>g.querySelector(a)||g.querySelector(t),i=g=>g.closest(t),r=(g,p)=>s(g)?g.scrollToTop(p):Promise.resolve(g.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),v=(g,p,E,C)=>s(g)?g.scrollByPoint(p,E,C):Promise.resolve(g.scrollBy({top:E,left:p,behavior:C>0?"smooth":"auto"})),m=g=>(0,c.b)(g,e),f=g=>{if(s(g)){const E=g.scrollY;return g.scrollY=!1,E}return g.style.setProperty("overflow","hidden"),!0},y=(g,p)=>{s(g)?g.scrollY=p:g.style.removeProperty("overflow")}},4812:(M,w,o)=>{o.d(w,{a:()=>n,b:()=>v,c:()=>t,d:()=>m,e:()=>P,f:()=>a,g:()=>f,h:()=>c,i:()=>u,j:()=>C,k:()=>O,l:()=>s,m:()=>i,n:()=>y,o:()=>d,p:()=>e,q:()=>l,r:()=>E,s:()=>_,t:()=>r,u:()=>g,v:()=>p,w:()=>h});const n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2400:(M,w,o)=>{o.d(w,{c:()=>l,g:()=>e});var n=o(4829),u=o(1448),c=o(2032);const l=(t,s,h)=>{let d,i;if(void 0!==n.w&&"MutationObserver"in n.w){const f=Array.isArray(s)?s:[s];d=new MutationObserver(y=>{for(const g of y)for(const p of g.addedNodes)if(p.nodeType===Node.ELEMENT_NODE&&f.includes(p.slot))return h(),void(0,u.r)(()=>r(p))}),d.observe(t,{childList:!0})}const r=f=>{var y;i&&(i.disconnect(),i=void 0),i=new MutationObserver(g=>{h();for(const p of g)for(const E of p.removedNodes)E.nodeType===Node.ELEMENT_NODE&&E.slot===s&&m()}),i.observe(null!==(y=f.parentElement)&&void 0!==y?y:f,{subtree:!0,childList:!0})},m=()=>{i&&(i.disconnect(),i=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),m()}}},e=(t,s,h)=>{const d=null==t?0:t.toString().length,i=a(d,s);if(void 0===h)return i;try{return h(d,s)}catch(r){return(0,c.a)("Exception in provided `counterFormatter`.",r),i}},a=(t,s)=>`${t} / ${s}`},8888:(M,w,o)=>{o.r(w),o.d(w,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>O,keyboardDidClose:()=>g,keyboardDidOpen:()=>f,keyboardDidResize:()=>y,resetKeyboardAssist:()=>d,setKeyboardClose:()=>m,setKeyboardOpen:()=>v,startKeyboardAssist:()=>i,trackViewportChanges:()=>C});var n=o(56);o(1008),o(4829);const l="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},s={},h=!1;const d=()=>{t={},s={},h=!1},i=_=>{if(n.K.getEngine())r(_);else{if(!_.visualViewport)return;s=O(_.visualViewport),_.visualViewport.onresize=()=>{C(_),f()||y(_)?v(_):g(_)&&m(_)}}},r=_=>{_.addEventListener("keyboardDidShow",P=>v(_,P)),_.addEventListener("keyboardDidHide",()=>m(_))},v=(_,P)=>{p(_,P),h=!0},m=_=>{E(_),h=!1},f=()=>!h&&t.width===s.width&&(t.height-s.height)*s.scale>150,y=_=>h&&!g(_),g=_=>h&&s.height===_.innerHeight,p=(_,P)=>{const b=new CustomEvent(l,{detail:{keyboardHeight:P?P.keyboardHeight:_.innerHeight-s.height}});_.dispatchEvent(b)},E=_=>{const P=new CustomEvent(e);_.dispatchEvent(P)},C=_=>{t=Object.assign({},s),s=O(_.visualViewport)},O=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},56:(M,w,o)=>{o.d(w,{K:()=>l,a:()=>c});var n=o(1008),u=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(u||{}),c=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(c||{});const l={getEngine(){const e=(0,n.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(a=>{if(a.code!==u.Unimplemented)throw a}):Promise.resolve(void 0)}}},4908:(M,w,o)=>{o.d(w,{c:()=>a});var n=o(1528),u=o(4829),c=o(56);const l=t=>{if(void 0===u.d||t===c.a.None||void 0===t)return null;const s=u.d.querySelector("ion-app");return null!=s?s:u.d.body},e=t=>{const s=l(t);return null===s?0:s.clientHeight},a=function(){var t=(0,n.c)(function*(s){let h,d,i,r;const v=function(){var p=(0,n.c)(function*(){const E=yield c.K.getResizeMode(),C=void 0===E?void 0:E.mode;h=()=>{void 0===r&&(r=e(C)),i=!0,m(i,C)},d=()=>{i=!1,m(i,C)},null==u.w||u.w.addEventListener("keyboardWillShow",h),null==u.w||u.w.addEventListener("keyboardWillHide",d)});return function(){return p.apply(this,arguments)}}(),m=(p,E)=>{s&&s(p,f(E))},f=p=>{if(0===r||r===e(p))return;const E=l(p);return null!==E?new Promise(C=>{const _=new ResizeObserver(()=>{E.clientHeight===r&&(_.disconnect(),C())});_.observe(E)}):void 0};return yield v(),{init:v,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",h),null==u.w||u.w.removeEventListener("keyboardWillHide",d),h=d=void 0},isKeyboardVisible:()=>i}});return function(h){return t.apply(this,arguments)}}()},3464:(M,w,o)=>{o.d(w,{c:()=>u});var n=o(1528);const u=()=>{let c;return{lock:function(){var e=(0,n.c)(function*(){const a=c;let t;return c=new Promise(s=>t=s),void 0!==a&&(yield a),t});return function(){return e.apply(this,arguments)}}()}}},8092:(M,w,o)=>{o.d(w,{c:()=>c});var n=o(4829),u=o(1448);const c=(l,e,a)=>{let t;const s=()=>!(void 0===e()||void 0!==l.label||null===a()),d=()=>{const r=e();if(void 0===r)return;if(!s())return void r.style.removeProperty("width");const v=a().scrollWidth;if(0===v&&null===r.offsetParent&&void 0!==n.w&&"IntersectionObserver"in n.w){if(void 0!==t)return;const m=t=new IntersectionObserver(f=>{1===f[0].intersectionRatio&&(d(),m.disconnect(),t=void 0)},{threshold:.01,root:l});m.observe(r)}else r.style.setProperty("width",.75*v+"px")};return{calculateNotchWidth:()=>{s()&&(0,u.r)(()=>{d()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},9096:(M,w,o)=>{o.d(w,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(c,l,e)=>{const a=c*l/e-c+"ms",t=2*Math.PI*l/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(c,l,e)=>{const a=l/e,t=c*a-c+"ms",s=2*Math.PI*a;return{r:5,style:{top:32*Math.sin(s)+"%",left:32*Math.cos(s)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,l)=>({r:6,style:{left:32-32*l+"%","animation-delay":-110*l+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,l,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*l+(l<e/2?180:-180)}deg)`,"animation-delay":c*l/e-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,l,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*l+(l<e/2?180:-180)}deg)`,"animation-delay":c*l/e-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,l,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":c*l/e-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,l,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*l+(l<6?180:-180)}deg)`,"animation-delay":c*l/e-c+"ms"}})}}},808:(M,w,o)=>{o.r(w),o.d(w,{createSwipeBackGesture:()=>e});var n=o(1448),u=o(7716),c=o(2528);o(6560);const e=(a,t,s,h,d)=>{const i=a.ownerDocument.defaultView;let r=(0,u.i)(a);const m=E=>r?-E.deltaX:E.deltaX;return(0,c.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:E=>(r=(0,u.i)(a),(E=>{const{startX:O}=E;return r?O>=i.innerWidth-50:O<=50})(E)&&t()),onStart:s,onMove:E=>{const O=m(E)/i.innerWidth;h(O)},onEnd:E=>{const C=m(E),O=i.innerWidth,_=C/O,P=(E=>r?-E.velocityX:E.velocityX)(E),b=P>=0&&(P>.2||C>O/2),D=(b?1-_:_)*O;let I=0;if(D>5){const L=D/Math.abs(P);I=Math.min(L,540)}d(b,_<=0?.01:(0,n.l)(0,_,.9999),I)}})}},7128:(M,w,o)=>{o.d(w,{w:()=>n});const n=(l,e,a)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(s=>{a(u(s,e))});return t.observe(l,{childList:!0,subtree:!0}),t},u=(l,e)=>{let a;return l.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)a=c(t.addedNodes[s],e)||a}),a},c=(l,e)=>{if(1!==l.nodeType)return;const a=l;return(a.tagName===e.toUpperCase()?[a]:Array.from(a.querySelectorAll(e))).find(s=>s.value===a.value)}},7604:(M,w,o)=>{o.d(w,{z:()=>l});var n=o(1368),u=o(2112),c=o(4496);let l=(()=>{var e;class a{}return(e=a).\u0275fac=function(s){return new(s||e)},e.\u0275mod=c.a4G({type:e}),e.\u0275inj=c.s3X({imports:[n.MD,u.wZ]}),a})()},6032:(M,w,o)=>{o.d(w,{k:()=>c});var n=o(4496),u=o(2112);let c=(()=>{var l;class e{constructor(){this.titulo=""}ngOnInit(){}}return(l=e).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=n.In1({type:l,selectors:[["app-header"]],inputs:{titulo:"titulo"},decls:6,vars:2,consts:[[3,"translucent"],["slot","start"],["text","Regresar","defaultHref","/"],[1,"ion-text-capitalize"]],template:function(t,s){1&t&&(n.I0R(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n.wR5(3,"ion-back-button",2),n.C$Y(),n.I0R(4,"ion-title",3),n.OEk(5),n.C$Y()()()),2&t&&(n.E7m("translucent",!0),n.yG2(5),n.cNF(s.titulo))},dependencies:[u.GS,u.wB,u.tM,u.Md,u.Im]}),e})()},3480:(M,w,o)=>{o.d(w,{i:()=>h});var n=o(4496),u=o(1368),c=o(2112),l=o(6340);function e(d,i){if(1&d){const r=n.KQA();n.I0R(0,"img",4),n.qCj("click",function(){n.usT(r);const m=n.GaO();return n.CGJ(m.abrirNoticia())}),n.C$Y()}if(2&d){const r=n.GaO();n.E7m("src",r.article.urlToImage,n.K6U)}}let a=(()=>{var d;class i{constructor(v){this.inAppBrowser=v}abrirNoticia(){this.inAppBrowser.create(this.article.url)}ngOnInit(){}}return(d=i).\u0275fac=function(v){return new(v||d)(n.GI1(l.U))},d.\u0275cmp=n.In1({type:d,selectors:[["app-news-detail"]],inputs:{article:"article"},decls:8,vars:4,consts:[[1,"header-space"],[3,"click"],["class","news-image",3,"src","click",4,"ngIf"],[1,"descrip-wrap",3,"click"],[1,"news-image",3,"src","click"]],template:function(v,m){1&v&&(n.I0R(0,"ion-card-header",0)(1,"ion-card-subtitle",1),n.qCj("click",function(){return m.abrirNoticia()}),n.OEk(2),n.C$Y(),n.I0R(3,"ion-card-title",1),n.qCj("click",function(){return m.abrirNoticia()}),n.OEk(4),n.C$Y()(),n.yuY(5,e,1,1,"img",2),n.I0R(6,"ion-card-content",3),n.qCj("click",function(){return m.abrirNoticia()}),n.OEk(7),n.C$Y()),2&v&&(n.yG2(2),n.oRS("",m.article.author," "),n.yG2(2),n.cNF(m.article.title),n.yG2(),n.E7m("ngIf",m.article.urlToImage),n.yG2(2),n.oRS(" ",m.article.description,"\n"))},dependencies:[u.u_,c.Gg,c.YY,c.MN,c.I7]}),i})();function t(d,i){if(1&d&&(n.I0R(0,"ion-col",2)(1,"ion-card",3),n.wR5(2,"app-news-detail",4),n.C$Y()()),2&d){const r=i.$implicit;n.yG2(2),n.E7m("article",r)}}function s(d,i){1&d&&(n.I0R(0,"ion-row")(1,"ion-col",5),n.wR5(2,"ion-spinner"),n.C$Y()())}let h=(()=>{var d;class i{constructor(){this.news=[]}ngOnInit(){}}return(d=i).\u0275fac=function(v){return new(v||d)},d.\u0275cmp=n.In1({type:d,selectors:[["app-news"]],inputs:{news:"news"},decls:4,vars:2,consts:[["size","12","size-md","6",4,"ngFor","ngForOf"],[4,"ngIf"],["size","12","size-md","6"],[1,"news-card"],[3,"article"],[1,"ion-text-center"]],template:function(v,m){1&v&&(n.I0R(0,"ion-grid")(1,"ion-row"),n.yuY(2,t,3,1,"ion-col",0),n.C$Y(),n.yuY(3,s,3,0,"ion-row",1),n.C$Y()),2&v&&(n.yG2(2),n.E7m("ngForOf",m.news),n.yG2(),n.E7m("ngIf",0===m.news.length))},dependencies:[u.ay,u.u_,c.KC,c.Kk,c.YP,c.qo,c.YA,a]}),i})()},9824:(M,w,o)=>{o.r(w),o.d(w,{Newstab1PageModule:()=>v});var n=o(1368),u=o(4716),c=o(2112),l=o(422),e=o(4496),a=o(664),t=o(6032),s=o(3480);const d=[{path:"",component:(()=>{var m;class f{constructor(g){this.service=g,this.news=[]}ngOnInit(){this.service.getNews().subscribe(g=>{console.log(g),this.news.push(...g.articles)})}}return(m=f).\u0275fac=function(g){return new(g||m)(e.GI1(a.a))},m.\u0275cmp=e.In1({type:m,selectors:[["app-newstab1"]],decls:7,vars:2,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],[3,"news"]],template:function(g,p){1&g&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title",2),e.OEk(5,"Apple News"),e.C$Y()()(),e.wR5(6,"app-news",3),e.C$Y()),2&g&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(5),e.E7m("news",p.news))},dependencies:[c._i,c.wB,c.tM,c.Md,t.k,s.i],styles:[".news-image[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}"]}),f})()}];let i=(()=>{var m;class f{}return(m=f).\u0275fac=function(g){return new(g||m)},m.\u0275mod=e.a4G({type:m}),m.\u0275inj=e.s3X({imports:[l.qQ.forChild(d),l.qQ]}),f})();var r=o(7604);let v=(()=>{var m;class f{}return(m=f).\u0275fac=function(g){return new(g||m)},m.\u0275mod=e.a4G({type:m}),m.\u0275inj=e.s3X({imports:[n.MD,u.y,c.wZ,i,r.z]}),f})()},8320:(M,w,o)=>{o.r(w),o.d(w,{Newstab2PageModule:()=>m});var n=o(1368),u=o(4716),c=o(2112),l=o(422),e=o(4496),a=o(664),t=o(6032),s=o(3480);function h(f,y){if(1&f&&(e.I0R(0,"ion-segment-button",6),e.wR5(1,"ion-icon",7),e.I0R(2,"ion-label",8),e.OEk(3),e.C$Y()()),2&f){const g=y.$implicit;e.E7m("value",g.name),e.yG2(),e.E7m("name",g.icon)("color",g.color),e.yG2(),e.E7m("color",g.color),e.yG2(),e.cNF(g.name)}}const i=[{path:"",component:(()=>{var f;class y{segmentChanged(p){this.news=[],this.service.getByCategory(p.detail.value).subscribe(E=>{this.news.push(...E.articles),console.log(this.news)})}constructor(p){this.service=p,this.categories=[{name:"business",icon:"business-outline",color:"primary"},{name:"entertainment",icon:"film-outline",color:"secondary"},{name:"general",icon:"newspaper-outline",color:"tertiary"},{name:"health",icon:"medkit-outline",color:"success"},{name:"science",icon:"flask-outline",color:"warning"},{name:"sports",icon:"football-outline",color:"danger"},{name:"technology",icon:"hardware-chip-outline",color:"dark"}],this.news=[],this.segmentChanged({detail:{value:"business"}})}ngOnInit(){}}return(f=y).\u0275fac=function(p){return new(p||f)(e.GI1(a.a))},f.\u0275cmp=e.In1({type:f,selectors:[["app-newstab2"]],decls:9,vars:3,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"],["value","business","scrollable","true","color","primary","mode","md",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"news"],[3,"value"],[3,"name","color"],[3,"color"]],template:function(p,E){1&p&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title",2),e.OEk(5,"Categories"),e.C$Y()()(),e.I0R(6,"ion-segment",3),e.qCj("ionChange",function(O){return E.segmentChanged(O)}),e.yuY(7,h,4,5,"ion-segment-button",4),e.C$Y(),e.wR5(8,"app-news",5),e.C$Y()),2&p&&(e.yG2(),e.E7m("fullscreen",!0),e.yG2(6),e.E7m("ngForOf",E.categories),e.yG2(),e.E7m("news",E.news))},dependencies:[n.ay,c._i,c.wB,c.Ko,c.QR,c._4,c.Wl,c.tM,c.Md,c.IT,t.k,s.i],styles:["[_ngcontent-%COMP%]::-webkit-scrollbar, *[_ngcontent-%COMP%]::-webkit-scrollbar{display:none;overflow:hidden}"]}),y})()}];let r=(()=>{var f;class y{}return(f=y).\u0275fac=function(p){return new(p||f)},f.\u0275mod=e.a4G({type:f}),f.\u0275inj=e.s3X({imports:[l.qQ.forChild(i),l.qQ]}),y})();var v=o(7604);let m=(()=>{var f;class y{}return(f=y).\u0275fac=function(p){return new(p||f)},f.\u0275mod=e.a4G({type:f}),f.\u0275inj=e.s3X({imports:[n.MD,u.y,c.wZ,r,v.z]}),y})()},151:(M,w,o)=>{o.r(w),o.d(w,{Newstab3PageModule:()=>i});var n=o(1368),u=o(4716),c=o(2112),l=o(422),e=o(4496),a=o(6032);const s=[{path:"",component:(()=>{var r;class v{constructor(){}ngOnInit(){}}return(r=v).\u0275fac=function(f){return new(f||r)},r.\u0275cmp=e.In1({type:r,selectors:[["app-newstab3"]],decls:6,vars:1,consts:[[3,"fullscreen"],["collapse","condense"],["size","large"]],template:function(f,y){1&f&&(e.wR5(0,"app-header"),e.I0R(1,"ion-content",0)(2,"ion-header",1)(3,"ion-toolbar")(4,"ion-title",2),e.OEk(5,"newstab3"),e.C$Y()()()()),2&f&&(e.yG2(),e.E7m("fullscreen",!0))},dependencies:[c._i,c.wB,c.tM,c.Md,a.k]}),v})()}];let h=(()=>{var r;class v{}return(r=v).\u0275fac=function(f){return new(f||r)},r.\u0275mod=e.a4G({type:r}),r.\u0275inj=e.s3X({imports:[l.qQ.forChild(s),l.qQ]}),v})();var d=o(7604);let i=(()=>{var r;class v{}return(r=v).\u0275fac=function(f){return new(f||r)},r.\u0275mod=e.a4G({type:r}),r.\u0275inj=e.s3X({imports:[n.MD,u.y,c.wZ,h,d.z]}),v})()},664:(M,w,o)=>{o.d(w,{a:()=>l});var n=o(1482),u=o(4496),c=o(7048);let l=(()=>{var e;class a{constructor(s,h){this.http=s,this.firestore=h,this.apiKey="899cae8c0f814e7ebba3ba91476ef650",this.urlApple="https://newsapi.org/v2/everything?q=apple&from=2024-04-01&to=2024-04-01&sortBy=popularity&apiKey=899cae8c0f814e7ebba3ba91476ef650",this.urlCat="https://newsapi.org/v2/top-headlines?"}getNews(){return this.http.get(this.urlApple)}getByCategory(s){return this.http.get(this.urlCat+`category=${s}&apiKey=${this.apiKey}`)}getUserProfile(){const s=(0,n.UN)(this.firestore,"users","user-1");return(0,n.gZ)(s)}}return(e=a).\u0275fac=function(s){return new(s||e)(u.CoB(c.KK),u.CoB(n.OI))},e.\u0275prov=u.wxM({token:e,factory:e.\u0275fac,providedIn:"root"}),a})()}}]);