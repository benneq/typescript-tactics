(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3685)}])},1210:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=n,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,c=n(7273).Z,a=o(n(7294)),i=n(6273),u=n(2725),l=n(3462),s=n(1018),f=n(7190),d=n(1210),p=n(8684),h={};function v(e,t,n,r){if(e&&i.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch(function(e){});var o=r&&void 0!==r.locale?r.locale:e&&e.locale;h[t+"%"+n+(o?"%"+o:"")]=!0}}var m=a.default.forwardRef(function(e,t){var n,o,m=e.href,x=e.as,y=e.children,g=e.prefetch,b=e.passHref,j=e.replace,w=e.shallow,N=e.scroll,C=e.locale,_=e.onClick,T=e.onMouseEnter,E=e.onTouchStart,M=e.legacyBehavior,L=void 0===M?!0!==Boolean(!1):M,O=c(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,L&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var k=!1!==g,R=a.default.useContext(l.RouterContext),S=a.default.useContext(s.AppRouterContext);S&&(R=S);var P=a.default.useMemo(function(){var e=r(i.resolveHref(R,m,!0),2),t=e[0],n=e[1];return{href:t,as:x?i.resolveHref(R,x):n||t}},[R,m,x]),A=P.href,Z=P.as,z=a.default.useRef(A),I=a.default.useRef(Z);L&&(o=a.default.Children.only(n));var D=L?o&&"object"==typeof o&&o.ref:t,B=r(f.useIntersection({rootMargin:"200px"}),3),H=B[0],U=B[1],V=B[2],K=a.default.useCallback(function(e){(I.current!==Z||z.current!==A)&&(V(),I.current=Z,z.current=A),H(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[Z,D,A,V,H]);a.default.useEffect(function(){var e=U&&k&&i.isLocalURL(A),t=void 0!==C?C:R&&R.locale,n=h[A+"%"+Z+(t?"%"+t:"")];e&&!n&&v(R,A,Z,{locale:t})},[Z,A,U,C,k,R]);var q={ref:K,onClick:function(e){L||"function"!=typeof _||_(e),L&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,u,l,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&i.isLocalURL(n)){e.preventDefault();var d,p,h=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:c,locale:l,scroll:u}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!f})};s?a.default.startTransition(h):h()}}(e,R,A,Z,j,w,N,C,Boolean(S),k)},onMouseEnter:function(e){L||"function"!=typeof T||T(e),L&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),!(!k&&S)&&i.isLocalURL(A)&&v(R,A,Z,{priority:!0})},onTouchStart:function(e){L||"function"!=typeof E||E(e),L&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),!(!k&&S)&&i.isLocalURL(A)&&v(R,A,Z,{priority:!0})}};if(!L||b||"a"===o.type&&!("href"in o.props)){var F=void 0!==C?C:R&&R.locale,G=R&&R.isLocaleDomain&&d.getDomainLocale(Z,F,R.locales,R.domainLocales);q.href=G||p.addBasePath(u.addLocale(Z,F,R&&R.defaultLocale))}return L?a.default.cloneElement(o,q):a.default.createElement("a",Object.assign({},O,q),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,s=r(o.useState(!1),2),f=s[0],d=s[1],p=r(o.useState(null),2),h=p[0],v=p[1];return o.useEffect(function(){if(a){if(!l&&!f&&h&&h.tagName){var e,r,o,s,p,v,m;return r=function(e){return e&&d(e)},p=(s=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=i.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),i.set(n,t),t}(o={root:null==t?void 0:t.current,rootMargin:n})).id,v=s.observer,(m=s.elements).set(h,r),v.observe(h),function(){if(m.delete(h),v.unobserve(h),0===m.size){v.disconnect(),i.delete(p);var e=u.findIndex(function(e){return e.root===p.root&&e.margin===p.margin});e>-1&&u.splice(e,1)}}}}else if(!f){var x=c.requestIdleCallback(function(){return d(!0)});return function(){return c.cancelIdleCallback(x)}}},[h,l,n,t,f]),[v,f,o.useCallback(function(){d(!1)},[])]};var o=n(7294),c=n(9311),a="function"==typeof IntersectionObserver,i=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),o=r.default.createContext(null);t.AppRouterContext=o;var c=r.default.createContext(null);t.LayoutRouterContext=c;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var i=r.default.createContext(null);t.TemplateContext=i},5614:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);function o(e){var t=e.className;return(0,r.jsx)("svg",{className:t,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})}},3685:function(e,t,n){"use strict";n.r(t),n.d(t,{App:function(){return P},default:function(){return A}});var r=n(1799),o=n(5893);n(6764),n(1720);var c=n(1664),a=n.n(c),i=n(5614),u=n(7873),l=function(e){var t=e.children;return(0,o.jsx)("ol",{className:"inline",children:(0,u.v)(t,function(e){return(0,o.jsx)(i.Z,{className:"inline h-6 w-6 -rotate-90"},e)}).map(function(e,t){return(0,o.jsx)("li",{className:"inline",children:e},t)})})},s=n(1163),f=n(797),d=n(3454),p=n(7294),h=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1]},v=function(e){var t=(0,p.useRef)(e);return(0,p.useEffect)(function(){t.current=e},[e]),t},m=function(e){"development"===d.env.NODE_ENV&&h("callback should be defined",!e);var t=(0,p.useRef)(),n=v(e);return(0,p.useCallback)(function(e){return t.current=e(t.current,function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return t.current=void 0,n.current.apply(n,(0,f.Z)(r))}),t.current},[])},x=function(e){e&&clearTimeout(e)},y=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(t,r){return x(t),setTimeout.apply(void 0,[r,e].concat((0,f.Z)(n)))}},g=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,n){x(e),n.apply(void 0,(0,f.Z)(t))}};function b(e){var t=e.className;return(0,o.jsx)("svg",{"aria-hidden":"true",className:t,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}var j=function(){var e=(0,s.useRouter)().replace,t=(0,p.useRef)(null),n=(0,p.useCallback)(function(){var n;e({pathname:"/search",query:{q:null===(n=t.current)||void 0===n?void 0:n.value}})},[]),r=m(n),c=function(){r(y(500))},a=function(e){e.preventDefault(),t.current&&r(g())},i=function(e){"Escape"===e.key&&(r(x),e.target.value="",e.target.blur())};return(0,o.jsxs)("form",{onSubmit:a,className:"relative",children:[(0,o.jsx)("input",{ref:t,id:"search",type:"search",placeholder:"Search",className:"peer -mr-[7rem] w-full rounded-lg border p-1 pl-8 text-slate-500 transition-[margin-right] focus:-mr-0 focus:text-black focus:outline-offset-2",onChange:c,onKeyDown:i}),(0,o.jsx)("label",{className:"absolute top-1.5 left-1.5 h-5 w-5 cursor-pointer peer-focus:text-slate-500",htmlFor:"search",children:(0,o.jsx)(b,{})})]})},w=function(){return(0,o.jsxs)("header",{className:"flex flex-row flex-nowrap py-4 px-4 shadow",children:[(0,o.jsx)("nav",{id:"breadcrumb",className:"min-w-0 flex-1 self-center truncate pr-4 text-left",style:{direction:"rtl"},children:(0,o.jsx)(l,{children:[1,2,3,4].map(function(e){return(0,o.jsxs)("a",{className:"p-2 hover:underline",href:"#",children:["Breadcrumb ",e]},e)})})}),(0,o.jsx)(j,{})]})},N=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{title:e,href:t,children:n}},C=[N("Config","/config",[N("tsconfig.json","/config/tsconfig-json")]),N("Function","/function",[N("Arguments","/function/arguments"),N("Overloading","/function/overloading"),]),N("Exclude","/exclude",[N("Filter","/exclude/filter")]),N("Type","/type",[N("Guard","/type/guard")]),N("String","/string",[N("Sanitize","/string/sanitize")]),N("React","/react",[N("Generics","/react/generics")]),],_=function(e){var t=e.title,n=e.href,c=e.children,u=(0,p.useState)(c.length>0),l=u[0],s=u[1],f=function(){s(function(e){return!e})};return(0,o.jsxs)("li",{className:"w-full",children:[(0,o.jsxs)("span",{className:"flex",children:[(0,o.jsx)(a(),{href:n,children:(0,o.jsx)("a",{className:"flex-1 hover:underline",children:t})}),c.length>0&&(0,o.jsx)("button",{className:"rounded",onClick:f,children:(0,o.jsx)(i.Z,{className:"h-6 w-6 transition-all ".concat(l?"rotate-180":"")})})]}),(0,o.jsx)("ul",{className:"flex flex-col pl-2 ".concat(l?"":"hidden"),children:c.map(function(e,t){return(0,o.jsx)(_,(0,r.Z)({},e),t)})})]})};function T(){return(0,o.jsx)("nav",{children:(0,o.jsx)("ul",{children:C.map(function(e,t){return(0,o.jsx)(_,(0,r.Z)({},e),t)})})})}function E(e){var t=e.children;return(0,o.jsxs)("div",{className:"flex min-h-screen flex-row",children:[(0,o.jsxs)("aside",{className:"flex w-64 min-w-max flex-col gap-2 pl-2 pr-2 pt-1 shadow",children:[(0,o.jsx)(a(),{href:"/",children:(0,o.jsx)("a",{className:"text-center text-2xl font-bold",children:"TypeScript Tactics"})}),(0,o.jsx)(T,{})]}),(0,o.jsxs)("div",{className:"flex min-w-0 flex-grow flex-col",children:[(0,o.jsx)("div",{className:"sticky top-0 z-50 bg-white",children:(0,o.jsx)(w,{})}),(0,o.jsx)("main",{className:"px-8 pt-4",children:t})]})]})}var M=n(1151);function L(e){var t=e.className;return(0,o.jsxs)("svg",{className:t,fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,o.jsx)("path",{d:"M480.6,109.1h-87.5V31.4c0-11.3-9.1-20.4-20.4-20.4H31.4C20.1,11,11,20.1,11,31.4v351c0,11.3,9.1,20.4,20.4,20.4h87.5 v77.7c0,11.3,9.1,20.4,20.4,20.4h341.3c11.3,0,20.4-9.1,20.4-20.4v-351C501,118.3,491.9,109.1,480.6,109.1z M51.8,362V51.8h300.4 v57.3H139.3c-11.3,0-20.4,9.1-20.4,20.4V362H51.8z M460.2,460.2H159.7V150h300.4V460.2z"}),(0,o.jsx)("path",{d:"m233.3,254.4h155.8c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-155.8c-11.3,0-20.4,9.1-20.4,20.4 0,11.2 9.1,20.4 20.4,20.4z"}),(0,o.jsx)("path",{d:"m233.3,396.6h155.8c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-155.8c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4z"})]})}var O=n(7940),k=n.n(O);function R(e){var t=e.component,n=e.className,r=e.children,c=(0,p.useRef)(null),a=(0,p.useState)(),i=a[0],u=a[1],l=(0,p.useState)(!1),s=l[0],f=l[1];(0,p.useEffect)(function(){if(i===window.location.hash){var e;null===(e=c.current)||void 0===e||e.scrollIntoView()}},[i]),(0,p.useEffect)(function(){if(c.current){var e,t=c.current.textContent||void 0;u(t&&"#"+t.normalize("NFKD").toLowerCase().replaceAll(/[^a-z0-9]+/g,"-"))}},[r]);var d=function(){f(!0)},h=function(){f(!1)};return(0,p.createElement)(t,{id:i,className:"".concat(n,"\n        relative\n        cursor-pointer\n        before:absolute before:content-['#'] before:-translate-x-full before:pr-1 before:drop-shadow \n        before:transition-opacity\n        ").concat(s?"before:opacity-100":"before:opacity-20","\n      "),ref:c,onMouseEnter:d,onMouseLeave:h},(0,o.jsx)("a",{href:i,children:r}))}var S={h1:function(e){var t=e.children;return(0,o.jsx)(R,{component:"h1",className:"text-5xl",children:t})},h2:function(e){var t=e.children;return(0,o.jsx)(R,{component:"h1",className:"text-4xl",children:t})},h3:function(e){var t=e.children;return(0,o.jsx)(R,{component:"h1",className:"mt-4 mb-2 text-3xl first:mt-0",children:t})},h4:function(e){var t=e.children;return(0,o.jsx)(R,{component:"h1",className:"text-2xl",children:t})},h5:function(e){var t=e.children;return(0,o.jsx)(R,{component:"h1",className:"text-xl",children:t})},h6:function(e){var t=e.children;return(0,o.jsx)(R,{component:"h1",className:"text-lg",children:t})},pre:function(e){var t=e.children,n=e.className,r=(0,p.useState)(!1),c=r[0],a=r[1],i=(0,p.useRef)(null),u=function(){var e,t,n=null===(t=i.current)||void 0===t?void 0:t.textContent;n&&(e=n,navigator.clipboard.writeText(e))},l=function(){a(!0)},s=function(){a(!1)};return(0,o.jsxs)("div",{className:"relative",onMouseEnter:l,onMouseLeave:s,children:[(0,o.jsx)("pre",{className:"".concat(n," ").concat(k().root),ref:i,children:t}),(0,o.jsx)("div",{className:"absolute top-0 right-0 p-2 transition-opacity ".concat(c?"opacity-100":"opacity-20"),children:(0,o.jsx)("button",{onClick:u,className:"h-8 w-8",children:(0,o.jsx)(L,{className:"text-white"})})})]})},ul:function(e){var t=e.children;return(0,o.jsx)("ul",{className:"ml-6 list-disc",children:t})},ol:function(e){var t=e.children;return(0,o.jsx)("ul",{className:"ml-6 list-decimal",children:t})}},P=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(M.Zo,{components:S,children:(0,o.jsx)(E,{children:(0,o.jsx)(t,(0,r.Z)({},n))})})},A=P},7873:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});var r=function(e,t){return e.map(function(e,n){var r;return[n>0&&("string"==typeof t?t:t(n)),e,]})}},7940:function(e){e.exports={root:"PreCode_root__xLDqa"}},6764:function(){},1720:function(){},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function c(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===c||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:c}catch(e){t=c}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(r){n=a}}();var u=[],l=!1,s=-1;function f(){l&&r&&(l=!1,r.length?u=r.concat(u):s=-1,u.length&&d())}function d(){if(!l){var e=i(f);l=!0;for(var t=u.length;t;){for(r=u,u=[];++s<t;)r&&r[s].run();s=-1,t=u.length}r=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={exports:{}},a=!0;try{t[e](c,c.exports,r),a=!1}finally{a&&delete n[e]}return c.exports}r.ab="//";var o=r(229);e.exports=o}()},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},1151:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},ah:function(){return c}});var r=n(7294);let o=r.createContext({});function c(e){let t=r.useContext(o);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function i({components:e,children:t,disableParentContext:n}){let i=c(e);return n&&(i=e||a),r.createElement(o.Provider,{value:i},t)}},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}n.d(t,{Z:function(){return o}})},797:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);