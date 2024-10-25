"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[36767],{42059:(e,n,s)=>{s.d(n,{Ay:()=>c,RM:()=>o});var r=s(86070),t=s(15658);const o=[];function i(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["In this guide, we assume you have basic knowledge of Logto Connectors. If you don't, check out the ",(0,r.jsx)(n.a,{href:"/docs/recipes/configure-connectors/",children:"Configure connectors"})," guide to get started."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},48927:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(86070),t=s(15658),o=s(42059);const i={slug:"/integrations/smsaero",sidebar_label:"SMS Aero",sidebar_custom_props:{description:"SMS Aero offers users to use SMS-mailing in 5 minutes without viewing the contract. Developers are offered a convenient API with accessible classes and 24x7 chat support."}},c="SMSAero short message service connector",d={id:"integrations/sms/smsaero/README",title:"README",description:"The official Logto connector for SMSAero short message service.",source:"@site/docs/integrations/sms/smsaero/README.mdx",sourceDirName:"integrations/sms/smsaero",slug:"/integrations/smsaero",permalink:"/integrations/smsaero",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/integrations/sms/smsaero/README.mdx",tags:[],version:"current",frontMatter:{slug:"/integrations/smsaero",sidebar_label:"SMS Aero",sidebar_custom_props:{description:"SMS Aero offers users to use SMS-mailing in 5 minutes without viewing the contract. Developers are offered a convenient API with accessible classes and 24x7 chat support."}},sidebar:"integrationsSidebar",previous:{title:"Aliyun Short Message",permalink:"/integrations/aliyun-sms"},next:{title:"Tencent Short Message",permalink:"/integrations/tencent-sms"}},l={},a=[...o.RM,{value:"Register account",id:"register-account",level:2},{value:"Get account credentials",id:"get-account-credentials",level:2},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:2},{value:"Test SMSAero connector",id:"test-smsaero-connector",level:3},{value:"Config types",id:"config-types",level:3},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Ay,{}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"smsaero-short-message-service-connector",children:"SMSAero short message service connector"})}),"\n",(0,r.jsx)(n.p,{children:"The official Logto connector for SMSAero short message service."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Table of contents"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#smsaero-short-message-service-connector",children:"SMSAero short message service connector"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#register-account",children:"Register account"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#set-up-senders-phone-numbers",children:"Set up senders' phone numbers"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#get-account-credentials",children:"Get account credentials"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#test-smsaero-connector",children:"Test SMSAero connector"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#config-types",children:"Config types"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#reference",children:"Reference"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"register-account",children:"Register account"}),"\n",(0,r.jsxs)(n.p,{children:["Create a new account on ",(0,r.jsx)(n.a,{href:"https://smsaero.ru/",children:"SMSAero"}),". (Jump to the next step if you already have one.)"]}),"\n",(0,r.jsx)(n.h2,{id:"get-account-credentials",children:"Get account credentials"}),"\n",(0,r.jsxs)(n.p,{children:["We will need the API credentials to make the connector work. Let's begin from\nthe ",(0,r.jsx)(n.a,{href:"https://smsaero.ru/cabinet/settings/apikey/",children:"API and SMPP"}),"."]}),"\n",(0,r.jsx)(n.p,{children:'Copy "API-key" or generate new one.'}),"\n",(0,r.jsx)(n.h2,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,r.jsxs)(n.p,{children:["Fill out the ",(0,r.jsx)(n.em,{children:"email"}),", ",(0,r.jsx)(n.em,{children:"apiKey"})," and ",(0,r.jsx)(n.em,{children:"senderName"})," fields with your email, API key and sender name."]}),"\n",(0,r.jsx)(n.p,{children:'You can fill sender name with "SMSAero" to use default sender name provided by SMSAero.'}),"\n",(0,r.jsx)(n.p,{children:"You can add multiple SMS connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Fill out the ",(0,r.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave ",(0,r.jsx)(n.code,{children:"{{code}}"})," placeholder for\nrandom verification code."]}),"\n",(0,r.jsxs)(n.li,{children:["Fill out the ",(0,r.jsx)(n.code,{children:"usageType"})," field with either ",(0,r.jsx)(n.code,{children:"Register"}),", ",(0,r.jsx)(n.code,{children:"SignIn"}),", ",(0,r.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,r.jsx)(n.code,{children:"Generic"})," for different use cases.\nIn order to enable full user flows, templates with usageType ",(0,r.jsx)(n.code,{children:"Register"}),", ",(0,r.jsx)(n.code,{children:"SignIn"}),", ",(0,r.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,r.jsx)(n.code,{children:"Generic"})," are\nrequired."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"test-smsaero-connector",children:"Test SMSAero connector"}),"\n",(0,r.jsx)(n.p,{children:'You can enter a phone number and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,r.jsxs)(n.p,{children:["That's it. Don't forget\nto ",(0,r.jsx)(n.a,{href:"https://docs.logto.io/docs/recipes/configure-connectors/sms-connector/enable-SMS-sign-in/",children:"Enable connector in sign-in experience"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"config-types",children:"Config types"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"email"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"apiKey"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"senderName"}),(0,r.jsx)(n.td,{children:"string"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"templates"}),(0,r.jsx)(n.td,{children:"Templates[]"})]})]})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Template Properties"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Enum values"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"content"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"N/A"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"usageType"}),(0,r.jsx)(n.td,{children:"enum string"}),(0,r.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://smsaero.ru/integration/documentation/api/",children:"SMSAero API Documentation"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},15658:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var r=s(30758);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);