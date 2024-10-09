import{i as le,j as ue,a as ce,_ as pe,b as N,e as xe,g as A}from"./@babel-Ci6hP7BZ.js";import{c as y}from"./classnames-lS_MG6Eb.js";import{t as Ce}from"./rc-util-Cnbt_QWE.js";import{a as l,r as k}from"./react-DGs7XrPl.js";const _e={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};var z={ZERO:48,NINE:57,NUMPAD_ZERO:96,NUMPAD_NINE:105,BACKSPACE:8,DELETE:46,ENTER:13,ARROW_UP:38,ARROW_DOWN:40};const Pe={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};var he=function(S){le(m,S);var h=ue(m);function m(){var s;ce(this,m);for(var e=arguments.length,t=new Array(e),u=0;u<e;u++)t[u]=arguments[u];return s=h.call.apply(h,[this].concat(t)),s.state={goInputText:""},s.getValidValue=function(){var a=s.state.goInputText;return!a||Number.isNaN(a)?void 0:Number(a)},s.buildOptionText=function(a){return"".concat(a," ").concat(s.props.locale.items_per_page)},s.changeSize=function(a){s.props.changeSize(Number(a))},s.handleChange=function(a){s.setState({goInputText:a.target.value})},s.handleBlur=function(a){var o=s.props,n=o.goButton,r=o.quickGo,i=o.rootPrefixCls,g=s.state.goInputText;n||g===""||(s.setState({goInputText:""}),!(a.relatedTarget&&(a.relatedTarget.className.indexOf("".concat(i,"-item-link"))>=0||a.relatedTarget.className.indexOf("".concat(i,"-item"))>=0))&&r(s.getValidValue()))},s.go=function(a){var o=s.state.goInputText;o!==""&&(a.keyCode===z.ENTER||a.type==="click")&&(s.setState({goInputText:""}),s.props.quickGo(s.getValidValue()))},s}return pe(m,[{key:"getPageSizeOptions",value:function(){var e=this.props,t=e.pageSize,u=e.pageSizeOptions;return u.some(function(a){return a.toString()===t.toString()})?u:u.concat([t.toString()]).sort(function(a,o){var n=Number.isNaN(Number(a))?0:Number(a),r=Number.isNaN(Number(o))?0:Number(o);return n-r})}},{key:"render",value:function(){var e=this,t=this.props,u=t.pageSize,a=t.locale,o=t.rootPrefixCls,n=t.changeSize,r=t.quickGo,i=t.goButton,g=t.selectComponentClass,c=t.buildOptionText,f=t.selectPrefixCls,P=t.disabled,b=this.state.goInputText,v="".concat(o,"-options"),C=g,O=null,T=null,B=null;if(!n&&!r)return null;var J=this.getPageSizeOptions();if(n&&C){var U=J.map(function(_,p){return l.createElement(C.Option,{key:p,value:_.toString()},(c||e.buildOptionText)(_))});O=l.createElement(C,{disabled:P,prefixCls:f,showSearch:!1,className:"".concat(v,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(u||J[0]).toString(),onChange:this.changeSize,getPopupContainer:function(p){return p.parentNode},"aria-label":a.page_size,defaultOpen:!1},U)}return r&&(i&&(B=typeof i=="boolean"?l.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:P,className:"".concat(v,"-quick-jumper-button")},a.jump_to_confirm):l.createElement("span",{onClick:this.go,onKeyUp:this.go},i)),T=l.createElement("div",{className:"".concat(v,"-quick-jumper")},a.jump_to,l.createElement("input",{disabled:P,type:"text",value:b,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":a.page}),a.page,B)),l.createElement("li",{className:"".concat(v)},O,T)}}]),m}(l.Component);he.defaultProps={pageSizeOptions:["10","20","50","100"]};var K=function(h){var m,s=h.rootPrefixCls,e=h.page,t=h.active,u=h.className,a=h.showTitle,o=h.onClick,n=h.onKeyPress,r=h.itemRender,i="".concat(s,"-item"),g=y(i,"".concat(i,"-").concat(e),(m={},N(m,"".concat(i,"-active"),t),N(m,"".concat(i,"-disabled"),!e),N(m,h.className,u),m)),c=function(){o(e)},f=function(v){n(v,o,e)},P=r(e,"page",l.createElement("a",{rel:"nofollow"},e));return P?l.createElement("li",{title:a?e.toString():null,className:g,onClick:c,onKeyPress:f,tabIndex:0},P):null};function q(){}function oe(S){var h=Number(S);return typeof h=="number"&&!Number.isNaN(h)&&isFinite(h)&&Math.floor(h)===h}var Ne=function(h,m,s){return s};function E(S,h,m){var s=typeof S>"u"?h.pageSize:S;return Math.floor((m.total-1)/s)+1}var Se=function(S){le(m,S);var h=ue(m);function m(s){var e;ce(this,m),e=h.call(this,s),e.paginationNode=l.createRef(),e.getJumpPrevPage=function(){return Math.max(1,e.state.current-(e.props.showLessItems?3:5))},e.getJumpNextPage=function(){return Math.min(E(void 0,e.state,e.props),e.state.current+(e.props.showLessItems?3:5))},e.getItemIcon=function(n,r){var i=e.props.prefixCls,g=n||l.createElement("button",{type:"button","aria-label":r,className:"".concat(i,"-item-link")});return typeof n=="function"&&(g=l.createElement(n,xe({},e.props))),g},e.isValid=function(n){var r=e.props.total;return oe(n)&&n!==e.state.current&&oe(r)&&r>0},e.shouldDisplayQuickJumper=function(){var n=e.props,r=n.showQuickJumper,i=n.total,g=e.state.pageSize;return i<=g?!1:r},e.handleKeyDown=function(n){(n.keyCode===z.ARROW_UP||n.keyCode===z.ARROW_DOWN)&&n.preventDefault()},e.handleKeyUp=function(n){var r=e.getValidValue(n),i=e.state.currentInputValue;r!==i&&e.setState({currentInputValue:r}),n.keyCode===z.ENTER?e.handleChange(r):n.keyCode===z.ARROW_UP?e.handleChange(r-1):n.keyCode===z.ARROW_DOWN&&e.handleChange(r+1)},e.handleBlur=function(n){var r=e.getValidValue(n);e.handleChange(r)},e.changePageSize=function(n){var r=e.state.current,i=E(n,e.state,e.props);r=r>i?i:r,i===0&&(r=e.state.current),typeof n=="number"&&("pageSize"in e.props||e.setState({pageSize:n}),"current"in e.props||e.setState({current:r,currentInputValue:r})),e.props.onShowSizeChange(r,n),"onChange"in e.props&&e.props.onChange&&e.props.onChange(r,n)},e.handleChange=function(n){var r=e.props,i=r.disabled,g=r.onChange,c=e.state,f=c.pageSize,P=c.current,b=c.currentInputValue;if(e.isValid(n)&&!i){var v=E(void 0,e.state,e.props),C=n;return n>v?C=v:n<1&&(C=1),"current"in e.props||e.setState({current:C}),C!==b&&e.setState({currentInputValue:C}),g(C,f),C}return P},e.prev=function(){e.hasPrev()&&e.handleChange(e.state.current-1)},e.next=function(){e.hasNext()&&e.handleChange(e.state.current+1)},e.jumpPrev=function(){e.handleChange(e.getJumpPrevPage())},e.jumpNext=function(){e.handleChange(e.getJumpNextPage())},e.hasPrev=function(){return e.state.current>1},e.hasNext=function(){return e.state.current<E(void 0,e.state,e.props)},e.runIfEnter=function(n,r){if(n.key==="Enter"||n.charCode===13){for(var i=arguments.length,g=new Array(i>2?i-2:0),c=2;c<i;c++)g[c-2]=arguments[c];r.apply(void 0,g)}},e.runIfEnterPrev=function(n){e.runIfEnter(n,e.prev)},e.runIfEnterNext=function(n){e.runIfEnter(n,e.next)},e.runIfEnterJumpPrev=function(n){e.runIfEnter(n,e.jumpPrev)},e.runIfEnterJumpNext=function(n){e.runIfEnter(n,e.jumpNext)},e.handleGoTO=function(n){(n.keyCode===z.ENTER||n.type==="click")&&e.handleChange(e.state.currentInputValue)},e.renderPrev=function(n){var r=e.props,i=r.prevIcon,g=r.itemRender,c=g(n,"prev",e.getItemIcon(i,"prev page")),f=!e.hasPrev();return k.isValidElement(c)?k.cloneElement(c,{disabled:f}):c},e.renderNext=function(n){var r=e.props,i=r.nextIcon,g=r.itemRender,c=g(n,"next",e.getItemIcon(i,"next page")),f=!e.hasNext();return k.isValidElement(c)?k.cloneElement(c,{disabled:f}):c};var t=s.onChange!==q,u="current"in s;u&&!t&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var a=s.defaultCurrent;"current"in s&&(a=s.current);var o=s.defaultPageSize;return"pageSize"in s&&(o=s.pageSize),a=Math.min(a,E(o,void 0,s)),e.state={current:a,currentInputValue:a,pageSize:o},e}return pe(m,[{key:"componentDidUpdate",value:function(e,t){var u=this.props.prefixCls;if(t.current!==this.state.current&&this.paginationNode.current){var a=this.paginationNode.current.querySelector(".".concat(u,"-item-").concat(t.current));if(a&&document.activeElement===a){var o;a==null||(o=a.blur)===null||o===void 0||o.call(a)}}}},{key:"getValidValue",value:function(e){var t=e.target.value,u=E(void 0,this.state,this.props),a=this.state.currentInputValue,o;return t===""?o=t:Number.isNaN(Number(t))?o=a:t>=u?o=u:o=Number(t),o}},{key:"getShowSizeChanger",value:function(){var e=this.props,t=e.showSizeChanger,u=e.total,a=e.totalBoundaryShowSizeChanger;return typeof t<"u"?t:u>a}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,u=e.className,a=e.style,o=e.disabled,n=e.hideOnSinglePage,r=e.total,i=e.locale,g=e.showQuickJumper,c=e.showLessItems,f=e.showTitle,P=e.showTotal,b=e.simple,v=e.itemRender,C=e.showPrevNextJumpers,O=e.jumpPrevIcon,T=e.jumpNextIcon,B=e.selectComponentClass,J=e.selectPrefixCls,U=e.pageSizeOptions,_=this.state,p=_.current,w=_.pageSize,ge=_.currentInputValue;if(n===!0&&r<=w)return null;var d=E(void 0,this.state,this.props),x=[],$=null,Q=null,F=null,Z=null,R=null,D=g&&g.goButton,I=c?1:2,Y=p-1>0?p-1:0,H=p+1<d?p+1:d,X=Ce(this.props,{aria:!0,data:!0}),ee=P&&l.createElement("li",{className:"".concat(t,"-total-text")},P(r,[r===0?0:(p-1)*w+1,p*w>r?r:p*w]));if(b){D&&(typeof D=="boolean"?R=l.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},i.jump_to_confirm):R=l.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},D),R=l.createElement("li",{title:f?"".concat(i.jump_to).concat(p,"/").concat(d):null,className:"".concat(t,"-simple-pager")},R));var te=this.renderPrev(Y);return l.createElement("ul",A({className:y(t,"".concat(t,"-simple"),N({},"".concat(t,"-disabled"),o),u),style:a,ref:this.paginationNode},X),ee,te?l.createElement("li",{title:f?i.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:y("".concat(t,"-prev"),N({},"".concat(t,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},te):null,l.createElement("li",{title:f?"".concat(p,"/").concat(d):null,className:"".concat(t,"-simple-pager")},l.createElement("input",{type:"text",value:ge,disabled:o,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:3}),l.createElement("span",{className:"".concat(t,"-slash")},"/"),d),l.createElement("li",{title:f?i.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:y("".concat(t,"-next"),N({},"".concat(t,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(H)),R)}if(d<=3+I*2){var ne={locale:i,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:f,itemRender:v};d||x.push(l.createElement(K,A({},ne,{key:"noPager",page:1,className:"".concat(t,"-item-disabled")})));for(var V=1;V<=d;V+=1){var fe=p===V;x.push(l.createElement(K,A({},ne,{key:V,page:V,active:fe})))}}else{var me=c?i.prev_3:i.prev_5,de=c?i.next_3:i.next_5,ae=v(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(O,"prev page")),re=v(this.getJumpNextPage(),"jump-next",this.getItemIcon(T,"next page"));C&&($=ae?l.createElement("li",{title:f?me:null,key:"prev",onClick:this.jumpPrev,tabIndex:0,onKeyPress:this.runIfEnterJumpPrev,className:y("".concat(t,"-jump-prev"),N({},"".concat(t,"-jump-prev-custom-icon"),!!O))},ae):null,Q=re?l.createElement("li",{title:f?de:null,key:"next",tabIndex:0,onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:y("".concat(t,"-jump-next"),N({},"".concat(t,"-jump-next-custom-icon"),!!T))},re):null),Z=l.createElement(K,{locale:i,last:!0,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:d,page:d,active:!1,showTitle:f,itemRender:v}),F=l.createElement(K,{locale:i,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:f,itemRender:v});var G=Math.max(1,p-I),W=Math.min(p+I,d);p-1<=I&&(W=1+I*2),d-p<=I&&(G=d-I*2);for(var j=G;j<=W;j+=1){var ve=p===j;x.push(l.createElement(K,{locale:i,rootPrefixCls:t,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:j,page:j,active:ve,showTitle:f,itemRender:v}))}p-1>=I*2&&p!==3&&(x[0]=k.cloneElement(x[0],{className:"".concat(t,"-item-after-jump-prev")}),x.unshift($)),d-p>=I*2&&p!==d-2&&(x[x.length-1]=k.cloneElement(x[x.length-1],{className:"".concat(t,"-item-before-jump-next")}),x.push(Q)),G!==1&&x.unshift(F),W!==d&&x.push(Z)}var L=!this.hasPrev()||!d,M=!this.hasNext()||!d,ie=this.renderPrev(Y),se=this.renderNext(H);return l.createElement("ul",A({className:y(t,u,N({},"".concat(t,"-disabled"),o)),style:a,ref:this.paginationNode},X),ee,ie?l.createElement("li",{title:f?i.prev_page:null,onClick:this.prev,tabIndex:L?null:0,onKeyPress:this.runIfEnterPrev,className:y("".concat(t,"-prev"),N({},"".concat(t,"-disabled"),L)),"aria-disabled":L},ie):null,x,se?l.createElement("li",{title:f?i.next_page:null,onClick:this.next,tabIndex:M?null:0,onKeyPress:this.runIfEnterNext,className:y("".concat(t,"-next"),N({},"".concat(t,"-disabled"),M)),"aria-disabled":M},se):null,l.createElement(he,{disabled:o,locale:i,rootPrefixCls:t,selectComponentClass:B,selectPrefixCls:J,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:p,pageSize:w,pageSizeOptions:U,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:D}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var u={};if("current"in e&&(u.current=e.current,e.current!==t.current&&(u.currentInputValue=u.current)),"pageSize"in e&&e.pageSize!==t.pageSize){var a=t.current,o=E(e.pageSize,t,e);a=a>o?o:a,"current"in e||(u.current=a,u.currentInputValue=a),u.pageSize=e.pageSize}return u}}]),m}(l.Component);Se.defaultProps={defaultCurrent:1,total:0,defaultPageSize:10,onChange:q,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:q,locale:Pe,style:{},itemRender:Ne,totalBoundaryShowSizeChanger:50};export{Se as P,_e as e};
