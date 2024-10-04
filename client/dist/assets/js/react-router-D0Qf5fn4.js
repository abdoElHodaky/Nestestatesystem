import{r}from"./react-CeAEre3e.js";import{i as g,r as O,g as U,j as P,m as _,A,p as S,s as T,a as w}from"./@remix-run-r9YQyd7A.js";/**
 * React Router v6.21.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},R.apply(this,arguments)}const F=r.createContext(null),z=r.createContext(null),x=r.createContext(null),I=r.createContext(null),C=r.createContext({outlet:null,matches:[],isDataRoute:!1}),j=r.createContext(null);function oe(e,t){let{relative:n}=t===void 0?{}:t;y()||g(!1);let{basename:l,navigator:i}=r.useContext(x),{hash:u,pathname:o,search:d}=Q(e,{relative:n}),c=o;return l!=="/"&&(c=o==="/"?l:P([l,o])),i.createHref({pathname:c,search:d,hash:u})}function y(){return r.useContext(I)!=null}function B(){return y()||g(!1),r.useContext(I).location}function M(e){r.useContext(x).static||r.useLayoutEffect(e)}function $(){let{isDataRoute:e}=r.useContext(C);return e?ne():q()}function q(){y()||g(!1);let e=r.useContext(F),{basename:t,future:n,navigator:l}=r.useContext(x),{matches:i}=r.useContext(C),{pathname:u}=B(),o=JSON.stringify(U(i,n.v7_relativeSplatPath)),d=r.useRef(!1);return M(()=>{d.current=!0}),r.useCallback(function(f,s){if(s===void 0&&(s={}),!d.current)return;if(typeof f=="number"){l.go(f);return}let a=O(f,JSON.parse(o),u,s.relative==="path");e==null&&t!=="/"&&(a.pathname=a.pathname==="/"?t:P([t,a.pathname])),(s.replace?l.replace:l.push)(a,s.state,s)},[t,l,o,u,e])}const G=r.createContext(null);function K(e){let t=r.useContext(C).outlet;return t&&r.createElement(G.Provider,{value:e},t)}function Q(e,t){let{relative:n}=t===void 0?{}:t,{future:l}=r.useContext(x),{matches:i}=r.useContext(C),{pathname:u}=B(),o=JSON.stringify(U(i,l.v7_relativeSplatPath));return r.useMemo(()=>O(e,JSON.parse(o),u,n==="path"),[e,o,u,n])}function ie(e,t,n,l){y()||g(!1);let{navigator:i}=r.useContext(x),{matches:u}=r.useContext(C),o=u[u.length-1],d=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let f=B(),s;s=f;let a=s.pathname||"/",h=c==="/"?a:a.slice(c.length)||"/",m=_(e,{pathname:h});return Z(m&&m.map(v=>Object.assign({},v,{params:Object.assign({},d,v.params),pathname:P([c,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?c:P([c,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),u,n,l)}function V(){let e=re(),t=w(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),n?r.createElement("pre",{style:i},n):null,null)}const W=r.createElement(V,null);class X extends r.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?r.createElement(C.Provider,{value:this.props.routeContext},r.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y(e){let{routeContext:t,match:n,children:l}=e,i=r.useContext(F);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),r.createElement(C.Provider,{value:t},l)}function Z(e,t,n,l){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),l===void 0&&(l=null),e==null){var u;if((u=n)!=null&&u.errors)e=n.matches;else return null}let o=e,d=(i=n)==null?void 0:i.errors;if(d!=null){let s=o.findIndex(a=>a.route.id&&(d==null?void 0:d[a.route.id]));s>=0||g(!1),o=o.slice(0,Math.min(o.length,s+1))}let c=!1,f=-1;if(n&&l&&l.v7_partialHydration)for(let s=0;s<o.length;s++){let a=o[s];if((a.route.HydrateFallback||a.route.hydrateFallbackElement)&&(f=s),a.route.id){let{loaderData:h,errors:m}=n,p=a.route.loader&&h[a.route.id]===void 0&&(!m||m[a.route.id]===void 0);if(a.route.lazy||p){c=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((s,a,h)=>{let m,p=!1,v=null,E=null;n&&(m=d&&a.route.id?d[a.route.id]:void 0,v=a.route.errorElement||W,c&&(f<0&&h===0?(p=!0,E=null):f===h&&(p=!0,E=a.route.hydrateFallbackElement||null)));let k=t.concat(o.slice(0,h+1)),L=()=>{let b;return m?b=v:p?b=E:a.route.Component?b=r.createElement(a.route.Component,null):a.route.element?b=a.route.element:b=s,r.createElement(Y,{match:a,routeContext:{outlet:s,matches:k,isDataRoute:n!=null},children:b})};return n&&(a.route.ErrorBoundary||a.route.errorElement||h===0)?r.createElement(X,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:L(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):L()},null)}var D=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(D||{}),N=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(N||{});function H(e){let t=r.useContext(F);return t||g(!1),t}function ee(e){let t=r.useContext(z);return t||g(!1),t}function te(e){let t=r.useContext(C);return t||g(!1),t}function J(e){let t=te(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function re(){var e;let t=r.useContext(j),n=ee(N.UseRouteError),l=J(N.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[l]}function ne(){let{router:e}=H(D.UseNavigateStable),t=J(N.UseNavigateStable),n=r.useRef(!1);return M(()=>{n.current=!0}),r.useCallback(function(i,u){u===void 0&&(u={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,R({fromRouteId:t},u)))},[e,t])}function se(e){let{to:t,replace:n,state:l,relative:i}=e;y()||g(!1);let{future:u,static:o}=r.useContext(x),{matches:d}=r.useContext(C),{pathname:c}=B(),f=$(),s=O(t,U(d,u.v7_relativeSplatPath),c,i==="path"),a=JSON.stringify(s);return r.useEffect(()=>f(JSON.parse(a),{replace:n,state:l,relative:i}),[f,a,i,n,l]),null}function ue(e){return K(e.context)}function ce(e){let{basename:t="/",children:n=null,location:l,navigationType:i=A.Pop,navigator:u,static:o=!1,future:d}=e;y()&&g(!1);let c=t.replace(/^\/*/,"/"),f=r.useMemo(()=>({basename:c,navigator:u,static:o,future:R({v7_relativeSplatPath:!1},d)}),[c,d,u,o]);typeof l=="string"&&(l=S(l));let{pathname:s="/",search:a="",hash:h="",state:m=null,key:p="default"}=l,v=r.useMemo(()=>{let E=T(s,c);return E==null?null:{location:{pathname:E,search:a,hash:h,state:m,key:p},navigationType:i}},[c,s,a,h,m,p,i]);return v==null?null:r.createElement(x.Provider,{value:f},r.createElement(I.Provider,{children:n,value:v}))}new Promise(()=>{});function de(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:r.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:r.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:r.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}export{F as D,x as N,ue as O,ce as R,z as a,oe as b,$ as c,B as d,Q as e,se as f,de as m,ie as u};
