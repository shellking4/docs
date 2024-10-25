"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[56872],{42059:(e,n,i)=>{i.d(n,{Ay:()=>s,RM:()=>r});var o=i(86070),t=i(15658);const r=[];function c(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,o.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function s(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2901:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>a});var o=i(86070),t=i(15658),r=i(42059);const c={slug:"/integrations/naver",sidebar_label:"Naver",sidebar_custom_props:{description:"Naver is the most leading internet service provider in South Korea."}},s="Naver Connector",l={id:"integrations/social/naver/README",title:"README",description:"The Naver connector provides a succinct way for your application to use Naver\u2019s OAuth 2.0 authentication system.",source:"@site/docs/integrations/social/naver/README.mdx",sourceDirName:"integrations/social/naver",slug:"/integrations/naver",permalink:"/integrations/naver",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/social/naver/README.mdx",tags:[],version:"current",frontMatter:{slug:"/integrations/naver",sidebar_label:"Naver",sidebar_custom_props:{description:"Naver is the most leading internet service provider in South Korea."}},sidebar:"integrationsSidebar",previous:{title:"Kakao",permalink:"/integrations/kakao"},next:{title:"OAuth 2.0 (Social)",permalink:"/integrations/oauth2"}},d={},a=[...r.RM,{value:"Developer Site Only Korean Support Now",id:"developer-site-only-korean-support-now",level:2},{value:"For the Production",id:"for-the-production",level:2},{value:"Set up a project in the Naver Developers",id:"set-up-a-project-in-the-naver-developers",level:2},{value:"Application Name (\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984)",id:"application-name-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc774\ub984",level:3},{value:"API Usage (\uc0ac\uc6a9 API)",id:"api-usage-\uc0ac\uc6a9-api",level:3},{value:"Sign in Open API Service Environment (\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd)",id:"sign-in-open-api-service-environment-\ub85c\uadf8\uc778-\uc624\ud508-api-\uc11c\ube44\uc2a4-\ud658\uacbd",level:3},{value:"PC Web (PC \uc6f9)",id:"pc-web-pc-\uc6f9",level:4},{value:"Mobile Web (Mobile \uc6f9)",id:"mobile-web-mobile-\uc6f9",level:4},{value:"Configure Logto",id:"configure-logto",level:2},{value:"Config types",id:"config-types",level:3},{value:"clientId",id:"clientid",level:4},{value:"clientSeceret",id:"clientseceret",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Ay,{}),"\n",(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"naver-connector",children:"Naver Connector"})}),"\n",(0,o.jsx)(n.p,{children:"The Naver connector provides a succinct way for your application to use Naver\u2019s OAuth 2.0 authentication system."}),"\n",(0,o.jsx)(n.h2,{id:"developer-site-only-korean-support-now",children:"Developer Site Only Korean Support Now"}),"\n",(0,o.jsxs)(n.p,{children:["Currently ",(0,o.jsx)(n.code,{children:"Naver Developers"})," site only supports Korean. Please consider use a translator."]}),"\n",(0,o.jsx)(n.h2,{id:"for-the-production",children:"For the Production"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For the production, you have to get review from Naver team.\nOtherwise, only registered users can sign in.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You can add a tester from ",(0,o.jsx)(n.code,{children:"\ub9f4\ubc84\uad00\ub9ac(Member Manage)"})," menu."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["To get a review, please check ",(0,o.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \uc0c1\ud0dc(Application Devlopment Status)"}),"\nfrom ",(0,o.jsx)(n.code,{children:"API \uc124\uc815(API Setting)"})," from your application project setting."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"set-up-a-project-in-the-naver-developers",children:"Set up a project in the Naver Developers"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Visit the ",(0,o.jsx)(n.a,{href:"https://developers.naver.com/main/",children:"Naver Developers"})," and sign in with your Naver account."]}),"\n",(0,o.jsxs)(n.li,{children:["Click the ",(0,o.jsx)(n.strong,{children:"Application -> \uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \ub4f1\ub85d"})," from the menu to create new project."]}),"\n",(0,o.jsx)(n.li,{children:"Follow the instruction below to create application."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"application-name-\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158-\uc774\ub984",children:"Application Name (\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Type your application name on ",(0,o.jsx)(n.code,{children:"\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uc774\ub984"})," (This name is shown while a user sign in.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"api-usage-\uc0ac\uc6a9-api",children:"API Usage (\uc0ac\uc6a9 API)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Choose ",(0,o.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login)"})," for ",(0,o.jsx)(n.code,{children:"\uc0ac\uc6a9 API(API Usage)"})]}),"\n",(0,o.jsxs)(n.li,{children:["Check ",(0,o.jsx)(n.code,{children:"\uc774\uba54\uc77c \uc8fc\uc18c(Email Address), \ubcc4\uba85(Nickname), \ud504\ub85c\ud544 \uc0ac\uc9c4(Profile Image)"})," as ",(0,o.jsx)(n.code,{children:"\ud544\uc218(Neccessary)"})," from ",(0,o.jsx)(n.code,{children:"\uad8c\ud55c(Role)"})," (You can check ",(0,o.jsx)(n.code,{children:"\ucd94\uac00(Add)"})," as optional these options, but you cannot get the information from the user.)"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"sign-in-open-api-service-environment-\ub85c\uadf8\uc778-\uc624\ud508-api-\uc11c\ube44\uc2a4-\ud658\uacbd",children:"Sign in Open API Service Environment (\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For ",(0,o.jsx)(n.code,{children:"\ub85c\uadf8\uc778 \uc624\ud508 API \uc11c\ube44\uc2a4 \ud658\uacbd(Sign in Open API Service Environment)"}),", add two environment ",(0,o.jsx)(n.code,{children:"PC\uc6f9(PC Web)"})," and ",(0,o.jsx)(n.code,{children:"\ubaa8\ubc14\uc77c\uc6f9(Mobile Web)"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"pc-web-pc-\uc6f9",children:"PC Web (PC \uc6f9)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For ",(0,o.jsx)(n.code,{children:"\uc11c\ube44\uc2a4 URL(Service URL)"}),", type ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL"})," (ex. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"https://logto.io"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["For ",(0,o.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login) Callback URL"}),", type ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (e.g. ",(0,o.jsx)(n.a,{href:"https://logto.io/callback/$%7Bconnector_id%7D",children:"https://logto.io/callback/${connector_id}"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"mobile-web-mobile-\uc6f9",children:"Mobile Web (Mobile \uc6f9)"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["For ",(0,o.jsx)(n.code,{children:"\uc11c\ube44\uc2a4 URL(Service URL)"}),", type ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL"})," (ex. ",(0,o.jsx)(n.a,{href:"https://logto.io",children:"https://logto.io"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["For ",(0,o.jsx)(n.code,{children:"\ub124\uc774\ubc84 \ub85c\uadf8\uc778(Naver Login) Callback URL"}),", type ",(0,o.jsx)(n.code,{children:"http(s)://YOUR_URL/callback/${connector_id}"})," (e.g. ",(0,o.jsx)(n.a,{href:"https://logto.io/callback/$%7Bconnector_id%7D",children:"https://logto.io/callback/${connector_id}"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u26a0\ufe0f ",(0,o.jsx)(n.strong,{children:"Caution"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configure-logto",children:"Configure Logto"}),"\n",(0,o.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientId"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"clientSecret"}),(0,o.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"clientid",children:"clientId"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientId"})," is ",(0,o.jsx)(n.code,{children:"Client ID"})," of your project.\n(You can find it from ",(0,o.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc815\ubcf4(Application Info)"})," of your project from Naver developers.)"]}),"\n",(0,o.jsx)(n.h4,{id:"clientseceret",children:"clientSeceret"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"clientSecret"})," is ",(0,o.jsx)(n.code,{children:"Client Secret"})," of your project.\n(You can find it from ",(0,o.jsx)(n.code,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc815\ubcf4(Application Info)"})," of your project from Naver developers.)"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},15658:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>s});var o=i(30758);const t={},r=o.createContext(t);function c(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);