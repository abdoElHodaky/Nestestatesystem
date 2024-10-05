import{c as zt,d as ln,u as Z}from"./@rc-component-_5ARNIrk.js";import{r as t}from"./react-B7hHFfZl.js";import{p as Yn,o as Gn,E as qn,f as Jn,l as Bn,y as Wt,c as At,L as Xe,M as On,N as $n,h as Xt,d as zn,O as Dt,t as Wn}from"./rc-util-Cy3Pomc3.js";import{c as X,d as Ie,b as K,e as h,g as Q,h as Ne,f as me}from"./@babel-Ci6hP7BZ.js";import{c as Y}from"./classnames-BKZqXhpQ.js";import{R as cn}from"./rc-resize-observer-Ci3zIJYU.js";import{L as jt}from"./rc-virtual-list-D1YDcMmO.js";var Ee={},je="rc-table-internal-hook",sn=zt(),Qn=sn.makeImmutable,He=sn.responseImmutable,Ut=sn.useImmutableMark,te=ln();function Vt(e,r){var n=t.useRef(0);n.current+=1;var a=t.useRef(e),o=[];Object.keys({}).map(function(s){var c;((c=a.current)===null||c===void 0?void 0:c[s])!==void 0&&o.push(s)}),a.current=e;var l=t.useRef([]);return o.length&&(l.current=o),t.useDebugValue(n.current),t.useDebugValue(l.current.join(", ")),n.current}var Yt=t.memo(function(){var e=Vt();return t.createElement("h1",null,"Render Times: ",e)});Yt.displayName="RenderBlock";var Zn=t.createContext({renderWithProps:!1}),Gt="RC_TABLE_KEY";function qt(e){return e==null?[]:Array.isArray(e)?e:[e]}function Ue(e){var r=[],n={};return e.forEach(function(a){for(var o=a||{},l=o.key,s=o.dataIndex,c=l||qt(s).join("-")||Gt;n[c];)c="".concat(c,"_next");n[c]=!0,r.push(c)}),r}function an(e){return e!=null}function Jt(e){return e&&Ie(e)==="object"&&!Array.isArray(e)&&!t.isValidElement(e)}function Qt(e,r,n,a,o,l){var s=t.useContext(Zn),c=Ut(),i=Yn(function(){if(an(a))return[a];var u=r==null||r===""?[]:Array.isArray(r)?r:[r],f=qn(e,u),d=f,m=void 0;if(o){var v=o(f,e,n);Jt(v)?(d=v.children,m=v.props,s.renderWithProps=!0):d=v}return[d,m]},[c,e,a,r,o,n],function(u,f){if(l){var d=X(u,2),m=d[1],v=X(f,2),x=v[1];return l(x,m)}return s.renderWithProps?!0:!Gn(u,f,!0)});return i}function Zt(e,r,n,a){var o=e+r-1;return e<=a&&o>=n}function er(e,r){return Z(te,function(n){var a=Zt(e,r||1,n.hoverStartRow,n.hoverEndRow);return[a,n.onHover]})}var nr=function(r){var n=r.ellipsis,a=r.rowType,o=r.children,l,s=n===!0?{showTitle:!0}:n;return s&&(s.showTitle||a==="header")&&(typeof o=="string"||typeof o=="number"?l=o.toString():t.isValidElement(o)&&typeof o.props.children=="string"&&(l=o.props.children)),l};function tr(e){var r,n,a,o,l,s,c,i,u=e.component,f=e.children,d=e.ellipsis,m=e.scope,v=e.prefixCls,x=e.className,w=e.align,y=e.record,b=e.render,g=e.dataIndex,E=e.renderIndex,I=e.shouldCellUpdate,N=e.index,L=e.rowType,F=e.colSpan,B=e.rowSpan,H=e.fixLeft,O=e.fixRight,R=e.firstFixLeft,C=e.lastFixLeft,p=e.firstFixRight,S=e.lastFixRight,P=e.appendNode,T=e.additionalProps,k=T===void 0?{}:T,_=e.isSticky,A="".concat(v,"-cell"),G=Z(te,["supportSticky","allColumnsFixedLeft"]),D=G.supportSticky,ue=G.allColumnsFixedLeft,Ce=Qt(y,g,E,f,b,I),re=X(Ce,2),W=re[0],j=re[1],ee={},pe=typeof H=="number"&&D,de=typeof O=="number"&&D;pe&&(ee.position="sticky",ee.left=H),de&&(ee.position="sticky",ee.right=O);var xe=(r=(n=(a=j==null?void 0:j.colSpan)!==null&&a!==void 0?a:k.colSpan)!==null&&n!==void 0?n:F)!==null&&r!==void 0?r:1,le=(o=(l=(s=j==null?void 0:j.rowSpan)!==null&&s!==void 0?s:k.rowSpan)!==null&&l!==void 0?l:B)!==null&&o!==void 0?o:1,q=er(N,le),V=X(q,2),J=V[0],ye=V[1],Me=function(Se){var U;y&&ye(N,N+le-1),k==null||(U=k.onMouseEnter)===null||U===void 0||U.call(k,Se)},ke=function(Se){var U;y&&ye(-1,-1),k==null||(U=k.onMouseLeave)===null||U===void 0||U.call(k,Se)};if(xe===0||le===0)return null;var ae=(c=k.title)!==null&&c!==void 0?c:nr({rowType:L,ellipsis:d,children:W}),$=Y(A,x,(i={},K(i,"".concat(A,"-fix-left"),pe&&D),K(i,"".concat(A,"-fix-left-first"),R&&D),K(i,"".concat(A,"-fix-left-last"),C&&D),K(i,"".concat(A,"-fix-left-all"),C&&ue&&D),K(i,"".concat(A,"-fix-right"),de&&D),K(i,"".concat(A,"-fix-right-first"),p&&D),K(i,"".concat(A,"-fix-right-last"),S&&D),K(i,"".concat(A,"-ellipsis"),d),K(i,"".concat(A,"-with-append"),P),K(i,"".concat(A,"-fix-sticky"),(pe||de)&&_&&D),K(i,"".concat(A,"-row-hover"),!j&&J),i),k.className,j==null?void 0:j.className),he={};w&&(he.textAlign=w);var oe=h(h(h(h({},ee),k.style),he),j==null?void 0:j.style),fe=W;return Ie(fe)==="object"&&!Array.isArray(fe)&&!t.isValidElement(fe)&&(fe=null),d&&(C||p)&&(fe=t.createElement("span",{className:"".concat(A,"-content")},fe)),t.createElement(u,Q({},j,k,{className:$,style:oe,title:ae,scope:m,onMouseEnter:Me,onMouseLeave:ke,colSpan:xe!==1?xe:null,rowSpan:le!==1?le:null}),P,fe)}const be=t.memo(tr);function un(e,r,n,a,o,l){var s=n[e]||{},c=n[r]||{},i,u;s.fixed==="left"?i=a.left[o==="rtl"?r:e]:c.fixed==="right"&&(u=a.right[o==="rtl"?e:r]);var f=!1,d=!1,m=!1,v=!1,x=n[r+1],w=n[e-1],y=!(l!=null&&l.children);if(o==="rtl"){if(i!==void 0){var b=w&&w.fixed==="left";v=!b&&y}else if(u!==void 0){var g=x&&x.fixed==="right";m=!g&&y}}else if(i!==void 0){var E=x&&x.fixed==="left";f=!E&&y}else if(u!==void 0){var I=w&&w.fixed==="right";d=!I&&y}return{fixLeft:i,fixRight:u,lastFixLeft:f,firstFixRight:d,lastFixRight:m,firstFixLeft:v,isSticky:a.isSticky}}var et=t.createContext({});function rr(e){var r=e.className,n=e.index,a=e.children,o=e.colSpan,l=o===void 0?1:o,s=e.rowSpan,c=e.align,i=Z(te,["prefixCls","direction"]),u=i.prefixCls,f=i.direction,d=t.useContext(et),m=d.scrollColumnIndex,v=d.stickyOffsets,x=d.flattenColumns,w=d.columns,y=n+l-1,b=y+1===m?l+1:l,g=un(n,n+b-1,x,v,f,w==null?void 0:w[n]);return t.createElement(be,Q({className:r,index:n,component:"td",prefixCls:u,record:null,dataIndex:null,align:c,colSpan:b,rowSpan:s,render:function(){return a}},g))}var ar=["children"];function or(e){var r=e.children,n=Ne(e,ar);return t.createElement("tr",n,r)}function Ve(e){var r=e.children;return r}Ve.Row=or;Ve.Cell=rr;function lr(e){var r=e.children,n=e.stickyOffsets,a=e.flattenColumns,o=e.columns,l=Z(te,"prefixCls"),s=a.length-1,c=a[s],i=t.useMemo(function(){return{stickyOffsets:n,flattenColumns:a,scrollColumnIndex:c!=null&&c.scrollbar?s:null,columns:o}},[c,a,s,n,o]);return t.createElement(et.Provider,{value:i},t.createElement("tfoot",{className:"".concat(l,"-summary")},r))}const De=He(lr);var ir=Ve;function nt(e,r,n,a,o,l,s){e.push({record:r,indent:n,index:s});var c=l(r),i=o==null?void 0:o.has(c);if(r&&Array.isArray(r[a])&&i)for(var u=0;u<r[a].length;u+=1)nt(e,r[a][u],n+1,a,o,l,u)}function tt(e,r,n,a){var o=t.useMemo(function(){if(n!=null&&n.size){for(var l=[],s=0;s<(e==null?void 0:e.length);s+=1){var c=e[s];nt(l,c,0,r,n,a,s)}return l}return e==null?void 0:e.map(function(i,u){return{record:i,indent:0,index:u}})},[e,r,n,a]);return o}function rt(e,r,n,a){var o=Z(te,["prefixCls","fixedInfoList","flattenColumns","expandableType","expandRowByClick","onTriggerExpand","rowClassName","expandedRowClassName","indentSize","expandIcon","expandedRowRender","expandIconColumnIndex","expandedKeys","childrenColumnName","rowExpandable","onRow"]),l=o.flattenColumns,s=o.expandableType,c=o.expandedKeys,i=o.childrenColumnName,u=o.onTriggerExpand,f=o.rowExpandable,d=o.onRow,m=o.expandRowByClick,v=o.rowClassName,x=s==="nest",w=s==="row"&&(!f||f(e)),y=w||x,b=c&&c.has(r),g=i&&e&&e[i],E=Jn(u),I=d==null?void 0:d(e,n),N=I==null?void 0:I.onClick,L=function(O){m&&y&&u(e,O);for(var R=arguments.length,C=new Array(R>1?R-1:0),p=1;p<R;p++)C[p-1]=arguments[p];N==null||N.apply(void 0,[O].concat(C))},F;typeof v=="string"?F=v:typeof v=="function"&&(F=v(e,n,a));var B=Ue(l);return h(h({},o),{},{columnsKey:B,nestExpandable:x,expanded:b,hasNestChildren:g,record:e,onTriggerExpand:E,rowSupportExpand:w,expandable:y,rowProps:h(h({},I),{},{className:Y(F,I==null?void 0:I.className),onClick:L})})}function at(e){var r=e.prefixCls,n=e.children,a=e.component,o=e.cellComponent,l=e.className,s=e.expanded,c=e.colSpan,i=e.isEmpty,u=Z(te,["scrollbarSize","fixHeader","fixColumn","componentWidth","horizonScroll"]),f=u.scrollbarSize,d=u.fixHeader,m=u.fixColumn,v=u.componentWidth,x=u.horizonScroll,w=n;return(i?x&&v:m)&&(w=t.createElement("div",{style:{width:v-(d?f:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(r,"-expanded-row-fixed")},w)),t.createElement(a,{className:l,style:{display:s?null:"none"}},t.createElement(be,{component:o,prefixCls:r,colSpan:c},w))}function ot(e,r,n,a,o){var l=e.record,s=e.prefixCls,c=e.columnsKey,i=e.fixedInfoList,u=e.expandIconColumnIndex,f=e.nestExpandable,d=e.indentSize,m=e.expandIcon,v=e.expanded,x=e.hasNestChildren,w=e.onTriggerExpand,y=c[n],b=i[n],g;n===(u||0)&&f&&(g=t.createElement(t.Fragment,null,t.createElement("span",{style:{paddingLeft:"".concat(d*a,"px")},className:"".concat(s,"-row-indent indent-level-").concat(a)}),m({prefixCls:s,expanded:v,expandable:x,record:l,onExpand:w})));var E;return r.onCell&&(E=r.onCell(l,o)),{key:y,fixedInfo:b,appendCellNode:g,additionalCellProps:E||{}}}function lt(e){var r=e.className,n=e.style,a=e.record,o=e.index,l=e.renderIndex,s=e.rowKey,c=e.indent,i=c===void 0?0:c,u=e.rowComponent,f=e.cellComponent,d=e.scopeCellComponent,m=rt(a,s,o,i),v=m.prefixCls,x=m.flattenColumns,w=m.expandedRowClassName,y=m.expandedRowRender,b=m.rowProps,g=m.expanded,E=m.rowSupportExpand,I=t.useRef(!1);I.current||(I.current=g);var N=t.createElement(u,Q({},b,{"data-row-key":s,className:Y(r,"".concat(v,"-row"),"".concat(v,"-row-level-").concat(i),b==null?void 0:b.className),style:h(h({},n),b==null?void 0:b.style)}),x.map(function(H,O){var R=H.render,C=H.dataIndex,p=H.className,S=ot(m,H,O,i,o),P=S.key,T=S.fixedInfo,k=S.appendCellNode,_=S.additionalCellProps;return t.createElement(be,Q({className:p,ellipsis:H.ellipsis,align:H.align,scope:H.rowScope,component:H.rowScope?d:f,prefixCls:v,key:P,record:a,index:o,renderIndex:l,dataIndex:C,render:R,shouldCellUpdate:H.shouldCellUpdate},T,{appendNode:k,additionalProps:_}))})),L;if(E&&(I.current||g)){var F=y(a,o,i+1,g),B=w&&w(a,o,i);L=t.createElement(at,{expanded:g,className:Y("".concat(v,"-expanded-row"),"".concat(v,"-expanded-row-level-").concat(i+1),B),prefixCls:v,component:u,cellComponent:f,colSpan:x.length,isEmpty:!1},F)}return t.createElement(t.Fragment,null,N,L)}lt.displayName="BodyRow";const cr=He(lt);function sr(e){var r=e.columnKey,n=e.onColumnResize,a=t.useRef();return t.useEffect(function(){a.current&&n(r,a.current.offsetWidth)},[]),t.createElement(cn,{data:r},t.createElement("td",{ref:a,style:{padding:0,border:0,height:0}},t.createElement("div",{style:{height:0,overflow:"hidden"}}," ")))}function ur(e){var r=e.prefixCls,n=e.columnsKey,a=e.onColumnResize;return t.createElement("tr",{"aria-hidden":"true",className:"".concat(r,"-measure-row"),style:{height:0,fontSize:0}},t.createElement(cn.Collection,{onBatchResize:function(l){l.forEach(function(s){var c=s.data,i=s.size;a(c,i.offsetWidth)})}},n.map(function(o){return t.createElement(sr,{key:o,columnKey:o,onColumnResize:a})})))}function it(e){var r=e.data,n=e.measureColumnWidth,a=Z(te,["prefixCls","getComponent","onColumnResize","flattenColumns","getRowKey","expandedKeys","childrenColumnName","emptyNode"]),o=a.prefixCls,l=a.getComponent,s=a.onColumnResize,c=a.flattenColumns,i=a.getRowKey,u=a.expandedKeys,f=a.childrenColumnName,d=a.emptyNode,m=tt(r,f,u,i),v=t.useRef({renderWithProps:!1}),x=l(["body","wrapper"],"tbody"),w=l(["body","row"],"tr"),y=l(["body","cell"],"td"),b=l(["body","cell"],"th"),g;r.length?g=m.map(function(I,N){var L=I.record,F=I.indent,B=I.index,H=i(L,N);return t.createElement(cr,{key:H,rowKey:H,record:L,index:N,renderIndex:B,rowComponent:w,cellComponent:y,scopeCellComponent:b,getRowKey:i,indent:F})}):g=t.createElement(at,{expanded:!0,className:"".concat(o,"-placeholder"),prefixCls:o,component:w,cellComponent:y,colSpan:c.length,isEmpty:!0},d);var E=Ue(c);return t.createElement(Zn.Provider,{value:v.current},t.createElement(x,{className:"".concat(o,"-tbody")},n&&t.createElement(ur,{prefixCls:o,columnsKey:E,onColumnResize:s}),g))}it.displayName="Body";const dr=He(it);var fr=["expandable"],ct="RC_TABLE_INTERNAL_COL_DEFINE";function vr(e){var r=e.expandable,n=Ne(e,fr),a;return"expandable"in e?a=h(h({},n),r):a=n,a.showExpandColumn===!1&&(a.expandIconColumnIndex=-1),a}var mr=["columnType"];function st(e){for(var r=e.colWidths,n=e.columns,a=e.columCount,o=[],l=a||n.length,s=!1,c=l-1;c>=0;c-=1){var i=r[c],u=n&&n[c],f=u&&u[ct];if(i||f||s){var d=f||{};d.columnType;var m=Ne(d,mr);o.unshift(t.createElement("col",Q({key:c,style:{width:i}},m))),s=!0}}return t.createElement("colgroup",null,o)}var pr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function xr(e,r){return t.useMemo(function(){for(var n=[],a=0;a<r;a+=1){var o=e[a];if(o!==void 0)n[a]=o;else return null}return n},[e.join("_"),r])}var ut=t.forwardRef(function(e,r){var n=e.className,a=e.noData,o=e.columns,l=e.flattenColumns,s=e.colWidths,c=e.columCount,i=e.stickyOffsets,u=e.direction,f=e.fixHeader,d=e.stickyTopOffset,m=e.stickyBottomOffset,v=e.stickyClassName,x=e.onScroll,w=e.maxContentScroll,y=e.children,b=Ne(e,pr),g=Z(te,["prefixCls","scrollbarSize","isSticky"]),E=g.prefixCls,I=g.scrollbarSize,N=g.isSticky,L=N&&!f?0:I,F=t.useRef(null),B=t.useCallback(function(T){Bn(r,T),Bn(F,T)},[]);t.useEffect(function(){var T;function k(_){var A=_,G=A.currentTarget,D=A.deltaX;D&&(x({currentTarget:G,scrollLeft:G.scrollLeft+D}),_.preventDefault())}return(T=F.current)===null||T===void 0||T.addEventListener("wheel",k),function(){var _;(_=F.current)===null||_===void 0||_.removeEventListener("wheel",k)}},[]);var H=t.useMemo(function(){return l.every(function(T){return T.width})},[l]),O=l[l.length-1],R={fixed:O?O.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(E,"-cell-scrollbar")}}},C=t.useMemo(function(){return L?[].concat(me(o),[R]):o},[L,o]),p=t.useMemo(function(){return L?[].concat(me(l),[R]):l},[L,l]),S=t.useMemo(function(){var T=i.right,k=i.left;return h(h({},i),{},{left:u==="rtl"?[].concat(me(k.map(function(_){return _+L})),[0]):k,right:u==="rtl"?T:[].concat(me(T.map(function(_){return _+L})),[0]),isSticky:N})},[L,i,N]),P=xr(s,c);return t.createElement("div",{style:h({overflow:"hidden"},N?{top:d,bottom:m}:{}),ref:B,className:Y(n,K({},v,!!v))},t.createElement("table",{style:{tableLayout:"fixed",visibility:a||P?null:"hidden"}},(!a||!w||H)&&t.createElement(st,{colWidths:P?[].concat(me(P),[L]):[],columCount:c+1,columns:p}),y(h(h({},b),{},{stickyOffsets:S,columns:C,flattenColumns:p}))))});ut.displayName="FixedHolder";const An=t.memo(ut);function dt(e){var r=e.cells,n=e.stickyOffsets,a=e.flattenColumns,o=e.rowComponent,l=e.cellComponent,s=e.tdCellComponent,c=e.onHeaderRow,i=e.index,u=Z(te,["prefixCls","direction"]),f=u.prefixCls,d=u.direction,m;c&&(m=c(r.map(function(x){return x.column}),i));var v=Ue(r.map(function(x){return x.column}));return t.createElement(o,m,r.map(function(x,w){var y=x.column,b=un(x.colStart,x.colEnd,a,n,d,y),g;return y&&y.onHeaderCell&&(g=x.column.onHeaderCell(y)),t.createElement(be,Q({},x,{scope:y.title?x.colSpan>1?"colgroup":"col":null,ellipsis:y.ellipsis,align:y.align,component:y.title?l:s,prefixCls:f,key:v[w]},b,{additionalProps:g,rowType:"header"}))}))}dt.displayName="HeaderRow";function Cr(e){var r=[];function n(s,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;r[i]=r[i]||[];var u=c,f=s.filter(Boolean).map(function(d){var m={key:d.key,className:d.className||"",children:d.title,column:d,colStart:u},v=1,x=d.children;return x&&x.length>0&&(v=n(x,u,i+1).reduce(function(w,y){return w+y},0),m.hasSubColumns=!0),"colSpan"in d&&(v=d.colSpan),"rowSpan"in d&&(m.rowSpan=d.rowSpan),m.colSpan=v,m.colEnd=m.colStart+v-1,r[i].push(m),u+=v,v});return f}n(e,0);for(var a=r.length,o=function(c){r[c].forEach(function(i){!("rowSpan"in i)&&!i.hasSubColumns&&(i.rowSpan=a-c)})},l=0;l<a;l+=1)o(l);return r}function yr(e){var r=e.stickyOffsets,n=e.columns,a=e.flattenColumns,o=e.onHeaderRow,l=Z(te,["prefixCls","getComponent"]),s=l.prefixCls,c=l.getComponent,i=t.useMemo(function(){return Cr(n)},[n]),u=c(["header","wrapper"],"thead"),f=c(["header","row"],"tr"),d=c(["header","cell"],"th"),m=c(["header","cell"],"td");return t.createElement(u,{className:"".concat(s,"-thead")},i.map(function(v,x){var w=t.createElement(dt,{key:x,flattenColumns:a,cells:v,stickyOffsets:r,rowComponent:f,cellComponent:d,tdCellComponent:m,onHeaderRow:o,index:x});return w}))}const Xn=He(yr);function Dn(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return typeof r=="number"?r:r.endsWith("%")?e*parseFloat(r)/100:null}function hr(e,r,n){return t.useMemo(function(){if(r&&r>0){var a=0,o=0;e.forEach(function(m){var v=Dn(r,m.width);v?a+=v:o+=1});var l=Math.max(r-a,o),s=o,c=l/o,i=0,u=e.map(function(m){var v=h({},m),x=Dn(r,v.width);if(x)v.width=x;else{var w=Math.floor(c);v.width=s===1?l:w,l-=w,s-=1}return i+=v.width,v}),f=Math.max(r,n);if(i<f){var d=f/i;l=f,u.forEach(function(m,v){var x=Math.floor(m.width*d);m.width=v===u.length-1?l:x,l-=x})}return[u,Math.max(i,f)]}return[e,r]},[e,r,n])}var gr=["children"],Rr=["fixed"];function ft(e){return Wt(e).filter(function(r){return t.isValidElement(r)}).map(function(r){var n=r.key,a=r.props,o=a.children,l=Ne(a,gr),s=h({key:n},l);return o&&(s.children=ft(o)),s})}function on(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"key";return e.filter(function(n){return n&&Ie(n)==="object"}).reduce(function(n,a,o){var l=a.fixed,s=l===!0?"left":l,c="".concat(r,"-").concat(o),i=a.children;return i&&i.length>0?[].concat(me(n),me(on(i,c).map(function(u){return h({fixed:s},u)}))):[].concat(me(n),[h(h({key:c},a),{},{fixed:s})])},[])}function wr(e){return e.map(function(r){var n=r.fixed,a=Ne(r,Rr),o=n;return n==="left"?o="right":n==="right"&&(o="left"),h({fixed:o},a)})}function Sr(e,r){var n=e.prefixCls,a=e.columns,o=e.children,l=e.expandable,s=e.expandedKeys,c=e.columnTitle,i=e.getRowKey,u=e.onTriggerExpand,f=e.expandIcon,d=e.rowExpandable,m=e.expandIconColumnIndex,v=e.direction,x=e.expandRowByClick,w=e.columnWidth,y=e.fixed,b=e.scrollWidth,g=e.clientWidth,E=t.useMemo(function(){return a||ft(o)},[a,o]),I=t.useMemo(function(){if(l){var R,C=E.slice();if(!C.includes(Ee)){var p=m||0;p>=0&&C.splice(p,0,Ee)}var S=C.indexOf(Ee);C=C.filter(function(_,A){return _!==Ee||A===S});var P=E[S],T;(y==="left"||y)&&!m?T="left":(y==="right"||y)&&m===E.length?T="right":T=P?P.fixed:null;var k=(R={},K(R,ct,{className:"".concat(n,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),K(R,"title",c),K(R,"fixed",T),K(R,"className","".concat(n,"-row-expand-icon-cell")),K(R,"width",w),K(R,"render",function(A,G,D){var ue=i(G,D),Ce=s.has(ue),re=d?d(G):!0,W=f({prefixCls:n,expanded:Ce,expandable:re,record:G,onExpand:u});return x?t.createElement("span",{onClick:function(ee){return ee.stopPropagation()}},W):W}),R);return C.map(function(_){return _===Ee?k:_})}return E.filter(function(_){return _!==Ee})},[l,E,i,s,f,v]),N=t.useMemo(function(){var R=I;return r&&(R=r(R)),R.length||(R=[{render:function(){return null}}]),R},[r,I,v]),L=t.useMemo(function(){return v==="rtl"?wr(on(N)):on(N)},[N,v,b]),F=hr(L,b,g),B=X(F,2),H=B[0],O=B[1];return[N,H,O]}function Er(e){var r,n=e.prefixCls,a=e.record,o=e.onExpand,l=e.expanded,s=e.expandable,c="".concat(n,"-row-expand-icon");if(!s)return t.createElement("span",{className:Y(c,"".concat(n,"-row-spaced"))});var i=function(f){o(a,f),f.stopPropagation()};return t.createElement("span",{className:Y(c,(r={},K(r,"".concat(n,"-row-expanded"),l),K(r,"".concat(n,"-row-collapsed"),!l),r)),onClick:i})}function Nr(e,r,n){var a=[];function o(l){(l||[]).forEach(function(s,c){a.push(r(s,c)),o(s[n])})}return o(e),a}function br(e,r,n){var a=vr(e),o=a.expandIcon,l=a.expandedRowKeys,s=a.defaultExpandedRowKeys,c=a.defaultExpandAllRows,i=a.expandedRowRender,u=a.onExpand,f=a.onExpandedRowsChange,d=a.childrenColumnName,m=o||Er,v=d||"children",x=t.useMemo(function(){return i?"row":e.expandable&&e.internalHooks===je&&e.expandable.__PARENT_RENDER_ICON__||r.some(function(N){return N&&Ie(N)==="object"&&N[v]})?"nest":!1},[!!i,r]),w=t.useState(function(){return s||(c?Nr(r,n,v):[])}),y=X(w,2),b=y[0],g=y[1],E=t.useMemo(function(){return new Set(l||b||[])},[l,b]),I=t.useCallback(function(N){var L=n(N,r.indexOf(N)),F,B=E.has(L);B?(E.delete(L),F=me(E)):F=[].concat(me(E),[L]),g(F),u&&u(!B,N),f&&f(F)},[n,E,r,u,f]);return[a,x,E,m,v,I]}function kr(e,r,n,a){var o=e.map(function(l,s){return un(s,s,e,r,n,a==null?void 0:a[s])});return Yn(function(){return o},[o],function(l,s){return!Gn(l,s)})}function vt(e){var r=t.useRef(e),n=t.useState({}),a=X(n,2),o=a[1],l=t.useRef(null),s=t.useRef([]);function c(i){s.current.push(i);var u=Promise.resolve();l.current=u,u.then(function(){if(l.current===u){var f=s.current,d=r.current;s.current=[],f.forEach(function(m){r.current=m(r.current)}),l.current=null,d!==r.current&&o({})}})}return t.useEffect(function(){return function(){l.current=null}},[]),[r.current,c]}function Lr(e){var r=t.useRef(null),n=t.useRef();function a(){window.clearTimeout(n.current)}function o(s){r.current=s,a(),n.current=window.setTimeout(function(){r.current=null,n.current=void 0},100)}function l(){return r.current}return t.useEffect(function(){return a},[]),[o,l]}function Tr(){var e=t.useState(-1),r=X(e,2),n=r[0],a=r[1],o=t.useState(-1),l=X(o,2),s=l[0],c=l[1],i=t.useCallback(function(u,f){a(u),c(f)},[]);return[n,s,i]}var jn=At()?window:null;function Ir(e,r){var n=Ie(e)==="object"?e:{},a=n.offsetHeader,o=a===void 0?0:a,l=n.offsetSummary,s=l===void 0?0:l,c=n.offsetScroll,i=c===void 0?0:c,u=n.getContainer,f=u===void 0?function(){return jn}:u,d=f()||jn;return t.useMemo(function(){var m=!!e;return{isSticky:m,stickyClassName:m?"".concat(r,"-sticky-holder"):"",offsetHeader:o,offsetSummary:s,offsetScroll:i,container:d}},[i,o,s,r,d])}function Hr(e,r,n){var a=t.useMemo(function(){for(var o=[],l=[],s=0,c=0,i=0;i<r;i+=1)if(n==="rtl"){l[i]=c,c+=e[i]||0;var u=r-i-1;o[u]=s,s+=e[u]||0}else{o[i]=s,s+=e[i]||0;var f=r-i-1;l[f]=c,c+=e[f]||0}return{left:o,right:l}},[e,r,n]);return a}function Un(e){var r=e.className,n=e.children;return t.createElement("div",{className:r},n)}var _r=function(r,n){var a,o,l=r.scrollBodyRef,s=r.onScroll,c=r.offsetScroll,i=r.container,u=Z(te,"prefixCls"),f=((a=l.current)===null||a===void 0?void 0:a.scrollWidth)||0,d=((o=l.current)===null||o===void 0?void 0:o.clientWidth)||0,m=f&&d*(d/f),v=t.useRef(),x=vt({scrollLeft:0,isHiddenScrollBar:!1}),w=X(x,2),y=w[0],b=w[1],g=t.useRef({delta:0,x:0}),E=t.useState(!1),I=X(E,2),N=I[0],L=I[1],F=function(){L(!1)},B=function(p){p.persist(),g.current.delta=p.pageX-y.scrollLeft,g.current.x=0,L(!0),p.preventDefault()},H=function(p){var S,P=p||((S=window)===null||S===void 0?void 0:S.event),T=P.buttons;if(!N||T===0){N&&L(!1);return}var k=g.current.x+p.pageX-g.current.x-g.current.delta;k<=0&&(k=0),k+m>=d&&(k=d-m),s({scrollLeft:k/d*(f+2)}),g.current.x=p.pageX},O=function(){if(l.current){var p=$n(l.current).top,S=p+l.current.offsetHeight,P=i===window?document.documentElement.scrollTop+window.innerHeight:$n(i).top+i.clientHeight;S-On()<=P||p>=P-c?b(function(T){return h(h({},T),{},{isHiddenScrollBar:!0})}):b(function(T){return h(h({},T),{},{isHiddenScrollBar:!1})})}},R=function(p){b(function(S){return h(h({},S),{},{scrollLeft:p/f*d||0})})};return t.useImperativeHandle(n,function(){return{setScrollLeft:R}}),t.useEffect(function(){var C=Xe(document.body,"mouseup",F,!1),p=Xe(document.body,"mousemove",H,!1);return O(),function(){C.remove(),p.remove()}},[m,N]),t.useEffect(function(){var C=Xe(i,"scroll",O,!1),p=Xe(window,"resize",O,!1);return function(){C.remove(),p.remove()}},[i]),t.useEffect(function(){y.isHiddenScrollBar||b(function(C){var p=l.current;return p?h(h({},C),{},{scrollLeft:p.scrollLeft/p.scrollWidth*p.clientWidth}):C})},[y.isHiddenScrollBar]),f<=d||!m||y.isHiddenScrollBar?null:t.createElement("div",{style:{height:On(),width:d,bottom:c},className:"".concat(u,"-sticky-scroll")},t.createElement("div",{onMouseDown:B,ref:v,className:Y("".concat(u,"-sticky-scroll-bar"),K({},"".concat(u,"-sticky-scroll-bar-active"),N)),style:{width:"".concat(m,"px"),transform:"translate3d(".concat(y.scrollLeft,"px, 0, 0)")}}))};const Mr=t.forwardRef(_r);function Pr(e){return null}function Kr(e){return null}var mt="rc-table",Fr=[],Br={};function Or(){return"No Data"}function $r(e){var r,n=h({rowKey:"key",prefixCls:mt,emptyText:Or},e),a=n.prefixCls,o=n.className,l=n.rowClassName,s=n.style,c=n.data,i=n.rowKey,u=n.scroll,f=n.tableLayout,d=n.direction,m=n.title,v=n.footer,x=n.summary,w=n.caption,y=n.id,b=n.showHeader,g=n.components,E=n.emptyText,I=n.onRow,N=n.onHeaderRow,L=n.internalHooks,F=n.transformColumns,B=n.internalRefs,H=n.tailor,O=n.getContainerWidth,R=n.sticky,C=c||Fr,p=!!C.length,S=L===je,P=t.useCallback(function(M,z){return qn(g,M)||z},[g]),T=t.useMemo(function(){return typeof i=="function"?i:function(M){var z=M&&M[i];return z}},[i]),k=P(["body"]),_=Tr(),A=X(_,3),G=A[0],D=A[1],ue=A[2],Ce=br(n,C,T),re=X(Ce,6),W=re[0],j=re[1],ee=re[2],pe=re[3],de=re[4],xe=re[5],le=u==null?void 0:u.x,q=t.useState(0),V=X(q,2),J=V[0],ye=V[1],Me=Sr(h(h(h({},n),W),{},{expandable:!!W.expandedRowRender,columnTitle:W.columnTitle,expandedKeys:ee,getRowKey:T,onTriggerExpand:xe,expandIcon:pe,expandIconColumnIndex:W.expandIconColumnIndex,direction:d,scrollWidth:S&&H&&typeof le=="number"?le:null,clientWidth:J}),S?F:null),ke=X(Me,3),ae=ke[0],$=ke[1],he=ke[2],oe=he??le,fe=t.useMemo(function(){return{columns:ae,flattenColumns:$}},[ae,$]),ge=t.useRef(),Se=t.useRef(),U=t.useRef(),dn=t.useRef(),fn=t.useRef(),Ct=t.useState(!1),vn=X(Ct,2),yt=vn[0],Fe=vn[1],ht=t.useState(!1),mn=X(ht,2),gt=mn[0],Be=mn[1],Rt=vt(new Map),pn=X(Rt,2),wt=pn[0],St=pn[1],Et=Ue($),xn=Et.map(function(M){return wt.get(M)}),Cn=t.useMemo(function(){return xn},[xn.join("_")]),Oe=Hr(Cn,$.length,d),ie=u&&an(u.y),ve=u&&an(oe)||!!W.fixed,Pe=ve&&$.some(function(M){var z=M.fixed;return z}),yn=t.useRef(),Le=Ir(R,a),Re=Le.isSticky,Nt=Le.offsetHeader,bt=Le.offsetSummary,kt=Le.offsetScroll,Lt=Le.stickyClassName,Tt=Le.container,ce=t.useMemo(function(){return x==null?void 0:x(C)},[x,C]),Ke=(ie||Re)&&t.isValidElement(ce)&&ce.type===Ve&&ce.props.fixed,Ye,$e,Ge;ie&&($e={overflowY:"scroll",maxHeight:u.y}),ve&&(Ye={overflowX:"auto"},ie||($e={overflowY:"hidden"}),Ge={width:oe===!0?"auto":oe,minWidth:"100%"});var hn=t.useCallback(function(M,z){Xt(ge.current)&&St(function(se){if(se.get(M)!==z){var ne=new Map(se);return ne.set(M,z),ne}return se})},[]),It=Lr(),gn=X(It,2),Ht=gn[0],Rn=gn[1];function ze(M,z){z&&(typeof z=="function"?z(M):z.scrollLeft!==M&&(z.scrollLeft=M,z.scrollLeft!==M&&setTimeout(function(){z.scrollLeft=M},0)))}var Te=Jn(function(M){var z=M.currentTarget,se=M.scrollLeft,ne=d==="rtl",we=typeof se=="number"?se:z.scrollLeft,Fn=z||Br;if(!Rn()||Rn()===Fn){var en;Ht(Fn),ze(we,Se.current),ze(we,U.current),ze(we,fn.current),ze(we,(en=yn.current)===null||en===void 0?void 0:en.setScrollLeft)}var nn=z||Se.current;if(nn){var tn=nn.scrollWidth,rn=nn.clientWidth;if(tn===rn){Fe(!1),Be(!1);return}ne?(Fe(-we<tn-rn),Be(-we>0)):(Fe(we>0),Be(we<tn-rn))}}),wn=function(){ve&&U.current?Te({currentTarget:U.current}):(Fe(!1),Be(!1))},_t=function(z){var se=z.width,ne=ge.current?ge.current.offsetWidth:se;S&&O&&ge.current&&(ne=O(ge.current,ne)||ne),ne!==J&&(wn(),ye(ne))},Sn=t.useRef(!1);t.useEffect(function(){Sn.current&&wn()},[ve,c,ae.length]),t.useEffect(function(){Sn.current=!0},[]);var Mt=t.useState(0),En=X(Mt,2),We=En[0],Nn=En[1],Pt=t.useState(!0),bn=X(Pt,2),kn=bn[0],Kt=bn[1];t.useEffect(function(){(!H||!S)&&(U.current instanceof Element?Nn(zn(U.current).width):Nn(zn(dn.current).width)),Kt(Dt("position","sticky"))},[]),t.useEffect(function(){S&&B&&(B.body.current=U.current)});var Ft=t.useCallback(function(M){return t.createElement(t.Fragment,null,t.createElement(Xn,M),Ke==="top"&&t.createElement(De,M,ce))},[Ke,ce]),Bt=t.useCallback(function(M){return t.createElement(De,M,ce)},[ce]),Ln=P(["table"],"table"),Ae=t.useMemo(function(){return f||(Pe?oe==="max-content"?"auto":"fixed":ie||Re||$.some(function(M){var z=M.ellipsis;return z})?"fixed":"auto")},[ie,Pe,$,f,Re]),qe,Je={colWidths:Cn,columCount:$.length,stickyOffsets:Oe,onHeaderRow:N,fixHeader:ie,scroll:u},Tn=t.useMemo(function(){return p?null:typeof E=="function"?E():E},[p,E]),In=t.createElement(dr,{data:C,measureColumnWidth:ie||ve||Re}),Hn=t.createElement(st,{colWidths:$.map(function(M){var z=M.width;return z}),columns:$}),_n=w!=null?t.createElement("caption",{className:"".concat(a,"-caption")},w):void 0,Ot=Wn(n,{data:!0}),Mn=Wn(n,{aria:!0});if(ie||Re){var Qe;typeof k=="function"?(Qe=k(C,{scrollbarSize:We,ref:U,onScroll:Te}),Je.colWidths=$.map(function(M,z){var se=M.width,ne=z===$.length-1?se-We:se;return typeof ne=="number"&&!Number.isNaN(ne)?ne:0})):Qe=t.createElement("div",{style:h(h({},Ye),$e),onScroll:Te,ref:U,className:Y("".concat(a,"-body"))},t.createElement(Ln,Q({style:h(h({},Ge),{},{tableLayout:Ae})},Mn),_n,Hn,In,!Ke&&ce&&t.createElement(De,{stickyOffsets:Oe,flattenColumns:$,columns:ae},ce)));var Pn=h(h(h({noData:!C.length,maxContentScroll:ve&&oe==="max-content"},Je),fe),{},{direction:d,stickyClassName:Lt,onScroll:Te});qe=t.createElement(t.Fragment,null,b!==!1&&t.createElement(An,Q({},Pn,{stickyTopOffset:Nt,className:"".concat(a,"-header"),ref:Se}),Ft),Qe,Ke&&Ke!=="top"&&t.createElement(An,Q({},Pn,{stickyBottomOffset:bt,className:"".concat(a,"-summary"),ref:fn}),Bt),Re&&U.current&&U.current instanceof Element&&t.createElement(Mr,{ref:yn,offsetScroll:kt,scrollBodyRef:U,onScroll:Te,container:Tt}))}else qe=t.createElement("div",{style:h(h({},Ye),$e),className:Y("".concat(a,"-content")),onScroll:Te,ref:U},t.createElement(Ln,Q({style:h(h({},Ge),{},{tableLayout:Ae})},Mn),_n,Hn,b!==!1&&t.createElement(Xn,Q({},Je,fe)),In,ce&&t.createElement(De,{stickyOffsets:Oe,flattenColumns:$,columns:ae},ce)));var Ze=t.createElement("div",Q({className:Y(a,o,(r={},K(r,"".concat(a,"-rtl"),d==="rtl"),K(r,"".concat(a,"-ping-left"),yt),K(r,"".concat(a,"-ping-right"),gt),K(r,"".concat(a,"-layout-fixed"),f==="fixed"),K(r,"".concat(a,"-fixed-header"),ie),K(r,"".concat(a,"-fixed-column"),Pe),K(r,"".concat(a,"-scroll-horizontal"),ve),K(r,"".concat(a,"-has-fix-left"),$[0]&&$[0].fixed),K(r,"".concat(a,"-has-fix-right"),$[$.length-1]&&$[$.length-1].fixed==="right"),r)),style:s,id:y,ref:ge},Ot),m&&t.createElement(Un,{className:"".concat(a,"-title")},m(C)),t.createElement("div",{ref:dn,className:"".concat(a,"-container")},qe),v&&t.createElement(Un,{className:"".concat(a,"-footer")},v(C)));ve&&(Ze=t.createElement(cn,{onResize:_t},Ze));var Kn=kr($,Oe,d,ae),$t=t.useMemo(function(){return{scrollX:oe,prefixCls:a,getComponent:P,scrollbarSize:We,direction:d,fixedInfoList:Kn,isSticky:Re,supportSticky:kn,componentWidth:J,fixHeader:ie,fixColumn:Pe,horizonScroll:ve,tableLayout:Ae,rowClassName:l,expandedRowClassName:W.expandedRowClassName,expandIcon:pe,expandableType:j,expandRowByClick:W.expandRowByClick,expandedRowRender:W.expandedRowRender,onTriggerExpand:xe,expandIconColumnIndex:W.expandIconColumnIndex,indentSize:W.indentSize,allColumnsFixedLeft:$.every(function(M){return M.fixed==="left"}),emptyNode:Tn,columns:ae,flattenColumns:$,onColumnResize:hn,hoverStartRow:G,hoverEndRow:D,onHover:ue,rowExpandable:W.rowExpandable,onRow:I,getRowKey:T,expandedKeys:ee,childrenColumnName:de}},[oe,a,P,We,d,Kn,Re,kn,J,ie,Pe,ve,Ae,l,W.expandedRowClassName,pe,j,W.expandRowByClick,W.expandedRowRender,xe,W.expandIconColumnIndex,W.indentSize,Tn,ae,$,hn,G,D,ue,W.rowExpandable,I,T,ee,de]);return t.createElement(te.Provider,{value:$t},Ze)}function zr(e){return Qn($r,e)}var _e=zr();_e.EXPAND_COLUMN=Ee;_e.INTERNAL_HOOKS=je;_e.Column=Pr;_e.ColumnGroup=Kr;_e.Summary=ir;var pt=ln(null),xt=ln(null);function Wr(e,r,n){var a=r||1;return n[e+a]-(n[e]||0)}function Ar(e){var r=e.rowInfo,n=e.column,a=e.colIndex,o=e.indent,l=e.index,s=e.renderIndex,c=e.record,i=e.style,u=e.className,f=e.inverse,d=e.getHeight,m=n.render,v=n.dataIndex,x=n.className,w=n.width,y=Z(xt,["columnsOffset"]),b=y.columnsOffset,g=ot(r,n,a,o,l),E=g.key,I=g.fixedInfo,N=g.appendCellNode,L=g.additionalCellProps,F=L.style,B=L.colSpan,H=B===void 0?1:B,O=L.rowSpan,R=O===void 0?1:O,C=a-1,p=Wr(C,H,b),S=H>1?w-p:0,P=h(h(h({},F),i),{},{flex:"0 0 ".concat(p,"px"),width:"".concat(p,"px"),marginRight:S,pointerEvents:"auto"}),T=t.useMemo(function(){return f?R<=1:H===0||R===0||R>1},[R,H,f]);T?P.visibility="hidden":f&&(P.height=d==null?void 0:d(R));var k=T?function(){return null}:m,_={};return(R===0||H===0)&&(_.rowSpan=1,_.colSpan=1),t.createElement(be,Q({className:Y(x,u),ellipsis:n.ellipsis,align:n.align,scope:n.rowScope,component:"div",prefixCls:r.prefixCls,key:E,record:c,index:l,renderIndex:s,dataIndex:v,render:k,shouldCellUpdate:n.shouldCellUpdate},I,{appendNode:N,additionalProps:h(h({},L),{},{style:P},_)}))}var Xr=["data","index","className","rowKey","style","extra","getHeight"],Dr=t.forwardRef(function(e,r){var n=e.data,a=e.index,o=e.className,l=e.rowKey,s=e.style,c=e.extra,i=e.getHeight,u=Ne(e,Xr),f=n.record,d=n.indent,m=n.index,v=Z(te,["prefixCls","flattenColumns","fixColumn","componentWidth","scrollX"]),x=v.scrollX,w=v.flattenColumns,y=v.prefixCls,b=v.fixColumn,g=v.componentWidth,E=rt(f,l,a,d),I=E.rowSupportExpand,N=E.expanded,L=E.rowProps,F=E.expandedRowRender,B=E.expandedRowClassName,H;if(I&&N){var O=F(f,a,d+1,N),R=B==null?void 0:B(f,a,d),C={};b&&(C={style:K({},"--virtual-width","".concat(g,"px"))});var p="".concat(y,"-expanded-row-cell");H=t.createElement("div",{className:Y("".concat(y,"-expanded-row"),"".concat(y,"-expanded-row-level-").concat(d+1),R)},t.createElement(be,{component:"div",prefixCls:y,className:Y(p,K({},"".concat(p,"-fixed"),b)),additionalProps:C},O))}var S=h(h({},s),{},{width:x});c&&(S.position="absolute",S.pointerEvents="none");var P=t.createElement("div",Q({},L,u,{ref:I?null:r,className:Y(o,"".concat(y,"-row"),L==null?void 0:L.className,K({},"".concat(y,"-row-extra"),c)),style:h(h({},S),L==null?void 0:L.style)}),w.map(function(T,k){return t.createElement(Ar,{key:k,rowInfo:E,column:T,colIndex:k,indent:d,index:a,renderIndex:m,record:f,inverse:c,getHeight:i})}));return I?t.createElement("div",{ref:r},P,H):P}),Vn=He(Dr),jr=t.forwardRef(function(e,r){var n=e.data,a=e.onScroll,o=Z(te,["flattenColumns","onColumnResize","getRowKey","prefixCls","expandedKeys","childrenColumnName","emptyNode","scrollX"]),l=o.flattenColumns,s=o.onColumnResize,c=o.getRowKey,i=o.expandedKeys,u=o.prefixCls,f=o.childrenColumnName,d=o.emptyNode,m=o.scrollX,v=Z(pt),x=v.sticky,w=v.scrollY,y=v.listItemHeight,b=t.useRef(),g=tt(n,f,i,c),E=t.useMemo(function(){var R=0;return l.map(function(C){var p=C.width,S=C.key;return R+=p,[S,p,R]})},[l]),I=t.useMemo(function(){return E.map(function(R){return R[2]})},[E]);t.useEffect(function(){E.forEach(function(R){var C=X(R,2),p=C[0],S=C[1];s(p,S)})},[E]),t.useImperativeHandle(r,function(){var R={};return Object.defineProperty(R,"scrollLeft",{get:function(){var p;return((p=b.current)===null||p===void 0?void 0:p.getScrollInfo().x)||0},set:function(p){var S;(S=b.current)===null||S===void 0||S.scrollTo({left:p})}}),R});var N=function(C,p){var S,P=(S=g[p])===null||S===void 0?void 0:S.record,T=C.onCell;if(T){var k,_=T(P,p);return(k=_==null?void 0:_.rowSpan)!==null&&k!==void 0?k:1}return 1},L=function(C){var p=C.start,S=C.end,P=C.getSize,T=C.offsetY;if(S<0)return null;for(var k=l.filter(function(q){return N(q,p)===0}),_=p,A=function(V){if(k=k.filter(function(J){return N(J,V)===0}),!k.length)return _=V,"break"},G=p;G>=0;G-=1){var D=A(G);if(D==="break")break}for(var ue=l.filter(function(q){return N(q,S)!==1}),Ce=S,re=function(V){if(ue=ue.filter(function(J){return N(J,V)!==1}),!ue.length)return Ce=Math.max(V-1,S),"break"},W=S;W<g.length;W+=1){var j=re(W);if(j==="break")break}for(var ee=[],pe=function(V){var J=g[V];if(!J)return"continue";l.some(function(ye){return N(ye,V)>1})&&ee.push(V)},de=_;de<=Ce;de+=1)var xe=pe(de);var le=ee.map(function(q){var V=g[q],J=c(V.record,q),ye=function(ae){var $=q+ae-1,he=c(g[$].record,$),oe=P(J,he);return oe.bottom-oe.top},Me=P(J);return t.createElement(Vn,{key:q,data:V,rowKey:J,index:q,style:{top:-T+Me.top},extra:!0,getHeight:ye})});return le},F=t.useMemo(function(){return{columnsOffset:I}},[I]),B="".concat(u,"-tbody"),H;if(g.length){var O={};x&&(O.position="sticky",O.bottom=0,Ie(x)==="object"&&x.offsetScroll&&(O.bottom=x.offsetScroll)),H=t.createElement(jt,{fullHeight:!1,ref:b,styles:{horizontalScrollBar:O},className:Y(B,"".concat(B,"-virtual")),height:w,itemHeight:y||24,data:g,itemKey:function(C){return c(C.record)},scrollWidth:m,onVirtualScroll:function(C){var p=C.x;a({scrollLeft:p})},extraRender:L},function(R,C,p){var S=c(R.record,C);return t.createElement(Vn,Q({data:R,rowKey:S,index:C},p))})}else H=t.createElement("div",{className:Y("".concat(u,"-placeholder"))},t.createElement(be,{component:"div",prefixCls:u},d));return t.createElement(xt.Provider,{value:F},H)}),Ur=He(jr),Vr=function(r,n){var a=n.ref,o=n.onScroll;return t.createElement(Ur,{ref:a,data:r,onScroll:o})};function Yr(e){var r=e.columns,n=e.scroll,a=e.sticky,o=e.prefixCls,l=o===void 0?mt:o,s=e.className,c=e.listItemHeight,i=n||{},u=i.x,f=i.y;typeof u!="number"&&(u=1),typeof f!="number"&&(f=500);var d=t.useMemo(function(){return{sticky:a,scrollY:f,listItemHeight:c}},[a,f,c]);return t.createElement(pt.Provider,{value:d},t.createElement(_e,Q({},e,{className:Y(s,"".concat(l,"-virtual")),scroll:h(h({},n),{},{x:u}),components:{body:Vr},columns:r,internalHooks:je,tailor:!0})))}function Gr(e){return Qn(Yr,e)}Gr();export{Ee as E,ir as F,ct as I,Gr as a,je as b,ft as c,zr as g};
