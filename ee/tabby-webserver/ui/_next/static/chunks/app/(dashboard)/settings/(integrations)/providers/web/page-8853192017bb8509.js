(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1102],{14375:function(e,t,n){"use strict";n.d(t,{j:function(){return l}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},l=(e,t)=>n=>{var l;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:a}=t,s=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],i=null==a?void 0:a[e];if(null===t)return null;let l=r(t)||r(i);return o[e][l]}),u=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(l=t.compoundVariants)||void 0===l?void 0:l.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...u}[t]):({...a,...u})[t]===n})?[...e,n,r]:e},[]);return i(e,s,c,null==n?void 0:n.class,null==n?void 0:n.className)}},10881:function(e,t,n){Promise.resolve().then(n.bind(n,4841))},55137:function(e,t,n){"use strict";n.d(t,{_:function(){return m}});var r=n(36164),i=n(3546),l=n(70652),o=n.n(l),a=n(99092),s=n.n(a),u=n(31458),c=n(81565),d=n(29);function f(e){let{onTrigger:t,isPending:n}=e,[l,o]=i.useState(!1);return(0,r.jsxs)(d.u,{children:[(0,r.jsx)(d.aJ,{asChild:!0,children:(0,r.jsx)(u.z,{size:"icon",variant:"ghost",onClick:()=>{let e=t();return e&&e instanceof Promise&&(o(!0),e.finally(()=>o(!1))),e},disabled:l||n,children:l||n?(0,r.jsx)(c.IconSpinner,{}):(0,r.jsx)(c.IconCirclePlay,{strokeWidth:1,className:"h-5 w-5"})})}),(0,r.jsx)(d._v,{children:(0,r.jsx)("p",{children:"Run"})})]})}function v(e){let{jobInfo:t}=e;return(null==t?void 0:t.lastJobRun)?(0,r.jsx)(o(),{href:"/jobs/detail?id=".concat(t.lastJobRun.id),className:"flex items-center gap-1 underline hover:text-foreground/50",children:s()(t.lastJobRun.createdAt).format("YYYY-MM-DD HH:mm")}):null}function m(e){let{jobInfo:t,onTrigger:n}=e,i=!!(null==t?void 0:t.lastJobRun)&&null===t.lastJobRun.exitCode;return(0,r.jsxs)("div",{className:"flex flex-col items-center gap-1 lg:flex-row",children:[(0,r.jsx)(v,{jobInfo:t}),(0,r.jsx)(f,{onTrigger:n,isPending:i})]})}},14522:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(43240);let i=(0,r.BX)("\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n")},4841:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(36164),i=n(70652),l=n.n(i),o=n(31458),a=n(3546),s=n(2578),u=n(40055),c=n(21808),d=n(43240),f=n(11634),v=n(70410),m=n(81565),x=n(49506),h=n(99047),b=n(6230),g=n(55137),p=n(14522);let j=(0,d.BX)("\n  mutation DeleteWebCrawlerUrl($id: ID!) {\n    deleteWebCrawlerUrl(id: $id)\n  }\n"),N=c.L8;function y(){var e,t;let[n,i]=a.useState(),[{data:l,fetching:c},d]=(0,u.aM)({query:v.XP,variables:{last:N,before:n}}),[y,w]=a.useState(1),_=a.useMemo(()=>{var e,t;return null==l?void 0:null===(t=l.webCrawlerUrls)||void 0===t?void 0:null===(e=t.edges)||void 0===e?void 0:e.slice().reverse()},[null==l?void 0:null===(e=l.webCrawlerUrls)||void 0===e?void 0:e.edges]),C=null==l?void 0:null===(t=l.webCrawlerUrls)||void 0===t?void 0:t.pageInfo,R=Math.ceil(((null==_?void 0:_.length)||0)/N),T=a.useMemo(()=>{var e;return null==_?void 0:null===(e=_.slice)||void 0===e?void 0:e.call(_,(y-1)*N,y*N)},[y,_]),O=(null==C?void 0:C.hasPreviousPage)||y<R,S=y>1,Z=!!(null==T?void 0:T.length)&&(O||S),E=e=>{var t,n;return null==_?void 0:null===(n=_.slice(0,(e-1)*N))||void 0===n?void 0:null===(t=n.pop())||void 0===t?void 0:t.cursor},A=e=>{i(E(e))},I=(0,f.D)(p.C),k=e=>I({command:e}).then(e=>{var t,n;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.triggerJobRun)?(s.A.success("The job has been triggered successfully, it may take a few minutes to process."),d()):s.A.error((null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to trigger job")}),P=(0,f.D)(j),M=(e,t)=>{P({id:e}).then(e=>{var n,r;(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.deleteWebCrawlerUrl)?A(t?y-1:y):s.A.error((null==e?void 0:null===(r=e.error)||void 0===r?void 0:r.message)||"Failed to delete")})};return a.useEffect(()=>{!c&&R<y&&y>1&&w(R)},[R,y]),(0,r.jsxs)(b.Z,{loading:c,children:[(0,r.jsxs)(h.iA,{className:"table-fixed border-b",children:[(0,r.jsx)(h.xD,{children:(0,r.jsxs)(h.SC,{children:[(0,r.jsx)(h.ss,{className:"w-[70%]",children:"URL"}),(0,r.jsx)(h.ss,{children:"Job"}),(0,r.jsx)(h.ss,{className:"w-[100px]"})]})}),(0,r.jsx)(h.RM,{children:(null==T?void 0:T.length)||1!==y?(0,r.jsx)(r.Fragment,{children:null==T?void 0:T.map(e=>(0,r.jsxs)(h.SC,{children:[(0,r.jsx)(h.pj,{className:"break-all lg:break-words",children:e.node.url}),(0,r.jsx)(h.pj,{children:(0,r.jsx)(g._,{jobInfo:e.node.jobInfo,onTrigger:()=>k(e.node.jobInfo.command)})}),(0,r.jsx)(h.pj,{className:"text-right",children:(0,r.jsx)(o.z,{size:"icon",variant:"hover-destructive",onClick:()=>M(e.node.id,1===T.length),children:(0,r.jsx)(m.IconTrash,{})})})]},e.node.id))}):(0,r.jsx)(h.SC,{children:(0,r.jsx)(h.pj,{colSpan:4,className:"h-[100px] text-center",children:"No Data"})})})]}),Z&&(0,r.jsx)(x.tl,{className:"my-4",children:(0,r.jsxs)(x.ng,{children:[(0,r.jsx)(x.nt,{children:(0,r.jsx)(x.dN,{disabled:!S,onClick:()=>{if(y<=1||c)return;let e=y-1;A(e),w(e)}})}),(0,r.jsx)(x.nt,{children:(0,r.jsx)(x.$0,{disabled:!O,onClick:()=>{if(!O||c)return;let e=y+1;A(e),w(e)}})})]})})]})}function w(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mt-4 flex justify-end",children:(0,r.jsx)(l(),{href:"./web/new",className:(0,o.d)(),children:"Create"})}),(0,r.jsx)(y,{})]})}},6230:function(e,t,n){"use strict";var r=n(36164),i=n(3546),l=n(24449),o=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:a,children:s}=e,[u,c]=i.useState(!t),[d]=(0,l.n)(u,null!=a?a:200);return(i.useEffect(()=>{t||u||c(!0)},[t]),d)?s:n||(0,r.jsx)(o.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return s},cg:function(){return o},tB:function(){return a}});var r=n(36164),i=n(74248),l=n(3448);let o=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("space-y-3",t),...n,children:[(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-full"})]})},a=e=>{let{className:t,...n}=e;return(0,r.jsx)(l.O,{className:(0,i.cn)("h-4 w-full",t),...n})},s=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(l.O,{className:"h-4 w-full"}),(0,r.jsx)(l.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(l.O,{className:"h-4 w-full"})]})}},31458:function(e,t,n){"use strict";n.d(t,{d:function(){return s},z:function(){return u}});var r=n(36164),i=n(3546),l=n(74047),o=n(14375),a=n(74248);let s=(0,o.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),u=i.forwardRef((e,t)=>{let{className:n,variant:i,size:o,asChild:u=!1,...c}=e,d=u?l.g7:"button";return(0,r.jsx)(d,{className:(0,a.cn)(s({variant:i,size:o,className:n})),ref:t,...c})});u.displayName="Button"},49506:function(e,t,n){"use strict";n.d(t,{$0:function(){return v},dN:function(){return f},ng:function(){return u},nt:function(){return c},tl:function(){return s}});var r=n(36164),i=n(3546),l=n(74248),o=n(31458),a=n(81565);let s=e=>{let{className:t,...n}=e;return(0,r.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,l.cn)("mx-auto flex w-full justify-center",t),...n})};s.displayName="Pagination";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("ul",{ref:t,className:(0,l.cn)("flex flex-row items-center gap-1",n),...i})});u.displayName="PaginationContent";let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("li",{ref:t,className:(0,l.cn)("",n),...i})});c.displayName="PaginationItem";let d=e=>{let{className:t,isActive:n,size:i="icon",...a}=e;return(0,r.jsx)("a",{"aria-current":n?"page":void 0,className:(0,l.cn)((0,o.d)({variant:n?"outline":"ghost",size:i}),t),...a})};d.displayName="PaginationLink";let f=e=>{let{className:t,disabled:n,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to previous page",size:"default",className:(0,l.cn)("cursor-pointer gap-1 pl-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,r.jsx)(a.IconChevronLeft,{className:"h-4 w-4"}),(0,r.jsx)("span",{children:"Previous"})]})};f.displayName="PaginationPrevious";let v=e=>{let{className:t,disabled:n,...i}=e;return(0,r.jsxs)(d,{"aria-label":"Go to next page",size:"default",className:(0,l.cn)("cursor-pointer gap-1 pr-2.5",n&&"cursor-not-allowed text-muted-foreground",t),...i,children:[(0,r.jsx)("span",{children:"Next"}),(0,r.jsx)(a.IconChevronRight,{className:"h-4 w-4"})]})};v.displayName="PaginationNext"},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var r=n(36164),i=n(74248);function l(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},99047:function(e,t,n){"use strict";n.d(t,{RM:function(){return s},SC:function(){return c},iA:function(){return o},pj:function(){return f},ss:function(){return d},xD:function(){return a}});var r=n(36164),i=n(3546),l=n(74248);let o=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("table",{ref:t,className:(0,l.cn)("w-full caption-bottom text-sm",n),...i})});o.displayName="Table";let a=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("thead",{ref:t,className:(0,l.cn)("[&_tr]:border-b",n),...i})});a.displayName="TableHeader";let s=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,l.cn)("[&_tr:last-child]:border-0",n),...i})});s.displayName="TableBody";let u=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,l.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...i})});u.displayName="TableFooter";let c=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("tr",{ref:t,className:(0,l.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...i})});c.displayName="TableRow";let d=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("th",{ref:t,className:(0,l.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...i})});d.displayName="TableHead";let f=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("td",{ref:t,className:(0,l.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",n),...i})});f.displayName="TableCell";let v=i.forwardRef((e,t)=>{let{className:n,...i}=e;return(0,r.jsx)("caption",{ref:t,className:(0,l.cn)("mt-4 text-sm text-muted-foreground",n),...i})});v.displayName="TableCaption"},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return u},pn:function(){return a},u:function(){return s}});var r=n(36164),i=n(3546),l=n(44421),o=n(74248);let a=l.zt,s=l.fC,u=l.xz,c=i.forwardRef((e,t)=>{let{className:n,sideOffset:i=4,...a}=e;return(0,r.jsx)(l.VY,{ref:t,sideOffset:i,className:(0,o.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...a})});c.displayName=l.VY.displayName},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return l},L8:function(){return i},o0:function(){return r}});let r="name@yourcompany.com",i=20,l={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_EXTRA_CONTEXT:"_tabby_search_initial_extra_context",SEARCH_LATEST_MSG:"_tabby_search_latest_msg",SEARCH_LATEST_EXTRA_CONTEXT:"_tabby_search_latest_extra_context",SEARCH_SELECTED_REPO:"_tabby_search_selected_repo"}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return a},n:function(){return s}});var r=n(3546),i=n(45391),l=n(16784);let o=e=>{let t=(0,l.d)(e);r.useEffect(()=>()=>{t.current()},[])};function a(e,t,n){let a=(0,l.d)(e),s=r.useMemo(()=>(0,i.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return a.current(...t)},t,n),[]);return o(()=>{var e;null==n||null===(e=n.onUnmount)||void 0===e||e.call(n,s),s.cancel()}),{run:s,cancel:s.cancel,flush:s.flush}}function s(e,t,n){let[i,l]=r.useState(e),{run:o}=a(()=>{l(e)},t,n);return r.useEffect(()=>{o()},[e]),[i,l]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return i}});var r=n(3546);function i(e){let t=r.useRef(e);return t.current=e,t}},70652:function(e,t,n){e.exports=n(54007)},29434:function(e,t,n){"use strict";n.d(t,{M:function(){return s}});var r,i=n(3546),l=n(65292);let o=(r||(r=n.t(i,2)))["useId".toString()]||(()=>void 0),a=0;function s(e){let[t,n]=i.useState(o());return(0,l.b)(()=>{e||n(e=>null!=e?e:String(a++))},[e]),e||(t?`radix-${t}`:"")}},7600:function(e,t,n){"use strict";var r=n(48717).Z.Symbol;t.Z=r},17996:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7600),i=Object.prototype,l=i.hasOwnProperty,o=i.toString,a=r.Z?r.Z.toStringTag:void 0,s=function(e){var t=l.call(e,a),n=e[a];try{e[a]=void 0;var r=!0}catch(e){}var i=o.call(e);return r&&(t?e[a]=n:delete e[a]),i},u=Object.prototype.toString,c=r.Z?r.Z.toStringTag:void 0,d=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?s(e):u.call(e)}},64380:function(e,t){"use strict";var n="object"==typeof global&&global&&global.Object===Object&&global;t.Z=n},48717:function(e,t,n){"use strict";var r=n(64380),i="object"==typeof self&&self&&self.Object===Object&&self,l=r.Z||i||Function("return this")();t.Z=l},6670:function(e,t){"use strict";var n=/\s/;t.Z=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},45391:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(84639),i=n(48717),l=function(){return i.Z.Date.now()},o=n(91971),a=Math.max,s=Math.min,u=function(e,t,n){var i,u,c,d,f,v,m=0,x=!1,h=!1,b=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=i,r=u;return i=u=void 0,m=t,d=e.apply(r,n)}function p(e){var n=e-v,r=e-m;return void 0===v||n>=t||n<0||h&&r>=c}function j(){var e,n,r,i=l();if(p(i))return N(i);f=setTimeout(j,(e=i-v,n=i-m,r=t-e,h?s(r,c-n):r))}function N(e){return(f=void 0,b&&i)?g(e):(i=u=void 0,d)}function y(){var e,n=l(),r=p(n);if(i=arguments,u=this,v=n,r){if(void 0===f)return m=e=v,f=setTimeout(j,t),x?g(e):d;if(h)return clearTimeout(f),f=setTimeout(j,t),g(v)}return void 0===f&&(f=setTimeout(j,t)),d}return t=(0,o.Z)(t)||0,(0,r.Z)(n)&&(x=!!n.leading,c=(h="maxWait"in n)?a((0,o.Z)(n.maxWait)||0,t):c,b="trailing"in n?!!n.trailing:b),y.cancel=function(){void 0!==f&&clearTimeout(f),m=0,i=v=u=f=void 0},y.flush=function(){return void 0===f?d:N(l())},y}},84639:function(e,t){"use strict";t.Z=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},96786:function(e,t){"use strict";t.Z=function(e){return null!=e&&"object"==typeof e}},55357:function(e,t,n){"use strict";var r=n(17996),i=n(96786);t.Z=function(e){return"symbol"==typeof e||(0,i.Z)(e)&&"[object Symbol]"==(0,r.Z)(e)}},91971:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(6670),i=/^\s+/,l=n(84639),o=n(55357),a=0/0,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,f=function(e){if("number"==typeof e)return e;if((0,o.Z)(e))return a;if((0,l.Z)(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=(0,l.Z)(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,(0,r.Z)(t)+1).replace(i,""):t;var f=u.test(e);return f||c.test(e)?d(e.slice(2),f?2:8):s.test(e)?a:+e}}},function(e){e.O(0,[7565,7998,5498,6312,4007,9739,1283,3449,2578,4421,9736,1565,3396,3375,5289,1744],function(){return e(e.s=10881)}),_N_E=e.O()}]);