(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8266:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(9458)}])},1011:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(5893),a=n(1664),i=n.n(a),s=n(8580);function o(t){var e=t.value;return(0,r.jsx)(i(),{href:{pathname:"/search",query:{tag:e}},children:e})}function u(t){var e=t.title,n=t.tags,a=t.path;return(0,r.jsx)(s.Z,{title:e,children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{children:["Path: ",(0,r.jsx)(i(),{href:{pathname:a},children:a})]}),(0,r.jsxs)("div",{children:["Tags:"," ",n.map(function(t,e){return[e>0&&", ",(0,r.jsx)(o,{value:t},t)]})]})]})})}},8580:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(5893),a=n(5614),i=n(7294),s=n(797),o=function(t){for(var e,n,r=arguments.length,a=Array(r>1?r-1:0),i=1;i<r;i++)a[i-1]=arguments[i];return(null!=(n=Function)&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?!!n[Symbol.hasInstance](t):t instanceof n)?t.apply(void 0,(0,s.Z)(a)):t},u=function(t){var e=t.title,n=t.open,s=t.onToggle,u=t.children,c=(0,i.useMemo)(function(){return o(e)},[e]),l=function(t){s&&s(t.target.open)};return(0,r.jsxs)("details",{open:n,className:"group shadow",onToggle:l,children:[(0,r.jsxs)("summary",{className:"relative cursor-pointer list-none bg-slate-50",children:[c,(0,r.jsx)(a.Z,{className:"absolute top-0 right-0 h-6 w-6 rotate-0 transition-all group-open:rotate-180"})]}),(0,r.jsx)("div",{className:"opacity-0 transition-opacity duration-700 group-open:opacity-100",children:u})]})}},9458:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r=n(1799),a=n(797),i=n(5893),s=n(7294),o=n(1011),u=n(1163),c=JSON.parse('[{"title":"Config","tags":["config"],"path":"/config"},{"title":"tsconfig.json","tags":["config","tsconfig","json"],"path":"/config/tsconfig-json"},{"title":"Filter","tags":["exclude","filter"],"path":"/exclude/filter"},{"title":"Exclude","tags":["exclude"],"path":"/exclude"},{"title":"Function","tags":["function"],"path":"/function"},{"title":"Function Overloading","tags":["function","overloading"],"path":"/function/overloading"},{"title":"React Generics","tags":["react","generics"],"path":"/react/generics"},{"title":"React","tags":["react"],"path":"/react"},{"title":"String","tags":["string"],"path":"/string"},{"title":"String Sanizite","tags":["string","sanitize"],"path":"/string/sanitize"},{"title":"Type Guard","tags":["type","guard"],"path":"/type/guard"},{"title":"Type","tags":["type"],"path":"/type"}]');function l(t){var e=t.value,n=t.defaultText,r=t.options,a=t.onChange,s=function(t){a(t.target.value)};return(0,i.jsxs)("select",{value:e,onChange:s,className:"rounded border p-1",children:[(0,i.jsx)("option",{value:"",children:void 0===n?"---":n}),r.map(function(t){return(0,i.jsx)("option",{children:t},t)})]})}function g(t){var e=t.value,n=t.onChange,r=function(t){n(t.target.value)};return(0,i.jsx)("input",{value:e,onChange:r,className:"rounded border p-1"})}var d=(0,a.Z)(new Set(c.flatMap(function(t){return t.tags}))),f=function(){var t=(0,u.useRouter)(),e=t.query,n=e.q,r=e.tag,a=t.replace,o=(0,s.useState)(n&&!Array.isArray(n)?n:""),c=o[0],f=o[1],p=(0,s.useState)(r&&!Array.isArray(r)?r:""),h=p[0],v=p[1],x=function(t){t.preventDefault(),a({query:{q:c,tag:h}})};return(0,s.useEffect)(function(){f(n&&!Array.isArray(n)?n:""),v(r&&!Array.isArray(r)?r:"")},[n,r]),(0,i.jsxs)("form",{onSubmit:x,children:["Search: ",(0,i.jsx)(g,{value:c,onChange:f}),"Tags: ",(0,i.jsx)(l,{value:h,options:d,onChange:v}),(0,i.jsx)("button",{type:"submit",className:"rounded border p-1",children:"search"})]})},p=function(t){var e=t.items;return(0,i.jsx)("div",{className:"grid gap-4",children:e.map(function(t){return(0,i.jsx)(o.Z,(0,r.Z)({},t),t.path)})})};function h(){var t,e,n=(0,u.useRouter)().query,r=n.q,a=n.tag,s=(t=r&&!Array.isArray(r)?r:"",e=a&&!Array.isArray(a)?[a]:[],t||e.length?c.filter(function(n){var r;return t&&(null===(r=n.title)||void 0===r?void 0:r.includes(t))||e.some(function(t){var e;return null===(e=n.tags)||void 0===e?void 0:e.includes(t)})}):c);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f,{}),(0,i.jsx)("div",{className:"pt-4",children:s.length?(0,i.jsx)(p,{items:s}):"No results"})]})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8266)}),_N_E=t.O()}]);