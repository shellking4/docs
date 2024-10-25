"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[13700],{13014:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(86070),s=n(15658),o=n(6265);const r={sidebar_label:"Integrations"},a="Integrations",c={id:"integrations/README",title:"Integrations",description:"Welcome to Logto integrations documentation. This documentation contains useful guides for integrating a third-party auth service with Logto, via Logto connectors.",source:"@site/docs/integrations/README.md",sourceDirName:"integrations",slug:"/integrations/",permalink:"/integrations/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/README.md",tags:[],version:"current",frontMatter:{sidebar_label:"Integrations"},sidebar:"integrationsSidebar",next:{title:"Alipay (Native)",permalink:"/integrations/alipay-native"}},l={},d=[];function u(t){const e={h1:"h1",header:"header",hr:"hr",p:"p",...(0,s.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"integrations",children:"Integrations"})}),"\n",(0,i.jsx)(e.p,{children:"Welcome to Logto integrations documentation. This documentation contains useful guides for integrating a third-party auth service with Logto, via Logto connectors."}),"\n",(0,i.jsx)(e.hr,{}),"\n","\n",(0,i.jsx)(o.A,{path:"integrations"})]})}function g(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(u,{...t})}):u(t)}},6265:(t,e,n)=>{n.d(e,{A:()=>m});var i=n(16725);const s=n.p+"assets/images/fallback-66ddf4fb49bcc69c4cd03185821c39e1.png",o="gallery_quUO",r="categoryLabel_e2Fz",a="list_pn7N",c="link_nE2A",l="logo_cMIT",d="title_bbn1",u="subtitle_ppeR";var g=n(86070);const h=t=>t?String(t):void 0,m=t=>{let{path:e}=t;const n=`/${e}/`,m=(0,i.t)();if(!m)return null;const p=m.items.reduce(((t,e)=>{if("link"!==e.type)return t;if(e.unlisted||e.href===n)return t;if("#"===e.href)return[...t,{label:e.label+(e.customProps?.additionalLabel?` ${String(e.customProps.additionalLabel)}`:""),description:h(e.customProps?.description),items:[]}];if(!e.href.startsWith(n))return t;const i=t.at(-1);return i?[...t.slice(0,-1),{...i,items:[...i.items,{label:e.label,href:e.href,logoFilename:h(e.customProps?.logoFilename),description:h(e.customProps?.description)}]}]:t}),[]);return(0,g.jsx)("section",{className:o,children:p.map((t=>(0,g.jsxs)("div",{children:[(0,g.jsx)("h2",{className:r,children:t.label}),(0,g.jsx)("section",{className:a,children:t.items.map((t=>(0,g.jsxs)("a",{href:t.href,className:c,title:t.description,children:[(0,g.jsx)("img",{className:l,alt:"Logo",src:`/img/logo/${t.logoFilename||`${t.href.slice(n.length)}.svg`}`,onError:t=>{let{currentTarget:e}=t;e.src=s}}),(0,g.jsx)("span",{className:d,children:t.label}),(0,g.jsx)("span",{className:u,children:t.description})]},t.href)))})]},t.label)))})}},15658:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var i=n(30758);const s={},o=i.createContext(s);function r(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);