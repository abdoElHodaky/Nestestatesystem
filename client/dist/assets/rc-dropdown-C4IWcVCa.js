import{k as ee,c as te,g as ne,b as ae}from"./@babel-CFUu5hEi.js";import{T as re}from"./@rc-component-BoTBtFeW.js";import{c as S}from"./classnames-Pu3rYkp-.js";import{t as oe,K as L,f as W,s as D}from"./rc-util-DczjbXZF.js";import{r as b,a as n}from"./react-DSroWhVQ.js";var ie=L.ESC,le=L.TAB;function se(e){var u=e.visible,o=e.triggerRef,s=e.onVisibleChange,c=e.autoFocus,a=e.overlayRef,r=b.useRef(!1),f=function(){if(u){var t,i;(t=o.current)===null||t===void 0||(i=t.focus)===null||i===void 0||i.call(t),s==null||s(!1)}},p=function(){var t;return(t=a.current)!==null&&t!==void 0&&t.focus?(a.current.focus(),r.current=!0,!0):!1},h=function(t){switch(t.keyCode){case ie:f();break;case le:{var i=!1;r.current||(i=p()),i?t.preventDefault():f();break}}};b.useEffect(function(){return u?(window.addEventListener("keydown",h),c&&oe(p,3),function(){window.removeEventListener("keydown",h),r.current=!1}):function(){r.current=!1}},[u])}var fe=b.forwardRef(function(e,u){var o=e.overlay,s=e.arrow,c=e.prefixCls,a=b.useMemo(function(){var f;return typeof o=="function"?f=o():f=o,f},[o]),r=W(u,a==null?void 0:a.ref);return n.createElement(n.Fragment,null,s&&n.createElement("div",{className:"".concat(c,"-arrow")}),n.cloneElement(a,{ref:D(a)?r:void 0}))}),v={adjustX:1,adjustY:1},d=[0,0],ue={topLeft:{points:["bl","tl"],overflow:v,offset:[0,-4],targetOffset:d},top:{points:["bc","tc"],overflow:v,offset:[0,-4],targetOffset:d},topRight:{points:["br","tr"],overflow:v,offset:[0,-4],targetOffset:d},bottomLeft:{points:["tl","bl"],overflow:v,offset:[0,4],targetOffset:d},bottom:{points:["tc","bc"],overflow:v,offset:[0,4],targetOffset:d},bottomRight:{points:["tr","br"],overflow:v,offset:[0,4],targetOffset:d}},ce=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus","overlay","children","onVisibleChange"];function ve(e,u){var o,s=e.arrow,c=s===void 0?!1:s,a=e.prefixCls,r=a===void 0?"rc-dropdown":a,f=e.transitionName,p=e.animation,h=e.align,m=e.placement,t=m===void 0?"bottomLeft":m,i=e.placements,_=i===void 0?ue:i,j=e.getPopupContainer,K=e.showAction,$=e.hideAction,B=e.overlayClassName,H=e.overlayStyle,I=e.visible,A=e.trigger,M=A===void 0?["hover"]:A,X=e.autoFocus,N=e.overlay,y=e.children,w=e.onVisibleChange,Y=ee(e,ce),q=n.useState(),E=te(q,2),z=E[0],x=E[1],R="visible"in e?I:z,P=n.useRef(null),k=n.useRef(null),T=n.useRef(null);n.useImperativeHandle(u,function(){return P.current});var V=function(l){x(l),w==null||w(l)};se({visible:R,triggerRef:T,onVisibleChange:V,autoFocus:X,overlayRef:k});var G=function(l){var C=e.onOverlayClick;x(!1),C&&C(l)},F=function(){return n.createElement(fe,{ref:k,overlay:N,prefixCls:r,arrow:c})},J=function(){return typeof N=="function"?F:F()},Q=function(){var l=e.minOverlayWidthMatchTrigger,C=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?l:!C},U=function(){var l=e.openClassName;return l!==void 0?l:"".concat(r,"-open")},Z=n.cloneElement(y,{className:S((o=y.props)===null||o===void 0?void 0:o.className,R&&U()),ref:D(y)?W(T,y.ref):void 0}),O=$;return!O&&M.indexOf("contextMenu")!==-1&&(O=["click"]),n.createElement(re,ne({builtinPlacements:_},Y,{prefixCls:r,ref:P,popupClassName:S(B,ae({},"".concat(r,"-show-arrow"),c)),popupStyle:H,action:M,showAction:K,hideAction:O,popupPlacement:t,popupAlign:h,popupTransitionName:f,popupAnimation:p,popupVisible:R,stretch:Q()?"minWidth":"",popup:J(),onPopupVisibleChange:V,onPopupClick:G,getPopupContainer:j}),Z)}const ye=n.forwardRef(ve);export{ye as D};
