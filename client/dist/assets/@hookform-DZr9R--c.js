import{g as u,s as d,a as m}from"./react-hook-form-XW8Slzei.js";const v=(r,s,t)=>{if(r&&"reportValidity"in r){const e=u(t,s);r.setCustomValidity(e&&e.message||""),r.reportValidity()}},y=(r,s)=>{for(const t in s.fields){const e=s.fields[t];e&&e.ref&&"reportValidity"in e.ref?v(e.ref,t,r):e.refs&&e.refs.forEach(f=>v(f,t,r))}},g=(r,s)=>{s.shouldUseNativeValidation&&y(r,s);const t={};for(const e in r){const f=u(s.fields,e),a=Object.assign(r[e]||{},{ref:f&&f.ref});if(V(s.names||Object.keys(r),e)){const n=Object.assign({},u(t,e));d(n,"root",a),d(t,e,n)}else d(t,e,a)}return t},V=(r,s)=>r.some(t=>t.startsWith(s+"."));function j(r,s,t){return s===void 0&&(s={}),t===void 0&&(t={}),function(e,f,a){try{return Promise.resolve(function(n,l){try{var c=(s.context,Promise.resolve(r[t.mode==="sync"?"validateSync":"validate"](e,Object.assign({abortEarly:!1},s,{context:f}))).then(function(i){return a.shouldUseNativeValidation&&y({},a),{values:t.raw?e:i,errors:{}}}))}catch(i){return l(i)}return c&&c.then?c.then(void 0,l):c}(0,function(n){if(!n.inner)throw n;return{values:{},errors:g((l=n,c=!a.shouldUseNativeValidation&&a.criteriaMode==="all",(l.inner||[]).reduce(function(i,o){if(i[o.path]||(i[o.path]={message:o.message,type:o.type}),c){var p=i[o.path].types,h=p&&p[o.type];i[o.path]=m(o.path,c,i,o.type,h?[].concat(h,o.message):o.message)}return i},{})),a)};var l,c}))}catch(n){return Promise.reject(n)}}}export{j as o};
