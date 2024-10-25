"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[56719],{42059:(e,n,i)=>{i.d(n,{Ay:()=>s,RM:()=>c});var o=i(86070),t=i(15658);const c=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,o.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},5194:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=i(86070),t=i(15658),c=i(42059);const r={slug:"/integrations/kakao",sidebar_label:"Kakao",sidebar_custom_props:{description:"Kakao is a famous social network service provider in South Korea."}},s="Kakao Connector",l={id:"integrations/social/kakao/README",title:"README",description:"The Kakao connector provides a succinct way for your application to use Kakao\u2019s OAuth 2.0 authentication system.",source:"@site/docs/integrations/social/kakao/README.mdx",sourceDirName:"integrations/social/kakao",slug:"/integrations/kakao",permalink:"/integrations/kakao",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/social/kakao/README.mdx",tags:[],version:"current",frontMatter:{slug:"/integrations/kakao",sidebar_label:"Kakao",sidebar_custom_props:{description:"Kakao is a famous social network service provider in South Korea."}},sidebar:"integrationsSidebar",previous:{title:"Hugging Face",permalink:"/integrations/huggingface"},next:{title:"Naver",permalink:"/integrations/naver"}},a={},d=[...c.RM,{value:"Set up a project in the Kakao Devlopers Console",id:"set-up-a-project-in-the-kakao-devlopers-console",level:2},{value:"Configure Kakao Login",id:"configure-kakao-login",level:2},{value:"Activate Kakao Login",id:"activate-kakao-login",level:3},{value:"Privacy Setting",id:"privacy-setting",level:3},{value:"Security Setting (Optional)",id:"security-setting-optional",level:3},{value:"Configure Logto",id:"configure-logto",level:2},{value:"Config types",id:"config-types",level:3},{value:"clientId",id:"clientid",level:4},{value:"clientSeceret",id:"clientseceret",level:4}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Ay,{}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"kakao-connector",children:"Kakao Connector"})}),"\n",(0,o.jsx)(n.p,{children:"The Kakao connector provides a succinct way for your application to use Kakao\u2019s OAuth 2.0 authentication system."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Table of contents"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#kakao-connector",children:"Kakao Connector"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#set-up-a-project-in-the-kakao-devlopers-console",children:"Set up a project in the Kakao Devlopers Console"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#configure-kakao-login",children:"Configure Kakao Login"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#activate-kakao-login",children:"Activate Kakao Login"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#privacy-setting",children:"Privacy Setting"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#security-setting-optional",children:"Security Setting (Optional)"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#configure-logto",children:"Configure Logto"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#clientid",children:"clientId"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#clientseceret",children:"clientSeceret"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"set-up-a-project-in-the-kakao-devlopers-console",children:"Set up a project in the Kakao Devlopers Console"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://developers.kakao.com/console/app",children:"Kakao Developers Console"})," and sign in with your Kakao account."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Add an application"})," to create new project or choose exist project."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configure-kakao-login",children:"Configure Kakao Login"}),"\n",(0,o.jsx)(n.h3,{id:"activate-kakao-login",children:"Activate Kakao Login"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Product Settings -> Kakao Login"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Turn on ",(0,o.jsx)(n.code,{children:"Kakao Login Activation"})]}),"\n",(0,o.jsxs)(n.li,{children:["Add below URL into ",(0,o.jsx)(n.code,{children:"Redirect URI"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page.)"]}),"\n",(0,o.jsxs)(n.li,{children:["(Please replace ",(0,o.jsx)(n.code,{children:"YOUR_URL"})," with your ",(0,o.jsx)(n.code,{children:"Logto"})," URL, and choose ",(0,o.jsx)(n.code,{children:"http"})," or ",(0,o.jsx)(n.code,{children:"https"})," on your situation.)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"privacy-setting",children:"Privacy Setting"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Consent Item"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Change state of ",(0,o.jsx)(n.code,{children:"Nickname"}),", ",(0,o.jsx)(n.code,{children:"Profile image"}),", and ",(0,o.jsx)(n.code,{children:"Email"})," to ",(0,o.jsx)(n.strong,{children:"Required consent"})," (You might not able to change ",(0,o.jsx)(n.code,{children:"Email"})," to ",(0,o.jsx)(n.strong,{children:"Required consent"})," because of your project setting.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"security-setting-optional",children:"Security Setting (Optional)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Product Settings -> Kakao Login -> Security"})," from the menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.code,{children:"Client secret code"})," to generate secret code."]}),"\n",(0,o.jsxs)(n.li,{children:["Change ",(0,o.jsx)(n.code,{children:"Activation state"})," to Enable. (If you enable it, ",(0,o.jsx)(n.code,{children:"secret code"})," is necessary.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configure-logto",children:"Configure Logto"}),"\n",(0,o.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string?"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientId"})," is ",(0,o.jsx)(n.code,{children:"REST API key"})," of your project.\n(You can find it from ",(0,o.jsx)(n.code,{children:"summary"})," of your project from Kakao developers console.)"]}),"\n",(0,o.jsx)(n.h4,{id:"clientseceret",children:"clientSeceret"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientSecret"})," is ",(0,o.jsx)(n.code,{children:"Secret Code"})," of your project.\n(Please check ",(0,o.jsx)(n.a,{href:"#security-setting-optional",children:"Security Setting (Optional)"}),")"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(30758);const t={},c=o.createContext(t);function r(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);