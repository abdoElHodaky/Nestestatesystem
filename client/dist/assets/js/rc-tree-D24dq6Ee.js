import{d as Te,f as ne,e as $,h as ke,b as w,g as j,i as We,j as qe,a as Ve,m as Y,_ as ze,c as te,o as Ye}from"./@babel-Ci6hP7BZ.js";import{c as B}from"./classnames-BKZqXhpQ.js";import{b as X,y as dt,z as st,t as Xe,a as Je,K as ie}from"./rc-util-Cy3Pomc3.js";import{r as N}from"./react-B7hHFfZl.js";import{L as lt}from"./rc-virtual-list-D1YDcMmO.js";import{C as ct}from"./rc-motion-DYHhVQGW.js";function F(r,d){return r[d]}var ut=["children"];function Qe(r,d){return"".concat(r,"-").concat(d)}function ft(r){return r&&r.type&&r.type.isTreeNode}function pe(r,d){return r??d}function Ke(r){var d=r||{},v=d.title,e=d._title,o=d.key,l=d.children,g=v||"title";return{title:g,_title:e||[g],key:o||"key",children:l||"children"}}function vt(r){function d(v){var e=dt(v);return e.map(function(o){if(!ft(o))return X(!o,"Tree/TreeNode can only accept TreeNode as children."),null;var l=o.key,g=o.props,t=g.children,n=ke(g,ut),a=$({key:l},n),i=d(t);return i.length&&(a.children=i),a}).filter(function(o){return o})}return d(r)}function be(r,d,v){var e=Ke(v),o=e._title,l=e.key,g=e.children,t=new Set(d===!0?[]:d),n=[];function a(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return i.map(function(c,f){for(var p=Qe(s?s.pos:"0",f),h=pe(c[l],p),y,u=0;u<o.length;u+=1){var K=o[u];if(c[K]!==void 0){y=c[K];break}}var k=$($({},st(c,[].concat(ne(o),[l,g]))),{},{title:y,key:h,parent:s,pos:p,children:null,data:c,isStart:[].concat(ne(s?s.isStart:[]),[f===0]),isEnd:[].concat(ne(s?s.isEnd:[]),[f===i.length-1])});return n.push(k),d===!0||t.has(h)?k.children=a(c[g]||[],k):k.children=[],k})}return a(r),n}function pt(r,d,v){var e={};Te(v)==="object"?e=v:e={externalGetKey:v},e=e||{};var o=e,l=o.childrenPropName,g=o.externalGetKey,t=o.fieldNames,n=Ke(t),a=n.key,i=n.children,s=l||i,c;g?typeof g=="string"?c=function(h){return h[g]}:typeof g=="function"&&(c=function(h){return g(h)}):c=function(h,y){return pe(h[a],y)};function f(p,h,y,u){var K=p?p[s]:r,k=p?Qe(y.pos,h):"0",m=p?[].concat(ne(u),[p]):[];if(p){var x=c(p,k),C={node:p,index:h,pos:k,key:x,parentPos:y.node?y.pos:null,level:y.level+1,nodes:m};d(C)}K&&K.forEach(function(D,b){f(D,b,{node:p,pos:k,level:y?y.level+1:-1},m)})}f(null)}function gt(r){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=d.initWrapper,e=d.processEntity,o=d.onProcessFinished,l=d.externalGetKey,g=d.childrenPropName,t=d.fieldNames,n=arguments.length>2?arguments[2]:void 0,a=l||n,i={},s={},c={posEntities:i,keyEntities:s};return v&&(c=v(c)||c),pt(r,function(f){var p=f.node,h=f.index,y=f.pos,u=f.key,K=f.parentPos,k=f.level,m=f.nodes,x={node:p,nodes:m,index:h,key:u,pos:y,level:k},C=pe(u,y);i[y]=x,s[C]=x,x.parent=i[K],x.parent&&(x.parent.children=x.parent.children||[],x.parent.children.push(x)),e&&e(x,c)},{externalGetKey:a,childrenPropName:g,fieldNames:t}),o&&o(c),c}function fe(r,d){var v=d.expandedKeys,e=d.selectedKeys,o=d.loadedKeys,l=d.loadingKeys,g=d.checkedKeys,t=d.halfCheckedKeys,n=d.dragOverNodeKey,a=d.dropPosition,i=d.keyEntities,s=F(i,r),c={eventKey:r,expanded:v.indexOf(r)!==-1,selected:e.indexOf(r)!==-1,loaded:o.indexOf(r)!==-1,loading:l.indexOf(r)!==-1,checked:g.indexOf(r)!==-1,halfChecked:t.indexOf(r)!==-1,pos:String(s?s.pos:""),dragOver:n===r&&a===0,dragOverGapTop:n===r&&a===-1,dragOverGapBottom:n===r&&a===1};return c}function M(r){var d=r.data,v=r.expanded,e=r.selected,o=r.checked,l=r.loaded,g=r.loading,t=r.halfChecked,n=r.dragOver,a=r.dragOverGapTop,i=r.dragOverGapBottom,s=r.pos,c=r.active,f=r.eventKey,p=$($({},d),{},{expanded:v,selected:e,checked:o,loaded:l,loading:g,halfChecked:t,dragOver:n,dragOverGapTop:a,dragOverGapBottom:i,pos:s,active:c,key:f});return"props"in p||Object.defineProperty(p,"props",{get:function(){return X(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),r}}),p}function Ze(r,d){var v=new Set;return r.forEach(function(e){d.has(e)||v.add(e)}),v}function ht(r){var d=r||{},v=d.disabled,e=d.disableCheckbox,o=d.checkable;return!!(v||e)||o===!1}function yt(r,d,v,e){for(var o=new Set(r),l=new Set,g=0;g<=v;g+=1){var t=d.get(g)||new Set;t.forEach(function(s){var c=s.key,f=s.node,p=s.children,h=p===void 0?[]:p;o.has(c)&&!e(f)&&h.filter(function(y){return!e(y.node)}).forEach(function(y){o.add(y.key)})})}for(var n=new Set,a=v;a>=0;a-=1){var i=d.get(a)||new Set;i.forEach(function(s){var c=s.parent,f=s.node;if(!(e(f)||!s.parent||n.has(s.parent.key))){if(e(s.parent.node)){n.add(c.key);return}var p=!0,h=!1;(c.children||[]).filter(function(y){return!e(y.node)}).forEach(function(y){var u=y.key,K=o.has(u);p&&!K&&(p=!1),!h&&(K||l.has(u))&&(h=!0)}),p&&o.add(c.key),h&&l.add(c.key),n.add(c.key)}})}return{checkedKeys:Array.from(o),halfCheckedKeys:Array.from(Ze(l,o))}}function Kt(r,d,v,e,o){for(var l=new Set(r),g=new Set(d),t=0;t<=e;t+=1){var n=v.get(t)||new Set;n.forEach(function(c){var f=c.key,p=c.node,h=c.children,y=h===void 0?[]:h;!l.has(f)&&!g.has(f)&&!o(p)&&y.filter(function(u){return!o(u.node)}).forEach(function(u){l.delete(u.key)})})}g=new Set;for(var a=new Set,i=e;i>=0;i-=1){var s=v.get(i)||new Set;s.forEach(function(c){var f=c.parent,p=c.node;if(!(o(p)||!c.parent||a.has(c.parent.key))){if(o(c.parent.node)){a.add(f.key);return}var h=!0,y=!1;(f.children||[]).filter(function(u){return!o(u.node)}).forEach(function(u){var K=u.key,k=l.has(K);h&&!k&&(h=!1),!y&&(k||g.has(K))&&(y=!0)}),h||l.delete(f.key),y&&g.add(f.key),a.add(f.key)}})}return{checkedKeys:Array.from(l),halfCheckedKeys:Array.from(Ze(g,l))}}function De(r,d,v,e){var o=[],l;e?l=e:l=ht;var g=new Set(r.filter(function(i){var s=!!F(v,i);return s||o.push(i),s})),t=new Map,n=0;Object.keys(v).forEach(function(i){var s=v[i],c=s.level,f=t.get(c);f||(f=new Set,t.set(c,f)),f.add(s),n=Math.max(n,c)}),X(!o.length,"Tree missing follow keys: ".concat(o.slice(0,100).map(function(i){return"'".concat(i,"'")}).join(", ")));var a;return d===!0?a=yt(g,t,n,l):a=Kt(g,d.halfCheckedKeys,t,n,l),a}var Oe=N.createContext(null);function kt(r){var d=r.dropPosition,v=r.dropLevelOffset,e=r.indent,o={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(d){case-1:o.top=0,o.left=-v*e;break;case 1:o.bottom=0,o.left=-v*e;break;case 0:o.bottom=0,o.left=e;break}return N.createElement("div",{style:o})}var mt=function(d){for(var v=d.prefixCls,e=d.level,o=d.isStart,l=d.isEnd,g="".concat(v,"-indent-unit"),t=[],n=0;n<e;n+=1){var a;t.push(N.createElement("span",{key:n,className:B(g,(a={},w(a,"".concat(g,"-start"),o[n]),w(a,"".concat(g,"-end"),l[n]),a))}))}return N.createElement("span",{"aria-hidden":"true",className:"".concat(v,"-indent")},t)};const Nt=N.memo(mt);var xt=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],$e="open",Ie="close",Et="---",Ct=function(r){We(v,r);var d=qe(v);function v(){var e;Ve(this,v);for(var o=arguments.length,l=new Array(o),g=0;g<o;g++)l[g]=arguments[g];return e=d.call.apply(d,[this].concat(l)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.cacheIndent=void 0,e.onSelectorClick=function(t){var n=e.props.context.onNodeClick;n(t,M(e.props)),e.isSelectable()?e.onSelect(t):e.onCheck(t)},e.onSelectorDoubleClick=function(t){var n=e.props.context.onNodeDoubleClick;n(t,M(e.props))},e.onSelect=function(t){if(!e.isDisabled()){var n=e.props.context.onNodeSelect;n(t,M(e.props))}},e.onCheck=function(t){if(!e.isDisabled()){var n=e.props,a=n.disableCheckbox,i=n.checked,s=e.props.context.onNodeCheck;if(!(!e.isCheckable()||a)){var c=!i;s(t,M(e.props),c)}}},e.onMouseEnter=function(t){var n=e.props.context.onNodeMouseEnter;n(t,M(e.props))},e.onMouseLeave=function(t){var n=e.props.context.onNodeMouseLeave;n(t,M(e.props))},e.onContextMenu=function(t){var n=e.props.context.onNodeContextMenu;n(t,M(e.props))},e.onDragStart=function(t){var n=e.props.context.onNodeDragStart;t.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(t,Y(e));try{t.dataTransfer.setData("text/plain","")}catch{}},e.onDragEnter=function(t){var n=e.props.context.onNodeDragEnter;t.preventDefault(),t.stopPropagation(),n(t,Y(e))},e.onDragOver=function(t){var n=e.props.context.onNodeDragOver;t.preventDefault(),t.stopPropagation(),n(t,Y(e))},e.onDragLeave=function(t){var n=e.props.context.onNodeDragLeave;t.stopPropagation(),n(t,Y(e))},e.onDragEnd=function(t){var n=e.props.context.onNodeDragEnd;t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,Y(e))},e.onDrop=function(t){var n=e.props.context.onNodeDrop;t.preventDefault(),t.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(t,Y(e))},e.onExpand=function(t){var n=e.props,a=n.loading,i=n.context.onNodeExpand;a||i(t,M(e.props))},e.setSelectHandle=function(t){e.selectHandle=t},e.getNodeState=function(){var t=e.props.expanded;return e.isLeaf()?null:t?$e:Ie},e.hasChildren=function(){var t=e.props.eventKey,n=e.props.context.keyEntities,a=F(n,t)||{},i=a.children;return!!(i||[]).length},e.isLeaf=function(){var t=e.props,n=t.isLeaf,a=t.loaded,i=e.props.context.loadData,s=e.hasChildren();return n===!1?!1:n||!i&&!s||i&&a&&!s},e.isDisabled=function(){var t=e.props.disabled,n=e.props.context.disabled;return!!(n||t)},e.isCheckable=function(){var t=e.props.checkable,n=e.props.context.checkable;return!n||t===!1?!1:n},e.syncLoadData=function(t){var n=t.expanded,a=t.loading,i=t.loaded,s=e.props.context,c=s.loadData,f=s.onNodeLoad;a||c&&n&&!e.isLeaf()&&!e.hasChildren()&&!i&&f(M(e.props))},e.isDraggable=function(){var t=e.props,n=t.data,a=t.context.draggable;return!!(a&&(!a.nodeDraggable||a.nodeDraggable(n)))},e.renderDragHandler=function(){var t=e.props.context,n=t.draggable,a=t.prefixCls;return n!=null&&n.icon?N.createElement("span",{className:"".concat(a,"-draggable-icon")},n.icon):null},e.renderSwitcherIconDom=function(t){var n=e.props.switcherIcon,a=e.props.context.switcherIcon,i=n||a;return typeof i=="function"?i($($({},e.props),{},{isLeaf:t})):i},e.renderSwitcher=function(){var t=e.props.expanded,n=e.props.context.prefixCls;if(e.isLeaf()){var a=e.renderSwitcherIconDom(!0);return a!==!1?N.createElement("span",{className:B("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},a):null}var i=B("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(t?$e:Ie)),s=e.renderSwitcherIconDom(!1);return s!==!1?N.createElement("span",{onClick:e.onExpand,className:i},s):null},e.renderCheckbox=function(){var t=e.props,n=t.checked,a=t.halfChecked,i=t.disableCheckbox,s=e.props.context.prefixCls,c=e.isDisabled(),f=e.isCheckable();if(!f)return null;var p=typeof f!="boolean"?f:null;return N.createElement("span",{className:B("".concat(s,"-checkbox"),n&&"".concat(s,"-checkbox-checked"),!n&&a&&"".concat(s,"-checkbox-indeterminate"),(c||i)&&"".concat(s,"-checkbox-disabled")),onClick:e.onCheck},p)},e.renderIcon=function(){var t=e.props.loading,n=e.props.context.prefixCls;return N.createElement("span",{className:B("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),t&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var t=e.state.dragNodeHighlight,n=e.props,a=n.title,i=a===void 0?Et:a,s=n.selected,c=n.icon,f=n.loading,p=n.data,h=e.props.context,y=h.prefixCls,u=h.showIcon,K=h.icon,k=h.loadData,m=h.titleRender,x=e.isDisabled(),C="".concat(y,"-node-content-wrapper"),D;if(u){var b=c||K;D=b?N.createElement("span",{className:B("".concat(y,"-iconEle"),"".concat(y,"-icon__customize"))},typeof b=="function"?b(e.props):b):e.renderIcon()}else k&&f&&(D=e.renderIcon());var E;typeof i=="function"?E=i(p):m?E=m(p):E=i;var S=N.createElement("span",{className:"".concat(y,"-title")},E);return N.createElement("span",{ref:e.setSelectHandle,title:typeof i=="string"?i:"",className:B("".concat(C),"".concat(C,"-").concat(e.getNodeState()||"normal"),!x&&(s||t)&&"".concat(y,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},D,S,e.renderDropIndicator())},e.renderDropIndicator=function(){var t=e.props,n=t.disabled,a=t.eventKey,i=e.props.context,s=i.draggable,c=i.dropLevelOffset,f=i.dropPosition,p=i.prefixCls,h=i.indent,y=i.dropIndicatorRender,u=i.dragOverNodeKey,K=i.direction,k=!!s,m=!n&&k&&u===a,x=h??e.cacheIndent;return e.cacheIndent=h,m?y({dropPosition:f,dropLevelOffset:c,indent:x,prefixCls:p,direction:K}):null},e}return ze(v,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var o=this.props.selectable,l=this.props.context.selectable;return typeof o=="boolean"?o:l}},{key:"render",value:function(){var o,l=this.props,g=l.eventKey,t=l.className,n=l.style,a=l.dragOver,i=l.dragOverGapTop,s=l.dragOverGapBottom,c=l.isLeaf,f=l.isStart,p=l.isEnd,h=l.expanded,y=l.selected,u=l.checked,K=l.halfChecked,k=l.loading,m=l.domRef,x=l.active;l.data;var C=l.onMouseMove,D=l.selectable,b=ke(l,xt),E=this.props.context,S=E.prefixCls,T=E.filterTreeNode,P=E.keyEntities,O=E.dropContainerKey,R=E.dropTargetKey,I=E.draggingNodeKey,A=this.isDisabled(),_=Xe(b,{aria:!0,data:!0}),U=F(P,g)||{},de=U.level,se=p[p.length-1],H=this.isDraggable(),G=!A&&H,J=I===g,le=D!==void 0?{"aria-selected":!!D}:void 0;return N.createElement("div",j({ref:m,className:B(t,"".concat(S,"-treenode"),(o={},w(o,"".concat(S,"-treenode-disabled"),A),w(o,"".concat(S,"-treenode-switcher-").concat(h?"open":"close"),!c),w(o,"".concat(S,"-treenode-checkbox-checked"),u),w(o,"".concat(S,"-treenode-checkbox-indeterminate"),K),w(o,"".concat(S,"-treenode-selected"),y),w(o,"".concat(S,"-treenode-loading"),k),w(o,"".concat(S,"-treenode-active"),x),w(o,"".concat(S,"-treenode-leaf-last"),se),w(o,"".concat(S,"-treenode-draggable"),H),w(o,"dragging",J),w(o,"drop-target",R===g),w(o,"drop-container",O===g),w(o,"drag-over",!A&&a),w(o,"drag-over-gap-top",!A&&i),w(o,"drag-over-gap-bottom",!A&&s),w(o,"filter-node",T&&T(M(this.props))),o)),style:n,draggable:G,"aria-grabbed":J,onDragStart:G?this.onDragStart:void 0,onDragEnter:H?this.onDragEnter:void 0,onDragOver:H?this.onDragOver:void 0,onDragLeave:H?this.onDragLeave:void 0,onDrop:H?this.onDrop:void 0,onDragEnd:H?this.onDragEnd:void 0,onMouseMove:C},le,_),N.createElement(Nt,{prefixCls:S,level:de,isStart:f,isEnd:p}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),v}(N.Component),ve=function(d){return N.createElement(Oe.Consumer,null,function(v){return N.createElement(Ct,j({},d,{context:v}))})};ve.displayName="TreeNode";ve.isTreeNode=1;function bt(r,d){var v=N.useState(!1),e=te(v,2),o=e[0],l=e[1];N.useLayoutEffect(function(){if(o)return r(),function(){d()}},[o]),N.useLayoutEffect(function(){return l(!0),function(){l(!1)}},[])}var Dt=["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"],et=function(d,v){var e=d.className,o=d.style,l=d.motion,g=d.motionNodes,t=d.motionType,n=d.onMotionStart,a=d.onMotionEnd,i=d.active,s=d.treeNodeRequiredProps,c=ke(d,Dt),f=N.useState(!0),p=te(f,2),h=p[0],y=p[1],u=N.useContext(Oe),K=u.prefixCls,k=g&&t!=="hide";Je(function(){g&&k!==h&&y(k)},[g]);var m=function(){g&&n()},x=N.useRef(!1),C=function(){g&&!x.current&&(x.current=!0,a())};bt(m,C);var D=function(E){k===E&&C()};return g?N.createElement(ct,j({ref:v,visible:h},l,{motionAppear:t==="show",onVisibleChanged:D}),function(b,E){var S=b.className,T=b.style;return N.createElement("div",{ref:E,className:B("".concat(K,"-treenode-motion"),S),style:T},g.map(function(P){var O=j({},(Ye(P.data),P.data)),R=P.title,I=P.key,A=P.isStart,_=P.isEnd;delete O.children;var U=fe(I,s);return N.createElement(ve,j({},O,U,{title:R,active:i,data:P.data,key:I,isStart:A,isEnd:_}))}))}):N.createElement(ve,j({domRef:v,className:e,style:o},c,{active:i}))};et.displayName="MotionTreeNode";var St=N.forwardRef(et);function Pt(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=r.length,e=d.length;if(Math.abs(v-e)!==1)return{add:!1,key:null};function o(l,g){var t=new Map;l.forEach(function(a){t.set(a,!0)});var n=g.filter(function(a){return!t.has(a)});return n.length===1?n[0]:null}return v<e?{add:!0,key:o(r,d)}:{add:!1,key:o(d,r)}}function Ae(r,d,v){var e=r.findIndex(function(t){return t.key===v}),o=r[e+1],l=d.findIndex(function(t){return t.key===v});if(o){var g=d.findIndex(function(t){return t.key===o.key});return d.slice(l+1,g)}return d.slice(l+1)}var Tt=["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"],_e={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},Ot=function(){},ae="RC_TREE_MOTION_".concat(Math.random()),Pe={key:ae},tt={key:ae,level:0,index:0,pos:"0",node:Pe,nodes:[Pe]},Fe={parent:null,children:[],pos:tt.pos,data:Pe,title:null,key:ae,isStart:[],isEnd:[]};function He(r,d,v,e){return d===!1||!v?r:r.slice(0,Math.ceil(v/e)+1)}function Ue(r){var d=r.key,v=r.pos;return pe(d,v)}function wt(r){for(var d=String(r.data.key),v=r;v.parent;)v=v.parent,d="".concat(v.data.key," > ").concat(d);return d}var nt=N.forwardRef(function(r,d){var v=r.prefixCls,e=r.data;r.selectable,r.checkable;var o=r.expandedKeys,l=r.selectedKeys,g=r.checkedKeys,t=r.loadedKeys,n=r.loadingKeys,a=r.halfCheckedKeys,i=r.keyEntities,s=r.disabled,c=r.dragging,f=r.dragOverNodeKey,p=r.dropPosition,h=r.motion,y=r.height,u=r.itemHeight,K=r.virtual,k=r.focusable,m=r.activeItem,x=r.focused,C=r.tabIndex,D=r.onKeyDown,b=r.onFocus,E=r.onBlur,S=r.onActiveChange,T=r.onListChangeStart,P=r.onListChangeEnd,O=ke(r,Tt),R=N.useRef(null),I=N.useRef(null);N.useImperativeHandle(d,function(){return{scrollTo:function(V){R.current.scrollTo(V)},getIndentWidth:function(){return I.current.offsetWidth}}});var A=N.useState(o),_=te(A,2),U=_[0],de=_[1],se=N.useState(e),H=te(se,2),G=H[0],J=H[1],le=N.useState(e),ge=te(le,2),me=ge[0],re=ge[1],Ne=N.useState([]),he=te(Ne,2),xe=he[0],q=he[1],rt=N.useState(null),Le=te(rt,2),ot=Le[0],Ee=Le[1],Me=N.useRef(e);Me.current=e;function Ce(){var L=Me.current;J(L),re(L),q([]),Ee(null),P()}Je(function(){de(o);var L=Pt(U,o);if(L.key!==null)if(L.add){var V=G.findIndex(function(ce){var ue=ce.key;return ue===L.key}),Q=He(Ae(G,e,L.key),K,y,u),oe=G.slice();oe.splice(V+1,0,Fe),re(oe),q(Q),Ee("show")}else{var Z=e.findIndex(function(ce){var ue=ce.key;return ue===L.key}),ee=He(Ae(e,G,L.key),K,y,u),ye=e.slice();ye.splice(Z+1,0,Fe),re(ye),q(ee),Ee("hide")}else G!==e&&(J(e),re(e))},[o,e]),N.useEffect(function(){c||Ce()},[c]);var it=h?me:e,Re={expandedKeys:o,selectedKeys:l,loadedKeys:t,loadingKeys:n,checkedKeys:g,halfCheckedKeys:a,dragOverNodeKey:f,dropPosition:p,keyEntities:i};return N.createElement(N.Fragment,null,x&&m&&N.createElement("span",{style:_e,"aria-live":"assertive"},wt(m)),N.createElement("div",null,N.createElement("input",{style:_e,disabled:k===!1||s,tabIndex:k!==!1?C:null,onKeyDown:D,onFocus:b,onBlur:E,value:"",onChange:Ot,"aria-label":"for screen reader"})),N.createElement("div",{className:"".concat(v,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden",border:0,padding:0}},N.createElement("div",{className:"".concat(v,"-indent")},N.createElement("div",{ref:I,className:"".concat(v,"-indent-unit")}))),N.createElement(lt,j({},O,{data:it,itemKey:Ue,height:y,fullHeight:!1,virtual:K,itemHeight:u,prefixCls:"".concat(v,"-list"),ref:R,onVisibleChange:function(V,Q){var oe=new Set(V),Z=Q.filter(function(ee){return!oe.has(ee)});Z.some(function(ee){return Ue(ee)===ae})&&Ce()}}),function(L){var V=L.pos,Q=j({},(Ye(L.data),L.data)),oe=L.title,Z=L.key,ee=L.isStart,ye=L.isEnd,ce=pe(Z,V);delete Q.key,delete Q.children;var ue=fe(ce,Re);return N.createElement(St,j({},Q,ue,{title:oe,active:!!m&&Z===m.key,pos:V,data:L.data,isStart:ee,isEnd:ye,motion:h,motionNodes:Z===ae?xe:null,motionType:ot,onMotionStart:T,onMotionEnd:Ce,treeNodeRequiredProps:Re,onMouseMove:function(){S(null)}}))}))});nt.displayName="NodeList";function W(r,d){if(!r)return[];var v=r.slice(),e=v.indexOf(d);return e>=0&&v.splice(e,1),v}function z(r,d){var v=(r||[]).slice();return v.indexOf(d)===-1&&v.push(d),v}function we(r){return r.split("-")}function Lt(r,d){var v=[],e=F(d,r);function o(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];l.forEach(function(g){var t=g.key,n=g.children;v.push(t),o(n)})}return o(e.children),v}function Mt(r){if(r.parent){var d=we(r.pos);return Number(d[d.length-1])===r.parent.children.length-1}return!1}function Rt(r){var d=we(r.pos);return Number(d[d.length-1])===0}function Ge(r,d,v,e,o,l,g,t,n,a){var i,s=r.clientX,c=r.clientY,f=r.target.getBoundingClientRect(),p=f.top,h=f.height,y=(a==="rtl"?-1:1)*(((o==null?void 0:o.x)||0)-s),u=(y-12)/e,K=F(t,v.props.eventKey);if(c<p+h/2){var k=g.findIndex(function(I){return I.key===K.key}),m=k<=0?0:k-1,x=g[m].key;K=F(t,x)}var C=K.key,D=K,b=K.key,E=0,S=0;if(!n.includes(C))for(var T=0;T<u&&Mt(K);T+=1)K=K.parent,S+=1;var P=d.props.data,O=K.node,R=!0;return Rt(K)&&K.level===0&&c<p+h/2&&l({dragNode:P,dropNode:O,dropPosition:-1})&&K.key===v.props.eventKey?E=-1:(D.children||[]).length&&n.includes(b)?l({dragNode:P,dropNode:O,dropPosition:0})?E=0:R=!1:S===0?u>-1.5?l({dragNode:P,dropNode:O,dropPosition:1})?E=1:R=!1:l({dragNode:P,dropNode:O,dropPosition:0})?E=0:l({dragNode:P,dropNode:O,dropPosition:1})?E=1:R=!1:l({dragNode:P,dropNode:O,dropPosition:1})?E=1:R=!1,{dropPosition:E,dropLevelOffset:S,dropTargetKey:K.key,dropTargetPos:K.pos,dragOverNodeKey:b,dropContainerKey:E===0?null:((i=K.parent)===null||i===void 0?void 0:i.key)||null,dropAllowed:R}}function Be(r,d){if(r){var v=d.multiple;return v?r.slice():r.length?[r[0]]:r}}function Se(r){if(!r)return null;var d;if(Array.isArray(r))d={checkedKeys:r,halfCheckedKeys:void 0};else if(Te(r)==="object")d={checkedKeys:r.checked||void 0,halfCheckedKeys:r.halfChecked||void 0};else return X(!1,"`checkedKeys` is not an array or an object"),null;return d}function je(r,d){var v=new Set;function e(o){if(!v.has(o)){var l=F(d,o);if(l){v.add(o);var g=l.parent,t=l.node;t.disabled||g&&e(g.key)}}}return(r||[]).forEach(function(o){e(o)}),ne(v)}var $t=10,at=function(r){We(v,r);var d=qe(v);function v(){var e;Ve(this,v);for(var o=arguments.length,l=new Array(o),g=0;g<o;g++)l[g]=arguments[g];return e=d.call.apply(d,[this].concat(l)),e.destroyed=!1,e.delayedDragEnterLogic=void 0,e.loadingRetryTimes={},e.state={keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null,fieldNames:Ke()},e.dragStartMousePosition=null,e.dragNode=void 0,e.currentMouseOverDroppableNodeKey=null,e.listRef=N.createRef(),e.onNodeDragStart=function(t,n){var a=e.state,i=a.expandedKeys,s=a.keyEntities,c=e.props.onDragStart,f=n.props.eventKey;e.dragNode=n,e.dragStartMousePosition={x:t.clientX,y:t.clientY};var p=W(i,f);e.setState({draggingNodeKey:f,dragChildrenKeys:Lt(f,s),indent:e.listRef.current.getIndentWidth()}),e.setExpandedKeys(p),window.addEventListener("dragend",e.onWindowDragEnd),c==null||c({event:t,node:M(n.props)})},e.onNodeDragEnter=function(t,n){var a=e.state,i=a.expandedKeys,s=a.keyEntities,c=a.dragChildrenKeys,f=a.flattenNodes,p=a.indent,h=e.props,y=h.onDragEnter,u=h.onExpand,K=h.allowDrop,k=h.direction,m=n.props,x=m.pos,C=m.eventKey,D=Y(e),b=D.dragNode;if(e.currentMouseOverDroppableNodeKey!==C&&(e.currentMouseOverDroppableNodeKey=C),!b){e.resetDragState();return}var E=Ge(t,b,n,p,e.dragStartMousePosition,K,f,s,i,k),S=E.dropPosition,T=E.dropLevelOffset,P=E.dropTargetKey,O=E.dropContainerKey,R=E.dropTargetPos,I=E.dropAllowed,A=E.dragOverNodeKey;if(c.indexOf(P)!==-1||!I){e.resetDragState();return}if(e.delayedDragEnterLogic||(e.delayedDragEnterLogic={}),Object.keys(e.delayedDragEnterLogic).forEach(function(_){clearTimeout(e.delayedDragEnterLogic[_])}),b.props.eventKey!==n.props.eventKey&&(t.persist(),e.delayedDragEnterLogic[x]=window.setTimeout(function(){if(e.state.draggingNodeKey!==null){var _=ne(i),U=F(s,n.props.eventKey);U&&(U.children||[]).length&&(_=z(i,n.props.eventKey)),"expandedKeys"in e.props||e.setExpandedKeys(_),u==null||u(_,{node:M(n.props),expanded:!0,nativeEvent:t.nativeEvent})}},800)),b.props.eventKey===P&&T===0){e.resetDragState();return}e.setState({dragOverNodeKey:A,dropPosition:S,dropLevelOffset:T,dropTargetKey:P,dropContainerKey:O,dropTargetPos:R,dropAllowed:I}),y==null||y({event:t,node:M(n.props),expandedKeys:i})},e.onNodeDragOver=function(t,n){var a=e.state,i=a.dragChildrenKeys,s=a.flattenNodes,c=a.keyEntities,f=a.expandedKeys,p=a.indent,h=e.props,y=h.onDragOver,u=h.allowDrop,K=h.direction,k=Y(e),m=k.dragNode;if(m){var x=Ge(t,m,n,p,e.dragStartMousePosition,u,s,c,f,K),C=x.dropPosition,D=x.dropLevelOffset,b=x.dropTargetKey,E=x.dropContainerKey,S=x.dropAllowed,T=x.dropTargetPos,P=x.dragOverNodeKey;i.indexOf(b)!==-1||!S||(m.props.eventKey===b&&D===0?e.state.dropPosition===null&&e.state.dropLevelOffset===null&&e.state.dropTargetKey===null&&e.state.dropContainerKey===null&&e.state.dropTargetPos===null&&e.state.dropAllowed===!1&&e.state.dragOverNodeKey===null||e.resetDragState():C===e.state.dropPosition&&D===e.state.dropLevelOffset&&b===e.state.dropTargetKey&&E===e.state.dropContainerKey&&T===e.state.dropTargetPos&&S===e.state.dropAllowed&&P===e.state.dragOverNodeKey||e.setState({dropPosition:C,dropLevelOffset:D,dropTargetKey:b,dropContainerKey:E,dropTargetPos:T,dropAllowed:S,dragOverNodeKey:P}),y==null||y({event:t,node:M(n.props)}))}},e.onNodeDragLeave=function(t,n){e.currentMouseOverDroppableNodeKey===n.props.eventKey&&!t.currentTarget.contains(t.relatedTarget)&&(e.resetDragState(),e.currentMouseOverDroppableNodeKey=null);var a=e.props.onDragLeave;a==null||a({event:t,node:M(n.props)})},e.onWindowDragEnd=function(t){e.onNodeDragEnd(t,null,!0),window.removeEventListener("dragend",e.onWindowDragEnd)},e.onNodeDragEnd=function(t,n){var a=e.props.onDragEnd;e.setState({dragOverNodeKey:null}),e.cleanDragState(),a==null||a({event:t,node:M(n.props)}),e.dragNode=null,window.removeEventListener("dragend",e.onWindowDragEnd)},e.onNodeDrop=function(t,n){var a,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,s=e.state,c=s.dragChildrenKeys,f=s.dropPosition,p=s.dropTargetKey,h=s.dropTargetPos,y=s.dropAllowed;if(y){var u=e.props.onDrop;if(e.setState({dragOverNodeKey:null}),e.cleanDragState(),p!==null){var K=$($({},fe(p,e.getTreeNodeRequiredProps())),{},{active:((a=e.getActiveItem())===null||a===void 0?void 0:a.key)===p,data:F(e.state.keyEntities,p).node}),k=c.indexOf(p)!==-1;X(!k,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var m=we(h),x={event:t,node:M(K),dragNode:e.dragNode?M(e.dragNode.props):null,dragNodesKeys:[e.dragNode.props.eventKey].concat(c),dropToGap:f!==0,dropPosition:f+Number(m[m.length-1])};i||u==null||u(x),e.dragNode=null}}},e.cleanDragState=function(){var t=e.state.draggingNodeKey;t!==null&&e.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),e.dragStartMousePosition=null,e.currentMouseOverDroppableNodeKey=null},e.triggerExpandActionExpand=function(t,n){var a=e.state,i=a.expandedKeys,s=a.flattenNodes,c=n.expanded,f=n.key,p=n.isLeaf;if(!(p||t.shiftKey||t.metaKey||t.ctrlKey)){var h=s.filter(function(u){return u.key===f})[0],y=M($($({},fe(f,e.getTreeNodeRequiredProps())),{},{data:h.data}));e.setExpandedKeys(c?W(i,f):z(i,f)),e.onNodeExpand(t,y)}},e.onNodeClick=function(t,n){var a=e.props,i=a.onClick,s=a.expandAction;s==="click"&&e.triggerExpandActionExpand(t,n),i==null||i(t,n)},e.onNodeDoubleClick=function(t,n){var a=e.props,i=a.onDoubleClick,s=a.expandAction;s==="doubleClick"&&e.triggerExpandActionExpand(t,n),i==null||i(t,n)},e.onNodeSelect=function(t,n){var a=e.state.selectedKeys,i=e.state,s=i.keyEntities,c=i.fieldNames,f=e.props,p=f.onSelect,h=f.multiple,y=n.selected,u=n[c.key],K=!y;K?h?a=z(a,u):a=[u]:a=W(a,u);var k=a.map(function(m){var x=F(s,m);return x?x.node:null}).filter(function(m){return m});e.setUncontrolledState({selectedKeys:a}),p==null||p(a,{event:"select",selected:K,node:n,selectedNodes:k,nativeEvent:t.nativeEvent})},e.onNodeCheck=function(t,n,a){var i=e.state,s=i.keyEntities,c=i.checkedKeys,f=i.halfCheckedKeys,p=e.props,h=p.checkStrictly,y=p.onCheck,u=n.key,K,k={event:"check",node:n,checked:a,nativeEvent:t.nativeEvent};if(h){var m=a?z(c,u):W(c,u),x=W(f,u);K={checked:m,halfChecked:x},k.checkedNodes=m.map(function(T){return F(s,T)}).filter(function(T){return T}).map(function(T){return T.node}),e.setUncontrolledState({checkedKeys:m})}else{var C=De([].concat(ne(c),[u]),!0,s),D=C.checkedKeys,b=C.halfCheckedKeys;if(!a){var E=new Set(D);E.delete(u);var S=De(Array.from(E),{checked:!1,halfCheckedKeys:b},s);D=S.checkedKeys,b=S.halfCheckedKeys}K=D,k.checkedNodes=[],k.checkedNodesPositions=[],k.halfCheckedKeys=b,D.forEach(function(T){var P=F(s,T);if(P){var O=P.node,R=P.pos;k.checkedNodes.push(O),k.checkedNodesPositions.push({node:O,pos:R})}}),e.setUncontrolledState({checkedKeys:D},!1,{halfCheckedKeys:b})}y==null||y(K,k)},e.onNodeLoad=function(t){var n=t.key,a=new Promise(function(i,s){e.setState(function(c){var f=c.loadedKeys,p=f===void 0?[]:f,h=c.loadingKeys,y=h===void 0?[]:h,u=e.props,K=u.loadData,k=u.onLoad;if(!K||p.indexOf(n)!==-1||y.indexOf(n)!==-1)return null;var m=K(t);return m.then(function(){var x=e.state.loadedKeys,C=z(x,n);k==null||k(C,{event:"load",node:t}),e.setUncontrolledState({loadedKeys:C}),e.setState(function(D){return{loadingKeys:W(D.loadingKeys,n)}}),i()}).catch(function(x){if(e.setState(function(D){return{loadingKeys:W(D.loadingKeys,n)}}),e.loadingRetryTimes[n]=(e.loadingRetryTimes[n]||0)+1,e.loadingRetryTimes[n]>=$t){var C=e.state.loadedKeys;X(!1,"Retry for `loadData` many times but still failed. No more retry."),e.setUncontrolledState({loadedKeys:z(C,n)}),i()}s(x)}),{loadingKeys:z(y,n)}})});return a.catch(function(){}),a},e.onNodeMouseEnter=function(t,n){var a=e.props.onMouseEnter;a==null||a({event:t,node:n})},e.onNodeMouseLeave=function(t,n){var a=e.props.onMouseLeave;a==null||a({event:t,node:n})},e.onNodeContextMenu=function(t,n){var a=e.props.onRightClick;a&&(t.preventDefault(),a({event:t,node:n}))},e.onFocus=function(){var t=e.props.onFocus;e.setState({focused:!0});for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];t==null||t.apply(void 0,a)},e.onBlur=function(){var t=e.props.onBlur;e.setState({focused:!1}),e.onActiveChange(null);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];t==null||t.apply(void 0,a)},e.getTreeNodeRequiredProps=function(){var t=e.state,n=t.expandedKeys,a=t.selectedKeys,i=t.loadedKeys,s=t.loadingKeys,c=t.checkedKeys,f=t.halfCheckedKeys,p=t.dragOverNodeKey,h=t.dropPosition,y=t.keyEntities;return{expandedKeys:n||[],selectedKeys:a||[],loadedKeys:i||[],loadingKeys:s||[],checkedKeys:c||[],halfCheckedKeys:f||[],dragOverNodeKey:p,dropPosition:h,keyEntities:y}},e.setExpandedKeys=function(t){var n=e.state,a=n.treeData,i=n.fieldNames,s=be(a,t,i);e.setUncontrolledState({expandedKeys:t,flattenNodes:s},!0)},e.onNodeExpand=function(t,n){var a=e.state.expandedKeys,i=e.state,s=i.listChanging,c=i.fieldNames,f=e.props,p=f.onExpand,h=f.loadData,y=n.expanded,u=n[c.key];if(!s){var K=a.indexOf(u),k=!y;if(X(y&&K!==-1||!y&&K===-1,"Expand state not sync with index check"),k?a=z(a,u):a=W(a,u),e.setExpandedKeys(a),p==null||p(a,{node:n,expanded:k,nativeEvent:t.nativeEvent}),k&&h){var m=e.onNodeLoad(n);m&&m.then(function(){var x=be(e.state.treeData,a,c);e.setUncontrolledState({flattenNodes:x})}).catch(function(){var x=e.state.expandedKeys,C=W(x,u);e.setExpandedKeys(C)})}}},e.onListChangeStart=function(){e.setUncontrolledState({listChanging:!0})},e.onListChangeEnd=function(){setTimeout(function(){e.setUncontrolledState({listChanging:!1})})},e.onActiveChange=function(t){var n=e.state.activeKey,a=e.props.onActiveChange;n!==t&&(e.setState({activeKey:t}),t!==null&&e.scrollTo({key:t}),a==null||a(t))},e.getActiveItem=function(){var t=e.state,n=t.activeKey,a=t.flattenNodes;return n===null?null:a.find(function(i){var s=i.key;return s===n})||null},e.offsetActiveKey=function(t){var n=e.state,a=n.flattenNodes,i=n.activeKey,s=a.findIndex(function(p){var h=p.key;return h===i});s===-1&&t<0&&(s=a.length),s=(s+t+a.length)%a.length;var c=a[s];if(c){var f=c.key;e.onActiveChange(f)}else e.onActiveChange(null)},e.onKeyDown=function(t){var n=e.state,a=n.activeKey,i=n.expandedKeys,s=n.checkedKeys,c=n.fieldNames,f=e.props,p=f.onKeyDown,h=f.checkable,y=f.selectable;switch(t.which){case ie.UP:{e.offsetActiveKey(-1),t.preventDefault();break}case ie.DOWN:{e.offsetActiveKey(1),t.preventDefault();break}}var u=e.getActiveItem();if(u&&u.data){var K=e.getTreeNodeRequiredProps(),k=u.data.isLeaf===!1||!!(u.data[c.children]||[]).length,m=M($($({},fe(a,K)),{},{data:u.data,active:!0}));switch(t.which){case ie.LEFT:{k&&i.includes(a)?e.onNodeExpand({},m):u.parent&&e.onActiveChange(u.parent.key),t.preventDefault();break}case ie.RIGHT:{k&&!i.includes(a)?e.onNodeExpand({},m):u.children&&u.children.length&&e.onActiveChange(u.children[0].key),t.preventDefault();break}case ie.ENTER:case ie.SPACE:{h&&!m.disabled&&m.checkable!==!1&&!m.disableCheckbox?e.onNodeCheck({},m,!s.includes(a)):!h&&y&&!m.disabled&&m.selectable!==!1&&e.onNodeSelect({},m);break}}}p==null||p(t)},e.setUncontrolledState=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!e.destroyed){var i=!1,s=!0,c={};Object.keys(t).forEach(function(f){if(f in e.props){s=!1;return}i=!0,c[f]=t[f]}),i&&(!n||s)&&e.setState($($({},c),a))}},e.scrollTo=function(t){e.listRef.current.scrollTo(t)},e}return ze(v,[{key:"componentDidMount",value:function(){this.destroyed=!1,this.onUpdated()}},{key:"componentDidUpdate",value:function(){this.onUpdated()}},{key:"onUpdated",value:function(){var o=this.props.activeKey;o!==void 0&&o!==this.state.activeKey&&(this.setState({activeKey:o}),o!==null&&this.scrollTo({key:o}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"resetDragState",value:function(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}},{key:"render",value:function(){var o,l=this.state,g=l.focused,t=l.flattenNodes,n=l.keyEntities,a=l.draggingNodeKey,i=l.activeKey,s=l.dropLevelOffset,c=l.dropContainerKey,f=l.dropTargetKey,p=l.dropPosition,h=l.dragOverNodeKey,y=l.indent,u=this.props,K=u.prefixCls,k=u.className,m=u.style,x=u.showLine,C=u.focusable,D=u.tabIndex,b=D===void 0?0:D,E=u.selectable,S=u.showIcon,T=u.icon,P=u.switcherIcon,O=u.draggable,R=u.checkable,I=u.checkStrictly,A=u.disabled,_=u.motion,U=u.loadData,de=u.filterTreeNode,se=u.height,H=u.itemHeight,G=u.virtual,J=u.titleRender,le=u.dropIndicatorRender,ge=u.onContextMenu,me=u.onScroll,re=u.direction,Ne=u.rootClassName,he=u.rootStyle,xe=Xe(this.props,{aria:!0,data:!0}),q;return O&&(Te(O)==="object"?q=O:typeof O=="function"?q={nodeDraggable:O}:q={}),N.createElement(Oe.Provider,{value:{prefixCls:K,selectable:E,showIcon:S,icon:T,switcherIcon:P,draggable:q,draggingNodeKey:a,checkable:R,checkStrictly:I,disabled:A,keyEntities:n,dropLevelOffset:s,dropContainerKey:c,dropTargetKey:f,dropPosition:p,dragOverNodeKey:h,indent:y,direction:re,dropIndicatorRender:le,loadData:U,filterTreeNode:de,titleRender:J,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop}},N.createElement("div",{role:"tree",className:B(K,k,Ne,(o={},w(o,"".concat(K,"-show-line"),x),w(o,"".concat(K,"-focused"),g),w(o,"".concat(K,"-active-focused"),i!==null),o)),style:he},N.createElement(nt,j({ref:this.listRef,prefixCls:K,style:m,data:t,disabled:A,selectable:E,checkable:!!R,motion:_,dragging:a!==null,height:se,itemHeight:H,virtual:G,focusable:C,focused:g,tabIndex:b,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:ge,onScroll:me},this.getTreeNodeRequiredProps(),xe))))}}],[{key:"getDerivedStateFromProps",value:function(o,l){var g=l.prevProps,t={prevProps:o};function n(C){return!g&&C in o||g&&g[C]!==o[C]}var a,i=l.fieldNames;if(n("fieldNames")&&(i=Ke(o.fieldNames),t.fieldNames=i),n("treeData")?a=o.treeData:n("children")&&(X(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),a=vt(o.children)),a){t.treeData=a;var s=gt(a,{fieldNames:i});t.keyEntities=$(w({},ae,tt),s.keyEntities)}var c=t.keyEntities||l.keyEntities;if(n("expandedKeys")||g&&n("autoExpandParent"))t.expandedKeys=o.autoExpandParent||!g&&o.defaultExpandParent?je(o.expandedKeys,c):o.expandedKeys;else if(!g&&o.defaultExpandAll){var f=$({},c);delete f[ae],t.expandedKeys=Object.keys(f).map(function(C){return f[C].key})}else!g&&o.defaultExpandedKeys&&(t.expandedKeys=o.autoExpandParent||o.defaultExpandParent?je(o.defaultExpandedKeys,c):o.defaultExpandedKeys);if(t.expandedKeys||delete t.expandedKeys,a||t.expandedKeys){var p=be(a||l.treeData,t.expandedKeys||l.expandedKeys,i);t.flattenNodes=p}if(o.selectable&&(n("selectedKeys")?t.selectedKeys=Be(o.selectedKeys,o):!g&&o.defaultSelectedKeys&&(t.selectedKeys=Be(o.defaultSelectedKeys,o))),o.checkable){var h;if(n("checkedKeys")?h=Se(o.checkedKeys)||{}:!g&&o.defaultCheckedKeys?h=Se(o.defaultCheckedKeys)||{}:a&&(h=Se(o.checkedKeys)||{checkedKeys:l.checkedKeys,halfCheckedKeys:l.halfCheckedKeys}),h){var y=h,u=y.checkedKeys,K=u===void 0?[]:u,k=y.halfCheckedKeys,m=k===void 0?[]:k;if(!o.checkStrictly){var x=De(K,!0,c);K=x.checkedKeys,m=x.halfCheckedKeys}t.checkedKeys=K,t.halfCheckedKeys=m}}return n("loadedKeys")&&(t.loadedKeys=o.loadedKeys),t}}]),v}(N.Component);at.defaultProps={prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:kt,allowDrop:function(){return!0},expandAction:!1};at.TreeNode=ve;export{ve as C,at as T,je as a,vt as b,gt as c,De as d,W as e,Ke as f,z as g};
