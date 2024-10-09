import{r,R as B}from"./react-DGs7XrPl.js";import{a as H}from"./react-dom-CcpivLZ2.js";import{m as M,D as N,a as K,R as A,u as W,N as G,b as X,c as Y,d as q,e as J}from"./react-router-DoLET5kR.js";import{c as Q,b as Z,E as $,s as ee,d as U}from"./@remix-run-r9YQyd7A.js";/**
 * React Router DOM v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C(){return C=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},C.apply(this,arguments)}function te(e,i){if(e==null)return{};var t={},a=Object.keys(e),n,s;for(s=0;s<a.length;s++)n=a[s],!(i.indexOf(n)>=0)&&(t[n]=e[n]);return t}function ne(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function re(e,i){return e.button===0&&(!i||i==="_self")&&!ne(e)}const ie=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function Re(e,i){return Q({basename:void 0,future:C({},void 0,{v7_prependBasename:!0}),history:Z({window:void 0}),hydrationData:ae(),routes:e,mapRouteProperties:M,window:void 0}).initialize()}function ae(){var e;let i=(e=window)==null?void 0:e.__staticRouterHydrationData;return i&&i.errors&&(i=C({},i,{errors:se(i.errors)})),i}function se(e){if(!e)return null;let i=Object.entries(e),t={};for(let[a,n]of i)if(n&&n.__type==="RouteErrorResponse")t[a]=new $(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let s=window[n.__subType];if(typeof s=="function")try{let u=new s(n.message);u.stack="",t[a]=u}catch{}}if(t[a]==null){let s=new Error(n.message);s.stack="",t[a]=s}}else t[a]=n;return t}const oe=r.createContext({isTransitioning:!1}),le=r.createContext(new Map),ue="startTransition",O=B[ue],ce="flushSync",F=H[ce];function fe(e){O?O(e):e()}function x(e){F?F(e):e()}class de{constructor(){this.status="pending",this.promise=new Promise((i,t)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",i(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",t(a))}})}}function Te(e){let{fallbackElement:i,router:t,future:a}=e,[n,s]=r.useState(t.state),[u,h]=r.useState(),[f,o]=r.useState({isTransitioning:!1}),[c,m]=r.useState(),[d,T]=r.useState(),[w,_]=r.useState(),L=r.useRef(new Map),{v7_startTransition:P}=a||{},E=r.useCallback(l=>{P?fe(l):l()},[P]),p=r.useCallback((l,S)=>{let{deletedFetchers:v,unstable_flushSync:k,unstable_viewTransitionOpts:g}=S;v.forEach(R=>L.current.delete(R)),l.fetchers.forEach((R,z)=>{R.data!==void 0&&L.current.set(z,R.data)});let V=t.window==null||typeof t.window.document.startViewTransition!="function";if(!g||V){k?x(()=>s(l)):E(()=>s(l));return}if(k){x(()=>{d&&(c&&c.resolve(),d.skipTransition()),o({isTransitioning:!0,flushSync:!0,currentLocation:g.currentLocation,nextLocation:g.nextLocation})});let R=t.window.document.startViewTransition(()=>{x(()=>s(l))});R.finished.finally(()=>{x(()=>{m(void 0),T(void 0),h(void 0),o({isTransitioning:!1})})}),x(()=>T(R));return}d?(c&&c.resolve(),d.skipTransition(),_({state:l,currentLocation:g.currentLocation,nextLocation:g.nextLocation})):(h(l),o({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}))},[t.window,d,c,L,E]);r.useLayoutEffect(()=>t.subscribe(p),[t,p]),r.useEffect(()=>{f.isTransitioning&&!f.flushSync&&m(new de)},[f]),r.useEffect(()=>{if(c&&u&&t.window){let l=u,S=c.promise,v=t.window.document.startViewTransition(async()=>{E(()=>s(l)),await S});v.finished.finally(()=>{m(void 0),T(void 0),h(void 0),o({isTransitioning:!1})}),T(v)}},[E,u,c,t.window]),r.useEffect(()=>{c&&u&&n.location.key===u.location.key&&c.resolve()},[c,d,n.location,u]),r.useEffect(()=>{!f.isTransitioning&&w&&(h(w.state),o({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),_(void 0))},[f.isTransitioning,w]),r.useEffect(()=>{},[]);let y=r.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:l=>t.navigate(l),push:(l,S,v)=>t.navigate(l,{state:S,preventScrollReset:v==null?void 0:v.preventScrollReset}),replace:(l,S,v)=>t.navigate(l,{replace:!0,state:S,preventScrollReset:v==null?void 0:v.preventScrollReset})}),[t]),b=t.basename||"/",j=r.useMemo(()=>({router:t,navigator:y,static:!1,basename:b}),[t,y,b]);return r.createElement(r.Fragment,null,r.createElement(N.Provider,{value:j},r.createElement(K.Provider,{value:n},r.createElement(le.Provider,{value:L.current},r.createElement(oe.Provider,{value:f},r.createElement(A,{basename:b,location:n.location,navigationType:n.historyAction,navigator:y,future:{v7_relativeSplatPath:t.future.v7_relativeSplatPath}},n.initialized||t.future.v7_partialHydration?r.createElement(pe,{routes:t.routes,future:t.future,state:n}):i))))),null)}function pe(e){let{routes:i,future:t,state:a}=e;return W(i,void 0,a,t)}const ve=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",he=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=r.forwardRef(function(i,t){let{onClick:a,relative:n,reloadDocument:s,replace:u,state:h,target:f,to:o,preventScrollReset:c,unstable_viewTransition:m}=i,d=te(i,ie),{basename:T}=r.useContext(G),w,_=!1;if(typeof o=="string"&&he.test(o)&&(w=o,ve))try{let p=new URL(window.location.href),y=o.startsWith("//")?new URL(p.protocol+o):new URL(o),b=ee(y.pathname,T);y.origin===p.origin&&b!=null?o=b+y.search+y.hash:_=!0}catch{}let L=X(o,{relative:n}),P=me(o,{replace:u,state:h,target:f,preventScrollReset:c,relative:n,unstable_viewTransition:m});function E(p){a&&a(p),p.defaultPrevented||P(p)}return r.createElement("a",C({},d,{href:w||L,onClick:_||s?a:E,ref:t,target:f}))});var D;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(D||(D={}));var I;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(I||(I={}));function me(e,i){let{target:t,replace:a,state:n,preventScrollReset:s,relative:u,unstable_viewTransition:h}=i===void 0?{}:i,f=Y(),o=q(),c=J(e,{relative:u});return r.useCallback(m=>{if(re(m,t)){m.preventDefault();let d=a!==void 0?a:U(o)===U(c);f(e,{replace:d,state:n,preventScrollReset:s,relative:u,unstable_viewTransition:h})}},[o,f,c,a,n,t,e,s,u,h])}export{Le as L,Te as R,Re as c};
