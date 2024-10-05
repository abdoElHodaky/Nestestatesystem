import{h as pe,c as T,d as he,e as B,g as Se,b as de,f as q}from"./@babel-Ci6hP7BZ.js";import{c as ce}from"./classnames-BKZqXhpQ.js";import{B as Pe,r as oe,f as _e}from"./rc-input-BQvqlYdP.js";import{B as xe,a as ve,j as ge}from"./rc-util-Cy3Pomc3.js";import{r as v,a as R}from"./react-B7hHFfZl.js";import{R as Fe}from"./rc-resize-observer-Ci3zIJYU.js";var Me=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,$e=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],ie={},h;function Be(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(c&&ie[a])return ie[a];var r=window.getComputedStyle(e),l=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),f=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),i=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),s=$e.map(function(o){return"".concat(o,":").concat(r.getPropertyValue(o))}).join(";"),z={sizingStyle:s,paddingSize:f,borderSize:i,boxSizing:l};return c&&a&&(ie[a]=z),z}function je(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;h||(h=document.createElement("textarea"),h.setAttribute("tab-index","-1"),h.setAttribute("aria-hidden","true"),document.body.appendChild(h)),e.getAttribute("wrap")?h.setAttribute("wrap",e.getAttribute("wrap")):h.removeAttribute("wrap");var l=Be(e,c),f=l.paddingSize,i=l.borderSize,s=l.boxSizing,z=l.sizingStyle;h.setAttribute("style","".concat(z,";").concat(Me)),h.value=e.value||e.placeholder||"";var o=void 0,u=void 0,y,g=h.scrollHeight;if(s==="border-box"?g+=i:s==="content-box"&&(g-=f),a!==null||r!==null){h.value=" ";var I=h.scrollHeight-f;a!==null&&(o=I*a,s==="border-box"&&(o=o+f+i),g=Math.max(o,g)),r!==null&&(u=I*r,s==="border-box"&&(u=u+f+i),y=g>u?"":"hidden",g=Math.min(u,g))}var m={height:g,overflowY:y,resize:"none"};return o&&(m.minHeight=o),u&&(m.maxHeight=u),m}var He=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],le=0,se=1,ue=2,Le=v.forwardRef(function(e,c){var a=e,r=a.prefixCls;a.onPressEnter;var l=a.defaultValue,f=a.value,i=a.autoSize,s=a.onResize,z=a.className,o=a.style,u=a.disabled,y=a.onChange;a.onInternalAutoSize;var g=pe(a,He),I=xe(l,{value:f,postState:function(d){return d??""}}),m=T(I,2),j=m[0],V=m[1],J=function(d){V(d.target.value),y==null||y(d)},p=v.useRef();v.useImperativeHandle(c,function(){return{textArea:p.current}});var F=v.useMemo(function(){return i&&he(i)==="object"?[i.minRows,i.maxRows]:[]},[i]),Y=T(F,2),C=Y[0],w=Y[1],N=!!i,M=function(){try{if(document.activeElement===p.current){var d=p.current,X=d.selectionStart,te=d.selectionEnd,ae=d.scrollTop;p.current.setSelectionRange(X,te),p.current.scrollTop=ae}}catch{}},Q=v.useState(ue),H=T(Q,2),S=H[0],P=H[1],E=v.useState(),W=T(E,2),Z=W[0],ee=W[1],$=function(){P(le)};ve(function(){N&&$()},[f,C,w,N]),ve(function(){if(S===le)P(se);else if(S===se){var x=je(p.current,!1,C,w);P(ue),ee(x)}else M()},[S]);var k=v.useRef(),L=function(){ge.cancel(k.current)},G=function(d){S===ue&&(s==null||s(d),i&&(L(),k.current=ge(function(){$()})))};v.useEffect(function(){return L},[]);var O=N?Z:null,_=B(B({},o),O);return(S===le||S===se)&&(_.overflowY="hidden",_.overflowX="hidden"),v.createElement(Fe,{onResize:G,disabled:!(i||s)},v.createElement("textarea",Se({},g,{ref:p,style:_,className:ce(r,z,de({},"".concat(r,"-disabled"),u)),disabled:u,value:j,onChange:J})))}),De=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled","hidden","classNames","styles","onResize"];function be(e,c){return q(e||"").slice(0,c).join("")}function me(e,c,a,r){var l=a;return e?l=be(a,r):q(c||"").length<a.length&&q(a||"").length>r&&(l=c),l}var Oe=R.forwardRef(function(e,c){var a,r=e.defaultValue,l=e.value,f=e.onFocus,i=e.onBlur,s=e.onChange,z=e.allowClear,o=e.maxLength,u=e.onCompositionStart,y=e.onCompositionEnd,g=e.suffix,I=e.prefixCls,m=I===void 0?"rc-textarea":I,j=e.classes,V=e.showCount,J=e.className,p=e.style,F=e.disabled,Y=e.hidden,C=e.classNames,w=e.styles,N=e.onResize,M=pe(e,De),Q=xe(r,{value:l,defaultValue:r}),H=T(Q,2),S=H[0],P=H[1],E=v.useRef(null),W=R.useState(!1),Z=T(W,2),ee=Z[0],$=Z[1],k=R.useState(!1),L=T(k,2),G=L[0],O=L[1],_=R.useRef(),x=R.useRef(0),d=R.useState(null),X=T(d,2),te=X[0],ae=X[1],ne=function(){var t;(t=E.current)===null||t===void 0||t.textArea.focus()};v.useImperativeHandle(c,function(){return{resizableTextArea:E.current,focus:ne,blur:function(){var t;(t=E.current)===null||t===void 0||t.textArea.blur()}}}),v.useEffect(function(){$(function(b){return!F&&b})},[F]);var U=Number(o)>0,Re=function(t){O(!0),_.current=S,x.current=t.currentTarget.selectionStart,u==null||u(t)},ze=function(t){O(!1);var n=t.currentTarget.value;if(U){var A,Ne=x.current>=o+1||x.current===((A=_.current)===null||A===void 0?void 0:A.length);n=me(Ne,_.current,n,o)}n!==S&&(P(n),oe(t.currentTarget,t,s,n)),y==null||y(t)},ye=function(t){var n=t.target.value;if(!G&&U){var A=t.target.selectionStart>=o+1||t.target.selectionStart===n.length||!t.target.selectionStart;n=me(A,S,n,o)}P(n),oe(t.currentTarget,t,s,n)},Ce=function(t){var n=M.onPressEnter,A=M.onKeyDown;t.key==="Enter"&&n&&n(t),A==null||A(t)},we=function(t){$(!0),f==null||f(t)},Ae=function(t){$(!1),i==null||i(t)},Ee=function(t){var n;P(""),ne(),oe((n=E.current)===null||n===void 0?void 0:n.textArea,t,s)},D=_e(S);!G&&U&&l==null&&(D=be(D,o));var re=g,K;if(V){var fe=q(D).length;he(V)==="object"?K=V.formatter({value:D,count:fe,maxLength:o}):K="".concat(fe).concat(U?" / ".concat(o):""),re=R.createElement(R.Fragment,null,re,R.createElement("span",{className:ce("".concat(m,"-data-count"),C==null?void 0:C.count),style:w==null?void 0:w.count},K))}var Te=function(t){var n;N==null||N(t),(n=E.current)!==null&&n!==void 0&&n.textArea.style.height&&ae(!0)},Ie=!M.autoSize&&!V&&!z,Ve=R.createElement(Pe,{value:D,allowClear:z,handleReset:Ee,suffix:re,prefixCls:m,classes:{affixWrapper:ce(j==null?void 0:j.affixWrapper,(a={},de(a,"".concat(m,"-show-count"),V),de(a,"".concat(m,"-textarea-allow-clear"),z),a))},disabled:F,focused:ee,className:J,style:B(B({},p),te&&!Ie?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof K=="string"?K:void 0}},hidden:Y,inputElement:R.createElement(Le,Se({},M,{onKeyDown:Ce,onChange:ye,onFocus:we,onBlur:Ae,onCompositionStart:Re,onCompositionEnd:ze,className:C==null?void 0:C.textarea,style:B(B({},w==null?void 0:w.textarea),{},{resize:p==null?void 0:p.resize}),disabled:F,prefixCls:m,onResize:Te,ref:E}))});return Ve});export{Oe as T};
