(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8266:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return e(3618)}])},1011:function(t,n,e){"use strict";e.d(n,{Z:function(){return c}});var r=e(5893),a=e(1664),i=e.n(a),s=e(9315),u=e(3603);function o(t){var n=t.value;return(0,r.jsx)(i(),{href:{pathname:"/search",query:{tag:n}},children:n})}function c(t){var n=t.title,e=t.tags,a=t.path;return(0,r.jsx)(u.Z,{title:n,children:(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsxs)("div",{children:["Path: ",(0,r.jsx)(i(),{href:{pathname:a},children:a})]}),(0,r.jsxs)("div",{children:["Tags:"," ",(0,s.v)(e.map(function(t){return(0,r.jsx)(o,{value:t},t)}),", ")]})]})})}},3603:function(t,n,e){"use strict";var r=e(5893),a=e(5614),i=e(3200),s=function(t){var n=t.title,e=t.open,s=t.onToggle,u=t.children,o=function(t){(0,i.o)(s,t.target.open)};return(0,r.jsxs)("details",{open:e,className:"group shadow",onToggle:o,children:[(0,r.jsxs)("summary",{className:"relative cursor-pointer list-none bg-slate-50",children:[n,(0,r.jsx)(a.Z,{className:"absolute top-0 right-0 h-6 w-6 rotate-0 transition-all group-open:rotate-180"})]}),(0,r.jsx)("div",{className:"opacity-0 transition-opacity duration-700 group-open:opacity-100",children:u})]})};n.Z=s},3618:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return A}});var r=e(1799),a=e(797),i=e(5893),s=e(7294),u=e(1011),o=e(1163),c=JSON.parse('[{"title":"Array","tags":["array"],"path":"/array"},{"title":"nth","tags":["array","index","nth"],"path":"/array/nth"},{"title":"Config","tags":["config"],"path":"/config"},{"title":"tsconfig.json","tags":["config","tsconfig","json"],"path":"/config/tsconfig-json"},{"title":"Filter","tags":["exclude","filter"],"path":"/exclude/filter"},{"title":"Exclude","tags":["exclude"],"path":"/exclude"},{"title":"Function Arguments","tags":["function","arguments"],"path":"/function/arguments"},{"title":"Function","tags":["function"],"path":"/function"},{"title":"Function Overloading","tags":["function","overloading"],"path":"/function/overloading"},{"title":"React Generics","tags":["react","generics"],"path":"/react/generics"},{"title":"React","tags":["react"],"path":"/react"},{"title":"String","tags":["string"],"path":"/string"},{"title":"String Sanizite","tags":["string","sanitize"],"path":"/string/sanitize"},{"title":"Type Guard","tags":["type","guard"],"path":"/type/guard"},{"title":"Type","tags":["type"],"path":"/type"}]');function l(t){var n=t.value,e=t.defaultText,r=t.options,a=t.onChange,s=function(t){a(t.target.value)};return(0,i.jsxs)("select",{value:n,onChange:s,className:"rounded border p-1",children:[(0,i.jsx)("option",{value:"",children:void 0===e?"---":e}),r.map(function(t){return(0,i.jsx)("option",{children:t},t)})]})}function f(t){var n=t.value,e=t.onChange,r=function(t){e(t.target.value)};return(0,i.jsx)("input",{value:n,onChange:r,className:"rounded border p-1"})}var g=e(3200);function d(t){var n=t.type,e=t.onClick,r=t.children,a=function(){(0,g.o)(e)};return(0,i.jsx)("button",{type:n,className:"rounded border p-1",onClick:a,children:r})}var h=e(488),p=e(9315),v=function(t,n){var e=(0,s.useRef)(n);(0,s.useEffect)(function(){!(0,p.A)(e.current,n)&&(e.current=n,t())},n)},x=function(t,n,e){var r=(0,s.useRef)(e);v(function(){var n=!(0,p.A)(e,r.current);r.current=e,t(n)},n)},y=function(t,n,e,r){var a=(0,h.Sf)(t);return x(function(t){a(t?(0,h.gw)(n):(0,h.zO)())},e,r),a},j=(0,a.Z)(new Set(c.flatMap(function(t){return t.tags}))),m=function(){var t=(0,o.useRouter)(),n=t.query,e=n.q,r=n.tag,a=t.replace,u=(0,s.useState)(e&&!Array.isArray(e)?e:""),c=u[0],g=u[1],p=(0,s.useState)(r&&!Array.isArray(r)?r:""),v=p[0],x=p[1],m=(0,s.useCallback)(function(){a({query:{q:c,tag:v}})},[a,c,v]),N=y(m,500,[c,v],[c]),A=function(t){t.preventDefault(),N((0,h.zO)())};return(0,i.jsxs)("form",{onSubmit:A,children:["Search: ",(0,i.jsx)(f,{value:c,onChange:g}),"Tags: ",(0,i.jsx)(l,{value:v,options:j,onChange:x}),(0,i.jsx)(d,{type:"submit",children:"search"})]})},N=function(t){var n=t.items;return(0,i.jsx)("div",{className:"grid gap-4",children:n.map(function(t){return(0,i.jsx)(u.Z,(0,r.Z)({},t),t.path)})})};function A(){var t,n,e=(0,o.useRouter)().query,r=e.q,a=e.tag,s=(t=r&&!Array.isArray(r)?r:"",n=a&&!Array.isArray(a)?[a]:[],t||n.length?c.filter(function(e){var r;return t&&(null===(r=e.title)||void 0===r?void 0:r.includes(t))||n.some(function(t){var n;return null===(n=e.tags)||void 0===n?void 0:n.includes(t)})}):c);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m,{}),(0,i.jsx)("div",{className:"pt-4",children:s.length?(0,i.jsx)(N,{items:s}):"No results"})]})}},3200:function(t,n,e){"use strict";e.d(n,{o:function(){return a}});var r=e(797),a=function(t){for(var n=arguments.length,e=Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];return t&&t.apply(void 0,(0,r.Z)(e))}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=8266)}),_N_E=t.O()}]);